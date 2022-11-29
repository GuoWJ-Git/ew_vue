/**
 * load font into browser
 * @example
 * ```javascript
 * // Usage of URL with base64
 * import {loadFont} from '@int/geotoolkit/util/fontloader';
 * loadFont('url(data:application/x-font-woff;base64,d09GRg...BQAAAAB)', 'fontawesome-webfont').then(() => {...});
 * ```
 * @param location font location
 * @param family font family, must match to file name
 */
export function loadFont(location: string | ArrayBuffer, family: string): Promise<any>;
