const img64 = require('./utils/img64/img64');
const crypto = require('crypto-js');

const SECRET = '3dfd764e1cc1a4e3de45e220e174f4655d9b99a65f36882bc7a989fcf41b3413';

//const convertidor = img64.convertImg('https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/594a1ced5bafe85dfd3c9869/gato-romano_0.jpg')


const convertir =  async()=>{
    const raw64 = await img64.convertImg('https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/594a1ced5bafe85dfd3c9869/gato-romano_0.jpg')
    // .then(
    //     (response) => {
    //         const newImg = response
    //         console.log('*****----> Se creo la Base64 ==> ', raw64 ); // "cGF0aC90by9maWxlLmpwZw=="           
    //     }
    // )
    // .catch(
    //     (error) => {
    //         console.log(error); // Logs an error if there was one
    //     })

    // let img65 = await raw64
    // console.log(img65); 
    //return  
    const raw66 = await raw64
    console.log('****Data test: ', raw66);
}

const convertir2 = async () => {
    let iiii = await img64.convertImg('https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/594a1ced5bafe85dfd3c9869/gato-romano_0.jpg')

    let data =  await img64.newImg;
    console.log('este es iiii: ', iiii);
}
//const raw64 =0 
//convertir2()
//console.log(convertidor);

// optional signature verification const receivedSignature = req.headers['webhook-signature’]; console.log('Received signature (in header):’, receivedSignature);
    const computedSignature = crypto.createHmac('sha256', SECRET).update(req.body).digest('base64'); 
    console.log('Computed signature (from body):', computedSignature);
        

console.log("Final****");
