import User from "../models/User";

export const getRecommendedUsers = async (req, res) => {
  try {
    const currentUserId = req.user.id;
    const currentUser = await User.findById(currentUserId);
    const recommendedUsers = await User.find({
      $and: [
        { _id: { $ne: currentUserId } }, // in recommended uses list dont show the current logged in user and his friends
        { $id: { $nin: currentUser.friends } },
        { isOnboarded: true },
      ],
    });

    res.status(200).json(recommendedUsers);
  } catch (error) {
    console.error("Error in getRecommendedUsers controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const getMyFriends = async (req, res) => {};
