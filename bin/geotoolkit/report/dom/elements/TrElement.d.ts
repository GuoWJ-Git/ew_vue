import {AbstractTextElement} from './AbstractTextElement';
import {NodeList} from '../NodeList';
import {VerticalAlign} from '../css/VerticalAlign';
import {TdElement} from './TdElement';
import {TableElement} from './TableElement';
import {VerticalAlignment} from '../../../util/VerticalAlignment';

/**
 * Tr is a container element
 */
export class TrElement extends AbstractTextElement {
    /**
     * Tr is a container element
     * @param options The options
     */
    constructor(options?: object);
    /**
     * Return vertical alignment type
     */
    getVerticalAlign(): VerticalAlign | null;
    /**
     * Set vertical alignment type
     * @param verticalAlign vertical alignment type
     */
    setVerticalAlign(verticalAlign: VerticalAlign | any): TdElement;
    /**
     * Returns an iterable collection of cells in the table row number all the <td> or <th> element.
     */
    cells: NodeList;
    /**
     * Return cells count
     * @deprecated since 2021 (3.3) use geotoolkit.report.dom.elements.TrElement.cells.length instead
     */
    getCellsCount(): number;
    /**
     * Return cell by index
     * @deprecated since 2021 (3.3) use geotoolkit.report.dom.elements.TrElement.cells.item(index) instead
     * @param index row index
     */
    getCell(index: number): TdElement;
    /**
     * Return index of cell
     * @deprecated since 2021 (3.3) use geotoolkit.report.dom.elements.TrElement.cells.indexOf(cell) instead
     * @param cell cell element
     */
    getIndexOf(cell: TdElement): number;
    /**
     * Return Table element
     */
    getTableElement(): TableElement | null;
    /**
     * Sets the element properties
     * @param props props
     * @param props.verticalalign vertical alignment type
     */
    setProperties(props: object | { verticalalign?: VerticalAlignment | string; } ): this;
}
