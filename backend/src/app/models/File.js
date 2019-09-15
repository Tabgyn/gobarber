import { Model, Sequelize } from 'sequelize';

/**
 * File Model
 */
class File extends Model {
  /**
   * Initialize a File, representing a table in the DB, with attributes and options.
   * @param {Sequelize} sequelize
   */
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${process.env.APP_URL}/files/${this.path}`;
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default File;
