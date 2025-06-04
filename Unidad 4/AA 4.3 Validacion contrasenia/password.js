// versión incompleta o una función débil.
function validContra(contraseña) {
   if (typeof contraseña !== 'string') return NaN;

    const tieneMayúscula = /[A-Z]/.test(contraseña);
    const tieneMinúscula = /[a-z]/.test(contraseña);
    const tieneNúmero = /[0-9]/.test(contraseña);
    const tieneEspecial = /[@#$%^&*()]/.test(contraseña);
    const tienePalabraSignificativa = /(mascota|apodo|ciudad|2023)/i.test(contraseña);
    const sinEspacios = !/\s/.test(contraseña);

    return (
        contraseña.length >= 8 &&
        tieneMayúscula &&
        tieneMinúscula &&
        tieneNúmero &&
        tieneEspecial &&
        tienePalabraSignificativa &&
        sinEspacios
    );
}
module.exports = {validContra};