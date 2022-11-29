/**
 */
export class Base64 {
    /**
     */
    constructor();
    /**
     * encode to base64
     * @param input string to encode
     */
    static encode(input: string): string;
    /**
     * decode from base64
     * @param input string to decode
     */
    static decode(input: string): string;
}
