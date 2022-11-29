import {EventDispatcher} from '../../util/EventDispatcher';
import {AbstractUnit} from '../../util/AbstractUnit';
import {Rect} from '../../util/Rect';

/**
 * WellBore data container. Schematics data are stored in “geotoolkit.schematics.data.WellBoreData” object.
 * “addComponent” is the method to accumulate components in the object.
 */
export class WellBoreData extends EventDispatcher {
    /**
     * WellBore data container. Schematics data are stored in “geotoolkit.schematics.data.WellBoreData” object.
     * “addComponent” is the method to accumulate components in the object.
     * @param options input parameters object or just an array of elements to add
     * @param options.elements elements to add
     * @param options.units units options
     * @param options.units.depth depth units
     * @param options.units.value value units
     */
    constructor(options?: object | { elements?: any[]; units?: object | { depth?: AbstractUnit; value?: AbstractUnit; } ; }  | any[]);
    /**
     * Creates or gets geotoolkit.schematics.data.WellBoreData instance from object (array of component data objects)
     * @param object object can be in format of constructor
     */
    static fromObject(object?: any[] | WellBoreData | null): WellBoreData | null;
    /**
     * Updates contents with the elements data
     * @param modified element(s) to update
     */
    updateComponents(modified: any[] | object): this;
    /**
     * Gets a component by its ID. Returns {name:string; data:object} instance if the component
     * exists or null if id is null or no such component has been registered
     * @param id component id
     */
    getComponentById(id: string): any;
    /**
     * Generates unique component id
     */
    generateId(): string;
    /**
     * Adds the component's data to the well bore
     * @example
     * ```javascript
     * const wellBoreData = new WellBoreData();
     * // Adding standard component - i.e. component inherited
     * // from @int/geotoolkit/schematics/scene/ReusableComponentNode:
     * wellBoreData.addComponent('tubing', { geometry: { depth: { from: 350, to: 400}} });
     * // Adding custom component  - i.e. component inherited
     * // from {@int/geotoolkit/schematics/scene/ComponentNode}:
     * wellBoreData.addComponent('MyCustomComponentName', { parA: valueA, parB: valueB, setOfParametersC: { C1: valueC1, C2: valueC2 } });
     * // (adding) - casings & cements:
     * wellBoreData.addComponent('casing', {
     *    description: 'Drive Pipe',
     *    geometry: {
     *        depth: {from: 0, to: 341},
     *        diameter: {outer: 26, inner: 25}
     *    }
     * });
     * ```
     * @remarks fires {@link @int/geotoolkit/util/Collection~Events#Add}
     * @param componentName element name
     * @param data data to build component node
     * @param data.subset component subset name
     * @param index index to add the component at
     * (@see {@link @int/geotoolkit/schematics/scene/WellBoreNode.WellBoreNode}'s 'setRenderingHints' method API for subset usage example)
     */
    addComponent(componentName: string, data: object | { subset?: string; } , index?: number): this;
    /**
     * Adds the component's data to the well bore
     * @remarks fires {@link @int/geotoolkit/util/Collection~Events#Add}
     * @param elements schematics element(s) to add in format
     * {name: string,
     * data: {
     *       id: string,
     *       description: string,
     *       geometry:[
     *         {
     *           depth: {from: number, to: number}
     *           diameter: {inner: number, outer: number}
     *         }
     *       ]
     */
    addComponents(elements: object | any[]): this;
    /**
     * @deprecated since 2020 (3.0). The method is for internal use only.
     * Gets all components
     */
    getComponents(): any[];
    /**
     * Gets all the component's data if available; "undefined" otherwise
     * @param componentName component name
     */
    getComponent(componentName: string): any[];
    /**
     * @deprecated since 2020 (3.0). The method is for internal use only.
     * Gets all the "componentName" components' indices if available
     * @param componentName component name
     */
    getIndices(componentName: string): any[];
    /**
     * Removes all data elements with the name specified
     * @remarks fires {@link @int/geotoolkit/util/Collection~Events#Remove}
     * @param componentName element name
     */
    removeComponent(componentName: string): this;
    /**
     * Removes an element with the specified ID
     * @remarks fires {@link @int/geotoolkit/util/Collection~Events#Remove}
     * @param componentId element ID
     */
    removeComponentById(componentId: string): this;
    /**
     * Removes all data elements from the well bore
     * @remarks fires {@link @int/geotoolkit/util/Collection~Events#Remove}
     */
    removeAll(): this;
    /**
     * Gets geometry bounds
     */
    getGeometryBounds(): Rect | null;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {elements: any[]; units: {depth: AbstractUnit; value: AbstractUnit}} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties properties
     * @param properties.elements elements to set
     * @param properties.units units options
     * @param properties.units.depth depth units
     * @param properties.units.value value units
     */
    setProperties(properties?: object | { elements?: any[]; units?: object | { depth?: AbstractUnit; value?: AbstractUnit; } ; } ): this;
}
