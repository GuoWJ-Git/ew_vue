import {LineReader} from '../../../geotoolkit/util/stream/LineReader';

/**
 * Parent class for data loader.<br>
 * A low level class for loading resources with XMLHttpRequest.<br>
 */
export class AbstractLoader {
    /**
     * Parent class for data loader.<br>
     * A low level class for loading resources with XMLHttpRequest.<br>
     */
    constructor();
    /**
     * Loads the file at the given URL. Could be either local or remote url.<br>
     * This convenience function exists to mimic THREEJS loaders API.<br>
     * Internally it uses THREE.XHRLoader and THREE.LoadingManager.<br>
     * <br>
     * One could also use directly the function parse() to handle loading the dataset manually/differently.
     * <br>
     * Note that, for convenience, this function returns a Promise AND accepts callbacks (that do not contribute to the returned promise).<br>
     * One is free to use either the Promise or the callback to be 'notified' when the stream is ready.<br>
     * <br>
     * @param url the url of the file
     * @param onLoad the function called upon success
     * @param onError the function called if an error occurs
     */
    load(url: string, onLoad: Function, onError: Function): void;
    /**
     * Parse the content of the given reader.<br>
     * @param reader the reader
     * @param onLoad the function called upon success
     * @param onError the function called if an error occurs
     */
    parse(reader: LineReader, onLoad: Function, onError: Function): Promise<any>;
}
