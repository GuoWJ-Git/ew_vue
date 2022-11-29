import * as analysis from './analysis/index.js';
import * as data from './data/index.js';
import * as pipeline from './pipeline/index.js';
import * as widgets from './widgets/index.js';

export default analysis.default.concat(data.default).concat(pipeline.default).concat(widgets.default);
