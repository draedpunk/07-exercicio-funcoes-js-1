//Não faça nada neste arquivo, esqueça que ele existe
const { execSync } = require('child_process');

test('verifica a saída da função saudar', () => {
  const output = execSync('node index.js').toString();
  const expectedOutput = "Olá Mundo!\n"; 
  expect(output).toBe(expectedOutput);
});
