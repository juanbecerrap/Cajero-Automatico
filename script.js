function realizarOperacion() {
  const operacionSelect = document.getElementById('operacion');
  const montoInput = document.getElementById('monto');
  const destinoInput = document.getElementById('destino');
  const resultadoParrafo = document.getElementById('resultado');

  const operacion = operacionSelect.value;
  const monto = parseFloat(montoInput.value);
  const saldoElement = document.getElementById('saldo');
  let saldo = parseFloat(saldoElement.value);

  if (isNaN(monto) || monto <= 0) {
      resultadoParrafo.innerText = 'Ingrese un monto válido.';
      return;
  }

  switch (operacion) {
      case 'consulta':
          resultadoParrafo.innerText = `Su saldo actual es: $${saldo.toFixed(2)}`;
          break;
      case 'retiro':
          if (monto > saldo) {
              resultadoParrafo.innerText = 'Fondos insuficientes.';
          } else {
              saldo -= monto;
              saldoElement.value = saldo.toFixed(2);
              resultadoParrafo.innerText = `Retiro exitoso. Nuevo saldo: $${saldo.toFixed(2)}`;
          }
          break;
      case 'transferencia':
          const destino = destinoInput.value;
          if (!destino) {
              resultadoParrafo.innerText = 'Ingrese el número de cuenta de destino.';
          } else {
              saldo -= monto;
              saldoElement.value = saldo.toFixed(2);
              resultadoParrafo.innerText = `Transferencia exitosa a la cuenta ${destino}. Nuevo saldo: $${saldo.toFixed(2)}`;
          }
          break;
      default:
          resultadoParrafo.innerText = 'Operación no válida.';
  }
}

function toggleDestinoField() {
  const operacionSelect = document.getElementById('operacion');
  const destinoInput = document.getElementById('destino');
  
  destinoInput.style.display = (operacionSelect.value === 'transferencia') ? 'block' : 'none';
}
