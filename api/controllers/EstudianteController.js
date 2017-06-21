/**
 * EstudianteController
 *
 * @description :: Server-side logic for managing estudiantes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	new_estudiante: function(req,res,next){
		return res.view();
	},
	crear_estudiante:function(req,res,next){
		var objeto_estudiante={
			codigo_rude		:req.param('codigo_rude'),
			ci_estudiante	:req.param('ci_estudiante'),
			nombre_estudiante:req.param('nombre_estudiante')
		}
		Estudiante.create(objeto_estudiante)
		.then(function(estudiante){
			return res.redirect('/estudiante/index');
		})
		.catch(function(err){
			return res.redirect('estudiante/new_estudiante');
		});
	},
	index: function (req, res) {
      	Estudiante.find(function found_estudiante (err, estudiantes) {
        	if(err) return res.redirect('crear_estudiante');
        	res.view({
          		estudiantes:estudiantes
        	});
      	});
  	}
};

