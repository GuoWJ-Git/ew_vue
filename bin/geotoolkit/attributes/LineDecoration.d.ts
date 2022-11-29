import {ILineDecoration} from './ILineDecoration';

/**
 * Defines a class that contains line rendering decoration strategies.
 */
export class LineDecoration {
    /**
     * Defines a class that contains line rendering decoration strategies.
     */
    constructor();
    /**
     * Solid line decoration type
     */
    Solid: ILineDecoration;
    /**
     * Wavy line decoration type
     */
    Wavy: ILineDecoration;
    /**
     * Double line decoration type
     */
    Double: ILineDecoration;
    /**
     * Double-Wavy line decoration type
     */
    DoubleWavy: ILineDecoration;
    /**
     * Return line decoration by type name
     * @param lineDecorationType line decoration type
     */
    static getLineDecoration(lineDecorationType: string): ILineDecoration;
    /**
     * Register line decoration type by name
     * @param shortTypeName type name of the line decoration
     * @param lineDecoration line decoration instance
     */
    static registerLineDecoration(shortTypeName: string, lineDecoration: ILineDecoration): void;
    /**
     * Create or get line decoration strategy from object
     * @param decoration decoration can be a name of LineDecoration instance if it is registered
     */
    static fromObject(decoration?: string | ILineDecoration): ILineDecoration | null;
}
