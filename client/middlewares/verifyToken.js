import jwt from "jsonwebtoken";
function verifyToken(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "no token provided" });
  }
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    if (req.user._id === req.params._id) {
      next();
    } else {
      return res.status(403).json({ message: "not allowed" });
    }
  } catch (err) {
    res.status(400).json({ message: "invalid token" });
  }
}

function verifyAdmin(req, res, next) {
  const token = req.headers.authorization.split(" ")[1]
  if (!token) {
    return res.status(401).json({ message: "no token provided" });
  }
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    if (req.user.isAdmin) {
      next();
    } else {
      return res.status(403).json({ message: "not allowed only admin" });
    }
  } catch (err) {
    res.status(400).json({ message: "invalid token" });
  }
}

export { verifyToken, verifyAdmin };
