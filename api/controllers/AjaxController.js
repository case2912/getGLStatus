/**
 * AjaxController
 *
 * @description :: Server-side logic for managing ajaxes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	record:(req,res)=>{
		var obj = req.allParams();
		//console.log(Object.keys(obj));
		for(key in obj["extensions"]){
			console.log(obj["extensions"][key]);
		}
		for(key in obj["parameters"]){
			console.log(obj["parameters"][key]);
		}
		console.log(obj["userStatus"]);
		res.send("This is TEST");


		var vogels = require('vogels');
		var Joi = require('joi');
		vogels.AWS.config.loadFromPath('credentials.json');
		vogels.AWS.config.update({region:"us-west-2"});

		var table = vogels.define("GLStatus",{
		  hashKey:"ID",
		  schema:{
		    ID:Joi.string(),
		    ANGLE_instanced_arrays:Joi.boolean(),
		    EXT_blend_minmax:Joi.boolean(),
		    EXT_color_buffer_half_float:Joi.boolean(),
		    EXT_disjoint_timer_query:Joi.boolean(),
		    EXT_frag_depth:Joi.boolean(),
		    EXT_sRGB:Joi.boolean(),
		    EXT_shader_texture_lod:Joi.boolean(),
		    EXT_texture_filter_anisotropic:Joi.boolean(),
		    OES_element_index_uint:Joi.boolean(),
		    OES_standard_derivatives:Joi.boolean(),
		    OES_texture_float:Joi.boolean(),
		    OES_texture_float_linear:Joi.boolean(),
		    OES_texture_half_float:Joi.boolean(),
		    OES_texture_half_float_linear:Joi.boolean(),
		    OES_vertex_array_object:Joi.boolean(),
		    WEBGL_color_buffer_float:Joi.boolean(),
		    WEBGL_compressed_texture_atc:Joi.boolean(),
		    WEBGL_compressed_texture_etc1:Joi.boolean(),
		    WEBGL_compressed_texture_pvrtc:Joi.boolean(),
		    WEBGL_compressed_texture_s3tc:Joi.boolean(),
		    WEBGL_debug_renderer_info:Joi.boolean(),
		    WEBGL_debug_shaders:Joi.boolean(),
		    WEBGL_depth_texture:Joi.boolean(),
		    WEBGL_draw_buffers:Joi.boolean(),
		    WEBGL_lose_context:Joi.boolean()
		  }
		});
		var createTable = function(){
		  return new Promise(function(resolve, reject){
				console.log("aaa");
		    vogels.createTables((err)=>{
					console.log("bbb");
		      if(err){
						console.log("ccc");
						console.log(err);
		        reject("Error has occured!",err)
		      }else{
		        console.log("Table was created without error");
		        resolve();
		      }
		    });
		  });
		};

		var insertElement = function(){
		    table.create({
		      ID:"2",
		      ANGLE_instanced_arrays:true,
		      EXT_blend_minmax:true,
		      EXT_color_buffer_half_float:true,
		      EXT_disjoint_timer_query:true,
		      EXT_frag_depth:true,
		      EXT_sRGB:true,
		      EXT_shader_texture_lod:true,
		      EXT_texture_filter_anisotropic:true,
		      OES_element_index_uint:true,
		      OES_standard_derivatives:true,
		      OES_texture_float:true,
		      OES_texture_float_linear:true,
		      OES_texture_half_float:true,
		      OES_texture_half_float_linear:true,
		      OES_vertex_array_object:true,
		      WEBGL_color_buffer_float:true,
		      WEBGL_compressed_texture_atc:true,
		      WEBGL_compressed_texture_etc1:true,
		      WEBGL_compressed_texture_pvrtc:true,
		      WEBGL_compressed_texture_s3tc:true,
		      WEBGL_debug_renderer_info:true,
		      WEBGL_debug_shaders:true,
		      WEBGL_depth_texture:true,
		      WEBGL_draw_buffers:true,
		      WEBGL_lose_context:true
		    },(err)=>{
		      if(err){
		        console.console.log("Error has occured",err);
		      }else{
		        console.log("Inserted element successfully");
		      }
		    });

		}
		//create();
		createTable().then(()=>{insertElement()});


		}
};
