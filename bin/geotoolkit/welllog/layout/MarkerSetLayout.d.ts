import {ValueCorrelatedRangeLayout1D} from '../../layout/ValueCorrelatedRangeLayout1D';

/**
 * Layout to perform on {@link @int/geotoolkit/welllog/MarkerSet.MarkerSet} object
 */
export class MarkerSetLayout extends ValueCorrelatedRangeLayout1D {
    /**
     * Layout to perform on {@link @int/geotoolkit/welllog/MarkerSet.MarkerSet} object
     * @param options layout options
     * @param options.overlap what to do if ranges don't fit: 'some' or 'all'
     * @param options.maxoffset if defined do not draw labels further than 'maxoffset' device units from its model position
     */
    constructor(options?: object | { overlap?: string; maxoffset?: number; } );
}
