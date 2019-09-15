import User from '../models/User';
import File from '../models/File';

/**
 * Provider Controller
 */
class ProviderController {
  /**
   * List all Providers
   * @param {Object} req
   * @param {Object} res
   */
  async index(req, res) {
    const providers = await User.findAll({
      where: { provider: true },
      attributes: ['id', 'name', 'email'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(providers);
  }
}

export default new ProviderController();
