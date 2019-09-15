import File from '../models/File';

/**
 * File Controller
 */
class FileController {
  /**
   * Create a new File
   * @param {Object} req
   * @param {Object} res
   */
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await File.create({ name, path });

    return res.json(file);
  }
}

export default new FileController();
