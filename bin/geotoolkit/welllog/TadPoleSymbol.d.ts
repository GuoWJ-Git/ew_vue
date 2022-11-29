import {SymbolShape} from '../scene/shapes/SymbolShape';
import {AnchorType} from '../util/AnchorType';
import {LineStyle} from '../attributes/LineStyle';

/**
 * Creates a tadpole, which is a symbol associated with one or several ticks.
 * @deprecated since 2021.1 (3.3). Use geotoolkit.welllog.TadPole with geotoolkit.welllog.LogCurve instead.
 */
export class TadPoleSymbol extends SymbolShape {
    /**
     * Creates a tadpole, which is a symbol associated with one or several ticks.
     * @param options options or anchor x position
     * @param options.ax anchor x position
     * @param options.ay anchor y position
     * @param options.width symbol width
     * @param options.height symbol height
     * @param options.alignment anchor type of symbol
     * @param options.sizeisindevicespace flag to indicate if size of the symbol in device
     * @param options.centersymbol center symbol to be used
     * @param options.legs line element associated with the tadpole symbol
     * @param options.angle rotation angle
     * @param ay anchor y position
     * @param width symbol width
     * @param height symbol height
     * @param alignment anchor type of symbol
     * @param sizeIsInDeviceSpace flag to indicate if size of the symbol in device
     * @param centerSymbol center symbol to be used
     * @param legs line element associated with the tadpole symbol.
     * @param angle rotation angle
     */
    constructor(options?: number | object | { ax?: number; ay?: number; width?: number; height?: number; alignment?: AnchorType; sizeisindevicespace?: number; centersymbol?: SymbolShape; legs?: any[]; angle?: number; } , ay?: number, width?: number, height?: number, alignment?: AnchorType, sizeIsInDeviceSpace?: number, centerSymbol?: SymbolShape, legs?: any[], angle?: number);
    /**
     * Specify rotations angle
     * @param angle angle
     */
    setAngle(angle: number): this;
    /**
     * Return rotation angle
     */
    getAngle(): number;
    /**
     * Set symbol
     * @param centerSymbol center symbol to be used
     */
    setSymbol(centerSymbol: SymbolShape): this;
    /**
     * Set Legs
     * @param legs line element associated with the symbol
     */
    setLegs(legs: any[]): this;
    /**
     * Get symbol
     */
    getSymbol(): SymbolShape;
    /**
     * Get Legs
     */
    getLegs(): any[];
    /**
     * Add Leg
     * @param angle in [0-2PI]
     * @param length length of the leg
     * @param linestyle line style of the leg
     */
    addLeg(angle: number, length: number, linestyle?: LineStyle | string | object): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {ax: number; ay: number; width: number; height: number; alignment: AnchorType; sizeisindevicespace: number; centersymbol: SymbolShape; legs: any[]; angle: number} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.ax anchor x position
     * @param properties.ay anchor y position
     * @param properties.width symbol width
     * @param properties.height symbol height
     * @param properties.alignment anchor type of symbol
     * @param properties.sizeisindevicespace flag to indicate if size of the symbol in device
     * @param properties.centersymbol center symbol to be used
     * @param properties.legs line element associated with the tadpole symbol
     * @param properties.angle rotation angle
     */
    setProperties(properties?: object | { ax?: number; ay?: number; width?: number; height?: number; alignment?: AnchorType; sizeisindevicespace?: number; centersymbol?: SymbolShape; legs?: any[]; angle?: number; } ): this;
}
