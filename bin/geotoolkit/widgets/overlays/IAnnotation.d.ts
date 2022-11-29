import {Image} from '../../scene/shapes/Image';
import {Group} from '../../scene/Group';
import {Node} from '../../scene/Node';
import {Point} from '../../util/Point';

/**
 * Annotation
 */
export abstract class IAnnotation {
    /**
     * Get annotation name
     */
    abstract getName(): string;
    /**
     * Set annotation name
     * @param name 
     */
    abstract setName(name: string): this;
    /**
     * Get annotation text
     */
    abstract getText(): string;
    /**
     * Set annotation text
     * @param text 
     */
    abstract setText(text: string): this;
    /**
     * Get annotation symbol
     */
    abstract getSymbol(): {width: number; height: number; keepaspectratio: boolean; url: string; node: Node} | object;
    /**
     * Set annotation symbol
     * @param symbol (base64 in case of url)
     * @param symbol.width 
     * @param symbol.height 
     * @param symbol.keepaspectratio default is true
     * @param symbol.url 
     * @param symbol.node 
     */
    abstract setSymbol(symbol: string | Image | Group | object | { width?: number; height?: number; keepaspectratio?: boolean; url?: string; node?: Node; } ): this;
    /**
     * Get annotation anchor
     */
    abstract getAnchor(): Point;
    /**
     * Set annotation anchor
     * Returns annotation
     * @param anchor 
     */
    abstract setAnchor(anchor: Point): this;
    /**
     * Get annotation target
     */
    abstract getTarget(): Node;
    /**
     * Set annotation target
     * @param target 
     */
    abstract setTarget(target: Node): this;
    /**
     * Get annotation options
     */
    abstract getOptions(): object | any;
    /**
     * Set annotation options
     * @param options 
     * @param options.id 
     * @param options.cssclass 
     * @param options.name 
     */
    abstract setOptions(options: object | { id?: string; cssclass?: string; name?: string; } ): this;
}
