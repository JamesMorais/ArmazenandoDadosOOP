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

  setCliente(cliente) {
    this.cliente = cliente;
  }
  getCliente() {
    return this.cliente;
  }

  setDataCriacao(dataCriacao) {
    this.dataCriacao = dataCriacao;
  }

  getDataCriacao() {
    return this.dataCriacao;
  }

  setVendedor(vendedor) {
    this.vendedor = vendedor;
  }

  getVendedor() {
    return this.vendedor;
  }

  adicionarProduto(produto) {
    this.produtos.push(produto);
  }

  getProdutos() {
    return this.produtos;
  }
}