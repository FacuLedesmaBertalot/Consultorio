import mongoose from 'mongoose';


const pacienteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    telefono: {
        type: String,
        required: true,
        trim: true
    },
    fecha: {
        type: Date,
        required: true
    },
    hora: {
        type: String,
        required: true
    },
    medico: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Medico',
        required: true
    }
}, {
    timestamps: true
});

const Paciente = mongoose.model('Paciente', pacienteSchema);

export default Paciente;