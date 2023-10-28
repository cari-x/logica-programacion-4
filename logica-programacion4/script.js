function fibonacci() {
    var numero = prompt("Ingrese un número:");
    var esNumero = false;
  
    while (!esNumero) {
      if (!isNaN(numero) && numero !== "") {
        esNumero = true;
      } else {
        alert("Error: Por favor, ingrese un número válido.");
        numero = prompt("Ingrese un número:");
      }
    }
  
    var serie = [0, 1];
    for (var i = 2; i < numero; i++) {
      serie[i] = serie[i - 1] + serie[i - 2];
    }
  
    console.log(serie.join(", "));
  }
  
  fibonacci();
  