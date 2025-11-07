

function ingresarFactura() {
    const formIngresarFactura = document.getElementById(`formIngresarFactura`);
    formIngresarFactura.classList.remove(`d-none`)    
}



/* Proveedores con class y objetos */


class Proveedores {
    constructor(cuitParam, razonSocialParam) {
        this.cuit = cuitParam,
        this.razonSocial = razonSocialParam
    }
}

const proveedorMiguel = new Proveedores (
    "20397324185",
    "Miguel Angel Zambrano"
)

const proveedorMiguel2 = new Proveedores (
    "20397324186",
    "Miguel 2"
)

const proveedorMiguel3 = new Proveedores (
    "20397324187",
    "Miguel 3"
)

const listadoProveedores = [proveedorMiguel, proveedorMiguel2, proveedorMiguel3]




/* 
Resumen de Cambios Clave
Función limpiarCUIT: Limpia el valor del input quitando guiones o espacios para que coincida con los CUITs puros que tienes en listadoProveedores.

Función buscarProveedor: Usa el método Array.prototype.find() para iterar sobre listadoProveedores y devolver el objeto completo cuando la propiedad cuit coincida.

El Evento blur:

inputCuit.addEventListener('blur', ...) es la instrucción que dice: "Cuando el usuario termine de escribir en el campo CUIT y haga clic en otro lado, ejecuta esta función".

Dentro de la función, llama a buscarProveedor y usa el resultado para llenar (inputProveedor.value = ...) el campo de Proveedor.
*/



// Función utilitaria para limpiar el CUIT
function limpiarCUIT(cuit) {
    // Elimina cualquier carácter que no sea un número
    return cuit.replace(/[^0-9]/g, '');
}


// Función que busca el proveedor en el array
function buscarProveedor(cuitIngresado) {
    const cuitLimpio = limpiarCUIT(cuitIngresado);

    if (cuitLimpio.length !== 11) {
        return null; //El CUIT debe tener 11 dígitos
    }

    //Usamos .find() para recorrer el array y encontrar la coincidencia

    const proveedorEncontrado = listadoProveedores.find(proveedores =>{
        return proveedores.cuit === cuitLimpio
    });

    return proveedorEncontrado
}


const inputCuit = document.getElementById(`cuit`);
const inputProveedor = document.getElementById(`proveedor`);

//EVENTO CLAVE: Se dispara cuando el input CUIT pierde el foco (blur)

inputCuit.addEventListener(`blur`, () => {
    // 1. Obtener el valor del CUIT ingresado
    const cuitValor = inputCuit.value;

    // 2. Buscar el proveedor
    const proveedor = buscarProveedor(cuitValor);

    // 3. Evaluar el resultado y autocompletar
    if(proveedor){
        // Si el proveedor existe, llena el input 'Proveedor'
        inputProveedor.value = proveedor.razonSocial;

        // Opcional: Podrías deshabilitar el campo para que el usuario no lo edite
        inputProveedor.readOnly = true;
    } else {
        // Si no existe, vacía el campo 'Proveedor' y avisa
        inputProveedor.value = "Proveedor no encontrado";

        // Asegura que se pueda escribir si no lo encuentra
        inputProveedor.readOnly = false;
    
        if(limpiarCUIT(cuitValor).length === 11) {
        alert(`CUIT no registrado. Por favor ingrese razon social de forma manual`)
    }
    }

    


});





const formIngresarFactura = document.getElementById(`formIngresarFactura`);

function registrarFactura(e) {
    e.preventDefault();

    
    const inputFechaEmision = document.getElementById(`fechaEmision`).value.trim();
    const inputNumeroComprobante = document.getElementById(`numeroComprobante`).value.trim();
    const inputImporteNeto = document.getElementById(`importeNeto`).value.trim();
    const inputImporteIva = document.getElementById(`importeIva`).value.trim();
    const inputImporteTotal = document.getElementById(`importeTotal`).value.trim();


}

formIngresarFactura.addEventListener("submit", registrarFactura)