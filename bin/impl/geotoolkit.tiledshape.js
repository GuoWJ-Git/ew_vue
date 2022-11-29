/* eslint-disable */
import {L,Fb,N,W,Fh,D,Bj,Cj,te,ro,hb,xc,Qk,$a,ze,G,U,Hd,bc,Pm,De,jc,xb,rf,X,ta} from './geotoolkit.base.js';import {Zk,Uk} from './geotoolkit.http.js';var ca,ha=ha||{};ha.scope={};ha.WDc=function(d){var a=0;return function(){return a<d.length?{done:!1,value:d[a++]}:{done:!0}}};ha.uJe=function(d){return{next:ha.WDc(d)}};ha.obd=!1;ha.N9d=!1;ha.O9d=!1;ha.jAe=!1;ha.noc=!1;ha.defineProperty=ha.obd||"function"==typeof Object.defineProperties?Object.defineProperty:function(d,a,b){if(d==Array.prototype||d==Object.prototype)return d;d[a]=b.value;return d};
ha.I1=function(d){d=["object"==typeof globalThis&&globalThis,d,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var a=0;a<d.length;++a){var b=d[a];if(b&&b.Math==Math)return b}return function(){throw Error("Cannot find global object");}()};ha.global=ha.I1(this);ha.TMb="function"===typeof Symbol&&"symbol"===typeof Symbol("x");ha.FDe=!ha.noc||ha.TMb;ha.$cc={};ha.wdc={};ha.Chd="$jscp$";
function aaa(d,a){var b=ha.wdc[a];if(null==b)return d[a];b=d[b];return void 0!==b?b:d[a]}ha.LYc=function(d,a,b,c){a&&(ha.noc?ha.aWd(d,a,b,c):ha.bWd(d,a,b,c))};ha.bWd=function(d,a,b,c){b=ha.global;d=d.split(".");for(c=0;c<d.length-1;c++){var e=d[c];if(!(e in b))return;b=b[e]}d=d[d.length-1];c=b[d];a=a(c);a!=c&&null!=a&&ha.defineProperty(b,d,{configurable:!0,writable:!0,value:a})};
ha.aWd=function(d,a,b,c){var e=d.split(".");d=1===e.length;c=e[0];c=!d&&c in ha.$cc?ha.$cc:ha.global;for(var f=0;f<e.length-1;f++){var g=e[f];if(!(g in c))return;c=c[g]}e=e[e.length-1];b=ha.TMb&&"es6"===b?c[e]:null;a=a(b);null!=a&&(d?ha.defineProperty(ha.$cc,e,{configurable:!0,writable:!0,value:a}):a!==b&&(ha.wdc[e]=ha.TMb?ha.global.Symbol(e):ha.Chd+e,e=ha.wdc[e],ha.defineProperty(c,e,{configurable:!0,writable:!0,value:a})))};ha.oNe=function(){};
ha.LYc("Symbol",function(d){function a(f){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new b(c+(f||"")+"_"+e++,f)}function b(f,g){this.lbd=f;ha.defineProperty(this,"description",{configurable:!0,writable:!0,value:g})}if(d)return d;b.prototype.toString=function(){return this.lbd};var c="jscomp_symbol_",e=0;return a},"es6","es3");ha.qNe=function(){};
ha.LYc("Symbol.iterator",function(d){if(d)return d;d=Symbol("Symbol.iterator");for(var a="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),b=0;b<a.length;b++){var c=ha.global[a[b]];"function"===typeof c&&"function"!=typeof c.prototype[d]&&ha.defineProperty(c.prototype,d,{configurable:!0,writable:!0,value:function(){return ha.NQd(ha.WDc(this))}})}return d},"es6","es3");ha.pNe=function(){};
ha.NQd=function(d){d={next:d};d[Symbol.iterator]=function(){return this};return d};var lo=/*#__PURE__*/ta(/*#__PURE__*/function(){function d(){}L(d,"geotoolkit.scene.shapes.tiledshape.AbstractCancellationStrategy");d.prototype.vEb=Fb;return d}(),2,"eyJwcm90b3R5cGUiOnsicyI6MCwiYyI6eyJpc1JlcXVlc3RWYWxpZCI6InZFYiJ9fX0g");var mo=/*#__PURE__*/ta(/*#__PURE__*/{Image:0,Jsa:1,Nlb:2},2,"eyJCYXNlNjQiOiJKc2EiLCJDYW52YXMiOiJObGIifSAg");var no=/*#__PURE__*/ta(/*#__PURE__*/function(){function d(c){this.rect=c;this.Mk=null;this.time=Date.now();this.valid=!0}function a(c){return Math.floor(c+.5)}var b=new N;d.prototype.rm=function(){return this.Mk};d.prototype.hsa=function(c){this.Mk=c;return this};d.prototype.zp=function(){return this.rect};d.prototype.cb=function(c){this.rect=c;return this};d.prototype.render=function(c,e,f){var g=c.kXa();c.QMa(!0);b.Da(f.getX(),f.getY());b=e.Ma(b);var h=b.getX(),k=b.getY(),l=W.Tb,m=c.zt();e=a(a(this.rect.getX()+h-l)*m);f=a(a(this.rect.getY()+
k-l)*m);h=a(a(this.rect.na()+h+l)*m);k=a(a(this.rect.ma()+k+l)*m);c.Ih({LA:!0});c.drawImage(this.Mk,0,0,this.Mk.ca(),this.Mk.da(),e,f,h-e,k-f);c.xo();c.QMa(g)};d.prototype.getTime=function(){return this.time};d.prototype.W8d=function(){this.time=Date.now();return this};d.prototype.ha=function(){this.valid=!1};d.prototype.ae=function(){return this.valid};return d}(),2,"eyJwcm90b3R5cGUiOnsicyI6MCwiYyI6eyJpbnZhbGlkYXRlIjoiaGEiLCJpc1ZhbGlkIjoiYWUifX19");var oo=/*#__PURE__*/ta(/*#__PURE__*/function(){function d(a){this.Gd=[];this.cQa=this.bQa=0;this.xQb=!1;this.setOptions(a)}L(d,"geotoolkit.scene.shapes.tiledshape.TileCache");d.prototype.setOptions=function(a){void 0!==a.capacity&&(this.cQa=a.capacity);void 0!==a.loadertype&&(this.xQb=a.loadertype===mo.Nlb);return this};d.prototype.ta=function(){return{capacity:this.cQa}};d.prototype.clear=function(){if(0===this.bQa)return{};var a=this.Gd;this.Gd=[];this.bQa=0;return a};d.prototype.yCd=function(){return 0<this.cQa?this.cQa:Number.POSITIVE_INFINITY};
d.prototype.Pia=function(a){return this.Gd[a]};d.prototype.JR=function(a){if(a.hasOwnProperty("id")){var b=a.id,c=a.tileRect;if(this.xEc()){var e=null,f=Date.now(),g;for(g in this.Gd)if(this.Gd.hasOwnProperty(g)){var h=this.Gd[g].getTime();h<f&&(e=g,f=h)}a=this.r0c(a.image,c,b,e);delete this.Gd[e];this.bQa--}else a=this.xHc(a.image,c);this.Gd.hasOwnProperty(b)||this.bQa++;this.Gd[b]=a}};d.prototype.r0c=function(a,b,c,e){c="string"===typeof e?this.Gd[e]:e;c.W8d();c.cb(b);a=this.xQb?a:a.MB();b=c.rm();
b.setSize(a.width,a.height);b.clear();b.drawImage(a,0,0);return c};d.prototype.xHc=function(a,b){b=new no(b);a=this.xQb?a:a.MB();var c=new Fh(a.width,a.height,!0,!0,1);c.drawImage(a,0,0);b.hsa(c);return b};d.prototype.xEc=function(){return 0<this.cQa&&this.bQa>=this.cQa};d.prototype.mEb=function(){return 0===this.bQa};return d}(),1,"eyJwcm90b3R5cGUiOnsicyI6MCwiYyI6eyJnZXRPcHRpb25zIjoidGEiLCJnZXRDYXBhY2l0eSI6InlDZCIsImxvYWRGcm9tQ2FjaGUiOiJQaWEiLCJsb2FkSW1hZ2UiOiJKUiIsInJldXNlVGlsZSI6InIwYyIsImNyZWF0ZVRpbGUiOiJ4SGMiLCJjYWNoZUlzRnVsbCI6InhFYyIsImlzQ2FjaGVFbXB0eSI6Im1FYiJ9fX0g");var to=/*#__PURE__*/ta(/*#__PURE__*/function(){function d(){lo.call(this)}D(d,lo);L(d,"geotoolkit.scene.shapes.tiledshape.VisibleAreaCancellationStrategy");d.prototype.vEb=function(a,b){return b.visibleModelArea.Dd(a.tileRect)};return d}(),2,"eyJwcm90b3R5cGUiOnsicyI6MCwiYyI6eyJpc1JlcXVlc3RWYWxpZCI6InZFYiJ9fX0g");var uo=/*#__PURE__*/ta(/*#__PURE__*/{M3a:"TileAddedToQueue",lDa:"TileRemovedFromQueue",U1a:"AllTilesRendered",lea:"TileLoading",kea:"TileLoaded",U8:"TileCancelled",nea:"TileRendering",mea:"TileRendered",I2a:"FirstTileLoading",UOa:"LastTileRendered"},2,"eyJUaWxlTG9hZGluZyI6ImxlYSIsIlRpbGVMb2FkZWQiOiJrZWEiLCJUaWxlQ2FuY2VsbGVkIjoiVTgiLCJUaWxlUmVuZGVyaW5nIjoibmVhIiwiVGlsZVJlbmRlcmVkIjoibWVhIiwiRmlyc3RUaWxlTG9hZGluZyI6IkkyYSIsIkxhc3RUaWxlUmVuZGVyZWQiOiJVT2EifSAg");var vo=/*#__PURE__*/ta(/*#__PURE__*/function(){function d(f){te.call(this);this.zga=new ro({numberofparalleltasks:6});this.E_b=1;this.Ay=6E4;this.T5=null;this.cRa=b;this.Pt={};this.Vrb=!0;this.bRa=null;this.VTb=this.qtc=this.yyd.bind(this);this.HI=Zk.ya().hR();this.kSa=mo.Image;this.Vpb=this.Sob=null;this.setOptions(f)}function a(f,g){return(f<<16)+g}var b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKXSURBVHhe7dMBAQAACMMgm7+6QQYduEGYAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoApAlAmgCkCUCaAKQJQJoAhG0PobQWVJKLEbMAAAAASUVORK5CYII=",c=
[],e=function(){function f(){this.Zja=this.data=this.xjc=this.image=this.request=null}f.prototype.dispose=function(){null!=this.Zja&&clearTimeout(this.Zja);this.request&&this.request.cancel();this.image&&(this.image.za(Bj.ak),this.image.fa({url:null}),256>c.length?c.push(this.image):this.image.dispose());this.data=null};return f}();D(d,te);L(d,"geotoolkit.scene.shapes.tiledshape.TileReceiver");d.prototype.setOptions=function(f){if(!f)return this;void 0!==f.maxnumreq&&this.zga.mhc(f.maxnumreq);void 0!==
f.tries&&(this.E_b=f.tries);void 0!==f.timeout&&(this.Ay=f.timeout);void 0!==f.formatter&&this.Wjb(f.formatter);void 0!==f.imageloader&&(this.VTb=null!=f.imageloader?f.imageloader:this.qtc);void 0!==f.errimgsrc&&(this.cRa=f.errimgsrc,this.bRa&&(this.bRa.src=this.cRa));void 0!==f.base64&&(hb("options.base64 from geotoolkit.scene.shapes.TiledShape is deprecated since 2020.1 (3.1), use options.loadertype instead"),this.kSa=mo.Jsa);void 0!==f.httpservice&&(this.HI=f.httpservice?f.httpservice:Zk.ya().hR());
void 0!==f.loadertype&&(this.kSa=f.loadertype);void 0!==f.cancellationstrategy&&(this.Sob=f.cancellationstrategy);void 0!==f.timetowaitchanges&&(hb("geotoolkit.scene.shapes.TiledShape.prototype.setOptions parameter options.timetowaitchanges was deprecated since 3.4. Use parameter delaycallback instead."),this.Vpb=function(){return f.timetowaitchanges||0});void 0!==f.delaycallback&&(this.Vpb=f.delaycallback);return this};d.prototype.ta=function(){return{maxnumreq:this.zga.cQc(),tries:this.E_b,timeout:this.Ay,
formatter:this.T5,imageloader:this.VTb,errimgsrc:this.cRa,httpservice:this.HI,loadertype:this.kSa,cancellationstrategy:this.Sob,delaycallback:this.Vpb}};d.prototype.Wjb=function(f){this.clear();this.T5=f;this.Vrb="function"===typeof this.T5||null==this.T5;return this};d.prototype.WNa=function(f){if(this.Sob instanceof to)for(var g in this.Pt)this.Sob.vEb(this.Pt[g].data,f)||this.Ixa(g)};d.prototype.zja=function(f){if(this.T5){var g=f.id;if(this.Pt.hasOwnProperty(g)){if(null==this.Pt[g].Zja)return;
clearTimeout(this.Pt[g].Zja);this.notify(uo.lDa,this);this.Pt[g].Zja=null}else this.Pt[g]=new e;this.Pt[g].data=f;var h=this.Vpb(f);0<h?this.Pt[g].Zja=setTimeout(this.sDc.bind(this,g,f),h):this.sDc(g,f);this.notify(uo.M3a,this)}};d.prototype.sDc=function(f,g){if(this.te()||null==this.Pt[f]||this.Pt[f].data!==g)this.te()||this.notify(uo.lDa,this);else{this.Pt[f].Zja=null;var h=this,k=this.zga.eIa(function(l,m,n){n.Kk()||!h.T5?m():(h.notify(uo.lea,h,{id:f,modelArea:g.tileRect}),h.load(g,function(p){n.Kk()?
m():(h.notify(uo.kea,h,{id:f,image:p,modelArea:g.tileRect,tileRect:g.deviceTileRect}),h.lec(f),l())}))},{cancel:function(){h.notify(uo.U8,h,{id:f,modelArea:g.tileRect});h.lec(f)}});this.Pt[f].xjc=k.kc()}};d.prototype.load=function(f,g){var h=this;if(this.Vrb){var k=f.id;f.deviceTileRect=f.deviceArea.clone().translate(-f.transformedModelRect.getX(),-f.transformedModelRect.getY());f.deviceArea.round();f.transformedModelRect.round();var l=null;this.kSa!==mo.Nlb&&(l=0<c.length?c.pop():new Cj({crossorigin:"Anonymous"}),
this.Pt[k].image=l,l.on(Bj.ak,function(){h.te()||g(l)}));this.AVc(this.T5(f),l,k,g,this.E_b)}else{f.deviceArea.round();f.transformedModelRect.round();k=function(n){n.id=a(n.imgI,n.imgJ);n.image=new Cj({crossorigin:"Anonymous",image:n.img||n.image});n.image.on(Bj.ak,function(){g(n.image)});h.T5.UIc(n.id)};var m=function(n){h.bRa||(h.bRa=xc("img"),h.bRa.src=h.cRa);n.id=a(n.imgI,n.imgJ);n.image=new Cj({crossorigin:"Anonymous",image:h.bRa});n.image.on(Bj.ak,function(){g(n.image)});h.T5.UIc(n.id)};this.T5.load(null,
k,m,f.transformedModelRect,f.deviceArea,f.tileRect,f.i,f.j)}};d.prototype.AVc=function(f,g,h,k,l){var m=this;this.Pt[h].request=new Qk;"string"===typeof f&&(f={url:f});f.cancel=this.Pt[h].request;f.connectionData=this.Pt[h];var n=this.VTb(f,function(p,q){f.connectionData!==m.Pt[h]?k():q?null==g?k(q):(p=m.kSa===mo.Jsa||"object"!==typeof q?q:$a.URL.createObjectURL(q),g.fa({url:p?p:m.cRa})):!p||p!==Uk.hka&&p.code!==Uk.hka?(l--,p=function(){m.Pt[h]===f.connectionData?m.AVc(f,g,h,k,l):k()},0<l?setTimeout(p,
m.Ay):null==g?(m.Ixa(h),k()):g.fa({url:m.cRa})):k()});n instanceof Qk&&this.Pt[h].request!==n&&(this.Pt[h].request=n,f.cancel=this.Pt[h].request)};d.prototype.yyd=function(f,g){return this.query(f,this.kSa===mo.Jsa?null:"blob",function(h,k){g(h,k)})};d.prototype.query=function(f,g,h){return this.HI.get(f.url,{cancel:f.cancel,responseType:g}).then(function(k){h(null,k.data)},h)};d.prototype.clear=function(){this.zga.abort();for(var f in this.Pt)this.Ixa(f);this.Vrb||this.T5.PNe();return this};d.prototype.Ixa=
function(f){if(null!=this.Pt[f])if(null!=this.Pt[f].xjc)this.zga.TCc(this.Pt[f].xjc);else{var g=uo.U8;null!=this.Pt[f].Zja&&(clearTimeout(this.Pt[f].Zja),this.Pt[f].Zja=null,g=uo.lDa);this.notify(g,this,{id:f,modelArea:this.Pt[f].data.tileRect});this.lec(f)}};d.prototype.lec=function(f){null!=this.Pt[f]&&(this.Vrb||this.T5.UIc(f),this.Pt[f].dispose(),delete this.Pt[f])};d.prototype.dispose=function(){this.te()||(te.prototype.dispose.call(this),this.clear())};return d}(),1,"eyJwcm90b3R5cGUiOnsicyI6MCwiYyI6eyJnZXRPcHRpb25zIjoidGEiLCJzZXRUaWxlRm9ybWF0dGVyIjoiV2piIiwidmFsaWRhdGVSZXF1ZXN0cyI6IldOYSIsInNlbmRSZXF1ZXN0IjoiemphIiwiY2FuY2VsSW1hZ2UiOiJJeGEifX19");var wo=/*#__PURE__*/ta(/*#__PURE__*/function(){function d(a){te.call(this);null==a.formatter&&(a.formatter=a.provider);this.j_=a.asynctimeout||12E4;this.Ay=null;this.S_=0;this.w5a=this.wu=null;this.Gd=new oo(a);this.Cc=new vo(a);this.Cc.on(uo.M3a,function(){this.S_++;this.notify(uo.M3a,this)}.bind(this));this.Cc.on(uo.lDa,function(){this.S_--;this.notify(uo.lDa,this)}.bind(this));this.Cc.on(uo.lea,function(b,c,e){this.notify(uo.lea,this,e)}.bind(this));this.Cc.on(uo.kea,function(b,c,e){null!=e.image&&(this.Gd.JR(e),this.S_--,
this.wu&&(this.wu(this.Gd.Pia(e.id)),this.$ab()&&this.o4b()),this.notify(uo.kea,this,e),this.notify(ze.ib,this,e.modelArea))}.bind(this));this.Cc.on(uo.U8,function(b,c,e){this.S_--;this.notify(uo.U8,this,e)}.bind(this))}D(d,te);L(d,"geotoolkit.scene.shapes.tiledshape.AbstractTileManager");d.prototype.setOptions=function(a){null==a.formatter&&(a.formatter=a.provider);this.j_=a.asynctimeout||this.j_;this.Gd.setOptions(a);this.Cc.setOptions(a);return this};d.prototype.ta=function(){return G(G(this.Gd.ta(),
this.Cc.ta()),{asynctimeout:this.j_})};d.prototype.Wjb=function(a){this.Cc.Wjb(a);return this};d.prototype.mEb=function(){return this.Gd.mEb()};d.prototype.clear=function(){this.Cc.clear();return this.Gd.clear()};d.prototype.Pia=function(a){return this.Gd.Pia(a)};d.prototype.zja=function(a){this.Cc.zja(a)};d.prototype.Ixa=function(a){this.Cc.Ixa(a)};d.prototype.eGb=function(a,b,c,e,f,g){this.wu&&(this.Cc.clear(),this.o4b());this.clear();this.query(a,b,c,e,f,!0);this.$ab()?g():(this.wu=f,this.w5a=
g,this.Ay=setTimeout(this.o4b.bind(this),this.j_))};d.prototype.o4b=function(){this.wu=null;this.Ay&&(clearTimeout(this.Ay),this.Ay=null);this.w5a()};d.prototype.ha=function(a){};d.prototype.query=Fb;d.prototype.WNa=function(a){this.Cc.WNa(a)};d.prototype.dispose=function(){this.clear();this.Cc.dispose();te.prototype.dispose.call(this)};d.prototype.$ab=function(){return 0===this.S_};return d}(),1,"eyJwcm90b3R5cGUiOnsicyI6MCwiYyI6eyJnZXRPcHRpb25zIjoidGEiLCJzZXRUaWxlRm9ybWF0dGVyIjoiV2piIiwiaXNDYWNoZUVtcHR5IjoibUViIiwibG9hZEZyb21DYWNoZSI6IlBpYSIsInNlbmRSZXF1ZXN0IjoiemphIiwiY2FuY2VsSW1hZ2UiOiJJeGEiLCJxdWVyeUFzeW5jIjoiZUdiIiwiaW52YWxpZGF0ZSI6ImhhIiwidmFsaWRhdGVSZXF1ZXN0cyI6IldOYSIsImFyZUFsbFRpbGVzTG9hZGVkIjoiJGFiIn19fSAg");var xo=/*#__PURE__*/ta(/*#__PURE__*/function(){function d(a){wo.call(this,a);this.BWb=null;this.Dk=[];this.setOptions(a)}D(d,wo);L(d,"geotoolkit.scene.shapes.tiledshape.ImageManager");d.prototype.setOptions=function(a){if(null==a)return this;wo.prototype.setOptions.call(this,a);void 0!==a.modelarea&&(this.BWb=a.modelarea);void 0!==a.images&&(this.Dk=a.images.sort(function(b,c){return b.width<c.width}));return this};d.prototype.ta=function(){return G(wo.prototype.ta.call(this),{modelarea:this.BWb,images:this.Dk})};d.prototype.query=
function(a,b,c,e,f){this.$$=this.$$||a.lb();this.aaa=this.aaa||a.Ab();a=a.Ua(e);a=a.translate(-a.getX(),-a.getY());b=this.MB(Math.round(a.ca()));c=this.Pia(b.id);null==c?(this.WNa({visibleModelArea:e}),this.zja({id:b.id,tileRect:this.BWb,deviceArea:a,transformedModelRect:a})):this.j5a=c;this.j5a&&(this.notify(uo.nea,this,{id:b.id,modelArea:this.j5a.rect}),this.j5a.cb(a),f(this.j5a),this.notify(uo.mea,this,{id:b.id,modelArea:this.j5a.rect}));this.notify(uo.U1a,this)};d.prototype.MB=function(a){for(var b=
0;b<this.Dk.length-1;b++)if(a<=this.Dk[b])return this.Dk[b];return this.Dk[this.Dk.length-1]};return d}(),1,"eyJwcm90b3R5cGUiOnsicyI6MCwiYyI6eyJnZXRPcHRpb25zIjoidGEiLCJnZXRJbWFnZSI6Ik1CIn19fSAg");var yo=/*#__PURE__*/ta(/*#__PURE__*/function(){function d(c){wo.call(this,c);this.pX=this.rX=256;this.A_=1;this.OW=0;this.IW=15;this.Y4=null;this.nT=[];this.setOptions(c);this.U4=this.f6=1;this.ar=new U}function a(c,e){return(c<<16)+e}var b=new U;D(d,wo);L(d,"geotoolkit.scene.shapes.tiledshape.OSMManager");d.prototype.setOptions=function(c){if(null==c)return this;wo.prototype.setOptions.call(this,c);void 0!==c.tilew&&(this.rX=c.tilew);void 0!==c.tileh&&(this.pX=c.tileh);void 0!==c.extendedrenderingborders&&(this.A_=c.extendedrenderingborders);
void 0!==c.minlod&&(this.OW=c.minlod);void 0!==c.maxlod&&(this.IW=c.maxlod);return this};d.prototype.ta=function(){return G(wo.prototype.ta.call(this),{tilew:this.rX,tileh:this.pX,extendedrenderingborders:this.A_,minlod:this.OW,maxlod:this.IW})};d.prototype.query=function(c,e,f,g,h){b.cb(e).bd(this.A_*this.rX,this.A_*this.pX);this.Y4=g;this.ar=c.Ua(this.Y4,this.ar);e=W.clamp(Math.ceil(Math.log2(Math.min(c.gs(),c.Ou()))),this.OW,this.IW);if(this.z!==e||!W.equals(this.f6,this.ar.ca())||!W.equals(this.U4,
this.ar.da())){this.z=e;g=this.clear();for(var k in g)this.nT.push(g[k]);for(k=0;k<this.nT.length;k++){g=this.nT[k].zp();var l=this.ar.ca()/this.f6,m=this.ar.da()/this.U4;g.cb(g.getX()*l,g.getY()*m,g.na()*l,g.ma()*m);this.nT[k].cb(g)}}this.f6=this.ar.ca();this.U4=this.ar.da();m=Math.pow(2,e);l=b.intersect(this.ar);if(!l.isEmpty()){k=Math.abs(Math.sin(c.wp()))+Math.abs(Math.cos(c.wp()));l.bd(l.width*(k-1),l.height*(k-1));g=Math.ceil(this.rX*c.gs()/m);var n=Math.ceil(this.pX*c.Ou()/m);k=Math.ceil((l.getX()+
l.ca()-this.ar.getX())/g);var p=Math.floor((l.getX()-this.ar.getX())/g);g=Math.floor((l.getY()-this.ar.getY())/n);l=Math.ceil((l.getY()+l.da()-this.ar.getY())/n);0>p&&(p=0);0>g&&(g=0);k>m&&(k=m);l>m&&(l=m);this.nT.forEach(h);f=f.clone().intersect(this.ar);f.isEmpty()||(f=c.wd(f),f.bd(Math.max(Hd.sb((this.A_+1)*this.rX,0,c),0),Math.max(Hd.sb(0,(this.A_+1)*this.pX,c),0)),this.WNa({visibleModelArea:f}));for(f=p;f<k;f++)for(m=g;m<l;m++)p=a(f,m),n=this.Pia(p),null!=n?(this.notify(uo.nea,this,{id:p,modelArea:n.rect}),
h(n),this.notify(uo.mea,this,{id:p,modelArea:n.rect})):this.Xgb(this.ar,c,f,m,e,p);this.$ab()&&0<this.nT.length&&(this.nT.length=0);this.notify(uo.U1a,this)}};d.prototype.Xgb=function(c,e,f,g,h,k){var l=Math.pow(2,h),m=this.rX*e.gs()/l;l=this.pX*e.Ou()/l;var n=f*m+c.getX(),p=g*l+c.getY();m=new U(n,p,m+n,l+p);e=e.wd(m);e.Dd(this.Y4)&&this.zja({id:k,tileRect:e,i:f,j:g,z:h,deviceArea:m,transformedModelRect:c.clone()})};return d}(),1,"eyJwcm90b3R5cGUiOnsicyI6MCwiYyI6eyJnZXRPcHRpb25zIjoidGEiLCJsb2FkRnJvbVNlcnZlciI6IlhnYiJ9fX0g");var zo=/*#__PURE__*/ta(/*#__PURE__*/function(){function d(c){wo.call(this,c);this.pX=this.rX=256;this.A_=1;this.J6a=!1;this.Y4=null;this.pwc=1;this.nT=[];this.ar=new U;this.setOptions(c)}function a(c,e){return(c<<16)+e}var b=new U;D(d,wo);L(d,"geotoolkit.scene.shapes.tiledshape.TileManager");d.prototype.setOptions=function(c){if(null==c)return this;wo.prototype.setOptions.call(this,c);void 0!==c.tilew&&(this.rX=c.tilew);void 0!==c.tileh&&(this.pX=c.tileh);void 0!==c.extendedrenderingborders&&(this.A_=c.extendedrenderingborders);
void 0!==c.isconsttiles&&(this.J6a=c.isconsttiles);return this};d.prototype.ta=function(){return G(wo.prototype.ta.call(this),{tilew:this.rX,tileh:this.pX,extendedrenderingborders:this.A_,isconsttiles:this.J6a})};d.prototype.query=function(c,e,f,g,h){if(null!=g){var k=bc();b.cb(e).bd(this.A_*this.rX,this.A_*this.pX);this.Y4=g;this.ar=c.Ua(this.Y4,this.ar);if(!(this.J6a||W.equals(this.pwc,k)&&W.equals(this.f6,this.ar.ca())&&W.equals(this.U4,this.ar.da()))){e=this.clear();for(var l in e)this.nT.push(e[l]);
for(l=0;l<this.nT.length;l++){e=this.nT[l].zp();g=this.ar.ca()/this.f6;var m=this.ar.da()/this.U4;e.cb(e.getX()*g,e.getY()*m,e.na()*g,e.ma()*m);this.nT[l].cb(e)}}this.pwc=k;this.f6=this.ar.ca();this.U4=this.ar.da();g=b.intersect(this.ar);if(!g.isEmpty()){l=this.rX;m=this.pX;k=Math.ceil((g.getX()+g.ca()-this.ar.getX())/l);l=Math.floor((g.getX()-this.ar.getX())/l);e=Math.floor((g.getY()-this.ar.getY())/m);g=Math.ceil((g.getY()+g.da()-this.ar.getY())/m);f=f.clone().intersect(this.ar);f.isEmpty()||(f=
c.wd(f),f.bd(Math.max(Hd.sb((this.A_+1)*this.rX,0,c),0),Math.max(Hd.sb(0,(this.A_+1)*this.pX,c),0)),this.WNa({visibleModelArea:f}));for(f=l;f<k;f++)for(m=e;m<g;m++){var n=a(f,m),p=this.Pia(n);null!=p&&p.ae()||this.Xgb(this.ar,c,f,m,n)}!this.J6a&&0<this.nT.length&&(this.$ab()?this.nT.length=0:this.nT.forEach(h));this.pZd(l,k,e,g,h);this.notify(uo.U1a,this)}}};d.prototype.pZd=function(c,e,f,g,h){for(;c<e;c++)for(var k=f;k<g;k++){var l=a(c,k),m=this.Pia(l);m&&(this.notify(uo.nea,this,{id:l,modelArea:m.rect}),
h(m),this.notify(uo.mea,this,{id:l,modelArea:m.rect}))}};d.prototype.Xgb=function(c,e,f,g,h){var k=this.rX,l=this.pX,m=f*k+c.getX(),n=g*l+c.getY();k=new U(m,n,k+m,l+n);l=e.sc(k);l=l.intersect(this.Y4);l.ca()<W.Tb||l.da()<W.Tb||(k=e.transform(l,k),this.zja({id:h,tileRect:l,deviceArea:k,transformedModelRect:c.clone(),i:f,j:g}))};d.prototype.ha=function(c){if(!this.J6a){var e=b;null!=c?(b.cb(c),b.intersect(this.ar)):b.cb(this.ar);var f=this.rX,g=this.pX;c=Math.ceil((e.getX()+e.ca()-this.ar.getX())/f);
var h=Math.floor((e.getX()-this.ar.getX())/f);f=Math.floor((e.getY()-this.ar.getY())/g);e=Math.ceil((e.getY()+e.da()-this.ar.getY())/g);for(g=h;g<c;g++)for(h=f;h<e;h++){var k=a(g,h);this.Ixa(k);k=this.Pia(k);null!=k&&k.ha()}}};return d}(),1,"eyJwcm90b3R5cGUiOnsicyI6MCwiYyI6eyJnZXRPcHRpb25zIjoidGEiLCJsb2FkRnJvbVNlcnZlciI6IlhnYiIsImludmFsaWRhdGUiOiJoYSJ9fX0g");var Ao=/*#__PURE__*/ta(/*#__PURE__*/function(){function d(g){var h=new U(0,0,1E3,1E3);Pm.call(this,h);this.Y4=h;this.zq=null;this.wX=function(k,l,m){this.ha(m,!1)}.bind(this);this.FM=!1;this.rYb=this.cVb=this.S_=this.dVb=0;this.Sna={};this.EUa={};this.iwb={};this.hwb={};this.d_b={};this.Fqb=!0;this.DUa=!1;this.Eea=null;this.ea={freezeupdate:!1};this.ztc=function(k){k.za(uo.M3a,this.Hyc);k.za(uo.lDa,this.Lyc);k.za(uo.U1a,this.cyc);k.za(ze.ib,this.wX);k.za(uo.lea,this.Kyc);k.za(uo.kea,this.Jyc);k.za(uo.U8,this.Iyc);k.za(uo.nea,
this.Nyc);k.za(uo.mea,this.Myc)}.bind(this);this.Zsc=function(k){k.on(uo.M3a,this.Hyc);k.on(uo.lDa,this.Lyc);k.on(uo.U1a,this.cyc);k.on(ze.ib,this.wX);k.on(uo.lea,this.Kyc);k.on(uo.kea,this.Jyc);k.on(uo.U8,this.Iyc);k.on(uo.nea,this.Nyc);k.on(uo.mea,this.Myc)}.bind(this);this.Hyc=function(){0===this.S_&&(this.Fqb=!0,this.DUa=!1);this.S_++}.bind(this);this.Lyc=function(){this.S_--}.bind(this);this.Kyc=function(k,l,m){if(this.Fqb){this.cVb=0;this.Fqb=!1;this.qXc();if(!this.FM)return;this.Sna[m.id]=
$a.performance.now();this.dVb=this.Sna[m.id]}else this.FM&&(this.Sna[m.id]=$a.performance.now());this.FM&&this.notify(uo.lea,this,{modelArea:m.modelArea})}.bind(this);this.Jyc=function(k,l,m){this.S_--;this.cVb++;this.FM&&(k=$a.performance.now()-this.Sna[m.id],this.notify(uo.kea,this,{modelArea:m.modelArea,time:k}),delete this.Sna[m.id],this.iwb[m.modelArea.toString()]=k)}.bind(this);this.Iyc=function(k,l,m){this.S_--;this.FM&&this.Sna.hasOwnProperty(m.id)&&(k=$a.performance.now()-this.Sna[m.id],
this.notify(uo.U8,this,{modelArea:m.modelArea,time:k}),delete this.Sna[m.id],this.hwb[m.modelArea.toString()]=k)}.bind(this);this.Nyc=function(k,l,m){this.FM&&!this.DUa&&(this.EUa[m.id]=$a.performance.now(),this.notify(uo.nea,this,{modelArea:m.modelArea}))}.bind(this);this.Myc=function(k,l,m){this.DUa||(this.rYb++,this.FM&&(k=$a.performance.now()-this.EUa[m.id],this.notify(uo.mea,this,{modelArea:m.modelArea,time:$a.performance.now()-this.EUa[m.id]}),delete this.EUa[m.id],this.d_b[m.modelArea.toString()]=
k))}.bind(this);this.cyc=function(k,l,m){this.DUa||0<this.S_||(this.DUa=!0,this.TWc(),this.iwb={},this.hwb={},this.EUa={})}.bind(this);g=g||{};g.delaycallback=g.delaycallback||function(k){return 500};this.setOptions(g)}var a,b,c,e,f;D(d,Pm);L(d,"geotoolkit.scene.shapes.TiledShape");d.prototype.qXc=function(){this.notify(uo.I2a,this)};d.prototype.TWc=function(){this.Eea&&(this.Eea.dispose(),this.Eea=null,setTimeout(this.ha.bind(this)));var g=this.FM?{tilesLoading:this.iwb,tilesCancelling:this.hwb,
tilesRendering:this.d_b,time:$a.performance.now()-this.dVb}:{};this.notify(uo.UOa,this,g)};d.prototype.f0c=function(){this.rYb=this.cVb=this.S_=this.dVb=0;this.Sna={};this.EUa={};this.iwb={};this.hwb={};this.d_b={};this.Fqb=!0;this.DUa=!1};d.prototype.exd=function(g){var h=zo;if(void 0!==g.images)h=xo;else if(g.hasOwnProperty("minlod")||g.hasOwnProperty("maxlod"))h=yo;else if(!g.hasOwnProperty("isconsttiles")&&null!=this.zq)return g&&g.freezeupdate&&(this.Eea=this.Eea||this.zq,this.ztc(this.zq),this.zq=
new h(g),this.Zsc(this.zq)),this.zq.clear(),this.f0c(),this.zq.setOptions(g),this.zq;null!=this.zq&&((g=G(g,this.zq.ta()))&&g.freezeupdate?(this.Eea=this.zq,this.ztc(this.zq)):this.zq.dispose());this.zq=new h(g);this.f0c();this.Zsc(this.zq);return this.zq};d.prototype.setOptions=function(g){if(null==g)return this;g=jc(g);this.ea=xb(g,this.ea);g.hasOwnProperty("modelarea")&&this.ea.modelarea instanceof U&&!this.ea.modelarea.isEmpty()&&(this.Y4=this.ea.modelarea,this.sa(this.Y4));this.zq=this.exd(this.ea);
this.ha();return this};d.prototype.ta=function(){var g=xb(this.ea,{});return xb(this.zq.ta(),g)};d.prototype.Fe=function(g,h){g=null!=this.Sa()?g.bc(this.Sa()):g;if(g.fc())g.ra(rf.zh),g.Bc(this.FA()),h();else if(null==this.zq)h();else{var k=this;this.Era(g,function(l,m,n,p,q){function r(){q();h()}k.Eea?k.Eea.eGb(l,m,n,k.FA(),p,function(){k.zq.eGb(l,m,n,k.FA(),function(){},r)}):k.zq.eGb(l,m,n,k.FA(),p,r)})}};d.prototype.render=function(g){this.rYb=0;g=null!=this.Sa()?g.bc(this.Sa()):g;if(g.fc())g.ra(rf.zh),
g.Bc(this.FA());else if(null!=this.zq){var h=this;this.Era(g,function(k,l,m,n,p){h.Eea?(h.Eea.query(k,l,m,h.FA(),n),h.zq.query(k,l,m,h.FA(),function(){})):h.zq.query(k,l,m,h.FA(),n);p()})}};d.prototype.Era=function(g,h){function k(){if(null!=l){l.tp();var y=g.bc(t.xc());y.drawImage(l,0,0,l.ca()*g.zt(),l.da()*g.zt(),0,0,r.ca(),r.da())}w.yh(g)}this.Yh(g);var l,m=g.mg(),n=g.iO(),p=g.Ea();if((p.OH()||0>p.lb()||0>p.Ab())&&null!=this.FA()){var q=g.Ea();m=this.FA();a=a||new N;b=b||new N;c=c||new N;e=e||
new U;f=f||new X;a.Da(m.ka(),m.la());b.Da(m.ka(),m.ma());c.Da(m.na(),m.la());a=q.transform(a,a);b=q.transform(b,b);c=q.transform(c,c);n=N.xf(a,c);p=N.xf(a,b);e.cb(0,0,n,p);p=X.Vd(m,e);m=g.mg().clone();n=g.iO().clone();q.sc(m,m);q.sc(n,n);p.transform(m,m);p.transform(n,n);if(m.Dd(e)){var r=m.clone().intersect(e);var t=X.jf(-r.getX()+e.getX(),-r.getY()+e.getY()).Wp(p);q=r.ca();var u=r.da();0<q&&0<u&&(l=g.Ez(q,u,!1))}}null!=l&&l.hr();var w=this;h(p,m,n,function(y){null!=l?y.render(l.lza(),t,w.FA()):
y.render(g,g.Ea(),w.FA())},k)};d.prototype.FA=function(){return this.Y4};d.prototype.Sa=function(){var g=this.tGd(),h=this.ob();return null==h?g:null==g?h:X.multiply(h,g)};d.prototype.dispose=function(){this.te()||(null!=this.zq&&(this.zq.dispose(),this.zq=null),Pm.prototype.dispose.call(this))};d.prototype.xa=function(g,h){Pm.prototype.xa.call(this,g,h);h===De.eea&&(this.zq&&this.zq.clear(),this.ha());return this};d.prototype.tGd=function(){var g=this.ga(),h=this.FA();return X.Hxa(h,g)?X.Vd(h,g,
!1,!1,!1):null};d.prototype.iOc=function(g){g=g||this.FA();if(null!=g&&null!=this.wa()){var h=this.wa().wp(),k=Math.abs(Math.cos(h))+Math.abs(Math.sin(h))-1;0<k&&(g=g.clone(),h=g.ca()*k,k*=g.ca(),g.bd(h,k))}return g};d.prototype.ha=function(g,h){!1!==h&&this.zq&&this.zq.ha(g);Pm.prototype.ha.call(this,this.iOc(g),h)};d.prototype.Lg=function(g,h){Pm.prototype.Lg.call(this,this.iOc(g),h)};d.prototype.dBa=function(g){this.FM=g;return this};d.prototype.vdb=function(){return this.FM};return d}(),2,"eyJwcm90b3R5cGUiOnsicyI6MCwiYyI6eyJvblN0YXJ0VGlsZXNMb2FkaW5nIjoicVhjIiwib25BbGxUaWxlc1JlbmRlcmVkIjoiVFdjIiwiZ2V0T3B0aW9ucyI6InRhIiwicmVuZGVyQXN5bmMiOiJGZSIsImdldE1vZGVsQXJlYSI6IkZBIiwiZ2V0V29ybGRUcmFuc2Zvcm0iOiJTYSIsInVwZGF0ZVN0YXRlIjoieGEiLCJpbnZhbGlkYXRlIjoiaGEiLCJpbnZhbGlkYXRlUGFyZW50IjoiTGciLCJzZXRDb2xsZWN0UGVyZm9ybWFuY2VJbmZvcm1hdGlvbiI6ImRCYSIsImdldENvbGxlY3RQZXJmb3JtYW5jZUluZm9ybWF0aW9uIjoidmRiIn19fSAg");export {lo,mo,no,oo,to,uo,vo,wo,xo,yo,zo,Ao};