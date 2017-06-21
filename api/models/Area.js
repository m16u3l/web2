/**
 * Area.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName:'Area',
	autoPK:false,
	
  	attributes: {
  		id_area:{
  			type:'integer',
  			autoIncrement:true,
  			primaryKey:true,
  			columnName:'id_area'
  		},
  		nombre_area:{
  			type:'string',
  			required:true,
  			columnName:'nombre_area'
  		},

      //referencias
      Evaluador:{
        collection:'Evaluador',
        via:'id_area_r'
      }

  	}
};

