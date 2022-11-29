/**
 * @module geotoolkit/window
 */
/*
 * Setup everything so that it looks like the code is being executed in a browser
 * jsdom for dom elements
 * node-canvas for dom-canvas
 * Global variables that existing in a browser (window, document, etc)
 */
import Canvas from 'canvas';
import jsdom from 'jsdom';
import {XMLSerializer} from '@xmldom/xmldom';

/**
 * @type {*}
 */
export var $window = (function () {
    var setupDOM = function () {
        var window = {};
        try {
            var JSDOM = jsdom['JSDOM'];
            // use to broadcast page error to Nodejs console
            var virtualConsole = new jsdom['VirtualConsole']();
            virtualConsole['on']('error', function (error) {
                global.console.error(error.stack, error.detail);
            });
            virtualConsole['on']('log', function (message) {
                global.console.log('>> [jsdom] :', message);
            });
            var html = '<html><body></body></html>';
            // window object created in order to make eval of the toolkit safe.
            window = new JSDOM(html, {
                'virtualConsole': virtualConsole,
                'resources': 'usable',
                'pretendToBeVisual': true // Enabling window.requestAnimationFrame
            }).window;
            window.XMLSerializer = XMLSerializer;
            // patch jsdom which always returns zeros in getBoundingClientRect()
            var origFoo = window.HTMLElement.prototype.getBoundingClientRect;
            window.HTMLElement.prototype.getBoundingClientRect = function () {
                var result = origFoo.call(this, arguments);
                if (result.width !== 0 || result.height !== 0 || result.top !== 0 || result.left !== 0) return result;

                return {
                    width: this.width || parseFloat(this.style.width) || 0,
                    height: this.height || parseFloat(this.style.height) || 0,
                    top: this.top || parseFloat(this.style.marginTop) || 0,
                    left: this.left || parseFloat(this.style.marginLeft) || 0
                };
            };
        } catch (e) {
            global.console.error('Need jsdom version above 13.0.0');
        }
        window.isNaN = global.isNaN;
        window.isFinite = global.isFinite;
        window.parseInt = global.parseInt;
        window.parseFloat = global.parseFloat;
        window.Uint8Array = global.Uint8Array;
        window.Uint32Array = global.Uint32Array;
        window.Int32Array = global.Int32Array;
        window.Float64Array = global.Float64Array;
        window.setTimeout = global.setTimeout;
        window.clearTimeout = global.clearTimeout;
        window.setInterval = global.setInterval;
        window.clearInterval = global.clearInterval;
        window.Promise = global.Promise;
        window.Map = global.Map;
        window.WeakMap = global.WeakMap;
        // expose to other modules
        global.window = window;
        global.self = window;
        global.document = window.document;
        global.window.Element = null;
        global.navigator = window.navigator;
        global.XMLHttpRequest = window.XMLHttpRequest;
        return window;
    };
    var setupCanvas = function (Canvas) {
        var window = setupDOM();
        window['CanvasRenderingContext2D'] = Canvas['CanvasRenderingContext2D'];
        window['Canvas'] = Canvas['Canvas'];
        window['createCanvas'] = Canvas['createCanvas'];
        window.HTMLCanvasElement = Canvas['Canvas'];
        global['Canvas'] = window['Canvas'];
        window.Image = Canvas['Image'];
        window.HTMLImageElement = Canvas['Image'];
        global.Image = Canvas['Image'];
        global.HTMLImageElement = Canvas['Image'];
        global.HTMLCanvasElement = window.HTMLCanvasElement;
        return window;
    };
    return setupCanvas(Canvas);
})();

/**
 * @type {*}
 */
export var $document = $window.document;
