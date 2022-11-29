import {IGetAnnotation} from './IGetAnnotation';
import {IFeature} from '../IFeature';
import {AbstractFeatureLayer} from '../../layers/AbstractFeatureLayer';

/**
 * The strategy returns feature ID as annotation
 */
export class AnnotationById implements IGetAnnotation {
    /**
     * The strategy returns feature ID as annotation
     */
    constructor();
    /**
     * Gets annotation text for a feature.<br>
     * The implementation returns feature's ID
     * @param feature map feature
     * @param layer feature layer (not used)
     */
    getAnnotation(feature: IFeature, layer: AbstractFeatureLayer): string | null;
}
