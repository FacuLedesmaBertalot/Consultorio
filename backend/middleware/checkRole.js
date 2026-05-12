const checkRole = (rolRequerido) => {
    return (req, res, next) => {
        if (!req.medico) {
            return res.status(401).json({ msg: "No estás autenticado" });
        }

        if (req.medico.rol !== rolRequerido) {
            return res.status(403).json({ msg: "Acceso denegado: No tienes permisos de Administrador" });
        }

        next();
    };
};

export default checkRole;