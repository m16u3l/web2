/**
 * Evaluador.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName : 'Evaluador',
	autoPK:false,

	attributes: {
		ci_evaluador:{
			type:'integer',
			autoIncrement:false,
			required:true,
			primaryKey:true,
			columnName:'ci_evaluador'
		},
		nombre_evaluador:{
			type:'string',
			columnName:'nombre_evaluador'
		},
		email_evaluador:{
	  		type:'email',
	  		required:true,
	  		unique: true,
	  		columnName:'email_evaluador'
	  	},

	  	//llave foranea
		id_area_r:{
			model:'Area',
		}
    }
};

