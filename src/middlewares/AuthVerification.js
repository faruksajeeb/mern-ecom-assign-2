const { DecodeToken } = require("../helpers/TokenHelper");

module.exports = (req, res, next) => {

    let token = req.headers['token'] || req.cookies['token'];

    if (!token) {
        // Handle the case when the token is not present
        console.error('Token is not present in headers or cookies.');
        return res.status(401).json({ error: 'Unauthorized' });
    }

    let decoded = DecodeToken(token);

    if (decoded === null) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized"
        })
    } else {
        let email = decoded['email'];
        let id = decoded['id'];
        req.headers.email = email;
        req.headers.id = id;
        next();
    }
}