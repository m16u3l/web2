/**
 * AreaController
 *
 * @description :: Server-side logic for managing areas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	new_area: function(req,res,next){
		return res.view();
	},
	crear_area:function(req,res,next){
		var objeto_area={
			nombre_area:req.param('nombre_area')
		}
		Area.create(objeto_area)
		.then(function(area){
			return res.redirect('/area/index');
		})
		.catch(function(err){
			return res.redirect('area/new_area');
		});
	},
	index: function (req, res) {
      Area.find(function foundArea (err, areas) {
        if(err) return res.redirect('crear_area');
        res.view({
          areas:areas
        });
      });
  	}
	
};

