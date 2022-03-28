
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

const getEmpleado = ( id , callback ) =>{
    const empleado = empleados.find( e => e.id === id )
    if ( empleado ){
        callback( null, empleado );
    }else{
        callback( `El empleado con id: ${ id } no existe` );
    }
}

const getSalario = (id, callback) =>{
    const salario = salarios.find ( s => s.id === id );
    if (salario){
        callback( null, salario.salario );
    }else{
        callback( `El empleado con id: ${ id } no tiene salario` );
    }
}



getEmpleado( 4, ( err, empleado ) =>{
    if ( err ){
        console.log('Error');
        return console.log( err );
    }else{
        console.log('El usuario existe');
        return console.log(empleado);
    }
});

getSalario( 2, ( err, salario )=>{
    if( err ){
        console.log( 'Error' );
        return console.log( err );
    }else{
        console.log( 'El usuario tiene salario' );
        return console.log( salario );
    }
} )