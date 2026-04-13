import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import generarId from '../helpers/generarId.js';

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


// Middlewate para hashear la contraseña antes de guardar
medicosSchema.pre('save', async function(next) {

    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

// Método para comprobar el password en el Login
medicosSchema.methods.comprobarPassword = async function(passwordFormulario) {
    return await bcrypt.compare(passwordFormulario, this.password);
};

const Medico = mongoose.model("Medico", medicosSchema);

export default Medico;