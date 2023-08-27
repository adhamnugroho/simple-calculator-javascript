var angkaTemp = [];
var angka = [];
var operator = [];
var hasil = 0;

function addNumber(angka) {
  angkaTemp.push(parseInt(angka));

  // display
  document.getElementById("display").innerText = angkaTemp.join("");
}

function addOperator(operator_value) {
  // pindah variabel
  angka.push(angkaTemp.join(''));
  angkaTemp = [];

  operator.push(operator_value);

  if(operator.length > 1 && hasil == 0) {
    if(operator[operator.length-2] == '+') {
      hasil = parseInt(angka[angka.length-2]) + parseInt(angka[angka.length-1]);
    } else if (operator[operator.length-2] == '-') {
      hasil = parseInt(angka[angka.length-2]) - parseInt(angka[angka.length-1]);
    } else if (operator[operator.length-2] == '*') {
      hasil = parseInt(angka[angka.length-2]) * parseInt(angka[angka.length-1]);
    } else if (operator[operator.length-2] == '/') {
      hasil = parseInt(angka[angka.length-2]) / parseInt(angka[angka.length-1]);
    }

    // display
    document.getElementById("display").innerText = hasil;
    // return
    return;
  } else if (operator.length > 1) {
    if(operator[operator.length-1] == '+') {
      hasil += parseInt(angka[angka.length-1]);
    } else if (operator[operator.length-1] == '-') {
      hasil -= parseInt(angka[angka.length-1]);
    } else if (operator[operator.length-1] == '*') {
      hasil *= parseInt(angka[angka.length-1]);
    } else if (operator[operator.length-1] == '/') {
      hasil /= parseInt(angka[angka.length-1]);
    }
    // display
    document.getElementById("display").innerText = hasil;
    // return
    return;
  }

  // display
  document.getElementById("display").innerText = operator[operator.length-1];
}

function equal() {
  if(angkaTemp.length != 0) {
    angka.push(angkaTemp.join(''));
    angkaTemp = [];
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
  }

  // display
  document.getElementById("display").innerText = hasil;
}