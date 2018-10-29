// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators ../../core/Accessor ../../core/Evented ../../core/Identifiable ../../core/Promise ../../core/HandleRegistry ../../core/Logger".split(" "),function(p,q,f,c,b,g,h,k,l,m,n){return function(e){function a(){var d=null!==e&&e.apply(this,arguments)||this;d.handles=new m;d.parent=null;d.view=null;return d}f(a,e);a.prototype.initialize=function(){var d=this;this.addResolvingPromise(this.layer);
this.otherwise(function(a){if("layerview:create-error"!==a.name){var b=d.layer&&d.layer.id||"no id",c=d.layer&&d.layer.title||"no title";n.getLogger(d.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+c+"', id: '"+b+"')",a)}})};a.prototype.destroy=function(){this.layer=this.view=this.parent=null};Object.defineProperty(a.prototype,"layer",{get:function(){return this._get("layer")},set:function(a){this.handles.remove("layer");a&&this.handles.add(a.on("refresh",this.refresh.bind(this)),
"layer");this._set("layer",a)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"updating",{get:function(){return!this.suspended&&this.isUpdating()},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(a){void 0===a?this._clearOverride("visible"):this._override("visible",a)},
enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"fullOpacity",{get:function(){var a=this.get("layer.opacity"),a=null!=a?a:1,b=this.get("parent.fullOpacity");return a*(null!=b?b:1)},enumerable:!0,configurable:!0});a.prototype.refresh=function(){};a.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1};a.prototype.isUpdating=function(){return!1};c([b.property({value:null})],a.prototype,"layer",null);
c([b.property()],a.prototype,"parent",void 0);c([b.property({readOnly:!0,dependsOn:["view","visible","layer.loaded","parent.suspended"]})],a.prototype,"suspended",null);c([b.property({type:Boolean,dependsOn:["suspended"],readOnly:!0})],a.prototype,"updating",null);c([b.property()],a.prototype,"view",void 0);c([b.property({dependsOn:["layer.visible"]})],a.prototype,"visible",null);c([b.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],a.prototype,"fullOpacity",null);return a=c([b.subclass("esri.views.layers.LayerView")],
a)}(b.declared(g,h,k,l))});