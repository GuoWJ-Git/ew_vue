import {Group} from '../../scene/Group';
import {FillStyle} from '../../attributes/FillStyle';
import {LineStyle} from '../../attributes/LineStyle';
import {TextStyle} from '../../attributes/TextStyle';
import {DataSeries} from '../../data/DataSeries';
import {DataSeriesView} from '../../data/DataSeriesView';
import {Rect} from '../../util/Rect';
import {RenderingContext} from '../../renderer/RenderingContext';
import {Point} from '../../util/Point';

/**
 * This class defines a DonutChart object. The doughnut and pie charts are generally equal. <br>
 * The only difference is that doughnut chart has a hole in the center so it has one extra parameter - inner radius. <br>
 */
export class DonutChart extends Group {
    /**
     * This class defines a DonutChart object. The doughnut and pie charts are generally equal. <br>
     * The only difference is that doughnut chart has a hole in the center so it has one extra parameter - inner radius. <br>
     * @param options options object
     * @param options.outerradius outer radius
     * @param options.maxouterradius max outer radius
     * @param options.innerradius inner radius
     * @param options.piemode 2d- or 3d-representation
     * @param options.startangle starting angle of the first slice drawn, in degrees
     * @param options.direction slices' rendering direction
     * @param options.fillstyles fill styles OR colors, in css or rgb (the color order follow "data.order" parameter in "setData" call)
     * @param options.selected-fillstyles fill styles OR colors, in css or rgb (the color order follow "data.order" parameter in "setData" call)
     * @param options.linestyle slice line style
     * @param options.autogradient autogradient flag
     * @param options.createselectedstyle method to create selected style based on "regular" one (used when "selected_fillstyles" not set explicitly)
     * @param options.minpercentage minimum percentage cutoff for a slice before it becomes part of "other". 0 for no limit
     * @param options.maxslices maximum amount of slices the graph can have including an "other" slice. 0 for infinite
     * @param options.showpercentagesthreshold below this threshold (from 0 to 100) the percentage is not displayed
     * @param options.modellimitsmode model limits mode
     * @param options.label labeling options object
     * @param options.label.hideifdontfit hide an inside label if it doesn't fit
     * @param options.label.format label formatting method in form "function myLabelFormat(annotation, value) {...}" returning {string} value
     * @param options.label.location label location
     * @param options.label.direction label direction
     * @param options.label.textstyle label text style
     * @param options.outsideline outside line options object
     * @param options.outsideline.linestyle outside line style
     * @param options.outsideline.length outside line length
     * @param options.outsideline.pad outside line pad
     * @param options.sliceshift slice shift options object
     * @param options.sliceshift.offsets slices shift offsets. Index in the array to match the index of slice
     * @param options.depth3d height of a pseudo-3d chart
     * @param options.inclination3d angle of the pseudo-3d chart. should be between 0 and 90
     * @param data (see {@link @int/geotoolkit/controls/shapes/DonutChart.DonutChart.setData} for more info)
     */
    constructor(options?: object | { outerradius?: number; maxouterradius?: number; innerradius?: number; piemode?: PieMode; startangle?: number; direction?: Direction; fillstyles?: (FillStyle | string | object)[]; "selected-fillstyles"?: (FillStyle | string | object)[]; linestyle?: LineStyle | string | object; autogradient?: boolean; createselectedstyle?: Function; minpercentage?: number; maxslices?: number; showpercentagesthreshold?: number; modellimitsmode?: ModelLimitsMode | string; label?: object | { hideifdontfit?: boolean; format?: Function; location?: LabelLocation; direction?: LabelDirection; textstyle?: TextStyle | string | object; } ; outsideline?: object | { linestyle?: LineStyle | string | object; length?: number; pad?: number; } ; sliceshift?: object | { offsets?: number[]; } ; depth3d?: number; inclination3d?: number; } , data?: any);
    /**
     * Sets data to display. Sends {@link @int/geotoolkit/scene/Node.Events.Changed} event at the end.
     * @param data data object
     * @param data.mode data mode
     * @param data.order data order
     * @param data.values Array of values or associative object
     */
    setData(data: object | { mode?: DataMode | string; order?: DataOrder | string; values?: any[] | DataSeries | DataSeriesView | object; } ): this;
    /**
     * Gets display options
     * (see {@link @int/geotoolkit/controls/shapes/DonutChart.DonutChart.setOptions} for more info)
     */
    getOptions(): object | any;
    /**
     * Sets display options. Sends {@link @int/geotoolkit/scene/Node.Events.Changed} event at the end.
     * @param options options object
     * @param options.outerradius outer radius
     * @param options.maxouterradius max outer radius
     * @param options.innerradius inner radius
     * @param options.piemode 2d- or 3d-representation
     * @param options.startangle starting angle of the first slice drawn, in degrees
     * @param options.direction slices' rendering direction
     * @param options.fillstyles fill styles OR colors, in css or rgb (the color order follow "data.order" parameter in "setData" call)
     * @param options.selected-fillstyles fill styles OR colors, in css or rgb (the color order follow "data.order" parameter in "setData" call)
     * @param options.linestyle slice line style
     * @param options.autogradient autogradient flag
     * @param options.createselectedstyle method to create selected style based on "regular" one (used when "selected_fillstyles" not set explicitly)
     * @param options.minpercentage minimum percentage cutoff for a slice before it becomes part of "other". 0 for no limit
     * @param options.maxslices maximum amount of slices the graph can have including an "other" slice. 0 for infinite
     * @param options.showpercentagesthreshold below this threshold (from 0 to 100) the percentage is not displayed
     * @param options.modellimitsmode model limits mode
     * @param options.label labeling options object
     * @param options.label.hideifdontfit hide an inside label if it doesn't fit
     * @param options.label.format label formatting method in form "function myLabelFormat(annotation, value) {...}" returning {string} value
     * @param options.label.location label location
     * @param options.label.direction label direction
     * @param options.label.textstyle label text style
     * @param options.outsideline outside line options object
     * @param options.outsideline.linestyle outside line style
     * @param options.outsideline.length outside line length
     * @param options.outsideline.pad outside line pad
     * @param options.sliceshift slice shift options object
     * @param options.sliceshift.offsets slices shift offsets. Index in the array to match the index of slice
     * @param options.depth3d height of a pseudo-3d chart
     * @param options.inclination3d angle of the pseudo-3d chart. should be between 0 and 90
     */
    setOptions(options: object | { outerradius?: number; maxouterradius?: number; innerradius?: number; piemode?: PieMode | string; startangle?: number; direction?: Direction | string; fillstyles?: any[]; "selected-fillstyles"?: any[]; linestyle?: LineStyle | string | object; autogradient?: boolean; createselectedstyle?: Function; minpercentage?: number; maxslices?: number; showpercentagesthreshold?: number; modellimitsmode?: ModelLimitsMode | string; label?: object | { hideifdontfit?: boolean; format?: Function; location?: LabelLocation | string; direction?: LabelDirection | string; textstyle?: TextStyle | string | object; } ; outsideline?: object | { linestyle?: LineStyle | string | object; length?: number; pad?: number; } ; sliceshift?: object | { offsets?: number[]; } ; depth3d?: number; inclination3d?: number; } ): this;
    /**
     * Sets chart bounds
     * @param rect bounds
     */
    setBounds(rect: Rect): this;
    /**
     * Check collision
     * @param context Rendering Context
     */
    checkCollision(context: RenderingContext): boolean;
    /**
     * Sets chart model limits
     * @param rect model limits
     */
    setModelLimits(rect: Rect): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {outerradius: number; maxouterradius: number; innerradius: number; piemode: PieMode; startangle: number; direction: Direction; fillstyles: FillStyle[]; 'selected-fillstyles': FillStyle[]; linestyle: LineStyle; autogradient: boolean; createselectedstyle: Function; minpercentage: number; maxslices: number; showpercentagesthreshold: number; modellimitsmode: ModelLimitsMode; label: {hideifdontfit: boolean; format: Function; location: LabelLocation; direction: LabelDirection; textstyle: TextStyle}; outsideline: {linestyle: LineStyle; length: number; pad: number}; sliceshift: {offsets: number[]}; depth3d: number; inclination3d: number} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties options object
     * @param properties.outerradius outer radius
     * @param properties.maxouterradius max outer radius
     * @param properties.innerradius inner radius
     * @param properties.piemode 2d- or 3d-representation
     * @param properties.startangle starting angle of the first slice drawn, in degrees
     * @param properties.direction slices' rendering direction
     * @param properties.fillstyles fill styles OR colors, in css or rgb (the color order follow "data.order" parameter in "setData" call)
     * @param properties.selected-fillstyles fill styles OR colors, in css or rgb (the color order follow "data.order" parameter in "setData" call)
     * @param properties.linestyle slice line style
     * @param properties.autogradient autogradient flag
     * @param properties.createselectedstyle method to create selected style based on "regular" one (used when "selected_fillstyles" not set explicitly)
     * @param properties.minpercentage minimum percentage cutoff for a slice before it becomes part of "other". 0 for no limit
     * @param properties.maxslices maximum amount of slices the graph can have including an "other" slice. 0 for infinite
     * @param properties.showpercentagesthreshold below this threshold (from 0 to 100) the percentage is not displayed
     * @param properties.modellimitsmode model limits mode
     * @param properties.label labeling options object
     * @param properties.label.hideifdontfit hide an inside label if it doesn't fit
     * @param properties.label.format label formatting method in form "function myLabelFormat(annotation, value) {...}" returning {string} value
     * @param properties.label.location label location
     * @param properties.label.direction label direction
     * @param properties.label.textstyle label text style
     * @param properties.outsideline outside line options object
     * @param properties.outsideline.linestyle outside line style
     * @param properties.outsideline.length outside line length
     * @param properties.outsideline.pad outside line pad
     * @param properties.sliceshift slice shift options object
     * @param properties.sliceshift.offsets slices shift offsets. Index in the array to match the index of slice
     * @param properties.depth3d height of a pseudo-3d chart
     * @param properties.inclination3d angle of the pseudo-3d chart. should be between 0 and 90
     */
    setProperties(properties: object | { outerradius?: number; maxouterradius?: number; innerradius?: number; piemode?: PieMode; startangle?: number; direction?: Direction; fillstyles?: (FillStyle | string | object)[]; "selected-fillstyles"?: (FillStyle | string | object)[]; linestyle?: LineStyle | string | object; autogradient?: boolean; createselectedstyle?: Function; minpercentage?: number; maxslices?: number; showpercentagesthreshold?: number; modellimitsmode?: ModelLimitsMode; label?: object | { hideifdontfit?: boolean; format?: Function; location?: LabelLocation; direction?: LabelDirection; textstyle?: TextStyle | string | object; } ; outsideline?: object | { linestyle?: LineStyle | string | object; length?: number; pad?: number; } ; sliceshift?: object | { offsets?: number[]; } ; depth3d?: number; inclination3d?: number; } ): this;
    /**
     * return the number of slices in the donut chart
     */
    getSlicesCount(): number;
    /**
     * return slice at specific index if it exist, null otherwise
     * @param index specified index to return the slice at
     */
    getSliceByIndex(index: number): object | null;
    /**
     * Select elements at specified canvas coordinates
     * @param x x-ordinate OR {x,y}-coordinates
     * @param y y-ordinate
     * @param highlight highlight selected elements
     */
    selectSlicesAt(x: number | Point, y?: number, highlight?: boolean): any[];
    /**
     * Highlight specified slicess
     * @param slices array of slices' indices to highlight
     * @param append append or replace flag
     */
    highlightSlices(slices: any[], append?: boolean): this;
    /**
     * Dispose DonutChart and its shapes
     */
    dispose(): void;
}
/**
 * Enum defining PieMode
 */
export enum PieMode {
    /**
     * Pie2D
     */
    Pie2D = 'Pie2D',
    /**
     * Pie3D
     */
    Pie3D = 'Pie3D'
}
/**
 * Enum defining donut charts model limits mode
 */
export enum ModelLimitsMode {
    /**
     * Radius - Model Limits will be the based on the outerRadius
     */
    Radius = 'radius',
    /**
     * Padded - Model Limits will be the based on the outerRadius plus the slice shift
     */
    Padded = 'padded',
    /**
     * Dynamic - Model Limits will adjust to fit the shape in the bounds
     */
    Dynamic = 'dynamic',
    /**
     * Auto - Model Limits will be the based on the maxOuterRadius
     */
    Auto = 'auto'
}
/**
 * Enum defining DataMode
 */
export enum DataMode {
    /**
     * Raw
     */
    Raw = 'Raw',
    /**
     * Associative
     */
    Associative = 'Associative'
}
/**
 * Enum defining LabelLocation
 */
export enum LabelLocation {
    /**
     * Inside
     */
    Inside = 'Inside',
    /**
     * Outside
     */
    Outside = 'Outside'
}
/**
 * Enum defining LabelDirection
 */
export enum LabelDirection {
    /**
     * Horizontal
     */
    Horizontal = 'Horizontal',
    /**
     * Radial
     */
    Radial = 'Radial'
}
/**
 * Enum defining Direction
 */
export enum Direction {
    /**
     * Clockwise
     */
    Clockwise = 'Clockwise',
    /**
     * CounterClockwise
     */
    CounterClockwise = 'CounterClockwise'
}
/**
 * Enum defining Data Order Mode
 */
export enum DataOrder {
    /**
     * Ascending
     */
    Ascending = 'Ascending',
    /**
     * Descending
     */
    Descending = 'Descending',
    /**
     * Natural
     */
    Natural = 'Natural'
}
