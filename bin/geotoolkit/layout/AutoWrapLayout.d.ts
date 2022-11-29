import {Layout} from './Layout';
import {Node} from '../scene/Node';
import {Dimension} from '../util/Dimension';

/**
 */
export class AutoWrapLayout extends Layout {
    /**
     * @param layoutableNodes Layoutable nodes to layout, AutoWrapLayout only layouts layoutableNodes or properties object
     * @param layoutableNodes.layoutablenodes Layoutable nodes to layout, AutoWrapLayout only layouts layoutableNodes
     */
    constructor(layoutableNodes?: Node | Node[] | object | { layoutablenodes?: Node | Node[]; } );
    /**
     * Set layoutable nodes
     * @param nodes The nodes to layout when layout is called
     */
    setLayoutableNodes(nodes: Node | Node[]): this;
    /**
     * Get layoutable nodes
     */
    getLayoutableNodes(): Node[];
    /**
     * Set max size
     * @deprecated since 2020.1 (3.1)
     * @param size Max size
     */
    setMaxSize(size: Dimension): this;
    /**
     * Get max size
     * @deprecated since 2020.1 (3.1)
     */
    getMaxSize(): Dimension;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {layoutablenodes: Node[]} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.layoutablenodes Layoutable nodes to layout, AutoWrapLayout only layouts layoutableNodes
     */
    setProperties(properties?: object | { layoutablenodes?: Node | Node[]; } ): this;
}
