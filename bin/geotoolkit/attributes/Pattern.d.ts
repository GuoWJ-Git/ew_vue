import {EventDispatcher} from '../util/EventDispatcher';
import {Dimension} from '../util/Dimension';

/**
 * Defines a base class to define a pattern.
 */
export class Pattern extends EventDispatcher {
    /**
     * Defines a base class to define a pattern.
     * @param data The image patterns options
     * @param data.patternname name of this pattern for indexing
     * @param data.containername an optional container name, which creates an image pattern. This
     * parameter is used for serialization if you want to save are reference to pattern instead of the pattern itself
     * @param data.scalable flag that sets scalability of the pattern
     * coordinates, or relative to the shape it is filling (It is not supported)
     * @param data.userhandle additional info associated with current image patter
     */
    constructor(data?: object | { patternname?: string; containername?: string; scalable?: boolean; userhandle?: Function; } );
    /**
     * Makes a pattern from the image
     * @param context 2d rendering context from canvas
     * @param repetition style of repetition
     * @param foregroundColor of the pattern
     */
    getPattern(context: CanvasRenderingContext2D, repetition: string, foregroundColor?: string): CanvasPattern | null;
    /**
     * Gets the X scale for image transformation.
     */
    protected getScaleX(): number;
    /**
     * Gets the Y scale for image transformation.
     */
    protected getScaleY(): number;
    /**
     * Returns true if image has already loaded and current instance is ready to draw.
     * @deprecated since 2021.1 (3.3)
     */
    isReady(): boolean;
    /**
     * Returns size as a Dimension object with width and height attributes
     */
    getSize(): Dimension;
    /**
     * Width of this pattern's image
     */
    getWidth(): number;
    /**
     * Height of this pattern's image
     */
    getHeight(): number;
    /**
     */
    getUserHandle(): any;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {patternname: string; containername: string; scalable: boolean; userhandle: Function} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.patternname Pattern name
     * @param properties.containername Container name
     * @param properties.scalable Defines pattern scalability
     * @param properties.userhandle User handle function
     */
    setProperties(properties: object | { patternname?: string; containername?: string; scalable?: boolean; userhandle?: Function; } ): this;
    /**
     * invalidate parent
     * @param foregroundColor of the pattern
     */
    invalidate(foregroundColor?: string): this;
    /**
     * return the load image promise
     */
    getPromise(): Promise<any>;
    /**
     * This method sets the container and pattern name to be
     * used for serialization.
     * @param patternName pattern name
     * @param containerName container name
     */
    setPatternName(patternName: string, containerName: string): this;
    /**
     * Returns pattern name
     */
    getPatternName(): string;
    /**
     * Returns a name of the pattern container
     */
    getContainerName(): string;
    /**
     * Return the imagepattern data url promise
     */
    getDataURL(): Promise<string>;
}
