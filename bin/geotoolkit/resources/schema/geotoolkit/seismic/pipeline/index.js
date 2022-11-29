import pipeline from './pipeline.json';
import * as processor from './processor/index.js';


export default processor.default.concat([pipeline]);
