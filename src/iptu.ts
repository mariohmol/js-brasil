export function iptu_ctba(number) {
    // if (number.length != 11) { alert("Você deve introduzir os ONZE dígitos-base \ndo IPTU, inclusive zeros à esquerda."); }

    let iptuctbaDig1 = number.slice(10); let a1 = eval(iptuctbaDig1);
    let iptuctbaDig2 = number.slice(9, 10); let a2 = eval(iptuctbaDig2);
    let iptuctbaDig3 = number.slice(8, 9); let a3 = eval(iptuctbaDig3);
    let iptuctbaDig4 = number.slice(7, 8); let a4 = eval(iptuctbaDig4);
    let iptuctbaDig5 = number.slice(6, 7); let a5 = eval(iptuctbaDig5);
    let iptuctbaDig6 = number.slice(5, 6); let a6 = eval(iptuctbaDig6);
    let iptuctbaDig7 = number.slice(4, 5); let a7 = eval(iptuctbaDig7);
    let iptuctbaDig8 = number.slice(3, 4); let a8 = eval(iptuctbaDig8);
    let iptuctbaDig9 = number.slice(2, 3); let a9 = eval(iptuctbaDig9);
    let iptuctbaDig10 = number.slice(1, 2); let a10 = eval(iptuctbaDig10);
    let iptuctbaDig11 = number.slice(0, 1); let a11 = eval(iptuctbaDig11);

    let iptuctbaDV = 10 - ((a1 * 2 + a2 * 3 + a3 * 4 + a4 * 7 + a5 * 8 + a6 * 9 + a7 * 2 + a8 * 3 + a9 * 4 + a10 * 7 + a11 * 8) % 10);
    if (iptuctbaDV == 10) { iptuctbaDV = 0; }
    return iptuctbaDV;
}


export function iptu_sp(number) {

    // if (number.length != 10) { alert("Você deve introduzir os DEZ dígitos \ndo IPTU, inclusive zeros à esquerda."); }

    let iptuspDig1 = number.slice(9); let a1 = eval(iptuspDig1);
    let iptuspDig2 = number.slice(8, 9); let a2 = eval(iptuspDig2);
    let iptuspDig3 = number.slice(7, 8); let a3 = eval(iptuspDig3);
    let iptuspDig4 = number.slice(6, 7); let a4 = eval(iptuspDig4);
    let iptuspDig5 = number.slice(5, 6); let a5 = eval(iptuspDig5);
    let iptuspDig6 = number.slice(4, 5); let a6 = eval(iptuspDig6);
    let iptuspDig7 = number.slice(3, 4); let a7 = eval(iptuspDig7);
    let iptuspDig8 = number.slice(2, 3); let a8 = eval(iptuspDig8);
    let iptuspDig9 = number.slice(1, 2); let a9 = eval(iptuspDig9);
    let iptuspDig10 = number.slice(0, 1); let a10 = eval(iptuspDig10);

    let iptuspDV = (a1 * 9 + a2 * 8 + a3 * 7 + a4 * 6 + a5 * 5 + a6 * 4 + a7 * 3 + a8 * 2 + a9 + a10 * 10) % 11;
    if (iptuspDV == 10) { iptuspDV = 1; }
    return iptuspDV;
}

export default {
    'sao-paulo': {
        'sao-paulo': iptu_sp,
    },
    'parana': {
        'curitiba': iptu_ctba
    }
}