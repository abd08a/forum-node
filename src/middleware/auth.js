import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  const token = authHeader.split(" ")[1]; // Expects 'Bearer <token>'

  if (!token) {
    return res.status(401).json({ message: "Token missing or malformed" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    req.userId = decoded.id || decoded.userId; // Ensure decoded object has the expected property

    if (!req.userId) {
      return res.status(401).json({ message: "Invalid token payload" });
    }

    next();
  });
};
