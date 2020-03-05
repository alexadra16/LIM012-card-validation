const validator = {
 
  isValid: (a) => {
    //let answer= true;
  
    let numCard = a.split('');
    //console.log(numTarjeta);

    const numCardReverse = numCard.reverse();
    let sumPositionPar = 0;
    let sumPositionImpar = 0;
    let valor = true;


    for (let i = 1; i < numCardReverse.length; i = i + 2) {
      const resultAfter2 = numCardReverse[i] * 2
      if (resultAfter2 > 9) {
        const resultAfter10 = ((resultAfter2 % 10) + 1)
        sumPositionPar = sumPositionPar + resultAfter10
        //console.log(resultAfter10)
      } else {
        sumPositionPar = sumPositionPar + resultAfter2
        //console.log(resultAfter2)
      }
    }
    //console.log(sumPosicionPar)
    for (let i = 0; i < numCardReverse.length; i = i + 2) {
      const resultAfterImpares = numCardReverse[i] * 1;
      sumPositionImpar = sumPositionImpar + resultAfterImpares

    }
    // console.log(sumPosicionImpar);
    const sumTotal = sumPositionImpar + sumPositionPar
    if (sumTotal % 10 == 0) {
      valor = "Estimado cliente  el numero de su tarjeta es valida. Procede con el pago de tu pedido.";
    } else {
      valor = "Estimado cliente el numero de su tarjeta es invalida.Por favor, introduzca otro numero de   tarjeta.";
    }
    return valor;
 
  

},
  //  console.log(isValid("4083952015263"));
  maskify: (b) => {
    let quantity = b.length;
    let output = "";
    for (let i = 0; i < quantity - 4; i++) {
      output += "#";
    }
    return output + b.substring(quantity - 4, quantity);
  }
  //  console.log(maskify("4083952015263"));
}

export default validator;
