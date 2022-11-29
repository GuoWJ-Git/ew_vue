import {IElement} from './IElement';
import {Layer} from '../../scene/Layer';

/**
 * Define an object that represents the report elements root container
 */
export abstract class IElementRootContainer {
    /**
     * Rebuild entire DOM layout
     * @param element element
     */
    abstract rebuildDomLayout(element?: IElement): IElementRootContainer;
    /**
     * Returns adornments layer
     */
    abstract getAdornmentsOverlay(): Layer;
    /**
     * Returns root document Design time state
     */
    abstract isDesignTime(): boolean;
}
