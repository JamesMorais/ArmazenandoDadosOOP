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

  // Métodos para modificar os atributos
  setNome(nome) {
    this.nome = nome;
  }

  setValor(valor) {
    this.valor = valor;
  }

  setCategoria(categoria) {
    this.categoria = categoria;
  }

  // Métodos para obter os atributos
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