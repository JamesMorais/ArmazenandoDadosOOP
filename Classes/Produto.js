// export class Produto {
//     constructor(nome, valor, categoria) {
//       this.nome = nome;
//       this.valor = valor;
//       this.categoria = categoria;
//     }
//   }
export class Produto {
  constructor(nome, valor, categoria) {
    this.nome = nome;
    this.valor = valor;
    this.categoria = categoria;
  }

  setNome(nome) {
    this.nome = nome;
  }

  setValor(valor) {
    this.valor = valor;
  }

  setCategoria(categoria) {
    this.categoria = categoria;
  }

  getNome() {
    return this.nome;
  }

  getValor() {
    return this.valor;
  }

  getCategoria() {
    return this.categoria;
  }
}