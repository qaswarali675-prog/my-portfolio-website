const Project = require('../models/Project');
const Skill = require('../models/Skill');
const Message = require('../models/Message');
const Service = require('../models/Service');

// @desc    Get dashboard statistics
// @route   GET /api/dashboard/stats
// @access  Private/Admin
const getDashboardStats = async (req, res) => {
  try {
    const totalProjects = await Project.countDocuments();
    const totalSkills = await Skill.countDocuments();
    const totalMessages = await Message.countDocuments();
    const totalServices = await Service.countDocuments();
    const unreadMessages = await Message.countDocuments({ isRead: false });

    const recentMessages = await Message.find()
      .sort({ createdAt: -1 })
      .limit(5);

    res.json({
      success: true,
      data: {
        totalProjects,
        totalSkills,
        totalMessages,
        totalServices,
        unreadMessages,
        recentMessages,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getDashboardStats,
};
