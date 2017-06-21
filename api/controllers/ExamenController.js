/**
 * ExamenController
 *
 * @description :: Server-side logic for managing examen
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	new_examen:function(req,res,next){
		res.view(function examen_found(err,examenes){
			if(err){
				return next(err);
			}
			res.view({
				examenes:examenes
			})
		});
	},
	registrar_examen:function(req,res,next){
		var objeto_examen = {
			fecha_hora_inicio 	: req.param(''),
			fecha_hora_fin		: req.param(''),

		}
		Examen.create(objeto_examen)
		.then(function(examen){
			console.log("Se creo un nuevo examen");
			return res.redirect('examen/index');	
		})
		.catch(function(err){
			console.log(err);
			return res.redirect('examen/new_tema');
		});
	},
	index:function(req,res){
		Examen.find(function found_examen(err,examenes){
			if(err){
				return res.redirect('registrar_examen');
			}
			res.view({
				examenes:examenes
			});
		});
	}
};

