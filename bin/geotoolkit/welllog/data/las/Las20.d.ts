import {LasParser} from './LasParser';
import {LasSection} from './LasSection';
import {LasSectionGroup} from './LasSectionGroup';

/**
 * LAS Parser for LAS version 2.0.
 */
export class Las20 extends LasParser {
    /**
     * LAS Parser for LAS version 2.0.
     */
    constructor();
    /**
     * Builds string input into our data structures.
     * @param str input to parse
     */
    parse(str: string): any;
    /**
     * Builds sections to be read
     */
    buildSections(): any[];
    /**
     * Returns all sections not part of a group
     */
    getSections(): LasSection[];
    /**
     * Gets all the section groups. Doesn't include sections not in groups.
     */
    getSectionGroups(): LasSectionGroup[];
}
