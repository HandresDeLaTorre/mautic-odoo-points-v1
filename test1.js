// const crypto = require('crypto');

// const secret = 'abcdefg';
// const hash = crypto.createHmac('sha256', secret)
//                    .update('I love cupcakes')
//                    .digest('base64');
// console.log(hash);

// // save raw body 
// app.use ((req, res, next) => { 
//     let data = ''; 
//     req.setEncoding('utf8');

// req.on('data', chunk => data += chunk); 
// req.on('end', () => { req.body = data; 
//     return next(); }); 
// });

var asesora = [1,2,3]

asesora.forEach(element => {
    
    console.log(element);
});

// mkdir -p /var/www/apiservice.xuply.io/html
// chown -R $USER:$USER /var/www/apiservice.xuply.io/html
// chmod -R 755 /var/www/apiservice.xuply.io

// nano /etc/nginx/sites-available/apiservice.xuply.io

// server {
//     listen 80;
//     listen [::]:80;

//     root /var/www/apiservice.xuply.io/html;
//     index index.html index.htm index.nginx-debian.html;

//     server_name apiservice.xuply.io www.apiservice.xuply.io;

//     location / {
//             try_files $uri $uri/ =404;
//     }
// }

// ln -s /etc/nginx/sites-available/apiservice.xuply.io /etc/nginx/sites-enabled/

// PORT=6100
// APIURL='https://codigosimple.website/automation'
// USERNAMEMAUTIC='Asistente'
// PASSWORD='Bot*CS*2021'
// ODOOBASEURL='https://codigo-simple.odoo.com/'
// ODOODB='codigo-simple'
// ODOOPORT=443
// ODOOUSER='hola@handresdelatorre.com'
// ODOOPSW='1a67bf31e036df3b7319247693dc8da913711e86'
// PRODUODOOBASEURL='https://ropahermosa.iku.solutions'
// PRODUODOODB='ropahermosa.iku.solutions'
// PRODUODOOPORT=443
// PRODUODOOUSER='gerencia@ropahermosamujer.com'
// PRODUODOOPSW='def8ba9ec544cf6f39eb4f1abddb94ae38e2c3cf'