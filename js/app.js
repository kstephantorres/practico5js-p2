class Persona{
    #nombre 
    #edad
    #dni
    #sexo //(H hombre, M mujer), 
    #peso  
    #altura
    #nacimiento
    #generacion
    
    constructor(nombre,edad,dni,sexo,peso,altura,nacimiento,generaciones){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#dni = dni;
        this.#sexo = sexo;
        this.#peso = peso;
        this.#altura = altura;
        this.#nacimiento = nacimiento;
        this.#generacion = this.darGeneracion(generaciones)   
    }
    get nombre(){
        return this.#nombre;
    }
    
    set nombre(nombre){
        this.#nombre = nombre;
    }
    
    get edad(){
        return this.#edad;
    }
    
    set edad(edad){
        this.#edad = edad;
    }
    
    get dni(){
        return this.#dni;
    }
    
    set dni(dni){
        this.#dni = dni;
    }
    
    get sexo(){
        return this.#sexo;
    }
    
    set sexo(sexo){
        this.#sexo = sexo;
    }
    
    get peso(){
        return this.#peso;
    }
    
    set peso(peso){
        this.#peso = peso;
    }
    
    get altura(){
        return this.#altura;
    }
    
    set altura(altura){
        this.#altura = altura;
    }
    
    get nacimiento(){
        return this.#nacimiento;
    }
    
    set nacimiento(nacimiento){
        this.#nacimiento = nacimiento;
    }
    get generacion(){
        if(this.#generacion) 
            return this.#generacion
        else{
            return ''
        }
    }
    
    set generacion(generacion){
        this.#generacion = generacion;
    }
    darGeneracion(generaciones){
        let g = null
        if(generaciones)
        {
            generaciones.map((generacion)=>{
                if (this.nacimiento >= generacion.marcoInicio && this.nacimiento <= generacion.marcoFinal) {
                    g =  generacion
                }
            })
        }
        return g
    }
    mostrarGeneracion(){
        return `Nombre: ${this.nombre}
        \nAño de nacimiento: ${this.nacimiento}
        \nGeneracion: ${this.generacion.nombre}
        \nRasgo Característico: ${this.generacion.rasgo}
        `
    }
    esMayorDeEdad(){
        if(this.edad>=18)
            return 'Es mayor de edad'
        else
            return 'Es menor de edad' 
    }
    mostrarDatos(){
        return `Nombre: ${this.nombre}
        \nEdad: ${this.edad}
        \nDNI: ${this.dni}
        \nSexo: ${this.sexo}
        \nPeso: ${this.peso}
        \nAltura: ${this.altura}
        \nNacimiento: ${this.nacimiento}
        \nGENERACIÓN: ${this.generacion.mostrarDatos()} 
        `
    }
}

class Generacion{
    #nombre
    #marcoInicio
    #marcoFinal
    #poblacion
    #circunstancia
    #rasgo
    constructor(nombre,marcoInicio,marcoFinal,poblacion,circunstancia,rasgo){
        this.#nombre = nombre;
        this.#marcoInicio = marcoInicio;
        this.#marcoFinal = marcoFinal;
        this.#poblacion = poblacion;
        this.#circunstancia = circunstancia;
        this.#rasgo = rasgo;
    }
    get nombre(){
        return this.#nombre;
    }
    set nombre(nombre){
        this.#nombre = nombre;
    }
    get marcoInicio(){
        return this.#marcoInicio;
    }
    set marcoInicio(marcoInicio){
        this.#marcoInicio = marcoInicio;
    }
    get marcoFinal(){
        return this.#marcoFinal;
    }
    set marcoFinal(marcoFinal){
        this.#marcoFinal = marcoFinal;
    }
    get poblacion(){
        return this.#poblacion;
    }
    set poblacion(poblacion){
        this.#poblacion = poblacion;
    }
    get circunstancia(){
        return this.#circunstancia;
    }
    set circunstancia(circunstancia){
        this.#circunstancia = circunstancia;
    }
    get rasgo(){
        return this.#rasgo;
    }
    set rasgo(rasgo){
        this.#rasgo = rasgo;
    }
    mostrarDatos(){
        return `
         - Nombre de la generación: ${this.nombre}
         - Marco Temporal: ${this.marcoInicio} - ${this.marcoFinal}
         - Poblacion: ${this.poblacion}
         - Circunstancia: ${this.circunstancia}
         - Rasgo: ${this.rasgo}
        `
    }
}

const generacionZ = new Generacion('Generación Z',1994,2010,7800000,'Expansión masiva de internet','Irreverencia 😛')
const generacionY = new Generacion('Generación Y (millennials)',1981,1993,7200000,'Inicio de la digilitación','Frustración 😖')
const generacionX = new Generacion('Generación X',1969,1980,9300000,'Crisis del 73 y transición española','Obsesión por el éxito 😎')
const generacionBB = new Generacion('Baby Boom',1949,1968,12200000,'Paz y explosión demográfica','Ambición 🤑')
const generacionSG = new Generacion('Silent Generation (Los niños de la posguerra)',1930,1948,6300000,'Conflictos bélicos','Austeridad 😐')

const generaciones = [generacionZ,generacionY,generacionX,generacionBB,generacionSG]

let persona = null
const formulario = document.querySelector('form')
const btnMostrarDatos = document.querySelector('.btn-primary')
const btnMayor = document.querySelector('.btn-secondary')

const inputNombre = document.getElementById('inputNombre')
const inputEdad = document.getElementById('inputEdad')
const inputDni = document.getElementById('inputDni')

const inputsGenero = document.getElementsByName('genero')
// console.log(inputsGenero)

const inputPeso = document.getElementById('inputPeso')
const inputAltura = document.getElementById('inputAltura')
const inputNacimiento = document.getElementById('inputNacimiento')

formulario.addEventListener('submit',(event)=>{
    event.preventDefault()
    // const persona1 = new Persona('Kevin',30,'M',89,170,1993,generaciones)
    const nombre = inputNombre.value
    const edad = inputEdad.value
    const dni = inputDni.value

    // primera version
    // const genero = (()=>{
    //     for(input of inputsGenero){
    //         if(input.checked) 
    //             return input.value
    //     }
    // } )()  
    
    // segunda version
    const genero = Array.from(inputsGenero).find(input => input.checked)?.value

    const peso = inputPeso.value
    const altura = inputAltura.value
    const nacimiento = inputNacimiento.value
    persona = new Persona(nombre,edad,dni,genero,peso,altura,nacimiento,generaciones)

    Array.from(document.querySelectorAll('input')).forEach(input => input.disabled=true)
    btnMostrarDatos.disabled = false
    btnMayor.disabled = false
    event.target.querySelector('button[type=submit]').innerText = 'Nuevo'

})

