const students = [];

//função para calcula a média
function average(firstNote, secondNote) {
  return (firstNote + secondNote) / 2;
}

//função para ler os dados do estudante
function studentData(amount) {
  for (let i=0; i < amount; i++) {
    const name = prompt(`Informe o nome do ${i + 1}º aluno.`);
    const note1 = Number(prompt("Informe a primeira nota:"));
    const note2 = Number(prompt("Informe a segunda nota:"));

    let student = {
      name: name,
      firstNote: note1,
      secondNote: note2
    };
       students.push(student)
  }
}

//função para mostrar dados na tela
function result() {
  for (let student of students) {
    const media = average(student.firstNote, student.secondNote);

    if (media >= 7) {
      alert(`A média do aluno(a) ${student.name} é: ${media}
    Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
    } else {
      alert(`A média do aluno(a) ${student.name} é: ${media}
     Não foi dessa vez, ${student.name}! Tente novamente!`)
    }
  }
}

let amountStudents = prompt("Informe a quantidade de alunos?");
studentData(amountStudents);
result();
