import jwt from 'jsonwebtoken';

export default function createToken(user) {
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
        expiresIn: '30m' // 30 minutes
    });
    return token;
}
