/**
 * Tema.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName:'Tema',
	autoPK:false,

  	attributes: {
  		id_tema:{
  			type:'integer',
  			autoIncrement:true,
  			primaryKey:true,
  			columnNamen:'id_tema'
  		},
  		nombre_tema:{
  			type:'string',
  			required:true,
  			columnNamen:'nombre_tema'
  		},

      //referencias
      Pregunta:{
        collection:'Pregunta',
        via:'id_pregunta_r'
      }
  	}
};

