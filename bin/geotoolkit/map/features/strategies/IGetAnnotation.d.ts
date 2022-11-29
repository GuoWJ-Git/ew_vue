import {IFeature} from '../IFeature';
import {AbstractFeatureLayer} from '../../layers/AbstractFeatureLayer';

/**
 * Annotation strategy interface
 */
export abstract class IGetAnnotation {
    /**
     * Gets annotation text for a feature
     * @param feature map feature
     * @param layer feature layer
     */
    abstract getAnnotation(feature: IFeature, layer: AbstractFeatureLayer): string | null;
}
