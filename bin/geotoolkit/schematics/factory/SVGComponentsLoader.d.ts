import {ComponentNodeFactoryRegistry} from './ComponentNodeFactoryRegistry';
import {SVGParser} from '../../svg/SVGParser';
import {SvgDataProvider} from '../../svg/SvgDataProvider';
import {AbstractHttpService} from '../../http/AbstractHttpService';

/**
 * SVG-components loader
 */
export class SVGComponentsLoader {
    /**
     * SVG-components loader
     * @param options loader parameters
     * @param options.path relative path to JSON-file containing SVG-components to register
     * @param options.registry registry to add SVG-components to
     * @param options.parser SVG parser
     * @param options.dataprovider data provider
     * @param options.httpservice http service to make any HTTP request
     */
    constructor(options: object | { path: string; registry: ComponentNodeFactoryRegistry; parser?: SVGParser; dataprovider?: SvgDataProvider; httpservice?: AbstractHttpService; } );
    /**
     * Loads SVG-components to registry
     */
    load(): Promise<any>;
}
