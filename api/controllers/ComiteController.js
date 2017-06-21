/**
 * ComiteController
 *
 * @description :: Server-side logic for managing comites
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	new_comite:function(req,res,next){
		res.view(function comite_found(err,comites){
			if(err){
				return next(err);
			}
			res.view({
				comites:comites
			})
		});
	},
	registrar_comite:function(req,res,next){
		var objeto_comite = {
			fecha_hora_inicio 	: req.param(''),
			fecha_hora_fin		: req.param(''),

		}
		Comite.create(objeto_comite)
		.then(function(comite){
			console.log("Se creo un nuevo comite");
			return res.redirect('comite/index');	
		})
		.catch(function(err){
			console.log(err);
			return res.redirect('comite/new_comite');
		});
	},
	index:function(req,res){
		Comite.find(function found_comite(err,comites){
			if(err){
				return res.redirect('registrar_comite');
			}
			res.view({
				comites:comites
			});
		});
	}
};

