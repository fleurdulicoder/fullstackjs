/*import config, { nodeEnv, logStars } from './config';
console.log(config, nodeEnv, logStars);

import https from 'https';
https.get('https://www.lynda.com', res => {
	console.log('Response status code: ', res.statusCode);
	res.on('data', chunk => {
		console.log(chunk.toString());
	})
});*/

/*import http from 'http';

const server = http.createServer((req, res) => {
	res.write('Hellp HTTP!\n');
	setTimeout(() => {
		res.write('I can stream!\n');
		res.end();
	}, 3000);
});

server.listen(8080);

//import fs from 'fs';
//server.get('/about.html', (req, res) => {
//	res.send('The about page\n');
//});
*/

import config from './config';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path'

import express from 'express';
const server = express();

server.use(sassMiddleware({
	src: path.join(__dirname, 'sass'),
	dest: path.join(__dirname, 'public') 
}));

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
	res.render('index', {
		content: 'Hello Express <em>Ella</em>!'
	});
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
	console.info('Express listening on port ', config.port);
});

