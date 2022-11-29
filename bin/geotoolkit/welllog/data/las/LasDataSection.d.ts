import {LasSection} from './LasSection';

/**
 * LAS Data Section built from an ASCII or _Data section. Holds arrays of data.
 */
export class LasDataSection extends LasSection {
    /**
     * LAS Data Section built from an ASCII or _Data section. Holds arrays of data.
     * @param section section
     * @param section.name name
     * @param section.data name
     * @param section.numeric name
     */
    constructor(section?: object | { name?: string; data?: any[]; numeric?: boolean; } );
    /**
     * Returns data from the section
     */
    getNumeric(): boolean;
}
