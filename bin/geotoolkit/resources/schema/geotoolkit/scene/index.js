import * as shapes from './shapes/index.js';
import abstractnode from './abstractnode.json';
import compositenode from './compositenode.json';
import group from './group.json';
import node from './node.json';

export default shapes.default.concat([abstractnode, compositenode, group, node]);
