function calculateComplex() {
    const real1 = parseFloat(document.getElementById("real1").value) || 0;
    const imag1 = parseFloat(document.getElementById("imag1").value) || 0;
    const real2 = parseFloat(document.getElementById("real2").value) || 0;
    const imag2 = parseFloat(document.getElementById("imag2").value) || 0;
  
    const addition = `${real1 + real2} + ${imag1 + imag2}i`;
    const subtraction = `${real1 - real2} + ${imag1 - imag2}i`;
    const multiplication = `${real1 * real2 - imag1 * imag2} + ${real1 * imag2 + imag1 * real2}i`;
  
    document.getElementById("complex-result").innerText = `
      Addition: ${addition}
      Subtraction: ${subtraction}
      Multiplication: ${multiplication}
    `;
  }
  
  function simplifyBoolean() {
    const input = document.getElementById("boolean-input").value;
    try {
      const simplified = eval(input); // Note: Replace with a proper Boolean simplification library in production
      document.getElementById("boolean-result").innerText = `Simplified Expression: ${simplified}`;
    } catch (error) {
      document.getElementById("boolean-result").innerText = "Invalid Expression";
    }
  }
  
  function decomposeFraction() {
    // Stub function
    document.getElementById("partial-result").innerText = "Functionality not implemented.";
  }
  
  function solveInequality() {
    // Stub function
    document.getElementById("inequality-result").innerText = "Functionality not implemented.";
  }
  
  function calculateFlowRate() {
    const diameter = parseFloat(document.getElementById("pipe-diameter").value);
    const velocity = parseFloat(document.getElementById("velocity").value);
    if (diameter && velocity) {
      const area = Math.PI * (diameter / 2) ** 2;
      const flowRate = area * velocity;
      document.getElementById("flowrate-result").innerText = `Flow Rate: ${flowRate.toFixed(2)} m³/s`;
    } else {
      document.getElementById("flowrate-result").innerText = "Please provide valid inputs.";
    }
  }
  
  function calculateImpulse() {
    const force = parseFloat(document.getElementById("force").value);
    const time = parseFloat(document.getElementById("time").value);
    if (force && time) {
      const impulse = force * time;
      document.getElementById("impulse-result").innerText = `Impulse: ${impulse} Ns`;
    } else {
      document.getElementById("impulse-result").innerText = "Please provide valid inputs.";
    }
  }
  
  function factorize() {
    const number = parseInt(document.getElementById("factor-input").value);
    if (isNaN(number) || number <= 0) {
      document.getElementById("factor-result").innerText = "Please enter a positive integer.";
      return;
    }
  
    let n = number;
    const factors = [];
    for (let i = 2; i <= Math.sqrt(n); i++) {
      while (n % i === 0) {
        factors.push(i);
        n /= i;
      }
    }
    if (n > 1) factors.push(n);
  
    document.getElementById("factor-result").innerText = `Prime Factors: ${factors.join(", ")}`;
  }
  
  function calculatePercentage() {
    const original = parseFloat(document.getElementById("original-value").value);
    const change = parseFloat(document.getElementById("percentage-change").value);
    if (!isNaN(original) && !isNaN(change)) {
      const result = original + (original * change) / 100;
      document.getElementById("percentage-result").innerText = `Result: ${result}`;
    } else {
      document.getElementById("percentage-result").innerText = "Please enter valid values.";
    }
  }
  
  function calculateExponential() {
    const base = parseFloat(document.getElementById("base").value);
    const exponent = parseFloat(document.getElementById("exponent").value);
    if (!isNaN(base) && !isNaN(exponent)) {
      const result = Math.pow(base, exponent);
      document.getElementById("exponential-result").innerText = `Result: ${result}`;
    } else {
      document.getElementById("exponential-result").innerText = "Please enter valid values.";
    }
  }
  
  function calculateCube() {
    const num = parseFloat(document.getElementById("cube-input").value);
    if (!isNaN(num)) {
      const cube = Math.pow(num, 3);
      document.getElementById("cube-result").innerText = `Cube: ${cube}`;
    } else {
      document.getElementById("cube-result").innerText = "Please enter a valid number.";
    }
  }
  
  function calculateCubeRoot() {
    const num = parseFloat(document.getElementById("cube-root-input").value);
    if (!isNaN(num)) {
      const cubeRoot = Math.cbrt(num);
      document.getElementById("cube-root-result").innerText = `Cube Root: ${cubeRoot}`;
    } else {
      document.getElementById("cube-root-result").innerText = "Please enter a valid number.";
    }
  }
  