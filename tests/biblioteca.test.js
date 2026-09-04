import {
    cadastrarLivro,
    livroExiste,
    livroDisponivel,
    listarLivros,
    contarLivros,
    obterInformacoes,
    calcularTaxaAtraso,
} from '../src/biblioteca.js';

describe('Teste das funcionalidades da biblioteca', () => {
    it('deve confirmar que existem livros cadastrados na biblioteca', () => {
        const lista = listarLivros();
        expect(lista).toBeTruthy();
    });

    it('é para confirmar se a lista possui a quantidade esperada de livros', () => {
        lista = listarLivros();
        expect(lista).toHaveLength(5);
    });

    it('é para confirmar se o título de um livro aparece na coleção da biblioteca', () => {
        const titulos = listarLivros().map((livro) => livro.titulo);
        expect(titulos).toContain('Percy Jackson e o Ladrão de Raios');
    });

    it('é para confirmar se um livro específico pode ser encontrado', () => {
        const livroEncontrado = livroExiste('A Culpa é das Estrelas');
        expect(livroEncontrado).toBeTruthy();
    });

    it('é para validar a estrutura exata de informações incluindo todos os campos escondidos', () => {
        const info = obterInformacoes();

        expect(info).toEqual({
            nome: 'Biblioteca Codeverse',
            totalLivros: expect.any(Number),
            cidade: 'London',
            provincia: 'ON',
        });
    });

    it('é para calcular corretamente a taxa de 1,50 reais por dia de atraso', () => {
        const taxa1Dia = calcularTaxaAtraso(1);
        const taxa2Dias = calcularTaxaAtraso(2);
        const taxa5Dias = calcularTaxaAtraso(5);

        expect(taxa1Dia).toBeCloseTo(1.5);
        expect(taxa2Dias).toBeCloseTo(3.0);
        expect(taxa5Dias).toBeCloseTo(7.5);
    });

    it('é para identificar corretamente um livro que NÃO existe', () => {
        const livroNaoExiste = livroExiste('O Senhor dos Aneis');
        expect(livroNaoExiste).toBeFalsy();
    });

    it('não é para tratar um livro que não existe como disponível', () => {
        const disponivel = livroDisponivel('Livro que não existe');
        expect(disponivel).toBeFalsy();
    });

    it('não é para tratar um livro emprestado como disponível', () => {
        const disponivel = livroDisponivel('One Piece, Vol. 1');
        expect(disponivel).toBe(false);
    });

    it('é para identificar um livro disponivel como verdadeiro', () => {
        const disponivel = livroDisponivel('É Assim que Acaba');
        expect(disponivel).toBe(true);
    });

    it('é para informar a quantidade total de livros de acordo com o tamanho da lista', () => {
        const lista = listarLivros();
        const qtdTotal = contarLivros();
        expect(lista).toHaveLength(qtdTotal);
    });
});
