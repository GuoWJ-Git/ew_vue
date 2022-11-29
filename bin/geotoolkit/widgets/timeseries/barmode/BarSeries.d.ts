/**
 * Defines bar series of TimeSeries
 */
export class BarSeries {
    /**
     * Defines bar series of TimeSeries
     * @param barSeriesObject BarSeries setting
     * @param barSeriesObject.datapointindex Index of data in x coordinate
     * @param barSeriesObject.lineindex Index of curve
     * @param barSeriesObject.barleft Bar left coordinate in model space
     * @param barSeriesObject.barbottom Bar bottom coordinate in model space
     * @param barSeriesObject.barheight Bar height in model space
     * @param barSeriesObject.barwidth Bar width in model space
     * @param barSeriesObject.barvalue Bar value
     * @param barSeriesObject.text Formatted bar value
     * @param barSeriesObject.textax Bar value text anchor x
     * @param barSeriesObject.textay Bar value text anchor y
     * @param barSeriesObject.textwidth Bar value text width
     * @param barSeriesObject.textheight Bar value text height
     */
    constructor(barSeriesObject: object | { datapointindex: number; lineindex: number; barleft: number; barbottom: number; barheight: number; barwidth: number; barvalue: number; text?: string; textax?: number; textay?: number; textwidth?: number; textheight?: number; } );
    /**
     * Get bar series
     */
    getBarSeries(): {datapointindex: number; lineindex: number; barleft: number; barbottom: number; barheight: number; barwidth: number; barvalue: number; text: string; textax: number; textay: number; textwidth: number; textheight: number} | object;
    /**
     * Compare to other bar series
     * @param otherBarSeries Other bar series
     */
    compareTo(otherBarSeries: BarSeries): boolean;
}
