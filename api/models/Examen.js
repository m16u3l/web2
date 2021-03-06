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
  		},
      fecha_hora_inicio:{
        type:'datetime',
        required:true,
        columnName:'fecha_hora_inicio'
      },
      fecha_hora_fin:{
        type:'datetime',
        required:true,
        columnName:'fecha_hora_fin'
      },
      
      //referencias
      Pregunta:{
        collection:'Pregunta',
        via:'id_pregunta_x'
      },
      //llaves foraneas
      id_area_r:{
        model:'Area'
      }

  	}
};

