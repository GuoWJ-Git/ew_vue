import {NumericTickGenerator} from './NumericTickGenerator';
import {Grid} from './Grid';
import {Axis} from './Axis';
import {Orientation} from '../util/Orientation';
import {TickInfo} from './TickInfo';

/**
 * SecondaryTickGenerator utilizes "primaryValues-to-secondaryValues" mapping
 * to generate ticks/labels linearly spaced in secondary model space, so that distance
 * between major ticks/labels in the space is equal to "majorStep" (or "minorStep" for
 * minor ticks/labels correspondingly). Note, that linear spacing in secondary space
 * does not mean linear spacing in primary space.
 */
export class SecondaryTickGenerator extends NumericTickGenerator {
    /**
     * SecondaryTickGenerator utilizes "primaryValues-to-secondaryValues" mapping
     * to generate ticks/labels linearly spaced in secondary model space, so that distance
     * between major ticks/labels in the space is equal to "majorStep" (or "minorStep" for
     * minor ticks/labels correspondingly). Note, that linear spacing in secondary space
     * does not mean linear spacing in primary space.
     * @param options growing array of values in primary model space the generator's axis parent model space)
     * @param options.labeldecimation label decimation
     * @param options.primaryvalues primary values
     * @param options.secondaryvalues secondary values
     * @param options.majorstep tick step for major ticks (in secondary space)
     * @param options.minorstep tick step for minor ticks (in secondary space)
     * @param secondaryValues an array of values in a secondary space
     * @param majorStep tick step for major ticks (in secondary space)
     * @param minorStep tick step for minor ticks (in secondary space)
     */
    constructor(options?: object | { labeldecimation?: boolean; primaryvalues?: number[]; secondaryvalues?: number[]; majorstep?: number; minorstep?: number; }  | number[], secondaryValues?: number[], majorStep?: number, minorStep?: number);
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.labeldecimation label decimation
     * @param properties.primaryvalues primary values
     * @param properties.secondaryvalues secondary values
     * @param properties.majorstep majorstep
     * @param properties.minorstep minorstep
     */
    setProperties(properties: object | { labeldecimation?: boolean; primaryvalues?: number[]; secondaryvalues?: number[]; majorstep?: number; minorstep?: number; } ): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {labeldecimation: boolean; primaryvalues: number[]; secondaryvalues: number[]; majorstep: number; minorstep: number} | any;
    /**
     * Sets labels decimation state
     * @param labelsDecimation labels decimation state
     */
    setLabelsDecimation(labelsDecimation: boolean): this;
    /**
     * Gets labels decimation state
     */
    getLabelsDecimation(): boolean;
    /**
     * Gets primary-to-secondary values mapping.
     */
    getMapping(): {primaryValues: number[]; secondaryValues: number[]} | object;
    /**
     * Gets primary-to-secondary values mapping.
     * @param primaryValues growing array of values in primary model space (the generator's axis parent model space)
     * @param secondaryValues an array of values in a secondary space
     */
    setMapping(primaryValues: number[], secondaryValues: number[]): this;
    /**
     * Sets tick step (in secondary space)
     * @param tickGrade tick grade
     * @param tickStep amount each tick should step
     */
    setTickStep(tickGrade: string, tickStep: number): this;
    /**
     * Gets tick step (in secondary space)
     * @param tickGrade tick grade
     */
    getTickStep(tickGrade: string): number;
    /**
     * Sets tick size (length)
     * @param tickGrade tick grade
     * @param tickSize tick size to set
     */
    setTickSize(tickGrade: string, tickSize: number): this;
    /**
     * Gets tick size (length)
     * @param tickGrade tick grade
     */
    getTickSize(tickGrade: string): number;
    /**
     * Resets tick generator state
     * @param parent parent axis or grid
     * @param orient orientation
     * @param tickInfo tick info
     */
    reset(parent: Grid | Axis, orient: Orientation | string, tickInfo: TickInfo): string[];
    /**
     * Returns supported tick grades: ["major", "minor", "majorreversed" and "minorreversed"]
     */
    getGrades(): string[];
    /**
     * Resets labels. This method is called to start iterating through labels.
     * @param parent parent axis or grid
     * @param orient orientation
     * @param tickInfo a info about labels
     */
    resetLabels(parent: Grid | Axis, orient: Orientation | string, tickInfo: TickInfo): number;
    /**
     * Formats label text positioned at "labelPos" in primary model space.
     * IMPORTANT: Textual content of the label is formatted out of its position
     * in secondary space.
     * @param parent parent axis or grid
     * @param orient orientation
     * @param tickInfo an info about tick
     * @param tickIndex tick index from 0 to count-1, which resetTicks returns
     * @param labelPos model value (in primary space) - ignored by the implementation
     */
    formatLabel(parent: Grid | Axis, orient: Orientation | string, tickInfo: TickInfo, tickIndex: number, labelPos: number): string;
}
