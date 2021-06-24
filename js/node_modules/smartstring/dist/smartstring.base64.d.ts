/**
 * the type for base 64
 */
export declare type TBase64Input = 'string' | 'base64' | 'base64uri';
/**
 * handle base64 strings
 */
export declare class Base64 {
    private refString;
    constructor(inputStringArg: any, typeArg: TBase64Input);
    /**
     * the simple string (unencoded)
     */
    readonly simpleString: string;
    /**
     * the base64 encoded version of the original string
     */
    readonly base64String: any;
    /**
     * the base64uri encoded version of the original string
     */
    readonly base64UriString: any;
}
export declare let base64: {
    encode: (stringArg: string) => any;
    encodeUri: (stringArg: string) => any;
    decode: (stringArg: string) => any;
};
