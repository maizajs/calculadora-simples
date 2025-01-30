// Variáveis globais para armazenar os dados
let currentInput = '0'; // O número atual no display
let operator = ''; // O operador selecionado
let firstOperand = null; // O primeiro número antes da operação
let waitingForSecondOperand = false; // Indica se estamos aguardando o segundo número

// Função para atualizar o display
function updateDisplay() {
  const display = document.getElementById('display');
  display.innerText = currentInput; // Exibe o valor de currentInput no display
}


// Limpa o display
function clearDisplay() {
  currentInput = '0';
  operator = '';
  firstOperand = null;
  waitingForSecondOperand = false;
  updateDisplay();
}

// Adiciona um número ao display
function appendNumber(number) {
  if (waitingForSecondOperand) {
    currentInput = number
    waitingForSecondOperand = false;
  } else {
    // Evita que comece com múltiplos zeros
    currentInput = currentInput === '0' ? number: currentInput + number.toString();
  }
  updateDisplay();
}

// Adiciona o ponto decimal
function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

// Define o operador para a operação
function appendOperator(op) {
  if (operator && waitingForSecondOperand) {
    operator = op;
    return;
  }

  if (firstOperand === null) {
    firstOperand = currentInput;
  } else if (operator) {
    const result = calculateResult();
    currentInput = result
    firstOperand = currentInput;
  }

  operator = op;
  waitingForSecondOperand = true;
}

// Realiza o cálculo com os dois operandos
// Função para calcular o resultado
function calculateResult() {
  let result;
  const secondOperand = currentInput;
 
  switch (operator) {
    case '+':
      result = (firstOperand) + "+" + secondOperand;
      break;
    case '-':
      result = (firstOperand) + "-" + secondOperand;
      break;
    case '*':
      result = (firstOperand) + "*" + secondOperand;
      break;
    case '/':
      if (secondOperand === 0) {
        alert("Não é possível dividir por zero!");
        result = 0;
      } else {
        result = (firstOperand)+ "/" + secondOperand;
      }
      break;
    default:
      return;
  }

  return eval(result);
}

// Função para o botão igual (=)
function equal() {
  if (operator && !waitingForSecondOperand) {
    const result = calculateResult(); // Calcula o resultado com base no operador
    console.log(result)
    currentInput = result; // Atualiza o display com o resultado
    operator = ''; // Limpa o operador
    firstOperand = null; // Limpa o primeiro operando
    waitingForSecondOperand = false; // Reinicia a flag de espera para o segundo operando
    updateDisplay(); // Atualiza o display com o resultado
  }
}

// Função para porcentagem (%)
function percentage() {
  if (currentInput !== '0') {
    currentInput = (parseFloat(currentInput) / 100);
    updateDisplay();
  }
}

// Evento para lidar com o clique nos botões
document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value >= '0' && value <= '9') {
      appendNumber(value);
    } else if (value === '.') {
      appendDecimal();
    } else if (value === 'C') {
      clearDisplay();
    } else if (value === '=') {
      equal();
    } else if (value === '%') {
      percentage();
    } else {
      appendOperator(value);
    }
  });
});