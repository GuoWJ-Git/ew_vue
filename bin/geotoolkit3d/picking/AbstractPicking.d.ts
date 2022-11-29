import {Plot} from '../Plot';

/**
 * Parent class for picking algorithms.<br>
 * <br>
 * Subclasses should implement 3D picking (pixel to worldcoordinate).<br>
 * Builtin implementation include raytracing and renderer-picking.<br>
 */
export class AbstractPicking {
    /**
     * Parent class for picking algorithms.<br>
     * <br>
     * Subclasses should implement 3D picking (pixel to worldcoordinate).<br>
     * Builtin implementation include raytracing and renderer-picking.<br>
     */
    constructor();
    /**
     * Pick the object(s) at the given plot coordinates
     * @param plot The target plot
     * @param x The x coordinate in plot device space
     * @param y The y coordinate in plot device space
     */
    static pick(plot: Plot, x: number, y: number): object[];
}
