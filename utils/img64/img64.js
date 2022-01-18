const imageToBase64 = require('image-to-base64');



//let imagen = 'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/594a1ced5bafe85dfd3c9869/gato-romano_0.jpg'
var newImg = ''

const convertImg = (req, res)=>{
    try {
       imageToBase64(req)
        .then(
        (response) => {
           response =  newImg
            
            console.log('*****----> Se creo la Base64 ==> '); // "cGF0aC90by9maWxlLmpwZw=="           
        }
    )
    .catch(
        (error) => {
            console.log(error); // Logs an error if there was one
        })
    }
         
    catch (error) {
        console.error(error);
    }
    
}
// const crearBase64Imagen = ()=>{
//     imageToBase64(imagen) // Path to the image
// .then(
//     (response) => {
//         console.log('*****----> Se creo la Base64 ==> ' + response); // "cGF0aC90by9maWxlLmpwZw=="
       
//     }
// )
// .catch(
//     (error) => {
//         console.log(error); // Logs an error if there was one
//     }
// );

// } 


// crearBase64Imagen()
//console.log(crearBase64Imagen);

module.exports = {
    convertImg,
    newImg
}


