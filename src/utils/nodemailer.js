const nodemailer = require('nodemailer');
const { GMAIL_ADMIN, PASSWORD_ADMIN } = process.env;

module.exports = async function (name, email,otpCode) {
    //creacion y configuracion del envio de mail
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: GMAIL_ADMIN, // generated ethereal user
            pass: PASSWORD_ADMIN, // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    //mensaje que se envia al mail
    let informacion = await transporter.sendMail({
        from: `"CANTAJUEGA CONMIGO👾⚒️" <${GMAIL_ADMIN}>`, // sender address
        to: email, // list of receivers
        subject: "BIENVENID@ A CANTAJUEGO CONMIGO", // Subject line
        html: `Hola ${name}. Gracias por elegir a CANTAJUEGA CONMIGO 👏. <br></br> Te invitamos a navegar por nuestra pagina y buscar el mejor producto para tus suculentas.
           .<br></br> Recuerda que tu producto ideal esta a solo un click ✍️📉 <br></br>
           <a href=''> Click aquí para regresar a CANTAJUEGA CONMIGO </a> - <br></br>
          `, // html body
    });
    let verify = await transporter.sendMail({
        from: `"CANTAJUEGA CONMIGO👾⚒️" <${GMAIL_ADMIN}>`, // sender address
        to: email, // list of receivers
        subject: "Codigo de verificacion", // Subject line
        html: `Hola ${name}. Gracias por elegir a CANTAJUEGA CONMIGO 👏. <br>
                <h1>Codigo de verificacion ${otpCode}</h1>
          `, // html body
    });

    return otpCode?verify:informacion;
};