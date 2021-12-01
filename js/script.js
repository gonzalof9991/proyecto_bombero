
// Funcion validar
const validar = () =>{
    let user = document.getElementById('usuario').value;
    let pass = document.getElementById('pass').value;
    // Numero de caracteres
    let caractUser = user.length;
    let caractPass = pass.length;
    if( user != '' && pass != ''){
        redirect('index.html'); // Redirecciona a index.html
    }
    else if (caractUser === 0 && caractPass === 0){
        mensaje('p-msg-1','Campo Vacio','danger');
        mensaje('p-msg-2','Campo Vacio','danger');
    }
    else if (caractUser === 0){
        mensaje('p-msg-1','Campo Vacio','danger');
    }
    else if(caractPass === 0){
        mensaje('p-msg-2','Campo Vacio','danger');
    }
    
    if (caractUser > 1){
        mensaje('p-msg-1','Valido','success');
    }

    if(caractPass > 1){
        mensaje('p-msg-2','Valido','success');
    }
    console.log(user.length);
    
    
}


// Funcion mostrar mensaje
const mensaje = (id,text,color) => {
    let msg = document.getElementById(id);
    msg.className = `alert-${color} `;
    msg.style.borderRadius = 5 + 'px';
    msg.style.width = 115 + 'px';
    msg.style.marginTop = 5 +'px';
    msg.innerHTML = text;
}

// Funcion para redireccionar a una pagina
const redirect = (url) =>{
    location.href = url;
}


// Api bombero
let url = 'https://raw.githubusercontent.com/MrCutux/SGVApp/master/apibomb.json';
let bomberos = [];
const peticion = async() =>{
    const res = await fetch(url);
    const data = await res.json();
    //console.log(data);
    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const arreglo = data[key];
          mostrarInformacion(arreglo);
          
          
          
        }
      }
}

crearFila = (rut,pnom,appat,apmat,direc,ciudad,fecnac,comp,fecin,reg,cargo,estado) =>{
    return `
    
    <tr>
        <th> <button class="form-control  btn-list" data-toggle="modal" data-target="#modalRut"> ${rut} </button> </th>
        <td>${pnom}</td>
        <td>${appat}</td>
        <td>${apmat}</td>
        <td>${direc}</td>
        <td>${ciudad}</td>
        <td>${fecnac}</td>
        <td>${comp}</td>
        <td>${fecin}</td>
        <td>${reg}</td>
        <td>${cargo}</td>
        <td>${estado}</td>
        <td>
            <div class="row">
                 <div class="col">
                
                    <img title="Actualizar" onclick="mensajeModal(2)" data-toggle="modal" data-target="#modalMsj"  class="opcion-table" src="https://cdn-icons-png.flaticon.com/128/942/942748.png" alt="">
                 
                </div>
                 <div class="col">
                    
                    <img title="Eliminar" data-toggle="modal" data-target="#modalMsj" onclick="mensajeModal(1)" class="opcion-table" src="https://cdn-icons-png.flaticon.com/128/3221/3221897.png" alt="">
                    
                </div>
                 
            </div>
        </td>
    </tr>
    
    `
}

/* "rut": "16201197-9",
"nombre1": "Ignacio",
"apellido1": "Cuturrufo",
"apellido2": "Gonzalez",
"direccion": "Los Nardos 2089",
"ciudad": "Quilpue",
"fechanac": "07-05-1986",
"compañia": "Primera",
"fechaingreso": "15-12-2005",
"nreg": "1009",
"cargo": "Secretario",
"estado": "Activo", */


const mensajeModal = (p) => {
    let bodyModal =  document.getElementById('body-msg');
    if (p === 1) {
        bodyModal.className = 'alert-danger';
        bodyModal.innerHTML = 'Ficha eliminada';   
    }
    else{
        bodyModal.className = 'alert-success';
        bodyModal.innerHTML = 'Ficha actualizada';   
    }
    
}

const mjeModal = (p) => {
    let bodyModal =  document.getElementById('body-msg');
    if (p === 1) {
        bodyModal.className = 'alert-danger';
        bodyModal.innerHTML = 'Rol eliminado';   
    }
    else{
        bodyModal.className = 'alert-success';
        bodyModal.innerHTML = 'Rol otorgado';   
    }
    
}



mostrarInformacion = (a) =>{
    let array = a;
    let section = document.getElementById('tbody');
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].usuario);
        section.innerHTML += crearFila(array[i].rut,array[i].nombre1,array[i].apellido1,
            array[i].apellido2,
            array[i].direccion,
            array[i].ciudad,
            array[i].fechanac,
            array[i].compañia,
            array[i].fechaingreso,
            array[i].nreg,
            array[i].cargo,
            array[i].estado)
        bomberos.push(array[i]);
        
    }
}
peticion();


// Modal


const mostrarModal = () =>{
    return `
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Creacion de ficha</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
                <div class="col">
                    <input id="rut" name="rut" type="text" class="form-control" placeholder="Rut">
                </div>
                <div class="col">
                    <input type="text" id="nombre" name="nombre" class="form-control" placeholder="Nombre">   
                </div>
            </div>
            <div class="row">
              <div class="col">
                  <input id="appat" name="appat" type="text" class="form-control" placeholder="Apellido Paterno">
              </div>
              <div class="col">
                  <input type="text" id="apmat" name="apmat" class="form-control" placeholder="Apellido Materno">   
              </div>
              </div>
              <div class="row">
                  <div class="col">
                      <input id="direc" name="direc" type="text" class="form-control" placeholder="Direccion">
                  </div>
                  <div class="col">
                      <input title="Fecha nacimiento" type="date" id=fecnac" name="fecnac" class="form-control" >   
                  </div>
              </div>
              <div class="row">
                  <div class="col">
                      <input id="compa" name="compa" type="text" class="form-control" placeholder="Compañia">
                  </div>
                  <div class="col">
                      <input title="Fecha ingreso" type="date" id=feciin" name="feciin" class="form-control" >   
                  </div>
              </div>
              <div class="row">
                  <div class="col">
                      <input id="nroreg" name="nroreg" type="text" class="form-control" placeholder="Nro registro">
                  </div>
                  <div class="col">
                      <input type="text" id=cargo" name="cargo" class="form-control" placeholder="Cargo">   
                  </div>
                  <div class="col">
                      <input type="text" id=estado" name="estado" class="form-control" placeholder="Estado">   
                  </div>
              </div>
              <div class="row">
                  <div class="col">
                  <div class="form-group">
                  <label for="select" class="label-option">¿Es nuevo en la institucion?</label>
                  <select id="select" class="form-control" name="select" onclick="mensajeSelect()">
                      <option value="1">Si</option>
                      <option value="2">No</option>
                  </select>
              </div>
                  </div>
                  
              </div>
              <div id="div-U">
              </div>
              <div id="div-msg">
              
              </div>
              
  
          </div>
          <div class="modal-footer">
            <button type="button" onclick="mensajeDiv(2)" class="btn btn-success" data-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary" onclick="mensajeDiv(1)">Crear</button>
          </div>
        </div>
      </div>
    </div>
    
    
    
    `
}



const agregarModal = () =>{
    let body = document.getElementById('body');
    body.innerHTML += mostrarModal(); 
}

const mensajeDiv = (opcion) =>{
    if(opcion === 1){
        let div = document.getElementById('div-msg');
        div.innerHTML = validarMensaje();
    }
    else{
        let div = document.getElementById('div-msg');
        div.innerHTML = '';
    }
   
}

const validarMensaje = () =>{
    return `
    <p class="alert-success p-msg">Ficha creada exitosamente</p>
    
    `
}





/*

sanciones anteriores
cargos anteriores
compañia
ciudad

*/


// Usuario antiguo 

const mensajeSelect = () =>{

let select = document.getElementById('select').selectedIndex;
console.log(select);
let div = document.getElementById('div-U');

if(select === 1){
    
    div.innerHTML = `
    <div class="row">
        <div class="col">
            <input type="text" class="form-control" placeholder="Compañia anterior" id="compañia-u">
        </div>
        <div class="col">
            <input type="text" class="form-control" placeholder="Ciudad" id="ciudad-u">
        </div>
    </div>
    <div class="row">
        <div class="col">
            <textarea placeholder="Sanciones anteriores" name="sanciones" id="sanciones" class="form-control" cols="30" rows="10"></textarea>
        </div>
        <div class="col">
            <textarea placeholder="Premios anteriores" name="premios" id="premios" class="form-control" cols="30" rows="10"></textarea>
        </div>
    </div>
    
    
    `
}
else{
    div.innerHTML = '';
}
}


// Boton imprimir

const imprimir = (p) =>{
    let div = document.getElementById('imprimir');
    if (p === 1) {
        div.innerHTML = `
        <p class="alert-success p-imprimir">
            Preparando para imprimir...
        </p>
        `     
    }
    else{
        div.innerHTML = '';
    }
   
}
