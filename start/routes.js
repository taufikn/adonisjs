'use strict'

const { RouteResource } = require('@adonisjs/framework/src/Route/Manager')
const PostController = require('../app/Controllers/Http/PostController')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

// routes for POSTS
Route.get('/posts', 'PostController.index').as('posts.index')
Route.get('/posts/create', 'PostController.create').as('posts.create')
Route.post('/posts/store', 'PostController.store').as('posts.store')
Route.get('/posts/edit/:id', 'PostController.edit').as('posts.edit')
Route.post('/posts/update/:id', 'PostController.update').as('posts.update')
Route.get('/posts/delete/:id', 'PostController.delete').as('posts.delete')

// Routes for Product
Route.get('/outlets', 'OutletController.index').as('outlets.index')
Route.post('/outlets/store', 'OutletController.store').as('outlets.store')
Route.get('/outlets/edit/:id', 'OutletController.edit').as('outlets.edit')
Route.post('/outlets/update/:id', 'OutletController.update').as('outlets.update')
Route.get('/outlets/delete/:id', 'OutletController.delete').as('outlets.delete')

// If route doesn't find
Route.any('*', ({ view }) => view.render('404'))