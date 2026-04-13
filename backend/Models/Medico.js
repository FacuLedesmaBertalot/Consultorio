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
        trim: true
    },
    confirmado: {
        type: Boolean,
        default: false
    },

}, {
    timestamps: true
});

const Medico = mongoose.model("Medico", medicosSchema);

export default Medico;