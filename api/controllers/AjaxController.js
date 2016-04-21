/**
 * AjaxController
 *
 * @description :: Server-side logic for managing ajaxes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	record:(req,res)=>{
		console.log(req.allParams());
		res.send("This is TEST");
	}
};
