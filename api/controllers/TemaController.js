/**
 * TemaController
 *
 * @description :: Server-side logic for managing temas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	new_tema:function(req,res,next){
		Area.find(function area_found(err,areas){
			if(err){
				return next(err);
			}
			res.view({
				areas:areas
			})
		});
	},

	registrar_tema:function(req,res,next){
		var objeto_tema = {
			nombre_tema		:req.param('nombre_tema'),
			id_area_r		:req.param('area_tema')
		}
		Tema.create(objeto_tema)
		.then(function(tema){
			console.log("Se creo un nuevo tema");
			return res.redirect('tema/index');
		})
		.catch(function(err){
			console.log(err);
			return res.redirect('tema/new_tema');
		});
	},
	index: function(req,res){
		Tema.find(function found_tema(err,temas){
			if(err){
				return res.redirect('registrar_tema');
			}
			res.view({
				temas:temas
			});
		});
	}
};

