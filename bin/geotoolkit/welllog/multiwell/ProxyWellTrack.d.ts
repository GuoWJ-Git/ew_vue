import {AbstractWellTrack} from './AbstractWellTrack';
import {IProxyTrack} from '../IProxyTrack';
import {IExportable} from '../../scene/exports/IExportable';
import {IWellTrack} from './IWellTrack';
import {Layer} from '../../scene/Layer';
import {Range} from '../../util/Range';
import {AbstractUnit} from '../../util/AbstractUnit';
import {DataSource} from '../../data/DataSource';
import {AbstractDataTable} from '../../data/AbstractDataTable';
import {DataBinding} from '../../data/DataBinding';
import {CompositeTool} from '../../controls/tools/CompositeTool';
import {AbstractTool} from '../../controls/tools/AbstractTool';
import {Rect} from '../../util/Rect';
import {AbstractDocumentElement} from '../../scene/exports/AbstractDocumentElement';

/**
 * Define a track to display other IWellTrack as template
 */
export class ProxyWellTrack extends AbstractWellTrack implements IProxyTrack, IExportable {
    /**
     * Define a track to display other IWellTrack as template
     * @param options addition options
     * @param options.track well track to be displayed
     */
    constructor(options?: object | { track?: IWellTrack; } );
    /**
     * Return a layer to display markers
     */
    getMarkerLayer(): Layer;
    /**
     * Returns manipulator layer
     */
    getManipulatorLayer(): Layer;
    /**
     * Return a reference to template
     */
    getPrototype(): IWellTrack;
    /**
     * Return a depth range, which is visible now
     */
    getVisibleDepthLimits(): Range;
    /**
     * Sets model minimum and maximum depth
     * @param minDepth minimum depth
     * @param maxDepth maximum depth
     */
    setDepthLimits(minDepth: number | Range, maxDepth: number): this;
    /**
     * Returns depth or time range
     */
    getDepthLimits(): Range;
    /**
     * Return unit of the measure to be used to display scale in the header
     */
    getScaleUnit(): AbstractUnit;
    /**
     * Sets unit of the measure to be used to display scale in the header
     * @param unit a scale unit or string symbol
     */
    setScaleUnit(unit: AbstractUnit | string): this;
    /**
     * Sets unit of the measure to be used for device
     * @param unit unit of the device
     */
    setDeviceUnit(unit: AbstractUnit | string): this;
    /**
     * Return a unit of the measure of device
     */
    getDeviceUnit(): AbstractUnit;
    /**
     * Sets a new data source
     * @param data data source
     */
    setData(data: DataSource | AbstractDataTable): this;
    /**
     * Returns data source
     */
    getData(): DataSource;
    /**
     * Return the data binding
     */
    getDataBinding(): DataBinding;
    /**
     * Sets the data binding
     * @param binding data binding
     * @param silent silent mode to forbid
     */
    setDataBinding(binding: DataBinding, silent?: boolean): this;
    /**
     * Returns root tool associated to this widget
     */
    getTool(): CompositeTool;
    /**
     * Return tool by name
     * @param name name of the tool
     */
    getToolByName(name: string): AbstractTool;
    /**
     * Connect a new tool with a tool name to the widget
     * @param tool tool associated with the widget
     */
    connectTool(tool: AbstractTool | AbstractTool[]): this;
    /**
     * Disconnect the tool from the widget
     * @param tool tool to disconnect
     */
    disconnectTool(tool: AbstractTool | AbstractTool[]): this;
    /**
     * Return scale to device. How many scale units in one device unit.
     * @example
     * ```javascript
     * //  to get the current depth scale of well.
     * var uf = geotoolkit.util.UnitFactory.getInstance();
     * well.getDepthScale(uf.getUnit("cm"), uf.getUnit("cm"));
     * ```
     * @param scaleUnit scale unit of the display. if it is not specified then it takes from track container
     * @param deviceUnit device unit of the display. if it is not specified then it takes from track container
     */
    getDepthScale(scaleUnit?: AbstractUnit | string, deviceUnit?: AbstractUnit | string): number;
    /**
     * Set bounds of the well
     * @param bounds track bounds
     */
    setBounds(bounds: Rect): this;
    /**
     * Prepares object before exporting and saving state
     */
    beginExport(): this;
    /**
     * Used to restore object's state after exporting
     */
    endExport(): this;
    /**
     * Returns exportable element
     * @param options options deprecated (since 2020 (3.0)). not used
     */
    getExportElement(options?: object): AbstractDocumentElement;
    /**
     * Return a new writeable instance of prototype
     */
    createWritableInstance(): IWellTrack;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {track: IWellTrack} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.track well track to be displayed
     */
    setProperties(properties: object | { track?: IWellTrack; } ): this;
}
