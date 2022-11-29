import {LasSection} from './LasSection';
import {LasParameter} from './LasParameter';

/**
 * A section of LAS Data obtained from parser.
 */
export class LasParameterSection extends LasSection {
    /**
     * A section of LAS Data obtained from parser.
     */
    constructor();
    /**
     * @param position displacement relative to header
     * @param comment comment
     */
    addComment(position: number, comment: string): this;
    /**
     * Set param
     * @param mnemonic mnemonic
     * @param unit unit
     * @param value value
     * @param description description
     */
    setParameter(mnemonic: string, unit: string, value: string, description: string): this;
    /**
     * Gets value associated with mnemonic in parameter line
     * The value is parsed as string. It Will be either number or text.
     * @param mnemonic parameter mnemonic
     */
    getParameterValue(mnemonic: string): number | string;
    /**
     * Gets parameter object associated with mnemonic in parameter line
     * @param mnemonic parameter mnemonic
     */
    getParameter(mnemonic: string): LasParameter | null;
}
