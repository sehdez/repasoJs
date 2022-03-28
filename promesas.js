
const empleados = [
    {
        id    : 1,
        nombre: 'Sergio'
    },
    {
        id    : 2,
        nombre: 'Blis'
    },
    {
        id    : 3,
        nombre: 'David'
    }
];

const salarios = [
    {
        id     : 1,
        salario: 1000 
    },
    {
        id     : 2,
        salario: 1500 
    }
];

const id = 3;

const getEmpleado = ( id , callback ) =>{
    const empleado = empleados.find( e => e.id === id )?.nombre;
    
    const promesa = new Promise( ( resolve, reject ) => {
        ( empleado )
            ? resolve( empleado )
            : reject( `El usuario con el id ${ id } no existe` );
    });
    return promesa;
}

const getSalario = ( id ) => {
    const salario = salarios.find ( s => s.id === id )?.salario;
    return new Promise ( ( resolve, reject ) => {
        ( salario )
            ? resolve( salario )
            : reject( `El usuario con id ${ id } no tiene salario registrado` );
    })
}

// getEmpleado ( id )
//     .then ( empleado => console.log( empleado ))
//     .catch(err => console.log( err ));

// getSalario( id )
//     .then( salario => console.log( salario ))
//     .catch(err => console.log(err));

let nombre;
getEmpleado ( id )
    .then( empleado => {
        nombre = empleado;
        return getSalario( id );
    })
    .then( salario =>{
        console.log( `El empleado ${ nombre } tiene un salario de $${ salario } mensuales` )
    })
    .catch( err => console.log( err ));
