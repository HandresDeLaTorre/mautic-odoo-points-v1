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