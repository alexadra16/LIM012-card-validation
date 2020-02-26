const validator = {
 isValid:(a)=>{
    let numTarjeta = a.split("");
    // console.log(a);

    const  numTarjetaReverse = numTarjeta.reverse();
    let sumPosicionPar = 0;
    let sumPosicionImpar = 0;
    let valor = true;
    
    for(let i = 1; i < numTarjetaReverse.length; i = i + 2) {
      const resultAfter2=numTarjetaReverse[i]*2
      if(resultAfter2>9){
        const resultAfter10 = ((resultAfter2 % 10) + 1)
        sumPosicionPar = sumPosicionPar + resultAfter10
        //console.log(resultAfter10)
      } else {
        sumPosicionPar = sumPosicionPar + resultAfter2
        //console.log(resultAfter2)
      }
    }
    //console.log(sumPosicionPar)
    for(let i = 0; i < numTarjetaReverse.length; i= i + 2) {
      const resultAfterImpares = numTarjetaReverse[i]*1;
    sumPosicionImpar = sumPosicionImpar + resultAfterImpares
    
    }
    // console.log(sumPosicionImpar);
    const sumTotal=sumPosicionImpar + sumPosicionPar
    if(sumTotal%10 == 0){
      valor = true;
    } else {
      valor = false;
    }
    return valor;
 },
//  console.log(isValid("4083952015263"));
 maskify:(b) =>{
    let cantidad= b.length;
    let output = "";
    for(let i =0;i<cantidad-4;i++)
    {
      output+="#";
    }
    return output + b.substring(cantidad -4,cantidad);
 }
//  console.log(maskify("4083952015263"));
}

export default validator;
