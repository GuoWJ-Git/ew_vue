import {Group} from '../../scene/Group';
import {IComponent} from './IComponent';
import {Dimension} from '../../util/Dimension';
import {Point} from '../../util/Point';
import {GraphicsPath} from '../../renderer/GraphicsPath';
import {TextStyle} from '../../attributes/TextStyle';
import {Rect} from '../../util/Rect';
import {StateChanges, Node} from '../../scene/Node';

/**
 * A visual that can be inserted into the DiagramWidget. Base class for holding visuals used in the Diagram
 */
export class DiagramVisual extends Group implements IComponent {
    /**
     * A visual that can be inserted into the DiagramWidget. Base class for holding visuals used in the Diagram
     * @param options visual options
     * @param options.geometry JSON with node properties
     * @param options.prototypename string instance representing component name
     * @param options.prototypeid string instance representing component class
     * @param options.category string instance representing component category
     * @param options.defaultsize size of the visual
     * @param options.searchkeywords an array of search keywords
     * @param options.linkpoints an array of linking points
     * @param options.outline outline (path) for the Visual
     * @param options.text text shape properties
     * @param options.text.text text
     * @param options.text.style text style
     * @param options.url url to an icon
     */
    constructor(options?: object | { geometry?: any; prototypename?: string; prototypeid?: string; category?: string; defaultsize?: Dimension; searchkeywords?: string[]; linkpoints?: Point[]; outline?: GraphicsPath; text?: object | { text?: string; style?: TextStyle; }  | string; url?: string; } );
    /**
     * Creates a copy from the given source
     * @param src source object to copy from
     */
    copyConstructor(src: any | DiagramVisual): this;
    /**
     * Mark this instance to be updated.
     * @param regions optional array to return invalid rectangles
     * @param changes optional parameter to specify a reason of changes
     */
    updateState(regions?: Rect[], changes?: StateChanges): this;
    /**
     * Returns component class, string value
     */
    getPrototypeId(): string;
    /**
     * Gets component name
     */
    getPrototypeName(): string;
    /**
     * Gets component category
     */
    getCategory(): string;
    /**
     * Gets an array of keywords for better search
     */
    getSearchKeywords(): string[];
    /**
     * Sets default size of the visual
     * @param dimension new default dimension
     */
    setDefaultSize(dimension: Dimension): this;
    /**
     * Gets default size of the visual
     */
    getDefaultSize(): Dimension;
    /**
     * Gets geometry for the current link visual
     */
    getGeometry(): Node;
    /**
     * Sets link points. Link points must be defined in the shapes's model
     * space
     * @param points an array of model-space points
     * that represent possible connections
     */
    setLinkPoints(points: Point[]): this;
    /**
     * Returns an array of link points: begin and end
     */
    getLinkPoints(): Point[];
    /**
     * Gets outline (path) for the Visual
     */
    getOutline(): GraphicsPath;
    /**
     * Gets the default icon size for UI representation
     * @deprecated since 2022 (v3.4)
     */
    getDefaultIconSize(): Dimension;
    /**
     * Sets url for icon
     * @param value url to an icon
     */
    setUrl(value: string): this;
    /**
     * Gets url for icon
     */
    getUrl(): string;
    /**
     * Sets text and its options
     * @param textOptions text and/or its options
     * @param textOptions.text text content
     * @param textOptions.style text style
     */
    setText(textOptions: object | { text?: string; style?: TextStyle; }  | string): this;
    /**
     * Gets previously set text to the visual
     */
    getText(): object;
    /**
     * Sets properties
     * @param properties visual properties
     * @param properties.geometry JSON with node properties
     * @param properties.prototypename string instance representing component name
     * @param properties.prototypeid string instance representing component class
     * @param properties.category string instance representing component category
     * @param properties.defaultsize size of the visual
     * @param properties.searchkeywords an array of search keywords
     * @param properties.linkpoints an array of linking points
     * @param properties.outline outline (path) for the Visual
     * @param properties.text text shape properties
     * @param properties.text.text text
     * @param properties.text.style text style
     * @param properties.url url to an icon
     */
    setProperties(properties: object | { geometry?: any; prototypename?: string; prototypeid?: string; category?: string; defaultsize?: Dimension; searchkeywords?: string[]; linkpoints?: Point[]; outline?: GraphicsPath; text?: object | { text?: string; style?: TextStyle; }  | string; url?: string; } ): this;
    /**
     * Gets properties
     */
    getProperties(): {geometry: any; prototypename: string; prototypeid: string; category: string; defaultsize: Dimension; searchkeywords: string[]; linkpoints: Point[]; outline: GraphicsPath; text: {text: string; style: TextStyle}; url: string} | any;
}
