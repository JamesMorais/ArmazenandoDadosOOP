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

  // Métodos para modificar os atributos
  setNome(nome) {
    this.nome = nome;
  }

  setMatricula(matricula) {
    this.matricula = matricula;
  }

  // Métodos para obter os atributos
  getNome() {
    return this.nome;
  }

  getMatricula() {
    return this.matricula;
  }
}