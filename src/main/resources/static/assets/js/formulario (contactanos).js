const formularioGET=d.getElementById('formGetUsuario');
var id=1;
const urlGet=`http://localhost:8080/contactanos/${id}`;
const nombre=d.getElementById('nombre');
var nombreV=nombre.value;
const email=d.getElementById('email');
var emailV=email.value;
const asunto=d.getElementById('asunto');
var asuntoV=asunto.value;
const mensaje=d.getElementById('message');
var mensajeV=mensaje.value;

//-------


const formulario = document.getElementById('contactForm');
const inputs = document.querySelectorAll('input');



const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //Debe contener @ y dominio
	asunto: /^[\s\S]{1,40}$/, // Hasta 40 caracteres
	mensaje: /^[\s\S]{1,200}$/ //De contener entre 1 y 200 caracteres
}

const campos = {
	nombre: false,
	email: false,
	asunto: false,
	mensaje: false
	
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "email":
			validarCampo(expresiones.email, e.target, 'email');
		break;
		case "asunto":
			validarCampo(expresiones.asunto, e.target, 'asunto');
		break;
		case "mensaje":
			validarCampo(expresiones.mensaje, e.target, 'mensaje');
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

	
	if(campos.nombre==true && campos.email==true && campos.asunto==true ){
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);
		setTimeout(()=>{
			formulario.reset();
			window.open("./seccion-perfil-usuario.html","_self");
		},5000);
		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		console.log("error");
	}
});
