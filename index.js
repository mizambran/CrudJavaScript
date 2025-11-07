

function ingresarFactura() {
    const formIngresarFactura = document.getElementById(`formIngresarFactura`);
    formIngresarFactura.classList.remove(`d-none`)    
}


const formIngresarFactura = document.getElementById(`formIngresarFactura`);

function registrarFactura(e) {
    e.preventDefault();

    
}

formIngresarFactura.addEventListener("submit", registrarFactura)