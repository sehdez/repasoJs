
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

const getInfoUsuario = async( id ) => {

    try {
        const empleado = await getEmpleado( id );
        const salario = await getSalario( id );
        return `El empleado ${ empleado } tiene un salario de ${ salario } `;
    }
    catch (error){
        throw error;
    }
}

const id = 3;

getInfoUsuario( id )
    .then ( msg => console.log(msg) )
    .catch(err => console.log(err));