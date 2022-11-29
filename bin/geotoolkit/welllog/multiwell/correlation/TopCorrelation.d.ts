import {CompositeCorrelation} from './CompositeCorrelation';
import {ILineDecoration} from '../../../attributes/ILineDecoration';
import {LogMarker} from '../../LogMarker';

/**
 * Define auto correlation to connect two markers with the same names
 */
export class TopCorrelation extends CompositeCorrelation {
    /**
     * Define auto correlation to connect two markers with the same names
     * @param options additional options
     * @param options.linedecoration line decoration style
     */
    constructor(options?: object | { linedecoration?: ILineDecoration | string; } );
    /**
     * Get correlation names
     * @param visual visual
     */
    getNames(visual: LogMarker): any;
    /**
     * Return Correlation Marker Line Decoration Style
     */
    getLineDecoration(): ILineDecoration;
    /**
     * Specify Correlation Marker Line Decoration style
     * @param lineDecoration line decoration style
     */
    setLineDecoration(lineDecoration: ILineDecoration | string): this;
}
