// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../navigation/Momentum"],function(b,d,e,c){Object.defineProperty(d,"__esModule",{value:!0});b=function(){function a(a,b){this.pinchNavigation=a;this._helper=b;this.zoom={momentum:null,estimator:new c.ZoomMomentumEstimator(.05),enabled:!0};this.rotation={momentum:null,estimator:new c.RotationMomentumEstimator(.05,3,.05,.95),enabled:!0};this.pan={momentum:null,estimator:new c.ScreenspaceMomentumEstimator(.05,600,6,.82),
enabled:!0};this._elapsedTime=0;this._active=!1}a.prototype.destroy=function(){this.stop()};Object.defineProperty(a.prototype,"active",{get:function(){return this._active},enumerable:!0,configurable:!0});a.prototype.doFrameUpdate=function(a){this._onUpdate(.001*a)};a.prototype.stop=function(){this.pan.estimator.reset();this.rotation.estimator.reset();this.zoom.estimator.reset();this._active=!1};a.prototype.initiate=function(){this._active||(this._elapsedTime=0,this.pan.momentum=null,this.zoom.momentum=
null,this.rotation.momentum=null,this.zoom.enabled&&(this.zoom.momentum=this.zoom.estimator.evaluateMomentum()),!this.zoom.momentum&&this.rotation.enabled&&(this.rotation.momentum=this.rotation.estimator.evaluateMomentum()),this.zoom.momentum||this.rotation.momentum||!this.pan.enabled||(this.pan.momentum=this.pan.estimator.evaluateMomentum()),this._active=null!=(this.zoom.momentum||this.rotation.momentum||this.pan.momentum))};Object.defineProperty(a.prototype,"helper",{get:function(){return this._helper},
enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"view",{get:function(){return this.pinchNavigation.view},enumerable:!0,configurable:!0});a.prototype._onUpdate=function(a){this.active&&(this.zoom.momentum&&this.zoom.momentum.isFinished(this._elapsedTime)&&(this.zoom.momentum=null),this.rotation.momentum&&this.rotation.momentum.isFinished(this._elapsedTime)&&(this.rotation.momentum=null),this.pan.momentum&&this.pan.momentum.isFinished(this._elapsedTime)&&(this.pan.momentum=null),this.zoom.momentum||
this.rotation.momentum||this.pan.momentum?(this.view.navigation.targetCamera.copyFrom(this.view.navigation.currentCamera),this.onUpdate(this._elapsedTime,a,this.view.navigation.targetCamera),this.pinchNavigation.applyNavigationConstraints(),this._elapsedTime+=a):this.stop())};return a}();d.MomentumNavigationBase=b});