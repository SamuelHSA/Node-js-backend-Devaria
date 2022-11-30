const notas = [90, 71, 82, 93, 75, 82];
const qtdNotasAcima80 = notas.filter(n => n < 80).length;

console.log(qtdNotasAcima80, "Notas acima de 80");