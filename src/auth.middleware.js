import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    // header se token nikalna
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    // token verify
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // userId request ke sath attach
    req.userId = decoded.userId;

    next(); // route / controller ko aage bhejo
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default authMiddleware;
