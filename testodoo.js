/**
 * Controller Odoo API
 */
 require('dotenv').config()

 const Odoo = require('odoo-await');
 
 
 const odoo = new Odoo({
     baseUrl: process.env.ODOOBASEURL,
     db: process.env.ODOODB,
     port: process.env.ODOOPORT,
     username: process.env.ODOOUSER,
     password: process.env.ODOOPSW,
 })
 
 const readContacts = async () => {
     try {
        await odoo.connect();

        // const contacts = await odoo.read('res.partner', [8], ['name', 'email']);
        // const emailSearch = contacts[0]['email']
        // await searcheContact(emailSearch)
        // console.log(JSON.stringify(contacts));
        // console.log(contacts[0]['email']);
        const searchLeads = await odoo.read('crm.lead', [50], ['contact_name','stage_id', 'name', 'user_id', 'partner_id', 'email_from', 'team_id'])
        console.log(`***Los leads son: ${JSON.stringify(searchLeads)}`);
    } catch (e) {
         console.error(e);
     }
 }

 const listField = async ()=> {
    await odoo.connect();
    const fields = await odoo.getFields('res.partner', ['required']);
    console.log(`****Los campos disponibles son: ${JSON.stringify(fields)}`);
 }

 const searcheContact = async (email)=> {
    await odoo.connect();
    const searchfield = await odoo.search('res.partner', {email: email});
    if (searchfield.length === 0) {
        
        console.log('**--Lo siento no se encontro el usuario');
    } else {
        console.log(`****se encontro el siguiente Contacto: ${JSON.stringify(searchfield)}`);
    }
    
 }

 const createContact = async (req, res) => {
    let points = req.body['mautic.lead_points_change'][0]['points']['new_points'];

    let data = req.body['mautic.lead_points_change'][0]['contact']['fields']['core'];
    let name = data.firstname.normalizedValue
    let lastname = data.lastname.normalizedValue
    let fullname = name + ' ' + lastname
    let contactName = fullname
    let correo = data.email.normalizedValue

    try {
        await odoo.connect();
        switch (points) {
            case 80:
                console.log('funciona los puntos');
                //const contactlead = await odoo.create('crm.lead', {name: fullname, email: correo});
                //const searchLeads = await odoo.searchRead('crm.lead')
                const contactcreated = await odoo.create('res.partner', {name: fullname, email: correo});
                console.log(`Partner created with ID ${contactcreated}`);
                console.log('**--Log desde API ODOO', JSON.stringify(correo));
                break;
        
            default:
                console.log(`***Los puntos son: ${points}`);
                // const creatLeads = await odoo.create('crm.lead', {name:'Esta es una prueba',contact_name: fullname, email_from: correo})
                // console.log(`***Los leads son: ${JSON.stringify(creatLeads)}`);
                break;
        }
        // const contactcreated = await odoo.create('res.partner', {name: fullname, email: correo});
        // console.log(`Partner created with ID ${contactcreated}`);
        // console.log('**--Log desde API ODOO', JSON.stringify(correo));
    } catch (e) {
        console.error(e);
    }
    
}

const searchLead = async ()=> {
    await odoo.connect();
    const lead = await odoo.search('crm.lead', {email_from: 'johandreos@gmail.com'});
    console.log(lead);
    //return await odoo.search('crm.lead', {email: 'johandreos@gmail.com'});
}

const readModel = async () => {
    await odoo.connect();
    const records =  await odoo.search(`res.country`, {name: 'Honduras'});
    console.log(records);
}

const readLeads = async () =>{
    await odoo.connect();
    const dataLeads =  await odoo.read('crm.lead', [1], ['name']);
    console.log(dataLeads);
}


 //searcheContact()
 //listField()
 //searchLead()
 readLeads()
 //readModel()
 
 //readContacts()
 module.exports = {
     readContacts
 }