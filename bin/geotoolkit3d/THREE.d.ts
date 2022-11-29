
export declare const ACESFilmicToneMapping: ToneMapping;

export declare const AddEquation: BlendingEquation;

export declare const AdditiveAnimationBlendMode: AnimationBlendMode;

export declare const AdditiveBlending: Blending;

export declare const AddOperation: Combine;

export declare const AlphaFormat: PixelFormat;

export declare const AlwaysDepth: DepthModes;

export declare const AlwaysStencilFunc: StencilFunc;

/**
 * This light's color gets applied to all the objects in the scene globally.
 *
 * @source https://github.com/mrdoob/three.js/blob/master/src/lights/AmbientLight.js
 */
export declare class AmbientLight extends Light {
    /**
     * This creates a Ambientlight with a color.
     * @param color Numeric value of the RGB component of the color or a Color instance.
     * @param [intensity=1]
     */
    constructor(color?: Color | string | number, intensity?: number);

    /**
     * @default 'AmbientLight'
     */
    type: string;

    readonly isAmbientLight: true;
}

export declare class AmbientLightProbe extends LightProbe {
    constructor(color?: Color | string | number, intensity?: number);

    readonly isAmbientLightProbe: true;
}

export declare class AnimationAction {
    constructor(mixer: AnimationMixer, clip: AnimationClip, localRoot?: Object3D, blendMode?: AnimationBlendMode);

    blendMode: AnimationBlendMode;

    /**
     * @default THREE.LoopRepeat
     */
    loop: AnimationActionLoopStyles;

    /**
     * @default 0
     */
    time: number;

    /**
     * @default 1
     */
    timeScale: number;

    /**
     * @default 1
     */
    weight: number;

    /**
     * @default Infinity
     */
    repetitions: number;

    /**
     * @default false
     */
    paused: boolean;

    /**
     * @default true
     */
    enabled: boolean;

    /**
     * @default false
     */
    clampWhenFinished: boolean;

    /**
     * @default true
     */
    zeroSlopeAtStart: boolean;

    /**
     * @default true
     */
    zeroSlopeAtEnd: boolean;

    play(): AnimationAction;
    stop(): AnimationAction;
    reset(): AnimationAction;
    isRunning(): boolean;
    isScheduled(): boolean;
    startAt(time: number): AnimationAction;
    setLoop(mode: AnimationActionLoopStyles, repetitions: number): AnimationAction;
    setEffectiveWeight(weight: number): AnimationAction;
    getEffectiveWeight(): number;
    fadeIn(duration: number): AnimationAction;
    fadeOut(duration: number): AnimationAction;
    crossFadeFrom(fadeOutAction: AnimationAction, duration: number, warp: boolean): AnimationAction;
    crossFadeTo(fadeInAction: AnimationAction, duration: number, warp: boolean): AnimationAction;
    stopFading(): AnimationAction;
    setEffectiveTimeScale(timeScale: number): AnimationAction;
    getEffectiveTimeScale(): number;
    setDuration(duration: number): AnimationAction;
    syncWith(action: AnimationAction): AnimationAction;
    halt(duration: number): AnimationAction;
    warp(statTimeScale: number, endTimeScale: number, duration: number): AnimationAction;
    stopWarping(): AnimationAction;
    getMixer(): AnimationMixer;
    getClip(): AnimationClip;
    getRoot(): Object3D;
}

export declare enum AnimationActionLoopStyles {}

export declare enum AnimationBlendMode {}

export declare class AnimationClip {
    constructor(name?: string, duration?: number, tracks?: KeyframeTrack[], blendMode?: AnimationBlendMode);

    name: string;
    tracks: KeyframeTrack[];

    /**
     * @default THREE.NormalAnimationBlendMode
     */
    blendMode: AnimationBlendMode;

    /**
     * @default -1
     */
    duration: number;
    uuid: string;
    results: any[];

    resetDuration(): AnimationClip;
    trim(): AnimationClip;
    validate(): boolean;
    optimize(): AnimationClip;
    clone(): AnimationClip;
    toJSON(clip: AnimationClip): any;

    static CreateFromMorphTargetSequence(
        name: string,
        morphTargetSequence: MorphTarget[],
        fps: number,
        noLoop: boolean,
    ): AnimationClip;
    static findByName(clipArray: AnimationClip[], name: string): AnimationClip;
    static CreateClipsFromMorphTargetSequences(
        morphTargets: MorphTarget[],
        fps: number,
        noLoop: boolean,
    ): AnimationClip[];
    static parse(json: any): AnimationClip;
    static parseAnimation(animation: any, bones: Bone[]): AnimationClip;
    static toJSON(clip: AnimationClip): any;
}

export declare class AnimationLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad: (response: AnimationClip[]) => void,
        onProgress?: (request: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<AnimationClip[]>;
    parse(json: any): AnimationClip[];
}

export declare class AnimationMixer extends EventDispatcher {
    constructor(root: Object3D | AnimationObjectGroup);

    /**
     * @default 0
     */
    time: number;

    /**
     * @default 1.0
     */
    timeScale: number;

    clipAction(
        clip: AnimationClip,
        root?: Object3D | AnimationObjectGroup,
        blendMode?: AnimationBlendMode,
    ): AnimationAction;
    existingAction(clip: AnimationClip, root?: Object3D | AnimationObjectGroup): AnimationAction | null;
    stopAllAction(): AnimationMixer;
    update(deltaTime: number): AnimationMixer;
    setTime(timeInSeconds: number): AnimationMixer;
    getRoot(): Object3D | AnimationObjectGroup;
    uncacheClip(clip: AnimationClip): void;
    uncacheRoot(root: Object3D | AnimationObjectGroup): void;
    uncacheAction(clip: AnimationClip, root?: Object3D | AnimationObjectGroup): void;
}

export declare class AnimationObjectGroup {
    constructor(...args: any[]);

    uuid: string;
    stats: {
        bindingsPerObject: number;
        objects: {
            total: number;
            inUse: number;
        };
    };
    readonly isAnimationObjectGroup: true;

    add(...args: any[]): void;
    remove(...args: any[]): void;
    uncache(...args: any[]): void;
}

export declare namespace AnimationUtils {
    export function arraySlice(array: any, from: number, to: number): any;
    export function convertArray(array: any, type: any, forceClone: boolean): any;
    export function isTypedArray(object: any): boolean;
    export function getKeyFrameOrder(times: number[]): number[];
    export function sortedArray(values: any[], stride: number, order: number[]): any[];
    export function flattenJSON(jsonKeys: string[], times: any[], values: any[], valuePropertyName: string): void;

    /**
     * @param sourceClip
     * @param name
     * @param startFrame
     * @param endFrame
     * @param [fps=30]
     */
    export function subclip(
        sourceClip: AnimationClip,
        name: string,
        startFrame: number,
        endFrame: number,
        fps?: number,
    ): AnimationClip;

    /**
     * @param targetClip
     * @param [referenceFrame=0]
     * @param [referenceClip=targetClip]
     * @param [fps=30]
     */
    export function makeClipAdditive(
        targetClip: AnimationClip,
        referenceFrame?: number,
        referenceClip?: AnimationClip,
        fps?: number,
    ): AnimationClip;
}

export declare class ArcCurve extends EllipseCurve {
    constructor(aX: number, aY: number, aRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean);

    /**
     * @default 'ArcCurve'
     */
    type: string;
}

export declare class ArrayCamera extends PerspectiveCamera {
    constructor(cameras?: PerspectiveCamera[]);

    /**
     * @default []
     */
    cameras: PerspectiveCamera[];
    readonly isArrayCamera: true;
}

export declare class ArrowHelper extends Object3D {
    /**
     * @param [dir] Direction from origin. Must be a unit vector.
     * @param [origin] Point at which the arrow starts.
     * @param [length] Length of the arrow.
     * @param [color] Hexadecimal value to define color.
     * @param [headLength] The length of the head of the arrow.
     * @param [headWidth] The width of the head of the arrow.
     */
    constructor(
        dir?: Vector3,
        origin?: Vector3,
        length?: number,
        color?: Color | string | number,
        headLength?: number,
        headWidth?: number,
    );

    /**
     * @default 'ArrowHelper'
     */
    type: string;

    /**
     * Contains the line part of the arrowHelper.
     */
    line: Line;

    /**
     * Contains the cone part of the arrowHelper.
     */
    cone: Mesh;

    /**
     * @param dir The desired direction. Must be a unit vector.
     */
    setDirection(dir: Vector3): void;

    /**
     * @param length The desired length.
     * @param [headLength] The length of the head of the arrow.
     * @param [headWidth] The width of the head of the arrow.
     */
    setLength(length: number, headLength?: number, headWidth?: number): void;

    /**
     * @param color The desired color.
     */
    setColor(color: Color | string | number): void;
}

declare class Audio_2<NodeType extends AudioNode = GainNode> extends Object3D {
    constructor(listener: AudioListener_2);
    type: 'Audio';

    listener: AudioListener_2;
    context: AudioContext;
    gain: GainNode;

    /**
     * @default false
     */
    autoplay: boolean;
    buffer: null | AudioBuffer;

    /**
     * @default 0
     */
    detune: number;

    /**
     * @default false
     */
    loop: boolean;

    /**
     * @default 0
     */
    loopStart: number;

    /**
     * @default 0
     */
    loopEnd: number;

    /**
     * @default 0
     */
    offset: number;

    /**
     * @default undefined
     */
    duration: number | undefined;

    /**
     * @default 1
     */
    playbackRate: number;

    /**
     * @default false
     */
    isPlaying: boolean;

    /**
     * @default true
     */
    hasPlaybackControl: boolean;

    /**
     * @default 'empty'
     */
    sourceType: string;
    source: null | AudioBufferSourceNode;

    /**
     * @default []
     */
    filters: any[];

    getOutput(): NodeType;
    setNodeSource(audioNode: AudioBufferSourceNode): this;
    setMediaElementSource(mediaElement: HTMLMediaElement): this;
    setMediaStreamSource(mediaStream: MediaStream): this;
    setBuffer(audioBuffer: AudioBuffer): this;
    play(delay?: number): this;
    onEnded(): void;
    pause(): this;
    stop(): this;
    connect(): this;
    disconnect(): this;
    setDetune(value: number): this;
    getDetune(): number;
    getFilters(): any[];
    setFilters(value: any[]): this;
    getFilter(): any;
    setFilter(filter: any): this;
    setPlaybackRate(value: number): this;
    getPlaybackRate(): number;
    getLoop(): boolean;
    setLoop(value: boolean): this;
    setLoopStart(value: number): this;
    setLoopEnd(value: number): this;
    getVolume(): number;
    setVolume(value: number): this;
    /**
     * @deprecated Use {@link AudioLoader} instead.
     */
    load(file: string): Audio_2;
}
export { Audio_2 as Audio }

export declare class AudioAnalyser {
    /**
     * @param audio
     * @param [fftSize=2048]
     */
    constructor(audio: Audio_2<AudioNode>, fftSize?: number);

    analyser: AnalyserNode;
    data: Uint8Array;

    getFrequencyData(): Uint8Array;
    getAverageFrequency(): number;

    /**
     * @deprecated Use {@link AudioAnalyser#getFrequencyData .getFrequencyData()} instead.
     */
    getData(file: any): any;
}

/**
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/audio/AudioContext.js|src/audio/AudioContext.js}
 */
declare namespace AudioContext_2 {
    function getContext(): AudioContext;

    function setContext(): void;
}
export { AudioContext_2 as AudioContext }

declare class AudioListener_2 extends Object3D {
    constructor();

    type: 'AudioListener';
    context: AudioContext;
    gain: GainNode;

    /**
     * @default null
     */
    filter: any;

    /**
     * @default 0
     */
    timeDelta: number;

    getInput(): GainNode;
    removeFilter(): this;
    setFilter(value: any): this;
    getFilter(): any;
    setMasterVolume(value: number): this;
    getMasterVolume(): number;
    updateMatrixWorld(force?: boolean): void;
}
export { AudioListener_2 as AudioListener }

export declare class AudioLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad: (audioBuffer: AudioBuffer) => void,
        onProgress?: (request: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;

    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<AudioBuffer>;
}

export declare class AxesHelper extends LineSegments {
    /**
     * @param [size=1]
     */
    constructor(size?: number);

    /**
     * @default 'AxesHelper'
     */
    type: string;
}

export declare const BackSide: Side;

export declare const BasicDepthPacking: DepthPackingStrategies;

export declare const BasicShadowMap: ShadowMapType;

export declare enum Blending {}

export declare enum BlendingDstFactor {}

export declare enum BlendingEquation {}

export declare enum BlendingSrcFactor {}

export declare class Bone extends Object3D {
    constructor();
    readonly isBone: true;
    type: 'Bone';
}

export declare class BooleanKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: any[], values: any[]);

    /**
     * @default 'bool'
     */
    ValueTypeName: string;
}

export declare class Box2 {
    constructor(min?: Vector2, max?: Vector2);

    /**
     * @default new THREE.Vector2( + Infinity, + Infinity )
     */
    min: Vector2;

    /**
     * @default new THREE.Vector2( - Infinity, - Infinity )
     */
    max: Vector2;

    set(min: Vector2, max: Vector2): Box2;
    setFromPoints(points: Vector2[]): Box2;
    setFromCenterAndSize(center: Vector2, size: Vector2): Box2;
    clone(): Box2;
    copy(box: Box2): this;
    makeEmpty(): Box2;
    isEmpty(): boolean;
    getCenter(target: Vector2): Vector2;
    getSize(target: Vector2): Vector2;
    expandByPoint(point: Vector2): Box2;
    expandByVector(vector: Vector2): Box2;
    expandByScalar(scalar: number): Box2;
    containsPoint(point: Vector2): boolean;
    containsBox(box: Box2): boolean;
    getParameter(point: Vector2, target: Vector2): Vector2;
    intersectsBox(box: Box2): boolean;
    clampPoint(point: Vector2, target: Vector2): Vector2;
    distanceToPoint(point: Vector2): number;
    intersect(box: Box2): Box2;
    union(box: Box2): Box2;
    translate(offset: Vector2): Box2;
    equals(box: Box2): boolean;
    /**
     * @deprecated Use {@link Box2#isEmpty .isEmpty()} instead.
     */
    empty(): any;
    /**
     * @deprecated Use {@link Box2#intersectsBox .intersectsBox()} instead.
     */
    isIntersectionBox(b: any): any;
}

export declare class Box3 {
    constructor(min?: Vector3, max?: Vector3);

    /**
     * @default new THREE.Vector3( + Infinity, + Infinity, + Infinity )
     */
    min: Vector3;

    /**
     * @default new THREE.Vector3( - Infinity, - Infinity, - Infinity )
     */
    max: Vector3;
    readonly isBox3: true;

    set(min: Vector3, max: Vector3): this;
    setFromArray(array: ArrayLike<number>): this;
    setFromBufferAttribute(bufferAttribute: BufferAttribute): this;
    setFromPoints(points: Vector3[]): this;
    setFromCenterAndSize(center: Vector3, size: Vector3): this;
    setFromObject(object: Object3D): this;
    clone(): Box3;
    copy(box: Box3): this;
    makeEmpty(): this;
    isEmpty(): boolean;
    getCenter(target: Vector3): Vector3;
    getSize(target: Vector3): Vector3;
    expandByPoint(point: Vector3): this;
    expandByVector(vector: Vector3): this;
    expandByScalar(scalar: number): this;
    expandByObject(object: Object3D): this;
    containsPoint(point: Vector3): boolean;
    containsBox(box: Box3): boolean;
    getParameter(point: Vector3, target: Vector3): Vector3;
    intersectsBox(box: Box3): boolean;
    intersectsSphere(sphere: Sphere): boolean;
    intersectsPlane(plane: Plane): boolean;
    intersectsTriangle(triangle: Triangle): boolean;
    clampPoint(point: Vector3, target: Vector3): Vector3;
    distanceToPoint(point: Vector3): number;
    getBoundingSphere(target: Sphere): Sphere;
    intersect(box: Box3): this;
    union(box: Box3): this;
    applyMatrix4(matrix: Matrix4): this;
    translate(offset: Vector3): this;
    equals(box: Box3): boolean;
    /**
     * @deprecated Use {@link Box3#isEmpty .isEmpty()} instead.
     */
    empty(): any;
    /**
     * @deprecated Use {@link Box3#intersectsBox .intersectsBox()} instead.
     */
    isIntersectionBox(b: any): any;
    /**
     * @deprecated Use {@link Box3#intersectsSphere .intersectsSphere()} instead.
     */
    isIntersectionSphere(s: any): any;
}

export declare class Box3Helper extends LineSegments {
    /**
     * @param box
     * @param [color=0xffff00]
     */
    constructor(box: Box3, color?: Color);

    /**
     * @default 'Box3Helper'
     */
    type: string;

    box: Box3;
}

declare class BoxGeometry extends BufferGeometry {
    /**
     * @param [width=1] — Width of the sides on the X axis.
     * @param [height=1] — Height of the sides on the Y axis.
     * @param [depth=1] — Depth of the sides on the Z axis.
     * @param [widthSegments=1] — Number of segmented faces along the width of the sides.
     * @param [heightSegments=1] — Number of segmented faces along the height of the sides.
     * @param [depthSegments=1] — Number of segmented faces along the depth of the sides.
     */
    constructor(
        width?: number,
        height?: number,
        depth?: number,
        widthSegments?: number,
        heightSegments?: number,
        depthSegments?: number,
    );

    /**
     * @default 'BoxGeometry'
     */
    type: string;

    parameters: {
        width: number;
        height: number;
        depth: number;
        widthSegments: number;
        heightSegments: number;
        depthSegments: number;
    };
}
export { BoxGeometry as BoxBufferGeometry }
export { BoxGeometry }

export declare class BoxHelper extends LineSegments {
    /**
     * @param object
     * @param [color=0xffff00]
     */
    constructor(object: Object3D, color?: Color | string | number);

    /**
     * @default 'BoxHelper'
     */
    type: string;

    update(object?: Object3D): void;

    setFromObject(object: Object3D): this;
}

/**
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js|src/core/BufferAttribute.js}
 */
export declare class BufferAttribute {
    constructor(array: ArrayLike<number>, itemSize: number, normalized?: boolean); // array parameter should be TypedArray.

    /**
     * @default ''
     */
    name: string;
    array: ArrayLike<number>;
    itemSize: number;

    /**
     * @default THREE.StaticDrawUsage
     */
    usage: Usage;

    /**
     * @default { offset: number; count: number }
     */
    updateRange: { offset: number; count: number };

    /**
     * @default 0
     */
    version: number;

    /**
     * @default false
     */
    normalized: boolean;

    /**
     * @default 0
     */
    count: number;

    set needsUpdate(value: boolean);

    readonly isBufferAttribute: true;

    onUploadCallback: () => void;
    onUpload(callback: () => void): this;
    setUsage(usage: Usage): this;
    clone(): BufferAttribute;
    copy(source: BufferAttribute): this;
    copyAt(index1: number, attribute: BufferAttribute, index2: number): this;
    copyArray(array: ArrayLike<number>): this;
    copyColorsArray(colors: Array<{ r: number; g: number; b: number }>): this;
    copyVector2sArray(vectors: Array<{ x: number; y: number }>): this;
    copyVector3sArray(vectors: Array<{ x: number; y: number; z: number }>): this;
    copyVector4sArray(vectors: Array<{ x: number; y: number; z: number; w: number }>): this;
    applyMatrix3(m: Matrix3): this;
    applyMatrix4(m: Matrix4): this;
    applyNormalMatrix(m: Matrix3): this;
    transformDirection(m: Matrix4): this;
    set(value: ArrayLike<number> | ArrayBufferView, offset?: number): this;
    getX(index: number): number;
    setX(index: number, x: number): this;
    getY(index: number): number;
    setY(index: number, y: number): this;
    getZ(index: number): number;
    setZ(index: number, z: number): this;
    getW(index: number): number;
    setW(index: number, z: number): this;
    setXY(index: number, x: number, y: number): this;
    setXYZ(index: number, x: number, y: number, z: number): this;
    setXYZW(index: number, x: number, y: number, z: number, w: number): this;
    toJSON(): {
        itemSize: number;
        type: string;
        array: number[];
        normalized: boolean;
    };
}

/**
 * This is a superefficent class for geometries because it saves all data in buffers.
 * It reduces memory costs and cpu cycles. But it is not as easy to work with because of all the necessary buffer calculations.
 * It is mainly interesting when working with static objects.
 *
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferGeometry.js|src/core/BufferGeometry.js}
 */
export declare class BufferGeometry extends EventDispatcher {
    /**
     * This creates a new BufferGeometry. It also sets several properties to an default value.
     */
    constructor();

    static MaxIndex: number;

    /**
     * Unique number of this buffergeometry instance
     */
    id: number;
    uuid: string;

    /**
     * @default ''
     */
    name: string;

    /**
     * @default 'BufferGeometry'
     */
    type: string;

    /**
     * @default null
     */
    index: BufferAttribute | null;

    /**
     * @default {}
     */
    attributes: {
        [name: string]: BufferAttribute | InterleavedBufferAttribute;
    };

    /**
     * @default {}
     */
    morphAttributes: {
        [name: string]: Array<BufferAttribute | InterleavedBufferAttribute>;
    };

    /**
     * @default false
     */
    morphTargetsRelative: boolean;

    /**
     * @default []
     */
    groups: Array<{ start: number; count: number; materialIndex?: number }>;

    /**
     * @default null
     */
    boundingBox: Box3 | null;

    /**
     * @default null
     */
    boundingSphere: Sphere | null;

    /**
     * @default { start: 0, count: Infinity }
     */
    drawRange: { start: number; count: number };

    /**
     * @default {}
     */
    userData: { [key: string]: any };
    readonly isBufferGeometry: true;

    getIndex(): BufferAttribute | null;
    setIndex(index: BufferAttribute | number[] | null): BufferGeometry;

    setAttribute(name: string, attribute: BufferAttribute | InterleavedBufferAttribute): BufferGeometry;
    getAttribute(name: string): BufferAttribute | InterleavedBufferAttribute;
    deleteAttribute(name: string): BufferGeometry;
    hasAttribute(name: string): boolean;

    addGroup(start: number, count: number, materialIndex?: number): void;
    clearGroups(): void;

    setDrawRange(start: number, count: number): void;

    /**
     * Bakes matrix transform directly into vertex coordinates.
     */
    applyMatrix4(matrix: Matrix4): BufferGeometry;

    rotateX(angle: number): BufferGeometry;
    rotateY(angle: number): BufferGeometry;
    rotateZ(angle: number): BufferGeometry;
    translate(x: number, y: number, z: number): BufferGeometry;
    scale(x: number, y: number, z: number): BufferGeometry;
    lookAt(v: Vector3): void;

    center(): BufferGeometry;

    setFromPoints(points: Vector3[] | Vector2[]): BufferGeometry;

    /**
     * Computes bounding box of the geometry, updating Geometry.boundingBox attribute.
     * Bounding boxes aren't computed by default. They need to be explicitly computed, otherwise they are null.
     */
    computeBoundingBox(): void;

    /**
     * Computes bounding sphere of the geometry, updating Geometry.boundingSphere attribute.
     * Bounding spheres aren't' computed by default. They need to be explicitly computed, otherwise they are null.
     */
    computeBoundingSphere(): void;

    /**
     * Computes and adds tangent attribute to this geometry.
     */
    computeTangents(): void;

    /**
     * Computes vertex normals by averaging face normals.
     */
    computeVertexNormals(): void;

    merge(geometry: BufferGeometry, offset?: number): BufferGeometry;
    normalizeNormals(): void;

    toNonIndexed(): BufferGeometry;

    toJSON(): any;
    clone(): BufferGeometry;
    copy(source: BufferGeometry): this;

    /**
     * Disposes the object from memory.
     * You need to call this when you want the bufferGeometry removed while the application is running.
     */
    dispose(): void;

    /**
     * @deprecated Use {@link BufferGeometry#groups .groups} instead.
     */
    drawcalls: any;

    /**
     * @deprecated Use {@link BufferGeometry#groups .groups} instead.
     */
    offsets: any;

    /**
     * @deprecated Use {@link BufferGeometry#setIndex .setIndex()} instead.
     */
    addIndex(index: any): void;

    /**
     * @deprecated Use {@link BufferGeometry#addGroup .addGroup()} instead.
     */
    addDrawCall(start: any, count: any, indexOffset?: any): void;

    /**
     * @deprecated Use {@link BufferGeometry#clearGroups .clearGroups()} instead.
     */
    clearDrawCalls(): void;

    /**
     * @deprecated Use {@link BufferGeometry#setAttribute .setAttribute()} instead.
     */
    addAttribute(name: string, attribute: BufferAttribute | InterleavedBufferAttribute): BufferGeometry;
    addAttribute(name: any, array: any, itemSize: any): any;

    /**
     * @deprecated Use {@link BufferGeometry#deleteAttribute .deleteAttribute()} instead.
     */
    removeAttribute(name: string): BufferGeometry;
}

export declare class BufferGeometryLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad: (bufferGeometry: InstancedBufferGeometry | BufferGeometry) => void,
        onProgress?: (request: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadAsync(
        url: string,
        onProgress?: (event: ProgressEvent) => void,
    ): Promise<InstancedBufferGeometry | BufferGeometry>;
    parse(json: any): InstancedBufferGeometry | BufferGeometry;
}

/**
 * see {@link https://github.com/mrdoob/three.js/blob/master/examples/jsm/utils/BufferGeometryUtils.js|examples/jsm/utils/BufferGeometryUtils.js}
 */
export declare namespace BufferGeometryUtils {
    export function mergeBufferGeometries(geometries: BufferGeometry[]): BufferGeometry;
    export function computeTangents(geometry: BufferGeometry): null;
    export function mergeBufferAttributes(attributes: BufferAttribute[]): BufferAttribute;
}

export declare const ByteType: TextureDataType;

declare namespace Cache_2 {
    /**
     * @default false
     */
    let enabled: boolean;

    /**
     * @default {}
     */
    let files: any;

    function add(key: string, file: any): void;
    function get(key: string): any;
    function remove(key: string): void;
    function clear(): void;
}
export { Cache_2 as Cache }

/**
 * Abstract base class for cameras. This class should always be inherited when you build a new camera.
 */
export declare class Camera extends Object3D {
    /**
     * This constructor sets following properties to the correct type: matrixWorldInverse, projectionMatrix and projectionMatrixInverse.
     */
    constructor();

    /**
     * This is the inverse of matrixWorld. MatrixWorld contains the Matrix which has the world transform of the Camera.
     * @default new THREE.Matrix4()
     */
    matrixWorldInverse: Matrix4;

    /**
     * This is the matrix which contains the projection.
     * @default new THREE.Matrix4()
     */
    projectionMatrix: Matrix4;

    /**
     * This is the inverse of projectionMatrix.
     * @default new THREE.Matrix4()
     */
    projectionMatrixInverse: Matrix4;

    readonly isCamera: true;

    getWorldDirection(target: Vector3): Vector3;

    updateMatrixWorld(force?: boolean): void;
}

export declare class CameraHelper extends LineSegments {
    constructor(camera: Camera);

    camera: Camera;
    pointMap: { [id: string]: number[] };

    /**
     * @default 'CameraHelper'
     */
    type: string;

    update(): void;
}

export declare class CanvasTexture extends Texture {
    /**
     * @param canvas
     * @param [format=THREE.RGBAFormat]
     * @param [type=THREE.UnsignedByteType]
     * @param [mapping=THREE.Texture.DEFAULT_MAPPING]
     * @param [wrapS=THREE.ClampToEdgeWrapping]
     * @param [wrapT=THREE.ClampToEdgeWrapping]
     * @param [magFilter=THREE.LinearFilter]
     * @param [minFilter=THREE.LinearMipmapLinearFilter]
     * @param [anisotropy=1]
     * @param [encoding=THREE.LinearEncoding]
     */
    constructor(
        canvas: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap,
        mapping?: Mapping,
        wrapS?: Wrapping,
        wrapT?: Wrapping,
        magFilter?: TextureFilter,
        minFilter?: TextureFilter,
        format?: PixelFormat,
        type?: TextureDataType,
        anisotropy?: number,
    );

    readonly isCanvasTexture: true;
}

export declare class CatmullRomCurve3 extends Curve<Vector3> {
    /**
     * @param [points=[]]
     * @param [closed=false]
     * @param [curveType='centripetal']
     * @param [tension=0.5]
     */
    constructor(points?: Vector3[], closed?: boolean, curveType?: string, tension?: number);

    /**
     * @default 'CatmullRomCurve3'
     */
    type: string;

    /**
     * @default []
     */
    points: Vector3[];
}

export declare const CineonToneMapping: ToneMapping;

declare class CircleGeometry extends BufferGeometry {
    /**
     * @param [radius=1]
     * @param [segments=8]
     * @param [thetaStart=0]
     * @param [thetaLength=Math.PI * 2]
     */
    constructor(radius?: number, segments?: number, thetaStart?: number, thetaLength?: number);

    /**
     * @default 'CircleGeometry'
     */
    type: string;

    parameters: {
        radius: number;
        segments: number;
        thetaStart: number;
        thetaLength: number;
    };
}
export { CircleGeometry as CircleBufferGeometry }
export { CircleGeometry }

export declare const ClampToEdgeWrapping: Wrapping;

/**
 * Object for keeping track of time.
 *
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Clock.js|src/core/Clock.js}
 */
export declare class Clock {
    /**
     * @param [autoStart=true] Automatically start the clock.
     */
    constructor(autoStart?: boolean);

    /**
     * If set, starts the clock automatically when the first update is called.
     * @default true
     */
    autoStart: boolean;

    /**
     * When the clock is running, It holds the starttime of the clock.
     * This counted from the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.
     * @default 0
     */
    startTime: number;

    /**
     * When the clock is running, It holds the previous time from a update.
     * This counted from the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.
     * @default 0
     */
    oldTime: number;

    /**
     * When the clock is running, It holds the time elapsed between the start of the clock to the previous update.
     * This parameter is in seconds of three decimal places.
     * @default 0
     */
    elapsedTime: number;

    /**
     * This property keeps track whether the clock is running or not.
     * @default false
     */
    running: boolean;

    /**
     * Starts clock.
     */
    start(): void;

    /**
     * Stops clock.
     */
    stop(): void;

    /**
     * Get the seconds passed since the clock started.
     */
    getElapsedTime(): number;

    /**
     * Get the seconds passed since the last call to this method.
     */
    getDelta(): number;
}

export declare function cloneUniforms(uniforms_src: any): any;

/**
 * Represents a color. See also {@link ColorUtils}.
 *
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/math/Color.js|src/math/Color.js}
 *
 * @example
 * const color = new THREE.Color( 0xff0000 );
 */
export declare class Color {
    constructor(color?: Color | string | number);
    constructor(r: number, g: number, b: number);

    readonly isColor: true;

    /**
     * Red channel value between 0 and 1. Default is 1.
     * @default 1
     */
    r: number;

    /**
     * Green channel value between 0 and 1. Default is 1.
     * @default 1
     */
    g: number;

    /**
     * Blue channel value between 0 and 1. Default is 1.
     * @default 1
     */
    b: number;

    set(color: Color | string | number): Color;
    setScalar(scalar: number): Color;
    setHex(hex: number): Color;

    /**
     * Sets this color from RGB values.
     * @param r Red channel value between 0 and 1.
     * @param g Green channel value between 0 and 1.
     * @param b Blue channel value between 0 and 1.
     */
    setRGB(r: number, g: number, b: number): Color;

    /**
     * Sets this color from HSL values.
     * Based on MochiKit implementation by Bob Ippolito.
     *
     * @param h Hue channel value between 0 and 1.
     * @param s Saturation value channel between 0 and 1.
     * @param l Value channel value between 0 and 1.
     */
    setHSL(h: number, s: number, l: number): Color;

    /**
     * Sets this color from a CSS context style string.
     * @param contextStyle Color in CSS context style format.
     */
    setStyle(style: string): Color;

    /**
     * Sets this color from a color name.
     * Faster than {@link Color#setStyle .setStyle()} method if you don't need the other CSS-style formats.
     * @param style Color name in X11 format.
     */
    setColorName(style: string): Color;

    /**
     * Clones this color.
     */
    clone(): Color;

    /**
     * Copies given color.
     * @param color Color to copy.
     */
    copy(color: Color): this;

    /**
     * Copies given color making conversion from gamma to linear space.
     * @param color Color to copy.
     */
    copyGammaToLinear(color: Color, gammaFactor?: number): Color;

    /**
     * Copies given color making conversion from linear to gamma space.
     * @param color Color to copy.
     */
    copyLinearToGamma(color: Color, gammaFactor?: number): Color;

    /**
     * Converts this color from gamma to linear space.
     */
    convertGammaToLinear(gammaFactor?: number): Color;

    /**
     * Converts this color from linear to gamma space.
     */
    convertLinearToGamma(gammaFactor?: number): Color;

    /**
     * Copies given color making conversion from sRGB to linear space.
     * @param color Color to copy.
     */
    copySRGBToLinear(color: Color): Color;

    /**
     * Copies given color making conversion from linear to sRGB space.
     * @param color Color to copy.
     */
    copyLinearToSRGB(color: Color): Color;

    /**
     * Converts this color from sRGB to linear space.
     */
    convertSRGBToLinear(): Color;

    /**
     * Converts this color from linear to sRGB space.
     */
    convertLinearToSRGB(): Color;

    /**
     * Returns the hexadecimal value of this color.
     */
    getHex(): number;

    /**
     * Returns the string formated hexadecimal value of this color.
     */
    getHexString(): string;

    getHSL(target: HSL): HSL;

    /**
     * Returns the value of this color in CSS context style.
     * Example: rgb(r, g, b)
     */
    getStyle(): string;

    offsetHSL(h: number, s: number, l: number): this;

    add(color: Color): this;
    addColors(color1: Color, color2: Color): this;
    addScalar(s: number): this;
    sub(color: Color): this;
    multiply(color: Color): this;
    multiplyScalar(s: number): this;
    lerp(color: Color, alpha: number): this;
    lerpColors(color1: Color, color2: Color, alpha: number): this;
    lerpHSL(color: Color, alpha: number): this;
    equals(color: Color): boolean;

    /**
     * Sets this color's red, green and blue value from the provided array or array-like.
     * @param array the source array or array-like.
     * @param offset (optional) offset into the array-like. Default is 0.
     */
    fromArray(array: number[] | ArrayLike<number>, offset?: number): this;

    /**
     * Returns an array [red, green, blue], or copies red, green and blue into the provided array.
     * @param array (optional) array to store the color to. If this is not provided, a new array will be created.
     * @param offset (optional) optional offset into the array.
     * @return The created or provided array.
     */
    toArray(array?: number[], offset?: number): number[];

    /**
     * Copies red, green and blue into the provided array-like.
     * @param array array-like to store the color to.
     * @param offset (optional) optional offset into the array-like.
     * @return The provided array-like.
     */
    toArray(xyz: ArrayLike<number>, offset?: number): ArrayLike<number>;

    fromBufferAttribute(attribute: BufferAttribute, index: number): this;

    /**
     * List of X11 color names.
     */
    static NAMES: Record<string, number>;
}

export declare class ColorKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: any[], values: any[], interpolation?: InterpolationModes);

    /**
     * @default 'color'
     */
    ValueTypeName: string;
}

export declare enum Combine {}

export declare enum CompressedPixelFormat {}

export declare class CompressedTexture extends Texture {
    /**
     * @param mipmaps
     * @param width
     * @param height
     * @param [format=THREE.RGBAFormat]
     * @param [type=THREE.UnsignedByteType]
     * @param [mapping=THREE.Texture.DEFAULT_MAPPING]
     * @param [wrapS=THREE.ClampToEdgeWrapping]
     * @param [wrapT=THREE.ClampToEdgeWrapping]
     * @param [magFilter=THREE.LinearFilter]
     * @param [minFilter=THREE.LinearMipmapLinearFilter]
     * @param [anisotropy=1]
     * @param [encoding=THREE.LinearEncoding]
     */
    constructor(
        mipmaps: ImageData[],
        width: number,
        height: number,
        format?: CompressedPixelFormat,
        type?: TextureDataType,
        mapping?: Mapping,
        wrapS?: Wrapping,
        wrapT?: Wrapping,
        magFilter?: TextureFilter,
        minFilter?: TextureFilter,
        anisotropy?: number,
        encoding?: TextureEncoding,
    );

    image: { width: number; height: number };

    mipmaps: ImageData[];

    /**
     * @default false
     */
    flipY: boolean;

    /**
     * @default false
     */
    generateMipmaps: boolean;

    readonly isCompressedTexture: true;
}

export declare class CompressedTextureLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad: (texture: CompressedTexture) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): CompressedTexture;

    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<CompressedTexture>;
}

declare class ConeGeometry extends CylinderGeometry {
    /**
     * @param [radius=1] — Radius of the cone base.
     * @param [height=1] — Height of the cone.
     * @param [radialSegments=8] — Number of segmented faces around the circumference of the cone.
     * @param [heightSegments=1] — Number of rows of faces along the height of the cone.
     * @param [openEnded=false] — A Boolean indicating whether the base of the cone is open or capped.
     * @param [thetaStart=0]
     * @param [thetaLength=Math.PI * 2]
     */
    constructor(
        radius?: number,
        height?: number,
        radialSegments?: number,
        heightSegments?: number,
        openEnded?: boolean,
        thetaStart?: number,
        thetaLength?: number,
    );

    /**
     * @default 'ConeGeometry'
     */
    type: string;
}
export { ConeGeometry as ConeBufferGeometry }
export { ConeGeometry }

export declare interface Constructor<T = object> {
    new (...args: any[]): T;
    prototype: T;
}

export declare class CubeCamera extends Object3D {
    constructor(near: number, far: number, renderTarget: WebGLCubeRenderTarget);

    type: 'CubeCamera';

    renderTarget: WebGLCubeRenderTarget;

    update(renderer: WebGLRenderer, scene: Scene): void;
}

export declare const CubeReflectionMapping: Mapping;

export declare const CubeRefractionMapping: Mapping;

export declare class CubeTexture extends Texture {
    /**
     * @param [images=[]]
     * @param [mapping=THREE.CubeReflectionMapping]
     * @param [wrapS=THREE.ClampToEdgeWrapping]
     * @param [wrapT=THREE.ClampToEdgeWrapping]
     * @param [magFilter=THREE.LinearFilter]
     * @param [minFilter=THREE.LinearMipmapLinearFilter]
     * @param [format=THREE.RGBFormat]
     * @param [type=THREE.UnsignedByteType]
     * @param [anisotropy=1]
     * @param [encoding=THREE.LinearEncoding]
     */
    constructor(
        images?: any[], // HTMLImageElement or HTMLCanvasElement
        mapping?: Mapping,
        wrapS?: Wrapping,
        wrapT?: Wrapping,
        magFilter?: TextureFilter,
        minFilter?: TextureFilter,
        format?: PixelFormat,
        type?: TextureDataType,
        anisotropy?: number,
        encoding?: TextureEncoding,
    );

    images: any; // returns and sets the value of Texture.image in the codde ?

    /**
     * @default false
     */
    flipY: boolean;

    readonly isCubeTexture: true;
}

export declare class CubeTextureLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        urls: string[],
        onLoad?: (texture: CubeTexture) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): CubeTexture;

    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<CubeTexture>;
}

export declare const CubeUVReflectionMapping: Mapping;

export declare const CubeUVRefractionMapping: Mapping;

export declare class CubicBezierCurve extends Curve<Vector2> {
    constructor(v0: Vector2, v1: Vector2, v2: Vector2, v3: Vector2);

    /**
     * @default 'CubicBezierCurve'
     */
    type: string;

    /**
     * @default new THREE.Vector2()
     */
    v0: Vector2;

    /**
     * @default new THREE.Vector2()
     */
    v1: Vector2;

    /**
     * @default new THREE.Vector2()
     */
    v2: Vector2;

    /**
     * @default new THREE.Vector2()
     */
    v3: Vector2;
}

export declare class CubicBezierCurve3 extends Curve<Vector3> {
    constructor(v0: Vector3, v1: Vector3, v2: Vector3, v3: Vector3);

    /**
     * @default 'CubicBezierCurve3'
     */
    type: string;

    /**
     * @default new THREE.Vector3()
     */
    v0: Vector3;

    /**
     * @default new THREE.Vector3()
     */
    v1: Vector3;

    /**
     * @default new THREE.Vector3()
     */
    v2: Vector3;

    /**
     * @default new THREE.Vector3()
     */
    v3: Vector3;
}

export declare class CubicInterpolant extends Interpolant {
    constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any);

    interpolate_(i1: number, t0: number, t: number, t1: number): any;
}

export declare enum CullFace {}

export declare const CullFaceBack: CullFace;

export declare const CullFaceFront: CullFace;

export declare const CullFaceFrontBack: CullFace;

export declare const CullFaceNone: CullFace;

/**
 * An extensible curve object which contains methods for interpolation
 * class Curve<T extends Vector>
 */
export declare class Curve<T extends Vector> {
    /**
     * @default 'Curve'
     */
    type: string;

    /**
     * This value determines the amount of divisions when calculating the cumulative segment lengths of a curve via .getLengths.
     * To ensure precision when using methods like .getSpacedPoints, it is recommended to increase .arcLengthDivisions if the curve is very large.
     * @default 200
     */
    arcLengthDivisions: number;

    /**
     * Returns a vector for point t of the curve where t is between 0 and 1
     * getPoint(t: number, optionalTarget?: T): T;
     */
    getPoint(t: number, optionalTarget?: T): T;

    /**
     * Returns a vector for point at relative position in curve according to arc length
     * getPointAt(u: number, optionalTarget?: T): T;
     */
    getPointAt(u: number, optionalTarget?: T): T;

    /**
     * Get sequence of points using getPoint( t )
     * getPoints(divisions?: number): T[];
     */
    getPoints(divisions?: number): T[];

    /**
     * Get sequence of equi-spaced points using getPointAt( u )
     * getSpacedPoints(divisions?: number): T[];
     */
    getSpacedPoints(divisions?: number): T[];

    /**
     * Get total curve arc length
     */
    getLength(): number;

    /**
     * Get list of cumulative segment lengths
     */
    getLengths(divisions?: number): number[];

    /**
     * Update the cumlative segment distance cache
     */
    updateArcLengths(): void;

    /**
     * Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equi distance
     */
    getUtoTmapping(u: number, distance: number): number;

    /**
     * Returns a unit vector tangent at t. If the subclassed curve do not implement its tangent derivation, 2 points a
     * small delta apart will be used to find its gradient which seems to give a reasonable approximation
     * getTangent(t: number, optionalTarget?: T): T;
     */
    getTangent(t: number, optionalTarget?: T): T;

    /**
     * Returns tangent at equidistance point u on the curve
     * getTangentAt(u: number, optionalTarget?: T): T;
     */
    getTangentAt(u: number, optionalTarget?: T): T;

    /**
     * Generate Frenet frames of the curve
     */
    computeFrenetFrames(
        segments: number,
        closed?: boolean,
    ): {
        tangents: Vector3[];
        normals: Vector3[];
        binormals: Vector3[];
    };

    clone(): Curve<T>;
    copy(source: Curve<T>): this;
    toJSON(): object;
    fromJSON(json: object): this;

    /**
     * @deprecated since r84.
     */
    static create(constructorFunc: () => void, getPointFunc: () => void): () => void;
}

export declare class CurvePath<T extends Vector> extends Curve<T> {
    constructor();

    /**
     * @default 'CurvePath'
     */
    type: string;

    /**
     * @default []
     */
    curves: Array<Curve<T>>;

    /**
     * @default false
     */
    autoClose: boolean;

    add(curve: Curve<T>): void;
    closePath(): void;
    getPoint(t: number): T;
    getCurveLengths(): number[];
}

export declare namespace CurveUtils {
    export function tangentQuadraticBezier(t: number, p0: number, p1: number, p2: number): number;
    export function tangentCubicBezier(t: number, p0: number, p1: number, p2: number, p3: number): number;
    export function tangentSpline(t: number, p0: number, p1: number, p2: number, p3: number): number;
    export function interpolate(p0: number, p1: number, p2: number, p3: number, t: number): number;
}

export declare const CustomBlending: Blending;

declare class CylinderGeometry extends BufferGeometry {
    /**
     * @param [radiusTop=1] — Radius of the cylinder at the top.
     * @param [radiusBottom=1] — Radius of the cylinder at the bottom.
     * @param [height=1] — Height of the cylinder.
     * @param [radialSegments=8] — Number of segmented faces around the circumference of the cylinder.
     * @param [heightSegments=1] — Number of rows of faces along the height of the cylinder.
     * @param [openEnded=false] - A Boolean indicating whether or not to cap the ends of the cylinder.
     * @param [thetaStart=0]
     * @param [thetaLength=Math.PI * 2]
     */
    constructor(
        radiusTop?: number,
        radiusBottom?: number,
        height?: number,
        radialSegments?: number,
        heightSegments?: number,
        openEnded?: boolean,
        thetaStart?: number,
        thetaLength?: number,
    );

    /**
     * @default 'CylinderGeometry'
     */
    type: string;

    parameters: {
        radiusTop: number;
        radiusBottom: number;
        height: number;
        radialSegments: number;
        heightSegments: number;
        openEnded: boolean;
        thetaStart: number;
        thetaLength: number;
    };
}
export { CylinderGeometry as CylinderBufferGeometry }
export { CylinderGeometry }

export declare class Cylindrical {
    constructor(radius?: number, theta?: number, y?: number);

    /**
     * @default 1
     */
    radius: number;

    /**
     * @default 0
     */
    theta: number;

    /**
     * @default 0
     */
    y: number;

    clone(): Cylindrical;
    copy(other: Cylindrical): this;
    set(radius: number, theta: number, y: number): this;
    setFromVector3(vec3: Vector3): this;
    setFromCartesianCoords(x: number, y: number, z: number): this;
}

export declare class DataTexture extends Texture {
    /**
     * @param data
     * @param width
     * @param height
     * @param [format=THREE.RGBAFormat]
     * @param [type=THREE.UnsignedByteType]
     * @param [mapping=THREE.Texture.DEFAULT_MAPPING]
     * @param [wrapS=THREE.ClampToEdgeWrapping]
     * @param [wrapT=THREE.ClampToEdgeWrapping]
     * @param [magFilter=THREE.NearestFilter]
     * @param [minFilter=THREE.NearestFilter]
     * @param [anisotropy=1]
     * @param [encoding=THREE.LinearEncoding]
     */
    constructor(
        data: BufferSource,
        width: number,
        height: number,
        format?: PixelFormat,
        type?: TextureDataType,
        mapping?: Mapping,
        wrapS?: Wrapping,
        wrapT?: Wrapping,
        magFilter?: TextureFilter,
        minFilter?: TextureFilter,
        anisotropy?: number,
        encoding?: TextureEncoding,
    );

    image: ImageData;

    /**
     * @default false
     */
    flipY: boolean;

    /**
     * @default false
     */
    generateMipmaps: boolean;

    /**
     * @default 1
     */
    unpackAlignment: number;

    /**
     * @default THREE.DepthFormat
     */
    format: PixelFormat;

    readonly isDataTexture: true;
}

export declare class DataTexture2DArray extends Texture {
    constructor(data?: BufferSource, width?: number, height?: number, depth?: number);

    /**
     * @default THREE.NearestFilter
     */
    magFilter: TextureFilter;

    /**
     * @default THREE.NearestFilter
     */
    minFilter: TextureFilter;

    /**
     * @default THREE.ClampToEdgeWrapping
     */
    wrapR: boolean;

    /**
     * @default false
     */
    flipY: boolean;

    /**
     * @default false
     */
    generateMipmaps: boolean;

    readonly isDataTexture2DArray: true;
}

export declare class DataTexture3D extends Texture {
    constructor(data: BufferSource, width: number, height: number, depth: number);

    /**
     * @default THREE.NearestFilter
     */
    magFilter: TextureFilter;

    /**
     * @default THREE.NearestFilter
     */
    minFilter: TextureFilter;

    /**
     * @default THREE.ClampToEdgeWrapping
     */
    wrapR: boolean;

    /**
     * @default false
     */
    flipY: boolean;

    /**
     * @default false
     */
    generateMipmaps: boolean;

    readonly isDataTexture3D: true;
}

export declare class DataTextureLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad: (dataTexture: DataTexture) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): DataTexture;

    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<DataTexture>;
}

export declare namespace DataUtils {
    export function toHalfFloat(val: number): number;
}

export declare const DecrementStencilOp: StencilOp;

export declare const DecrementWrapStencilOp: StencilOp;

export declare const DefaultLoadingManager: LoadingManager;

export declare const DepthFormat: PixelFormat;

export declare enum DepthModes {}

export declare enum DepthPackingStrategies {}

export declare const DepthStencilFormat: PixelFormat;

export declare class DepthTexture extends Texture {
    /**
     * @param width
     * @param height
     * @param type
     * @param [mapping=THREE.Texture.DEFAULT_MAPPING]
     * @param [wrapS=THREE.ClampToEdgeWrapping]
     * @param [wrapT=THREE.ClampToEdgeWrapping]
     * @param [magFilter=THREE.NearestFilter]
     * @param [minFilter=THREE.NearestFilter]
     * @param [anisotropy=1]
     */
    constructor(
        width: number,
        height: number,
        type?: TextureDataType,
        mapping?: Mapping,
        wrapS?: Wrapping,
        wrapT?: Wrapping,
        magFilter?: TextureFilter,
        minFilter?: TextureFilter,
        anisotropy?: number,
    );

    image: { width: number; height: number };

    /**
     * @default false
     */
    flipY: boolean;

    /**
     * @default false
     */
    generateMipmaps: boolean;

    readonly isDepthTexture: true;
}

/**
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/DirectionalLight.js|src/lights/DirectionalLight.js}
 *
 * @example
 * // White directional light at half intensity shining from the top.
 * const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
 * directionalLight.position.set( 0, 1, 0 );
 * scene.add( directionalLight );
 */
export declare class DirectionalLight extends Light {
    constructor(color?: Color | string | number, intensity?: number);

    /**
     * @default 'DirectionalLight'
     */
    type: string;

    /**
     * @default THREE.Object3D.DefaultUp
     */
    position: Vector3;

    /**
     * Target used for shadow camera orientation.
     * @default new THREE.Object3D()
     */
    target: Object3D;

    /**
     * Light's intensity.
     * @default 1
     */
    intensity: number;

    /**
     * @default new THREE.DirectionalLightShadow()
     */
    shadow: DirectionalLightShadow;
    readonly isDirectionalLight: true;
}

export declare class DirectionalLightHelper extends Object3D {
    /**
     * @param light
     * @param [size=1]
     * @param color
     */
    constructor(light: DirectionalLight, size?: number, color?: Color | string | number);

    light: DirectionalLight;
    lightPlane: Line;
    targetLine: Line;

    /**
     * @default undefined
     */
    color: Color | string | number | undefined;
    matrix: Matrix4;

    /**
     * @default false
     */
    matrixAutoUpdate: boolean;

    dispose(): void;
    update(): void;
}

export declare class DirectionalLightShadow extends LightShadow {
    camera: OrthographicCamera;
    readonly isDirectionalLightShadow: true;
}

export declare class DiscreteInterpolant extends Interpolant {
    constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any);

    interpolate_(i1: number, t0: number, t: number, t1: number): any;
}

declare class DodecahedronGeometry extends PolyhedronGeometry {
    /**
     * @param [radius=1]
     * @param [detail=0]
     */
    constructor(radius?: number, detail?: number);

    /**
     * @default 'DodecahedronGeometry'
     */
    type: string;
}
export { DodecahedronGeometry as DodecahedronBufferGeometry }
export { DodecahedronGeometry }

declare interface DOMPointInit_2 {
    w?: number;
    x?: number;
    y?: number;
    z?: number;
}
export { DOMPointInit_2 as DOMPointInit }

export declare const DoubleSide: Side;

export declare const DstAlphaFactor: BlendingDstFactor;

export declare const DstColorFactor: BlendingDstFactor;

export declare const DynamicCopyUsage: Usage;

export declare const DynamicDrawUsage: Usage;

export declare const DynamicReadUsage: Usage;

export declare class EdgesGeometry extends BufferGeometry {
    /**
     * @param geometry
     * @param [thresholdAngle=1]
     */
    constructor(geometry: BufferGeometry, thresholdAngle?: number);

    /**
     * @default 'EdgesGeometry'
     */
    type: string;

    parameters: {
        thresholdAngle: number;
    };
}

export declare class EllipseCurve extends Curve<Vector2> {
    constructor(
        aX: number,
        aY: number,
        xRadius: number,
        yRadius: number,
        aStartAngle: number,
        aEndAngle: number,
        aClockwise: boolean,
        aRotation: number,
    );

    /**
     * @default 'EllipseCurve'
     */
    type: string;

    /**
     * @default 0
     */
    aX: number;

    /**
     * @default 0
     */
    aY: number;

    /**
     * @default 1
     */
    xRadius: number;

    /**
     * @default 1
     */
    yRadius: number;

    /**
     * @default 0
     */
    aStartAngle: number;

    /**
     * @default 2 * Math.PI
     */
    aEndAngle: number;

    /**
     * @default false
     */
    aClockwise: boolean;

    /**
     * @default 0
     */
    aRotation: number;
}

export declare const EqualDepth: DepthModes;

export declare const EqualStencilFunc: StencilFunc;

export declare const EquirectangularReflectionMapping: Mapping;

export declare const EquirectangularRefractionMapping: Mapping;

export declare class Euler {
    constructor(x?: number, y?: number, z?: number, order?: string);

    /**
     * @default 0
     */
    x: number;

    /**
     * @default 0
     */
    y: number;

    /**
     * @default 0
     */
    z: number;

    /**
     * @default THREE.Euler.DefaultOrder
     */
    order: string;
    readonly isEuler: true;

    _onChangeCallback: () => void;

    set(x: number, y: number, z: number, order?: string): Euler;
    clone(): Euler;
    copy(euler: Euler): this;
    setFromRotationMatrix(m: Matrix4, order?: string): Euler;
    setFromQuaternion(q: Quaternion, order?: string): Euler;
    setFromVector3(v: Vector3, order?: string): Euler;
    reorder(newOrder: string): Euler;
    equals(euler: Euler): boolean;
    fromArray(xyzo: any[]): Euler;
    toArray(array?: number[], offset?: number): number[];
    toVector3(optionalResult?: Vector3): Vector3;
    _onChange(callback: () => void): this;

    static RotationOrders: string[];
    static DefaultOrder: string;
}

/**
 * Event object.
 */
declare interface Event_2 {
    type: string;
    target?: any;
    [attachment: string]: any;
}
export { Event_2 as Event }

/**
 * JavaScript events for custom objects
 *
 * @source src/core/EventDispatcher.js
 */
export declare class EventDispatcher {
    /**
     * Creates eventDispatcher object. It needs to be call with '.call' to add the functionality to an object.
     */
    constructor();

    /**
     * Adds a listener to an event type.
     * @param type The type of event to listen to.
     * @param listener The function that gets called when the event is fired.
     */
    addEventListener(type: string, listener: (event: Event_2) => void): void;

    /**
     * Checks if listener is added to an event type.
     * @param type The type of event to listen to.
     * @param listener The function that gets called when the event is fired.
     */
    hasEventListener(type: string, listener: (event: Event_2) => void): boolean;

    /**
     * Removes a listener from an event type.
     * @param type The type of the listener that gets removed.
     * @param listener The listener function that gets removed.
     */
    removeEventListener(type: string, listener: (event: Event_2) => void): void;

    /**
     * Fire an event type.
     * @param type The type of event that gets fired.
     */
    dispatchEvent(event: { type: string; [attachment: string]: any }): void;
}

declare class ExtrudeGeometry extends BufferGeometry {
    constructor(shapes: Shape | Shape[], options?: ExtrudeGeometryOptions);

    /**
     * @default 'ExtrudeGeometry'
     */
    type: string;

    addShapeList(shapes: Shape[], options?: any): void;
    addShape(shape: Shape, options?: any): void;
}
export { ExtrudeGeometry as ExtrudeBufferGeometry }
export { ExtrudeGeometry }

export declare interface ExtrudeGeometryOptions {
    /**
     * @default 12
     */
    curveSegments?: number;
    /**
     * @default 1
     */
    steps?: number;
    /**
     * @default 100
     */
    depth?: number;
    /**
     * @default true
     */
    bevelEnabled?: boolean;
    /**
     * @default 6
     */
    bevelThickness?: number;
    bevelSize?: number;
    /**
     * @default 0
     */
    bevelOffset?: number;
    /**
     * @default 3
     */
    bevelSegments?: number;
    extrudePath?: Curve<Vector3>;
    UVGenerator?: UVGenerator;
}

export declare interface Face {
    a: number;
    b: number;
    c: number;
    normal: Vector3;
    materialIndex: number;
}

export declare class FileLoader extends Loader {
    constructor(manager?: LoadingManager);

    mimeType: undefined | MimeType;
    responseType: undefined | string;

    load(
        url: string,
        onLoad?: (response: string | ArrayBuffer) => void,
        onProgress?: (request: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): any;
    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<string | ArrayBuffer>;
    setMimeType(mimeType: MimeType): FileLoader;
    setResponseType(responseType: string): FileLoader;
}

export declare const FlatShading: Shading;

export declare class Float16BufferAttribute extends BufferAttribute {
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * @deprecated THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead.
 */
export declare class Float32Attribute extends BufferAttribute {
    constructor(array: any, itemSize: number);
}

export declare class Float32BufferAttribute extends BufferAttribute {
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * @deprecated THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead.
 */
export declare class Float64Attribute extends BufferAttribute {
    constructor(array: any, itemSize: number);
}

export declare class Float64BufferAttribute extends BufferAttribute {
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

export declare const FloatType: TextureDataType;

/**
 * This class contains the parameters that define linear fog, i.e., that grows linearly denser with the distance.
 */
export declare class Fog implements FogBase {
    constructor(color: Color | number | string, near?: number, far?: number);

    /**
     * @default ''
     */
    name: string;

    /**
     * Fog color.
     */
    color: Color;

    /**
     * The minimum distance to start applying fog. Objects that are less than 'near' units from the active camera won't be affected by fog.
     * @default 1
     */
    near: number;

    /**
     * The maximum distance at which fog stops being calculated and applied. Objects that are more than 'far' units away from the active camera won't be affected by fog.
     * @default 1000
     */
    far: number;

    readonly isFog: true;

    clone(): Fog;
    toJSON(): any;
}

export declare interface FogBase {
    name: string;
    color: Color;
    clone(): FogBase;
    toJSON(): any;
}

/**
 * This class contains the parameters that define linear fog, i.e., that grows exponentially denser with the distance.
 */
export declare class FogExp2 implements FogBase {
    constructor(hex: number | string, density?: number);

    /**
     * @default ''
     */
    name: string;

    color: Color;

    /**
     * Defines how fast the fog will grow dense.
     * @default 0.00025
     */
    density: number;

    readonly isFogExp2: true;

    clone(): FogExp2;
    toJSON(): any;
}

export declare class Font {
    constructor(jsondata: any);

    /**
     * @default 'Font'
     */
    type: string;

    data: string;

    generateShapes(text: string, size: number): Shape[];
}

export declare class FontLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad?: (responseFont: Font) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<Font>;
    parse(json: any): Font;
}

export declare const FrontSide: Side;

/**
 * Frustums are used to determine what is inside the camera's field of view. They help speed up the rendering process.
 */
export declare class Frustum {
    constructor(p0?: Plane, p1?: Plane, p2?: Plane, p3?: Plane, p4?: Plane, p5?: Plane);

    /**
     * Array of 6 vectors.
     */
    planes: Plane[];

    set(p0: Plane, p1: Plane, p2: Plane, p3: Plane, p4: Plane, p5: Plane): Frustum;
    clone(): Frustum;
    copy(frustum: Frustum): this;
    setFromProjectionMatrix(m: Matrix4): this;
    intersectsObject(object: Object3D): boolean;
    intersectsSprite(sprite: Sprite): boolean;
    intersectsSphere(sphere: Sphere): boolean;
    intersectsBox(box: Box3): boolean;
    containsPoint(point: Vector3): boolean;
}

export declare const GammaEncoding: TextureEncoding;

/**
 * @deprecated
 */
export declare namespace GeometryUtils {
    /**
     * @deprecated Use {@link Geometry#merge geometry.merge( geometry2, matrix, materialIndexOffset )} instead.
     */
    export function merge(geometry1: any, geometry2: any, materialIndexOffset?: any): any;
    /**
     * @deprecated Use {@link Geometry#center geometry.center()} instead.
     */
    export function center(geometry: any): any;
}

/**
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/core/GLBufferAttribute.js|src/core/GLBufferAttribute.js}
 */

export declare class GLBufferAttribute {
    constructor(buffer: WebGLBuffer, type: number, itemSize: number, elementSize: 1 | 2 | 4, count: number);

    buffer: WebGLBuffer;
    type: number;
    itemSize: number;
    elementSize: 1 | 2 | 4;
    count: number;
    version: number;

    readonly isGLBufferAttribute: true;

    set needsUpdate(value: boolean);

    setBuffer(buffer: WebGLBuffer): this;
    setType(type: number, elementSize: 1 | 2 | 4): this;
    setItemSize(itemSize: number): this;
    setCount(count: number): this;
}

export declare const GLSL1: GLSLVersion;

export declare const GLSL3: GLSLVersion;

export declare enum GLSLVersion {}

export declare const GreaterDepth: DepthModes;

export declare const GreaterEqualDepth: DepthModes;

export declare const GreaterEqualStencilFunc: StencilFunc;

export declare const GreaterStencilFunc: StencilFunc;

export declare class GridHelper extends LineSegments {
    /**
     * @param [size=10]
     * @param [divisions=10]
     * @param [color1=0x444444]
     * @param [color2=0x888888]
     */
    constructor(size?: number, divisions?: number, color1?: Color | string | number, color2?: Color | string | number);

    /**
     * @default 'GridHelper'
     */
    type: string;

    /**
     * @deprecated Colors should be specified in the constructor.
     */
    setColors(color1?: Color | string | number, color2?: Color | string | number): void;
}

export declare class Group extends Object3D {
    constructor();
    type: 'Group';
    readonly isGroup: true;
}

export declare const HalfFloatType: TextureDataType;

export declare class HemisphereLight extends Light {
    /**
     * @param skyColor
     * @param groundColor
     * @param [intensity=1]
     */
    constructor(skyColor?: Color | string | number, groundColor?: Color | string | number, intensity?: number);

    /**
     * @default 'HemisphereLight'
     */
    type: string;

    /**
     * @default THREE.Object3D.DefaultUp
     */
    position: Vector3;

    groundColor: Color;

    readonly isHemisphereLight: true;
}

export declare class HemisphereLightHelper extends Object3D {
    constructor(light: HemisphereLight, size: number, color?: Color | number | string);

    light: HemisphereLight;
    matrix: Matrix4;
    matrixAutoUpdate: boolean;
    material: MeshBasicMaterial;

    color: Color | string | number | undefined;

    dispose(): void;
    update(): void;
}

export declare class HemisphereLightProbe extends LightProbe {
    constructor(skyColor?: Color | string | number, groundColor?: Color | string | number, intensity?: number);

    readonly isHemisphereLightProbe: true;
}

export declare interface HSL {
    h: number;
    s: number;
    l: number;
}

declare class IcosahedronGeometry extends PolyhedronGeometry {
    /**
     * @param [radius=1]
     * @param [detail=0]
     */
    constructor(radius?: number, detail?: number);

    /**
     * @default 'IcosahedronGeometry'
     */
    type: string;
}
export { IcosahedronGeometry as IcosahedronBufferGeometry }
export { IcosahedronGeometry }

export declare class ImageBitmapLoader extends Loader {
    constructor(manager?: LoadingManager);

    /**
     * @default { premultiplyAlpha: 'none' }
     */
    options: undefined | object;

    readonly isImageBitmapLoader: true;

    setOptions(options: object): ImageBitmapLoader;
    load(
        url: string,
        onLoad?: (response: ImageBitmap) => void,
        onProgress?: (request: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): any;

    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<ImageBitmap>;
}

/**
 * A loader for loading an image.
 * Unlike other loaders, this one emits events instead of using predefined callbacks. So if you're interested in getting notified when things happen, you need to add listeners to the object.
 */
export declare class ImageLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad?: (image: HTMLImageElement) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): HTMLImageElement;

    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<HTMLImageElement>;
}

export declare namespace ImageUtils {
    export function getDataURL(image: any): string;

    /**
     * @deprecated
     */
    let crossOrigin: string;

    /**
     * @deprecated Use {@link TextureLoader THREE.TextureLoader()} instead.
     */
    export function loadTexture(
        url: string,
        mapping?: Mapping,
        onLoad?: (texture: Texture) => void,
        onError?: (message: string) => void,
    ): Texture;

    /**
     * @deprecated Use {@link CubeTextureLoader THREE.CubeTextureLoader()} instead.
     */
    export function loadTextureCube(
        array: string[],
        mapping?: Mapping,
        onLoad?: (texture: Texture) => void,
        onError?: (message: string) => void,
    ): Texture;
}

export declare class ImmediateRenderObject extends Object3D {
    constructor(material: Material);

    readonly isImmediateRenderObject: true;

    material: Material;

    /**
     * @default false
     */
    hasPositions: boolean;

    /**
     * @default false
     */
    hasNormals: boolean;

    /**
     * @default false
     */
    hasColors: boolean;

    /**
     * @default false
     */
    hasUvs: boolean;

    /**
     * @default null
     */
    positionArray: null | Float32Array;

    /**
     * @default null
     */
    normalArray: null | Float32Array;

    /**
     * @default null
     */
    colorArray: null | Float32Array;

    /**
     * @default null
     */
    uvArray: null | Float32Array;

    /**
     * @default 0
     */
    count: number;

    render(renderCallback: () => void): void;
}

export declare const IncrementStencilOp: StencilOp;

export declare const IncrementWrapStencilOp: StencilOp;

/**
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedBufferAttribute.js|src/core/InstancedBufferAttribute.js}
 */
export declare class InstancedBufferAttribute extends BufferAttribute {
    constructor(array: ArrayLike<number>, itemSize: number, normalized?: boolean, meshPerAttribute?: number);

    /**
     * @default 1
     */
    meshPerAttribute: number;
}

/**
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedBufferGeometry.js|src/core/InstancedBufferGeometry.js}
 */
export declare class InstancedBufferGeometry extends BufferGeometry {
    constructor();

    /**
     * @default 'InstancedBufferGeometry
     */
    type: string;

    isInstancedBufferGeometry: boolean;

    groups: Array<{ start: number; count: number; instances: number }>;

    /**
     * @default Infinity
     */
    instanceCount: number;

    addGroup(start: number, count: number, instances: number): void;
}

/**
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedInterleavedBuffer.js|src/core/InstancedInterleavedBuffer.js}
 */
export declare class InstancedInterleavedBuffer extends InterleavedBuffer {
    constructor(array: ArrayLike<number>, stride: number, meshPerAttribute?: number);

    /**
     * @default 1
     */
    meshPerAttribute: number;
}

export declare class InstancedMesh<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[]
> extends Mesh<TGeometry, TMaterial> {
    constructor(geometry: TGeometry, material: TMaterial, count: number);

    count: number;
    instanceColor: null | BufferAttribute;
    instanceMatrix: BufferAttribute;
    readonly isInstancedMesh: true;

    getColorAt(index: number, color: Color): void;
    getMatrixAt(index: number, matrix: Matrix4): void;
    setColorAt(index: number, color: Color): void;
    setMatrixAt(index: number, matrix: Matrix4): void;
    dispose(): void;
}

/**
 * @deprecated THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead.
 */
export declare class Int16Attribute extends BufferAttribute {
    constructor(array: any, itemSize: number);
}

export declare class Int16BufferAttribute extends BufferAttribute {
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * @deprecated THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead.
 */
export declare class Int32Attribute extends BufferAttribute {
    constructor(array: any, itemSize: number);
}

export declare class Int32BufferAttribute extends BufferAttribute {
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * @deprecated THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead.
 */
export declare class Int8Attribute extends BufferAttribute {
    constructor(array: any, itemSize: number);
}

export declare class Int8BufferAttribute extends BufferAttribute {
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InterleavedBuffer.js|src/core/InterleavedBuffer.js}
 */
export declare class InterleavedBuffer {
    constructor(array: ArrayLike<number>, stride: number);

    array: ArrayLike<number>;
    stride: number;

    /**
     * @default THREE.StaticDrawUsage
     */
    usage: Usage;

    /**
     * @default { offset: number; count: number }
     */
    updateRange: { offset: number; count: number };

    /**
     * @default 0
     */
    version: number;

    length: number;

    /**
     * @default 0
     */
    count: number;
    needsUpdate: boolean;
    uuid: string;

    setUsage(usage: Usage): InterleavedBuffer;
    clone(data: object): InterleavedBuffer;
    copy(source: InterleavedBuffer): this;
    copyAt(index1: number, attribute: InterleavedBufferAttribute, index2: number): InterleavedBuffer;
    set(value: ArrayLike<number>, index: number): InterleavedBuffer;
    toJSON(
        data: object,
    ): {
        uuid: string;
        buffer: string;
        type: string;
        stride: number;
    };
}

/**
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InterleavedBufferAttribute.js|src/core/InterleavedBufferAttribute.js}
 */
export declare class InterleavedBufferAttribute {
    constructor(interleavedBuffer: InterleavedBuffer, itemSize: number, offset: number, normalized?: boolean);

    /**
     * @default ''
     */
    name: string;
    data: InterleavedBuffer;
    itemSize: number;
    offset: number;

    /**
     * @default false
     */
    normalized: boolean;

    get count(): number;
    get array(): ArrayLike<number>;
    set needsUpdate(value: boolean);

    readonly isInterleavedBufferAttribute: true;

    applyMatrix4(m: Matrix4): this;
    clone(data?: object): BufferAttribute;
    getX(index: number): number;
    setX(index: number, x: number): InterleavedBufferAttribute;
    getY(index: number): number;
    setY(index: number, y: number): InterleavedBufferAttribute;
    getZ(index: number): number;
    setZ(index: number, z: number): InterleavedBufferAttribute;
    getW(index: number): number;
    setW(index: number, z: number): InterleavedBufferAttribute;
    setXY(index: number, x: number, y: number): InterleavedBufferAttribute;
    setXYZ(index: number, x: number, y: number, z: number): InterleavedBufferAttribute;
    setXYZW(index: number, x: number, y: number, z: number, w: number): InterleavedBufferAttribute;
    toJSON(
        data?: object,
    ): {
        isInterleavedBufferAttribute: true;
        itemSize: number;
        data: string;
        offset: number;
        normalized: boolean;
    };
}

export declare abstract class Interpolant {
    constructor(parameterPositions: any, sampleValues: any, sampleSize: number, resultBuffer?: any);

    parameterPositions: any;
    sampleValues: any;
    valueSize: number;
    resultBuffer: any;

    evaluate(time: number): any;
}

export declare const InterpolateDiscrete: InterpolationModes;

export declare const InterpolateLinear: InterpolationModes;

export declare const InterpolateSmooth: InterpolationModes;

export declare enum InterpolationEndingModes {}

export declare enum InterpolationModes {}

export declare interface Intersection {
    distance: number;
    distanceToRay?: number;
    point: Vector3;
    index?: number;
    face?: Face | null;
    faceIndex?: number;
    object: Object3D;
    uv?: Vector2;
    instanceId?: number;
}

export declare const IntType: TextureDataType;

export declare const InvertStencilOp: StencilOp;

export declare interface IUniform<TValue = any> {
    value: TValue;
}

export declare const KeepStencilOp: StencilOp;

export declare class KeyframeTrack {
    /**
     * @param name
     * @param times
     * @param values
     * @param [interpolation=THREE.InterpolateLinear]
     */
    constructor(name: string, times: ArrayLike<any>, values: ArrayLike<any>, interpolation?: InterpolationModes);

    name: string;
    times: Float32Array;
    values: Float32Array;

    ValueTypeName: string;
    TimeBufferType: Float32Array;
    ValueBufferType: Float32Array;

    /**
     * @default THREE.InterpolateLinear
     */
    DefaultInterpolation: InterpolationModes;

    InterpolantFactoryMethodDiscrete(result: any): DiscreteInterpolant;
    InterpolantFactoryMethodLinear(result: any): LinearInterpolant;
    InterpolantFactoryMethodSmooth(result: any): CubicInterpolant;

    setInterpolation(interpolation: InterpolationModes): KeyframeTrack;
    getInterpolation(): InterpolationModes;

    getValueSize(): number;

    shift(timeOffset: number): KeyframeTrack;
    scale(timeScale: number): KeyframeTrack;
    trim(startTime: number, endTime: number): KeyframeTrack;
    validate(): boolean;
    optimize(): KeyframeTrack;
    clone(): KeyframeTrack;

    static toJSON(track: KeyframeTrack): any;
}

declare class LatheGeometry extends BufferGeometry {
    /**
     * @param points
     * @param [segments=12]
     * @param [phiStart=0]
     * @param [phiLength=Math.PI * 2]
     */
    constructor(points: Vector2[], segments?: number, phiStart?: number, phiLength?: number);

    /**
     * @default 'LatheGeometry'
     */
    type: string;

    parameters: {
        points: Vector2[];
        segments: number;
        phiStart: number;
        phiLength: number;
    };
}
export { LatheGeometry as LatheBufferGeometry }
export { LatheGeometry }

export declare class Layers {
    constructor();

    /**
     * @default 1 | 0
     */
    mask: number;

    set(channel: number): void;
    enable(channel: number): void;
    enableAll(): void;
    toggle(channel: number): void;
    disable(channel: number): void;
    disableAll(): void;
    test(layers: Layers): boolean;
}

export declare const LessDepth: DepthModes;

export declare const LessEqualDepth: DepthModes;

export declare const LessEqualStencilFunc: StencilFunc;

export declare const LessStencilFunc: StencilFunc;

/**
 * Abstract base class for lights.
 */
export declare class Light extends Object3D {
    constructor(hex?: number | string, intensity?: number);

    /**
     * @default 'Light'
     */
    type: string;

    color: Color;

    /**
     * @default 1
     */
    intensity: number;
    readonly isLight: true;

    shadow: LightShadow;
    /**
     * @deprecated Use shadow.camera.fov instead.
     */
    shadowCameraFov: any;
    /**
     * @deprecated Use shadow.camera.left instead.
     */
    shadowCameraLeft: any;
    /**
     * @deprecated Use shadow.camera.right instead.
     */
    shadowCameraRight: any;
    /**
     * @deprecated Use shadow.camera.top instead.
     */
    shadowCameraTop: any;
    /**
     * @deprecated Use shadow.camera.bottom instead.
     */
    shadowCameraBottom: any;
    /**
     * @deprecated Use shadow.camera.near instead.
     */
    shadowCameraNear: any;
    /**
     * @deprecated Use shadow.camera.far instead.
     */
    shadowCameraFar: any;
    /**
     * @deprecated Use shadow.bias instead.
     */
    shadowBias: any;
    /**
     * @deprecated Use shadow.mapSize.width instead.
     */
    shadowMapWidth: any;
    /**
     * @deprecated Use shadow.mapSize.height instead.
     */
    shadowMapHeight: any;
}

export declare class LightProbe extends Light {
    constructor(sh?: SphericalHarmonics3, intensity?: number);

    /**
     * @default 'LightProbe'
     */
    type: string;

    readonly isLightProbe: true;

    /**
     * @default new THREE.SphericalHarmonics3()
     */
    sh: SphericalHarmonics3;

    fromJSON(json: object): LightProbe;
}

export declare class LightShadow {
    constructor(camera: Camera);

    camera: Camera;

    /**
     * @default 0
     */
    bias: number;

    /**
     * @default 0
     */
    normalBias: number;

    /**
     * @default 1
     */
    radius: number;

    /**
     * @default new THREE.Vector2( 512, 512 )
     */
    mapSize: Vector2;

    /**
     * @default null
     */
    map: RenderTarget;

    /**
     * @default null
     */
    mapPass: RenderTarget;

    /**
     * @default new THREE.Matrix4()
     */
    matrix: Matrix4;

    /**
     * @default true
     */
    autoUpdate: boolean;

    /**
     * @default false
     */
    needsUpdate: boolean;

    copy(source: LightShadow): this;
    clone(recursive?: boolean): LightShadow;
    toJSON(): any;
    getFrustum(): number;
    updateMatrices(light: Light, viewportIndex?: number): void;
    getViewport(viewportIndex: number): Vector4;
    getFrameExtents(): Vector2;
}

export declare class Line<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[]
> extends Object3D {
    constructor(geometry?: TGeometry, material?: TMaterial);

    geometry: TGeometry;
    material: TMaterial;

    type: 'Line' | 'LineLoop' | 'LineSegments' | string;
    readonly isLine: true;

    morphTargetInfluences?: number[];
    morphTargetDictionary?: { [key: string]: number };

    computeLineDistances(): this;
    raycast(raycaster: Raycaster, intersects: Intersection[]): void;
    updateMorphTargets(): void;
}

export declare class Line3 {
    constructor(start?: Vector3, end?: Vector3);

    /**
     * @default new THREE.Vector3()
     */
    start: Vector3;

    /**
     * @default new THREE.Vector3()
     */
    end: Vector3;

    set(start?: Vector3, end?: Vector3): Line3;
    clone(): Line3;
    copy(line: Line3): this;
    getCenter(target: Vector3): Vector3;
    delta(target: Vector3): Vector3;
    distanceSq(): number;
    distance(): number;
    at(t: number, target: Vector3): Vector3;
    closestPointToPointParameter(point: Vector3, clampToLine?: boolean): number;
    closestPointToPoint(point: Vector3, clampToLine: boolean, target: Vector3): Vector3;
    applyMatrix4(matrix: Matrix4): Line3;
    equals(line: Line3): boolean;
}

export declare const LinearEncoding: TextureEncoding;

export declare const LinearFilter: TextureFilter;

export declare class LinearInterpolant extends Interpolant {
    constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any);

    interpolate_(i1: number, t0: number, t: number, t1: number): any;
}

export declare const LinearMipMapLinearFilter: TextureFilter;

export declare const LinearMipmapLinearFilter: TextureFilter;

export declare const LinearMipMapNearestFilter: TextureFilter;

export declare const LinearMipmapNearestFilter: TextureFilter;

export declare const LinearToneMapping: ToneMapping;

export declare class LineBasicMaterial extends Material {
    constructor(parameters?: LineBasicMaterialParameters);

    /**
     * @default 'LineBasicMaterial'
     */
    type: string;

    /**
     * @default 0xffffff
     */
    color: Color;

    /**
     * @default 1
     */
    linewidth: number;

    /**
     * @default 'round'
     */
    linecap: string;

    /**
     * @default 'round'
     */
    linejoin: string;

    /**
     * @default false
     */
    morphTargets: boolean;

    setValues(parameters: LineBasicMaterialParameters): void;
}

export declare interface LineBasicMaterialParameters extends MaterialParameters {
    color?: Color | string | number;
    linewidth?: number;
    linecap?: string;
    linejoin?: string;
    morphTargets?: boolean;
}

export declare class LineCurve extends Curve<Vector2> {
    constructor(v1: Vector2, v2: Vector2);

    /**
     * @default 'LineCurve'
     */
    type: string;

    /**
     * @default new THREE.Vector2()
     */
    v1: Vector2;

    /**
     * @default new THREE.Vector2()
     */
    v2: Vector2;
}

export declare class LineCurve3 extends Curve<Vector3> {
    constructor(v1: Vector3, v2: Vector3);

    /**
     * @default 'LineCurve3'
     */
    type: string;

    /**
     * @default new THREE.Vector3()
     */
    v1: Vector3;

    /**
     * @default new THREE.Vector3()
     */
    v2: Vector3;
}

export declare class LineDashedMaterial extends LineBasicMaterial {
    constructor(parameters?: LineDashedMaterialParameters);

    /**
     * @default 'LineDashedMaterial'
     */
    type: string;

    /**
     * @default 1
     */
    scale: number;

    /**
     * @default 1
     */
    dashSize: number;

    /**
     * @default 1
     */
    gapSize: number;
    readonly isLineDashedMaterial: true;

    setValues(parameters: LineDashedMaterialParameters): void;
}

export declare interface LineDashedMaterialParameters extends LineBasicMaterialParameters {
    scale?: number;
    dashSize?: number;
    gapSize?: number;
}

export declare class LineLoop<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[]
> extends Line<TGeometry, TMaterial> {
    constructor(geometry?: TGeometry, material?: TMaterial);

    type: 'LineLoop';
    readonly isLineLoop: true;
}

/**
 * @deprecated
 */
export declare const LinePieces: number;

export declare class LineSegments<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[]
> extends Line<TGeometry, TMaterial> {
    constructor(geometry?: TGeometry, material?: TMaterial);

    /**
     * @default 'LineSegments'
     */
    type: 'LineSegments' | string;
    readonly isLineSegments: true;
}

/**
 * @deprecated
 */
export declare const LineStrip: number;

/**
 * Base class for implementing loaders.
 */
export declare class Loader {
    constructor(manager?: LoadingManager);

    /**
     * @default 'anonymous'
     */
    crossOrigin: string;

    /**
     * @default: false
     */
    withCredentials: boolean;

    /**
     * @default ''
     */
    path: string;

    /**
     * @default ''
     */
    resourcePath: string;
    manager: LoadingManager;

    /**
     * @default {}
     */
    requestHeader: { [header: string]: string };

    /*
	load(): void;
	parse(): void;
	*/

    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<any>;

    setCrossOrigin(crossOrigin: string): this;
    setWithCredentials(value: boolean): this;
    setPath(path: string): this;
    setResourcePath(resourcePath: string): this;
    setRequestHeader(requestHeader: { [header: string]: string }): this;
}

export declare interface LoaderUtils {
    decodeText(array: BufferSource): string;
    extractUrlBase(url: string): string;
}

export declare const LoaderUtils: LoaderUtils;

/**
 * Handles and keeps track of loaded and pending data.
 */
export declare class LoadingManager {
    constructor(
        onLoad?: () => void,
        onProgress?: (url: string, loaded: number, total: number) => void,
        onError?: (url: string) => void,
    );

    /**
     * Will be called when loading of an item starts.
     * @param url The url of the item that started loading.
     * @param loaded The number of items already loaded so far.
     * @param total The total amount of items to be loaded.
     */
    onStart?: (url: string, loaded: number, total: number) => void;

    /**
     * Will be called when all items finish loading.
     * The default is a function with empty body.
     */
    onLoad: () => void;

    /**
     * Will be called for each loaded item.
     * The default is a function with empty body.
     * @param url The url of the item just loaded.
     * @param loaded The number of items already loaded so far.
     * @param total The total amount of items to be loaded.
     */
    onProgress: (url: string, loaded: number, total: number) => void;

    /**
     * Will be called when item loading fails.
     * The default is a function with empty body.
     * @param url The url of the item that errored.
     */
    onError: (url: string) => void;

    /**
     * If provided, the callback will be passed each resource URL before a request is sent.
     * The callback may return the original URL, or a new URL to override loading behavior.
     * This behavior can be used to load assets from .ZIP files, drag-and-drop APIs, and Data URIs.
     * @param callback URL modifier callback. Called with url argument, and must return resolvedURL.
     */
    setURLModifier(callback?: (url: string) => string): this;

    /**
     * Given a URL, uses the URL modifier callback (if any) and returns a resolved URL.
     * If no URL modifier is set, returns the original URL.
     * @param url the url to load
     */
    resolveURL(url: string): string;

    itemStart(url: string): void;
    itemEnd(url: string): void;
    itemError(url: string): void;

    // handlers

    addHandler(regex: RegExp, loader: Loader): this;
    removeHandler(regex: RegExp): this;
    getHandler(file: string): Loader | null;
}

export declare class LOD extends Object3D {
    constructor();

    type: 'LOD';

    levels: Array<{ distance: number; object: Object3D }>;
    autoUpdate: boolean;
    readonly isLOD: true;

    addLevel(object: Object3D, distance?: number): this;
    getCurrentLevel(): number;
    getObjectForDistance(distance: number): Object3D | null;
    raycast(raycaster: Raycaster, intersects: Intersection[]): void;
    update(camera: Camera): void;
    toJSON(meta: any): any;

    /**
     * @deprecated Use {@link LOD#levels .levels} instead.
     */
    objects: any[];
}

export declare const LogLuvEncoding: TextureEncoding;

export declare const LoopOnce: AnimationActionLoopStyles;

export declare const LoopPingPong: AnimationActionLoopStyles;

export declare const LoopRepeat: AnimationActionLoopStyles;

export declare const LuminanceAlphaFormat: PixelFormat;

export declare const LuminanceFormat: PixelFormat;

export declare enum Mapping {}

/**
 * Materials describe the appearance of objects. They are defined in a (mostly) renderer-independent way, so you don't have to rewrite materials if you decide to use a different renderer.
 */
export declare class Material extends EventDispatcher {
    constructor();

    /**
     * Sets the alpha value to be used when running an alpha test. Default is 0.
     * @default 0
     */
    alphaTest: number;

    /**
     * Blending destination. It's one of the blending mode constants defined in Three.js. Default is {@link OneMinusSrcAlphaFactor}.
     * @default THREE.OneMinusSrcAlphaFactor
     */
    blendDst: BlendingDstFactor;

    /**
     * The tranparency of the .blendDst. Default is null.
     * @default null
     */
    blendDstAlpha: number | null;

    /**
     * Blending equation to use when applying blending. It's one of the constants defined in Three.js. Default is {@link AddEquation}.
     * @default THREE.AddEquation
     */
    blendEquation: BlendingEquation;

    /**
     * The tranparency of the .blendEquation. Default is null.
     * @default null
     */
    blendEquationAlpha: number | null;

    /**
     * Which blending to use when displaying objects with this material. Default is {@link NormalBlending}.
     * @default THREE.NormalBlending
     */
    blending: Blending;

    /**
     * Blending source. It's one of the blending mode constants defined in Three.js. Default is {@link SrcAlphaFactor}.
     * @default THREE.SrcAlphaFactor
     */
    blendSrc: BlendingSrcFactor | BlendingDstFactor;

    /**
     * The tranparency of the .blendSrc. Default is null.
     * @default null
     */
    blendSrcAlpha: number | null;

    /**
     * Changes the behavior of clipping planes so that only their intersection is clipped, rather than their union. Default is false.
     * @default false
     */
    clipIntersection: boolean;

    /**
     * User-defined clipping planes specified as THREE.Plane objects in world space.
     * These planes apply to the objects this material is attached to.
     * Points in space whose signed distance to the plane is negative are clipped (not rendered).
     * See the WebGL / clipping /intersection example. Default is null.
     * @default null
     */
    clippingPlanes: any;

    /**
     * Defines whether to clip shadows according to the clipping planes specified on this material. Default is false.
     * @default false
     */
    clipShadows: boolean;

    /**
     * Whether to render the material's color. This can be used in conjunction with a mesh's .renderOrder property to create invisible objects that occlude other objects. Default is true.
     * @default true
     */
    colorWrite: boolean;

    /**
     * Custom defines to be injected into the shader. These are passed in form of an object literal, with key/value pairs. { MY_CUSTOM_DEFINE: '' , PI2: Math.PI * 2 }.
     * The pairs are defined in both vertex and fragment shaders. Default is undefined.
     * @default undefined
     */
    defines: undefined | { [key: string]: any };

    /**
     * Which depth function to use. Default is {@link LessEqualDepth}. See the depth mode constants for all possible values.
     * @default THREE.LessEqualDepth
     */
    depthFunc: DepthModes;

    /**
     * Whether to have depth test enabled when rendering this material. Default is true.
     * @default true
     */
    depthTest: boolean;

    /**
     * Whether rendering this material has any effect on the depth buffer. Default is true.
     * When drawing 2D overlays it can be useful to disable the depth writing in order to layer several things together without creating z-index artifacts.
     * @default true
     */
    depthWrite: boolean;

    /**
     * Whether the material is affected by fog. Default is true.
     * @default fog
     */
    fog: boolean;

    /**
     * Unique number of this material instance.
     */
    id: number;

    /**
     * Whether rendering this material has any effect on the stencil buffer. Default is *false*.
     * @default false
     */
    stencilWrite: boolean;

    /**
     * The stencil comparison function to use. Default is {@link AlwaysStencilFunc}. See stencil operation constants for all possible values.
     * @default THREE.AlwaysStencilFunc
     */
    stencilFunc: StencilFunc;

    /**
     * The value to use when performing stencil comparisons or stencil operations. Default is *0*.
     * @default 0
     */
    stencilRef: number;

    /**
     * The bit mask to use when writing to the stencil buffer. Default is *0xFF*.
     * @default 0xff
     */
    stencilWriteMask: number;

    /**
     * The bit mask to use when comparing against the stencil buffer. Default is *0xFF*.
     * @default 0xff
     */
    stencilFuncMask: number;

    /**
     * Which stencil operation to perform when the comparison function returns false. Default is {@link KeepStencilOp}. See the stencil operation constants for all possible values.
     * @default THREE.KeepStencilOp
     */
    stencilFail: StencilOp;

    /**
     * Which stencil operation to perform when the comparison function returns true but the depth test fails.
     * Default is {@link KeepStencilOp}.
     * See the stencil operation constants for all possible values.
     * @default THREE.KeepStencilOp
     */
    stencilZFail: StencilOp;

    /**
     * Which stencil operation to perform when the comparison function returns true and the depth test passes.
     * Default is {@link KeepStencilOp}.
     * See the stencil operation constants for all possible values.
     * @default THREE.KeepStencilOp
     */
    stencilZPass: StencilOp;

    /**
     * Used to check whether this or derived classes are materials. Default is true.
     * You should not change this, as it used internally for optimisation.
     */
    readonly isMaterial: true;

    /**
     * Material name. Default is an empty string.
     * @default ''
     */
    name: string;

    /**
     * Specifies that the material needs to be updated, WebGL wise. Set it to true if you made changes that need to be reflected in WebGL.
     * This property is automatically set to true when instancing a new material.
     * @default false
     */
    needsUpdate: boolean;

    /**
     * Opacity. Default is 1.
     * @default 1
     */
    opacity: number;

    /**
     * Whether to use polygon offset. Default is false. This corresponds to the POLYGON_OFFSET_FILL WebGL feature.
     * @default false
     */
    polygonOffset: boolean;

    /**
     * Sets the polygon offset factor. Default is 0.
     * @default 0
     */
    polygonOffsetFactor: number;

    /**
     * Sets the polygon offset units. Default is 0.
     * @default 0
     */
    polygonOffsetUnits: number;

    /**
     * Override the renderer's default precision for this material. Can be "highp", "mediump" or "lowp". Defaults is null.
     * @default null
     */
    precision: 'highp' | 'mediump' | 'lowp' | null;

    /**
     * Whether to premultiply the alpha (transparency) value. See WebGL / Materials / Transparency for an example of the difference. Default is false.
     * @default false
     */
    premultipliedAlpha: boolean;

    /**
     * Whether to apply dithering to the color to remove the appearance of banding. Default is false.
     * @default false
     */
    dithering: boolean;

    /**
     * Defines which of the face sides will be rendered - front, back or both.
     * Default is THREE.FrontSide. Other options are THREE.BackSide and THREE.DoubleSide.
     * @default THREE.FrontSide
     */
    side: Side;

    /**
     * Defines which of the face sides will cast shadows. Default is *null*.
     * If *null*, the value is opposite that of side, above.
     * @default null
     */
    shadowSide: Side;

    /**
     * Defines whether this material is tone mapped according to the renderer's toneMapping setting.
     * Default is true.
     * @default true
     */
    toneMapped: boolean;

    /**
     * Defines whether this material is transparent. This has an effect on rendering as transparent objects need special treatment and are rendered after non-transparent objects.
     * When set to true, the extent to which the material is transparent is controlled by setting it's .opacity property.
     * Default is false.
     * @default false
     */
    transparent: boolean;

    /**
     * Value is the string 'Material'. This shouldn't be changed, and can be used to find all objects of this type in a scene.
     * @default 'Material'
     */
    type: string;

    /**
     * UUID of this material instance. This gets automatically assigned, so this shouldn't be edited.
     */
    uuid: string;

    /**
     * Defines whether vertex coloring is used. Default is false.
     * @default false
     */
    vertexColors: boolean;

    /**
     * Defines whether this material is visible. Default is true.
     * @default true
     */
    visible: boolean;

    /**
     * An object that can be used to store custom data about the Material. It should not hold references to functions as these will not be cloned.
     * @default {}
     */
    userData: any;

    /**
     * This starts at 0 and counts how many times .needsUpdate is set to true.
     * @default 0
     */
    version: number;

    /**
     * Return a new material with the same parameters as this material.
     */
    clone(): Material;

    /**
     * Copy the parameters from the passed material into this material.
     * @param material
     */
    copy(material: Material): this;

    /**
     * This disposes the material. Textures of a material don't get disposed. These needs to be disposed by {@link Texture}.
     */
    dispose(): void;

    /**
     * An optional callback that is executed immediately before the shader program is compiled.
     * This function is called with the shader source code as a parameter.
     * Useful for the modification of built-in materials.
     * @param shader Source code of the shader
     * @param renderer WebGLRenderer Context that is initializing the material
     */
    onBeforeCompile(shader: Shader, renderer: WebGLRenderer): void;

    /**
     * In case onBeforeCompile is used, this callback can be used to identify values of settings used in onBeforeCompile, so three.js can reuse a cached shader or recompile the shader as needed.
     */
    customProgramCacheKey(): string;

    /**
     * Sets the properties based on the values.
     * @param values A container with parameters.
     */
    setValues(values: MaterialParameters): void;

    /**
     * Convert the material to three.js JSON format.
     * @param meta Object containing metadata such as textures or images for the material.
     */
    toJSON(meta?: any): any;
}

export declare class MaterialLoader extends Loader {
    constructor(manager?: LoadingManager);

    /**
     * @default {}
     */
    textures: { [key: string]: Texture };

    load(
        url: string,
        onLoad: (material: Material) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: Error | ErrorEvent) => void,
    ): void;
    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<Material>;
    setTextures(textures: { [key: string]: Texture }): this;
    parse(json: any): Material;
}

export declare interface MaterialParameters {
    alphaTest?: number;
    blendDst?: BlendingDstFactor;
    blendDstAlpha?: number;
    blendEquation?: BlendingEquation;
    blendEquationAlpha?: number;
    blending?: Blending;
    blendSrc?: BlendingSrcFactor | BlendingDstFactor;
    blendSrcAlpha?: number;
    clipIntersection?: boolean;
    clippingPlanes?: Plane[];
    clipShadows?: boolean;
    colorWrite?: boolean;
    defines?: any;
    depthFunc?: DepthModes;
    depthTest?: boolean;
    depthWrite?: boolean;
    fog?: boolean;
    name?: string;
    opacity?: number;
    polygonOffset?: boolean;
    polygonOffsetFactor?: number;
    polygonOffsetUnits?: number;
    precision?: 'highp' | 'mediump' | 'lowp' | null;
    premultipliedAlpha?: boolean;
    dithering?: boolean;
    side?: Side;
    shadowSide?: Side;
    toneMapped?: boolean;
    transparent?: boolean;
    vertexColors?: boolean;
    visible?: boolean;
    stencilWrite?: boolean;
    stencilFunc?: StencilFunc;
    stencilRef?: number;
    stencilWriteMask?: number;
    stencilFuncMask?: number;
    stencilFail?: StencilOp;
    stencilZFail?: StencilOp;
    stencilZPass?: StencilOp;
    userData?: any;
}

/**
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/math/MathUtils.js|src/math/MathUtils.js}
 */
export declare namespace MathUtils {
    const DEG2RAD: number;
    const RAD2DEG: number;

    export function generateUUID(): string;

    /**
     * Clamps the x to be between a and b.
     *
     * @param value Value to be clamped.
     * @param min Minimum value
     * @param max Maximum value.
     */
    export function clamp(value: number, min: number, max: number): number;
    export function euclideanModulo(n: number, m: number): number;

    /**
     * Linear mapping of x from range [a1, a2] to range [b1, b2].
     *
     * @param x Value to be mapped.
     * @param a1 Minimum value for range A.
     * @param a2 Maximum value for range A.
     * @param b1 Minimum value for range B.
     * @param b2 Maximum value for range B.
     */
    export function mapLinear(x: number, a1: number, a2: number, b1: number, b2: number): number;

    export function smoothstep(x: number, min: number, max: number): number;

    export function smootherstep(x: number, min: number, max: number): number;

    /**
     * Random float from 0 to 1 with 16 bits of randomness.
     * Standard Math.random() creates repetitive patterns when applied over larger space.
     *
     * @deprecated Use {@link Math#random Math.random()}
     */
    export function random16(): number;

    /**
     * Random integer from low to high interval.
     */
    export function randInt(low: number, high: number): number;

    /**
     * Random float from low to high interval.
     */
    export function randFloat(low: number, high: number): number;

    /**
     * Random float from - range / 2 to range / 2 interval.
     */
    export function randFloatSpread(range: number): number;

    /**
     * Deterministic pseudo-random float in the interval [ 0, 1 ].
     */
    export function seededRandom(seed?: number): number;

    export function degToRad(degrees: number): number;

    export function radToDeg(radians: number): number;

    export function isPowerOfTwo(value: number): boolean;

    /**
     * Returns a value linearly interpolated from two known points based
     * on the given interval - t = 0 will return x and t = 1 will return y.
     *
     * @param x Start point.
     * @param y End point.
     * @param t interpolation factor in the closed interval [0, 1]
     */
    export function lerp(x: number, y: number, t: number): number;

    /**
     * Smoothly interpolate a number from x toward y in a spring-like
     * manner using the dt to maintain frame rate independent movement.
     *
     * @param x Current point.
     * @param y Target point.
     * @param lambda A higher lambda value will make the movement more sudden, and a lower value will make the movement more gradual.
     * @param dt Delta time in seconds.
     */
    export function damp(x: number, y: number, lambda: number, dt: number): number;

    /**
     * Returns a value that alternates between 0 and length.
     *
     * @param x The value to pingpong.
     * @param length The positive value the function will pingpong to. Default is 1.
     */
    export function pingpong(x: number, length?: number): number;

    /**
     * @deprecated Use {@link Math#floorPowerOfTwo .floorPowerOfTwo()}
     */
    export function nearestPowerOfTwo(value: number): number;

    /**
     * @deprecated Use {@link Math#ceilPowerOfTwo .ceilPowerOfTwo()}
     */
    export function nextPowerOfTwo(value: number): number;

    export function floorPowerOfTwo(value: number): number;

    export function ceilPowerOfTwo(value: number): number;

    export function setQuaternionFromProperEuler(q: Quaternion, a: number, b: number, c: number, order: string): void;
}

/**
 * ( interface Matrix<T> )
 */
export declare interface Matrix {
    /**
     * Array with matrix values.
     */
    elements: number[];

    /**
     * identity():T;
     */
    identity(): Matrix;

    /**
     * copy(m:T):T;
     */
    copy(m: this): this;

    /**
     * multiplyScalar(s:number):T;
     */
    multiplyScalar(s: number): Matrix;

    determinant(): number;

    /**
     * transpose():T;
     */
    transpose(): Matrix;

    /**
     * invert():T;
     */
    invert(): Matrix;

    /**
     * clone():T;
     */
    clone(): Matrix;
}

/**
 * ( class Matrix3 implements Matrix<Matrix3> )
 */
export declare class Matrix3 implements Matrix {
    /**
     * Creates an identity matrix.
     */
    constructor();

    /**
     * Array with matrix values.
     * @default [1, 0, 0, 0, 1, 0, 0, 0, 1]
     */
    elements: number[];

    set(
        n11: number,
        n12: number,
        n13: number,
        n21: number,
        n22: number,
        n23: number,
        n31: number,
        n32: number,
        n33: number,
    ): Matrix3;
    identity(): Matrix3;
    clone(): Matrix3;
    copy(m: Matrix3): this;
    extractBasis(xAxis: Vector3, yAxis: Vector3, zAxis: Vector3): Matrix3;
    setFromMatrix4(m: Matrix4): Matrix3;
    multiplyScalar(s: number): Matrix3;
    determinant(): number;

    /**
     * Inverts this matrix in place.
     */
    invert(): Matrix3;

    /**
     * Transposes this matrix in place.
     */
    transpose(): Matrix3;
    getNormalMatrix(matrix4: Matrix4): Matrix3;

    /**
     * Transposes this matrix into the supplied array r, and returns itself.
     */
    transposeIntoArray(r: number[]): Matrix3;

    setUvTransform(tx: number, ty: number, sx: number, sy: number, rotation: number, cx: number, cy: number): Matrix3;

    scale(sx: number, sy: number): Matrix3;

    rotate(theta: number): Matrix3;

    translate(tx: number, ty: number): Matrix3;

    equals(matrix: Matrix3): boolean;

    /**
     * Sets the values of this matrix from the provided array or array-like.
     * @param array the source array or array-like.
     * @param offset (optional) offset into the array-like. Default is 0.
     */
    fromArray(array: number[] | ArrayLike<number>, offset?: number): Matrix3;

    /**
     * Returns an array with the values of this matrix, or copies them into the provided array.
     * @param array (optional) array to store the matrix to. If this is not provided, a new array will be created.
     * @param offset (optional) optional offset into the array.
     * @return The created or provided array.
     */
    toArray(array?: number[], offset?: number): number[];
    toArray(array?: Matrix3Tuple, offset?: 0): Matrix3Tuple;

    /**
     * Copies he values of this matrix into the provided array-like.
     * @param array array-like to store the matrix to.
     * @param offset (optional) optional offset into the array-like.
     * @return The provided array-like.
     */
    toArray(array?: ArrayLike<number>, offset?: number): ArrayLike<number>;

    /**
     * Multiplies this matrix by m.
     */
    multiply(m: Matrix3): Matrix3;

    premultiply(m: Matrix3): Matrix3;

    /**
     * Sets this matrix to a x b.
     */
    multiplyMatrices(a: Matrix3, b: Matrix3): Matrix3;

    /**
     * @deprecated Use {@link Vector3.applyMatrix3 vector.applyMatrix3( matrix )} instead.
     */
    multiplyVector3(vector: Vector3): any;

    /**
     * @deprecated This method has been removed completely.
     */
    multiplyVector3Array(a: any): any;

    /**
     * @deprecated Use {@link Matrix3#invert .invert()} instead.
     */
    getInverse(matrix: Matrix4, throwOnDegenerate?: boolean): Matrix3;
    getInverse(matrix: Matrix): Matrix;

    /**
     * @deprecated Use {@link Matrix3#toArray .toArray()} instead.
     */
    flattenToArrayOffset(array: number[], offset: number): number[];
}

export declare type Matrix3Tuple = [number, number, number, number, number, number, number, number, number];

/**
 * A 4x4 Matrix.
 *
 * @example
 * // Simple rig for rotating around 3 axes
 * const m = new THREE.Matrix4();
 * const m1 = new THREE.Matrix4();
 * const m2 = new THREE.Matrix4();
 * const m3 = new THREE.Matrix4();
 * const alpha = 0;
 * const beta = Math.PI;
 * const gamma = Math.PI/2;
 * m1.makeRotationX( alpha );
 * m2.makeRotationY( beta );
 * m3.makeRotationZ( gamma );
 * m.multiplyMatrices( m1, m2 );
 * m.multiply( m3 );
 */
export declare class Matrix4 implements Matrix {
    constructor();

    /**
     * Array with matrix values.
     * @default [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
     */
    elements: number[];

    /**
     * Sets all fields of this matrix.
     */
    set(
        n11: number,
        n12: number,
        n13: number,
        n14: number,
        n21: number,
        n22: number,
        n23: number,
        n24: number,
        n31: number,
        n32: number,
        n33: number,
        n34: number,
        n41: number,
        n42: number,
        n43: number,
        n44: number,
    ): Matrix4;

    /**
     * Resets this matrix to identity.
     */
    identity(): Matrix4;
    clone(): Matrix4;
    copy(m: Matrix4): this;
    copyPosition(m: Matrix4): Matrix4;
    extractBasis(xAxis: Vector3, yAxis: Vector3, zAxis: Vector3): Matrix4;
    makeBasis(xAxis: Vector3, yAxis: Vector3, zAxis: Vector3): Matrix4;
    setFromMatrix3(m: Matrix3): Matrix4;

    /**
     * Copies the rotation component of the supplied matrix m into this matrix rotation component.
     */
    extractRotation(m: Matrix4): Matrix4;
    makeRotationFromEuler(euler: Euler): Matrix4;
    makeRotationFromQuaternion(q: Quaternion): Matrix4;
    /**
     * Constructs a rotation matrix, looking from eye towards center with defined up vector.
     */
    lookAt(eye: Vector3, target: Vector3, up: Vector3): Matrix4;

    /**
     * Multiplies this matrix by m.
     */
    multiply(m: Matrix4): Matrix4;

    premultiply(m: Matrix4): Matrix4;

    /**
     * Sets this matrix to a x b.
     */
    multiplyMatrices(a: Matrix4, b: Matrix4): Matrix4;

    /**
     * Sets this matrix to a x b and stores the result into the flat array r.
     * r can be either a regular Array or a TypedArray.
     *
     * @deprecated This method has been removed completely.
     */
    multiplyToArray(a: Matrix4, b: Matrix4, r: number[]): Matrix4;

    /**
     * Multiplies this matrix by s.
     */
    multiplyScalar(s: number): Matrix4;

    /**
     * Computes determinant of this matrix.
     * Based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
     */
    determinant(): number;

    /**
     * Transposes this matrix.
     */
    transpose(): Matrix4;

    /**
     * Sets the position component for this matrix from vector v.
     */
    setPosition(v: Vector3 | number, y?: number, z?: number): Matrix4;

    /**
     * Inverts this matrix.
     */
    invert(): Matrix4;

    /**
     * Multiplies the columns of this matrix by vector v.
     */
    scale(v: Vector3): Matrix4;

    getMaxScaleOnAxis(): number;
    /**
     * Sets this matrix as translation transform.
     */
    makeTranslation(x: number, y: number, z: number): Matrix4;

    /**
     * Sets this matrix as rotation transform around x axis by theta radians.
     *
     * @param theta Rotation angle in radians.
     */
    makeRotationX(theta: number): Matrix4;

    /**
     * Sets this matrix as rotation transform around y axis by theta radians.
     *
     * @param theta Rotation angle in radians.
     */
    makeRotationY(theta: number): Matrix4;

    /**
     * Sets this matrix as rotation transform around z axis by theta radians.
     *
     * @param theta Rotation angle in radians.
     */
    makeRotationZ(theta: number): Matrix4;

    /**
     * Sets this matrix as rotation transform around axis by angle radians.
     * Based on http://www.gamedev.net/reference/articles/article1199.asp.
     *
     * @param axis Rotation axis.
     * @param theta Rotation angle in radians.
     */
    makeRotationAxis(axis: Vector3, angle: number): Matrix4;

    /**
     * Sets this matrix as scale transform.
     */
    makeScale(x: number, y: number, z: number): Matrix4;

    /**
     * Sets this matrix to the transformation composed of translation, rotation and scale.
     */
    compose(translation: Vector3, rotation: Quaternion, scale: Vector3): Matrix4;

    /**
     * Decomposes this matrix into it's position, quaternion and scale components.
     */
    decompose(translation: Vector3, rotation: Quaternion, scale: Vector3): Matrix4;

    /**
     * Creates a frustum matrix.
     */
    makePerspective(left: number, right: number, bottom: number, top: number, near: number, far: number): Matrix4;

    /**
     * Creates a perspective projection matrix.
     */
    makePerspective(fov: number, aspect: number, near: number, far: number): Matrix4;

    /**
     * Creates an orthographic projection matrix.
     */
    makeOrthographic(left: number, right: number, top: number, bottom: number, near: number, far: number): Matrix4;
    equals(matrix: Matrix4): boolean;

    /**
     * Sets the values of this matrix from the provided array or array-like.
     * @param array the source array or array-like.
     * @param offset (optional) offset into the array-like. Default is 0.
     */
    fromArray(array: number[] | ArrayLike<number>, offset?: number): Matrix4;

    /**
     * Returns an array with the values of this matrix, or copies them into the provided array.
     * @param array (optional) array to store the matrix to. If this is not provided, a new array will be created.
     * @param offset (optional) optional offset into the array.
     * @return The created or provided array.
     */
    toArray(array?: number[], offset?: number): number[];
    toArray(array?: Matrix4Tuple, offset?: 0): Matrix4Tuple;

    /**
     * Copies he values of this matrix into the provided array-like.
     * @param array array-like to store the matrix to.
     * @param offset (optional) optional offset into the array-like.
     * @return The provided array-like.
     */
    toArray(array?: ArrayLike<number>, offset?: number): ArrayLike<number>;

    /**
     * @deprecated Use {@link Matrix4#copyPosition .copyPosition()} instead.
     */
    extractPosition(m: Matrix4): Matrix4;

    /**
     * @deprecated Use {@link Matrix4#makeRotationFromQuaternion .makeRotationFromQuaternion()} instead.
     */
    setRotationFromQuaternion(q: Quaternion): Matrix4;

    /**
     * @deprecated Use {@link Vector3#applyMatrix4 vector.applyMatrix4( matrix )} instead.
     */
    multiplyVector3(v: any): any;

    /**
     * @deprecated Use {@link Vector4#applyMatrix4 vector.applyMatrix4( matrix )} instead.
     */
    multiplyVector4(v: any): any;

    /**
     * @deprecated This method has been removed completely.
     */
    multiplyVector3Array(array: number[]): number[];

    /**
     * @deprecated Use {@link Vector3#transformDirection Vector3.transformDirection( matrix )} instead.
     */
    rotateAxis(v: any): void;

    /**
     * @deprecated Use {@link Vector3#applyMatrix4 vector.applyMatrix4( matrix )} instead.
     */
    crossVector(v: any): void;

    /**
     * @deprecated Use {@link Matrix4#toArray .toArray()} instead.
     */
    flattenToArrayOffset(array: number[], offset: number): number[];

    /**
     * @deprecated Use {@link Matrix4#invert .invert()} instead.
     */
    getInverse(matrix: Matrix): Matrix;
}

export declare type Matrix4Tuple = [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
];

export declare const MaxEquation: BlendingEquation;

export declare function mergeUniforms(uniforms: any[]): any;

export declare class Mesh<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[]
> extends Object3D {
    constructor(geometry?: TGeometry, material?: TMaterial);

    geometry: TGeometry;
    material: TMaterial;
    morphTargetInfluences?: number[];
    morphTargetDictionary?: { [key: string]: number };
    readonly isMesh: true;
    type: string;

    updateMorphTargets(): void;
    raycast(raycaster: Raycaster, intersects: Intersection[]): void;
}

export declare class MeshBasicMaterial extends Material {
    constructor(parameters?: MeshBasicMaterialParameters);

    /**
     * @default 'MeshBasicMaterial'
     */
    type: string;

    /**
     * @default new THREE.Color( 0xffffff )
     */
    color: Color;

    /**
     * @default null
     */
    map: Texture | null;

    /**
     * @default null
     */
    aoMap: Texture | null;

    /**
     * @default 1
     */
    aoMapIntensity: number;

    /**
     * @default null
     */
    specularMap: Texture | null;

    /**
     * @default null
     */
    alphaMap: Texture | null;

    /**
     * @default null
     */
    envMap: Texture | null;

    /**
     * @default THREE.MultiplyOperation
     */
    combine: Combine;

    /**
     * @default 1
     */
    reflectivity: number;

    /**
     * @default 0.98
     */
    refractionRatio: number;

    /**
     * @default false
     */
    wireframe: boolean;

    /**
     * @default 1
     */
    wireframeLinewidth: number;

    /**
     * @default 'round'
     */
    wireframeLinecap: string;

    /**
     * @default 'round'
     */
    wireframeLinejoin: string;

    /**
     * @default false
     */
    skinning: boolean;

    /**
     * @default false
     */
    morphTargets: boolean;

    setValues(parameters: MeshBasicMaterialParameters): void;
}

/**
 * parameters is an object with one or more properties defining the material's appearance.
 */
export declare interface MeshBasicMaterialParameters extends MaterialParameters {
    color?: Color | string | number;
    opacity?: number;
    map?: Texture | null;
    aoMap?: Texture | null;
    aoMapIntensity?: number;
    specularMap?: Texture | null;
    alphaMap?: Texture | null;
    envMap?: Texture | null;
    combine?: Combine;
    reflectivity?: number;
    refractionRatio?: number;
    wireframe?: boolean;
    wireframeLinewidth?: number;
    wireframeLinecap?: string;
    wireframeLinejoin?: string;
    skinning?: boolean;
    morphTargets?: boolean;
}

export declare class MeshDepthMaterial extends Material {
    constructor(parameters?: MeshDepthMaterialParameters);

    /**
     * @default 'MeshDepthMaterial'
     */
    type: string;

    /**
     * @default null
     */
    map: Texture | null;

    /**
     * @default null
     */
    alphaMap: Texture | null;

    /**
     * @default THREE.BasicDepthPacking
     */
    depthPacking: DepthPackingStrategies;

    /**
     * @default null
     */
    displacementMap: Texture | null;

    /**
     * @default 1
     */
    displacementScale: number;

    /**
     * @default 0
     */
    displacementBias: number;

    /**
     * @default false
     */
    wireframe: boolean;

    /**
     * @default 1
     */
    wireframeLinewidth: number;

    /**
     * @default false
     */
    fog: boolean;

    setValues(parameters: MeshDepthMaterialParameters): void;
}

export declare interface MeshDepthMaterialParameters extends MaterialParameters {
    map?: Texture | null;
    alphaMap?: Texture | null;
    depthPacking?: DepthPackingStrategies;
    displacementMap?: Texture | null;
    displacementScale?: number;
    displacementBias?: number;
    wireframe?: boolean;
    wireframeLinewidth?: number;
}

export declare class MeshDistanceMaterial extends Material {
    constructor(parameters?: MeshDistanceMaterialParameters);

    /**
     * @default 'MeshDistanceMaterial'
     */
    type: string;

    /**
     * @default null
     */
    map: Texture | null;

    /**
     * @default null
     */
    alphaMap: Texture | null;

    /**
     * @default null
     */
    displacementMap: Texture | null;

    /**
     * @default 1
     */
    displacementScale: number;

    /**
     * @default 0
     */
    displacementBias: number;

    /**
     * @default 1000
     */
    farDistance: number;

    /**
     * @default 1
     */
    nearDistance: number;

    /**
     * @default new THREE.Vector3()
     */
    referencePosition: Vector3;

    /**
     * @default false
     */
    skinning: boolean;

    /**
     * @default false
     */
    morphTargets: boolean;

    /**
     * @default false
     */
    fog: boolean;

    setValues(parameters: MeshDistanceMaterialParameters): void;
}

export declare interface MeshDistanceMaterialParameters extends MaterialParameters {
    map?: Texture | null;
    alphaMap?: Texture | null;
    displacementMap?: Texture | null;
    displacementScale?: number;
    displacementBias?: number;
    farDistance?: number;
    nearDistance?: number;
    referencePosition?: Vector3;
}

export declare class MeshLambertMaterial extends Material {
    constructor(parameters?: MeshLambertMaterialParameters);

    /**
     * @default 'MeshLambertMaterial'
     */
    type: string;

    /**
     * @default new THREE.Color( 0xffffff )
     */
    color: Color;

    /**
     * @default new THREE.Color( 0x000000 )
     */
    emissive: Color;

    /**
     * @default 1
     */
    emissiveIntensity: number;

    /**
     * @default null
     */
    emissiveMap: Texture | null;

    /**
     * @default null
     */
    map: Texture | null;

    /**
     * @default null
     */
    lightMap: Texture | null;

    /**
     * @default 1
     */
    lightMapIntensity: number;

    /**
     * @default null
     */
    aoMap: Texture | null;

    /**
     * @default 1
     */
    aoMapIntensity: number;

    /**
     * @default null
     */
    specularMap: Texture | null;

    /**
     * @default null
     */
    alphaMap: Texture | null;

    /**
     * @default null
     */
    envMap: Texture | null;

    /**
     * @default THREE.MultiplyOperation
     */
    combine: Combine;

    /**
     * @default 1
     */
    reflectivity: number;

    /**
     * @default 0.98
     */
    refractionRatio: number;

    /**
     * @default false
     */
    wireframe: boolean;

    /**
     * @default 1
     */
    wireframeLinewidth: number;

    /**
     * @default 'round'
     */
    wireframeLinecap: string;

    /**
     * @default 'round'
     */
    wireframeLinejoin: string;

    /**
     * @default false
     */
    skinning: boolean;

    /**
     * @default false
     */
    morphTargets: boolean;

    /**
     * @default false
     */
    morphNormals: boolean;

    setValues(parameters: MeshLambertMaterialParameters): void;
}

export declare interface MeshLambertMaterialParameters extends MaterialParameters {
    color?: Color | string | number;
    emissive?: Color | string | number;
    emissiveIntensity?: number;
    emissiveMap?: Texture | null;
    map?: Texture | null;
    lightMap?: Texture | null;
    lightMapIntensity?: number;
    aoMap?: Texture | null;
    aoMapIntensity?: number;
    specularMap?: Texture | null;
    alphaMap?: Texture | null;
    envMap?: Texture | null;
    combine?: Combine;
    reflectivity?: number;
    refractionRatio?: number;
    wireframe?: boolean;
    wireframeLinewidth?: number;
    wireframeLinecap?: string;
    wireframeLinejoin?: string;
    skinning?: boolean;
    morphTargets?: boolean;
    morphNormals?: boolean;
}

export declare class MeshMatcapMaterial extends Material {
    constructor(parameters?: MeshMatcapMaterialParameters);

    /**
     * @default 'MeshMatcapMaterial'
     */
    type: string;

    /**
     * @default { 'MATCAP': '' }
     */
    defines: { [key: string]: any };

    /**
     * @default new THREE.Color( 0xffffff )
     */
    color: Color;

    /**
     * @default null
     */
    matcap: Texture | null;

    /**
     * @default null
     */
    map: Texture | null;

    /**
     * @default null
     */
    bumpMap: Texture | null;

    /**
     * @default 1
     */
    bumpScale: number;

    /**
     * @default null
     */
    normalMap: Texture | null;

    /**
     * @default THREE.TangentSpaceNormalMap
     */
    normalMapType: NormalMapTypes;

    /**
     * @default new Vector2( 1, 1 )
     */
    normalScale: Vector2;

    /**
     * @default null
     */
    displacementMap: Texture | null;

    /**
     * @default 1
     */
    displacementScale: number;

    /**
     * @default 0
     */
    displacementBias: number;

    /**
     * @default null
     */
    alphaMap: Texture | null;

    /**
     * @default false
     */
    skinning: boolean;

    /**
     * @default false
     */
    morphTargets: boolean;

    /**
     * @default false
     */
    morphNormals: boolean;

    /**
     * Define whether the material is rendered with flat shading. Default is false.
     * @default false
     */
    flatShading: boolean;

    setValues(parameters: MeshMatcapMaterialParameters): void;
}

export declare interface MeshMatcapMaterialParameters extends MaterialParameters {
    color?: Color | string | number;
    matcap?: Texture | null;
    map?: Texture | null;
    bumpMap?: Texture | null;
    bumpScale?: number;
    normalMap?: Texture | null;
    normalMapType?: NormalMapTypes;
    normalScale?: Vector2;
    displacementMap?: Texture | null;
    displacementScale?: number;
    displacementBias?: number;
    alphaMap?: Texture | null;
    skinning?: boolean;
    morphTargets?: boolean;
    morphNormals?: boolean;
    flatShading?: boolean;
}

export declare class MeshNormalMaterial extends Material {
    constructor(parameters?: MeshNormalMaterialParameters);

    /**
     * @default 'MeshNormalMaterial'
     */
    type: string;

    /**
     * @default null
     */
    bumpMap: Texture | null;

    /**
     * @default 1
     */
    bumpScale: number;

    /**
     * @default null
     */
    normalMap: Texture | null;

    /**
     * @default THREE.TangentSpaceNormalMap
     */
    normalMapType: NormalMapTypes;

    /**
     * @default new THREE.Vector2( 1, 1 )
     */
    normalScale: Vector2;

    /**
     * @default null
     */
    displacementMap: Texture | null;

    /**
     * @default 1
     */
    displacementScale: number;

    /**
     * @default 0
     */
    displacementBias: number;

    /**
     * @default false
     */
    wireframe: boolean;

    /**
     * @default 1
     */
    wireframeLinewidth: number;

    /**
     * @default false
     */
    skinning: boolean;

    /**
     * @default false
     */
    morphTargets: boolean;

    /**
     * @default false
     */
    morphNormals: boolean;

    /**
     * Define whether the material is rendered with flat shading. Default is false.
     * @default false
     */
    flatShading: boolean;

    setValues(parameters: MeshNormalMaterialParameters): void;
}

export declare interface MeshNormalMaterialParameters extends MaterialParameters {
    bumpMap?: Texture | null;
    bumpScale?: number;
    normalMap?: Texture | null;
    normalMapType?: NormalMapTypes;
    normalScale?: Vector2;
    displacementMap?: Texture | null;
    displacementScale?: number;
    displacementBias?: number;
    wireframe?: boolean;
    wireframeLinewidth?: number;
    skinning?: boolean;
    morphTargets?: boolean;
    morphNormals?: boolean;
    flatShading?: boolean;
}

export declare class MeshPhongMaterial extends Material {
    constructor(parameters?: MeshPhongMaterialParameters);

    /**
     * @default 'MeshNormalMaterial'
     */
    type: string;

    /**
     * @default new THREE.Color( 0xffffff )
     */
    color: Color;

    /**
     * @default new THREE.Color( 0x111111 )
     */
    specular: Color;

    /**
     * @default 30
     */
    shininess: number;

    /**
     * @default null
     */
    map: Texture | null;

    /**
     * @default null
     */
    lightMap: Texture | null;

    /**
     * @default null
     */
    lightMapIntensity: number;

    /**
     * @default null
     */
    aoMap: Texture | null;

    /**
     * @default null
     */
    aoMapIntensity: number;

    /**
     * @default new THREE.Color( 0x000000 )
     */
    emissive: Color;

    /**
     * @default 1
     */
    emissiveIntensity: number;

    /**
     * @default null
     */
    emissiveMap: Texture | null;

    /**
     * @default null
     */
    bumpMap: Texture | null;

    /**
     * @default 1
     */
    bumpScale: number;

    /**
     * @default null
     */
    normalMap: Texture | null;

    /**
     * @default THREE.TangentSpaceNormalMap
     */
    normalMapType: NormalMapTypes;

    /**
     * @default new Vector2( 1, 1 )
     */
    normalScale: Vector2;

    /**
     * @default null
     */
    displacementMap: Texture | null;

    /**
     * @default 1
     */
    displacementScale: number;

    /**
     * @default 0
     */
    displacementBias: number;

    /**
     * @default null
     */
    specularMap: Texture | null;

    /**
     * @default null
     */
    alphaMap: Texture | null;

    /**
     * @default null
     */
    envMap: Texture | null;

    /**
     * @default THREE.MultiplyOperation
     */
    combine: Combine;

    /**
     * @default 1
     */
    reflectivity: number;

    /**
     * @default 0.98
     */
    refractionRatio: number;

    /**
     * @default false
     */
    wireframe: boolean;

    /**
     * @default 1
     */
    wireframeLinewidth: number;

    /**
     * @default 'round'
     */
    wireframeLinecap: string;

    /**
     * @default 'round'
     */
    wireframeLinejoin: string;

    /**
     * @default false
     */
    skinning: boolean;

    /**
     * @default false
     */
    morphTargets: boolean;

    /**
     * @default false
     */
    morphNormals: boolean;

    /**
     * Define whether the material is rendered with flat shading. Default is false.
     * @default false
     */
    flatShading: boolean;

    /**
     * @deprecated Use {@link MeshStandardMaterial THREE.MeshStandardMaterial} instead.
     */
    metal: boolean;

    setValues(parameters: MeshPhongMaterialParameters): void;
}

export declare interface MeshPhongMaterialParameters extends MaterialParameters {
    /** geometry color in hexadecimal. Default is 0xffffff. */
    color?: Color | string | number;
    specular?: Color | string | number;
    shininess?: number;
    opacity?: number;
    map?: Texture | null;
    lightMap?: Texture | null;
    lightMapIntensity?: number;
    aoMap?: Texture | null;
    aoMapIntensity?: number;
    emissive?: Color | string | number;
    emissiveIntensity?: number;
    emissiveMap?: Texture | null;
    bumpMap?: Texture | null;
    bumpScale?: number;
    normalMap?: Texture | null;
    normalMapType?: NormalMapTypes;
    normalScale?: Vector2;
    displacementMap?: Texture | null;
    displacementScale?: number;
    displacementBias?: number;
    specularMap?: Texture | null;
    alphaMap?: Texture | null;
    envMap?: Texture | null;
    combine?: Combine;
    reflectivity?: number;
    refractionRatio?: number;
    wireframe?: boolean;
    wireframeLinewidth?: number;
    wireframeLinecap?: string;
    wireframeLinejoin?: string;
    skinning?: boolean;
    morphTargets?: boolean;
    morphNormals?: boolean;
    flatShading?: boolean;
}

export declare class MeshPhysicalMaterial extends MeshStandardMaterial {
    constructor(parameters: MeshPhysicalMaterialParameters);

    /**
     * @default 'MeshPhysicalMaterial'
     */
    type: string;

    /**
     * @default { 'STANDARD': '', 'PHYSICAL': '' }
     */
    defines: { [key: string]: any };

    /**
     * @default 0
     */
    clearcoat: number;

    /**
     * @default null
     */
    clearcoatMap: Texture | null;

    /**
     * @default 0
     */
    clearcoatRoughness: number;

    /**
     * @default null
     */
    clearcoatRoughnessMap: Texture | null;

    /**
     * @default new THREE.Vector2( 1, 1 )
     */
    clearcoatNormalScale: Vector2;

    /**
     * @default null
     */
    clearcoatNormalMap: Texture | null;

    /**
     * @default 0.5
     */
    reflectivity: number;

    /**
     * @default 1.5
     */
    ior: number;

    /**
     * @default null
     */
    sheen: Color | null;

    /**
     * @default 0
     */
    transmission: number;

    /**
     * @default null
     */
    transmissionMap: Texture | null;
}

export declare interface MeshPhysicalMaterialParameters extends MeshStandardMaterialParameters {
    clearcoat?: number;
    clearcoatMap?: Texture | null;
    clearcoatRoughness?: number;
    clearcoatRoughnessMap?: Texture | null;
    clearcoatNormalScale?: Vector2;
    clearcoatNormalMap?: Texture | null;

    reflectivity?: number;
    ior?: number;

    sheen?: Color;

    transmission?: number;
    transmissionMap?: Texture | null;
}

export declare class MeshStandardMaterial extends Material {
    constructor(parameters?: MeshStandardMaterialParameters);

    /**
     * @default 'MeshStandardMaterial'
     */
    type: string;

    /**
     * @default { 'STANDARD': '' }
     */
    defines: { [key: string]: any };

    /**
     * @default new THREE.Color( 0xffffff )
     */
    color: Color;

    /**
     * @default 1
     */
    roughness: number;

    /**
     * @default 0
     */
    metalness: number;

    /**
     * @default null
     */
    map: Texture | null;

    /**
     * @default null
     */
    lightMap: Texture | null;

    /**
     * @default 1
     */
    lightMapIntensity: number;

    /**
     * @default null
     */
    aoMap: Texture | null;

    /**
     * @default 1
     */
    aoMapIntensity: number;

    /**
     * @default new THREE.Color( 0x000000 )
     */
    emissive: Color;

    /**
     * @default 1
     */
    emissiveIntensity: number;

    /**
     * @default null
     */
    emissiveMap: Texture | null;

    /**
     * @default null
     */
    bumpMap: Texture | null;

    /**
     * @default 1
     */
    bumpScale: number;

    /**
     * @default null
     */
    normalMap: Texture | null;

    /**
     * @default THREE.TangentSpaceNormalMap
     */
    normalMapType: NormalMapTypes;

    /**
     * @default new THREE.Vector2( 1, 1 )
     */
    normalScale: Vector2;

    /**
     * @default null
     */
    displacementMap: Texture | null;

    /**
     * @default 1
     */
    displacementScale: number;

    /**
     * @default 0
     */
    displacementBias: number;

    /**
     * @default null
     */
    roughnessMap: Texture | null;

    /**
     * @default null
     */
    metalnessMap: Texture | null;

    /**
     * @default null
     */
    alphaMap: Texture | null;

    /**
     * @default null
     */
    envMap: Texture | null;

    /**
     * @default 1
     */
    envMapIntensity: number;

    /**
     * @default 0.98
     */
    refractionRatio: number;

    /**
     * @default false
     */
    wireframe: boolean;

    /**
     * @default 1
     */
    wireframeLinewidth: number;

    /**
     * @default 'round'
     */
    wireframeLinecap: string;

    /**
     * @default 'round'
     */
    wireframeLinejoin: string;

    /**
     * @default false
     */
    skinning: boolean;

    /**
     * @default false
     */
    vertexTangents: boolean;

    /**
     * @default false
     */
    morphTargets: boolean;

    /**
     * @default false
     */
    morphNormals: boolean;

    /**
     * Define whether the material is rendered with flat shading. Default is false.
     * @default false
     */
    flatShading: boolean;

    isMeshStandardMaterial: boolean;

    setValues(parameters: MeshStandardMaterialParameters): void;
}

export declare interface MeshStandardMaterialParameters extends MaterialParameters {
    color?: Color | string | number;
    roughness?: number;
    metalness?: number;
    map?: Texture | null;
    lightMap?: Texture | null;
    lightMapIntensity?: number;
    aoMap?: Texture | null;
    aoMapIntensity?: number;
    emissive?: Color | string | number;
    emissiveIntensity?: number;
    emissiveMap?: Texture | null;
    bumpMap?: Texture | null;
    bumpScale?: number;
    normalMap?: Texture | null;
    normalMapType?: NormalMapTypes;
    normalScale?: Vector2;
    displacementMap?: Texture | null;
    displacementScale?: number;
    displacementBias?: number;
    roughnessMap?: Texture | null;
    metalnessMap?: Texture | null;
    alphaMap?: Texture | null;
    envMap?: Texture | null;
    envMapIntensity?: number;
    refractionRatio?: number;
    wireframe?: boolean;
    wireframeLinewidth?: number;
    skinning?: boolean;
    vertexTangents?: boolean;
    morphTargets?: boolean;
    morphNormals?: boolean;
    flatShading?: boolean;
}

export declare class MeshToonMaterial extends Material {
    constructor(parameters?: MeshToonMaterialParameters);

    /**
     * @default 'MeshToonMaterial'
     */
    type: string;

    /**
     * @default { 'TOON': '' }
     */
    defines: { [key: string]: any };

    /**
     * @default new THREE.Color( 0xffffff )
     */
    color: Color;

    /**
     * @default null
     */
    gradientMap: Texture | null;

    /**
     * @default null
     */
    map: Texture | null;

    /**
     * @default null
     */
    lightMap: Texture | null;

    /**
     * @default 1
     */
    lightMapIntensity: number;

    /**
     * @default null
     */
    aoMap: Texture | null;

    /**
     * @default 1
     */
    aoMapIntensity: number;

    /**
     * @default new THREE.Color( 0x000000 )
     */
    emissive: Color;

    /**
     * @default 1
     */
    emissiveIntensity: number;

    /**
     * @default null
     */
    emissiveMap: Texture | null;

    /**
     * @default null
     */
    bumpMap: Texture | null;

    /**
     * @default 1
     */
    bumpScale: number;

    /**
     * @default null
     */
    normalMap: Texture | null;

    /**
     * @default THREE.TangentSpaceNormalMap
     */
    normalMapType: NormalMapTypes;

    /**
     * @default new THREE.Vector2( 1, 1 )
     */
    normalScale: Vector2;

    /**
     * @default null
     */
    displacementMap: Texture | null;

    /**
     * @default 1
     */
    displacementScale: number;

    /**
     * @default 0
     */
    displacementBias: number;

    /**
     * @default null
     */
    alphaMap: Texture | null;

    /**
     * @default false
     */
    wireframe: boolean;

    /**
     * @default 1
     */
    wireframeLinewidth: number;

    /**
     * @default 'round'
     */
    wireframeLinecap: string;

    /**
     * @default 'round'
     */
    wireframeLinejoin: string;

    /**
     * @default false
     */
    skinning: boolean;

    /**
     * @default false
     */
    morphTargets: boolean;

    /**
     * @default false
     */
    morphNormals: boolean;

    setValues(parameters: MeshToonMaterialParameters): void;
}

export declare interface MeshToonMaterialParameters extends MaterialParameters {
    /** geometry color in hexadecimal. Default is 0xffffff. */
    color?: Color | string | number;
    opacity?: number;
    gradientMap?: Texture | null;
    map?: Texture | null;
    lightMap?: Texture | null;
    lightMapIntensity?: number;
    aoMap?: Texture | null;
    aoMapIntensity?: number;
    emissive?: Color | string | number;
    emissiveIntensity?: number;
    emissiveMap?: Texture | null;
    bumpMap?: Texture | null;
    bumpScale?: number;
    normalMap?: Texture | null;
    normalMapType?: NormalMapTypes;
    normalScale?: Vector2;
    displacementMap?: Texture | null;
    displacementScale?: number;
    displacementBias?: number;
    alphaMap?: Texture | null;
    wireframe?: boolean;
    wireframeLinewidth?: number;
    wireframeLinecap?: string;
    wireframeLinejoin?: string;
    skinning?: boolean;
    morphTargets?: boolean;
    morphNormals?: boolean;
}

export declare const MinEquation: BlendingEquation;

export declare const MirroredRepeatWrapping: Wrapping;

export declare const MixOperation: Combine;

export declare interface MorphTarget {
    name: string;
    vertices: Vector3[];
}

export declare enum MOUSE {
    LEFT,
    MIDDLE,
    RIGHT,
    ROTATE,
    DOLLY,
    PAN,
}

export declare const MultiplyBlending: Blending;

export declare const MultiplyOperation: Combine;

declare interface Navigator_2 {
    xr?: XR;
}
export { Navigator_2 as Navigator }

export declare const NearestFilter: TextureFilter;

export declare const NearestMipMapLinearFilter: TextureFilter;

export declare const NearestMipmapLinearFilter: TextureFilter;

export declare const NearestMipMapNearestFilter: TextureFilter;

export declare const NearestMipmapNearestFilter: TextureFilter;

export declare const NeverDepth: DepthModes;

export declare const NeverStencilFunc: StencilFunc;

export declare const NoBlending: Blending;

export declare const NormalAnimationBlendMode: AnimationBlendMode;

export declare const NormalBlending: Blending;

export declare enum NormalMapTypes {}

export declare const NotEqualDepth: DepthModes;

export declare const NotEqualStencilFunc: StencilFunc;

export declare const NoToneMapping: ToneMapping;

export declare class NumberKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: any[], values: any[], interpolation?: InterpolationModes);

    /**
     * @default 'number'
     */
    ValueTypeName: string;
}

/**
 * Base class for scene graph objects
 */
export declare class Object3D extends EventDispatcher {
    constructor();

    /**
     * Unique number of this object instance.
     */
    id: number;

    uuid: string;

    /**
     * Optional name of the object (doesn't need to be unique).
     * @default ''
     */
    name: string;

    /**
     * @default 'Object3D'
     */
    type: string;

    /**
     * Object's parent in the scene graph.
     * @default null
     */
    parent: Object3D | null;

    /**
     * Array with object's children.
     * @default []
     */
    children: Object3D[];

    /**
     * Up direction.
     * @default THREE.Object3D.DefaultUp.clone()
     */
    up: Vector3;

    /**
     * Object's local position.
     * @default new THREE.Vector3()
     */
    readonly position: Vector3;

    /**
     * Object's local rotation (Euler angles), in radians.
     * @default new THREE.Euler()
     */
    readonly rotation: Euler;

    /**
     * Object's local rotation as a Quaternion.
     * @default new THREE.Quaternion()
     */
    readonly quaternion: Quaternion;

    /**
     * Object's local scale.
     * @default new THREE.Vector3()
     */
    readonly scale: Vector3;

    /**
     * @default new THREE.Matrix4()
     */
    readonly modelViewMatrix: Matrix4;

    /**
     * @default new THREE.Matrix3()
     */
    readonly normalMatrix: Matrix3;

    /**
     * Local transform.
     * @default new THREE.Matrix4()
     */
    matrix: Matrix4;

    /**
     * The global transform of the object. If the Object3d has no parent, then it's identical to the local transform.
     * @default new THREE.Matrix4()
     */
    matrixWorld: Matrix4;

    /**
     * When this is set, it calculates the matrix of position, (rotation or quaternion) and scale every frame and also
     * recalculates the matrixWorld property.
     * @default THREE.Object3D.DefaultMatrixAutoUpdate
     */
    matrixAutoUpdate: boolean;

    /**
     * When this is set, it calculates the matrixWorld in that frame and resets this property to false.
     * @default false
     */
    matrixWorldNeedsUpdate: boolean;

    /**
     * @default new THREE.Layers()
     */
    layers: Layers;
    /**
     * Object gets rendered if true.
     * @default true
     */
    visible: boolean;

    /**
     * Gets rendered into shadow map.
     * @default false
     */
    castShadow: boolean;

    /**
     * Material gets baked in shadow receiving.
     * @default false
     */
    receiveShadow: boolean;

    /**
     * When this is set, it checks every frame if the object is in the frustum of the camera before rendering the object.
     * If set to false the object gets rendered every frame even if it is not in the frustum of the camera.
     * @default true
     */
    frustumCulled: boolean;

    /**
     * Overrides the default rendering order of scene graph objects, from lowest to highest renderOrder.
     * Opaque and transparent objects remain sorted independently though.
     * When this property is set for an instance of Group, all descendants objects will be sorted and rendered together.
     * @default 0
     */
    renderOrder: number;

    /**
     * Array with animation clips.
     * @default []
     */
    animations: AnimationClip[];

    /**
     * An object that can be used to store custom data about the Object3d. It should not hold references to functions as these will not be cloned.
     * @default {}
     */
    userData: { [key: string]: any };

    /**
     * Custom depth material to be used when rendering to the depth map. Can only be used in context of meshes.
     * When shadow-casting with a DirectionalLight or SpotLight, if you are (a) modifying vertex positions in
     * the vertex shader, (b) using a displacement map, (c) using an alpha map with alphaTest, or (d) using a
     * transparent texture with alphaTest, you must specify a customDepthMaterial for proper shadows.
     */
    customDepthMaterial: Material;

    /**
     * Same as customDepthMaterial, but used with PointLight.
     */
    customDistanceMaterial: Material;

    /**
     * Used to check whether this or derived classes are Object3Ds. Default is true.
     * You should not change this, as it is used internally for optimisation.
     */
    readonly isObject3D: true;

    /**
     * Calls before rendering object
     */
    onBeforeRender: (
        renderer: WebGLRenderer,
        scene: Scene,
        camera: Camera,
        geometry: BufferGeometry,
        material: Material,
        group: Group,
    ) => void;

    /**
     * Calls after rendering object
     */
    onAfterRender: (
        renderer: WebGLRenderer,
        scene: Scene,
        camera: Camera,
        geometry: BufferGeometry,
        material: Material,
        group: Group,
    ) => void;

    static DefaultUp: Vector3;
    static DefaultMatrixAutoUpdate: boolean;

    /**
     * This updates the position, rotation and scale with the matrix.
     */
    applyMatrix4(matrix: Matrix4): void;

    applyQuaternion(quaternion: Quaternion): this;

    setRotationFromAxisAngle(axis: Vector3, angle: number): void;

    setRotationFromEuler(euler: Euler): void;

    setRotationFromMatrix(m: Matrix4): void;

    setRotationFromQuaternion(q: Quaternion): void;

    /**
     * Rotate an object along an axis in object space. The axis is assumed to be normalized.
     * @param axis	A normalized vector in object space.
     * @param angle	The angle in radians.
     */
    rotateOnAxis(axis: Vector3, angle: number): this;

    /**
     * Rotate an object along an axis in world space. The axis is assumed to be normalized. Method Assumes no rotated parent.
     * @param axis	A normalized vector in object space.
     * @param angle	The angle in radians.
     */
    rotateOnWorldAxis(axis: Vector3, angle: number): this;

    /**
     *
     * @param angle
     */
    rotateX(angle: number): this;

    /**
     *
     * @param angle
     */
    rotateY(angle: number): this;

    /**
     *
     * @param angle
     */
    rotateZ(angle: number): this;

    /**
     * @param axis	A normalized vector in object space.
     * @param distance	The distance to translate.
     */
    translateOnAxis(axis: Vector3, distance: number): this;

    /**
     * Translates object along x axis by distance.
     * @param distance Distance.
     */
    translateX(distance: number): this;

    /**
     * Translates object along y axis by distance.
     * @param distance Distance.
     */
    translateY(distance: number): this;

    /**
     * Translates object along z axis by distance.
     * @param distance Distance.
     */
    translateZ(distance: number): this;

    /**
     * Updates the vector from local space to world space.
     * @param vector A local vector.
     */
    localToWorld(vector: Vector3): Vector3;

    /**
     * Updates the vector from world space to local space.
     * @param vector A world vector.
     */
    worldToLocal(vector: Vector3): Vector3;

    /**
     * Rotates object to face point in space.
     * @param vector A world vector to look at.
     */
    lookAt(vector: Vector3 | number, y?: number, z?: number): void;

    /**
     * Adds object as child of this object.
     */
    add(...object: Object3D[]): this;

    /**
     * Removes object as child of this object.
     */
    remove(...object: Object3D[]): this;

    /**
     * Removes all child objects.
     */
    clear(): this;

    /**
     * Adds object as a child of this, while maintaining the object's world transform.
     */
    attach(object: Object3D): this;

    /**
     * Searches through the object's children and returns the first with a matching id.
     * @param id	Unique number of the object instance
     */
    getObjectById(id: number): Object3D | undefined;

    /**
     * Searches through the object's children and returns the first with a matching name.
     * @param name	String to match to the children's Object3d.name property.
     */
    getObjectByName(name: string): Object3D | undefined;

    getObjectByProperty(name: string, value: string): Object3D | undefined;

    getWorldPosition(target: Vector3): Vector3;
    getWorldQuaternion(target: Quaternion): Quaternion;
    getWorldScale(target: Vector3): Vector3;
    getWorldDirection(target: Vector3): Vector3;

    raycast(raycaster: Raycaster, intersects: Intersection[]): void;

    traverse(callback: (object: Object3D) => any): void;

    traverseVisible(callback: (object: Object3D) => any): void;

    traverseAncestors(callback: (object: Object3D) => any): void;

    /**
     * Updates local transform.
     */
    updateMatrix(): void;

    /**
     * Updates global transform of the object and its children.
     */
    updateMatrixWorld(force?: boolean): void;

    updateWorldMatrix(updateParents: boolean, updateChildren: boolean): void;

    toJSON(meta?: { geometries: any; materials: any; textures: any; images: any }): any;

    clone(recursive?: boolean): Object3D;

    /**
     *
     * @param object
     * @param recursive
     */
    copy(source: this, recursive?: boolean): this;
}

export declare class ObjectLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        // tslint:disable-next-line:no-unnecessary-generics
        onLoad?: <ObjectType extends Object3D>(object: ObjectType) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: Error | ErrorEvent) => void,
    ): void;
    loadAsync<ObjectType extends Object3D>(
        url: string,
        onProgress?: (event: ProgressEvent) => void,
    ): // tslint:disable-next-line:no-unnecessary-generics
    Promise<ObjectType>;
    // tslint:disable-next-line:no-unnecessary-generics
    parse<T extends Object3D>(json: any, onLoad?: (object: Object3D) => void): T;
    parseGeometries(json: any): any[]; // Array of BufferGeometry or Geometry or Geometry2.
    parseMaterials(json: any, textures: Texture[]): Material[]; // Array of Classes that inherits from Matrial.
    parseAnimations(json: any): AnimationClip[];
    parseImages(json: any, onLoad: () => void): { [key: string]: HTMLImageElement };
    parseTextures(json: any, images: any): Texture[];
    parseObject<T extends Object3D>(
        data: any,
        geometries: any[],
        materials: Material[],
        animations: AnimationClip[],
    ): // tslint:disable-next-line:no-unnecessary-generics
    T;
}

export declare const ObjectSpaceNormalMap: NormalMapTypes;

declare class OctahedronGeometry extends PolyhedronGeometry {
    /**
     * @param [radius=1]
     * @param [detail=0]
     */
    constructor(radius?: number, detail?: number);

    /**
     * @default 'OctahedronGeometry'
     */
    type: string;
}
export { OctahedronGeometry as OctahedronBufferGeometry }
export { OctahedronGeometry }

export declare const OneFactor: BlendingDstFactor;

export declare const OneMinusDstAlphaFactor: BlendingDstFactor;

export declare const OneMinusDstColorFactor: BlendingDstFactor;

export declare const OneMinusSrcAlphaFactor: BlendingDstFactor;

export declare const OneMinusSrcColorFactor: BlendingDstFactor;

/**
 * Camera with orthographic projection
 *
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/cameras/OrthographicCamera.js|src/cameras/OrthographicCamera.js}
 *
 * @example
 * const camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );
 * scene.add( camera );
 */
export declare class OrthographicCamera extends Camera {
    /**
     * @param left Camera frustum left plane.
     * @param right Camera frustum right plane.
     * @param top Camera frustum top plane.
     * @param bottom Camera frustum bottom plane.
     * @param [near=0.1] Camera frustum near plane.
     * @param [far=2000] Camera frustum far plane.
     */
    constructor(left: number, right: number, top: number, bottom: number, near?: number, far?: number);

    type: 'OrthographicCamera';

    readonly isOrthographicCamera: true;

    /**
     * @default 1
     */
    zoom: number;

    /**
     * @default null
     */
    view: null | {
        enabled: boolean;
        fullWidth: number;
        fullHeight: number;
        offsetX: number;
        offsetY: number;
        width: number;
        height: number;
    };

    /**
     * Camera frustum left plane.
     * @default -1
     */
    left: number;

    /**
     * Camera frustum right plane.
     * @default 1
     */
    right: number;

    /**
     * Camera frustum top plane.
     * @default 1
     */
    top: number;

    /**
     * Camera frustum bottom plane.
     * @default -1
     */
    bottom: number;

    /**
     * Camera frustum near plane.
     * @default 0.1
     */
    near: number;

    /**
     * Camera frustum far plane.
     * @default 2000
     */
    far: number;

    /**
     * Updates the camera projection matrix. Must be called after change of parameters.
     */
    updateProjectionMatrix(): void;
    setViewOffset(
        fullWidth: number,
        fullHeight: number,
        offsetX: number,
        offsetY: number,
        width: number,
        height: number,
    ): void;
    clearViewOffset(): void;
    toJSON(meta?: any): any;
}

declare class ParametricGeometry extends BufferGeometry {
    constructor(func: (u: number, v: number, dest: Vector3) => void, slices: number, stacks: number);

    /**
     * @default 'ParametricGeometry'
     */
    type: string;

    parameters: {
        func: (u: number, v: number, dest: Vector3) => void;
        slices: number;
        stacks: number;
    };
}
export { ParametricGeometry as ParametricBufferGeometry }
export { ParametricGeometry }

export declare interface ParseTrackNameResults {
    nodeName: string;
    objectName: string;
    objectIndex: string;
    propertyName: string;
    propertyIndex: string;
}

/**
 * a 2d path representation, comprising of points, lines, and cubes, similar to the html5 2d canvas api. It extends CurvePath.
 */
export declare class Path extends CurvePath<Vector2> {
    constructor(points?: Vector2[]);

    /**
     * @default 'Path'
     */
    type: string;

    /**
     * @default new THREE.Vector2()
     */
    currentPoint: Vector2;

    /**
     * @deprecated Use {@link Path#setFromPoints .setFromPoints()} instead.
     */
    fromPoints(vectors: Vector2[]): this;
    setFromPoints(vectors: Vector2[]): this;
    moveTo(x: number, y: number): this;
    lineTo(x: number, y: number): this;
    quadraticCurveTo(aCPx: number, aCPy: number, aX: number, aY: number): this;
    bezierCurveTo(aCP1x: number, aCP1y: number, aCP2x: number, aCP2y: number, aX: number, aY: number): this;
    splineThru(pts: Vector2[]): this;
    arc(aX: number, aY: number, aRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean): this;
    absarc(aX: number, aY: number, aRadius: number, aStartAngle: number, aEndAngle: number, aClockwise: boolean): this;
    ellipse(
        aX: number,
        aY: number,
        xRadius: number,
        yRadius: number,
        aStartAngle: number,
        aEndAngle: number,
        aClockwise: boolean,
        aRotation: number,
    ): this;
    absellipse(
        aX: number,
        aY: number,
        xRadius: number,
        yRadius: number,
        aStartAngle: number,
        aEndAngle: number,
        aClockwise: boolean,
        aRotation: number,
    ): this;
}

export declare const PCFShadowMap: ShadowMapType;

export declare const PCFSoftShadowMap: ShadowMapType;

/**
 * Camera with perspective projection.
 *
 * @source https://github.com/mrdoob/three.js/blob/master/src/cameras/PerspectiveCamera.js
 */
export declare class PerspectiveCamera extends Camera {
    /**
     * @param [fov=50] Camera frustum vertical field of view. Default value is 50.
     * @param [aspect=1] Camera frustum aspect ratio. Default value is 1.
     * @param [near=0.1] Camera frustum near plane. Default value is 0.1.
     * @param [far=2000] Camera frustum far plane. Default value is 2000.
     */
    constructor(fov?: number, aspect?: number, near?: number, far?: number);

    type: 'PerspectiveCamera';

    readonly isPerspectiveCamera: true;

    /**
     * @default 1
     */
    zoom: number;

    /**
     * Camera frustum vertical field of view, from bottom to top of view, in degrees.
     * @default 50
     */
    fov: number;

    /**
     * Camera frustum aspect ratio, window width divided by window height.
     * @default 1
     */
    aspect: number;

    /**
     * Camera frustum near plane.
     * @default 0.1
     */
    near: number;

    /**
     * Camera frustum far plane.
     * @default 2000
     */
    far: number;

    /**
     * @default 10
     */
    focus: number;

    /**
     * @default null
     */
    view: null | {
        enabled: boolean;
        fullWidth: number;
        fullHeight: number;
        offsetX: number;
        offsetY: number;
        width: number;
        height: number;
    };

    /**
     * @default 35
     */
    filmGauge: number;

    /**
     * @default 0
     */
    filmOffset: number;

    setFocalLength(focalLength: number): void;
    getFocalLength(): number;
    getEffectiveFOV(): number;
    getFilmWidth(): number;
    getFilmHeight(): number;

    /**
     * Sets an offset in a larger frustum. This is useful for multi-window or multi-monitor/multi-machine setups.
     * For example, if you have 3x2 monitors and each monitor is 1920x1080 and the monitors are in grid like this:
     *
     * +---+---+---+
     * | A | B | C |
     * +---+---+---+
     * | D | E | F |
     * +---+---+---+
     *
     * then for each monitor you would call it like this:
     *
     * const w = 1920;
     * const h = 1080;
     * const fullWidth = w * 3;
     * const fullHeight = h * 2;
     *
     * // A
     * camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
     * // B
     * camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
     * // C
     * camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
     * // D
     * camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
     * // E
     * camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
     * // F
     * camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h ); Note there is no reason monitors have to be the same size or in a grid.
     *
     * @param fullWidth full width of multiview setup
     * @param fullHeight full height of multiview setup
     * @param x horizontal offset of subcamera
     * @param y vertical offset of subcamera
     * @param width width of subcamera
     * @param height height of subcamera
     */
    setViewOffset(fullWidth: number, fullHeight: number, x: number, y: number, width: number, height: number): void;
    clearViewOffset(): void;

    /**
     * Updates the camera projection matrix. Must be called after change of parameters.
     */
    updateProjectionMatrix(): void;
    toJSON(meta?: any): any;

    /**
     * @deprecated Use {@link PerspectiveCamera#setFocalLength .setFocalLength()} and {@link PerspectiveCamera#filmGauge .filmGauge} instead.
     */
    setLens(focalLength: number, frameHeight?: number): void;
}

export declare enum PixelFormat {}

export declare type PixelFormatGPU =
    | 'ALPHA'
    | 'RGB'
    | 'RGBA'
    | 'LUMINANCE'
    | 'LUMINANCE_ALPHA'
    | 'RED_INTEGER'
    | 'R8'
    | 'R8_SNORM'
    | 'R8I'
    | 'R8UI'
    | 'R16I'
    | 'R16UI'
    | 'R16F'
    | 'R32I'
    | 'R32UI'
    | 'R32F'
    | 'RG8'
    | 'RG8_SNORM'
    | 'RG8I'
    | 'RG8UI'
    | 'RG16I'
    | 'RG16UI'
    | 'RG16F'
    | 'RG32I'
    | 'RG32UI'
    | 'RG32F'
    | 'RGB565'
    | 'RGB8'
    | 'RGB8_SNORM'
    | 'RGB8I'
    | 'RGB8UI'
    | 'RGB16I'
    | 'RGB16UI'
    | 'RGB16F'
    | 'RGB32I'
    | 'RGB32UI'
    | 'RGB32F'
    | 'RGB9_E5'
    | 'SRGB8'
    | 'R11F_G11F_B10F'
    | 'RGBA4'
    | 'RGBA8'
    | 'RGBA8_SNORM'
    | 'RGBA8I'
    | 'RGBA8UI'
    | 'RGBA16I'
    | 'RGBA16UI'
    | 'RGBA16F'
    | 'RGBA32I'
    | 'RGBA32UI'
    | 'RGBA32F'
    | 'RGB5_A1'
    | 'RGB10_A2'
    | 'RGB10_A2UI'
    | 'SRGB8_ALPHA8'
    | 'DEPTH_COMPONENT16'
    | 'DEPTH_COMPONENT24'
    | 'DEPTH_COMPONENT32F'
    | 'DEPTH24_STENCIL8'
    | 'DEPTH32F_STENCIL8';

export declare class Plane {
    constructor(normal?: Vector3, constant?: number);

    /**
     * @default new THREE.Vector3( 1, 0, 0 )
     */
    normal: Vector3;

    /**
     * @default 0
     */
    constant: number;

    readonly isPlane: true;

    set(normal: Vector3, constant: number): Plane;
    setComponents(x: number, y: number, z: number, w: number): Plane;
    setFromNormalAndCoplanarPoint(normal: Vector3, point: Vector3): Plane;
    setFromCoplanarPoints(a: Vector3, b: Vector3, c: Vector3): Plane;
    clone(): Plane;
    copy(plane: Plane): this;
    normalize(): Plane;
    negate(): Plane;
    distanceToPoint(point: Vector3): number;
    distanceToSphere(sphere: Sphere): number;
    projectPoint(point: Vector3, target: Vector3): Vector3;
    orthoPoint(point: Vector3, target: Vector3): Vector3;
    intersectLine(line: Line3, target: Vector3): Vector3 | undefined;
    intersectsLine(line: Line3): boolean;
    intersectsBox(box: Box3): boolean;
    intersectsSphere(sphere: Sphere): boolean;
    coplanarPoint(target: Vector3): Vector3;
    applyMatrix4(matrix: Matrix4, optionalNormalMatrix?: Matrix3): Plane;
    translate(offset: Vector3): Plane;
    equals(plane: Plane): boolean;

    /**
     * @deprecated Use {@link Plane#intersectsLine .intersectsLine()} instead.
     */
    isIntersectionLine(l: any): any;
}

declare class PlaneGeometry extends BufferGeometry {
    /**
     * @param [width=1] — Width of the sides on the X axis.
     * @param [height=1] — Height of the sides on the Y axis.
     * @param [widthSegments=1] — Number of segmented faces along the width of the sides.
     * @param [heightSegments=1] — Number of segmented faces along the height of the sides.
     */
    constructor(width?: number, height?: number, widthSegments?: number, heightSegments?: number);

    /**
     * @default 'PlaneGeometry'
     */
    type: string;

    parameters: {
        width: number;
        height: number;
        widthSegments: number;
        heightSegments: number;
    };
}
export { PlaneGeometry as PlaneBufferGeometry }
export { PlaneGeometry }

export declare class PlaneHelper extends LineSegments {
    /**
     * @param plane
     * @param [size=1]
     * @param [hex=0xffff00]
     */
    constructor(plane: Plane, size?: number, hex?: number);

    /**
     * @default 'PlaneHelper'
     */
    type: string;

    plane: Plane;

    /**
     * @default 1
     */
    size: number;

    updateMatrixWorld(force?: boolean): void;
}

export declare class PMREMGenerator {
    constructor(renderer: WebGLRenderer);
    fromScene(scene: Scene, sigma?: number, near?: number, far?: number): WebGLRenderTarget;
    fromEquirectangular(equirectangular: Texture): WebGLRenderTarget;
    fromCubemap(cubemap: CubeTexture): WebGLRenderTarget;
    compileCubemapShader(): void;
    compileEquirectangularShader(): void;
    dispose(): void;
}

/**
 * @example
 * const light = new THREE.PointLight( 0xff0000, 1, 100 );
 * light.position.set( 50, 50, 50 );
 * scene.add( light );
 */
export declare class PointLight extends Light {
    constructor(color?: Color | string | number, intensity?: number, distance?: number, decay?: number);

    /**
     * @default 'PointLight'
     */
    type: string;

    /**
     * Light's intensity.
     * @default 1
     */
    intensity: number;

    /**
     * If non-zero, light will attenuate linearly from maximum intensity at light position down to zero at distance.
     * @default 0
     */
    distance: number;

    /**
     * @default 1
     */
    decay: number;

    /**
     * @default new THREE.PointLightShadow()
     */
    shadow: PointLightShadow;

    power: number;
}

export declare class PointLightHelper extends Object3D {
    constructor(light: PointLight, sphereSize?: number, color?: Color | string | number);

    /**
     * @default 'PointLightHelper'
     */
    type: string;

    light: PointLight;
    color: Color | string | number | undefined;
    matrix: Matrix4;

    /**
     * @default false
     */
    matrixAutoUpdate: boolean;

    dispose(): void;
    update(): void;
}

export declare class PointLightShadow extends LightShadow {
    camera: PerspectiveCamera;
}

/**
 * A class for displaying points. The points are rendered by the WebGLRenderer using gl.POINTS.
 */
export declare class Points<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[]
> extends Object3D {
    /**
     * @param geometry An instance of BufferGeometry.
     * @param material An instance of Material (optional).
     */
    constructor(geometry?: TGeometry, material?: TMaterial);

    type: 'Points';
    morphTargetInfluences?: number[];
    morphTargetDictionary?: { [key: string]: number };
    readonly isPoints: true;

    /**
     * An instance of BufferGeometry, where each vertex designates the position of a particle in the system.
     */
    geometry: TGeometry;

    /**
     * An instance of Material, defining the object's appearance. Default is a PointsMaterial with randomised colour.
     */
    material: TMaterial;

    raycast(raycaster: Raycaster, intersects: Intersection[]): void;
    updateMorphTargets(): void;
}

export declare class PointsMaterial extends Material {
    constructor(parameters?: PointsMaterialParameters);

    /**
     * @default 'PointsMaterial'
     */
    type: string;

    /**
     * @default new THREE.Color( 0xffffff )
     */
    color: Color;

    /**
     * @default null
     */
    map: Texture | null;

    /**
     * @default null
     */
    alphaMap: Texture | null;

    /**
     * @default 1
     */
    size: number;

    /**
     * @default true
     */
    sizeAttenuation: boolean;

    /**
     * @default false
     */
    morphTargets: boolean;

    setValues(parameters: PointsMaterialParameters): void;
}

export declare interface PointsMaterialParameters extends MaterialParameters {
    color?: Color | string | number;
    map?: Texture | null;
    alphaMap?: Texture | null;
    size?: number;
    sizeAttenuation?: boolean;
    morphTargets?: boolean;
}

export declare class PolarGridHelper extends LineSegments {
    /**
     * @param [radius=10]
     * @param [radials=16]
     * @param [circles=8]
     * @param [divisions=64]
     * @param [color1=0x444444]
     * @param [color2=0x888888]
     */
    constructor(
        radius: number,
        radials: number,
        circles: number,
        divisions: number,
        color1: Color | string | number | undefined,
        color2: Color | string | number | undefined,
    );

    /**
     * @default 'PolarGridHelper'
     */
    type: string;
}

declare class PolyhedronGeometry extends BufferGeometry {
    /**
     * @param vertices
     * @param indices
     * @param [radius=1]
     * @param [detail=0]
     */
    constructor(vertices: number[], indices: number[], radius?: number, detail?: number);

    /**
     * @default 'PolyhedronGeometry'
     */
    type: string;

    parameters: {
        vertices: number[];
        indices: number[];
        radius: number;
        detail: number;
    };
}
export { PolyhedronGeometry as PolyhedronBufferGeometry }
export { PolyhedronGeometry }

export declare class PositionalAudio extends Audio_2<PannerNode> {
    constructor(listener: AudioListener_2);

    panner: PannerNode;

    getOutput(): PannerNode;
    setRefDistance(value: number): this;
    getRefDistance(): number;
    setRolloffFactor(value: number): this;
    getRolloffFactor(): number;
    setDistanceModel(value: string): this;
    getDistanceModel(): string;
    setMaxDistance(value: number): this;
    getMaxDistance(): number;
    setDirectionalCone(coneInnerAngle: number, coneOuterAngle: number, coneOuterGain: number): this;
    updateMatrixWorld(force?: boolean): void;
}

export declare class PropertyBinding {
    constructor(rootNode: any, path: string, parsedPath?: any);

    path: string;
    parsedPath: any;
    node: any;
    rootNode: any;

    getValue(targetArray: any, offset: number): any;
    setValue(sourceArray: any, offset: number): void;
    bind(): void;
    unbind(): void;

    BindingType: { [bindingType: string]: number };
    Versioning: { [versioning: string]: number };

    GetterByBindingType: Array<() => void>;
    SetterByBindingTypeAndVersioning: Array<Array<() => void>>;

    static create(root: any, path: any, parsedPath?: any): PropertyBinding | PropertyBinding.Composite;
    static sanitizeNodeName(name: string): string;
    static parseTrackName(trackName: string): ParseTrackNameResults;
    static findNode(root: any, nodeName: string): any;
}

export declare namespace PropertyBinding {
    export class Composite {
        constructor(targetGroup: any, path: any, parsedPath?: any);

        getValue(array: any, offset: number): any;
        setValue(array: any, offset: number): void;
        bind(): void;
        unbind(): void;
    }
}

export declare class PropertyMixer {
    constructor(binding: any, typeName: string, valueSize: number);

    binding: any;
    valueSize: number;
    buffer: any;
    cumulativeWeight: number;
    cumulativeWeightAdditive: number;
    useCount: number;
    referenceCount: number;

    accumulate(accuIndex: number, weight: number): void;
    accumulateAdditive(weight: number): void;
    apply(accuIndex: number): void;
    saveOriginalState(): void;
    restoreOriginalState(): void;
}

export declare class QuadraticBezierCurve extends Curve<Vector2> {
    constructor(v0: Vector2, v1: Vector2, v2: Vector2);

    /**
     * @default 'QuadraticBezierCurve'
     */
    type: string;

    /**
     * @default new THREE.Vector2()
     */
    v0: Vector2;

    /**
     * @default new THREE.Vector2()
     */
    v1: Vector2;

    /**
     * @default new THREE.Vector2()
     */
    v2: Vector2;
}

export declare class QuadraticBezierCurve3 extends Curve<Vector3> {
    constructor(v0: Vector3, v1: Vector3, v2: Vector3);

    /**
     * @default 'QuadraticBezierCurve3'
     */
    type: string;

    /**
     * @default new THREE.Vector3()
     */
    v0: Vector3;

    /**
     * @default new THREE.Vector3()
     */
    v1: Vector3;

    /**
     * @default new THREE.Vector3()
     */
    v2: Vector3;
}

/**
 * Implementation of a quaternion. This is used for rotating things without incurring in the dreaded gimbal lock issue, amongst other advantages.
 *
 * @example
 * const quaternion = new THREE.Quaternion();
 * quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 2 );
 * const vector = new THREE.Vector3( 1, 0, 0 );
 * vector.applyQuaternion( quaternion );
 */
export declare class Quaternion {
    /**
     * @param x x coordinate
     * @param y y coordinate
     * @param z z coordinate
     * @param w w coordinate
     */
    constructor(x?: number, y?: number, z?: number, w?: number);

    /**
     * @default 0
     */
    x: number;

    /**
     * @default 0
     */
    y: number;

    /**
     * @default 0
     */
    z: number;

    /**
     * @default 1
     */
    w: number;
    readonly isQuaternion: true;

    /**
     * Sets values of this quaternion.
     */
    set(x: number, y: number, z: number, w: number): Quaternion;

    /**
     * Clones this quaternion.
     */
    clone(): Quaternion;

    /**
     * Copies values of q to this quaternion.
     */
    copy(q: Quaternion): this;

    /**
     * Sets this quaternion from rotation specified by Euler angles.
     */
    setFromEuler(euler: Euler): Quaternion;

    /**
     * Sets this quaternion from rotation specified by axis and angle.
     * Adapted from http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm.
     * Axis have to be normalized, angle is in radians.
     */
    setFromAxisAngle(axis: Vector3, angle: number): Quaternion;

    /**
     * Sets this quaternion from rotation component of m. Adapted from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm.
     */
    setFromRotationMatrix(m: Matrix4): Quaternion;
    setFromUnitVectors(vFrom: Vector3, vTo: Vector3): Quaternion;
    angleTo(q: Quaternion): number;
    rotateTowards(q: Quaternion, step: number): Quaternion;

    identity(): Quaternion;

    /**
     * Inverts this quaternion.
     */
    invert(): Quaternion;

    conjugate(): Quaternion;
    dot(v: Quaternion): number;
    lengthSq(): number;

    /**
     * Computes length of this quaternion.
     */
    length(): number;

    /**
     * Normalizes this quaternion.
     */
    normalize(): Quaternion;

    /**
     * Multiplies this quaternion by b.
     */
    multiply(q: Quaternion): Quaternion;
    premultiply(q: Quaternion): Quaternion;

    /**
     * Sets this quaternion to a x b
     * Adapted from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm.
     */
    multiplyQuaternions(a: Quaternion, b: Quaternion): Quaternion;

    slerp(qb: Quaternion, t: number): Quaternion;
    equals(v: Quaternion): boolean;

    /**
     * Sets this quaternion's x, y, z and w value from the provided array or array-like.
     * @param array the source array or array-like.
     * @param offset (optional) offset into the array. Default is 0.
     */
    fromArray(array: number[] | ArrayLike<number>, offset?: number): this;

    /**
     * Returns an array [x, y, z, w], or copies x, y, z and w into the provided array.
     * @param array (optional) array to store the quaternion to. If this is not provided, a new array will be created.
     * @param offset (optional) optional offset into the array.
     * @return The created or provided array.
     */
    toArray(array?: number[], offset?: number): number[];

    /**
     * Copies x, y, z and w into the provided array-like.
     * @param array array-like to store the quaternion to.
     * @param offset (optional) optional offset into the array.
     * @return The provided array-like.
     */
    toArray(array: ArrayLike<number>, offset?: number): ArrayLike<number>;

    _onChange(callback: () => void): Quaternion;
    _onChangeCallback: () => void;

    /**
     * Adapted from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/.
     */
    static slerp(qa: Quaternion, qb: Quaternion, qm: Quaternion, t: number): Quaternion;

    static slerpFlat(
        dst: number[],
        dstOffset: number,
        src0: number[],
        srcOffset: number,
        src1: number[],
        stcOffset1: number,
        t: number,
    ): Quaternion;

    static multiplyQuaternionsFlat(
        dst: number[],
        dstOffset: number,
        src0: number[],
        srcOffset: number,
        src1: number[],
        stcOffset1: number,
    ): number[];

    /**
     * @deprecated Use {@link Vector#applyQuaternion vector.applyQuaternion( quaternion )} instead.
     */
    multiplyVector3(v: any): any;

    /**
     * @deprecated Use {@link Quaternion#invert .invert()} instead.
     */
    inverse(): Quaternion;
}

export declare class QuaternionKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: any[], values: any[], interpolation?: InterpolationModes);

    /**
     * @default 'quaternion'
     */
    ValueTypeName: string;
}

export declare class QuaternionLinearInterpolant extends Interpolant {
    constructor(parameterPositions: any, samplesValues: any, sampleSize: number, resultBuffer?: any);

    interpolate_(i1: number, t0: number, t: number, t1: number): any;
}

export declare class RawShaderMaterial extends ShaderMaterial {
    constructor(parameters?: ShaderMaterialParameters);
}

export declare class Ray {
    constructor(origin?: Vector3, direction?: Vector3);

    /**
     * @default new THREE.Vector3()
     */
    origin: Vector3;

    /**
     * @default new THREE.Vector3( 0, 0, - 1 )
     */
    direction: Vector3;

    set(origin: Vector3, direction: Vector3): Ray;
    clone(): Ray;
    copy(ray: Ray): this;
    at(t: number, target: Vector3): Vector3;
    lookAt(v: Vector3): Ray;
    recast(t: number): Ray;
    closestPointToPoint(point: Vector3, target: Vector3): Vector3;
    distanceToPoint(point: Vector3): number;
    distanceSqToPoint(point: Vector3): number;
    distanceSqToSegment(
        v0: Vector3,
        v1: Vector3,
        optionalPointOnRay?: Vector3,
        optionalPointOnSegment?: Vector3,
    ): number;
    intersectSphere(sphere: Sphere, target: Vector3): Vector3 | null;
    intersectsSphere(sphere: Sphere): boolean;
    distanceToPlane(plane: Plane): number;
    intersectPlane(plane: Plane, target: Vector3): Vector3 | null;
    intersectsPlane(plane: Plane): boolean;
    intersectBox(box: Box3, target: Vector3): Vector3 | null;
    intersectsBox(box: Box3): boolean;
    intersectTriangle(a: Vector3, b: Vector3, c: Vector3, backfaceCulling: boolean, target: Vector3): Vector3 | null;
    applyMatrix4(matrix4: Matrix4): Ray;
    equals(ray: Ray): boolean;

    /**
     * @deprecated Use {@link Ray#intersectsBox .intersectsBox()} instead.
     */
    isIntersectionBox(b: any): any;

    /**
     * @deprecated Use {@link Ray#intersectsPlane .intersectsPlane()} instead.
     */
    isIntersectionPlane(p: any): any;

    /**
     * @deprecated Use {@link Ray#intersectsSphere .intersectsSphere()} instead.
     */
    isIntersectionSphere(s: any): any;
}

export declare class Raycaster {
    /**
     * This creates a new raycaster object.
     * @param origin The origin vector where the ray casts from.
     * @param direction The direction vector that gives direction to the ray. Should be normalized.
     * @param near All results returned are further away than near. Near can't be negative. Default value is 0.
     * @param far All results returned are closer then far. Far can't be lower then near . Default value is Infinity.
     */
    constructor(origin?: Vector3, direction?: Vector3, near?: number, far?: number);

    /** The Ray used for the raycasting. */
    ray: Ray;

    /**
     * The near factor of the raycaster. This value indicates which objects can be discarded based on the
     * distance. This value shouldn't be negative and should be smaller than the far property.
     * @default 0
     */
    near: number;

    /**
     * The far factor of the raycaster. This value indicates which objects can be discarded based on the
     * distance. This value shouldn't be negative and should be larger than the near property.
     * @default Infinity
     */
    far: number;

    /**
     * The camera to use when raycasting against view-dependent objects such as billboarded objects like Sprites. This field
     * can be set manually or is set when calling "setFromCamera".
     */
    camera: Camera;

    /**
     * Used by Raycaster to selectively ignore 3D objects when performing intersection tests.
     * @default new THREE.Layers()
     */
    layers: Layers;

    /**
     * @default { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} }
     */
    params: RaycasterParameters;

    /**
     * Updates the ray with a new origin and direction.
     * @param origin The origin vector where the ray casts from.
     * @param direction The normalized direction vector that gives direction to the ray.
     */
    set(origin: Vector3, direction: Vector3): void;

    /**
     * Updates the ray with a new origin and direction.
     * @param coords 2D coordinates of the mouse, in normalized device coordinates (NDC)---X and Y components should be between -1 and 1.
     * @param camera camera from which the ray should originate
     */
    setFromCamera(coords: { x: number; y: number }, camera: Camera): void;

    /**
     * Checks all intersection between the ray and the object with or without the descendants. Intersections are returned sorted by distance, closest first.
     * @param object The object to check for intersection with the ray.
     * @param recursive If true, it also checks all descendants. Otherwise it only checks intersecton with the object. Default is false.
     * @param optionalTarget (optional) target to set the result. Otherwise a new Array is instantiated. If set, you must clear this array prior to each call (i.e., array.length = 0;).
     */
    intersectObject(object: Object3D, recursive?: boolean, optionalTarget?: Intersection[]): Intersection[];

    /**
     * Checks all intersection between the ray and the objects with or without the descendants.
     * Intersections are returned sorted by distance, closest first.
     * Intersections are of the same form as those returned by .intersectObject.
     * @param objects The objects to check for intersection with the ray.
     * @param recursive If true, it also checks all descendants of the objects. Otherwise it only checks intersecton with the objects. Default is false.
     * @param optionalTarget (optional) target to set the result. Otherwise a new Array is instantiated. If set, you must clear this array prior to each call (i.e., array.length = 0;).
     */
    intersectObjects(objects: Object3D[], recursive?: boolean, optionalTarget?: Intersection[]): Intersection[];
}

export declare interface RaycasterParameters {
    Mesh?: any;
    Line?: { threshold: number };
    LOD?: any;
    Points?: { threshold: number };
    Sprite?: any;
}

export declare class RectAreaLight extends Light {
    constructor(color?: Color | string | number, intensity?: number, width?: number, height?: number);

    /**
     * @default 'RectAreaLight'
     */
    type: string;

    /**
     * @default 10
     */
    width: number;

    /**
     * @default 10
     */
    height: number;

    /**
     * @default 1
     */
    intensity: number;

    readonly isRectAreaLight: true;
}

export declare const RedFormat: PixelFormat;

export declare const RedIntegerFormat: PixelFormat;

export declare const ReinhardToneMapping: ToneMapping;

export declare interface Renderer {
    domElement: HTMLCanvasElement;

    render(scene: Object3D, camera: Camera): void;
    setSize(width: number, height: number, updateStyle?: boolean): void;
}

export declare interface RenderItem {
    id: number;
    object: Object3D;
    geometry: BufferGeometry | null;
    material: Material;
    program: WebGLProgram_2;
    groupOrder: number;
    renderOrder: number;
    z: number;
    group: Group | null;
}

export declare interface RenderTarget {}

export declare const RepeatWrapping: Wrapping;

export declare const ReplaceStencilOp: StencilOp;

export declare const ReverseSubtractEquation: BlendingEquation;

export declare const REVISION: string;

export declare const RGB_ETC1_Format: CompressedPixelFormat;

export declare const RGB_ETC2_Format: CompressedPixelFormat;

export declare const RGB_PVRTC_2BPPV1_Format: CompressedPixelFormat;

export declare const RGB_PVRTC_4BPPV1_Format: CompressedPixelFormat;

export declare const RGB_S3TC_DXT1_Format: CompressedPixelFormat;

export declare const RGBA_ASTC_10x10_Format: CompressedPixelFormat;

export declare const RGBA_ASTC_10x5_Format: CompressedPixelFormat;

export declare const RGBA_ASTC_10x6_Format: CompressedPixelFormat;

export declare const RGBA_ASTC_10x8_Format: CompressedPixelFormat;

export declare const RGBA_ASTC_12x10_Format: CompressedPixelFormat;

export declare const RGBA_ASTC_12x12_Format: CompressedPixelFormat;

export declare const RGBA_ASTC_4x4_Format: CompressedPixelFormat;

export declare const RGBA_ASTC_5x4_Format: CompressedPixelFormat;

export declare const RGBA_ASTC_5x5_Format: CompressedPixelFormat;

export declare const RGBA_ASTC_6x5_Format: CompressedPixelFormat;

export declare const RGBA_ASTC_6x6_Format: CompressedPixelFormat;

export declare const RGBA_ASTC_8x5_Format: CompressedPixelFormat;

export declare const RGBA_ASTC_8x6_Format: CompressedPixelFormat;

export declare const RGBA_ASTC_8x8_Format: CompressedPixelFormat;

export declare const RGBA_BPTC_Format: CompressedPixelFormat;

export declare const RGBA_ETC2_EAC_Format: CompressedPixelFormat;

export declare const RGBA_PVRTC_2BPPV1_Format: CompressedPixelFormat;

export declare const RGBA_PVRTC_4BPPV1_Format: CompressedPixelFormat;

export declare const RGBA_S3TC_DXT1_Format: CompressedPixelFormat;

export declare const RGBA_S3TC_DXT3_Format: CompressedPixelFormat;

export declare const RGBA_S3TC_DXT5_Format: CompressedPixelFormat;

export declare const RGBADepthPacking: DepthPackingStrategies;

export declare const RGBAFormat: PixelFormat;

export declare const RGBAIntegerFormat: PixelFormat;

export declare const RGBDEncoding: TextureEncoding;

export declare const RGBEEncoding: TextureEncoding;

export declare const RGBEFormat: PixelFormat;

export declare const RGBFormat: PixelFormat;

export declare const RGBIntegerFormat: PixelFormat;

export declare const RGBM16Encoding: TextureEncoding;

export declare const RGBM7Encoding: TextureEncoding;

export declare const RGFormat: PixelFormat;

export declare const RGIntegerFormat: PixelFormat;

declare class RingGeometry extends BufferGeometry {
    /**
     * @param [innerRadius=0.5]
     * @param [outerRadius=1]
     * @param [thetaSegments=8]
     * @param [phiSegments=1]
     * @param [thetaStart=0]
     * @param [thetaLength=Math.PI * 2]
     */
    constructor(
        innerRadius?: number,
        outerRadius?: number,
        thetaSegments?: number,
        phiSegments?: number,
        thetaStart?: number,
        thetaLength?: number,
    );

    /**
     * @default 'RingGeometry'
     */
    type: string;

    parameters: {
        innerRadius: number;
        outerRadius: number;
        thetaSegments: number;
        phiSegments: number;
        thetaStart: number;
        thetaLength: number;
    };
}
export { RingGeometry as RingBufferGeometry }
export { RingGeometry }

/**
 * Scenes allow you to set up what and where is to be rendered by three.js. This is where you place objects, lights and cameras.
 */
export declare class Scene extends Object3D {
    constructor();

    type: 'Scene';

    /**
     * A fog instance defining the type of fog that affects everything rendered in the scene. Default is null.
     * @default null
     */
    fog: FogBase | null;

    /**
     * If not null, it will force everything in the scene to be rendered with that material. Default is null.
     * @default null
     */
    overrideMaterial: Material | null;

    /**
     * @default true
     */
    autoUpdate: boolean;

    /**
     * @default null
     */
    background: null | Color | Texture | WebGLCubeRenderTarget;

    /**
     * @default null
     */
    environment: null | Texture;

    readonly isScene: true;

    /**
     * Calls before rendering scene
     */
    onBeforeRender: (
        renderer: WebGLRenderer,
        scene: Scene,
        camera: Camera,
        renderTarget: any, // any required for Object3D.onBeforeRender compatibility
    ) => void;

    /**
     * Calls after rendering scene
     */
    onAfterRender: (renderer: WebGLRenderer, scene: Scene, camera: Camera) => void;

    toJSON(meta?: any): any;
}

export declare interface Shader {
    uniforms: { [uniform: string]: IUniform };
    vertexShader: string;
    fragmentShader: string;
}

export declare let ShaderChunk: {
    [name: string]: string;

    alphamap_fragment: string;
    alphamap_pars_fragment: string;
    alphatest_fragment: string;
    aomap_fragment: string;
    aomap_pars_fragment: string;
    begin_vertex: string;
    beginnormal_vertex: string;
    bsdfs: string;
    bumpmap_pars_fragment: string;
    clipping_planes_fragment: string;
    clipping_planes_pars_fragment: string;
    clipping_planes_pars_vertex: string;
    clipping_planes_vertex: string;
    color_fragment: string;
    color_pars_fragment: string;
    color_pars_vertex: string;
    color_vertex: string;
    common: string;
    cube_frag: string;
    cube_vert: string;
    cube_uv_reflection_fragment: string;
    defaultnormal_vertex: string;
    depth_frag: string;
    depth_vert: string;
    distanceRGBA_frag: string;
    distanceRGBA_vert: string;
    displacementmap_vertex: string;
    displacementmap_pars_vertex: string;
    emissivemap_fragment: string;
    emissivemap_pars_fragment: string;
    encodings_pars_fragment: string;
    encodings_fragment: string;
    envmap_fragment: string;
    envmap_common_pars_fragment: string;
    envmap_pars_fragment: string;
    envmap_pars_vertex: string;
    envmap_vertex: string;
    equirect_frag: string;
    equirect_vert: string;
    fog_fragment: string;
    fog_pars_fragment: string;
    linedashed_frag: string;
    linedashed_vert: string;
    lightmap_fragment: string;
    lightmap_pars_fragment: string;
    lights_lambert_vertex: string;
    lights_pars_begin: string;
    envmap_physical_pars_fragment: string;
    lights_pars_map: string;
    lights_phong_fragment: string;
    lights_phong_pars_fragment: string;
    lights_physical_fragment: string;
    lights_physical_pars_fragment: string;
    lights_fragment_begin: string;
    lights_fragment_maps: string;
    lights_fragment_end: string;
    logdepthbuf_fragment: string;
    logdepthbuf_pars_fragment: string;
    logdepthbuf_pars_vertex: string;
    logdepthbuf_vertex: string;
    map_fragment: string;
    map_pars_fragment: string;
    map_particle_fragment: string;
    map_particle_pars_fragment: string;
    meshbasic_frag: string;
    meshbasic_vert: string;
    meshlambert_frag: string;
    meshlambert_vert: string;
    meshphong_frag: string;
    meshphong_vert: string;
    meshphysical_frag: string;
    meshphysical_vert: string;
    metalnessmap_fragment: string;
    metalnessmap_pars_fragment: string;
    morphnormal_vertex: string;
    morphtarget_pars_vertex: string;
    morphtarget_vertex: string;
    normal_flip: string;
    normal_frag: string;
    normal_fragment_begin: string;
    normal_fragment_maps: string;
    normal_vert: string;
    normalmap_pars_fragment: string;
    clearcoat_normal_fragment_begin: string;
    clearcoat_normal_fragment_maps: string;
    clearcoat_pars_fragment: string;
    packing: string;
    points_frag: string;
    points_vert: string;
    shadow_frag: string;
    shadow_vert: string;

    premultiplied_alpha_fragment: string;
    project_vertex: string;
    roughnessmap_fragment: string;
    roughnessmap_pars_fragment: string;
    shadowmap_pars_fragment: string;
    shadowmap_pars_vertex: string;
    shadowmap_vertex: string;
    shadowmask_pars_fragment: string;
    skinbase_vertex: string;
    skinning_pars_vertex: string;
    skinning_vertex: string;
    skinnormal_vertex: string;
    specularmap_fragment: string;
    specularmap_pars_fragment: string;
    tonemapping_fragment: string;
    tonemapping_pars_fragment: string;
    uv2_pars_fragment: string;
    uv2_pars_vertex: string;
    uv2_vertex: string;
    uv_pars_fragment: string;
    uv_pars_vertex: string;
    uv_vertex: string;
    worldpos_vertex: string;
};

export declare let ShaderLib: {
    [name: string]: Shader;
    basic: Shader;
    lambert: Shader;
    phong: Shader;
    standard: Shader;
    matcap: Shader;
    points: Shader;
    dashed: Shader;
    depth: Shader;
    normal: Shader;
    sprite: Shader;
    background: Shader;
    cube: Shader;
    equirect: Shader;
    distanceRGBA: Shader;
    shadow: Shader;
    physical: Shader;
};

export declare class ShaderMaterial extends Material {
    constructor(parameters?: ShaderMaterialParameters);

    /**
     * @default 'ShaderMaterial'
     */
    type: string;

    /**
     * @default {}
     */
    defines: { [key: string]: any };

    /**
     * @default {}
     */
    uniforms: { [uniform: string]: IUniform };
    vertexShader: string;
    fragmentShader: string;

    /**
     * @default 1
     */
    linewidth: number;

    /**
     * @default false
     */
    wireframe: boolean;

    /**
     * @default 1
     */
    wireframeLinewidth: number;

    /**
     * @default false
     */
    fog: boolean;

    /**
     * @default false
     */
    lights: boolean;

    /**
     * @default false
     */
    clipping: boolean;

    /**
     * @default false
     */
    skinning: boolean;

    /**
     * @default false
     */
    morphTargets: boolean;

    /**
     * @default false
     */
    morphNormals: boolean;
    /**
     * @deprecated Use {@link ShaderMaterial#extensions.derivatives extensions.derivatives} instead.
     */
    derivatives: any;

    /**
     * @default { derivatives: false, fragDepth: false, drawBuffers: false, shaderTextureLOD: false }
     */
    extensions: {
        derivatives: boolean;
        fragDepth: boolean;
        drawBuffers: boolean;
        shaderTextureLOD: boolean;
    };

    /**
     * @default { 'color': [ 1, 1, 1 ], 'uv': [ 0, 0 ], 'uv2': [ 0, 0 ] }
     */
    defaultAttributeValues: any;

    /**
     * @default undefined
     */
    index0AttributeName: string | undefined;

    /**
     * @default false
     */
    uniformsNeedUpdate: boolean;

    /**
     * @default null
     */
    glslVersion: GLSLVersion | null;

    isShaderMaterial: boolean;

    setValues(parameters: ShaderMaterialParameters): void;
    toJSON(meta: any): any;
}

export declare interface ShaderMaterialParameters extends MaterialParameters {
    uniforms?: { [uniform: string]: IUniform };
    vertexShader?: string;
    fragmentShader?: string;
    linewidth?: number;
    wireframe?: boolean;
    wireframeLinewidth?: number;
    lights?: boolean;
    clipping?: boolean;
    skinning?: boolean;
    morphTargets?: boolean;
    morphNormals?: boolean;
    extensions?: {
        derivatives?: boolean;
        fragDepth?: boolean;
        drawBuffers?: boolean;
        shaderTextureLOD?: boolean;
    };
    glslVersion?: GLSLVersion;
}

export declare enum Shading {}

export declare enum ShadowMapType {}

export declare class ShadowMaterial extends Material {
    constructor(parameters?: ShadowMaterialParameters);

    /**
     * @default 'ShadowMaterial'
     */
    type: string;

    /**
     * @default new THREE.Color( 0x000000 )
     */
    color: Color;

    /**
     * @default true
     */
    transparent: boolean;
}

export declare interface ShadowMaterialParameters extends MaterialParameters {
    color?: Color | string | number;
}

/**
 * Defines a 2d shape plane using paths.
 */
export declare class Shape extends Path {
    constructor(points?: Vector2[]);

    /**
     * @default 'Shape'
     */
    type: string;

    uuid: string;

    /**
     * @default []
     */
    holes: Path[];

    getPointsHoles(divisions: number): Vector2[][];

    extractPoints(
        divisions: number,
    ): {
        shape: Vector2[];
        holes: Vector2[][];
    };
}

declare class ShapeGeometry extends BufferGeometry {
    /**
     * @default 'ShapShapeGeometryeBufferGeometry'
     */
    type: string;

    constructor(shapes: Shape | Shape[], curveSegments?: number);
}
export { ShapeGeometry as ShapeBufferGeometry }
export { ShapeGeometry }

export declare class ShapePath {
    constructor();

    /**
     * @default 'ShapePath'
     */
    type: string;

    /**
     * @default new THREE.Color()
     */
    color: Color;

    /**
     * @default []
     */
    subPaths: any[];

    /**
     * @default null
     */
    currentPath: any;

    moveTo(x: number, y: number): this;
    lineTo(x: number, y: number): this;
    quadraticCurveTo(aCPx: number, aCPy: number, aX: number, aY: number): this;
    bezierCurveTo(aCP1x: number, aCP1y: number, aCP2x: number, aCP2y: number, aX: number, aY: number): this;
    splineThru(pts: Vector2[]): this;
    toShapes(isCCW: boolean, noHoles?: boolean): Shape[];
}

export declare namespace ShapeUtils {
    export function area(contour: Vec2[]): number;
    export function triangulateShape(contour: Vec2[], holes: Vec2[][]): number[][];
    export function isClockWise(pts: Vec2[]): boolean;
}

export declare const ShortType: TextureDataType;

export declare enum Side {}

export declare class Skeleton {
    constructor(bones: Bone[], boneInverses?: Matrix4[]);

    uuid: string;
    bones: Bone[];
    boneInverses: Matrix4[];
    boneMatrices: Float32Array;
    boneTexture: null | DataTexture;
    boneTextureSize: number;
    frame: number;

    init(): void;
    calculateInverses(): void;
    pose(): void;
    update(): void;
    clone(): Skeleton;
    getBoneByName(name: string): undefined | Bone;
    dispose(): void;

    /**
     * @deprecated This property has been removed completely.
     */
    useVertexTexture: boolean;
}

export declare class SkeletonHelper extends LineSegments {
    constructor(object: Object3D);

    /**
     * @default 'SkeletonHelper'
     */
    type: string;

    bones: Bone[];
    root: Object3D;

    readonly isSkeletonHelper: true;

    matrix: Matrix4;

    /**
     * @default false
     */
    matrixAutoUpdate: boolean;

    getBoneList(object: Object3D): Bone[];
    update(): void;
}

export declare class SkinnedMesh<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[]
> extends Mesh<TGeometry, TMaterial> {
    constructor(geometry?: TGeometry, material?: TMaterial, useVertexTexture?: boolean);

    bindMode: string;
    bindMatrix: Matrix4;
    bindMatrixInverse: Matrix4;
    skeleton: Skeleton;
    readonly isSkinnedMesh: true;

    bind(skeleton: Skeleton, bindMatrix?: Matrix4): void;
    pose(): void;
    normalizeSkinWeights(): void;
    updateMatrixWorld(force?: boolean): void;
}

export declare const SmoothShading: Shading;

export declare class Sphere {
    constructor(center?: Vector3, radius?: number);

    /**
     * @default new Vector3()
     */
    center: Vector3;

    /**
     * @default 1
     */
    radius: number;

    set(center: Vector3, radius: number): Sphere;
    setFromPoints(points: Vector3[], optionalCenter?: Vector3): Sphere;
    clone(): Sphere;
    copy(sphere: Sphere): this;
    isEmpty(): boolean;
    makeEmpty(): this;
    containsPoint(point: Vector3): boolean;
    distanceToPoint(point: Vector3): number;
    intersectsSphere(sphere: Sphere): boolean;
    intersectsBox(box: Box3): boolean;
    intersectsPlane(plane: Plane): boolean;
    clampPoint(point: Vector3, target: Vector3): Vector3;
    getBoundingBox(target: Box3): Box3;
    applyMatrix4(matrix: Matrix4): Sphere;
    translate(offset: Vector3): Sphere;
    equals(sphere: Sphere): boolean;

    /**
     * @deprecated Use {@link Sphere#isEmpty .isEmpty()} instead.
     */
    empty(): any;
}

declare class SphereGeometry extends BufferGeometry {
    /**
     * @param [radius=50] — sphere radius. Default is 50.
     * @param [widthSegments=8] — number of horizontal segments. Minimum value is 3, and the default is 8.
     * @param [heightSegments=6] — number of vertical segments. Minimum value is 2, and the default is 6.
     * @param [phiStart=0] — specify horizontal starting angle. Default is 0.
     * @param [phiLength=Math.PI * 2] — specify horizontal sweep angle size. Default is Math.PI * 2.
     * @param [thetaStart=0] — specify vertical starting angle. Default is 0.
     * @param [thetaLength=Math.PI * 2] — specify vertical sweep angle size. Default is Math.PI.
     */
    constructor(
        radius?: number,
        widthSegments?: number,
        heightSegments?: number,
        phiStart?: number,
        phiLength?: number,
        thetaStart?: number,
        thetaLength?: number,
    );

    /**
     * @default 'SphereGeometry'
     */
    type: string;

    parameters: {
        radius: number;
        widthSegments: number;
        heightSegments: number;
        phiStart: number;
        phiLength: number;
        thetaStart: number;
        thetaLength: number;
    };
}
export { SphereGeometry as SphereBufferGeometry }
export { SphereGeometry }

export declare class Spherical {
    constructor(radius?: number, phi?: number, theta?: number);

    /**
     * @default 1
     */
    radius: number;

    /**
     * @default 0
     */
    phi: number;

    /**
     * @default 0
     */
    theta: number;

    set(radius: number, phi: number, theta: number): this;
    clone(): Spherical;
    copy(other: Spherical): this;
    makeSafe(): this;
    setFromVector3(v: Vector3): this;
    setFromCartesianCoords(x: number, y: number, z: number): this;
}

export declare class SphericalHarmonics3 {
    constructor();

    /**
     * @default [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(),
     * new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]
     */
    coefficients: Vector3[];
    readonly isSphericalHarmonics3: true;

    set(coefficients: Vector3[]): SphericalHarmonics3;
    zero(): SphericalHarmonics3;
    add(sh: SphericalHarmonics3): SphericalHarmonics3;
    addScaledSH(sh: SphericalHarmonics3, s: number): SphericalHarmonics3;
    scale(s: number): SphericalHarmonics3;
    lerp(sh: SphericalHarmonics3, alpha: number): SphericalHarmonics3;
    equals(sh: SphericalHarmonics3): boolean;
    copy(sh: SphericalHarmonics3): SphericalHarmonics3;
    clone(): SphericalHarmonics3;

    /**
     * Sets the values of this spherical harmonics from the provided array or array-like.
     * @param array the source array or array-like.
     * @param offset (optional) offset into the array. Default is 0.
     */
    fromArray(array: number[] | ArrayLike<number>, offset?: number): this;

    /**
     * Returns an array with the values of this spherical harmonics, or copies them into the provided array.
     * @param array (optional) array to store the spherical harmonics to. If this is not provided, a new array will be created.
     * @param offset (optional) optional offset into the array.
     * @return The created or provided array.
     */
    toArray(array?: number[], offset?: number): number[];

    /**
     * Returns an array with the values of this spherical harmonics, or copies them into the provided array-like.
     * @param array array-like to store the spherical harmonics to.
     * @param offset (optional) optional offset into the array-like.
     * @return The provided array-like.
     */
    toArray(array: ArrayLike<number>, offset?: number): ArrayLike<number>;

    getAt(normal: Vector3, target: Vector3): Vector3;
    getIrradianceAt(normal: Vector3, target: Vector3): Vector3;

    static getBasisAt(normal: Vector3, shBasis: number[]): void;
}

export declare class SplineCurve extends Curve<Vector2> {
    constructor(points?: Vector2[]);

    /**
     * @default 'SplineCurve'
     */
    type: string;

    /**
     * @default []
     */
    points: Vector2[];
}

/**
 * A point light that can cast shadow in one direction.
 */
export declare class SpotLight extends Light {
    constructor(
        color?: Color | string | number,
        intensity?: number,
        distance?: number,
        angle?: number,
        penumbra?: number,
        decay?: number,
    );

    /**
     * @default 'SpotLight'
     */
    type: string;

    /**
     * @default THREE.Object3D.DefaultUp
     */
    position: Vector3;

    /**
     * Spotlight focus points at target.position.
     * @default new THREE.Object3D()
     */
    target: Object3D;

    /**
     * Light's intensity.
     * @default 1
     */
    intensity: number;

    /**
     * If non-zero, light will attenuate linearly from maximum intensity at light position down to zero at distance.
     * @default 0
     */
    distance: number;

    /**
     * Maximum extent of the spotlight, in radians, from its direction.
     * @default Math.PI / 3.
     */
    angle: number;

    /**
     * @default 1
     */
    decay: number;

    /**
     * @default new THREE.SpotLightShadow()
     */
    shadow: SpotLightShadow;
    power: number;

    /**
     * @default 0
     */
    penumbra: number;

    readonly isSpotLight: true;
}

export declare class SpotLightHelper extends Object3D {
    constructor(light: Light, color?: Color | string | number);

    light: Light;
    matrix: Matrix4;

    /**
     * @default false
     */
    matrixAutoUpdate: boolean;
    color: Color | string | number | undefined;
    cone: LineSegments;

    dispose(): void;
    update(): void;
}

export declare class SpotLightShadow extends LightShadow {
    camera: PerspectiveCamera;
    readonly isSpotLightShadow: true;

    /**
     * @default 1
     */
    focus: number;
}

export declare class Sprite extends Object3D {
    constructor(material?: SpriteMaterial);

    type: 'Sprite';
    readonly isSprite: true;

    geometry: BufferGeometry;
    material: SpriteMaterial;
    center: Vector2;

    raycast(raycaster: Raycaster, intersects: Intersection[]): void;
    copy(source: this): this;
}

export declare class SpriteMaterial extends Material {
    constructor(parameters?: SpriteMaterialParameters);
    /**
     * @default 'SpriteMaterial'
     */
    type: string;

    /**
     * @default new THREE.Color( 0xffffff )
     */
    color: Color;

    /**
     * @default null
     */
    map: Texture | null;

    /**
     * @default null
     */
    alphaMap: Texture | null;

    /**
     * @default 0
     */
    rotation: number;

    /**
     * @default true
     */
    sizeAttenuation: boolean;

    /**
     * @default true
     */
    transparent: boolean;

    readonly isSpriteMaterial: true;

    setValues(parameters: SpriteMaterialParameters): void;
    copy(source: SpriteMaterial): this;
}

export declare interface SpriteMaterialParameters extends MaterialParameters {
    color?: Color | string | number;
    map?: Texture | null;
    alphaMap?: Texture | null;
    rotation?: number;
    sizeAttenuation?: boolean;
}

export declare const SrcAlphaFactor: BlendingDstFactor;

export declare const SrcAlphaSaturateFactor: BlendingSrcFactor;

export declare const SrcColorFactor: BlendingDstFactor;

export declare const SRGB8_ALPHA8_ASTC_10x10_Format: CompressedPixelFormat;

export declare const SRGB8_ALPHA8_ASTC_10x5_Format: CompressedPixelFormat;

export declare const SRGB8_ALPHA8_ASTC_10x6_Format: CompressedPixelFormat;

export declare const SRGB8_ALPHA8_ASTC_10x8_Format: CompressedPixelFormat;

export declare const SRGB8_ALPHA8_ASTC_12x10_Format: CompressedPixelFormat;

export declare const SRGB8_ALPHA8_ASTC_12x12_Format: CompressedPixelFormat;

export declare const SRGB8_ALPHA8_ASTC_4x4_Format: CompressedPixelFormat;

export declare const SRGB8_ALPHA8_ASTC_5x4_Format: CompressedPixelFormat;

export declare const SRGB8_ALPHA8_ASTC_5x5_Format: CompressedPixelFormat;

export declare const SRGB8_ALPHA8_ASTC_6x5_Format: CompressedPixelFormat;

export declare const SRGB8_ALPHA8_ASTC_6x6_Format: CompressedPixelFormat;

export declare const SRGB8_ALPHA8_ASTC_8x5_Format: CompressedPixelFormat;

export declare const SRGB8_ALPHA8_ASTC_8x6_Format: CompressedPixelFormat;

export declare const SRGB8_ALPHA8_ASTC_8x8_Format: CompressedPixelFormat;

export declare const sRGBEncoding: TextureEncoding;

export declare const StaticCopyUsage: Usage;

export declare const StaticDrawUsage: Usage;

export declare const StaticReadUsage: Usage;

export declare enum StencilFunc {}

export declare enum StencilOp {}

export declare class StereoCamera extends Camera {
    constructor();

    type: 'StereoCamera';

    /**
     * @default 1
     */
    aspect: number;

    /**
     * @default 0.064
     */
    eyeSep: number;

    cameraL: PerspectiveCamera;
    cameraR: PerspectiveCamera;

    update(camera: PerspectiveCamera): void;
}

export declare const StreamCopyUsage: Usage;

export declare const StreamDrawUsage: Usage;

export declare const StreamReadUsage: Usage;

export declare class StringKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: any[], values: any[], interpolation?: InterpolationModes);

    /**
     * @default 'string'
     */
    ValueTypeName: string;
}

export declare const SubtractEquation: BlendingEquation;

export declare const SubtractiveBlending: Blending;

export declare const TangentSpaceNormalMap: NormalMapTypes;

declare class TetrahedronGeometry extends PolyhedronGeometry {
    /**
     * @param [radius=1]
     * @param [detail=0]
     */
    constructor(radius?: number, detail?: number);

    /**
     * @default 'TetrahedronGeometry'
     */
    type: string;
}
export { TetrahedronGeometry as TetrahedronBufferGeometry }
export { TetrahedronGeometry }

declare class TextGeometry extends ExtrudeGeometry {
    /**
     * @default 'TextGeometry'
     */
    type: string;

    constructor(text: string, parameters: TextGeometryParameters);

    parameters: {
        font: Font;
        size: number;
        height: number;
        curveSegments: number;
        bevelEnabled: boolean;
        bevelThickness: number;
        bevelSize: number;
        bevelOffset: number;
        bevelSegments: number;
    };
}
export { TextGeometry as TextBufferGeometry }
export { TextGeometry }

export declare interface TextGeometryParameters {
    font: Font;
    size?: number;
    height?: number;
    curveSegments?: number;
    bevelEnabled?: boolean;
    bevelThickness?: number;
    bevelSize?: number;
    bevelOffset?: number;
    bevelSegments?: number;
}

export declare class Texture extends EventDispatcher {
    /**
     * @param [image]
     * @param [mapping=THREE.Texture.DEFAULT_MAPPING]
     * @param [wrapS=THREE.ClampToEdgeWrapping]
     * @param [wrapT=THREE.ClampToEdgeWrapping]
     * @param [magFilter=THREE.LinearFilter]
     * @param [minFilter=THREE.LinearMipmapLinearFilter]
     * @param [format=THREE.RGBAFormat]
     * @param [type=THREE.UnsignedByteType]
     * @param [anisotropy=1]
     * @param [encoding=THREE.LinearEncoding]
     */
    constructor(
        image?: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement,
        mapping?: Mapping,
        wrapS?: Wrapping,
        wrapT?: Wrapping,
        magFilter?: TextureFilter,
        minFilter?: TextureFilter,
        format?: PixelFormat,
        type?: TextureDataType,
        anisotropy?: number,
        encoding?: TextureEncoding,
    );

    id: number;
    uuid: string;

    /**
     * @default ''
     */
    name: string;
    sourceFile: string;

    /**
     * @default THREE.Texture.DEFAULT_IMAGE
     */
    image: any; // HTMLImageElement or ImageData or { width: number, height: number } in some children;

    /**
     * @default []
     */
    mipmaps: any[]; // ImageData[] for 2D textures and CubeTexture[] for cube textures;

    /**
     * @default THREE.Texture.DEFAULT_MAPPING
     */
    mapping: Mapping;

    /**
     * @default THREE.ClampToEdgeWrapping
     */
    wrapS: Wrapping;

    /**
     * @default THREE.ClampToEdgeWrapping
     */
    wrapT: Wrapping;

    /**
     * @default THREE.LinearFilter
     */
    magFilter: TextureFilter;

    /**
     * @default THREE.LinearMipmapLinearFilter
     */
    minFilter: TextureFilter;

    /**
     * @default 1
     */
    anisotropy: number;

    /**
     * @default THREE.RGBAFormat
     */
    format: PixelFormat;

    internalFormat: PixelFormatGPU | null;

    /**
     * @default THREE.UnsignedByteType
     */
    type: TextureDataType;

    /**
     * @default new THREE.Matrix3()
     */
    matrix: Matrix3;

    /**
     * @default true
     */
    matrixAutoUpdate: boolean;

    /**
     * @default new THREE.Vector2( 0, 0 )
     */
    offset: Vector2;

    /**
     * @default new THREE.Vector2( 1, 1 )
     */
    repeat: Vector2;

    /**
     * @default new THREE.Vector2( 0, 0 )
     */
    center: Vector2;

    /**
     * @default 0
     */
    rotation: number;

    /**
     * @default true
     */
    generateMipmaps: boolean;

    /**
     * @default false
     */
    premultiplyAlpha: boolean;

    /**
     * @default true
     */
    flipY: boolean;

    /**
     * @default 4
     */
    unpackAlignment: number;

    /**
     * @default THREE.LinearEncoding
     */
    encoding: TextureEncoding;

    /**
     * @default 0
     */
    version: number;
    needsUpdate: boolean;
    readonly isTexture: true;

    onUpdate: () => void;
    static DEFAULT_IMAGE: any;
    static DEFAULT_MAPPING: any;

    clone(): Texture;
    copy(source: Texture): this;
    toJSON(meta: any): any;
    dispose(): void;
    transformUv(uv: Vector2): Vector2;
    updateMatrix(): void;
}

export declare enum TextureDataType {}

export declare enum TextureEncoding {}

export declare enum TextureFilter {}

/**
 * Class for loading a texture.
 * Unlike other loaders, this one emits events instead of using predefined callbacks. So if you're interested in getting notified when things happen, you need to add listeners to the object.
 */
export declare class TextureLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad?: (texture: Texture) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): Texture;

    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<Texture>;
}

export declare enum ToneMapping {}

declare class TorusGeometry extends BufferGeometry {
    /**
     * @param [radius=1]
     * @param [tube=0.4]
     * @param [radialSegments=8]
     * @param [tubularSegments=6]
     * @param [arc=Math.PI * 2]
     */
    constructor(radius?: number, tube?: number, radialSegments?: number, tubularSegments?: number, arc?: number);

    /**
     * @default 'TorusGeometry'
     */
    type: string;

    parameters: {
        radius: number;
        tube: number;
        radialSegments: number;
        tubularSegments: number;
        arc: number;
    };
}
export { TorusGeometry as TorusBufferGeometry }
export { TorusGeometry }

declare class TorusKnotGeometry extends BufferGeometry {
    /**
     * @param [radius=1]
     * @param [tube=0.4]
     * @param [radialSegments=64]
     * @param [tubularSegments=8]
     * @param [p=2]
     * @param [q=3]
     */
    constructor(
        radius?: number,
        tube?: number,
        tubularSegments?: number,
        radialSegments?: number,
        p?: number,
        q?: number,
    );

    /**
     * @default 'TorusKnotGeometry'
     */
    type: string;

    parameters: {
        radius: number;
        tube: number;
        tubularSegments: number;
        radialSegments: number;
        p: number;
        q: number;
    };
}
export { TorusKnotGeometry as TorusKnotBufferGeometry }
export { TorusKnotGeometry }

export declare enum TOUCH {
    ROTATE,
    PAN,
    DOLLY_PAN,
    DOLLY_ROTATE,
}

export declare class Triangle {
    constructor(a?: Vector3, b?: Vector3, c?: Vector3);

    /**
     * @default new THREE.Vector3()
     */
    a: Vector3;

    /**
     * @default new THREE.Vector3()
     */
    b: Vector3;

    /**
     * @default new THREE.Vector3()
     */
    c: Vector3;

    set(a: Vector3, b: Vector3, c: Vector3): Triangle;
    setFromPointsAndIndices(points: Vector3[], i0: number, i1: number, i2: number): Triangle;
    clone(): Triangle;
    copy(triangle: Triangle): this;
    getArea(): number;
    getMidpoint(target: Vector3): Vector3;
    getNormal(target: Vector3): Vector3;
    getPlane(target: Plane): Plane;
    getBarycoord(point: Vector3, target: Vector3): Vector3;
    getUV(point: Vector3, uv1: Vector2, uv2: Vector2, uv3: Vector2, target: Vector2): Vector2;
    containsPoint(point: Vector3): boolean;
    intersectsBox(box: Box3): boolean;
    isFrontFacing(direction: Vector3): boolean;
    closestPointToPoint(point: Vector3, target: Vector3): Vector3;
    equals(triangle: Triangle): boolean;

    static getNormal(a: Vector3, b: Vector3, c: Vector3, target: Vector3): Vector3;
    static getBarycoord(point: Vector3, a: Vector3, b: Vector3, c: Vector3, target: Vector3): Vector3;
    static containsPoint(point: Vector3, a: Vector3, b: Vector3, c: Vector3): boolean;
    static getUV(
        point: Vector3,
        p1: Vector3,
        p2: Vector3,
        p3: Vector3,
        uv1: Vector2,
        uv2: Vector2,
        uv3: Vector2,
        target: Vector2,
    ): Vector2;
    static isFrontFacing(a: Vector3, b: Vector3, c: Vector3, direction: Vector3): boolean;
}

export declare const TriangleFanDrawMode: TrianglesDrawModes;

export declare const TrianglesDrawMode: TrianglesDrawModes;

export declare enum TrianglesDrawModes {}

export declare const TriangleStripDrawMode: TrianglesDrawModes;

declare class TubeGeometry extends BufferGeometry {
    /**
     * @param path
     * @param [tubularSegments=64]
     * @param [radius=1]
     * @param [radiusSegments=8]
     * @param [closed=false]
     */
    constructor(
        path: Curve<Vector3>,
        tubularSegments?: number,
        radius?: number,
        radiusSegments?: number,
        closed?: boolean,
    );

    /**
     * @default 'TubeGeometry'
     */
    type: string;

    parameters: {
        path: Curve<Vector3>;
        tubularSegments: number;
        radius: number;
        radialSegments: number;
        closed: boolean;
    };
    tangents: Vector3[];
    normals: Vector3[];
    binormals: Vector3[];
}
export { TubeGeometry as TubeBufferGeometry }
export { TubeGeometry }

/**
 * @deprecated THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead.
 */
export declare class Uint16Attribute extends BufferAttribute {
    constructor(array: any, itemSize: number);
}

export declare class Uint16BufferAttribute extends BufferAttribute {
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * @deprecated THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead.
 */
export declare class Uint32Attribute extends BufferAttribute {
    constructor(array: any, itemSize: number);
}

export declare class Uint32BufferAttribute extends BufferAttribute {
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * @deprecated THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead.
 */
export declare class Uint8Attribute extends BufferAttribute {
    constructor(array: any, itemSize: number);
}

export declare class Uint8BufferAttribute extends BufferAttribute {
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

/**
 * @deprecated THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead.
 */
export declare class Uint8ClampedAttribute extends BufferAttribute {
    constructor(array: any, itemSize: number);
}

export declare class Uint8ClampedBufferAttribute extends BufferAttribute {
    constructor(
        array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number,
        itemSize: number,
        normalized?: boolean,
    );
}

export declare class Uniform {
    constructor(value: any);
    /**
     * @deprecated
     */
    constructor(type: string, value: any);
    /**
     * @deprecated
     */
    type: string;
    value: any;
    /**
     * @deprecated Use {@link Object3D#onBeforeRender object.onBeforeRender()} instead.
     */
    dynamic: boolean;
    onUpdateCallback: () => void;

    /**
     * @deprecated Use {@link Object3D#onBeforeRender object.onBeforeRender()} instead.
     */
    onUpdate(callback: () => void): Uniform;
}

export declare let UniformsLib: {
    common: {
        diffuse: IUniform;
        opacity: IUniform;
        map: IUniform;
        uvTransform: IUniform;
        uv2Transform: IUniform;
        alphaMap: IUniform;
    };
    specularmap: {
        specularMap: IUniform;
    };
    envmap: {
        envMap: IUniform;
        flipEnvMap: IUniform;
        reflectivity: IUniform;
        refractionRatio: IUniform;
        maxMipLevel: IUniform;
    };
    aomap: {
        aoMap: IUniform;
        aoMapIntensity: IUniform;
    };
    lightmap: {
        lightMap: IUniform;
        lightMapIntensity: IUniform;
    };
    emissivemap: {
        emissiveMap: IUniform;
    };
    bumpmap: {
        bumpMap: IUniform;
        bumpScale: IUniform;
    };
    normalmap: {
        normalMap: IUniform;
        normalScale: IUniform;
    };
    displacementmap: {
        displacementMap: IUniform;
        displacementScale: IUniform;
        displacementBias: IUniform;
    };
    roughnessmap: {
        roughnessMap: IUniform;
    };
    metalnessmap: {
        metalnessMap: IUniform;
    };
    gradientmap: {
        gradientMap: IUniform;
    };
    fog: {
        fogDensity: IUniform;
        fogNear: IUniform;
        fogFar: IUniform;
        fogColor: IUniform;
    };
    lights: {
        ambientLightColor: IUniform;
        directionalLights: {
            value: any[];
            properties: {
                direction: {};
                color: {};
            };
        };
        directionalLightShadows: {
            value: any[];
            properties: {
                shadowBias: {};
                shadowNormalBias: {};
                shadowRadius: {};
                shadowMapSize: {};
            };
        };
        directionalShadowMap: IUniform;
        directionalShadowMatrix: IUniform;
        spotLights: {
            value: any[];
            properties: {
                color: {};
                position: {};
                direction: {};
                distance: {};
                coneCos: {};
                penumbraCos: {};
                decay: {};
            };
        };
        spotLightShadows: {
            value: any[];
            properties: {
                shadowBias: {};
                shadowNormalBias: {};
                shadowRadius: {};
                shadowMapSize: {};
            };
        };
        spotShadowMap: IUniform;
        spotShadowMatrix: IUniform;
        pointLights: {
            value: any[];
            properties: {
                color: {};
                position: {};
                decay: {};
                distance: {};
            };
        };
        pointLightShadows: {
            value: any[];
            properties: {
                shadowBias: {};
                shadowNormalBias: {};
                shadowRadius: {};
                shadowMapSize: {};
            };
        };
        pointShadowMap: IUniform;
        pointShadowMatrix: IUniform;
        hemisphereLights: {
            value: any[];
            properties: {
                direction: {};
                skycolor: {};
                groundColor: {};
            };
        };
        rectAreaLights: {
            value: any[];
            properties: {
                color: {};
                position: {};
                width: {};
                height: {};
            };
        };
    };
    points: {
        diffuse: IUniform;
        opacity: IUniform;
        size: IUniform;
        scale: IUniform;
        map: IUniform;
        uvTransform: IUniform;
    };
};

export declare namespace UniformsUtils {
    export function merge( uniforms: any[] ): any;
    export function clone( uniforms_src: any ): any;
}

export declare const UnsignedByteType: TextureDataType;

export declare const UnsignedInt248Type: TextureDataType;

export declare const UnsignedIntType: TextureDataType;

export declare const UnsignedShort4444Type: TextureDataType;

export declare const UnsignedShort5551Type: TextureDataType;

export declare const UnsignedShort565Type: TextureDataType;

export declare const UnsignedShortType: TextureDataType;

export declare enum Usage {}

export declare interface UVGenerator {
    generateTopUV(
        geometry: ExtrudeGeometry,
        vertices: number[],
        indexA: number,
        indexB: number,
        indexC: number,
    ): Vector2[];
    generateSideWallUV(
        geometry: ExtrudeGeometry,
        vertices: number[],
        indexA: number,
        indexB: number,
        indexC: number,
        indexD: number,
    ): Vector2[];
}

export declare const UVMapping: Mapping;

export declare interface Vec2 {
    x: number;
    y: number;
}

/**
 * ( interface Vector<T> )
 *
 * Abstract interface of {@link https://github.com/mrdoob/three.js/blob/master/src/math/Vector2.js|Vector2},
 * {@link https://github.com/mrdoob/three.js/blob/master/src/math/Vector3.js|Vector3}
 * and {@link https://github.com/mrdoob/three.js/blob/master/src/math/Vector4.js|Vector4}.
 *
 * Currently the members of Vector is NOT type safe because it accepts different typed vectors.
 *
 * Those definitions will be changed when TypeScript innovates Generics to be type safe.
 *
 * @example
 * const v:THREE.Vector = new THREE.Vector3();
 * v.addVectors(new THREE.Vector2(0, 1), new THREE.Vector2(2, 3)); // invalid but compiled successfully
 */
export declare interface Vector {
    setComponent(index: number, value: number): this;

    getComponent(index: number): number;

    set(...args: number[]): this;

    setScalar(scalar: number): this;

    /**
     * copy(v:T):T;
     */
    copy(v: Vector): this;

    /**
     * NOTE: The second argument is deprecated.
     *
     * add(v:T):T;
     */
    add(v: Vector): this;

    /**
     * addVectors(a:T, b:T):T;
     */
    addVectors(a: Vector, b: Vector): this;

    addScaledVector(vector: Vector, scale: number): this;

    /**
     * Adds the scalar value s to this vector's values.
     */
    addScalar(scalar: number): this;

    /**
     * sub(v:T):T;
     */
    sub(v: Vector): this;

    /**
     * subVectors(a:T, b:T):T;
     */
    subVectors(a: Vector, b: Vector): this;

    /**
     * multiplyScalar(s:number):T;
     */
    multiplyScalar(s: number): this;

    /**
     * divideScalar(s:number):T;
     */
    divideScalar(s: number): this;

    /**
     * negate():T;
     */
    negate(): this;

    /**
     * dot(v:T):T;
     */
    dot(v: Vector): number;

    /**
     * lengthSq():number;
     */
    lengthSq(): number;

    /**
     * length():number;
     */
    length(): number;

    /**
     * normalize():T;
     */
    normalize(): this;

    /**
     * NOTE: Vector4 doesn't have the property.
     *
     * distanceTo(v:T):number;
     */
    distanceTo?(v: Vector): number;

    /**
     * NOTE: Vector4 doesn't have the property.
     *
     * distanceToSquared(v:T):number;
     */
    distanceToSquared?(v: Vector): number;

    /**
     * setLength(l:number):T;
     */
    setLength(l: number): this;

    /**
     * lerp(v:T, alpha:number):T;
     */
    lerp(v: Vector, alpha: number): this;

    /**
     * equals(v:T):boolean;
     */
    equals(v: Vector): boolean;

    /**
     * clone():T;
     */
    clone(): Vector;
}

/**
 * 2D vector.
 *
 * ( class Vector2 implements Vector<Vector2> )
 */
export declare class Vector2 implements Vector {
    constructor(x?: number, y?: number);

    /**
     * @default 0
     */
    x: number;

    /**
     * @default 0
     */
    y: number;
    width: number;
    height: number;
    readonly isVector2: true;

    /**
     * Sets value of this vector.
     */
    set(x: number, y: number): this;

    /**
     * Sets the x and y values of this vector both equal to scalar.
     */
    setScalar(scalar: number): this;

    /**
     * Sets X component of this vector.
     */
    setX(x: number): this;

    /**
     * Sets Y component of this vector.
     */
    setY(y: number): this;

    /**
     * Sets a component of this vector.
     */
    setComponent(index: number, value: number): this;

    /**
     * Gets a component of this vector.
     */
    getComponent(index: number): number;

    /**
     * Returns a new Vector2 instance with the same `x` and `y` values.
     */
    clone(): Vector2;

    /**
     * Copies value of v to this vector.
     */
    copy(v: Vector2): this;

    /**
     * Adds v to this vector.
     */
    add(v: Vector2, w?: Vector2): this;

    /**
     * Adds the scalar value s to this vector's x and y values.
     */
    addScalar(s: number): this;

    /**
     * Sets this vector to a + b.
     */
    addVectors(a: Vector2, b: Vector2): this;

    /**
     * Adds the multiple of v and s to this vector.
     */
    addScaledVector(v: Vector2, s: number): this;

    /**
     * Subtracts v from this vector.
     */
    sub(v: Vector2): this;

    /**
     * Subtracts s from this vector's x and y components.
     */
    subScalar(s: number): this;

    /**
     * Sets this vector to a - b.
     */
    subVectors(a: Vector2, b: Vector2): this;

    /**
     * Multiplies this vector by v.
     */
    multiply(v: Vector2): this;

    /**
     * Multiplies this vector by scalar s.
     */
    multiplyScalar(scalar: number): this;

    /**
     * Divides this vector by v.
     */
    divide(v: Vector2): this;

    /**
     * Divides this vector by scalar s.
     * Set vector to ( 0, 0 ) if s == 0.
     */
    divideScalar(s: number): this;

    /**
     * Multiplies this vector (with an implicit 1 as the 3rd component) by m.
     */
    applyMatrix3(m: Matrix3): this;

    /**
     * If this vector's x or y value is greater than v's x or y value, replace that value with the corresponding min value.
     */
    min(v: Vector2): this;

    /**
     * If this vector's x or y value is less than v's x or y value, replace that value with the corresponding max value.
     */
    max(v: Vector2): this;

    /**
     * If this vector's x or y value is greater than the max vector's x or y value, it is replaced by the corresponding value.
     * If this vector's x or y value is less than the min vector's x or y value, it is replaced by the corresponding value.
     * @param min the minimum x and y values.
     * @param max the maximum x and y values in the desired range.
     */
    clamp(min: Vector2, max: Vector2): this;

    /**
     * If this vector's x or y values are greater than the max value, they are replaced by the max value.
     * If this vector's x or y values are less than the min value, they are replaced by the min value.
     * @param min the minimum value the components will be clamped to.
     * @param max the maximum value the components will be clamped to.
     */
    clampScalar(min: number, max: number): this;

    /**
     * If this vector's length is greater than the max value, it is replaced by the max value.
     * If this vector's length is less than the min value, it is replaced by the min value.
     * @param min the minimum value the length will be clamped to.
     * @param max the maximum value the length will be clamped to.
     */
    clampLength(min: number, max: number): this;

    /**
     * The components of the vector are rounded down to the nearest integer value.
     */
    floor(): this;

    /**
     * The x and y components of the vector are rounded up to the nearest integer value.
     */
    ceil(): this;

    /**
     * The components of the vector are rounded to the nearest integer value.
     */
    round(): this;

    /**
     * The components of the vector are rounded towards zero (up if negative, down if positive) to an integer value.
     */
    roundToZero(): this;

    /**
     * Inverts this vector.
     */
    negate(): this;

    /**
     * Computes dot product of this vector and v.
     */
    dot(v: Vector2): number;

    /**
     * Computes cross product of this vector and v.
     */
    cross(v: Vector2): number;

    /**
     * Computes squared length of this vector.
     */
    lengthSq(): number;

    /**
     * Computes length of this vector.
     */
    length(): number;

    /**
     * @deprecated Use {@link Vector2#manhattanLength .manhattanLength()} instead.
     */
    lengthManhattan(): number;

    /**
     * Computes the Manhattan length of this vector.
     *
     * see {@link http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia: Taxicab Geometry}
     */
    manhattanLength(): number;

    /**
     * Normalizes this vector.
     */
    normalize(): this;

    /**
     * computes the angle in radians with respect to the positive x-axis
     */
    angle(): number;

    /**
     * Computes distance of this vector to v.
     */
    distanceTo(v: Vector2): number;

    /**
     * Computes squared distance of this vector to v.
     */
    distanceToSquared(v: Vector2): number;

    /**
     * @deprecated Use {@link Vector2#manhattanDistanceTo .manhattanDistanceTo()} instead.
     */
    distanceToManhattan(v: Vector2): number;

    /**
     * Computes the Manhattan length (distance) from this vector to the given vector v
     *
     * see {@link http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia: Taxicab Geometry}
     */
    manhattanDistanceTo(v: Vector2): number;

    /**
     * Normalizes this vector and multiplies it by l.
     */
    setLength(length: number): this;

    /**
     * Linearly interpolates between this vector and v, where alpha is the distance along the line - alpha = 0 will be this vector, and alpha = 1 will be v.
     * @param v vector to interpolate towards.
     * @param alpha interpolation factor in the closed interval [0, 1].
     */
    lerp(v: Vector2, alpha: number): this;

    /**
     * Sets this vector to be the vector linearly interpolated between v1 and v2 where alpha is the distance along the line connecting the two vectors - alpha = 0 will be v1, and alpha = 1 will be v2.
     * @param v1 the starting vector.
     * @param v2 vector to interpolate towards.
     * @param alpha interpolation factor in the closed interval [0, 1].
     */
    lerpVectors(v1: Vector2, v2: Vector2, alpha: number): this;

    /**
     * Checks for strict equality of this vector and v.
     */
    equals(v: Vector2): boolean;

    /**
     * Sets this vector's x and y value from the provided array or array-like.
     * @param array the source array or array-like.
     * @param offset (optional) offset into the array. Default is 0.
     */
    fromArray(array: number[] | ArrayLike<number>, offset?: number): this;

    /**
     * Returns an array [x, y], or copies x and y into the provided array.
     * @param array (optional) array to store the vector to. If this is not provided, a new array will be created.
     * @param offset (optional) optional offset into the array.
     * @return The created or provided array.
     */
    toArray(array?: number[], offset?: number): number[];
    toArray(array?: Vector2Tuple, offset?: 0): Vector2Tuple;

    /**
     * Copies x and y into the provided array-like.
     * @param array array-like to store the vector to.
     * @param offset (optional) optional offset into the array.
     * @return The provided array-like.
     */
    toArray(array: ArrayLike<number>, offset?: number): ArrayLike<number>;

    /**
     * Sets this vector's x and y values from the attribute.
     * @param attribute the source attribute.
     * @param index index in the attribute.
     */
    fromBufferAttribute(attribute: BufferAttribute, index: number): this;

    /**
     * Rotates the vector around center by angle radians.
     * @param center the point around which to rotate.
     * @param angle the angle to rotate, in radians.
     */
    rotateAround(center: Vector2, angle: number): this;

    /**
     * Sets this vector's x and y from Math.random
     */
    random(): this;
}

export declare type Vector2Tuple = [number, number];

/**
 * 3D vector. ( class Vector3 implements Vector<Vector3> )
 *
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/math/Vector3.js}
 *
 * @example
 * const a = new THREE.Vector3( 1, 0, 0 );
 * const b = new THREE.Vector3( 0, 1, 0 );
 * const c = new THREE.Vector3();
 * c.crossVectors( a, b );
 */
export declare class Vector3 implements Vector {
    constructor(x?: number, y?: number, z?: number);

    /**
     * @default 0
     */
    x: number;

    /**
     * @default 0
     */
    y: number;

    /**
     * @default 0
     */
    z: number;
    readonly isVector3: true;

    /**
     * Sets value of this vector.
     */
    set(x: number, y: number, z: number): this;

    /**
     * Sets all values of this vector.
     */
    setScalar(scalar: number): this;

    /**
     * Sets x value of this vector.
     */
    setX(x: number): Vector3;

    /**
     * Sets y value of this vector.
     */
    setY(y: number): Vector3;

    /**
     * Sets z value of this vector.
     */
    setZ(z: number): Vector3;

    setComponent(index: number, value: number): this;

    getComponent(index: number): number;

    /**
     * Clones this vector.
     */
    clone(): Vector3;

    /**
     * Copies value of v to this vector.
     */
    copy(v: Vector3): this;

    /**
     * Adds v to this vector.
     */
    add(v: Vector3): this;

    addScalar(s: number): this;

    addScaledVector(v: Vector3, s: number): this;

    /**
     * Sets this vector to a + b.
     */
    addVectors(a: Vector3, b: Vector3): this;

    /**
     * Subtracts v from this vector.
     */
    sub(a: Vector3): this;

    subScalar(s: number): this;

    /**
     * Sets this vector to a - b.
     */
    subVectors(a: Vector3, b: Vector3): this;

    multiply(v: Vector3): this;

    /**
     * Multiplies this vector by scalar s.
     */
    multiplyScalar(s: number): this;

    multiplyVectors(a: Vector3, b: Vector3): this;

    applyEuler(euler: Euler): this;

    applyAxisAngle(axis: Vector3, angle: number): this;

    applyMatrix3(m: Matrix3): this;

    applyNormalMatrix(m: Matrix3): this;

    applyMatrix4(m: Matrix4): this;

    applyQuaternion(q: Quaternion): this;

    project(camera: Camera): this;

    unproject(camera: Camera): this;

    transformDirection(m: Matrix4): this;

    divide(v: Vector3): this;

    /**
     * Divides this vector by scalar s.
     * Set vector to ( 0, 0, 0 ) if s == 0.
     */
    divideScalar(s: number): this;

    min(v: Vector3): this;

    max(v: Vector3): this;

    clamp(min: Vector3, max: Vector3): this;

    clampScalar(min: number, max: number): this;

    clampLength(min: number, max: number): this;

    floor(): this;

    ceil(): this;

    round(): this;

    roundToZero(): this;

    /**
     * Inverts this vector.
     */
    negate(): this;

    /**
     * Computes dot product of this vector and v.
     */
    dot(v: Vector3): number;

    /**
     * Computes squared length of this vector.
     */
    lengthSq(): number;

    /**
     * Computes length of this vector.
     */
    length(): number;

    /**
     * Computes Manhattan length of this vector.
     * http://en.wikipedia.org/wiki/Taxicab_geometry
     *
     * @deprecated Use {@link Vector3#manhattanLength .manhattanLength()} instead.
     */
    lengthManhattan(): number;

    /**
     * Computes the Manhattan length of this vector.
     *
     * see {@link http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia: Taxicab Geometry}
     */
    manhattanLength(): number;

    /**
     * Computes the Manhattan length (distance) from this vector to the given vector v
     *
     * see {@link http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia: Taxicab Geometry}
     */
    manhattanDistanceTo(v: Vector3): number;

    /**
     * Normalizes this vector.
     */
    normalize(): this;

    /**
     * Normalizes this vector and multiplies it by l.
     */
    setLength(l: number): this;
    lerp(v: Vector3, alpha: number): this;

    lerpVectors(v1: Vector3, v2: Vector3, alpha: number): this;

    /**
     * Sets this vector to cross product of itself and v.
     */
    cross(a: Vector3): this;

    /**
     * Sets this vector to cross product of a and b.
     */
    crossVectors(a: Vector3, b: Vector3): this;
    projectOnVector(v: Vector3): this;
    projectOnPlane(planeNormal: Vector3): this;
    reflect(vector: Vector3): this;
    angleTo(v: Vector3): number;

    /**
     * Computes distance of this vector to v.
     */
    distanceTo(v: Vector3): number;

    /**
     * Computes squared distance of this vector to v.
     */
    distanceToSquared(v: Vector3): number;

    /**
     * @deprecated Use {@link Vector3#manhattanDistanceTo .manhattanDistanceTo()} instead.
     */
    distanceToManhattan(v: Vector3): number;

    setFromSpherical(s: Spherical): this;
    setFromSphericalCoords(r: number, phi: number, theta: number): this;
    setFromCylindrical(s: Cylindrical): this;
    setFromCylindricalCoords(radius: number, theta: number, y: number): this;
    setFromMatrixPosition(m: Matrix4): this;
    setFromMatrixScale(m: Matrix4): this;
    setFromMatrixColumn(matrix: Matrix4, index: number): this;
    setFromMatrix3Column(matrix: Matrix3, index: number): this;

    /**
     * Checks for strict equality of this vector and v.
     */
    equals(v: Vector3): boolean;

    /**
     * Sets this vector's x, y and z value from the provided array or array-like.
     * @param array the source array or array-like.
     * @param offset (optional) offset into the array. Default is 0.
     */
    fromArray(array: number[] | ArrayLike<number>, offset?: number): this;

    /**
     * Returns an array [x, y, z], or copies x, y and z into the provided array.
     * @param array (optional) array to store the vector to. If this is not provided, a new array will be created.
     * @param offset (optional) optional offset into the array.
     * @return The created or provided array.
     */
    toArray(array?: number[], offset?: number): number[];
    toArray(array?: Vector3Tuple, offset?: 0): Vector3Tuple;

    /**
     * Copies x, y and z into the provided array-like.
     * @param array array-like to store the vector to.
     * @param offset (optional) optional offset into the array-like.
     * @return The provided array-like.
     */
    toArray(array: ArrayLike<number>, offset?: number): ArrayLike<number>;

    fromBufferAttribute(attribute: BufferAttribute | InterleavedBufferAttribute, index: number): this;

    /**
     * Sets this vector's x, y and z from Math.random
     */
    random(): this;
}

export declare type Vector3Tuple = [number, number, number];

/**
 * 4D vector.
 *
 * ( class Vector4 implements Vector<Vector4> )
 */
export declare class Vector4 implements Vector {
    constructor(x?: number, y?: number, z?: number, w?: number);

    /**
     * @default 0
     */
    x: number;

    /**
     * @default 0
     */
    y: number;

    /**
     * @default 0
     */
    z: number;

    /**
     * @default 0
     */
    w: number;

    width: number;
    height: number;
    readonly isVector4: true;

    /**
     * Sets value of this vector.
     */
    set(x: number, y: number, z: number, w: number): this;

    /**
     * Sets all values of this vector.
     */
    setScalar(scalar: number): this;

    /**
     * Sets X component of this vector.
     */
    setX(x: number): this;

    /**
     * Sets Y component of this vector.
     */
    setY(y: number): this;

    /**
     * Sets Z component of this vector.
     */
    setZ(z: number): this;

    /**
     * Sets w component of this vector.
     */
    setW(w: number): this;

    setComponent(index: number, value: number): this;

    getComponent(index: number): number;

    /**
     * Clones this vector.
     */
    clone(): Vector4;

    /**
     * Copies value of v to this vector.
     */
    copy(v: Vector4): this;

    /**
     * Adds v to this vector.
     */
    add(v: Vector4): this;

    addScalar(scalar: number): this;

    /**
     * Sets this vector to a + b.
     */
    addVectors(a: Vector4, b: Vector4): this;

    addScaledVector(v: Vector4, s: number): this;
    /**
     * Subtracts v from this vector.
     */
    sub(v: Vector4): this;

    subScalar(s: number): this;

    /**
     * Sets this vector to a - b.
     */
    subVectors(a: Vector4, b: Vector4): this;

    multiply(v: Vector4): this;

    /**
     * Multiplies this vector by scalar s.
     */
    multiplyScalar(s: number): this;

    applyMatrix4(m: Matrix4): this;

    /**
     * Divides this vector by scalar s.
     * Set vector to ( 0, 0, 0 ) if s == 0.
     */
    divideScalar(s: number): this;

    /**
     * http://www.euclideanspace.com/maths/geometry/rotations/conversions/quaternionToAngle/index.htm
     * @param q is assumed to be normalized
     */
    setAxisAngleFromQuaternion(q: Quaternion): this;

    /**
     * http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToAngle/index.htm
     * @param m assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
     */
    setAxisAngleFromRotationMatrix(m: Matrix4): this;

    min(v: Vector4): this;
    max(v: Vector4): this;
    clamp(min: Vector4, max: Vector4): this;
    clampScalar(min: number, max: number): this;
    floor(): this;
    ceil(): this;
    round(): this;
    roundToZero(): this;

    /**
     * Inverts this vector.
     */
    negate(): this;

    /**
     * Computes dot product of this vector and v.
     */
    dot(v: Vector4): number;

    /**
     * Computes squared length of this vector.
     */
    lengthSq(): number;

    /**
     * Computes length of this vector.
     */
    length(): number;

    /**
     * Computes the Manhattan length of this vector.
     *
     * see {@link http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia: Taxicab Geometry}
     */
    manhattanLength(): number;

    /**
     * Normalizes this vector.
     */
    normalize(): this;
    /**
     * Normalizes this vector and multiplies it by l.
     */
    setLength(length: number): this;

    /**
     * Linearly interpolate between this vector and v with alpha factor.
     */
    lerp(v: Vector4, alpha: number): this;

    lerpVectors(v1: Vector4, v2: Vector4, alpha: number): this;

    /**
     * Checks for strict equality of this vector and v.
     */
    equals(v: Vector4): boolean;

    /**
     * Sets this vector's x, y, z and w value from the provided array or array-like.
     * @param array the source array or array-like.
     * @param offset (optional) offset into the array. Default is 0.
     */
    fromArray(array: number[] | ArrayLike<number>, offset?: number): this;

    /**
     * Returns an array [x, y, z, w], or copies x, y, z and w into the provided array.
     * @param array (optional) array to store the vector to. If this is not provided, a new array will be created.
     * @param offset (optional) optional offset into the array.
     * @return The created or provided array.
     */
    toArray(array?: number[], offset?: number): number[];
    toArray(array?: Vector4Tuple, offset?: 0): Vector4Tuple;

    /**
     * Copies x, y, z and w into the provided array-like.
     * @param array array-like to store the vector to.
     * @param offset (optional) optional offset into the array-like.
     * @return The provided array-like.
     */
    toArray(array: ArrayLike<number>, offset?: number): ArrayLike<number>;

    fromBufferAttribute(attribute: BufferAttribute, index: number): this;

    /**
     * Sets this vector's x, y, z and w from Math.random
     */
    random(): this;
}

export declare type Vector4Tuple = [number, number, number, number];

export declare class VectorKeyframeTrack extends KeyframeTrack {
    constructor(name: string, times: any[], values: any[], interpolation?: InterpolationModes);

    /**
     * @default 'vector'
     */
    ValueTypeName: string;
}

export declare class VideoTexture extends Texture {
    /**
     * @param video
     * @param [mapping=THREE.Texture.DEFAULT_MAPPING]
     * @param [wrapS=THREE.ClampToEdgeWrapping]
     * @param [wrapT=THREE.ClampToEdgeWrapping]
     * @param [magFilter=THREE.LinearFilter]
     * @param [minFilter=THREE.LinearFilter]
     * @param [format=THREE.RGBFormat]
     * @param [type=THREE.UnsignedByteType]
     * @param [anisotropy=1]
     */
    constructor(
        video: HTMLVideoElement,
        mapping?: Mapping,
        wrapS?: Wrapping,
        wrapT?: Wrapping,
        magFilter?: TextureFilter,
        minFilter?: TextureFilter,
        format?: PixelFormat,
        type?: TextureDataType,
        anisotropy?: number,
    );

    readonly isVideoTexture: true;

    /**
     * @default false
     */
    generateMipmaps: boolean;
}

export declare const VSMShadowMap: ShadowMapType;

export declare class WebGL1Renderer extends WebGLRenderer {
    constructor(parameters?: WebGLRendererParameters);
    readonly isWebGL1Renderer: true;
}

declare class WebGLAttributes {
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, capabilities: WebGLCapabilities);

    get(
        attribute: BufferAttribute | InterleavedBufferAttribute,
    ): {
        buffer: WebGLBuffer;
        type: number;
        bytesPerElement: number;
        version: number;
    };

    remove(attribute: BufferAttribute | InterleavedBufferAttribute): void;

    update(attribute: BufferAttribute | InterleavedBufferAttribute, bufferType: number): void;
}

declare class WebGLBindingStates {
    constructor(
        gl: WebGLRenderingContext,
        extensions: WebGLExtensions,
        attributes: WebGLAttributes,
        capabilities: WebGLCapabilities,
    );

    setup(
        object: Object3D,
        material: Material,
        program: WebGLProgram_2,
        geometry: BufferGeometry,
        index: BufferAttribute,
    ): void;
    reset(): void;
    resetDefaultState(): void;
    dispose(): void;
    releaseStatesOfGeometry(): void;
    releaseStatesOfProgram(): void;
    initAttributes(): void;
    enableAttribute(attribute: number): void;
    disableUnusedAttributes(): void;
}

export declare class WebGLBufferRenderer {
    constructor(
        gl: WebGLRenderingContext,
        extensions: WebGLExtensions,
        info: WebGLInfo,
        capabilities: WebGLCapabilities,
    );

    setMode(value: any): void;
    render(start: any, count: number): void;
    renderInstances(start: any, count: number, primcount: number): void;
}

export declare class WebGLCapabilities {
    constructor(gl: WebGLRenderingContext, extensions: any, parameters: WebGLCapabilitiesParameters);

    readonly isWebGL2: boolean;
    precision: string;
    logarithmicDepthBuffer: boolean;
    maxTextures: number;
    maxVertexTextures: number;
    maxTextureSize: number;
    maxCubemapSize: number;
    maxAttributes: number;
    maxVertexUniforms: number;
    maxVaryings: number;
    maxFragmentUniforms: number;
    vertexTextures: boolean;
    floatFragmentTextures: boolean;
    floatVertexTextures: boolean;

    getMaxAnisotropy(): number;
    getMaxPrecision(precision: string): string;
}

export declare interface WebGLCapabilitiesParameters {
    precision?: string;
    logarithmicDepthBuffer?: boolean;
}

export declare class WebGLClipping {
    constructor(properties: WebGLProperties);

    uniform: { value: any; needsUpdate: boolean };

    /**
     * @default 0
     */
    numPlanes: number;

    /**
     * @default 0
     */
    numIntersection: number;

    init(planes: any[], enableLocalClipping: boolean, camera: Camera): boolean;
    beginShadows(): void;
    endShadows(): void;
    setState(material: Material, camera: Camera, useCache: boolean): void;
}

export declare class WebGLColorBuffer {
    constructor();

    setMask(colorMask: boolean): void;
    setLocked(lock: boolean): void;
    setClear(r: number, g: number, b: number, a: number, premultipliedAlpha: boolean): void;
    reset(): void;
}

declare class WebGLCubeMaps {
    constructor(renderer: WebGLRenderer);

    get(texture: any): any;
    dispose(): void;
}

export declare class WebGLCubeRenderTarget extends WebGLRenderTarget {
    constructor(size: number, options?: WebGLRenderTargetOptions);

    texture: CubeTexture;

    fromEquirectangularTexture(renderer: WebGLRenderer, texture: Texture): this;

    clear(renderer: WebGLRenderer, color: boolean, depth: boolean, stencil: boolean): void;
}

export declare interface WebGLDebug {
    /**
     * Enables error checking and reporting when shader programs are being compiled.
     */
    checkShaderErrors: boolean;
}

export declare class WebGLDepthBuffer {
    constructor();

    setTest(depthTest: boolean): void;
    setMask(depthMask: boolean): void;
    setFunc(depthFunc: DepthModes): void;
    setLocked(lock: boolean): void;
    setClear(depth: number): void;
    reset(): void;
}

export declare class WebGLExtensions {
    constructor(gl: WebGLRenderingContext);

    has(name: string): boolean;
    init(capabilities: WebGLCapabilities): void;
    get(name: string): any;
}

export declare class WebGLGeometries {
    constructor(gl: WebGLRenderingContext, attributes: WebGLAttributes, info: WebGLInfo);

    get(object: Object3D, geometry: BufferGeometry): BufferGeometry;
    update(geometry: BufferGeometry): void;
    getWireframeAttribute(geometry: BufferGeometry): BufferAttribute;
}

export declare class WebGLIndexedBufferRenderer {
    constructor(gl: WebGLRenderingContext, extensions: any, info: any, capabilities: any);

    setMode(value: any): void;
    setIndex(index: any): void;
    render(start: any, count: number): void;
    renderInstances(start: any, count: number, primcount: number): void;
}

/**
 * An object with a series of statistical information about the graphics board memory and the rendering process.
 */
export declare class WebGLInfo {
    constructor(gl: WebGLRenderingContext);

    /**
     * @default true
     */
    autoReset: boolean;

    /**
     * @default { geometries: 0, textures: 0 }
     */
    memory: {
        geometries: number;
        textures: number;
    };

    /**
     * @default null
     */
    programs: WebGLProgram_2[] | null;

    /**
     * @default { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 }
     */
    render: {
        calls: number;
        frame: number;
        lines: number;
        points: number;
        triangles: number;
    };
    update(count: number, mode: number, instanceCount: number): void;
    reset(): void;
}

export declare class WebGLLights {
    constructor(extensions: WebGLExtensions, capabilities: WebGLCapabilities);

    state: {
        version: number;

        hash: {
            directionalLength: number;
            pointLength: number;
            spotLength: number;
            rectAreaLength: number;
            hemiLength: number;

            numDirectionalShadows: number;
            numPointShadows: number;
            numSpotShadows: number;
        };

        ambient: number[];
        probe: any[];
        directional: any[];
        directionalShadow: any[];
        directionalShadowMap: any[];
        directionalShadowMatrix: any[];
        spot: any[];
        spotShadow: any[];
        spotShadowMap: any[];
        spotShadowMatrix: any[];
        rectArea: any[];
        point: any[];
        pointShadow: any[];
        pointShadowMap: any[];
        pointShadowMatrix: any[];
        hemi: any[];
    };

    get(light: any): any;
    setup(lights: any): void;
    setupView(lights: any, camera: any): void;
}

export declare class WebGLMultisampleRenderTarget extends WebGLRenderTarget {
    constructor(width: number, height: number, options?: WebGLRenderTargetOptions);

    readonly isWebGLMultisampleRenderTarget: true;

    /**
     * Specifies the number of samples to be used for the renderbuffer storage.However, the maximum supported size for multisampling is platform dependent and defined via gl.MAX_SAMPLES.
     * @default 4
     */
    samples: number;
}

export declare class WebGLObjects {
    constructor(gl: WebGLRenderingContext, geometries: any, attributes: any, info: any);

    update(object: any): any;
    dispose(): void;
}

declare class WebGLProgram_2 {
    constructor(renderer: WebGLRenderer, cacheKey: string, parameters: object);

    name: string;
    id: number;
    cacheKey: string; // unique identifier for this program, used for looking up compiled programs from cache.

    /**
     * @default 1
     */
    usedTimes: number;
    program: any;
    vertexShader: WebGLShader;
    fragmentShader: WebGLShader;
    /**
     * @deprecated Use {@link WebGLProgram#getUniforms getUniforms()} instead.
     */
    uniforms: any;
    /**
     * @deprecated Use {@link WebGLProgram#getAttributes getAttributes()} instead.
     */
    attributes: any;

    getUniforms(): WebGLUniforms;
    getAttributes(): any;
    destroy(): void;
}
export { WebGLProgram_2 as WebGLProgram }

export declare class WebGLPrograms {
    constructor(
        renderer: WebGLRenderer,
        cubemaps: WebGLCubeMaps,
        extensions: WebGLExtensions,
        capabilities: WebGLCapabilities,
        bindingStates: WebGLBindingStates,
        clipping: WebGLClipping,
    );

    programs: WebGLProgram_2[];

    getParameters(material: Material, lights: any, shadows: object[], scene: Scene, object: any): any;
    getProgramCacheKey(parameters: any): string;
    getUniforms(material: Material): object;
    acquireProgram(parameters: any, cacheKey: string): WebGLProgram_2;
    releaseProgram(program: WebGLProgram_2): void;
}

export declare class WebGLProperties {
    constructor();

    get(object: any): any;
    remove(object: any): void;
    update(object: any, key: any, value: any): any;
    dispose(): void;
}

/**
 * The WebGL renderer displays your beautifully crafted scenes using WebGL, if your device supports it.
 * This renderer has way better performance than CanvasRenderer.
 *
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/renderers/WebGLRenderer.js|src/renderers/WebGLRenderer.js}
 */
export declare class WebGLRenderer implements Renderer {
    /**
     * parameters is an optional object with properties defining the renderer's behaviour.
     * The constructor also accepts no parameters at all.
     * In all cases, it will assume sane defaults when parameters are missing.
     */
    constructor(parameters?: WebGLRendererParameters);

    /**
     * A Canvas where the renderer draws its output.
     * This is automatically created by the renderer in the constructor (if not provided already); you just need to add it to your page.
     * @default document.createElementNS( 'http://www.w3.org/1999/xhtml', 'canvas' )
     */
    domElement: HTMLCanvasElement;

    /**
     * The HTML5 Canvas's 'webgl' context obtained from the canvas where the renderer will draw.
     */
    context: WebGLRenderingContext;

    /**
     * Defines whether the renderer should automatically clear its output before rendering.
     * @default true
     */
    autoClear: boolean;

    /**
     * If autoClear is true, defines whether the renderer should clear the color buffer. Default is true.
     * @default true
     */
    autoClearColor: boolean;

    /**
     * If autoClear is true, defines whether the renderer should clear the depth buffer. Default is true.
     * @default true
     */
    autoClearDepth: boolean;

    /**
     * If autoClear is true, defines whether the renderer should clear the stencil buffer. Default is true.
     * @default true
     */
    autoClearStencil: boolean;

    /**
     * Debug configurations.
     * @default { checkShaderErrors: true }
     */
    debug: WebGLDebug;

    /**
     * Defines whether the renderer should sort objects. Default is true.
     * @default true
     */
    sortObjects: boolean;

    /**
     * @default []
     */
    clippingPlanes: any[];

    /**
     * @default false
     */
    localClippingEnabled: boolean;

    extensions: WebGLExtensions;

    /**
     * Default is LinearEncoding.
     * @default THREE.LinearEncoding
     */
    outputEncoding: TextureEncoding;

    /**
     * @default false
     */
    physicallyCorrectLights: boolean;

    /**
     * @default THREE.NoToneMapping
     */
    toneMapping: ToneMapping;

    /**
     * @default 1
     */
    toneMappingExposure: number;

    /**
     * @default 8
     */
    maxMorphTargets: number;

    /**
     * @default 4
     */
    maxMorphNormals: number;

    info: WebGLInfo;

    shadowMap: WebGLShadowMap;

    pixelRatio: number;

    capabilities: WebGLCapabilities;
    properties: WebGLProperties;
    renderLists: WebGLRenderLists;
    state: WebGLState;

    xr: WebXRManager;

    /**
     * Return the WebGL context.
     */
    getContext(): WebGLRenderingContext;
    getContextAttributes(): any;
    forceContextLoss(): void;

    /**
     * @deprecated Use {@link WebGLCapabilities#getMaxAnisotropy .capabilities.getMaxAnisotropy()} instead.
     */
    getMaxAnisotropy(): number;

    /**
     * @deprecated Use {@link WebGLCapabilities#precision .capabilities.precision} instead.
     */
    getPrecision(): string;

    getPixelRatio(): number;
    setPixelRatio(value: number): void;

    getDrawingBufferSize(target: Vector2): Vector2;
    setDrawingBufferSize(width: number, height: number, pixelRatio: number): void;

    getSize(target: Vector2): Vector2;

    /**
     * Resizes the output canvas to (width, height), and also sets the viewport to fit that size, starting in (0, 0).
     */
    setSize(width: number, height: number, updateStyle?: boolean): void;

    getCurrentViewport(target: Vector4): Vector4;

    /**
     * Copies the viewport into target.
     */
    getViewport(target: Vector4): Vector4;

    /**
     * Sets the viewport to render from (x, y) to (x + width, y + height).
     * (x, y) is the lower-left corner of the region.
     */
    setViewport(x: Vector4 | number, y?: number, width?: number, height?: number): void;

    /**
     * Copies the scissor area into target.
     */
    getScissor(target: Vector4): Vector4;

    /**
     * Sets the scissor area from (x, y) to (x + width, y + height).
     */
    setScissor(x: Vector4 | number, y?: number, width?: number, height?: number): void;

    /**
     * Returns true if scissor test is enabled; returns false otherwise.
     */
    getScissorTest(): boolean;

    /**
     * Enable the scissor test. When this is enabled, only the pixels within the defined scissor area will be affected by further renderer actions.
     */
    setScissorTest(enable: boolean): void;

    /**
     * Sets the custom opaque sort function for the WebGLRenderLists. Pass null to use the default painterSortStable function.
     */
    setOpaqueSort(method: () => void): void;

    /**
     * Sets the custom transparent sort function for the WebGLRenderLists. Pass null to use the default reversePainterSortStable function.
     */
    setTransparentSort(method: () => void): void;

    /**
     * Returns a THREE.Color instance with the current clear color.
     */
    getClearColor(target: Color): Color;

    /**
     * Sets the clear color, using color for the color and alpha for the opacity.
     */
    setClearColor(color: Color | string | number, alpha?: number): void;

    /**
     * Returns a float with the current clear alpha. Ranges from 0 to 1.
     */
    getClearAlpha(): number;

    setClearAlpha(alpha: number): void;

    /**
     * Tells the renderer to clear its color, depth or stencil drawing buffer(s).
     * Arguments default to true
     */
    clear(color?: boolean, depth?: boolean, stencil?: boolean): void;

    clearColor(): void;
    clearDepth(): void;
    clearStencil(): void;
    clearTarget(renderTarget: WebGLRenderTarget, color: boolean, depth: boolean, stencil: boolean): void;

    /**
     * @deprecated Use {@link WebGLState#reset .state.reset()} instead.
     */
    resetGLState(): void;
    dispose(): void;

    renderBufferImmediate(object: Object3D, program: WebGLProgram_2): void;

    renderBufferDirect(
        camera: Camera,
        scene: Scene,
        geometry: BufferGeometry,
        material: Material,
        object: Object3D,
        geometryGroup: any,
    ): void;

    /**
     * A build in function that can be used instead of requestAnimationFrame. For WebXR projects this function must be used.
     * @param callback The function will be called every available frame. If `null` is passed it will stop any already ongoing animation.
     */
    setAnimationLoop(callback: XRAnimationLoopCallback | null): void;

    /**
     * @deprecated Use {@link WebGLRenderer#setAnimationLoop .setAnimationLoop()} instead.
     */
    animate(callback: () => void): void;

    /**
     * Compiles all materials in the scene with the camera. This is useful to precompile shaders before the first rendering.
     */
    compile(scene: Object3D, camera: Camera): void;

    /**
     * Render a scene or an object using a camera.
     * The render is done to a previously specified {@link WebGLRenderTarget#renderTarget .renderTarget} set by calling
     * {@link WebGLRenderer#setRenderTarget .setRenderTarget} or to the canvas as usual.
     *
     * By default render buffers are cleared before rendering but you can prevent this by setting the property
     * {@link WebGLRenderer#autoClear autoClear} to false. If you want to prevent only certain buffers being cleared
     * you can set either the {@link WebGLRenderer#autoClearColor autoClearColor},
     * {@link WebGLRenderer#autoClearStencil autoClearStencil} or {@link WebGLRenderer#autoClearDepth autoClearDepth}
     * properties to false. To forcibly clear one ore more buffers call {@link WebGLRenderer#clear .clear}.
     */
    render(scene: Object3D, camera: Camera): void;

    /**
     * Returns the current active cube face.
     */
    getActiveCubeFace(): number;

    /**
     * Returns the current active mipmap level.
     */
    getActiveMipmapLevel(): number;

    /**
     * Sets the given WebGLFramebuffer. This method can only be used if no render target is set via
     * {@link WebGLRenderer#setRenderTarget .setRenderTarget}.
     *
     * @param value The WebGLFramebuffer.
     */
    setFramebuffer(value: WebGLFramebuffer): void;

    /**
     * Returns the current render target. If no render target is set, null is returned.
     */
    getRenderTarget(): RenderTarget | null;

    /**
     * @deprecated Use {@link WebGLRenderer#getRenderTarget .getRenderTarget()} instead.
     */
    getCurrentRenderTarget(): RenderTarget | null;

    /**
     * Sets the active render target.
     *
     * @param renderTarget The {@link WebGLRenderTarget renderTarget} that needs to be activated. When `null` is given, the canvas is set as the active render target instead.
     * @param activeCubeFace Specifies the active cube side (PX 0, NX 1, PY 2, NY 3, PZ 4, NZ 5) of {@link WebGLCubeRenderTarget}.
     * @param activeMipmapLevel Specifies the active mipmap level.
     */
    setRenderTarget(renderTarget: RenderTarget | null, activeCubeFace?: number, activeMipmapLevel?: number): void;

    readRenderTargetPixels(
        renderTarget: RenderTarget,
        x: number,
        y: number,
        width: number,
        height: number,
        buffer: any,
        activeCubeFaceIndex?: number,
    ): void;

    /**
     * Copies a region of the currently bound framebuffer into the selected mipmap level of the selected texture.
     * This region is defined by the size of the destination texture's mip level, offset by the input position.
     *
     * @param position Specifies the pixel offset from which to copy out of the framebuffer.
     * @param texture Specifies the destination texture.
     * @param level Specifies the destination mipmap level of the texture.
     */
    copyFramebufferToTexture(position: Vector2, texture: Texture, level?: number): void;

    /**
     * Copies srcTexture to the specified level of dstTexture, offset by the input position.
     *
     * @param position Specifies the pixel offset into the dstTexture where the copy will occur.
     * @param srcTexture Specifies the source texture.
     * @param dstTexture Specifies the destination texture.
     * @param level Specifies the destination mipmap level of the texture.
     */
    copyTextureToTexture(position: Vector2, srcTexture: Texture, dstTexture: Texture, level?: number): void;

    /**
     * Copies the pixels of a texture in the bounds sourceBox in the desination texture starting from the given position.
     * @param sourceBox Specifies the bounds
     * @param position Specifies the pixel offset into the dstTexture where the copy will occur.
     * @param srcTexture Specifies the source texture.
     * @param dstTexture Specifies the destination texture.
     * @param level Specifies the destination mipmap level of the texture.
     */
    copyTextureToTexture3D(
        sourceBox: Box3,
        position: Vector3,
        srcTexture: Texture,
        dstTexture: DataTexture3D | DataTexture2DArray,
        level?: number,
    ): void;

    /**
     * Initializes the given texture. Can be used to preload a texture rather than waiting until first render (which can cause noticeable lags due to decode and GPU upload overhead).
     *
     * @param texture The texture to Initialize.
     */
    initTexture(texture: Texture): void;

    /**
     * Can be used to reset the internal WebGL state.
     */
    resetState(): void;

    /**
     * @deprecated
     */
    gammaFactor: number;

    /**
     * @deprecated Use {@link WebGLRenderer#xr .xr} instead.
     */
    vr: boolean;

    /**
     * @deprecated Use {@link WebGLShadowMap#enabled .shadowMap.enabled} instead.
     */
    shadowMapEnabled: boolean;

    /**
     * @deprecated Use {@link WebGLShadowMap#type .shadowMap.type} instead.
     */
    shadowMapType: ShadowMapType;

    /**
     * @deprecated Use {@link WebGLShadowMap#cullFace .shadowMap.cullFace} instead.
     */
    shadowMapCullFace: CullFace;

    /**
     * @deprecated Use {@link WebGLExtensions#get .extensions.get( 'OES_texture_float' )} instead.
     */
    supportsFloatTextures(): any;

    /**
     * @deprecated Use {@link WebGLExtensions#get .extensions.get( 'OES_texture_half_float' )} instead.
     */
    supportsHalfFloatTextures(): any;

    /**
     * @deprecated Use {@link WebGLExtensions#get .extensions.get( 'OES_standard_derivatives' )} instead.
     */
    supportsStandardDerivatives(): any;

    /**
     * @deprecated Use {@link WebGLExtensions#get .extensions.get( 'WEBGL_compressed_texture_s3tc' )} instead.
     */
    supportsCompressedTextureS3TC(): any;

    /**
     * @deprecated Use {@link WebGLExtensions#get .extensions.get( 'WEBGL_compressed_texture_pvrtc' )} instead.
     */
    supportsCompressedTexturePVRTC(): any;

    /**
     * @deprecated Use {@link WebGLExtensions#get .extensions.get( 'EXT_blend_minmax' )} instead.
     */
    supportsBlendMinMax(): any;

    /**
     * @deprecated Use {@link WebGLCapabilities#vertexTextures .capabilities.vertexTextures} instead.
     */
    supportsVertexTextures(): any;

    /**
     * @deprecated Use {@link WebGLExtensions#get .extensions.get( 'ANGLE_instanced_arrays' )} instead.
     */
    supportsInstancedArrays(): any;

    /**
     * @deprecated Use {@link WebGLRenderer#setScissorTest .setScissorTest()} instead.
     */
    enableScissorTest(boolean: any): any;
}

export declare interface WebGLRendererParameters {
    /**
     * A Canvas where the renderer draws its output.
     */
    canvas?: HTMLCanvasElement | OffscreenCanvas;

    /**
     * A WebGL Rendering Context.
     * (https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext)
     * Default is null
     */
    context?: WebGLRenderingContext;

    /**
     * shader precision. Can be "highp", "mediump" or "lowp".
     */
    precision?: string;

    /**
     * default is false.
     */
    alpha?: boolean;

    /**
     * default is true.
     */
    premultipliedAlpha?: boolean;

    /**
     * default is false.
     */
    antialias?: boolean;

    /**
     * default is true.
     */
    stencil?: boolean;

    /**
     * default is false.
     */
    preserveDrawingBuffer?: boolean;

    /**
     * Can be "high-performance", "low-power" or "default"
     */
    powerPreference?: string;

    /**
     * default is true.
     */
    depth?: boolean;

    /**
     * default is false.
     */
    logarithmicDepthBuffer?: boolean;

    /**
     * default is false.
     */
    failIfMajorPerformanceCaveat?: boolean;
}

declare interface WebGLRenderingContext_2 {
    makeXRCompatible(): Promise<void>;
}
export { WebGLRenderingContext_2 as WebGLRenderingContext }

export declare class WebGLRenderList {
    constructor(properties: WebGLProperties);

    /**
     * @default []
     */
    opaque: RenderItem[];

    /**
     * @default []
     */
    transparent: RenderItem[];

    init(): void;
    push(
        object: Object3D,
        geometry: BufferGeometry | null,
        material: Material,
        groupOrder: number,
        z: number,
        group: Group | null,
    ): void;
    unshift(
        object: Object3D,
        geometry: BufferGeometry | null,
        material: Material,
        groupOrder: number,
        z: number,
        group: Group | null,
    ): void;
    sort(opaqueSort: () => void, transparentSort: () => void): void;
    finish(): void;
}

export declare class WebGLRenderLists {
    constructor(properties: WebGLProperties);

    dispose(): void;
    get(scene: Scene, camera: Camera): WebGLRenderList;
}

export declare class WebGLRenderTarget extends EventDispatcher {
    constructor(width: number, height: number, options?: WebGLRenderTargetOptions);

    uuid: string;
    width: number;
    height: number;
    scissor: Vector4;

    /**
     * @default false
     */
    scissorTest: boolean;
    viewport: Vector4;
    texture: Texture;

    /**
     * @default true
     */
    depthBuffer: boolean;

    /**
     * @default true
     */
    stencilBuffer: boolean;

    /**
     * @default null
     */
    depthTexture: DepthTexture;
    readonly isWebGLRenderTarget: true;

    /**
     * @deprecated Use {@link Texture#wrapS texture.wrapS} instead.
     */
    wrapS: any;
    /**
     * @deprecated Use {@link Texture#wrapT texture.wrapT} instead.
     */
    wrapT: any;
    /**
     * @deprecated Use {@link Texture#magFilter texture.magFilter} instead.
     */
    magFilter: any;
    /**
     * @deprecated Use {@link Texture#minFilter texture.minFilter} instead.
     */
    minFilter: any;
    /**
     * @deprecated Use {@link Texture#anisotropy texture.anisotropy} instead.
     */
    anisotropy: any;
    /**
     * @deprecated Use {@link Texture#offset texture.offset} instead.
     */
    offset: any;
    /**
     * @deprecated Use {@link Texture#repeat texture.repeat} instead.
     */
    repeat: any;
    /**
     * @deprecated Use {@link Texture#format texture.format} instead.
     */
    format: any;
    /**
     * @deprecated Use {@link Texture#type texture.type} instead.
     */
    type: any;
    /**
     * @deprecated Use {@link Texture#generateMipmaps texture.generateMipmaps} instead.
     */
    generateMipmaps: any;

    setTexture(texture: Texture): void;
    setSize(width: number, height: number, depth?: number): void;
    clone(): WebGLRenderTarget;
    copy(source: WebGLRenderTarget): this;
    dispose(): void;
}

export declare interface WebGLRenderTargetOptions {
    wrapS?: Wrapping;
    wrapT?: Wrapping;
    magFilter?: TextureFilter;
    minFilter?: TextureFilter;
    format?: number; // RGBAFormat;
    type?: TextureDataType; // UnsignedByteType;
    anisotropy?: number; // 1;
    depthBuffer?: boolean; // true;
    stencilBuffer?: boolean; // false;
    generateMipmaps?: boolean; // true;
    depthTexture?: DepthTexture;
    encoding?: TextureEncoding;
}

declare function WebGLShader_2(gl: WebGLRenderingContext, type: string, string: string): WebGLShader;
export { WebGLShader_2 as WebGLShader }

export declare class WebGLShadowMap {
    constructor(_renderer: WebGLRenderer, _objects: WebGLObjects, maxTextureSize: number);

    /**
     * @default false
     */
    enabled: boolean;

    /**
     * @default true
     */
    autoUpdate: boolean;

    /**
     * @default false
     */
    needsUpdate: boolean;

    /**
     * @default THREE.PCFShadowMap
     */
    type: ShadowMapType;

    render(shadowsArray: Light[], scene: Scene, camera: Camera): void;

    /**
     * @deprecated Use {@link Material#shadowSide} instead.
     */
    cullFace: any;
}

export declare class WebGLState {
    constructor(gl: WebGLRenderingContext, extensions: WebGLExtensions, capabilities: WebGLCapabilities);

    buffers: {
        color: WebGLColorBuffer;
        depth: WebGLDepthBuffer;
        stencil: WebGLStencilBuffer;
    };

    initAttributes(): void;
    enableAttribute(attribute: number): void;
    enableAttributeAndDivisor(attribute: number, meshPerAttribute: number): void;
    disableUnusedAttributes(): void;
    vertexAttribPointer(
        index: number,
        size: number,
        type: number,
        normalized: boolean,
        stride: number,
        offset: number,
    ): void;
    enable(id: number): void;
    disable(id: number): void;
    useProgram(program: any): boolean;
    setBlending(
        blending: Blending,
        blendEquation?: BlendingEquation,
        blendSrc?: BlendingSrcFactor,
        blendDst?: BlendingDstFactor,
        blendEquationAlpha?: BlendingEquation,
        blendSrcAlpha?: BlendingSrcFactor,
        blendDstAlpha?: BlendingDstFactor,
        premultiplyAlpha?: boolean,
    ): void;
    setMaterial(material: Material, frontFaceCW: boolean): void;
    setFlipSided(flipSided: boolean): void;
    setCullFace(cullFace: CullFace): void;
    setLineWidth(width: number): void;
    setPolygonOffset(polygonoffset: boolean, factor?: number, units?: number): void;
    setScissorTest(scissorTest: boolean): void;
    activeTexture(webglSlot: number): void;
    bindTexture(webglType: number, webglTexture: any): void;
    unbindTexture(): void;
    // Same interface as https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/compressedTexImage2D
    compressedTexImage2D(
        target: number,
        level: number,
        internalformat: number,
        width: number,
        height: number,
        border: number,
        data: ArrayBufferView,
    ): void;
    // Same interface as https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/texImage2D
    texImage2D(
        target: number,
        level: number,
        internalformat: number,
        width: number,
        height: number,
        border: number,
        format: number,
        type: number,
        pixels: ArrayBufferView | null,
    ): void;
    texImage2D(target: number, level: number, internalformat: number, format: number, type: number, source: any): void;
    texImage3D(
        target: number,
        level: number,
        internalformat: number,
        width: number,
        height: number,
        depth: number,
        border: number,
        format: number,
        type: number,
        pixels: any,
    ): void;
    scissor(scissor: Vector4): void;
    viewport(viewport: Vector4): void;
    reset(): void;
}

export declare class WebGLStencilBuffer {
    constructor();

    setTest(stencilTest: boolean): void;
    setMask(stencilMask: number): void;
    setFunc(stencilFunc: number, stencilRef: number, stencilMask: number): void;
    setOp(stencilFail: number, stencilZFail: number, stencilZPass: number): void;
    setLocked(lock: boolean): void;
    setClear(stencil: number): void;
    reset(): void;
}

export declare class WebGLTextures {
    constructor(
        gl: WebGLRenderingContext,
        extensions: WebGLExtensions,
        state: WebGLState,
        properties: WebGLProperties,
        capabilities: WebGLCapabilities,
        utils: WebGLUtils,
        info: WebGLInfo,
    );

    allocateTextureUnit(): void;
    resetTextureUnits(): void;
    setTexture2D(texture: any, slot: number): void;
    setTexture2DArray(texture: any, slot: number): void;
    setTexture3D(texture: any, slot: number): void;
    setTextureCube(texture: any, slot: number): void;
    setupRenderTarget(renderTarget: any): void;
    updateRenderTargetMipmap(renderTarget: any): void;
    updateMultisampleRenderTarget(renderTarget: any): void;
    safeSetTexture2D(texture: any, slot: number): void;
    safeSetTextureCube(texture: any, slot: number): void;
}

export declare class WebGLUniforms {
    constructor(gl: WebGLRenderingContext, program: WebGLProgram_2);

    setValue(gl: WebGLRenderingContext, name: string, value: any, textures: WebGLTextures): void;
    setOptional(gl: WebGLRenderingContext, object: any, name: string): void;

    static upload(gl: WebGLRenderingContext, seq: any, values: any[], textures: WebGLTextures): void;
    static seqWithValue(seq: any, values: any[]): any[];
}

declare class WebGLUtils {
    constructor(gl: WebGLRenderingContext | WebGL2RenderingContext, extensions: any, capabilities: any);

    convert(p: any): void;
}

export declare class WebXRController {
    constructor();

    getTargetRaySpace(): Group;
    getGripSpace(): Group;
    dispatchEvent(event: { type: XRControllerEventType; data?: XRInputSource }): this;
    disconnect(inputSource: XRInputSource): this;
    update(inputSource: XRInputSource, frame: XRFrame, referenceSpace: XRReferenceSpace): this;
}

export declare class WebXRManager extends EventDispatcher {
    constructor(renderer: any, gl: WebGLRenderingContext);

    /**
     * @default false
     */
    enabled: boolean;

    /**
     * @default false
     */
    isPresenting: boolean;

    getController(index: number): Group;
    getControllerGrip(index: number): Group;
    getHand(index: number): Group;
    setFramebufferScaleFactor(value: number): void;
    setReferenceSpaceType(value: XRReferenceSpaceType): void;
    getReferenceSpace(): XRReferenceSpace | null;
    getSession(): XRSession | null;
    setSession(value: XRSession): Promise<void>;
    getCamera(camera: Camera): Camera;
    setAnimationLoop(callback: XRFrameRequestCallback): void;
    dispose(): void;
}

declare interface Window_2 {
    XRSession?: Constructor<XRSession>;
    XR?: Constructor<XR>;
}
export { Window_2 as Window }

export declare class WireframeGeometry extends BufferGeometry {
    constructor(geometry: BufferGeometry);

    /**
     * @default 'WireframeGeometry'
     */
    type: string;
}

export declare const WrapAroundEnding: InterpolationEndingModes;

export declare enum Wrapping {}

export declare interface XR extends EventTarget {
    requestSession(mode: XRSessionMode, options?: XRSessionInit): Promise<XRSession>;
    isSessionSupported(mode: XRSessionMode): Promise<boolean>;
}

export declare interface XRAnchor {
    anchorSpace: EventTarget;
    delete(): void;
}

export declare type XRAnchorSet = Set<XRAnchor>;

export declare type XRAnimationLoopCallback = (time: number, frame?: XRFrame) => void;

export declare type XRControllerEventType = XREventType | 'disconnected' | 'connected';

export declare type XREnvironmentBlendMode = 'opaque' | 'additive' | 'alpha-blend';

export declare type XREventType =
    | 'end'
    | 'select'
    | 'selectstart'
    | 'selectend'
    | 'squeeze'
    | 'squeezestart'
    | 'squeezeend'
    | 'inputsourceschange';

export declare type XREye = 'none' | 'left' | 'right';

export declare interface XRFrame {
    readonly session: XRSession;
    getViewerPose(referenceSpace: XRReferenceSpace): XRViewerPose | undefined;
    getPose(space: EventTarget, baseSpace: EventTarget): XRPose | undefined;

    // AR
    getHitTestResults(hitTestSource: XRHitTestSource): XRHitTestResult[];
    getHitTestResultsForTransientInput(hitTestSource: XRTransientInputHitTestSource): XRTransientInputHitTestResult[];
    // Anchors
    trackedAnchors?: XRAnchorSet;
    createAnchor(pose: XRRigidTransform, space: EventTarget): Promise<XRAnchor>;
    // Planes
    worldInformation: {
        detectedPlanes?: XRPlaneSet;
    };
    // Hand tracking
    getJointPose(joint: XRJointSpace, baseSpace: EventTarget): XRJointPose;
}

export declare type XRFrameRequestCallback = (time: number, frame: XRFrame) => void;

export declare interface XRHand extends Map<XRHandJoint, XRJointSpace> {
    readonly size: number;
}

export declare type XRHandedness = 'none' | 'left' | 'right';

export declare enum XRHandJoint {
    'wrist',
    'thumb-metacarpal',
    'thumb-phalanx-proximal',
    'thumb-phalanx-distal',
    'thumb-tip',
    'index-finger-metacarpal',
    'index-finger-phalanx-proximal',
    'index-finger-phalanx-intermediate',
    'index-finger-phalanx-distal',
    'index-finger-tip',
    'middle-finger-metacarpal',
    'middle-finger-phalanx-proximal',
    'middle-finger-phalanx-intermediate',
    'middle-finger-phalanx-distal',
    'middle-finger-tip',
    'ring-finger-metacarpal',
    'ring-finger-phalanx-proximal',
    'ring-finger-phalanx-intermediate',
    'ring-finger-phalanx-distal',
    'ring-finger-tip',
    'pinky-finger-metacarpal',
    'pinky-finger-phalanx-proximal',
    'pinky-finger-phalanx-intermediate',
    'pinky-finger-phalanx-distal',
    'pinky-finger-tip',
}

export declare interface XRHitResult {
    hitMatrix: Float32Array;
}

export declare interface XRHitTestOptionsInit {
    space: EventTarget;
    offsetRay?: XRRay;
}

export declare interface XRHitTestOptionsInit {
    space: EventTarget;
    entityTypes?: XRHitTestTrackableType[];
    offsetRay?: XRRay;
}

export declare interface XRHitTestResult {
    getPose(baseSpace: EventTarget): XRPose | undefined | null;
    // When anchor system is enabled
    createAnchor?(pose: XRRigidTransform): Promise<XRAnchor>;
}

export declare interface XRHitTestSource {
    cancel(): void;
}

export declare enum XRHitTestTrackableType {
    'point',
    'plane',
    'mesh',
}

export declare interface XRInputSource {
    readonly handedness: XRHandedness;
    readonly targetRayMode: XRTargetRayMode;
    readonly targetRaySpace: EventTarget;
    readonly gripSpace?: EventTarget;
    readonly profiles: string[];
    readonly gamepad: Gamepad;
    readonly hand?: XRHand;
}

export declare interface XRInputSourceChangeEvent {
    session: XRSession;
    removed: XRInputSource[];
    added: XRInputSource[];
}

export declare interface XRInputSourceEvent extends Event {
    readonly frame: XRFrame;
    readonly inputSource: XRInputSource;
}

export declare interface XRJointPose extends XRPose {
    readonly radius: number | undefined;
}

export declare interface XRJointSpace extends EventTarget {
    readonly jointName: XRHandJoint;
}

export declare interface XRPlane {
    orientation: 'Horizontal' | 'Vertical';
    planeSpace: EventTarget;
    polygon: DOMPointReadOnly[];
    lastChangedTime: number;
}

export declare type XRPlaneSet = Set<XRPlane>;

export declare interface XRPose {
    readonly emulatedPosition: boolean;
    readonly transform: XRRigidTransform;
}

export declare class XRRay {
    readonly origin: DOMPointReadOnly;
    readonly direction: XRRayDirectionInit;
    matrix: Float32Array;

    constructor(transformOrOrigin: XRRigidTransform | DOMPointInit_2, direction?: XRRayDirectionInit);
}

export declare interface XRRayDirectionInit {
    x?: number;
    y?: number;
    z?: number;
    w?: number;
}

export declare interface XRReferenceSpace extends EventTarget {
    getOffsetReferenceSpace(originOffset: XRRigidTransform): XRReferenceSpace;
}

export declare interface XRReferenceSpace extends EventTarget {
    getOffsetReferenceSpace(originOffset: XRRigidTransform): XRReferenceSpace;
    onreset: any;
}

export declare type XRReferenceSpaceType = 'viewer' | 'local' | 'local-floor' | 'bounded-floor' | 'unbounded';

export declare interface XRRenderState {
    readonly depthNear: number;
    readonly depthFar: number;
    readonly inlineVerticalFieldOfView?: number;
    readonly baseLayer?: XRWebGLLayer;
}

export declare interface XRRenderStateInit {
    depthNear?: number;
    depthFar?: number;
    inlineVerticalFieldOfView?: number;
    baseLayer?: XRWebGLLayer;
}

export declare class XRRigidTransform {
    constructor(matrix: Float32Array | DOMPointInit_2, direction?: DOMPointInit_2);
    position: DOMPointReadOnly;
    orientation: DOMPointReadOnly;
    matrix: Float32Array;
    inverse: XRRigidTransform;
}

export declare interface XRSession extends EventTarget {
    requestReferenceSpace(type: XRReferenceSpaceType): Promise<XRReferenceSpace>;
    updateRenderState(renderStateInit: XRRenderStateInit): Promise<void>;
    requestAnimationFrame(callback: XRFrameRequestCallback): number;
    cancelAnimationFrame(id: number): void;
    end(): Promise<void>;
    renderState: XRRenderState;
    inputSources: XRInputSource[];
    environmentBlendMode: XREnvironmentBlendMode;
    visibilityState: XRVisibilityState;

    // hit test
    requestHitTestSource(options: XRHitTestOptionsInit): Promise<XRHitTestSource>;
    requestHitTestSourceForTransientInput(
        options: XRTransientInputHitTestOptionsInit,
    ): Promise<XRTransientInputHitTestSource>;

    // legacy AR hit test
    requestHitTest(ray: XRRay, referenceSpace: XRReferenceSpace): Promise<XRHitResult[]>;

    // legacy plane detection
    updateWorldTrackingState(options: { planeDetectionState?: { enabled: boolean } }): void;
}

export declare interface XRSessionInit {
    optionalFeatures?: string[];
    requiredFeatures?: string[];
}

export declare type XRSessionMode = 'inline' | 'immersive-vr' | 'immersive-ar';

export declare type XRTargetRayMode = 'gaze' | 'tracked-pointer' | 'screen';

export declare interface XRTransientInputHitTestOptionsInit {
    profile: string;
    offsetRay?: XRRay;
}

export declare interface XRTransientInputHitTestOptionsInit {
    profile: string;
    entityTypes?: XRHitTestTrackableType[];
    offsetRay?: XRRay;
}

export declare interface XRTransientInputHitTestResult {
    readonly inputSource: XRInputSource;
    readonly results: XRHitTestResult[];
}

export declare interface XRTransientInputHitTestSource {
    cancel(): void;
}

export declare interface XRView {
    readonly eye: XREye;
    readonly projectionMatrix: Float32Array;
    readonly viewMatrix: Float32Array;
    readonly transform: XRRigidTransform;
}

export declare interface XRViewerPose {
    readonly transform: XRRigidTransform;
    readonly views: XRView[];
}

export declare interface XRViewport {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
}

export declare type XRVisibilityState = 'visible' | 'visible-blurred' | 'hidden';

export declare class XRWebGLLayer {
    constructor(session: XRSession, gl: WebGLRenderingContext_2 | undefined, options?: XRWebGLLayerInit);
    framebuffer: WebGLFramebuffer;
    framebufferWidth: number;
    framebufferHeight: number;
    getViewport(view: XRView): XRViewport;
}

export declare interface XRWebGLLayerInit {
    antialias?: boolean;
    depth?: boolean;
    stencil?: boolean;
    alpha?: boolean;
    ignoreDepthValues?: boolean;
    framebufferScaleFactor?: number;
}

export declare const ZeroCurvatureEnding: InterpolationEndingModes;

export declare const ZeroFactor: BlendingDstFactor;

export declare const ZeroSlopeEnding: InterpolationEndingModes;

export declare const ZeroStencilOp: StencilOp;

/**
 * @deprecated Material.vertexColors is now a boolean.
 */
export declare enum Colors {}

export declare const NoColors: Colors;

export declare const FaceColors: Colors;

export declare const VertexColors: Colors;

export { }
