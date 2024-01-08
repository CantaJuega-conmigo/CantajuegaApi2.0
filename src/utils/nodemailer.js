const nodemailer = require("nodemailer");
const { GMAIL_ADMIN, PASSWORD_ADMIN } = process.env;

module.exports = async function (name, email, otpCode, newUser) {
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
  await transporter.sendMail({
    from: `"CANTAJUEGA CONMIGO " <${GMAIL_ADMIN}>`, // sender address
    to: email, // list of receivers
    subject: "Código de verificación", // Subject line
    html: `
        <div  style=" text-align: center; font-size: 1rem; background-color: #f2f2f2;">
        <h3> Hola ${name}.A continuación te dejamos el codigo de verificación de CANTAJUEGO CONMIGO 👏. </h3>

        <div style=" border: none ; cursor: pointer;  text-align: center; 
        padding: 15px ; background-color: #26798E ; width: 100%; color: #FFC172; font-size: 1rem;">
        <p>Codigo de verificacion : <b> ${otpCode} </b> </p>
        </div>

        </div>    
          `, // html body
  });

  if (newUser)
    return await transporter.sendMail({
      from: `"CANTAJUEGA CONMIGO " <${GMAIL_ADMIN}>`, // sender address
      to: email, // list of receivers
      subject: "BIENVENIDO/A", // Subject line
      html: ` 
      <main style="display: flex; flex-direction: column; align-items: center;  text-align: center; font-size: 1rem; background-color: #f2f2f2;">
      <section style="background-color: #f2f2f2;  color:#26798E ; width: 100%; text-align: center;">
                      <h1>Hola ${name} te queremos dar la bienvenida a CANTAJUEGO CONMIGO 👏</h1>
      </section>
      <article style="width: 100%; font-size: 1.1rem;  text-align: center; padding-left: 10px; padding-right: 10px;"> 
          <p>
          <b> Con el objetivo de conocer mejor a su hijo/a, precisamos que complete el siguiente 
          formulario para que podamos brindarle una mejor experiencia y lograr los mejores resultados. </b>
          </p>    
      </article>

          <a style="text-decoration: none ; text-align: center; width: 100%;" href="https://docs.google.com/forms/d/1KFXt7qIY0XIP1uDVir0ApnH818vcaNtjORp0MSk7G7A/viewform?edit_requested=true">
              <button  style=" border: none ; cursor: pointer;  text-align: center; 
              padding: 15px ; background-color: #26798E ; width: 100%; color: #FFC172; font-size: 1rem;">
                  Click aqui para completar el formulario
              </button>
          </a>
  </main>
          `, // html body
    });

  
};
