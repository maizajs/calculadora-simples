<!-- //calculadora -->
    <!-- index.html -->
    <!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculadora Simples</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="calculator">
    <!-- Display da Calculadora -->
    <div id="display" class="display">0</div>

    <!-- <Botões da Calculadora --> 
    <div class="buttons">
      <button class="button" data-value="7">7</button>
      <button class="button" data-value="8">8</button>
      <button class="button" data-value="9">9</button>
      <button class="button operator" data-value="/">/</button>

      <button class="button" data-value="4">4</button>
      <button class="button" data-value="5">5</button>
      <button class="button" data-value="6">6</button>
      <button class="button operator" data-value="*">*</button>

      <button class="button" data-value="1">1</button>
      <button class="button" data-value="2">2</button>
      <button class="button" data-value="3">3</button>
      <button class="button operator" data-value="-">-</button>

      <button class="button" data-value="0">0</button>
      <button class="button" data-value=".">.</button>
      <button class="button operator" data-value="%">%</button>
      <button class="button operator" data-value="+">+</button>

      <button class="button clear" data-value="C">C</button>
      <button class="button equal" data-value="=">=</button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
