const jwt = require("jsonwebtoken");


exports.createJwtToken = (payload) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "365d" });
    return token;
};


