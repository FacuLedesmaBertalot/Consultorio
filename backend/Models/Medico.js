import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import generarId from '../helpers/generarId.js';
import { subirACloudinary } from "../middleware/subirImagen.js";

const medicosSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    matricula: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    especialidad: {
        type: String,
        required: true,
        trim: true
    },
    telefono: {
        type: String,
        trim: true
    },
    imagen: {
        type: String,
        trim: true,
        default: null
    },
    token: {
        type: String,
        default: generarId
    },
    confirmado: {
        type: Boolean,
        default: false
    },

}, {
    timestamps: true
});


// Middleware para hashear la contraseña antes de guardar
medicosSchema.pre('save', async function() {

    if (!this.isModified('password')) {
        return;
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

// Método para comprobar el password en el Login
medicosSchema.methods.comprobarPassword = async function(passwordFormulario) {
    return await bcrypt.compare(passwordFormulario, this.password);
};

const Medico = mongoose.models.Medico || mongoose.model('Medico', medicosSchema);

export default Medico;