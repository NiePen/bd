// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/JSONSupport ../core/accessorSupport/decorators".split(" "),function(l,m,h,d,k,c){return function(g){function a(e){e=g.call(this,e)||this;e.date=null;e.directShadowsEnabled=!1;e.displayUTCOffset=null;return e}h(a,g);f=a;a.prototype.readDate=function(e,a){return null!=a.datetime&&new Date(a.datetime)||null};a.prototype.writeDate=function(a,b){null!=a&&(b.datetime=a.getTime())};a.prototype.readDirectShadowsEnabled=
function(a,b){return!!b.directShadows};a.prototype.writedirectShadowsEnabled=function(a,b){a&&(b.directShadows=!0)};a.prototype.writeDisplayUTCOffset=function(a,b){null!=a&&(b.displayUTCOffset=a)};a.prototype.clone=function(){return new f({date:null!=this.date?new Date(this.date.getTime()):null,directShadowsEnabled:this.directShadowsEnabled,displayUTCOffset:null!=this.displayUTCOffset?this.displayUTCOffset:null})};a.sanitizeJSON=function(a){var b={datetime:a.datetime};void 0!==a.directShadows&&(b.directShadows=
!!a.directShadows);void 0!==a.displayUTCOffset&&(b.displayUTCOffset=a.displayUTCOffset);return b};d([c.property({type:Date})],a.prototype,"date",void 0);d([c.reader("date",["datetime"])],a.prototype,"readDate",null);d([c.writer("date")],a.prototype,"writeDate",null);d([c.property({type:Boolean})],a.prototype,"directShadowsEnabled",void 0);d([c.reader("directShadowsEnabled",["directShadows"])],a.prototype,"readDirectShadowsEnabled",null);d([c.writer("directShadowsEnabled")],a.prototype,"writedirectShadowsEnabled",
null);d([c.property({type:Number,json:{write:!0}})],a.prototype,"displayUTCOffset",void 0);d([c.writer("displayUTCOffset")],a.prototype,"writeDisplayUTCOffset",null);return a=f=d([c.subclass("esri.webscene.Lighting")],a);var f}(c.declared(k))});