import {DonutChart, PieMode, Direction, LabelLocation, DataMode, DataOrder} from './DonutChart';
import {LineStyle} from '../../attributes/LineStyle';
import {TextStyle} from '../../attributes/TextStyle';

/**
 * This class defines the PieChart object. Pie Chart is the kind of diagram that displays data as a “pie”. Every data item in data source represents a “piece of pie” - slice.<br>
 * The doughnut and pie charts are generally equal but  pie chart does not have a hole in the center so extra parameter - inner radius is always equal to '0'.
 */
export class PieChart extends DonutChart {
    /**
     * This class defines the PieChart object. Pie Chart is the kind of diagram that displays data as a “pie”. Every data item in data source represents a “piece of pie” - slice.<br>
     * The doughnut and pie charts are generally equal but  pie chart does not have a hole in the center so extra parameter - inner radius is always equal to '0'.
     * @param options options object
     * @param options.outerradius outer radius
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
     * @param options.label labeling options object
     * @param options.label.hideifdontfit hide an inside label if it doesn't fit
     * @param options.label.format label formatting method in form "function myLabelFormat(annotation, value) {...}" returning {string} value
     * @param options.label.location label location
     * @param options.label.textstyle label text style
     * @param options.outsideline outside line options object
     * @param options.outsideline.linestyle outside line style
     * @param options.outsideline.length outside line length
     * @param options.outsideline.pad outside line pad
     * @param options.sliceshift slice shift options object
     * @param options.sliceshift.offsets slices shift offsets. Index in the array to match the index of slice
     * @param data data object
     * @param data.mode data mode
     * @param data.order data order
     * @param data.values Array of values
     */
    constructor(options?: object | { outerradius?: number; innerradius?: number; piemode?: PieMode | string; startangle?: number; direction?: Direction | string; fillstyles?: any[]; "selected-fillstyles"?: any[]; linestyle?: LineStyle | string | object; autogradient?: boolean; createselectedstyle?: Function; minpercentage?: number; maxslices?: number; label?: object | { hideifdontfit?: boolean; format?: Function; location?: LabelLocation | string; textstyle?: TextStyle | string | object; } ; outsideline?: object | { linestyle?: LineStyle | string | object; length?: number; pad?: number; } ; sliceshift?: object | { offsets?: object; } ; } , data?: object | { mode?: DataMode | string; order?: DataOrder | string; values?: any[]; } );
    /**
     * Sets display options.
     * The implementation keeps 'innerradius' equal to '0' always.
     * @param options options object (see {@link @int/geotoolkit/controls/shapes/DonutChart.DonutChart.setOptions} for more info)
     */
    setOptions(options: object): this;
}
