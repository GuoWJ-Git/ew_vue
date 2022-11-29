import {IGetAnnotation} from './IGetAnnotation';
import {IFeature} from '../IFeature';
import {AbstractFeatureLayer} from '../../layers/AbstractFeatureLayer';

/**
 * The strategy returns feature's attribute 'attributeName' as annotation
 */
export class AnnotationByAttribute implements IGetAnnotation {
    /**
     * The strategy returns feature's attribute 'attributeName' as annotation
     * @param attributeName define attribute name to get from feature for visualization
     */
    constructor(attributeName: string);
    /**
     * Gets annotation text for a feature.<br>
     * The implementation returns feature.getAttributes()[propertyName].
     * @param feature map feature
     * @param layer feature layer (not used)
     */
    getAnnotation(feature: IFeature, layer: AbstractFeatureLayer): string | null;
}
