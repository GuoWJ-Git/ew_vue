/**
 * A section of LAS Data obtained from parser.
 */
export class LasSection {
    /**
     * A section of LAS Data obtained from parser.
     * @param name section name
     * @param name.name name
     * @param name.data name
     * @param data data in current section
     */
    constructor(name?: string | object | { name?: string; data?: any[]; } , data?: any[]);
    /**
     * Gets name
     */
    getName(): string;
    /**
     * Set section name
     * @param name section name
     */
    setName(name: string): this;
    /**
     * Gets data
     */
    getData(): any[];
    /**
     * Sets data
     * @param data data
     */
    setData(data: any[]): this;
    /**
     * Gets associations of this section
     */
    getAssociations(): string;
}
