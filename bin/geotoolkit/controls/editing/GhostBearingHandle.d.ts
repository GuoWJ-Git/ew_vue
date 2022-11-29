import {AbstractHandle} from './AbstractHandle';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {ShapeAdapter} from './ShapeAdapter';

/**
 * Implements a handle which has an option to create a ghost of itself and has the api to manage the ghost.
 */
export class GhostBearingHandle extends AbstractHandle {
    /**
     * Implements a handle which has an option to create a ghost of itself and has the api to manage the ghost.
     * @param options JSON containing handle properties
     * @param options.ghostlinestyle The line style to apply to the ghost
     * @param options.ghostfillstyle The fill style to apply to the ghost
     * @param options.isghost Is Ghost flag
     * width and height will be set to that number
     */
    constructor(options: object | { ghostlinestyle?: LineStyle | string | object; ghostfillstyle?: FillStyle | string | object; isghost?: boolean; } );
    /**
     * Returns true if a ghost has been initialized for this handle
     */
    hasGhost(): boolean;
    /**
     * If a ghost exists, this method disposes the ghost
     */
    removeGhost(): this;
    /**
     * Disposes this handle, Clear all listeners and remove the ghost
     */
    dispose(): void;
    /**
     * Creates a copy of this handle, sets ghost styles, registers it as a ghosts
     * and returns the ghost
     */
    createGhost(): this;
    /**
     * Returns true if this handle is a ghost
     */
    isGhost(): boolean;
    /**
     * Returns the ghost registered with this handle. If ghost does not exists, returns null
     */
    getGhost(): any | this;
    /**
     * Resets ghost anchors and transformation to match the real handle
     */
    resetGhost(): this;
    /**
     * Sets a flag to this handle which specifies if it is currently a ghost, used internally
     * @param ghost Is Ghost flag
     */
    protected setGhostMode(ghost: boolean): this;
    /**
     * Gets the handle to which this ghost is associated
     */
    getParentHandle(): any | this;
    /**
     * Sets the handle to which this ghost is associated, used internally
     * @param parent The parent to associate this handle with
     */
    protected setParentHandle(parent: GhostBearingHandle): this;
    /**
     * Sets current adapter of the real handle if this is a ghost, otherwise sets the adapter to this handle
     * @param adapter adapter for current shape
     */
    setAdapter(adapter?: ShapeAdapter): this;
    /**
     * Returns current adapter of the real handle if this is a ghost, otherwise returns the adapter to this handle
     */
    getAdapter(): ShapeAdapter | any;
    /**
     * Gets properties pertaining to this handle
     */
    getProperties(): {ghostlinestyle: LineStyle; ghostfillstyle: FillStyle; isghost: boolean} | any;
    /**
     * Sets properties pertaining to this object
     * @param props properties
     * @param props.ghostlinestyle The line style to apply to the ghost
     * @param props.ghostfillstyle The fill style to apply to the ghost
     * @param props.isghost Is Ghost flag
     */
    setProperties(props: object | { ghostlinestyle?: LineStyle | string | object; ghostfillstyle?: FillStyle | string | object; isghost?: boolean; } ): this;
    /**
     * Sets visibility of the handle and its ghost
     * @param visible Visibility flag
     */
    setVisible(visible: boolean): this;
}
