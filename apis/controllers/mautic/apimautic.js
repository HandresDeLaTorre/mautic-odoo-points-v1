/** 
 * Controller Mautic
 */
require('dotenv').config()
const { httpError } = require('../../helpers/handleError') 
const MauticConnector = require('node-mautic');

const mauticConnector = new MauticConnector({
    apiUrl: process.env.APIURL,
    username: process.env.USERNAMEMAUTIC,
    password: process.env.PASSWORD,
    timeoutInSeconds: 10
});


const saludo = (req, res) => {
    res.send(`<h1>Funciona la API de Mautic</h1>`)
}

const listCampaing = async ()=> {
    const campaigns = await mauticConnector.campaigns.listCampaigns();
    //console.log( campaigns);
}
//listCampaing()

const createUser = async (req, res)=> {
    try {
        const { name, email, mobile } = req.body       //console.log(data);
        const newUser = await mauticConnector.contacts.createContact({
        firstname: name,
        email: email,
        mobile: mobile, 
        owner: 2
      })
        res.send({ Nombre: name, Correo: email, Mobile: mobile })
    } catch (e) {
        httpError(res, e)
    }      //console.log(newUser);
}

const createUserWithChat = async (name, email, mobile)=> {
      try {
        const newUser = await mauticConnector.contacts.createContact({
            firstname: name,
            email: email,
            mobile: mobile, 
            owner: 2
          })
      } catch (e) {
        httpError(e)
      }
}


const listUsers = async () => {	
    const listContacts = await mauticConnector.contacts.listContacts();
    //console.log(listContacts);
}
//listUsers()

const listUser = async (req, res) => {	
    try {
        const listContac = await mauticConnector.contacts. getContact(req.params.id);
        const lastActivity = listContac['contact']['lastActive']
        res.send(lastActivity)
    } catch (e) {
        httpError(res, e)
    }
    //console.log(JSON.stringify(listContac));
}
//listUser()

module.exports = {
    createUserWithChat,
    listCampaing,
    createUser,
    listUsers,
    listUser,
    saludo
}


