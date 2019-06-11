const express = require('express')

const PostController = require('./controller/PostController')


const routes = new express.Router()

//middleware(interceptador de requisições)


routes.post('/posts',PostController.store)


module.exports = routes;