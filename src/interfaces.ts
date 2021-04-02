
export interface BigObject<T> {
    [index: string]: T
}

export interface MaskType {
    text?: string,
    textMask: false | (string | RegExp)[] | ((raw: string) => (string | RegExp)[]),
    numberToString?: Function,
    textMaskFunction?: Function
}
export interface Masks {
    aih: MaskType,
    cartaocredito: MaskType,
    celular: MaskType,
    cep: MaskType,
    // certidao Certidões de Nascimento, Casamento ou Óbito 
    certidao: MaskType,
    chassi: MaskType,
    cid: MaskType,
    cnae: MaskType,
    cnh: MaskType,
    cnpj: MaskType,
    cns: MaskType,
    contabanco: MaskType,
    cpf: MaskType,
    cpfcnpj: MaskType,
    currency: MaskType,
    data: MaskType,
    ect: MaskType,
    endereco: MaskType,
    iptu: MaskType,
    number: MaskType,
    porcentagem: MaskType,
    pispasep: MaskType,
    placa: MaskType,
    processo: MaskType,
    renavam: MaskType,
    rg: MaskType,
    sped: MaskType,
    telefone: MaskType,
    time: MaskType,
    titulo: MaskType,
    utils: MaskType
}

export interface MasksIE {
    [index: string]: MaskType
}