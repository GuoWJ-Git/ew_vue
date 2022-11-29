import {BaseEventArgs} from '../controls/tools/BaseEventArgs';

/**
 * This class holds the details of a selection change event.
 * You can access the id of the selected object using this object.
 */
export class SelectionChangeEventArgs extends BaseEventArgs {
    /**
     * This class holds the details of a selection change event.
     * You can access the id of the selected object using this object.
     * @param eventName information about the events arguments
     * @param id 
     * @param type selection type ('line', 'fill', 'axis' or 'legend')
     */
    constructor(eventName: string, id: string | any, type?: string);
    /**
     * return selected id
     */
    getId(): string | any;
    /**
     * Gets selection type
     */
    getType(): string | null;
}
