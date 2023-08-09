let costo = 0;
let margen = 0;
let valorCliente =0;
export function obtenerCalculos(tipoDeLicencia, tiempoDeContrato, cantidadDeLicencias){

    //Starter para 12 meses en rangos
    
    //Starter - Rango de 1 a 50 
    if (tipoDeLicencia === "starter" && tiempoDeContrato === 12 && cantidadDeLicencias > 0 && cantidadDeLicencias <= 50)
    {
        costo = 1.20;
        margen = 40/100;
        valorCliente = (costo/(1-margen)).toFixed(2);
        return valorCliente;
    }

    //Starter - Rango de 51 a 100 
    else if (tipoDeLicencia === "starter" && tiempoDeContrato === 12 && cantidadDeLicencias > 50 && cantidadDeLicencias <= 100)
    {
        costo = 1.20;
        margen = 39/100;
        valorCliente = (costo/(1-margen)).toFixed(2);
        return valorCliente;
    }

    //Starter - Rango de 101 a 500 
    else if (tipoDeLicencia === "starter" && tiempoDeContrato === 12 && cantidadDeLicencias > 100 && cantidadDeLicencias <= 500)
    {
        costo = 1.20;
        margen = 37/100;
        valorCliente = (costo/(1-margen)).toFixed(2);
        return valorCliente;
    }

    //Starter - Rango más de 500 
    else if(tipoDeLicencia === "starter" && tiempoDeContrato === 12 && cantidadDeLicencias > 500)
    {
        costo = 1.20;
        margen = 35/100;
        valorCliente = (costo/(1-margen)).toFixed(2);
        return valorCliente;
    }


    //Starter para 24 meses en rangos
    
    //Starter - Rango de 1 a 50 
    if (tipoDeLicencia === "starter" && tiempoDeContrato === 24 && cantidadDeLicencias > 0 && cantidadDeLicencias <= 50)
    {
        costo = 1.20;
        margen = 39/100;
        valorCliente = (costo/(1-margen)).toFixed(2);
        return valorCliente;
    }

    //Starter - Rango de 51 a 100 
    else if (tipoDeLicencia === "starter" && tiempoDeContrato === 24 && cantidadDeLicencias > 50 && cantidadDeLicencias <= 100)
    {
        costo = 1.20;
        margen = 37/100;
        valorCliente = (costo/(1-margen)).toFixed(2);
        return valorCliente;
    }

    //Starter - Rango de 101 a 500 
    else if (tipoDeLicencia === "starter" && tiempoDeContrato === 24 && cantidadDeLicencias > 100 && cantidadDeLicencias <= 500)
    {
        costo = 1.20;
        margen = 35/100;
        valorCliente = (costo/(1-margen)).toFixed(2);
        return valorCliente;
    }

    //Starter - Rango más de 500 
    else if(tipoDeLicencia === "starter" && tiempoDeContrato === 24 && cantidadDeLicencias > 500)
    {
        costo = 1.20;
        margen = 33/100;
        valorCliente = (costo/(1-margen)).toFixed(2);
        return valorCliente;
    }


    //Starter para 36 meses en rangos
    
    //Starter - Rango de 1 a 50 
    if (tipoDeLicencia === "starter" && tiempoDeContrato === 36 && cantidadDeLicencias > 0 && cantidadDeLicencias <= 50)
    {
        costo = 1.20;
        margen = 37/100;
        valorCliente = (costo/(1-margen)).toFixed(2);
        return valorCliente;
    }

    //Starter - Rango de 51 a 100 
    else if (tipoDeLicencia === "starter" && tiempoDeContrato === 36 && cantidadDeLicencias > 50 && cantidadDeLicencias <= 100)
    {
        costo = 1.20;
        margen = 35/100;
        valorCliente = (costo/(1-margen)).toFixed(2);
        return valorCliente;
    }

    //Starter - Rango de 101 a 500 
    else if (tipoDeLicencia === "starter" && tiempoDeContrato === 36 && cantidadDeLicencias > 100 && cantidadDeLicencias <= 500)
    {
        costo = 1.20;
        margen = 33/100;
        valorCliente = (costo/(1-margen)).toFixed(2);
        return valorCliente;
    }

    //Starter - Rango más de 500 
    else if(tipoDeLicencia === "starter" && tiempoDeContrato === 36 && cantidadDeLicencias > 500)
    {
        costo = 1.20;
        margen = 32/100;
        valorCliente = (costo/(1-margen)).toFixed(2);
        return valorCliente;
    }




    //BUSINESS para 12 meses en rangos
    
    //BUSINESS - Rango de 1 a 50 
    if (tipoDeLicencia === "business" && tiempoDeContrato === 12 && cantidadDeLicencias > 0 && cantidadDeLicencias <= 50)
    {
        costo = 1.80;
        margen = 40/100;
        valorCliente = (costo/(1-margen)).toFixed(2);
        return valorCliente;
    }

    //BUSINESS - Rango de 51 a 100 
    else if (tipoDeLicencia === "business" && tiempoDeContrato === 12 && cantidadDeLicencias > 50 && cantidadDeLicencias <= 100)
    {
        costo = 1.80;
        margen = 39/100;
        valorCliente = (costo/(1-margen)).toFixed(2);
        return valorCliente;
    }

    //BUSINESS - Rango de 101 a 500 
    else if (tipoDeLicencia === "business" && tiempoDeContrato === 12 && cantidadDeLicencias > 100 && cantidadDeLicencias <= 500)
    {
        costo = 1.80;
        margen = 37/100;
        valorCliente = (costo/(1-margen)).toFixed(2);
        return valorCliente;
    }

    //BUSINESS - Rango más de 500 
    else if(tipoDeLicencia === "business" && tiempoDeContrato === 12 && cantidadDeLicencias > 500)
    {
        costo = 1.80;
        margen = 35/100;
        valorCliente = (costo/(1-margen)).toFixed(2);
        return valorCliente;
    }


    //BUSINESS para 24 meses en rangos
    
    //BUSINESS - Rango de 1 a 50 
    if (tipoDeLicencia === "business" && tiempoDeContrato === 24 && cantidadDeLicencias > 0 && cantidadDeLicencias <= 50)
    {
        costo = 1.80;
        margen = 39/100;
        valorCliente = (costo/(1-margen)).toFixed(2);
        return valorCliente;
    }

    //business - Rango de 51 a 100 
    else if (tipoDeLicencia === "business" && tiempoDeContrato === 24 && cantidadDeLicencias > 50 && cantidadDeLicencias <= 100)
    {
        costo = 1.80;
        margen = 37/100;
        valorCliente = (costo/(1-margen)).toFixed(2);
        return valorCliente;
    }

    //business - Rango de 101 a 500 
    else if (tipoDeLicencia === "business" && tiempoDeContrato === 24 && cantidadDeLicencias > 100 && cantidadDeLicencias <= 500)
    {
        costo = 1.80;
        margen = 35/100;
        valorCliente = (costo/(1-margen)).toFixed(2);
        return valorCliente;
    }

    //business - Rango más de 500 
    else if(tipoDeLicencia === "business" && tiempoDeContrato === 24 && cantidadDeLicencias > 500)
    {
        costo = 1.80;
        margen = 33/100;
        valorCliente = (costo/(1-margen)).toFixed(2);
        return valorCliente;
    }


    //BUSINESS para 36 meses en rangos
    
    //BUSINESS - Rango de 1 a 50 
    if (tipoDeLicencia === "business" && tiempoDeContrato === 36 && cantidadDeLicencias > 0 && cantidadDeLicencias <= 50)
    {
        costo = 1.80;
        margen = 37/100;
        valorCliente = (costo/(1-margen)).toFixed(2);
        return valorCliente;
    }

    //business - Rango de 51 a 100 
    else if (tipoDeLicencia === "business" && tiempoDeContrato === 36 && cantidadDeLicencias > 50 && cantidadDeLicencias <= 100)
    {
        costo = 1.80;
        margen = 35/100;
        valorCliente = (costo/(1-margen)).toFixed(2);
        return valorCliente;
    }

    //business - Rango de 101 a 500 
    else if (tipoDeLicencia === "business" && tiempoDeContrato === 36 && cantidadDeLicencias > 100 && cantidadDeLicencias <= 500)
    {
        costo = 1.80;
        margen = 32/100;
        valorCliente = (costo/(1-margen)).toFixed(2);
        return valorCliente;
    }

    //business - Rango más de 500 
    else if(tipoDeLicencia === "business" && tiempoDeContrato === 36 && cantidadDeLicencias > 500)
    {
        costo = 1.80;
        margen = 30/100;
        valorCliente = (costo/(1-margen)).toFixed(2);
        return valorCliente;
    }

    else{
        return 0;
    }
}


//Calcular el costo de la implementacion
export function obtenerCostoImplementacion (implementacion){
    return (implementacion === 'si') ? '120.00' : '0.00';
}