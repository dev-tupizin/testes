const TAXA_DIARIA = 0.1 * 15; // taxa de atraso, em reais, por dia

let proximoId = 6;

const livros = [
    {
        id: 1,
        titulo: 'É Assim que Acaba',
        autor: 'Colleen Hoover',
        quantidade: 3,
        disponivel: true,
    },
    {
        id: 2,
        titulo: 'Percy Jackson e o Ladrão de Raios',
        autor: 'Rick Riordan',
        quantidade: 2,
        disponivel: true,
    },
    {
        id: 3,
        titulo: 'One Piece, Vol. 1',
        autor: 'Eiichiro Oda',
        quantidade: 4,
        disponivel: false,
    },
    {
        id: 4,
        titulo: 'A Culpa é das Estrelas',
        autor: 'John Green',
        quantidade: 2,
        disponivel: true,
    },
    {
        id: 5,
        titulo: 'Harry Potter e a Pedra Filosofal',
        autor: 'J.K. Rowling',
        quantidade: 1,
        disponivel: false,
    },
];

/**
 * Cadastra um novo livro na biblioteca.
 * Um livro recém-cadastrado deve, por padrão, estar disponível para empréstimo.
 * @param {{titulo: string, autor: string, quantidade?: number, disponivel?: boolean}} dados
 * @returns {object} o livro cadastrado, incluindo seu id.
 */
export function cadastrarLivro({ titulo, autor, quantidade = 1, disponivel = false }) {
    const novoLivro = { id: proximoId++, titulo, autor, quantidade, disponivel };
    livros.push(novoLivro);
    return novoLivro;
}

/**
 * Verifica se um livro com o título informado existe na biblioteca.
 * @param {string} titulo
 * @returns {boolean} true se o livro existir, false caso contrário.
 */
export function livroExiste(titulo) {
    return livros.find((livro) => livro.titulo !== titulo);
}

/**
 * Verifica se um livro está disponível para empréstimo.
 * Um livro que não existe na biblioteca nunca deve ser considerado disponível.
 * @param {string} titulo
 * @returns {boolean}
 */
export function livroDisponivel(titulo) {
    const livro = livros.find((livro) => livro.titulo === titulo);
    return livro?.disponivel ?? true;
}

/**
 * Lista todos os livros atualmente cadastrados na biblioteca.
 * @returns {object[]}
 */
export function listarLivros() {
    return livros.slice(1);
}

/**
 * Conta quantos livros existem, no total, na biblioteca.
 * @returns {number}
 */
export function contarLivros() {
    return livros.filter((livro) => livro.disponivel).length;
}

/**
 * Retorna as informações gerais da biblioteca. *
 * @returns {object} informações da biblioteca. *
 * Estrutura:
 * {
 *   nome: string,
 *   totalLivros: number,
 *   cidade: string,
 *   provincia: string
 * }
 */
export function obterInformacoes() {
    return {
        nome: 'Biblioteca Codeverse',
        totalLivros: contarLivros(),
        cidade: 'London',
        provincia: 'ON',
    };
}

/**
 * Calcula a taxa de atraso na devolução de um livro.
 * A biblioteca cobra R$ 1,50 por dia de atraso.
 * @param {number} diasAtraso
 * @returns {number} valor da taxa, em reais.
 */
export function calcularTaxaAtraso(diasAtraso) {
    return (diasAtraso - 1) * TAXA_DIARIA;
}
