import { Categoria } from "./Classes/Categoria.js";
import { Produto } from "./Classes/Produto.js";
import { Cliente } from "./Classes/Cliente.js";
import { Vendedor } from "./Classes/Vendedor.js";
import { Pedido } from "./Classes/Pedido.js";

// Acabei não utilizando os modifadores get e set

let categorias = JSON.parse(localStorage.getItem('categorias')) || [];
let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
let pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
let vendedores = JSON.parse(localStorage.getItem('vendedores')) || [];

function cadastrarCategoria() {
    const nomeCategoria = document.getElementById('categoria').value.toUpperCase().trim();

    if (!nomeCategoria) {
        return alert('Preencha o campo com valores válidos!');
    }

    const categoriaExistente = categorias.some(categoria => categoria.nome === nomeCategoria);

    if (categoriaExistente) {
        alert('Categoria já cadastrada!');
    } else {
        const novaCategoria = new Categoria(nomeCategoria);
        categorias.push(novaCategoria);

        localStorage.setItem('categorias', JSON.stringify(categorias));

        document.getElementById('categoria').value = '';
        alert('Categoria cadastrada com sucesso!');
    }
    console.log('Categorias:', categorias); 
}

function cadastrarCliente() {
    const nomeCompleto = document.getElementById('nomeCompleto').value.trim();
    const dataNascimento = document.getElementById('dataNascimento').value;
    const cpf = document.getElementById('cpf').value.trim();
    const origem = document.getElementById('origem').value;
    const score = parseInt(document.getElementById('score').value);

    if (!nomeCompleto || !dataNascimento || cpf.length < 11 || cpf.length > 14 || !origem || isNaN(score) || score < 0) {
        return alert('Preencha todos os campos com valores válidos');
    }

    const clienteExistente = clientes.some(cliente => cliente.cpf === cpf);
    if (clienteExistente) {
        return alert('Cliente já possui cadastro!');
    }

    const novoCliente = new Cliente(nomeCompleto, dataNascimento, cpf, origem, score);
    clientes.push(novoCliente);

    localStorage.setItem('clientes', JSON.stringify(clientes));

    document.getElementById('nomeCompleto').value = '';
    document.getElementById('dataNascimento').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('origem').value = '';
    document.getElementById('score').value = '';

    alert('Cliente cadastrado com sucesso!');
    console.log('Clientes:', clientes); 
}


function cadastrarProduto() {
    const nome = document.getElementById('nomeProduto').value.trim();
    const valor = parseFloat(document.getElementById('valor').value);
    const categoriaNome = document.getElementById('categoriaProduto').value.trim().toUpperCase();

    if (!nome || isNaN(valor) || valor <= 0 || !categoriaNome) {
        return alert('Preencha todos os campos corretamente!');
    }
    const categoriaProduto = categorias.find(categoria => categoria.nome === categoriaNome);

    if (!categoriaProduto) {
        return alert('Categoria não encontrada! Cadastre a categoria antes de adicionar o produto.');
    }

    const novoProduto = new Produto(nome, valor, categoriaProduto);
    produtos.push(novoProduto);

    localStorage.setItem('produtos', JSON.stringify(produtos));

    document.getElementById('nomeProduto').value = '';
    document.getElementById('valor').value = '';
    document.getElementById('categoriaProduto').value = '';

    alert('Produto cadastrado com sucesso!');
}
function cadastrarVendedor() {
    const nome = document.getElementById('nome').value;
    const matricula = parseInt(document.getElementById('matricula').value);

    if (!nome || isNaN(matricula) || matricula < 0) {
        return alert('Preencha todos os campos corretamente!');
    }
    const vendedorExistente = vendedores.some(function (vendedor) {
        return vendedor.matricula === matricula;
    });

    if (vendedorExistente) {
        return alert('Vendedor já possui cadastro!');
    }
    const novoVendedor = new Vendedor(nome, matricula);
    vendedores.push(novoVendedor);

    localStorage.setItem('vendedores', JSON.stringify(vendedores));

    document.getElementById('nome').value = '';
    document.getElementById('matricula').value = '';

    alert('Vendedor cadastrado com sucesso!');
}

function criarPedido() {
    const clienteNome = document.getElementById('cliente').value.trim();
    const dataCriacao = document.getElementById('dataCriacao').value;
    const vendedorMatricula = parseInt(document.getElementById('vendedor').value);
    const qtd = parseInt(document.getElementById('qtd').value);
    const campoQtdProduto = document.getElementById('campoQtdProduto');
    const produtosCadastroContainer = document.getElementById('produtosCadastroContainer');

    if (isNaN(qtd) || qtd <= 0 || !clienteNome || !dataCriacao || isNaN(vendedorMatricula)) {
        return alert('Preencha os campos e digite um valor válido');
    }

    campoQtdProduto.style.display = 'block';
    produtosCadastroContainer.innerHTML = '';

    const novoPedido = new Pedido(clienteNome, dataCriacao, vendedorMatricula);

    for (let i = 0; i < qtd; i++) {
        produtosCadastroContainer.innerHTML += `
            <h3>Produto ${i + 1}:</h3>
            <label for="produto${i}">Produto:</label>
            <input type="text" id="produto${i}" placeholder="Digite o nome do produto...">
            <label for="valorProduto${i}">Valor do produto:</label>
            <input type="number" min="0" placeholder="Digite o valor do produto..." id="valorProduto${i}">
        `;
    }
    produtosCadastroContainer.innerHTML += `
        <button id="finalizarPedido">Finalizar Pedido</button>
    `;

    document.getElementById('finalizarPedido').addEventListener('click', () => {
        for (let j = 0; j < qtd; j++) {
            const nomeProduto = document.getElementById(`produto${j}`).value.trim();
            const valorProduto = parseFloat(document.getElementById(`valorProduto${j}`).value);

            const produtoExistente = produtos.find(prod => prod.nome === nomeProduto);
            if (!produtoExistente) {
                return alert('Produto não cadastrado! Certifique-se de que o produto esteja cadastrado antes de adicioná-lo ao pedido.');
            }
            novoPedido.adicionarProduto(produtoExistente);
        }
        pedidos.push(novoPedido);
        localStorage.setItem('pedidos', JSON.stringify(pedidos));


        document.getElementById('cliente').value = '';
        document.getElementById('dataCriacao').value = '';
        document.getElementById('vendedor').value = '';
        document.getElementById('qtd').value = '';
        produtosCadastroContainer.innerHTML = '';
        campoQtdProduto.style.display = 'none';

        alert('Pedido cadastrado com sucesso!');
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const btnCadastrarCategoria = document.getElementById('cadastrarCategoria');
    const btnCadastrarProduto = document.getElementById('cadastrarProduto');
    const btnCadastrarCliente = document.getElementById('cadastrarCliente');
    const btnCadastrarVendedor = document.getElementById('cadastrarVendedor');
    const btnCriarProduto = document.getElementById('criarPedido');

    if (btnCadastrarCategoria) {
        btnCadastrarCategoria.addEventListener('click', () => {
            cadastrarCategoria();
        });
    }

    if (btnCadastrarProduto) {
        btnCadastrarProduto.addEventListener('click', () => {
            cadastrarProduto();
        });
    }

    if (btnCadastrarCliente) {
        btnCadastrarCliente.addEventListener('click', () => {
            cadastrarCliente();
        });
    }

    if (btnCadastrarVendedor) {
        btnCadastrarVendedor.addEventListener('click', () => {
            cadastrarVendedor();
        })
    }
    if (btnCriarProduto) {
        btnCriarProduto.addEventListener('click', () => {
            criarPedido();
        })
    }
});
