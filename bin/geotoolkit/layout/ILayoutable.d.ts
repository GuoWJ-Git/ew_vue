import {Rect} from '../util/Rect';
import {LayoutStyle} from './LayoutStyle';

/**
 * Define an object which can be laid out.
 */
export abstract class ILayoutable {
    /**
     * Returns area, which object occupies
     */
    abstract getBounds(): Rect | null;
    /**
     * Set area, which object occupies
     * @param area an area to occupy
     */
    abstract setBounds(area: Rect): this;
    /**
     * Return desired layout style
     */
    abstract getLayoutStyle(): LayoutStyle;
}
