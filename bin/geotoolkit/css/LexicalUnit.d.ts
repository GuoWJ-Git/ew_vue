/**
 * Defines css Lexical unit
 */
export class LexicalUnit {
    /**
     * Defines css Lexical unit
     */
    constructor();
    /**
     * Gets an integer representing the type of CssLexeme
     * @param type type
     */
    getLexicalUnitType(type?: string): number;
    /**
     * Parses value passed into constructor
     * @param value Value of the parameter
     * @param p Previous lexical unit
     */
    parseParameters(value: string, p?: LexicalUnit): this;
    /**
     * Returns string representing dimension unit
     */
    getDimensionUnitText(): string | null;
    /**
     * Get number value
     */
    getNumberValue(): number | null;
    /**
     * Gets the next lexical unit, if present, otherwise null
     */
    getNextLexicalUnit(): this | any;
    /**
     * Gets the previous lexical unit, if present, otherwise null
     */
    getPreviousLexicalUnit(): this | any;
    /**
     * Gets the string representation of value
     * If the type is CSS_URI, the return value doesn't contain uri(....) or quotes.
     * If the type is CSS_ATTR, the return value doesn't contain attr(....).
     */
    getStringValue(): string;
}
