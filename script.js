let cardContainer = document.querySelector(".card-container");
let campoBusca = document.querySelector("#campoBusca"); // Correção: Usando # para selecionar por ID
let dados = [];

document.addEventListener('DOMContentLoaded', inicializar);

async function inicializar() {
    try {
        const resposta = await fetch("data.json");
        dados = await resposta.json();
        renderizaCards(dados); // Mostra todos os cards inicialmente
        
        // Verifica se o campo de busca foi encontrado antes de adicionar o listener
        if (!campoBusca) {
            console.error("Campo de busca não encontrado! Verifique o seletor.");
            return;
        }
        // Adiciona o listener para o evento 'input'
        campoBusca.addEventListener("input", buscar);
    } catch (error) {
        console.error("Erro ao carregar dados:", error);
    }
}

function buscar() {
    const termoBusca = campoBusca.value.toLowerCase();
    
    // Filtra os dados com base no termo buscado
    const dadosFiltrados = dados.filter(dado => 
        dado.nome.toLowerCase().includes(termoBusca) ||
        dado.descricao.toLowerCase().includes(termoBusca) || // Corrigido de 'descrição' para 'descricao'
        dado.tags.some(tag => tag.toLowerCase().includes(termoBusca)) // Adicionado busca por tags
    );

    renderizaCards(dadosFiltrados);
}

function renderizaCards(dadosParaRenderizar) {
    // Limpa o container antes de renderizar novos cards
    cardContainer.innerHTML = "";
    for (let dado of dadosParaRenderizar){
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
            <h2>${dado.nome}</h2>
            <p>${dado.descricao}</p>
            <p>${dado.criacao}</p>
            <p>Tags: ${dado.tags.join(', ')}</p>
            <a href="${dado.link}" target="_blank">Saiba mais</a>
        `;
        cardContainer.appendChild(article);
    }
}