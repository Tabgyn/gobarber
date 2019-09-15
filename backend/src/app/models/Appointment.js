import { Model, Sequelize } from 'sequelize';
import { isBefore, subHours } from 'date-fns';

/**
 * Appointment Model
 */
class Appointment extends Model {
  /**
   * Initialize an Appointment, representing a table in the DB, with attributes and options.
   * @param {Sequelize} sequelize
   */
  static init(sequelize) {
    super.init(
      {
        date: Sequelize.DATE,
        canceled_at: Sequelize.DATE,
        past: {
          type: Sequelize.VIRTUAL,
          get() {
            return isBefore(this.date, new Date());
          },
        },
        cancelable: {
          type: Sequelize.VIRTUAL,
          get() {
            return isBefore(new Date(), subHours(this.date, 2));
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  /**
   * Appointment associations
   * @param {Array<Model>} models
   */
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.User, { foreignKey: 'provider_id', as: 'provider' });
  }
}

export default Appointment;
