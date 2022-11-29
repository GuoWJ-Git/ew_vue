import {Shape} from '../../scene/shapes/Shape';
import {AbstractVisual} from '../visuals/AbstractVisual';
import {AbstractProjection} from '../projections/AbstractProjection';
import {ContourAbstractGrid} from '../grid/ContourAbstractGrid';
import {AbstractContourDataSource} from '../datasource/AbstractContourDataSource';
import {Transformation} from '../../util/Transformation';
import {ContourScale} from '../scale/ContourScale';
import {ContourFaultList} from '../faults/ContourFaultList';
import {ContourLabelsDirection} from '../processor/ContourLabelsDirection';
import {ContourFillVisual} from '../visuals/ContourFillVisual';
import {ContourLineVisual} from '../visuals/ContourLineVisual';
import {ContourBorderVisual} from '../visuals/ContourBorderVisual';
import {ContourFaultVisual} from '../visuals/ContourFaultVisual';
import {ContourEvent} from '../events/ContourEvent';
import {Rect} from '../../util/Rect';
import {VisualEvent} from '../events/VisualEvent';

/**
 * The contour shape acts as a container for all of the contour visuals.
 * It may receive events from the visuals and may send its own events to the listeners.
 */
export class ContourShape extends Shape {
    /**
     * The contour shape acts as a container for all of the contour visuals.
     * It may receive events from the visuals and may send its own events to the listeners.
     * @param options An object containing the properties to set
     * @param options.visuals Shape's visuals
     * @param options.shapeprojection Shape projection that is to be used when drawing this shape
     * @param options.grid Contour grid
     * @param options.datasource Contour data source
     * @param options.gridtomodel The grid to model transformation
     * @param options.scale The contour scale
     * @param options.faultslist Object that stores the faults for this Contour Shape
     * @param options.maxlabelwidth The max label width
     * @param options.suppressintersectinglabels The flag indicating whether intersecting labels are suppressed
     * @param options.labelsdirection The labels direction
     * @param options.ignoreerroneousdata Flag indicating whether grid data changing should be enabled
     * @param options.smoothingisolines Flag indicating whether isolines are smoothed
     * @param options.smoothinglabels Flag indicating whether labels are smoothed
     * @param options.faultpointprecision Fault point comparison precision (measured in grid cells)
     * @param options.minvisiblelevel The first visible scale level
     * @param options.maxvisiblelevel The last visible scale level
     * @param options.isofill Isofill visual properties or new visual
     * @param options.isoline Isoline visual properties or new visual
     * @param options.border Border visual properties or new visual
     * @param options.fault Fault visual properties or new visual
     */
    constructor(options?: object | { visuals?: AbstractVisual[]; shapeprojection?: AbstractProjection | any; grid?: ContourAbstractGrid; datasource?: AbstractContourDataSource | any; gridtomodel?: Transformation; scale?: ContourScale; faultslist?: ContourFaultList; maxlabelwidth?: number; suppressintersectinglabels?: boolean; labelsdirection?: number | ContourLabelsDirection; ignoreerroneousdata?: boolean; smoothingisolines?: boolean; smoothinglabels?: boolean; faultpointprecision?: number; minvisiblelevel?: number; maxvisiblelevel?: number; isofill?: any | ContourFillVisual; isoline?: any | ContourLineVisual; border?: any | ContourBorderVisual; fault?: any | ContourFaultVisual; } );
    /**
     * Gets the visuals. Default visuals are as follows:<br>
     * 1) A {@link @int/geotoolkit/contour/visuals/ContourFillVisual.ContourFillVisual} instance with id=='isofill'<br>
     * 2) A {@link @int/geotoolkit/contour/visuals/ContourBorderVisual.ContourBorderVisual} instance with id=='border'<br>
     * 3) A {@link @int/geotoolkit/contour/visuals/ContourLineVisual.ContourLineVisual} instance with id=='isoline'<br>
     * 4) A {@link @int/geotoolkit/contour/visuals/ContourFaultVisual.ContourFaultVisual} instance with id=='fault'<br>
     * @param visualClassName Class name of visual
     */
    getVisuals(visualClassName?: string): AbstractVisual[];
    /**
     * Sets the visuals.
     * @param visuals The visuals.
     */
    setVisuals(visuals: AbstractVisual[]): this;
    /**
     * Gets all the contour listeners.
     */
    getListeners(): AbstractVisual[];
    /**
     * Sets all the contour listeners.
     * @param listeners The contour listeners.     *
     */
    setListeners(listeners: AbstractVisual[]): this;
    /**
     * Gets the max label width.
     */
    getMaxLabelWidth(): number;
    /**
     * Sets the max label width.
     * @param maxLabelWidth The max label width.
     */
    setMaxLabelWidth(maxLabelWidth: number): this;
    /**
     * Registers the specified contour listener to receive events from this contour shape.
     * @param contourListener The contour listener
     */
    addContourListener(contourListener: ContourShape | AbstractVisual): void;
    /**
     * Removes the specified contour listener from receiving events from this contour shape.
     * @param contourListener The contour listener
     */
    removeContourListener(contourListener: ContourShape | AbstractVisual): void;
    /**
     * Notifies the registered listeners of an event.
     * @param args The event to pass to the listeners.
     */
    notifyListeners(args: ContourEvent): void;
    /**
     * Gets the listeners notification flag
     */
    getNotify(): boolean;
    /**
     * Sets the listeners notification flag
     * @param notify The boolean notification flag.
     */
    setNotify(notify: boolean): this;
    /**
     * Gets the shape projection that is to be used when drawing this shape.
     */
    getShapeProjection(): AbstractProjection;
    /**
     * Sets the shape projection that is to be used when drawing this shape.
     * Set to null (the default) if you do not wish to use a projection
     * @param projection The shape projection.
     */
    setShapeProjection(projection: AbstractProjection | any): this;
    /**
     * Gets the contour grid. (Object that stores grid data for this contour shape)
     */
    getGrid(): ContourAbstractGrid;
    /**
     * Sets the contour grid.(Object that stores grid data for this contour shape).
     * This will throw an exception if grid is set to null.
     * @param grid The contour grid.
     */
    setGrid(grid: ContourAbstractGrid): this;
    /**
     * Gets the data source which provides grids to the contour.
     */
    getDataSource(): AbstractContourDataSource | any;
    /**
     * Sets the data source which provides grids to the contour.
     * @param dataSource The contour data source.
     */
    setDataSource(dataSource: AbstractContourDataSource): this;
    /**
     * Gets the grid to model transform
     */
    getGridToModel(): Transformation;
    /**
     * Sets the grid to model transform
     * Throws exception when it is set to null.
     * @param gridToModel The grid to model Transformation.
     */
    setGridToModel(gridToModel: Transformation): this;
    /**
     * Gets the contour scale.
     * This is used to determine the data values for the isolines in this Contour Shape
     */
    getScale(): ContourScale;
    /**
     * Sets the contour scale
     * This is used to determine the data values for the isolines in this Contour Shape
     * @param scale The contour scale.
     */
    setScale(scale: ContourScale): this;
    /**
     * Gets the faults.
     */
    getFaultsList(): ContourFaultList;
    /**
     * Sets the faults by assigning the Faults property to a new ContourFaultList object storing the faults.
     * If you attempt to assign the Faults property a null value, this will be translated into an empty ContourFaultList.
     * @param faults Object that stores the faults for this Contour Shape.
     */
    setFaultsList(faults: ContourFaultList): this;
    /**
     * Sets skipping of near points when rendering isolines and isofills (to speed up process).
     * @param skipNearPoints If true then point skipping will be enabled.
     */
    setSkipNearPoints(skipNearPoints: boolean): this;
    /**
     * Gets the intersecting labels suppression status. Default is false.
     * This status indicates if contour will render labels without intersecting each other. Default is FALSE.
     * The status is true if labels don't intersect each other.
     */
    getSuppressIntersectingLabels(): boolean;
    /**
     * Sets the intersecting labels suppression status.
     * This status indicates if contour will render labels without intersecting each other. Default is FALSE.
     * The status is true if labels don't intersect each other.
     * @param suppress The flag indicating whether intersecting labels are suppressed.
     */
    setSuppressIntersectingLabels(suppress: boolean): this;
    /**
     * Gets the labels direction.
     */
    getLabelsDirection(): number | ContourLabelsDirection;
    /**
     * Sets the labels direction.
     * @param direction The labels direction.
     */
    setLabelsDirection(direction: number | ContourLabelsDirection): this;
    /**
     * Gets the flag for grid data checking.
     * DEFAULT: IgnoreErroneousData=false
     */
    getIgnoreErroneousData(): boolean;
    /**
     * Sets the flag for grid data checking.
     * It is recommended to set value to FALSE always.
     * DEFAULT: IgnoreErroneousData=false
     * @param ignore Flag indicating whether grid data changing should be enabled.
     */
    setIgnoreErroneousData(ignore?: boolean): this;
    /**
     * Gets a flag indicating if isolines are smoothed.
     */
    getSmoothingIsolines(): boolean;
    /**
     * Sets a flag for indicating if isolines are smoothed.
     * @param smoothing Flag indicating whether isolines are smoothed.
     */
    setSmoothingIsolines(smoothing: boolean): this;
    /**
     * Gets the smoothLabels flag.
     */
    getSmoothingLabels(): boolean;
    /**
     * Sets the smoothLabels flag.
     * @param smoothLabels The smoothLabels flag.
     */
    setSmoothingLabels(smoothLabels: boolean): this;
    /**
     * Gets the fault point comparison precision (measured in grid cells)
     */
    getFaultPointPrecision(): number;
    /**
     * Sets the fault point comparison precision (measured in grid cells)
     * @param precision The fault point precision.
     */
    setFaultPointPrecision(precision: number): this;
    /**
     * Gets the first visible scale level.
     */
    getMinVisibleLevel(): number;
    /**
     * Sets the first visible scale level.
     * @param minLevel The first visible scale level.
     */
    setMinVisibleLevel(minLevel: number): this;
    /**
     * Gets the last visible scale level.
     */
    getMaxVisibleLevel(): number;
    /**
     * Sets the last visible scale level.
     * @param maxLevel The last visible scale level.
     */
    setMaxVisibleLevel(maxLevel: number): this;
    /**
     * Sets the bounding box for the contour shape, in non-projected model space.
     * @param bbox Specifies the new bounding box.
     */
    setBoundingBox(bbox: Rect): this;
    /**
     * Gets the non-projected bounding box.
     * @param tr The transformation from model to device space.
     */
    getNonProjectedBoundingBox(tr: Transformation): Rect;
    /**
     * Add a visual to this contour shape. It may be inserted at the front or the back.
     * If there is no reference visual then valid order parameters include CG_O_FRONT and CG_O_BACK.
     * If there is a reference visual then value order parameters include CG_O_ABOVE and CG_O_BELOW.
     * Throws an exception for invalid order parameters and for null visual/refVisual.
     * @param visual The visual to add to this shape.
     * @param order The order in which to add the visual.
     * @param refVisual The reference visual.
     */
    addVisual(visual: AbstractVisual, order: VisualOrder, refVisual?: AbstractVisual): void;
    /**
     * Remove the specified visual from this contour shape.
     * Throws exception if visual argument is null.
     * @param visual The visual that is to be removed.
     */
    removeVisual(visual: AbstractVisual): void;
    /**
     * Updates the line reservations.
     * This is called when something happens which may affect them.
     * Eg. the contour scale changes, a visual's index step changes
     */
    updateLineReservation(): void;
    /**
     * This method is called when any of the visuals containing this contour shape are invalidated.
     * In response, this calls the cgAbstractShape's 'invalidateShape' method, initiating repainting.
     * @param args The event from the visual
     */
    visualInvalidated(args: VisualEvent): void;
    /**
     * Gets the bounding box of this contour shape.
     * If projection has been set, then the projected bounding box is returned.
     */
    getBoundingBox(): Rect;
    /**
     * Return bounds
     */
    getBounds(): Rect;
    /**
     * Converts the model box to the projection box and returns it.
     * @param modelBox The model box.
     * @param reverse True if reverse projection is requested.
     */
    getProjectionBox(modelBox: Rect, reverse: boolean): Rect;
    /**
     * Gets first ContourLineVisual of visuals
     */
    getIsoline(): ContourLineVisual;
    /**
     * Gets first ContourFillVisual of visuals
     */
    getIsofill(): ContourFillVisual;
    /**
     * Gets first ContourFaultVisual of visuals
     */
    getFault(): ContourFaultVisual;
    /**
     * Gets first ContourBordertVisual of visuals
     */
    getBorder(): ContourBorderVisual;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {visuals: AbstractVisual[]; shapeprojection: AbstractProjection | any; grid: ContourAbstractGrid; datasource: AbstractContourDataSource | any; gridtomodel: Transformation; scale: ContourScale; faultslist: ContourFaultList; maxlabelwidth: number; suppressintersectinglabels: boolean; labelsdirection: number | ContourLabelsDirection; ignoreerroneousdata: boolean; smoothingisolines: boolean; smoothinglabels: boolean; faultpointprecision: number; minvisiblelevel: number; maxvisiblelevel: number; isofill: ContourFillVisual; isoline: ContourLineVisual; border: ContourBorderVisual; fault: ContourFaultVisual} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.visuals Shape's visuals
     * @param properties.shapeprojection Shape projection that is to be used when drawing this shape
     * @param properties.grid Contour grid
     * @param properties.datasource Contour data source
     * @param properties.gridtomodel The grid to model transformation
     * @param properties.scale The contour scale
     * @param properties.faultslist Object that stores the faults for this Contour Shape
     * @param properties.maxlabelwidth The max label width
     * @param properties.suppressintersectinglabels The flag indicating whether intersecting labels are suppressed
     * @param properties.labelsdirection The labels direction
     * @param properties.ignoreerroneousdata Flag indicating whether grid data changing should be enabled
     * @param properties.smoothingisolines Flag indicating whether isolines are smoothed
     * @param properties.smoothinglabels Flag indicating whether labels are smoothed
     * @param properties.faultpointprecision Fault point comparison precision (measured in grid cells)
     * @param properties.minvisiblelevel The first visible scale level
     * @param properties.maxvisiblelevel The last visible scale level
     * @param properties.isofill Isofill visual properties or new visual
     * @param properties.isoline Isoline visual properties or new visual
     * @param properties.border Border visual properties or new visual
     * @param properties.fault Fault visual properties or new visual
     */
    setProperties(properties?: object | { visuals?: AbstractVisual[]; shapeprojection?: AbstractProjection | any; grid?: ContourAbstractGrid; datasource?: AbstractContourDataSource | any; gridtomodel?: Transformation; scale?: ContourScale; faultslist?: ContourFaultList; maxlabelwidth?: number; suppressintersectinglabels?: boolean; labelsdirection?: number | ContourLabelsDirection; ignoreerroneousdata?: boolean; smoothingisolines?: boolean; smoothinglabels?: boolean; faultpointprecision?: number; minvisiblelevel?: number; maxvisiblelevel?: number; isofill?: any | ContourFillVisual; isoline?: any | ContourLineVisual; border?: any | ContourBorderVisual; fault?: any | ContourFaultVisual; } ): this;
}
/**
 * The VisualOrder enumeration is used to define the order a new
 * visual should be inserted into this cgContourShape
 */
export enum VisualOrder {
    /**
     * This visual should be inserted default another visual
     */
    DEFAULT = 0,
    /**
     * This visual should be inserted above another visual
     */
    ABOVE = 1,
    /**
     * This visual should be inserted below another visual
     */
    BELOW = 2,
    /**
     * This visual should be inserted at the front (ie. on top of all the other visuals)
     */
    FRONT = 3,
    /**
     * This visual should be inserted at the back (ie. underneath all the other visuals)
     */
    BACK = 4
}
