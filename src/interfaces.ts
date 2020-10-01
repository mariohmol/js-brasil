
export interface BigObject<T> {
    [index: string]: T
}

export interface MaskType {
    text?: string,
    textMask?: Array<RegExp | string> | Function,
    numberToString?: Function,
    textMaskFunction?: Function
}

export interface IEMaskType {
    [index: string]: MaskType
}