import {AbstractTool} from '../../../controls/tools/AbstractTool';
import {WellLogWidget} from '../WellLogWidget';

/**
 * Creates tool to open / close collapsed intervals
 */
export class CollapsedIntervalTool extends AbstractTool {
    /**
     * Creates tool to open / close collapsed intervals
     * @param options well log widget or options
     */
    constructor(options: object | WellLogWidget);
}
