// do not modify this row, we change it during obfuscation
import {HttpRequest} from './http/NodeHttpRequest.js';
import {Yk as HttpService} from '../impl/geotoolkit.http.js';
HttpService.setRequest(HttpRequest.send);

import {sg as TextMetrics, rg as TextMetricsMeasureStrategy} from '../impl/geotoolkit.base.js';
TextMetrics.setMeasureTextStrategy(TextMetricsMeasureStrategy.NodeCanvas);
