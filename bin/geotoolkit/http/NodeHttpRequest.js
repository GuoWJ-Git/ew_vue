/**
 * @module geotoolkit/http/HttpRequest
*/
import {Wk as HttpError} from '../../impl/geotoolkit.http.js';
import {Uk as ErrorCodes} from '../../impl/geotoolkit.http.js';
import http from 'http';
import https from 'https';

/**
 * Http or Https request
 * @class module:geotoolkit/http/HttpRequest~HttpRequest
 * @private
 */
var HttpRequest = /*#__PURE__*/(function () {
    var encode = function (val) {
        return encodeURIComponent(val)
            .replace(/%40/g, '@')
            .replace(/%3A/g, ':')
            .replace(/%24/g, '$')
            .replace(/%2C/g, ',')
            .replace(/%20/g, '+')
            .replace(/%5B/g, '[')
            .replace(/%5D/g, ']');
    };
    var encodeParam = function (param) {
        if (param == null) return param;
        if (typeof param === 'object') {
            try {
                param = JSON.stringify(param);
            } catch (e) {
                return null;
            }
        }
        return encode(param);
    };
    var getFullUrl = function (baseURL, relativeURL) {
        if (baseURL && !(/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test((relativeURL)))) {
            return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
        }
        return relativeURL;
    };
    var getUrl = function (config) {
        var url = getFullUrl(config['baseurl'], config['url']);
        if (config.params && typeof config.params === 'object' ) {
            var paramsStr = null, pair;
            for (var key in config.params) {
                if (config.params.hasOwnProperty(key)) {
                    pair = encode(key) + '=' + encodeParam(config.params[key]);
                    if (paramsStr) {
                        paramsStr += '&' + pair;
                    } else {
                        paramsStr = pair;
                    }
                }
            }
            if (url && paramsStr) {
                url += (url.indexOf('?') === -1 ? '?' : '&') + paramsStr;
            }
        }
        return url;
    };
    var createError = function (message, options, code, request, response) {
        return new HttpError(message, options, code, request, response);
    };
    var handleResponseData = function (res, options, resultHandler) {
        var headers = res.headers;
        var result = '';
        var transferedBytes = 0;
        var contentLength = parseInt(headers['content-length']);

        res.setEncoding('utf8');

        // Handle progress if needed
        res.on('data', function (chunk) {
            result += chunk;
            if (typeof contentLength === 'number') {
                var onProgressHandler = options['onprogress'];
                if (typeof onProgressHandler === 'function') {
                    var totalBytes = contentLength;
                    transferedBytes += chunk.length;
                    onProgressHandler({
                        'loaded': transferedBytes,
                        'total': totalBytes
                    });
                }
            }
        });
        res.on('end', function () {
            if (headers != null && headers['content-type'] != null &&
                headers['content-type'].toLowerCase() === 'application/json') {
                try {
                    result = JSON.parse(result);
                } catch (e) { }
            }
            resultHandler(result);
        });
        return res;
    };

    var HttpRequest = function () {

    };
    /**
     * Send request based using http or https nodejs packages
     * @param {object} options options
     * @returns {Promise}
     */
    HttpRequest.send = function (options) {
        var url = getUrl(options);
        var req = null;
        var HttpRequest = url.substring(0, 5) === 'https' ? https : http;
        return new Promise(function (resolve, reject) {
            req = HttpRequest.request(url, options, function (res) {
                if (res.statusCode === 200) {
                    handleResponseData(res, options, function (responseData) {
                        resolve({
                            'options': options,
                            'data': responseData,
                            'status': res.statusCode,
                            'statusText': res.statusMessage
                        });
                    });
                } else {
                    reject(createError(res, options));
                }
            });
            // Handle request cancellation (as opposed to a manual cancellation)
            req.on('abort', function () {
                reject(createError('Request aborted', options, ErrorCodes.Aborted));
            });
            // Handle low level network errors
            req.on('error', function () {
                reject(createError('Network Error', options));
            });
            // Handle and set timeout in ms
            req.setTimeout(options['timeout'] !== undefined ? options['timeout'] : 0, function () {
                reject(createError('timeout of ' + options['timeout'] + 'ms exceeded', options, ErrorCodes.Timeout));
            });
            // Set headers
            var headers = options['headers'];
            if (headers) {
                for (var key in headers) {
                    if (headers.hasOwnProperty(key)) {
                        req.setHeader(key, headers[key]);
                    }
                }
            }
            if (options['cancel']) {
                if (options['cancel'].isCanceled()) return;
                // Handle cancellation
                options['cancel'].setErrorHandler(function (cancel) {
                    req.destroy();
                });
            }
            req.end();
        }, function () {
            // Abort request
            if (options['cancel']) {
                options['cancel'].cancel();
            } else if (req != null) {
                req.destroy();
            }
        });
    };
    return HttpRequest;
})();

export {HttpRequest};
