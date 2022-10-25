module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    timestamps: false,
    tableName: 'categories',
  });

  // Category.associate = (models) => {
  //   Category.hasMany(models.PostCategory,
  //    { foreignKey: 'post_id', as: 'post_categories' });
  // };

  return Category;
}