const db = require('../../config/database');

module.exports = (app) =>{
    app.get('/', function(req, resp){
        resp.send(
            `
            <html>
                <head>
                    <meta charset="UTF-8">
                </head>
            <title>Server rodando...</title>
            <body>
                <h1>Casa do Código</h1>
            </body>
            </html>
        `
        );
    });

    app.get('/livros', function(req, resp){
        resp.marko(
            require('../views/livros/lista/lista.marko'),
            {
                livros: [
                    {
                        id: 1,
                        titulo: 'Fundamentos do Node'
                    },
                    {
                        id: 2,
                        titulo: 'Node avançado'
                    }
                ]
            }     
        );
    });
};




// const http = require('http');
// const servidor = http.createServer(function (req, resp) {
//     resp.end(`
//         <html>
//             <head>
//                 <meta charset="UTF-8">
//             </head>
//         <title>Server rodando...</title>
//         <body>
//             <h1>Casa do Código</h1>
//         </body>
//         </html>
//     `);
// });
// servidor.listen(3000);