import validator from './validator.js';
// console.log(validator.isValid('12345'));
// console.log(maskify);
// validator.maskify
const validat1 = document.getElementById("validarNumCard");
const validat0 = document.getElementById("num");

// console.log(typeof validat1);
// console.log(validat1);
//console.log(end);

validat1.addEventListener("click", () => {
  document.querySelector("#resul");
  let validatorFinal = document.getElementById("resul");
  //console.log(validatorFinal.value)
  validatorFinal.innerHTML = validator.isValid(validat0.value)
  validat0.value = validator.maskify(validat0.value)

})
// console.log(validat1)





//validat0.addEventListener("keyup", ()=>{
// let validadorfinal2= document.getElementById("validator");
//validat0.value = validator.maskify(validat0.value)

//})
//console.log(validat0)
//detectar los numeros que estan en posicion par 
//const sum = 0;
//for(let i=0; i<invertido.length; i++){
//    let tmp=carray[i];
//    if((i % 2) !=0) {
//        tmp*=2;
//        if(tmp>9){
//            tmp-=9;
//        }
//    }
//    sum+=tmp;
//}
//return (sum%10)== 0;
