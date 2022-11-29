import {ColorMap} from './ColorMap';

/**
 * Defines a default SeismicColor set. Users can create a custom SeismicColor set or get a default implementation. Please refer to SeismicColors.getDefault() for a list of default sets.
 */
export class SeismicColors {
    /**
     * Defines a default SeismicColor set. Users can create a custom SeismicColor set or get a default implementation. Please refer to SeismicColors.getDefault() for a list of default sets.
     */
    constructor();
    /**
     * Register colorMap
     * @param name The name of the colorMap
     * @param callback The registration function.
     */
    register(name: string, callback: Function): this;
    /**
     * Returns list of available color map
     */
    listNameColorMaps(): string[];
    /**
     * Build named color map with specified ramp size
     * @param name The name of the colorMap
     * @param rampSize The number of color bins in the colorMap.
     */
    createNamedColorMap(name: string, rampSize?: number): ColorMap | null;
    /**
     * Returns the default instance of colormaps. See examples. The default colormaps available are: <br>
     * <br>
     * geotoolkit.seismic.util.defines.Angles5color, <br>
     * geotoolkit.seismic.util.defines.BlackRedYellowWhite, <br>
     * geotoolkit.seismic.util.defines.GreyOrange,<br>
     * geotoolkit.seismic.util.defines.IntervalVelocity,<br>
     * geotoolkit.seismic.util.defines.IntervalVelocity16,<br>
     * geotoolkit.seismic.util.defines.IntervalVelocity32,<br>
     * geotoolkit.seismic.util.defines.Rainbow,<br>
     * geotoolkit.seismic.util.defines.RedGreenBlue,<br>
     * geotoolkit.seismic.util.defines.RedWhiteBlack,<br>
     * geotoolkit.seismic.util.defines.RedWhiteBlue,<br>
     * geotoolkit.seismic.util.defines.RedWhiteBlueExtremes,<br>
     * geotoolkit.seismic.util.defines.RedWhiteBlueHot,<br>
     * geotoolkit.seismic.util.defines.RedYellowBlue,<br>
     * geotoolkit.seismic.util.defines.Saddleback,<br>
     * geotoolkit.seismic.util.defines.SaddlebackHot,<br>
     * geotoolkit.seismic.util.defines.Spectrum,<br>
     * geotoolkit.seismic.util.defines.WhiteBlack<br>
     * @example
     * ```javascript
     * import {SeismicColors} from '@int/geotoolkit/seismic/util/SeismicColors';
     * const colorProvider = SeismicColors.getDefault();
     * const colormap = colorProvider.createNamedColorMap('WhiteBlack');
     * ```
     * @example
     * ```javascript
     * // positive and negative colors can be changed if you use Positive and Negative fill
     * import {SeismicPipeline} from '@int/geotoolkit/seismic/pipeline/SeismicPipeline';
     * const positiveNegativeWigglePipeline = new SeismicPipeline({'name': 'PositiveNegativeWigglePipeline', 'reader': reader, 'statistics': reader.getStatistics()})
     *      .setOptions({
     *        'colors': {
     *            'colorMap': SeismicColors.getDefault()
     *                .createNamedColorMap('RedWhiteBlue')
     *                .clone()
     *                .setNegativeFillColor('blue') // or any other color
     *                .setPositiveFillColor('red')
     *        },
     *        'plot': {
     *            'type': {
     *                'Wiggle': true,
     *                'NegativeFill': true, //in case if you use 'NegativeFill' instead of 'NegativeColorFill' we use fixed color for all negative values
     *                'PositiveFill': true
     *            }
     *        }
     *    }));
     * ```
     * @example
     * ```javascript
     * // or you can simply reverse it
     * const positiveNegativeWigglePipeline = new SeismicPipeline({'name': 'PositiveNegativeWigglePipeline', 'reader': reader, 'statictics': reader.getStatistics()})
     *      .setOptions({
     *        'colors': {
     *            'colorMap': SeismicColors.getDefault().createNamedColorMap('RedWhiteBlue')
     *                .reverse()
     *        },
     *        ...
     *        });
     * ```
     */
    static getDefault(): SeismicColors;
}
