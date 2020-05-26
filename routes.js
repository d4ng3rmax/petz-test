const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes
.add('index', '/')
.add('post', '/post/:slug')
