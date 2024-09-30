// export class Pedido {
//   constructor(cliente, dataCriacao, vendedor) {
//       this.cliente = cliente;
//       this.dataCriacao = dataCriacao;
//       this.vendedor = vendedor;
//       this.produtos = []; 
//   }
//   adicionarProduto(produto) {
//       this.produtos.push(produto); 
//   }
// }
export class Pedido {
  constructor(cliente, dataCriacao, vendedor) {
    this.cliente = cliente;
    this.dataCriacao = dataCriacao;
    this.vendedor = vendedor;
    this.produtos = [];
  }

  // Método para modificar o cliente
  setCliente(cliente) {
    this.cliente = cliente;
  }

  // Método para obter o cliente
  getCliente() {
    return this.cliente;
  }

  // Método para modificar a data de criação
  setDataCriacao(dataCriacao) {
    this.dataCriacao = dataCriacao;
  }

  // Método para obter a data de criação
  getDataCriacao() {
    return this.dataCriacao;
  }

  // Método para modificar o vendedor
  setVendedor(vendedor) {
    this.vendedor = vendedor;
  }

  // Método para obter o vendedor
  getVendedor() {
    return this.vendedor;
  }

  // Método para adicionar produtos ao pedido
  adicionarProduto(produto) {
    this.produtos.push(produto);
  }

  // Método para obter os produtos
  getProdutos() {
    return this.produtos;
  }
}