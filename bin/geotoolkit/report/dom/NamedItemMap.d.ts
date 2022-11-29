import {INamedItem} from './INamedItem';

/**
 * The NamedItemMap interface represents a collection of {@link @int/geotoolkit/report/dom/Attribute.Attribute} objects.<br>
 */
export class NamedItemMap {
    /**
     * The NamedItemMap interface represents a collection of {@link @int/geotoolkit/report/dom/Attribute.Attribute} objects.<br>
     */
    constructor();
    /**
     * Returns the amount of objects in the map.
     */
    length: number;
    /**
     * Returns a {@link @int/geotoolkit/report/dom/Attribute.Attribute}, corresponding to the given name.
     * @param name of named item
     */
    getNamedItem(name: string): INamedItem;
    /**
     * Replaces, or adds, the {@link @int/geotoolkit/report/dom/Attribute.Attribute} identified in the map by the given name.
     * @param namedItem named item
     */
    setNamedItem(namedItem: INamedItem): this;
    /**
     * Removes the {@link @int/geotoolkit/report/dom/Attribute.Attribute} identified by the given map.
     * @param name named item name to remove
     */
    removeNamedItem(name: string): this;
    /**
     * Returns the {@link @int/geotoolkit/report/dom/Attribute.Attribute} at the given index, or null if the index is higher or equal to the number of nodes.
     * @param index of named item
     */
    item(index: number): INamedItem;
}
