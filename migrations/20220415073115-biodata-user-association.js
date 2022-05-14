'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('user_game_biodata',{
      fields:['userId'],
      type:'foreign key',
      name:'biodata_user_association',
      references:{
      table:'user_games',
      field:'id'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('user_game_biodata',{
      fields:['userId'],
      type:'foreign key',
      name:'biodata_user_association',
      references:{
      table:'user_games',
      field:'id'
      }
    });
  }
};
