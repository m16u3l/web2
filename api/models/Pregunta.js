/**
 * Pregunta.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName:'Pregunta',
	autoPK:false,

    attributes: {
    	id_pregunta:{
    		type : 'integer',
    		autoIncrement : true,
    		columnName : 'id_pregunta',
    		primaryKey: 'true'	
    	},
    	pregunta:{
    		type:'string',
    		required:true,
    		columnName:'pregunta'
    	},
    	respuesta:{
    		type:'string',
    		required:true,
    		columnName:'respuesta'
    	},
    	complejidad:{
    		type:'integer',
    		columnName:'complejidad'
    	},

        //llave foranea
        id_pregunta_r:{
            model:'Tema'
        }

    }
};

