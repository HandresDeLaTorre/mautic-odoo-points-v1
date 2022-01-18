/**
 * API ODOO para produccion 
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

var email1 = 'jack6884ha@gmail.com';
var fullName = 'Handres De La Torre';
var creados = []

const searchContact = async (email)=> {
    await odoo.connect();
    return await odoo.search('res.partner', {email: email});
}

const searchId = async (idContact)=>{
    await odoo.connect();
    return await odoo.read('res.partner', idContact , ['name', 'email', 'category_id']);
    //console.log(`***El id del contacto es: `, idcontact[0]['email']); 
}

const createContact = async () => {
    await odoo.connect();
    try {
        let busquedaContactoEmail = await searchContact(email1);
        if (busquedaContactoEmail.length === 0) {
            console.log('No existe el usuario');
            const contactcreated = await odoo.create('res.partner', {name: fullName, email: email1});
        } else {
            console.log('Usuario existente');
            let idUser = await searchId(busquedaContactoEmail);
            console.log(idUser);
            createLeade(idUser)
            // const nuevoContacto =  creados.push(idUser);
            // console.log('***Usuarios Creados', creados);
        }
        
        //searcheContact
        // console.log(`Partner created with ID ${contactcreated}`);
        // searchId(contactcreated);
        // contactcreated = idcreate
        // console.log(idcreate);
        //console.log('**--Log desde API ODOO', JSON.stringify(correo));
    } catch (e) {
        console.error(e);
    }
}

const createLeade = async (idUserReq) => {
    await odoo.connect();
    try {
        const partner_id = []
        //let busqueda = await searchContact(email1);
        let idUser = await idUserReq //searchId(busqueda);
        let id = idUser[0]['id'];
        let name = idUser[0]['name'];
        let email = idUser[0]['email']
        partner_id.push(parseInt(id, 10), JSON.stringify(name))
        console.log(`****Creeamos un user y el correo es: ${idUser[0]['email']}`);
        console.log(partner_id);
        //console.log(busqueda);
        const creatLead = await odoo.create('crm.lead', {partner_id: id, name:'Nueva oportunidad de Mautic',contact_name: name, email_from: email})
        console.log(`***Los leads son: ${JSON.stringify(creatLead)}`);

        const searchLeads = await odoo.read('crm.lead', [creatLead], ['contact_name','stage_id', 'name', 'user_id', 'partner_id', 'email_from', 'team_id'])
        console.log(`***Los datos del leads son: ${JSON.stringify(searchLeads)}`);

    } catch (e) {
        console.error(e);
    }
}

//createLeade()
//searchId()
createContact();
//searchContact()
