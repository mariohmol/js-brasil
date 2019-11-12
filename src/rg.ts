export function rg_sp(number) {


    // if(number.length>8){alert("Erro. Não existe RG SP\ncom mais de 8 dígitos.");}

    number = "0000000" + number;
    number = number.slice(number.length - 8);

    let cispDig1 = number.slice(7); let b1 = eval(cispDig1);
    let cispDig2 = number.slice(6, 7); let b2 = eval(cispDig2);
    let cispDig3 = number.slice(5, 6); let b3 = eval(cispDig3);
    let cispDig4 = number.slice(4, 5); let b4 = eval(cispDig4);
    let cispDig5 = number.slice(3, 4); let b5 = eval(cispDig5);
    let cispDig6 = number.slice(2, 3); let b6 = eval(cispDig6);
    let cispDig7 = number.slice(1, 2); let b7 = eval(cispDig7);
    let cispDig8 = number.slice(0, 1); let b8 = eval(cispDig8);

    let cispDig: any = (b1 * 2 + b2 * 3 + b3 * 4 + b4 * 5 + b5 * 6 + b6 * 7 + b7 * 8 + b8 * 9) % 11;
    if (cispDig == 10) {
        cispDig = "X";
    }
    let cispDV = cispDig;

}

export function rg_rj(number) {


    // if(number.length>8){alert("Erro. Não existe RG-RJ/MaSP-MG\ncom mais de 8 dígitos.");}

    number = "0000000" + number;
    number = number.slice(number.length - 8);

    let cirjDig1 = number.slice(7); let b1 = eval(cirjDig1);
    let cirjDig2 = number.slice(6, 7); let b2 = eval(cirjDig2);
    let cirjDig3 = number.slice(5, 6); let b3 = eval(cirjDig3);
    let cirjDig4 = number.slice(4, 5); let b4 = eval(cirjDig4);
    let cirjDig5 = number.slice(3, 4); let b5 = eval(cirjDig5);
    let cirjDig6 = number.slice(2, 3); let b6 = eval(cirjDig6);
    let cirjDig7 = number.slice(1, 2); let b7 = eval(cirjDig7);
    let cirjDig8 = number.slice(0, 1); let b8 = eval(cirjDig8);

    let ci7 = b1 * 2; if (ci7 > 9) { ci7 = ci7 - 9; }
    let ci56 = b3 * 2; if (ci56 > 9) { ci56 = ci56 - 9; }
    let ci34 = b5 * 2; if (ci34 > 9) { ci34 = ci34 - 9; }
    let ci12 = b7 * 2; if (ci12 > 9) { ci12 = ci12 - 9; }
    let ci67 = b2;
    let ci45 = b4;
    let ci23 = b6;
    let ci01 = b8;

    let cirjDig = (ci7 + ci56 + ci34 + ci12 + ci67 + ci45 + ci23 + ci01) % 10;
    cirjDig = 10 - cirjDig; if (cirjDig == 10) { cirjDig = 0; }

    return cirjDig;
}

export default {
    'sp': rg_sp,
    'rj': rg_rj
}
