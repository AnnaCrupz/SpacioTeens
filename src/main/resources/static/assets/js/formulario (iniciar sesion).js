const d=document;
const formularioGET=d.getElementById('inicSesion');
var id=1;
const urlPost=`http://localhost:8080/usuarios/${id}`;
const nameUsuario=d.getElementById('nameUser');
const password=d.getElementById('password');

//---GET

/*Mostrar contrasenia 1*/
const pass1 = document.getElementById('password');
	
const ver1=document.getElementById('ver-1');
ver1.addEventListener("click",()=>{
	pass1.type="text";
	ver1.classList.remove('fa-eye-slash')
	ver1.classList.add('fa-eye')
	setTimeout(() => {
		pass1.type="password";
		ver1.classList.remove('fa-eye')	}, 6000);
	ver1.classList.add('fa-eye-slash')
	
})
/*Fin mostrar contrasenia 1*/ 

const formulario = document.getElementById('inicSesion');
const inputs = document.querySelectorAll('input');



const expresiones = {
	nameUser: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])([A-Za-z\d$@$!%*?&#.$($)$-$_]|[^ ]){8,16}$/, // password
	
}

const campos = {
	nameUser: false,
	password: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nameUser":
			validarCampo(expresiones.nameUser, e.target, 'nameUser');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarpassword_repeat();
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

	const terminos = document.getElementById('terminos');
	if(campos.nameUser==true && campos.nombre==true && campos.apellidos==true && campos.domicilio==true && campos.cP==true && campos.email==true && campos.telefono==true && campos.password==true && campos.password_repeat==true && terminos.checked){
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
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
		setTimeout(()=>{
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		},4000)
	}
});
