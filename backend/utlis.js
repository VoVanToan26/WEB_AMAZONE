// define t SOME ultility function like generateToken export const jena rate tokan
import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
    // obj user for generateToken, josonwetoken secret, 
    return jwt.sign(
        {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        },
        // create data to encrypt
        process.env.JWT_SECRET || 'somethingsecret',
        {
            expiresIn: '30d',
        }
    );
};