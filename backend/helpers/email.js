import nodemailer from 'nodemailer';

export const emailRegistro = async (datos) => {
    const { email, nombre, token } = datos;

    // Configuración del transporte usando las variables de entorno
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    // info del mail
    const info = await transport.sendMail({
        from: '"Consultorio Médico" <cuentas@consultorio.com>',
        to: email,
        subject: "Confirma tu Cuenta en el Consultorio",
        html: `
            <p>Hola ${nombre}, comprueba tu cuenta. </p>
            <p>Tu cuenta ya estpa casi lista, solo debes comprobarla haciendo click en el siguiente enlace: </p>
            <p><a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a></p>
            <p>Si no creaste esta cuenta, puedes ignorar este mensaje.</p>
        `,
    });

    console.log("Mensaje enviado: %s", info.messageId);

};


export const emailOlvidePassword = async (datos) => {
    const { email, nombre, token } = datos;

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const info = await transport.sendEmail({
        from: '"Consultorio Médico" <cuentas@consultorio.com>',
        to: email,
        subject: "Reestablece tu Password",
        text: "Reestablece tu Password",
        html: `<p>Hola ${nombre}, has solicitado reestablecer tu password.</p>
            <p>Sigue el siguiente enlace para generar un nuevo password: </p>
            <p><a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a></p>
            <p>Si tú no solicitaste este cambio, puedes ignorar este mensaje.</p>
        `,
    });

    console.log("Mensaje Enviado: %s", info.messageId);
}


export const emailNuevoTurno = async (datos) => {
    const { email, nombre, medico, especialidad, fecha, hora } = datos;

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

const info = await transport.sendMail({
        from: '"Consultorio Médico" <turnos@consultorio.com>',
        to: email,
        subject: "Confirmación de tu Turno Médico",
        text: "Confirmación de tu Turno Médico",
        html: `
            <div style="font-family: sans-serif; color: #333;">
                <h2>¡Hola, ${nombre}!</h2>
                <p>Tu turno ha sido agendado correctamente en nuestro sistema.</p>
                <hr />
                <p><strong>Detalles de la cita:</strong></p>
                <ul>
                    <li><strong>Especialista:</strong> ${medico}</li>
                    <li><strong>Especialidad:</strong> ${especialidad}</li>
                    <li><strong>Fecha:</strong> ${fecha}</li>
                    <li><strong>Hora:</strong> ${hora} hs</li>
                </ul>
                <hr />
                <p>Si necesitas cancelar o reprogramar, por favor comunícate con nosotros.</p>
                <p>Atentamente,<br/>El equipo del Consultorio Médico</p>
            </div>
        `,
    });

    console.log("Email de turno enviado al paciente: %s", info.messageId);
}