require('dotenv').config();
const jsonServer = require('json-server');
const morgan = require('morgan');

const server = jsonServer.create();

const router = jsonServer.router('db.json');

const middlewares = jsonServer.defaults();
const PORT = 4000;

server.use(middlewares);
server.use(morgan('dev'));
server.use((req, res, next) => {
	// Middleware to disable CORS
	res.header('Access-Control-Allow-Origin', '*');
	next();
});
server.use(router);

server.listen(PORT, () => {
	console.log(`JSON Server is running on http://localhost:${PORT}`);
});
