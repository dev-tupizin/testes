import { cadastrarLivros, livroExiste, livroDisponivel, listarLivros, contarLivros, obterInformacoes, calcularTaxaAtraso} from '../src/biblioteca.js';

// describe() agrupa testes relacionados em um bloco
describe('nomeDaFuncao', () => {

    // it(): cada um é UM caso de teste
    it('deve fazer o que a função promete', () => {
        // expect(valorRecebido).matcher(valorEsperado)
        expect(nomeDaFuncao(1)).toBe(1);
    });

    it('toBe() compara valores primitivos (número, string, boolean) por igualdade exata', () => {
        expect(1 + 1).toBe(2);
    });

    it('toEqual() compara objetos e arrays por atributos', () => {
        expect({ nome: 'Ana' }).toEqual({ nome: 'Ana' });
    });

    it('toContain() verifica se um array ou string contém um item/trecho', () => {
        expect([1, 2, 3]).toContain(2);
        expect('JavaScript').toContain('Script');
    });

    it('toBeTruthy() verifica se o valor é "verdadeiro" (truthy)', () => {
        expect(1).toBeTruthy();
    });

    it('toBeFalsy() verifica se o valor é "falso" (falsy: 0, "", null, undefined, NaN, false)', () => {
        expect(0).toBeFalsy();
    });

    it('toHaveLength() verifica o tamanho (length) de um array ou string', () => {
        expect([1, 2, 3]).toHaveLength(3);
        expect('abc').toHaveLength(3);
    });

    it('toBeCloseTo() compara números decimais evitando erros de ponto flutuante', () => {
        expect(0.1 + 0.2).toBeCloseTo(0.3);
    });
});
