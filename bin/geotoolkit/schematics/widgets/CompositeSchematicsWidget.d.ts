import {AnnotatedWidget} from '../../widgets/AnnotatedWidget';
import {SchematicsWidget} from './SchematicsWidget';
import {DeviatedSchematicsWidget} from './DeviatedSchematicsWidget';
import {WellBoreData} from '../data/WellBoreData';
import {Trajectory2d} from '../../deviation/Trajectory2d';
import {Point} from '../../util/Point';
import {Iterator} from '../../util/iterator';
import {Group} from '../../scene/Group';
import {ViewMode} from '../scene/WellBoreNode';

/**
 * CompositeSchematicsWidget
 */
export class CompositeSchematicsWidget extends AnnotatedWidget {
    /**
     * CompositeSchematicsWidget
     * @param options options
     * @param options.displaymode display mode
     * @param options.vertical vertical display mode options (@see {@link @int/geotoolkit/schematics/widgets/SchematicsWidget.SchematicsWidget}~setOptions for details)
     * @param options.vertical.widget vertical display mode widget instance
     * @param options.deviated deviated display mode options (@see {@link @int/geotoolkit/schematics/widgets/DeviatedSchematicsWidget.DeviatedSchematicsWidget}~setOptions for details)
     * @param options.deviated.widget deviated display mode widget instance
     * @param options.data wellbore data or object encapsulating data
     * @param options.data.elements wellbore data
     * @param options.data.trajectory trajectory
     */
    constructor(options?: object | { displaymode?: DisplayMode; vertical?: any | object | { widget?: SchematicsWidget; } ; deviated?: any | object | { widget?: DeviatedSchematicsWidget; } ; data?: WellBoreData | object | { elements?: WellBoreData; trajectory?: Trajectory2d; } ; } );
    /**
     * Gets model coordinates (where y-ordinate is true MD-value) at given device ones.<br>
     * If conversion fails then returned point contains NaN values as its x- and y- ordinates.
     * @param devicePoint source device point
     * @param modelPoint destination model point
     */
    getModelPoint(devicePoint: Point, modelPoint?: Point): Point;
    /**
     * Gets device coordinates at given model ones
     * @param modelPoint source model point (where y-ordinate is true MD-value)
     * @param devicePoint destination device point
     */
    getDevicePoint(modelPoint: Point, devicePoint?: Point): Point;
    /**
     * Transforms depth value between linear and MD model space.<br>
     * If not possible returns NaN
     * @param val depth value to transform
     * @param mdToLinear direction of transformation
     */
    transformDepth(val: number, mdToLinear?: boolean): number;
    /**
     */
    protected getDisplays(): Iterator;
    /**
     * Returns properties
     */
    getProperties(): {displaymode: DisplayMode; vertical: any; deviated: any; data: {elements: WellBoreData; trajectory: Trajectory2d}} | any;
    /**
     * Sets properties
     * @param properties properties
     * @param properties.displaymode display mode
     * @param properties.vertical vertical display mode properties (@see {@link @int/geotoolkit/schematics/widgets/SchematicsWidget.SchematicsWidget}~setOptions for details)
     * @param properties.deviated deviated display mode properties (@see {@link @int/geotoolkit/schematics/widgets/DeviatedSchematicsWidget.DeviatedSchematicsWidget}~setOptions for details)
     * @param properties.data wellbore data or object encapsulating data
     * @param properties.data.elements wellbore data
     * @param properties.data.trajectory trajectory
     */
    setProperties(properties?: object | { displaymode?: DisplayMode; vertical?: any; deviated?: any; data?: WellBoreData | object | { elements?: WellBoreData; trajectory?: Trajectory2d; } ; } ): this;
    /**
     * Gets current model node
     */
    getModel(): Group;
    /**
     * Exports current representation to PDF
     * @param options option to specify paper parameters and header and footer
     * (@see {@link @int/geotoolkit/schematics/widgets/SchematicsWidget.SchematicsWidget}~exportToPdf for details)
     * (@see {@link @int/geotoolkit/schematics/widgets/DeviatedSchematicsWidget.DeviatedSchematicsWidget}~exportToPdf for details)
     */
    exportToPdf(options?: object): Promise<any>;
    /**
     * Scale contents.
     * @param xx x scale factor
     * @param yy y scale factor
     * @param posX x position to scale from (in pxl)
     * @param posY y position to scale from (in pxl)
     */
    scaleModel(xx: number, yy: number, posX?: number, posY?: number): this;
    /**
     * fit bounds to model limits
     */
    fitToBounds(): this;
    /**
     * Gets well bore view mode
     */
    getViewMode(): ViewMode;
    /**
     * Sets well bore view mode
     * @param viewMode well bore view mode
     * @param options the mode options
     */
    setViewMode(viewMode: ViewMode, options?: any): {modelLimitsDepths: any[]; boundsDepths: any[]} | object;
    /**
     * Gets data
     */
    getData(): {elements: WellBoreData; trajectory: Trajectory2d} | object;
    /**
     * @param data wellbore data or object encapsulating data
     * @param data.elements wellbore data
     * @param data.trajectory trajectory
     */
    setData(data: WellBoreData | object | { elements?: WellBoreData; trajectory?: Trajectory2d; } ): this;
    /**
     * Gets widget options (@see {@link @int/geotoolkit/schematics/widgets/CompositeSchematicsWidget.CompositeSchematicsWidget}~setOptions for details)
     */
    getOptions(): object | any;
    /**
     * Sets widget options
     * @param options widget options<br>
     * The top-most options may include settings common for both display modes.<br>
     * If an option defined in the top-most section is also defined in specific display mode,
     * then the specific value overrides common one.
     * @param options.displaymode display mode
     * @param options.vertical vertical display mode options (@see {@link @int/geotoolkit/schematics/widgets/SchematicsWidget.SchematicsWidget}~setOptions for details)
     * @param options.deviated deviated display mode options (@see {@link @int/geotoolkit/schematics/widgets/DeviatedSchematicsWidget.DeviatedSchematicsWidget}~setOptions for details)
     */
    setOptions(options: object | { displaymode?: DisplayMode; vertical?: any; deviated?: any; } ): this;
}
/**
 * Enum of display modes
 */
export enum DisplayMode {
    /**
     * Vertical display mode
     */
    Vertical = 'vertical',
    /**
     * Deviated display mode.
Can not be set if trajectory data not provided.
     */
    Deviated = 'deviated'
}
