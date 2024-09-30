// export class Vendedor {
//     constructor(nome, matricula) {
//       this.nome = nome;
//       this.matricula = matricula;
//     }
//   }
export class Vendedor {
  constructor(nome, matricula) {
    this.nome = nome;
    this.matricula = matricula;
  }

  setNome(nome) {
    this.nome = nome;
  }

  setMatricula(matricula) {
    this.matricula = matricula;
  }

  getNome() {
    return this.nome;
  }

  getMatricula() {
    return this.matricula;
  }
}