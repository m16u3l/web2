/**
 * Examen.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName : 'Examen',
	autoPK:false,

  	attributes: {
  		id_examen:{
  			type:'integer',
  			autoIncrement:true,
  			primaryKey:true,
  			columnName:'id_examen'
  		}

  	}
};

