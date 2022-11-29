/**
 * Http error
 */
export class HttpError extends Error {
    /**
     * Http error
     * @param message message
     * @param options options
     * @param code code
     * @param request request
     * @param response response
     */
    constructor(message: string, options?: any, code?: string, request?: any, response?: any);
    /**
     * Return information about error
     */
    toJSON(): {message: string; name: string; description: string; number: number; fileName: string; lineNumber: string; columnNumber: string; stack: string; options: any; code: string} | object;
    /**
     * Returns a string representing the specified object
     */
    toString(): string;
}
