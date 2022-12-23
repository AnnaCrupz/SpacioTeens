/* Tendremos que evaluar que las contraseñas sean iguales, tal vez con un if */
const d=document;
const alertPlaceholder = d.getElementById('liveAlert');
const alertPlaceholder2 = d.getElementById('liveAlert2');
const alertPlaceholder3 = d.getElementById('liveAlert3');
const alertPlaceholder4= d.getElementById('liveAlert4')
const alertPlaceholder5= d.getElementById('liveAlert5')
const alertPlaceholder6= d.getElementById('liveAlert6')
const $form = d.querySelector(".form-control"),
    $inputs=d.querySelectorAll(".form-control[required]");
  
var message;
let alerta;
let contador=0,contador2=0, contador3=0, contador4=0, contador5=0;


$inputs[0].addEventListener("click",()=> {if(contador4==0){
  elegir(0);
  contador4++;
}}  )
$inputs[1].addEventListener("click",()=> {if(contador5==0){
  elegir(1);
  contador5++;
}}  )
$inputs[3].addEventListener("click",()=> {if(contador2==0){
  elegir(3);
  contador2++;
}}  )
$inputs[4].addEventListener("click",()=>{ if(contador==0){
                                              elegir(4) 
                                              contador++} 
                                              
  })

const alertTrigger = document.getElementById('sendMessageButton')
    alertTrigger.addEventListener('click', () => {
            pass=d.getElementById("password").value;
            pass1=d.getElementById("password_repeat").value;
            if (pass!=pass1) {
                   elegir(5);
                   $inputs[4].value="";
                   $inputs[5].value="";
                  } else{
                
            }
    } )

    
  function elegir(inputnum) {
    
    const inputnumero=inputnum
      const wrapper = document.createElement('div')
      if (inputnumero==5) {
        alerta='danger';
        message= "Las contraseñas no coinciden";
      } else if(inputnumero==6){
        alerta='danger';
        message= "La contraseña no cumple con los requisitos ";
      }
      else{
        alerta='warning';
        message= $inputs[inputnumero].title;
      }
    
     wrapper.innerHTML = [
    `<div class="alert alert-${alerta}" role="alert">`,
    `   <div>${message}</div>`,
     '</div>'
    ].join('')

    if (inputnumero===5) {
      alertPlaceholder2.append(wrapper);

      } else if (inputnumero===4) {
      alertPlaceholder.append(wrapper);
      } else if(inputnumero==3){
        alertPlaceholder3.append(wrapper);
      } else if(inputnumero==0){
        alertPlaceholder5.append(wrapper);
      } else if(inputnumero==1){
        alertPlaceholder6.append(wrapper);
      }
       else if(inputnumero==6){
        console.log("Entro a exec");
        if (contador3==0) {
          alertPlaceholder4.append(wrapper)
          contador3++;
          $inputs[4]="";
          $inputs[5]="";
        }
        
      }
      else {
        console.log("error");
      } 

};


alertTrigger.addEventListener("click",(e)=>{
    if (e.target.matches(".form-control[required]")) {
        let $input=e.target,
        pattern=$input.pattern;
        let REGEX=new RegExp(pattern);
        return !REGEX.exec($input.value)?
        alert("   "):console.log("No hay exec");;
      
        
        if (!pattern && $inputs.value!="") {
            console.log("!NO TIENE PATRON");
        }
    } }
)
