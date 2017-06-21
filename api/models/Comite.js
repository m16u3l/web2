/**
 * Comite.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName : 'Comite',
  	autoPK: false,

  	attributes: {
  		id_comite:{
  			type :'integer',
  			autoIncrement : true,
  			primaryKey:true,
  			columnName:'id_comite' 
  		},
  		nombre_comite:{
  			type:'string',
  			required: true
  		},

      //
      id_area_r:{
        model:'Area'
      }


  	}
};

