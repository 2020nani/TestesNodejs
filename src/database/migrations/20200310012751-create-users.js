'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('users', {
         id : {
           type: Sequelize.INTEGER ,
           primaryKey: true,
           autoIncrement: true,
           allownull: false,
          },
          name:{
            type:Sequelize.STRING,
            allownull: false,
          } ,
          email:{
            type:Sequelize.STRING,
            allownull: false,
          },
          password_hash:{
            type:Sequelize.STRING,
            allownull: false,
          },
          created_at: {
            type:Sequelize.DATE,
          allownull:false
          },
          updated_at:{
            type:Sequelize.DATE,
            allownull: false,
          }
          
         } )
  },

  down: queryInterface => {
 
      return queryInterface.dropTable('users');
  
  }
};
