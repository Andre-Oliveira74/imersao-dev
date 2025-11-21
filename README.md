# 📖 Base de Conhecimento de Tecnologias

Este é um projeto simples de uma base de conhecimento para consulta rápida de informações sobre diversas tecnologias de desenvolvimento de software, como linguagens, frameworks e ferramentas.

O principal objetivo é fornecer um local centralizado e de fácil acesso para informações essenciais, exibindo uma coleção de "cards" interativos que podem ser filtrados dinamicamente.

## ✨ Funcionalidades

- **Listagem de Tecnologias**: Exibe todas as tecnologias presentes no arquivo `data.json` em formato de cards.
- **Busca Dinâmica**: Permite ao usuário buscar em tempo real por tecnologias específicas. A busca é flexível e filtra os resultados com base no **nome** da tecnologia, em palavras contidas na sua **descrição** ou em qualquer uma de suas **tags** (ex: "frontend", "banco de dados", "mobile").
- **Link Externo**: Cada card possui um link "Saiba mais" que redireciona para a página oficial da tecnologia.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Para a estrutura da página.
- **CSS3**: Para a estilização dos componentes e dos cards.
- **JavaScript (Vanilla)**: Para a lógica de busca, manipulação do DOM e consumo dos dados do arquivo `data.json`.

## 🚀 Como Utilizar

Para executar este projeto em sua máquina local, siga os passos abaixo:

1.  **Clone o repositório**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    ```

2.  **Navegue até a pasta do projeto**
    ```bash
    cd base_de_conhecimento
    ```

3.  **Abra o arquivo `index.html`**
    - A maneira mais simples é abrir o arquivo `index.html` diretamente no seu navegador.
    - **(Recomendado)** Para uma melhor experiência e para evitar possíveis problemas de CORS (Cross-Origin Resource Sharing) ao carregar o `data.json` localmente, utilize um servidor web simples. Se você usa o Visual Studio Code, pode instalar a extensão Live Server e clicar em "Go Live" no canto inferior direito do editor.

## 🤝 Como Contribuir

Sinta-se à vontade para contribuir adicionando novas tecnologias! Para isso:

1.  Abra o arquivo `data.json`.
2.  Adicione um novo objeto JSON ao array, seguindo a estrutura existente:
    ```json
    {
      "nome": "Nome da Tecnologia",
      "descricao": "Uma breve descrição sobre o que é e para que serve.",
      "criacao": "Ano de criação",
      "link": "https://link.oficial.com/",
      "tags": ["tag1", "tag2", "tag3"]
    }
    ```
3.  Salve o arquivo e sua nova tecnologia aparecerá automaticamente na página!
