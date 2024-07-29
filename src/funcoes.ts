function calculaArea(base: number, altura: number): number {
    return base * altura

}

const calculaArea2 = (base: number, altura: number) : number => (base * altura)

// tipando valiavel rest
function somar(...numeros: number[]): void {
    // numeros.reduce()
}

// retorna 2 valores diferentes
function test(): string | number {
    if(10 < 5) {
        return 'dez maior que cinco'
    }else {
        return 5
    }
}

