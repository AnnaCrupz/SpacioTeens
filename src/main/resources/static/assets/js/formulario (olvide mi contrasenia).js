const d=document;
const formularioGET=d.getElementById('inicSesion');
var id=1;
const urlPost=`http://localhost:8080/usuarios/${id}`;
const nameUsuario=d.getElementById('nameUser');
const password=d.getElementById('password');

//---GET

const formulario = document.getElementById('olvCont');
const inputs = document.querySelectorAll('input');



const expresiones = {
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //Debe contener @ y dominio
}

const campos = {
	email: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "email":
			validarCampo(expresiones.email, e.target, 'email');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-xmark');
		document.querySelector(`#grupo__${campo} .form__input-error`).classList.remove('form__input-error-activo');
			campos[campo] = true;
		
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-xmark');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .form__input-error`).classList.add('form__input-error-activo');
		campos[campo] = false;
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

	
formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos.email==true){
		setTimeout(()=>{
			formulario.reset();
			window.open("./olvidCont2 (copia).html","_self");
		},3000);
	/*document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);
		setTimeout(()=>{
			formulario.reset();
			window.open("./seccion-perfil-usuario.html","_self");
		},5000);
		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		}); */
	} else {
		console.log("error");
		/*document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
		setTimeout(()=>{
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		},4000) */
	} 
});
