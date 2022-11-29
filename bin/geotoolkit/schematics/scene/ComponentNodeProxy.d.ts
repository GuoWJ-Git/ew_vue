import {ComponentNode} from './ComponentNode';
import {ReusableComponentNode} from './ReusableComponentNode';
import {Rect} from '../../util/Rect';
import {RenderingContext} from '../../renderer/RenderingContext';

/**
 * Encapsulates geotoolkit.schematics.scene.ReusableComponentNode  instance
 * The given data will be deeply copied
 */
export class ComponentNodeProxy extends ComponentNode {
    /**
     * Encapsulates geotoolkit.schematics.scene.ReusableComponentNode  instance
     * The given data will be deeply copied
     * @param options component node to re-use
     * @param options.reusablecomponentnode component node to re-use}
     * @param data data to initialize "reusableComponentNode" with
     */
    constructor(options?: ReusableComponentNode | object | { reusablecomponentnode?: ReusableComponentNode; } , data?: any);
    /**
     * Gets component's textual description. <br>
     * The implementation returns underlying reusable component's string representation.
     */
    toString(): string;
    /**
     * Dispose node. Clear all listeners
     * and disconnect style to avoid memory leaks
     */
    dispose(): void;
    /**
     * Sets component data
     * @param data data to set
     * @param data.geometry component geometry
     * @param data.description component description
     * @param data.renderinghints component rendering hints
     * @param deepCopy deep copy flag
     */
    setData(data: object | { geometry?: object; description?: string; renderinghints?: object | null; } , deepCopy?: boolean): this;
    /**
     * Gets "resource-based" indicator.
     */
    isResourceBased(): boolean;
    /**
     * Gets graphical styles associated with its underlying reusable component node.
     */
    getStyles(): any[];
    /**
     * Gets component bounds
     */
    getGeometryBounds(): Rect;
    /**
     * Check if component is within giving context
     * @param context RenderingContext
     */
    checkCollision(context: RenderingContext): boolean;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {reusablecomponentnode: ReusableComponentNode} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties optional object containing the properties to set
     * @param properties.reusablecomponentnode component node to re-use
     */
    setProperties(properties?: object | { reusablecomponentnode?: ReusableComponentNode; } ): this;
}
