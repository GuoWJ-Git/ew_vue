import {Box3, Plane} from '../../THREE';

/**
 * This class maintains a octree structure. <br>
 * A user should instantiate only once, and use insert() to add elements.
 * When a octree reaches its capacity, it will automatically split into eight sub-nodes (sub-tree).<br>
 * Common use cases are collision detection and fast search.<br>
 * The default capacity is set to 12,500. This is estimated at having 200,000 cells and 64 subgrids.<br>
 */
export class Octree {
    /**
     * This class maintains a octree structure. <br>
     * A user should instantiate only once, and use insert() to add elements.
     * When a octree reaches its capacity, it will automatically split into eight sub-nodes (sub-tree).<br>
     * Common use cases are collision detection and fast search.<br>
     * The default capacity is set to 12,500. This is estimated at having 200,000 cells and 64 subgrids.<br>
     * @param level the level in octree. Starting from 0.
     * @param bound the bounding box of this octree
     */
    constructor(level: number, bound: Box3);
    /**
     * Set the capacity of this octree
     * @param capacity the max number of elements the octree can store
     */
    setCapacity(capacity: number): this;
    /**
     * Insert content to Octree.<br>
     * For memory sake, we store content include bounds as an array.<br>
     * The format is [min.x, min.y, min.z, max.x, max.y, max.z, IJK[]].<br>
     * @param element the content
     */
    insert(element: number[]): void;
    /**
     * Test if plane intersects with the bound of this Octree
     * @param plane the plane to test intersection
     */
    intersectsPlane(plane: Plane): boolean;
    /**
     * Recursively test if plane intersects the Octree and its nodes<br>
     * If intersects any nodes, return the elements stored in these nodes
     * @param plane the plane to test
     */
    retrieveByPlane(plane: Plane): number[];
    /**
     * Retrieve elements from each sub-node.<br>
     * Returns the result in an array, where each position in the array stores a node's data.
     */
    retrieve(): any[][];
    /**
     * Returns the number of nodes which stores elements.<br>
     * This excludes empty nodes.
     */
    getNumberOfNodes(): number;
    /**
     * Reduce memory usage for the octree. <br>
     * Because we need indivudual cell's bounding box informations only during the insertion and split,
     * we can remove them after all actions finish, in a second pass.<br>
     * Note after reduction, the content is IJK only.
     */
    reduceSize(): void;
    /**
     * Returns the child nodes of this octree
     */
    getNodes(): Octree[];
    /**
     * Returns the data stored in this octree
     */
    getElements(): number[];
    /**
     * Returns the bounding box of this octree
     */
    getBound(): Box3;
}
