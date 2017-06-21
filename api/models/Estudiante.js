/**
 * Estudiante.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName:'Estudiante',
	autoPK:false,

    attributes: {
    	codigo_rude:{
    		type:'string',
    		columnName:'codigo_rude',
    		primaryKey:true,
    		autoIncrement:false
    	},
    	ci_estudiante:{
    		type:'string',
    		columnName:'ci_estudiante'
    	},
    	nombre_estudiante:{
    		type:'string',
    		columnName:'nombre_estudiante',
    	}
    }
};

