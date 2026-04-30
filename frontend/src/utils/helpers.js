export const esTurnoPasado = (fechaStr) => {
    if (!fechaStr) return false;
    let year, month, day;
    if (fechaStr.includes('/')) {
        [day, month, year] = fechaStr.split('/');
    } else {
        [year, month, day] = fechaStr.split('-');
    }
    const fechaTurno = new Date(year, month - 1, day);
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    return fechaTurno < hoy;
};