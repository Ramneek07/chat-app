import Message from "../models/Message.js";
import User from "../models/User.js";
import cloudinary from "../ lib/cloudinary.js"; 
import { io, userSocketMap } from "../server.js";


// Get all users except the logged-in user
export const getUsersForSidebar = async (req, res) => {
    try {
        const userId = req.user._id;
        const filteredUsers = await User.find({ _id: { $ne: userId } }).select("-password");

        // Count number of messeges not seen by the user
        const unseenMessages = {}
        const promises = filteredUsers.map(async (user) => {
            const messeges = await Message.find({senderId : user._id, receiverId: userId, seen: false});
            if (messeges.length > 0) {
                unseenMessages[user._id] = messeges.length;
            }
        })
        await Promise.all(promises);
        res.json({ 
            success: true,
            users: filteredUsers,
            unseenMessages
        });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}

// Get all messages for selected user
export const getMessages = async (req, res) => {
    try {
        const { id: selectedUserId } = req.params;
        const myId = req.user._id;

        const messages = await Message.find({
            $or: [
                { senderId: myId, receiverId: selectedUserId },
                { senderId: selectedUserId, receiverId: myId }
            ]
        })
        await Message.updateMany(
            { senderId: selectedUserId, receiverId: myId},
            { seen: true } 
        );

        res.json({
            success: true,
            messages
        });

    } catch (error) {
        log.error(error.message);
        res.json({ success: false, message: error.message });
    }
}

// api to mark messages as seen using message id
export const markMessagesAsSeen = async (req, res) => {
    try {
        const { id } = req.params;
        await Message.findByIdAndUpdate(id, { seen: true });
        res.json({ success: true });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });      
    }
}

// Send messages to selected user
export const sendMessage = async (req, res) => {
    try {
        const { text, image } = req.body;
        const receiverId = req.params.id;
        const senderId = req.user._id;

        let imageUrl;
        if(image){
            const uploadResponse = await cloudinary.uploader.upload(image)
            imageUrl = uploadResponse.secure_url;
        }

        const newMessage = await Message.create({
            senderId,
            receiverId,
            text,
            image: imageUrl
        });

        // Emit the new message to the receiver
        const receiverSocketId = userSocketMap[receiverId];
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        res.json({ success: true, newMessage });

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}