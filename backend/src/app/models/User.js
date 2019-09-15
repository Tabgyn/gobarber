import { Model, Sequelize } from 'sequelize';
import bcrypt from 'bcryptjs';

/**
 * User Model
 */
class User extends Model {
  /**
   * Initialize an User, representing a table in the DB, with attributes and options.
   * @param {Sequelize} sequelize
   */
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  /**
   * User associations
   * @param {Array<Model>} models
   */
  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
  }

  /**
   * Compares the given password against the hash
   * @param {String} password
   */
  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
