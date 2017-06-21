/**
 * PreguntaController
 *
 * @description :: Server-side logic for managing preguntas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	new_pregunta:function(req,res,next){
		Tema.find(function tema_found(err,temas){
			if(err){
				return next(err);
			}
			res.view({
				temas:temas
			})
		});
	},
	registrar_pregunta:function(req,res,next){
		var objeto_pregunta = {
			pregunta 		: req.param('pregunta'),
			respuesta 		: req.param('respuesta'),
			complejidad 	: req.param('complejidad'),
			id_pregunta_r  	: req.param('tema_pregunta')
		}

		Pregunta.create(objeto_pregunta)
		.then(function(pregunta){
			console.log(Pregunta);
			return res.redirect('Pregunta/index');
		})
		.catch(function(err){
			console.log(err);
			return res.redirect('Pregunta/new_pregunta');
		});
	},
	index: function(req,res){
		Pregunta.find(function found_pregunta(err,preguntas){
			if(err){
				return res.redirect('registrar_pregunta');
			}
			res.view({
				preguntas:preguntas
			});
		});
	}
};

