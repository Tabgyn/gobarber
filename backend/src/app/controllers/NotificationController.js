import User from '../models/User';
import Notification from '../schemas/notification';

/**
 * Notification Controller
 */
class NotificationController {
  /**
   * List all Notifications
   * @param {Object} req
   * @param {Object} res
   */
  async index(req, res) {
    /**
     * Check if user is a provider
     */
    const isProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!isProvider) {
      return res
        .status(401)
        .json({ error: 'Only providers can view notifications' });
    }

    const notifications = await Notification.find({
      user: req.userId,
    })
      .sort('-createdAt')
      .limit(20);

    return res.json(notifications);
  }

  /**
   * Update a Notification
   * @param {Object} req
   * @param {Object} res
   */
  async update(req, res) {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      {
        read: true,
      },
      { new: true }
    );

    return res.json(notification);
  }
}

export default new NotificationController();
