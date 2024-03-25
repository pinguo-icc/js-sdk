declare type TJson<V = any> = Record<string, V>;
declare type ObjectKeys<T> = keyof T;
declare type Rect = {
    x:Number
    y:Number
    w:Number
    h:Number
}