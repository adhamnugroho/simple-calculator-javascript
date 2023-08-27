var angkaTemp = [];
var angka = [];
var operatorTemp = [];
var operator = [];
var hasil = 0;

function addNumber(angka) {
  angkaTemp.push(parseInt(angka));

  // display
  document.getElementById("display").innerText = angkaTemp.join("");
}

function addOperator(operator_value) {
  // pindah variabel
  var angkaTempKosong = false;

  if(angkaTemp.join('') == '') {
    angkaTempKosong = true;
  }

  if(angkaTempKosong == false) {
    angka.push(angkaTemp.join(''));
    angkaTemp = [];
  }

  operatorTemp.push(operator_value);

  if(operatorTemp.length > 1 && hasil == 0) {
    if(operatorTemp[operatorTemp.length-2] == '+') {
      hasil = parseInt(angka[angka.length-2]) + parseInt(angka[angka.length-1]);
    } else if (operatorTemp[operatorTemp.length-2] == '-') {
      hasil = parseInt(angka[angka.length-2]) - parseInt(angka[angka.length-1]);
    } else if (operatorTemp[operatorTemp.length-2] == '*') {
      hasil = parseInt(angka[angka.length-2]) * parseInt(angka[angka.length-1]);
    } else if (operatorTemp[operatorTemp.length-2] == '/') {
      hasil = parseInt(angka[angka.length-2]) / parseInt(angka[angka.length-1]);
    }

    operator.push(operatorTemp[operatorTemp.length-2]);
    operatorTemp.shift();

    // display
    document.getElementById("display").innerText = hasil;
    // return
    return;
  } else if (operatorTemp.length > 1 && angkaTempKosong == false) {
    if(operatorTemp[operatorTemp.length-1] == '+') {
      hasil += parseInt(angka[angka.length-1]);
    } else if (operatorTemp[operatorTemp.length-1] == '-') {
      hasil -= parseInt(angka[angka.length-1]);
    } else if (operatorTemp[operatorTemp.length-1] == '*') {
      hasil *= parseInt(angka[angka.length-1]);
    } else if (operatorTemp[operatorTemp.length-1] == '/') {
      hasil /= parseInt(angka[angka.length-1]);
    }
    
    operator.push(operatorTemp[operatorTemp.length-1]);
    operatorTemp.shift();

    // display
    document.getElementById("display").innerText = hasil;
    // return
    return;
  }

  // console.log(operatorTemp);

  // display
  document.getElementById("display").innerText = operatorTemp[operatorTemp.length-1];
}

function equal() {
  if(angkaTemp.length != 0) {
    angka.push(angkaTemp.join(''));
    angkaTemp = [];
  }

  if(operatorTemp.length != 0) {
    operator.push(operatorTemp[operatorTemp.length-1]);
    operatorTemp.shift();
  }

  if(operator.length == 1) {
    if(operator[operator.length-1] == '+') {
      hasil = parseInt(angka[angka.length-2]) + parseInt(angka[angka.length-1]);
    } else if (operator[operator.length-1] == '-') {
      hasil = parseInt(angka[angka.length-2]) - parseInt(angka[angka.length-1]);
    } else if (operator[operator.length-1] == '*') {
      hasil = parseInt(angka[angka.length-2]) * parseInt(angka[angka.length-1]);
    } else if (operator[operator.length-1] == '/') {
      hasil = parseInt(angka[angka.length-2]) / parseInt(angka[angka.length-1]);
    }
  } else {
    if(operator[operator.length-1] == '+') {
      hasil += parseInt(angka[angka.length-1]);
    } else if (operator[operator.length-1] == '-') {
      hasil -= parseInt(angka[angka.length-1]);
    } else if (operator[operator.length-1] == '*') {
      hasil *= parseInt(angka[angka.length-1]);
    } else if (operator[operator.length-1] == '/') {
      hasil /= parseInt(angka[angka.length-1]);
    }
  }

  // display
  document.getElementById("display").innerText = hasil;
}

function deleteItemAngkaTemp() {
  angkaTemp.pop();

  // display
  document.getElementById("display").innerText = angkaTemp.join("");
}

