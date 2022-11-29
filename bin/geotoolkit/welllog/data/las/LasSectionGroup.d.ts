import {LasParameterSection} from './LasParameterSection';
import {LasParameter} from './LasParameter';

/**
 * A grouping of LAS sections. Used by calling getCurveData with a specific curve mnemonic to get that curve's data
 */
export class LasSectionGroup {
    /**
     * A grouping of LAS sections. Used by calling getCurveData with a specific curve mnemonic to get that curve's data
     */
    constructor();
    /**
     * Gets the name of this group (prefix)
     */
    getName(): string;
    /**
     * Gets an array of the sections within this group
     */
    getSections(): any;
    /**
     * Returns the parameter section
     */
    getParameters(): LasParameterSection;
    /**
     * Returns the curve parameter
     * @param mnemonic OR index of column for desired data
     */
    getCurveInfo(mnemonic: string | number): LasParameter;
    /**
     * Returns the curve mnemonics section
     */
    getCurveMnemonics(): string[];
    /**
     * Return is this data set numeric
     * @param mnemonic OR index of column for desired data
     */
    isCurveNumeric(mnemonic: string | number): boolean;
    /**
     * Returns the curve data section for specific mnemonic (single curve data as an array)
     * @param mnemonic OR index of column for desired data
     */
    getCurveData(mnemonic: string | number): any[];
}
