import {EventDispatcher} from '../../util/EventDispatcher';
import {SyncMode} from './SyncMode';
import {SyncOperationRegistry} from './SyncOperationRegistry';
import {Group} from '../../scene/Group';
import {Orientation} from '../../util/Orientation';

/**
 * Define synchronized space. This class synchronize different nodes.
 * @example
 * ```javascript
 * // How to use custom synchronization
 * import {ViewSynchronizer} from '@int/geotoolkit/widgets/sync/ViewSynchronizer';
 * import {SyncMode} from '@int/geotoolkit/widgets/sync/SyncMode';
 * import {Events as NodeEvents} from '@int/geotoolkit/scene/Node';
 * import {Orientation} from '@int/geotoolkit/util/Orientation';
 * import {Transformation} from '@int/geotoolkit/util/Transformation';
 * const sync = new ViewSynchronizer({'mode': [SyncMode.Custom]});
 * sync.connect(widget, {
 *    'vertical': true,
 *    'horizontal': true,
 *    'events': [NodeEvents.LocalTransformationChanged]
 *    'custom': {
 *        'getdata' : (item) => item.getLocalTransform(),
 *        'setdata': (tr, item, orientation) => {
 *           const currTransformation = item.getLocalTransform();
 *           let xxModel = currTransformation.getScaleX();
 *           let dxModel = currTransformation.getTranslateX();
 *           let yyModel = currTransformation.getScaleY();
 *           let dyModel = currTransformation.getTranslateY();
 *           if (orientation === Orientation.Vertical) {
 *              yyModel = tr.getScaleY();
 *              dyModel = tr.getTranslateY();
 *           } else if (orientation === Orientation.Horizontal) {
 *              xxModel = tr.getScaleX();
 *              dxModel = tr.getTranslateX();
 *           }
 *           const transformation = new Transformation(xxModel, 0, 0, yyModel, dxModel, dyModel);
 *           widget.setModelTransformation(transformation);
 *         }
 *     }
 *  });
 * ```
 */
export class ViewSynchronizer extends EventDispatcher {
    /**
     * Define synchronized space. This class synchronize different nodes.
     * @param options options of synchronization
     * @param options.mode an array of enabled modes to synchronize
     * @param options.registry registry of operations
     * all listeners
     */
    constructor(options?: object | { mode?: SyncMode[]; registry?: SyncOperationRegistry; } );
    /**
     * Connect item to a collection of items to be synchronized
     * @param item item to be added
     * @param options options to connect listener / receiver
     * @param options.sender sender of events
     * @param options.receiver receiver of events
     * @param options.events listener of events
     * @param options.orientation item own orientation
     */
    connect(item: Group, options?: object | { sender?: boolean; receiver?: boolean; events?: string[]; orientation?: Orientation; } ): this;
    /**
     * Send data for all receivers of the current action
     * @param data data
     * @param data.vertical data in the vertical direction
     * @param data.horizontal data in horizontal direction
     * @param name name of the action
     */
    send(data: object | { vertical?: object; horizontal?: object; } , name?: string): void;
    /**
     * Synchronize
     * @param source source to synchronize
     * @param name action name to applied for synchronization
     */
    synchronize(source: object, name: string): this;
    /**
     * Disconnect item from a collection of items to be synchronized
     * @param item item to be removed
     */
    disconnect(item: Group): void;
}
