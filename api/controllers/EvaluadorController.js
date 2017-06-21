/**
 * EvaluadorController
 *
 * @description :: Server-side logic for managing evaluadors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	new_evaluador:function(req,res,next){
		Area.find(function area_found(err,areas){
			if(err){
				return next(err);
			}
			res.view({
				areas:areas
			})
		});
	},
	registrar_evaluador:function(req,res,next){
		var objeto_evaluador = {
			ci_evaluador		:req.param('ci_evaluador'),
			nombre_evaluador	:req.param('nombre_evaluador'),
			email_evaluador 	:req.param('email_evaluador'),
			id_area_r	 		:req.param('area_evaluador')
		}
		Evaluador.create(objeto_evaluador)
		.then(function(evaluador){
			console.log(evaluador);
			return res.redirect('evaluador/index');
		})
		.catch(function(err){
			console.log(err);
			return res.redirect('evaluador/new_evaluador');
		});
	},
	index: function (req, res) {
		Evaluador.find(function found_evaluador (err, evaluadores) {
        	if(err) 
        		return res.redirect('registrar_evaluador');
        	res.view({
          		evaluadores: evaluadores
      	    });
      	});
  	}

  };
