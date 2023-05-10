import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true,
    },
    myWork: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    avatarUrl: String,
    isVerifed: {
        type: Boolean,
        default: true,
    },

}, {
    timestamps: true,
});

export default mongoose.model('User', UserSchema);