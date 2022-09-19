function calculator(value, type) {
  if (type === 'number') {
    if (exp.operator === '') exp.operand1 += value
    else exp.operand2 += value
    DOM.displayText()
  } else {
    if (value === '=') {
      operation.calculate();
      exp.operator = ''
    } else {
      if (exp.operand2 === '') {
        exp.operator = value
      } else if (exp.operand2 !== '') {
        operation.calculate()
        exp.operator = value
      }
    }
    DOM.displayText()
  }
}

const operation = {
  add(x, y) {
    return +x + +y
  },
  
  sub(x, y) {
    return x - y
  },
  
  mul(x, y) {
    return x * y
  },
  
  div(x, y) {
    return x / y
  },
  
  calculate() {
    if (exp.operator === '+') exp.result = operation.add(exp.operand1, exp.operand2)
    else if (exp.operator === '-') exp.result = operation.sub(exp.operand1, exp.operand2)
    else if (exp.operator === 'x') exp.result = operation.mul(exp.operand1, exp.operand2)
    else if (exp.operator === '÷') exp.result = Math.floor(operation.div(exp.operand1, exp.operand2)*1000)/1000
    exp.operand1 = exp.result
    exp.operand2 = ''
  }
}

const exp = {
  operand1: '',
  operand2: '',
  operator: '',
  result: '',
  clear() {
    exp.operand1 = ''
    exp.operand2 = ''
    exp.operator = ''
    exp.result = ''
    DOM.displayText()
  },
}

const DOM = {
  b1 : document.getElementById('b1'),
  b2 : document.getElementById('b2'),
  b3 : document.getElementById('b3'),
  b4 : document.getElementById('b4'),
  b5 : document.getElementById('b5'),
  b6 : document.getElementById('b6'),
  b7 : document.getElementById('b7'),
  b8 : document.getElementById('b8'),
  b9 : document.getElementById('b9'),
  b0 : document.getElementById('b0'),
  bAdd : document.getElementById('b+'),
  bSub : document.getElementById('b-'),
  bMul : document.getElementById('bx'),
  bDiv : document.getElementById('b÷'),
  bOpe : document.getElementById('b='),
  bAC : document.getElementById('AC'),
  display : document.querySelector('.display'),
  displayText() {
    DOM.display.textContent = `${exp.operand1} ${exp.operator} ${exp.operand2}`
  },
}

DOM.b1.onclick = () => calculator(DOM.b1.value, 'number');
DOM.b2.onclick = () => calculator(DOM.b2.value, 'number');
DOM.b3.onclick = () => calculator(DOM.b3.value, 'number');
DOM.b4.onclick = () => calculator(DOM.b4.value, 'number');
DOM.b5.onclick = () => calculator(DOM.b5.value, 'number');
DOM.b6.onclick = () => calculator(DOM.b6.value, 'number');
DOM.b7.onclick = () => calculator(DOM.b7.value, 'number');
DOM.b8.onclick = () => calculator(DOM.b8.value, 'number');
DOM.b9.onclick = () => calculator(DOM.b9.value, 'number');
DOM.b0.onclick = () => calculator(DOM.b0.value, 'number');
DOM.bAdd.onclick = () => calculator(DOM.bAdd.value, 'operator');
DOM.bSub.onclick = () => calculator(DOM.bSub.value, 'operator');
DOM.bMul.onclick = () => calculator(DOM.bMul.value, 'operator');
DOM.bDiv.onclick = () => calculator(DOM.bDiv.value, 'operator');
DOM.bOpe.onclick = () => calculator(DOM.bOpe.value, 'operator');
DOM.bAC.onclick = () => exp.clear();