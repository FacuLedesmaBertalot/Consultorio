import Testimonio from "../Models/Testimonio.js";


// Rutas Públicas

const crearTestimonio = async (req, res) => {
    try {
        const testimonio = new Testimonio(req.body);
        const testimonioGuardado = await testimonio.save();
        res.json({ 
            msg: "Gracias por tu opinión. Será revisada a la brevedad.", 
            testimonio: testimonioGuardado 
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Hubo un error al guardar el testimonio" });
    }
};

const obtenerTestimoniosPublicos = async (req, res) => {
    try {
        const testimonios = await Testimonio.find({ aprobado: true })
            .sort({ createdAt: -1 })
            .limit(4);
        res.json(testimonios);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Hubo un error al obtener los testimonios" });
    }
};

// Rutas Privadas

const obtenerTestimoniosAdmin = async (req, res) => {
    try {
        const testimonios = await Testimonio.find().sort({ createdAt: -1 });
        res.json(testimonios);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Hubo un error" });
    }
};

const cambiarEstadoTestimonio = async (req, res) => {
    const { id } = req.params;
    try {
        const testimonio = await Testimonio.findById(id);
        if (!testimonio) {
            return res.status(404).json({ msg: "Testimonio no encontrado" });
        }

        testimonio.aprobado = !testimonio.aprobado; 
        await testimonio.save();
        
        res.json(testimonio);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Hubo un error al actualizar" });
    }
};

const eliminarTestimonio = async (req, res) => {
    const { id } = req.params;
    try {
        const testimonio = await Testimonio.findById(id);
        if (!testimonio) {
            return res.status(404).json({ msg: "Testimonio no encontrado" });
        }

        await testimonio.deleteOne();
        res.json({ msg: "Testimonio Eliminado" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Hubo un error al eliminar" });
    }
};

export {
    crearTestimonio,
    obtenerTestimoniosPublicos,
    obtenerTestimoniosAdmin,
    cambiarEstadoTestimonio,
    eliminarTestimonio
};