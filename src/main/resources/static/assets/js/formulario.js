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
/*Inicio segunda contraseña */
const pass2 = document.getElementById('password_repeat');
const ver2=document.getElementById('ver-2');
ver2.addEventListener("click",()=>{
	pass2.type="text";
	ver2.classList.remove('fa-eye-slash')
	ver2.classList.add('fa-eye')
	
	setTimeout(() => {
		pass2.type="password";
		ver2.classList.remove('fa-eye')	}, 6000);
	ver2.classList.add('fa-eye-slash')	
})

/*Fin ver segunda contraseña */



const formulario = document.getElementById('updateForm');
const inputs = document.querySelectorAll('input');



const expresiones = {
	nameUser: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellidos: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //Debe contener @ y dominio
	domicilio: /^[\s\S]{1,40}$/, //De contener entre 1 y 40 caracteres
	cP: /^\d[0-9]{4,5}$/,  //Debe contener 5 digitos numericos (codigo postal mexicano)
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
	password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])([A-Za-z\d$@$!%*?&#.$($)$-$_]|[^ ]){8,16}$/, // password
	password_repeat: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])([A-Za-z\d$@$!%*?&#.$($)$-$_]|[^ ]){8,16}$/, // password-repeat
	
}

const campos = {
	nameUser: false,
	nombre: false,
	apellidos: false,
	email: false,
	domicilio: false,
	cP: false,
	telefono: false,
	password: false,
	password_repeat: false
	
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nameUser":
			validarCampo(expresiones.nameUser, e.target, 'nameUser');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "apellidos":
			validarCampo(expresiones.apellidos, e.target, 'apellidos');
		break;
		case "email":
			validarCampo(expresiones.email, e.target, 'email');
		break;
		case "domicilio":
			validarCampo(expresiones.domicilio, e.target, 'domicilio');
		break;
		case "cP":
			validarCampo(expresiones.cP, e.target, 'cP');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarpassword_repeat();
		break;
		case "password_repeat":
			validarCampo(expresiones.password, e.target, 'password_repeat');
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

const validarpassword_repeat = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password_repeat');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password_repeat`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password_repeat`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password_repeat i`).classList.add('fa-circle-xmark');
		document.querySelector(`#grupo__password_repeat i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password_repeat .form__input-error`).classList.add('form__input-error-activo');
		campos['password_repeat'] = false;
	} else {
		document.getElementById(`grupo__password_repeat`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password_repeat`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password_repeat i`).classList.remove('fa-circle-xmark');
		document.querySelector(`#grupo__password_repeat i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password_repeat .form__input-error`).classList.remove('form__input-error-activo');
		campos['password_repeat'] = true;
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
