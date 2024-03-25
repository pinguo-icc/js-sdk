declare type TJson<V = any> = Record<string, V>;
declare type ObjectKeys<T> = keyof T;
declare type Rect = {
    x:number
    y:number
    w:number
    h:number
}