import {EventDispatcher} from '../../util/EventDispatcher';
import {IAnnotation} from './IAnnotation';
import {Point} from '../../util/Point';
import {Node} from '../../scene/Node';
import {TextStyle} from '../../attributes/TextStyle';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {Image} from '../../scene/shapes/Image';
import {Group} from '../../scene/Group';

/**
 * Creates default implementation of the annotation
 */
export class Annotation extends EventDispatcher implements IAnnotation {
    /**
     * Creates default implementation of the annotation
     * @param data 
     * @param data.name annotation name
     * @param data.text annotation text
     * @param data.symbol base64 image
     * @param data.anchor 
     * @param data.target target
     * @param data.options options
     * @param data.options.textstyle annotation text style
     * @param data.options.linestyle annotation border line style
     * @param data.options.fillstyle annotation fill style
     */
    constructor(data: object | { name?: string; text?: string; symbol?: string; anchor?: Point; target?: Node; options?: object | { textstyle?: string | object | TextStyle; linestyle?: string | object | LineStyle; fillstyle?: string | object | FillStyle; } ; } );
    /**
     * Get annotation name
     */
    getName(): string;
    /**
     * Set annotation name
     * @param name new annotation name
     */
    setName(name: string): this;
    /**
     * Get annotation text
     */
    getText(): string;
    /**
     * Set annotation text
     * @param text new annotation text
     */
    setText(text: string): this;
    /**
     * Get annotation symbol
     */
    getSymbol(): {width: number; height: number; keepaspectratio: boolean; url: string; node: Node} | object;
    /**
     * Set annotation symbol
     * @param symbol symbol
     * @param symbol.width width
     * @param symbol.height height
     * @param symbol.keepaspectratio default is true
     * @param symbol.url url
     * @param symbol.node node
     */
    setSymbol(symbol: string | Image | Group | object | { width?: number; height?: number; keepaspectratio?: boolean; url?: string; node?: Node; } ): this;
    /**
     * Get annotation anchor
     */
    getAnchor(): Point;
    /**
     * Set annotation anchor
     * @param anchor anchor
     */
    setAnchor(anchor: Point): this;
    /**
     * Get annotation target
     */
    getTarget(): Node;
    /**
     * Set annotation target
     * @param target target
     */
    setTarget(target: Node): this;
    /**
     * Get annotation options
     */
    getOptions(): {textstyle: TextStyle; linestyle: LineStyle; fillstyle: FillStyle} | any;
    /**
     * Set annotation options
     * @param options options
     * @param options.textstyle annotation text style
     * @param options.linestyle annotation border line style
     * @param options.fillstyle annotation fill style
     */
    setOptions(options: object | { textstyle: string | object | TextStyle; linestyle: string | object | LineStyle; fillstyle: string | object | FillStyle; } ): this;
    /**
     * Create IAnnotation from object
     * @param object object
     */
    static fromObject(object: object | IAnnotation): IAnnotation;
    /**
     * Set annotation properties
     * @param properties Annotation properties
     * @param properties.text Annotation text content
     * @param properties.textstyle annotation text style
     * @param properties.linestyle annotation border line style
     * @param properties.fillstyle annotation fill style
     */
    setProperties(properties?: object | { text?: string; textstyle?: string | object | TextStyle; linestyle?: string | object | LineStyle; fillstyle?: string | object | FillStyle; } ): this;
    /**
     * Get annotation properties
     */
    getProperties(): {text: string; textstyle: TextStyle; fillstyle: FillStyle; linestyle: LineStyle} | any;
}
