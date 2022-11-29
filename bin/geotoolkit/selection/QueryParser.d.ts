/**
 * This class parses formulas and logical conditions to expression, which can be used as
 * a function
 */
export class QueryParser {
    /**
     * This class parses formulas and logical conditions to expression, which can be used as
     * a function
     * @param functions array of functions
     */
    constructor(functions: Function[]);
    /**
     * Register additional functions
     * @param functions function to be registered
     */
    registerFunctions(functions: object): void;
    /**
     * Parse string to expressions
     * @param s string to parse
     */
    parse(s: string): object | null;
}
