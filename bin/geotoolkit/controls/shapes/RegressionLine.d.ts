import {ScaledShape} from '../../scene/shapes/ScaledShape';
import {NumericalDataSeries} from '../../data/NumericalDataSeries';
import {NumericalDataSeriesView} from '../../data/NumericalDataSeriesView';
import {Rect} from '../../util/Rect';
import {RegressionBase} from '../util/regression/RegressionBase';

/**
 * RegressionLine shape wrap a regression model and draw the curve (and also confidence and prediction interval)
 * for the given data set x and y based on the model
 */
export class RegressionLine extends ScaledShape {
    /**
     * RegressionLine shape wrap a regression model and draw the curve (and also confidence and prediction interval)
     * for the given data set x and y based on the model
     * @param options 
     * @param options.datax data set x
     * @param options.datay data set y
     * @param options.extended the flag if extend x limits of curve to the limits of shape's model limits
     * @param options.horizontallogmode Log mode in horizontal direction
     * @param options.verticallogmode Log mode in vertical direction
     * @param options.plotinterval the interval of sampling x when drawing curve
     * @param options.regressionmodel options for regression model
     * @param options.regressionline options for regression line
     * @param options.confidenceline options for confidence line
     * @param options.predictionline options for prediction line
     */
    constructor(options: object | { datax?: number[] | NumericalDataSeries | NumericalDataSeriesView; datay?: number[] | NumericalDataSeries | NumericalDataSeriesView; extended?: boolean; horizontallogmode?: boolean; verticallogmode?: boolean; plotinterval?: number; regressionmodel?: any; regressionline?: any; confidenceline?: any; predictionline?: any; } );
    /**
     * set options for shape
     * @param options options
     * @param options.extended the flag if extend x limits of curve to the limits of shape's model limits
     * @param options.plotinterval the interval of sampling x when drawing curve
     * @param options.regressionmodel options for regression model
     * @param options.regressionline options for regression line
     * @param options.confidenceline options for confidence line
     * @param options.predictionline options for prediction line
     * @param options.horizontallogmode Log mode in horizontal direction
     * @param options.verticallogmode Log mode in vertical direction
     */
    setOptions(options: object | { extended?: boolean; plotinterval?: number; regressionmodel?: any; regressionline?: any; confidenceline?: any; predictionline?: any; horizontallogmode?: boolean; verticallogmode?: boolean; } ): this;
    /**
     * set model limits of shape
     * @param limits model limits
     */
    setModelLimits(limits: Rect): this;
    /**
     * get model limits of shape
     */
    getModelLimits(): Rect | any;
    /**
     * set model bounds of shape
     * @param bounds model bounds
     */
    setBounds(bounds: Rect): this;
    /**
     * get model bounds of shape
     */
    getBounds(): Rect;
    /**
     * set properties for shape
     * @param properties properties
     * @param properties.datax data set x
     * @param properties.datay data set y
     * @param properties.extended the flag if extend x limits of curve to the limits of shape's model limits
     * @param properties.plotinterval the interval of sampling x when drawing curve
     * @param properties.regressionmodel options for regression model
     * @param properties.regressionline options for regression line
     * @param properties.confidenceline options for confidence line
     * @param properties.predictionline options for prediction line
     * @param properties.horizontallogmode Log mode in horizontal direction
     * @param properties.verticallogmode Log mode in vertical direction
     */
    setProperties(properties: object | { datax?: number[] | NumericalDataSeries | NumericalDataSeriesView; datay?: number[] | NumericalDataSeries | NumericalDataSeriesView; extended?: boolean; plotinterval?: number; regressionmodel?: any; regressionline?: any; confidenceline?: any; predictionline?: any; horizontallogmode?: boolean; verticallogmode?: boolean; } ): this;
    /**
     * get properties of shape
     */
    getProperties(): {datax: number[] | NumericalDataSeries | NumericalDataSeriesView; datay: number[] | NumericalDataSeries | NumericalDataSeriesView; extended: boolean; plotinterval: number; regressionmodel: any; regressionline: any; confidenceline: any; predictionline: any; horizontallogmode: boolean; verticallogmode: boolean} | any;
    /**
     * get options for regression model
     */
    getRegressionModelOptions(): {type: RegressionBase} | object;
    /**
     * get options of shape
     */
    getOptions(): {extended: boolean; plotinterval: number; regressionmodel: object; regressionline: object; confidenceline: object; predictionline: object} | any;
    /**
     * set if extend x limits of curve from the limit of data set x to the x model limits(since they could be different)
     * @param extended the flag to determine if extend x limits
     */
    setExtended(extended: boolean): this;
    /**
     * set the interval when sampling the x for drawing curve
     * @param interval the sampling interval in screen pixel
     */
    setPlotInterval(interval: number): this;
    /**
     * set data source for x and y
     * @param data data
     * @param data.datax data source for x
     * @param data.datay data source for y
     * @param data.weights weights of data point
     * @param incremental incremental
     */
    setData(data: object | { datax?: number[] | NumericalDataSeries | NumericalDataSeriesView; datay?: number[] | NumericalDataSeries | NumericalDataSeriesView; weights?: number[] | NumericalDataSeries | NumericalDataSeriesView; } , incremental?: boolean): this;
    /**
     * get statistics of regression model
     */
    getStatistics(): any;
    /**
     * get current regression model
     */
    getRegressionModel(): RegressionBase | any;
}
