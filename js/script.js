
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

if (typeof(Storage) !== "undefined") {
    console.log(1);
} else {
    console.log(2);
}

// Objeto Ficha
function ficha(rut,dv,nombres,appat,apmat,direc,fechaI,tipoU,comuna){
    this.rut = rut;
    this.dv = dv;
    this.nombres = nombres;
    this.appat = appat;
    this.apmat = apmat;
    this.direc = direc;
    this.fechaI = fechaI;
    this.tipoU = tipoU;
    this.comuna = comuna;
}

// Arreglo de fichas 
let fichas = [];

// Funcion agregar ficha
const agregarFicha = () =>{
    // Variables
    let rut = document.getElementById('rut').value;
    let dv = document.getElementById('dv').value;
    let nombres = document.getElementById('nombres').value;
    let appat = document.getElementById('appat').value;
    let apmat = document.getElementById('apmat').value;
    let direc = document.getElementById('direc').value;
    let fechaI = document.getElementById('fechaI').value;
    let tipoU = document.getElementById('tipoU').value;
    let comuna = document.getElementById('comuna').value;
    
    bombero = new ficha(rut,dv,nombres,appat,apmat,direc,fechaI,tipoU,comuna);
    console.log(bombero)
    fichas.push(bombero);
    mostrarDatos(rut,dv,nombres,appat,apmat,direc,fechaI,tipoU,comuna);
}




const mostrarDatos = (rut,dv,nombres,appat,apmat,direc,fechaI,tipoU,comuna) =>{
    let tbody = document.getElementById('tbody');
    
    tbody.innerHTML += `
    <tr>
        <td>${rut}</td>
        <td>${dv}</td>
        <td>${nombres}</td>
        <td>${appat}</td>
        <td>${apmat}</td>
        <td>${direc}</td>
        <td>${fechaI}</td>
        <td>${tipoU}</td>
        <td>${comuna}</td>
        <td>
        <div class="row">
            <div class="col">
            <img title="Actualizar" id="opcion" src="https://cdn-icons.flaticon.com/png/128/2546/premium/2546705.png?token=exp=1637808675~hmac=48c1f6d187a884d3650988a6d02551ba" alt="">
            </div>
            <div class="col">
            <img title="Eliminar" id="opcion" src="https://cdn-icons-png.flaticon.com/128/3221/3221897.png" alt=""> 
            </div>
        </div>
       
        
        </td>
        
    </tr>
`
}

// Hola 
// Validar Campos





