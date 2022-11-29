import {IComponent} from '../shapes/IComponent';
import {FillStyle} from '../../attributes/FillStyle';
import {LineStyle} from '../../attributes/LineStyle';

/**
 * Factory that is used for creating Diagram Visual prototypes.
 * getInstance returns an singletone instance, otherwise, new visual prototypes can be registered with
 * registerPlugin method.
 * @example
 * ```javascript
 * import {VisualFactory} from '@int/geotoolkit/flowcharts/plugins/VisualFactory';
 * import {DiagramVisual} from '@int/geotoolkit/flowcharts/shapes/DiagramVisual';
 * VisualFactory.getInstance().registerPlugin(new DiagramVisual({...}))
 * ```
 */
export class VisualFactory {
    /**
     * Factory that is used for creating Diagram Visual prototypes.
     * getInstance returns an singletone instance, otherwise, new visual prototypes can be registered with
     * registerPlugin method.
     */
    constructor();
    /**
     * Gets an singletone instance
     */
    static getInstance(): VisualFactory;
    /**
     * Gets all available plugins
     */
    getPlugins(): IComponent[];
    /**
     * Gets a default fill style that should be applied to all newly created visuals
     */
    getDefaultFillStyle(): FillStyle | any;
    /**
     * Sets a default fill style that should be applied to all newly created visuals
     * @param value a fill style instance
     */
    setDefaultFillStyle(value: FillStyle | any): this;
    /**
     * Gets a default line style that should be applied to all newly created visuals
     */
    getDefaultLineStyle(): LineStyle | any;
    /**
     * Sets a default line style that should be applied to all newly created visuals
     * @param value a line style instance
     */
    setDefaultLineStyle(value: LineStyle | any): this;
    /**
     * Registers the given component in the factory
     * @param component a visual plugin instance
     */
    registerPlugin(component: IComponent): void;
    /**
     * Creates a new visual plugin instance using the given prototypeId name
     * @param prototypeId class name for a component to creaate
     * @param width the desired width of the newly created component. If not set, a default
     * value from prototype will be used
     * @param height the desired height of the newly created component. If not set, a default
     * value from prototype will be used
     */
    getVisual(prototypeId: string, width?: number, height?: number): IComponent | any;
}
