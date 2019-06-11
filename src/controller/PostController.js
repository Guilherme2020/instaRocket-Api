const Post = require('../models/Post')

module.exports = {
    
    async index(req,res){

        return; 
    
    },

    async store(req,res){
        res.json({ ok : true })   
    }

};