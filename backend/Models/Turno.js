import mongoose from 'mongoose';

const turnoSchema = mongoose.Schema({
    medico: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Medico',
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    horario: {
        type: String,
        required: true
    },
    paciente: {
        nombre: { type: String, required: true},
        dni: { type: String, required: true},
        email: { type: String, required: true}
    }
}, { timestamps: true});

turnoSchema.index({ medico: 1, fecha: 1, horario: 1}, { unique: true });

const Turno = mongoose.model('Turno', turnoSchema);

export default Turno;