import {SymbolShape} from '../scene/shapes/SymbolShape';
import {IExtendedDataSymbol} from './IExtendedDataSymbol';

/**
 * Creates a tadpole, which is a symbol that receives metaInfo from geotoolkit.welllog.data.ExtendedDataSource
 * @example
 * ```javascript
 * // How to use TadPole with LogCurve
 * import {TadPole} from '@int/geotoolkit/welllog/TadPole';
 * import {LogCurve} from '@int/geotoolkit/welllog/LogCurve';
 * import {FillStyle} from '@int/geotoolkit/attributes/FillStyle';
 * import {LineStyle} from '@int/geotoolkit/attributes/LineStyle';
 * import {KnownColors} from '@int/geotoolkit/util/ColorUtil';
 * const symbol = new TadPole({
 *      'ax’: 0,
 *      ‘ay’: 0,
 *      ‘width’: 15,
 *      ‘height’: 15,
 *      ‘sizeIsInDeviceSpace’: true
 * })
 * .setFillStyle(new FillStyle({
 *      ‘color’: fillColor || KnownColors.Yellow
 * }))
 * .setLineStyle(new LineStyle({
 *      ‘color’: KnownColors.Orange
 * }));
 * return new LogCurve(dataSource, true)
 * .setSymbol(symbol)
 * .setDisplayMode([‘symbol’])
 * .setNormalizationLimits(0, 90);
 * ```
 */
export class TadPole extends SymbolShape implements IExtendedDataSymbol {
    /**
     * Creates a tadpole, which is a symbol that receives metaInfo from geotoolkit.welllog.data.ExtendedDataSource
     * @param options properties object
     * @param options.legs line element associated with the tadpole symbol
     * @param options.angle rotation angle
     */
    constructor(options?: object | { legs?: object[]; angle?: number; } );
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
     * Set Legs
     * @param legs line element associated with the symbol
     */
    setLegs(legs: object[]): this;
    /**
     * Get Legs
     */
    getLegs(): object[];
    /**
     * Sets meta info
     * @param info meta info
     * @param info.angle rotation angle
     * @param info.legs legs angles and lengths
     */
    setMetaInfo(info: object | { angle: number; legs: object[]; } ): this;
    /**
     * Returns data from symbol
     */
    getMetaInfo(): object;
    /**
     * Check data from source, true if source contains info for symbol
     * @param data data
     */
    acceptMetaInfo(data: object): boolean;
}
