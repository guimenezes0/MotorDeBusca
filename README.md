# 🚀 Motor de Busca de Texto Completo em JavaScript

Este projeto é um simples motor de busca de texto completo implementado em JavaScript. Ele usa uma estrutura de dados avançada chamada Trie para armazenar e buscar palavras.

## 🌟 Recursos 

O motor de busca tem as seguintes características:

- Insere palavras no Trie.
- Busca palavras no Trie.
- Realiza uma busca em profundidade no Trie para encontrar todas as palavras que começam com uma determinada string.

## 💡 Como Instalar 

Para instalar e rodar este projeto, você precisa ter o Node.js instalado em seu ambiente local. Aqui estão as etapas:

1. Clone este repositório para o seu ambiente local usando `git clone <URL do repositório>`.
2. Navegue até o diretório do projeto.
3. Execute `node Trie.js` para rodar o projeto.

## 🚀 Como Usar 

Depois de clonar o repositório e instalar as dependências, você pode começar a usar o motor de busca. Aqui está um exemplo:

```javascript
let trie = new Trie();
trie.insert('palavra', 'Palavra');
let resultados = trie.search('pal');
console.log(resultados);  // Saída: ['Palavra']
