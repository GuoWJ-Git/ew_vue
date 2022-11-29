import {ScaledShape} from '../scene/shapes/ScaledShape';
import {TickGenerator} from './TickGenerator';
import {TickPosition, LabelPosition} from './TickInfo';
import {Rect} from '../util/Rect';

/**
 * CurvedAxis draw axis along arbitrary path with given minimum and maximum values
 * This class uses the {@link @int/geotoolkit/axis/TickGenerator.TickGenerator} which is passed to it and creates an axis.<br>
 */
export class CurvedAxis extends ScaledShape {
    /**
     * CurvedAxis draw axis along arbitrary path with given minimum and maximum values
     * This class uses the {@link @int/geotoolkit/axis/TickGenerator.TickGenerator} which is passed to it and creates an axis.<br>
     * @param options options
     * @param options.path baseline path
     * @param options.path.x x values values of baseline path
     * @param options.path.y y values values of baseline path
     * @param options.minvalue minimum label value on axis
     * @param options.maxvalue maximum label value on axis
     * @param options.tickgenerator tickgenerator to use in axis
     *  (by default {@link @int/geotoolkit/axis/AdaptiveTickGenerator.AdaptiveTickGenerator} is used if nothing is passed)
     * @param options.tickgenerator.major An object containing major grade properties. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator#setTickOptions}
     * @param options.tickgenerator.minor An object containing minor grade properties. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator#setTickOptions}
     * @param options.tickgenerator.edge An object containing edge grade properties. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator#setTickOptions}
     * @param options.tickgenerator.intermediate An object containing intermediate grade properties. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator#setTickOptions}
     * @param options.tickgenerator.tickstyles An object containing tick styles for specified grades.
     * @param options.tickgenerator.visibleticks An object containing tick visibility for specified grades
     * @param options.tickgenerator.ticksizes An object containing tick sizes for specified grades
     * @param options.tickgenerator.labelstyles An object containing label style for specified grades
     * @param options.tickgenerator.visiblelabels An object containing label visibility for specified grades
     * @param options.tickgenerator.labelanchortypes An object containing label anchor types see{@link @int/geotoolkit/util/AnchorType.AnchorType}
     * @param options.tickgenerator.tag tag user can specify info associated with current object
     * @param options.tickposition tick position (only Left and Right are meaningful)
     * @param options.labelposition label position (only Left and Right are meaningful)
     * @param options.labeloffset offset the label offset
     * @param options.visiblebaseline visibility of baseline
     */
    constructor(options?: object | { path?: object | { x?: number[]; y?: number[]; } ; minvalue?: number; maxvalue?: number; tickgenerator?: TickGenerator | object | { major?: any; minor?: any; edge?: any; intermediate?: any; tickstyles?: any; visibleticks?: any; ticksizes?: any; labelstyles?: any; visiblelabels?: any; labelanchortypes?: any; tag?: any; } ; tickposition?: TickPosition; labelposition?: LabelPosition; labeloffset?: number; visiblebaseline?: boolean; } );
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.minvalue minimum label value on axis
     * @param properties.maxvalue maximum label value on axis
     * @param properties.tickgenerator instance of tick generator
     * @param properties.tickgenerator.major An object containing major grade properties. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator#setTickOptions}
     * @param properties.tickgenerator.minor An object containing minor grade properties. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator#setTickOptions}
     * @param properties.tickgenerator.edge An object containing edge grade properties. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator#setTickOptions}
     * @param properties.tickgenerator.intermediate An object containing intermediate grade properties. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator#setTickOptions}
     * @param properties.tickgenerator.tickstyles An object containing tick styles for specified grades.
     * @param properties.tickgenerator.visibleticks An object containing tick visibility for specified grades
     * @param properties.tickgenerator.ticksizes An object containing tick sizes for specified grades
     * @param properties.tickgenerator.labelstyles An object containing label style for specified grades
     * @param properties.tickgenerator.visiblelabels An object containing label visibility for specified grades
     * @param properties.tickgenerator.labelanchortypes An object containing label anchor types see{@link @int/geotoolkit/util/AnchorType.AnchorType}
     * @param properties.tickgenerator.tag tag user can specify info associated with current object
     * @param properties.tickposition position of the tick
     * @param properties.labelposition position label position
     * @param properties.labeloffset offset the label offset
     * @param properties.visiblebaseline visibility of baseline
     */
    setProperties(properties: object | { minvalue?: number; maxvalue?: number; tickgenerator?: TickGenerator | object | { major?: any; minor?: any; edge?: any; intermediate?: any; tickstyles?: any; visibleticks?: any; ticksizes?: any; labelstyles?: any; visiblelabels?: any; labelanchortypes?: any; tag?: any; } ; tickposition?: TickPosition; labelposition?: LabelPosition; labeloffset?: number; visiblebaseline?: boolean; } ): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {minvalue: number; maxvalue: number; tickgenerator: TickGenerator; tickposition: TickPosition; labelposition: LabelPosition; labeloffset: number; visiblebaseline: boolean} | any;
    /**
     * Set baseline path for axis to be plotted
     * @param path baseline path
     * @param path.x x values values of baseline path
     * @param path.y y values values of baseline path
     */
    setData(path?: object | { x?: number[]; y?: number[]; } ): this;
    /**
     * Get baseline path for axis to be plotted
     */
    getData(): {x: number[]; y: number[]} | object;
    /**
     * Sets minimum label value on axis
     * @param minValue minimum label value
     */
    setMinValue(minValue: number): this;
    /**
     * Return minimum label value on axis
     */
    getMinValue(): number;
    /**
     * Sets maximum label value on axis
     * @param maxValue maximum label value
     */
    setMaxValue(maxValue: number): this;
    /**
     * Return maximum label value on axis
     */
    getMaxValue(): number;
    /**
     * Sets tick generator
     * @param tickGenerator a tick generator to be used
     */
    setTickGenerator(tickGenerator: TickGenerator | object): this;
    /**
     * Return a current tick generator
     */
    getTickGenerator(): TickGenerator;
    /**
     * Gets axis bounds
     */
    getBounds(): Rect | any;
    /**
     * Return tick position
     */
    getTickPosition(): TickPosition;
    /**
     * Sets tick position as text
     * @param position (Can be "left", "right", "leftandright", "between", "middle");
     */
    setTickPosition(position: string | TickPosition): this;
    /**
     * Sets the labelPosition
     * @param position label position
     */
    setLabelPosition(position: LabelPosition): this;
    /**
     * Return the labelPosition
     */
    getLabelPosition(): LabelPosition;
    /**
     * Sets the labelOffset
     * @param offset the label offset
     */
    setLabelOffset(offset: number): this;
    /**
     * Return the labelOffset
     */
    getLabelOffset(): number;
    /**
     * Return base line visibility
     */
    getBaseLineVisible(): boolean;
    /**
     * Set base line visibility
     * @param visible visible
     */
    setBaseLineVisible(visible: boolean): this;
}
