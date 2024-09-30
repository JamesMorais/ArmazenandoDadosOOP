// export class Cliente {
//     constructor(nomeCompleto, dataNascimento, cpf, origem, score) {
//       this.nomeCompleto = nomeCompleto;
//       this.dataNascimento = dataNascimento;
//       this.cpf = cpf;
//       this.origem = origem;
//       this.score = score;
//     }
//   }
export class Cliente {
  constructor(nomeCompleto, dataNascimento, cpf, origem, score) {
    this.nomeCompleto = nomeCompleto;
    this.dataNascimento = dataNascimento;
    this.cpf = cpf;
    this.origem = origem;
    this.score = score;
  }

  // Métodos para modificar os atributos
  setNomeCompleto(nomeCompleto) {
    this.nomeCompleto = nomeCompleto;
  }

  setDataNascimento(dataNascimento) {
    this.dataNascimento = dataNascimento;
  }

  setCpf(cpf) {
    this.cpf = cpf;
  }

  setOrigem(origem) {
    this.origem = origem;
  }

  setScore(score) {
    this.score = score;
  }

  // Métodos para obter os atributos
  getNomeCompleto() {
    return this.nomeCompleto;
  }

  getDataNascimento() {
    return this.dataNascimento;
  }

  getCpf() {
    return this.cpf;
  }

  getOrigem() {
    return this.origem;
  }

  getScore() {
    return this.score;
  }
}