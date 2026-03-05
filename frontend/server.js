const http = require('http');
const handler = require('serve-handler');

const PORT = Number(process.env.PORT) || 3000;

const server = http.createServer((request, response) => {
    return handler(request, response, {
        public: 'build',
        rewrites: [{ source: '**', destination: '/index.html' }]
    });
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Frontend server is running on port ${PORT}`);
});
