import * as timeseries from './timeseries/index.js';
import * as overlays from './overlays/index.js';
import annotatedwidget from './annotatedwidget.json';
import timeserieswidget from './timeserieswidget.json';
import basewidget from './basewidget.json';
import crossplot from './crossplot.json';

export default timeseries.default
    .concat([annotatedwidget, basewidget, crossplot, timeserieswidget])
    .concat(overlays.default);
