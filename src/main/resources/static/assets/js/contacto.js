const d=document;
const alertPlaceholder = d.getElementById('liveAlertPlaceholder')
const alertPlaceholder1 = d.getElementById('liveAlertPlaceholder1')
const alertPlaceholder2 = d.getElementById('liveAlertPlaceholder2')
var message;
let contador=0;

function contactFormValidation() {
  const $form = d.querySelector(".form-control"),
  $inputs=d.querySelectorAll(".form-control[required]");
  console.log($inputs[1]);

  $inputs[0].addEventListener("click",()=>{elegir(0)})
  $inputs[1].addEventListener("click",()=>{elegir(1)})
  $inputs[2].addEventListener("click",()=>{elegir(2)})

  function elegir(inputnum) {
    
    const inputnumero=inputnum
      const wrapper = document.createElement('div')
      message= $inputs[inputnumero].title;
     wrapper.innerHTML = [
    `<div class="alert alert-primary" role="alert">`,
    `   <div>${message}</div>`,
     '</div>'
    ].join('')
    if (inputnumero===0) {
      alertPlaceholder.append(wrapper)
      console.log(inputnum);
      } else if (inputnumero===1) {
      alertPlaceholder1.append(wrapper)
      } else if (inputnumero===2){
        alertPlaceholder2.append(wrapper)
      }else {
        console.log("error");
      } 

};
}
   /* if (contador==0) {
    alertPlaceholder.append(wrapper)
    } else if (contador==1) {
    alertPlaceholder1.append(wrapper)
    } else if (contador==2){
      alertPlaceholder2.append(wrapper)
    }else {
      console.log("error");
    }
    
    contador++; */
    


contactFormValidation()



/*
const names=document.querySelector("input");
names.addEventListener("click",()=>console.log("click"))


function name(params) {
    
}
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-primary" role="alert">`,
    `   <div>${message}</div>`,
     '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

//alert('Ingresa aqui tu nombre', 'warning');

const alertTrigger = document.getElementById('sendMessageButton')
if (alertTrigger) {
    if (names.value.length()==0){
        alertTrigger.addEventListener('click', () => {
            alert('Nice, you triggered this alert message!', 'warning')
    }

  }
} */