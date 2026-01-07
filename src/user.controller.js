import User from "../models/User.js";

/**
 * GET USER PROFILE
 * /api/user/profile
 */
export const getUserProfile = async (req, res) => {
  try {
   
    const userId = req.userId;

    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * UPDATE USER PROFILE
 * /api/user/update
 */
export const updateUserProfile = async (req, res) => {
  try {
    const userId = req.userId;
    const { name } = req.body;

    const user = await User.findByIdAndUpdate(
      userId,
      { name },
      { new: true }
    ).select("-password");

    res.json({ message: "Profile updated", user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
