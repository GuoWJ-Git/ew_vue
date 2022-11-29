import * as attributes from './attributes/index.js';
import * as axis from './axis/index.js';
import * as contour from './contour/index.js';
import * as controls from './controls/index.js';
import * as css from './css/index.js';
import * as layout from './layout/index.js';
import * as misc from './misc/index.js';
import * as renderer from './renderer/index.js';
import * as scene from './scene/index.js';
import * as schematics from './schematics/index.js';
import * as seismic from './seismic/index.js';
import * as util from './util/index.js';
import * as welllog from './welllog/index.js';
import * as widgets from './widgets/index.js';
import * as deviation from './deviation/index.js';

export default attributes.default
    .concat(axis.default)
    .concat(contour.default)
    .concat(css.default)
    .concat(layout.default)
    .concat(misc.default)
    .concat(renderer.default)
    .concat(scene.default)
    .concat(schematics.default)
    .concat(util.default)
    .concat(welllog.default)
    .concat(controls.default)
    .concat(seismic.default)
    .concat(widgets.default)
    .concat(deviation.default);
