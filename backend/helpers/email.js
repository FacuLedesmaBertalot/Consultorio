import nodemailer from 'nodemailer';

// --- CONFIGURACIÓN REUTILIZABLE DEL TRANSPORTE ---
const crearTransporte = () => {
    return nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true, // true para 465, false para otros puertos
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });
};

export const emailRegistro = async (datos) => {
    const { email, nombre, token } = datos;
    const transport = crearTransporte();

    const info = await transport.sendMail({
        from: '"Consultorio Médico" <cuentas@consultorio.com>',
        to: email,
        subject: "Confirma tu Cuenta en el Consultorio",
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                <div style="background-color: #075985; padding: 30px; text-align: center;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px;">¡Bienvenido al Consultorio!</h1>
                </div>
                <div style="padding: 30px; background-color: #ffffff; color: #334155;">
                    <p style="font-size: 16px;">Hola <strong style="color: #075985;">${nombre}</strong>,</p>
                    <p style="font-size: 16px; line-height: 1.6;">Tu cuenta está casi lista. Para proteger tu información, necesitamos que confirmes tu dirección de correo electrónico haciendo click en el siguiente botón:</p>
                    
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="${process.env.FRONTEND_URL}/confirmar/${token}" style="background-color: #f97316; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; display: inline-block;">Comprobar Cuenta</a>
                    </div>
                    
                    <p style="font-size: 14px; color: #64748b; margin-top: 30px;">Si tú no creaste esta cuenta, puedes ignorar este mensaje de forma segura.</p>
                </div>
            </div>
        `,
    });

    console.log("Mensaje de registro enviado: %s", info.messageId);
};


export const emailOlvidePassword = async (datos) => {
    const { email, nombre, token } = datos;
    const transport = crearTransporte();

    const info = await transport.sendMail({ // CORREGIDO: Era sendMail, no sendEmail
        from: '"Consultorio Médico" <cuentas@consultorio.com>',
        to: email,
        subject: "Reestablece tu Contraseña",
        text: "Reestablece tu Contraseña",
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                <div style="background-color: #075985; padding: 30px; text-align: center;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Recuperación de Contraseña</h1>
                </div>
                <div style="padding: 30px; background-color: #ffffff; color: #334155;">
                    <p style="font-size: 16px;">Hola <strong style="color: #075985;">${nombre}</strong>,</p>
                    <p style="font-size: 16px; line-height: 1.6;">Has solicitado reestablecer tu contraseña en nuestro sistema. Para generar una nueva, haz click en el siguiente enlace:</p>
                    
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="${process.env.FRONTEND_URL}/olvide-password/${token}" style="background-color: #f97316; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; display: inline-block;">Reestablecer Contraseña</a>
                    </div>
                    
                    <p style="font-size: 14px; color: #64748b; margin-top: 30px;">Si no solicitaste este cambio, ignora este mensaje. Tu cuenta sigue estando segura.</p>
                </div>
            </div>
        `,
    });

    console.log("Mensaje de recuperación enviado: %s", info.messageId);
}


export const emailNuevoTurno = async (datos) => {
    const { email, nombre, medico, especialidad, fecha, hora } = datos;
    const transport = crearTransporte();

    const info = await transport.sendMail({
        from: '"Consultorio Médico" <turnos@consultorio.com>',
        to: email,
        subject: "Confirmación de tu Turno Médico",
        text: "Confirmación de tu Turno Médico",
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                <div style="background-color: #075985; padding: 30px; text-align: center;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px;">¡Turno Confirmado!</h1>
                </div>
                
                <div style="padding: 30px; background-color: #ffffff; color: #334155;">
                    <p style="font-size: 16px;">Hola <strong style="color: #075985;">${nombre}</strong>,</p>
                    <p style="font-size: 16px; line-height: 1.6;">Tu cita ha sido agendada correctamente en nuestro sistema. Aquí tienes los detalles:</p>
                    
                    <div style="background-color: #f0f9ff; border-left: 4px solid #f97316; padding: 20px; border-radius: 0 8px 8px 0; margin: 25px 0;">
                        <p style="margin: 8px 0; font-size: 15px;"><strong>Especialista:</strong> ${medico}</p>
                        <p style="margin: 8px 0; font-size: 15px;"><strong>Especialidad:</strong> <span style="text-transform: capitalize;">${especialidad}</span></p>
                        <p style="margin: 8px 0; font-size: 15px;"><strong>Fecha:</strong> ${fecha}</p>
                        <p style="margin: 8px 0; font-size: 15px;"><strong>Horario:</strong> ${hora} hs</p>
                    </div>
                    
                    <p style="font-size: 15px; line-height: 1.6;">Por favor, recuerda presentarte <strong>15 minutos antes</strong> para realizar la admisión con tu DNI y credencial de obra social.</p>
                    
                    <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;" />
                    
                    <p style="font-size: 13px; color: #64748b; text-align: center;">Si necesitas cancelar o reprogramar, por favor comunícate con nosotros.<br/>Atentamente, el equipo del Consultorio Médico.</p>
                </div>
            </div>
        `,
    });

    console.log("Email de turno enviado al paciente: %s", info.messageId);
}