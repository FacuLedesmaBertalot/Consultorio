import mongoose from 'mongoose';

const testimonioSchema = mongoose.Schema({
    nombre: { type: String, required: true },
    texto: { type: String, required: true },
    estrellas: { type: Number, required: true, min: 1, max: 5 },
    aprobado: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('Testimonio', testimonioSchema);