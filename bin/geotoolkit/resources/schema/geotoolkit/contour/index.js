import * as visuals from './visuals/index.js';
import * as dataprocessor from './processor/index.js';
import * as projections from './projections/index.js';
import * as grids from './grid/index.js';
import * as datasources from './datasource/index.js';
import * as scale from './scale/index.js';
import * as faults from './faults/index.js';
import * as strategy from './strategy/index.js';
import * as shapes from './shapes/index.js';

export default visuals.default
    .concat(dataprocessor.default)
    .concat(projections.default)
    .concat(grids.default)
    .concat(datasources.default)
    .concat(scale.default)
    .concat(faults.default)
    .concat(strategy.default)
    .concat(shapes.default);
