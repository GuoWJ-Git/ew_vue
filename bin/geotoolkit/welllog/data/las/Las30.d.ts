import {LasParser} from './LasParser';

/**
 * LAS 3.0 parser implementation
 */
export class Las30 extends LasParser {
    /**
     * LAS 3.0 parser implementation
     */
    constructor();
    /**
     * Parser done by hand to parse LAS 3.0 files
     * @param str input to parse
     */
    parse(str: string): boolean;
    /**
     * Private method to build parsed data into section data structures
     */
    buildSections(): any[];
    /**
     * Returns all sections not part of a group
     */
    getSections(): any[];
    /**
     * Gets all the section groups. Doesn't include sections not in groups.
     */
    getSectionGroups(): any[];
}
