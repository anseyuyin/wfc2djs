System.register("chunks:///_virtual/wfcLoader.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var r,n,t,a;return{setters:[function(e){r=e.asyncToGenerator},function(e){n=e.cclegacy,t=e._decorator,a=e.SpriteFrame}],execute:function(){n._RF.push({},"1b3ado9Z/xMTrBK6sVflsaf","wfcLoader",void 0);t.ccclass,t.property;e("WfcLoader",function(){function e(){}return e.xhrLoad=function(e,r){return new Promise((function(n,t){var a=new XMLHttpRequest;a.responseType=r,a.open("GET",e),a.send(),a.onreadystatechange=function(){4==a.readyState&&(200==a.status?n(a):t())}}))},e.getWFC=function(){var e=r(regeneratorRuntime.mark((function e(r){var n,t,o,s,c,u,i,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,t=r+"data.json",e.next=4,this.xhrLoad(t,"json");case 4:if(o=e.sent,s=o.response){e.next=9;break}return alert("没找到 "+t+"!"),e.abrupt("return",n);case 9:for(f in c=[],u={},i=function(e){var n=s.tiles[e],t=""+r+e+n[0],o=new Image;o.src=t,o.crossOrigin="";var i=new Promise((function(r,n){o.onload=function(){var n=a.createWithImage(o);u[e]=n,r(null)},o.onerror=n}));c.push(i)},s.tiles)i(f);return e.next=15,Promise.all(c);case 15:return n={config:s,imgs:u},e.abrupt("return",n);case 17:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}(),e}()).cacheMap=new Map,n._RF.pop()}}}));

System.register("chunks:///_virtual/touchMove.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./tileMap.ts"],(function(t){"use strict";var e,i,o,n,r,s,a,p,h,c,l;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,o=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){r=t.cclegacy,s=t._decorator,a=t.Vec2,p=t.Vec3,h=t.SystemEventType,c=t.Component},function(t){l=t.TileMap}],execute:function(){var u,v,d,M,m,f,S;r._RF.push({},"21e66PCUnxIuodOr/NUmNbi","touchMove",void 0);var y=s.ccclass,_=s.property;t("TouchMove",(u=y("TouchMove"),v=_({type:l}),u((S=f=function(t){function e(){for(var e,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return e=t.call.apply(t,[this].concat(r))||this,o(e,"tileMapObj",m,n(e)),e.startPoint=new a,e.startPos=new p,e.moveDir=new a,e.currMoveSpeed=10,e.maxSpeed=1e3,e.minSpeed=50,e.dampingRate=.1,e}i(e,t);var r=e.prototype;return r.start=function(){this.node.on(h.TOUCH_START,this.onStart,this),this.node.on(h.TOUCH_MOVE,this.onMove,this),this.node.on(h.TOUCH_END,this.onEnd,this),this.node.on(h.TOUCH_CANCEL,(function(t){}))},r.update=function(t){this.damper(t),this.doMoveByDir(t)},r.onStart=function(t){var e,i;(t.getLocation(this.startPoint),this.startPos,null===(e=this.tileMapObj)||void 0===e?void 0:e.node.position)&&a.copy(this.startPos,null===(i=this.tileMapObj)||void 0===i?void 0:i.node.position);this.moveDir.set(0,0)},r.onEnd=function(t){},r.onMove=function(t){var i=e.help_v2;t.getLocation(i),i.subtract(this.startPoint),i.length()<1||(a.copy(this.moveDir,i),this.moveDir.normalize())},r.doMoveByDir=function(t){var i,o;if(0!=this.moveDir.lengthSqr()){var n=e.help_v2;a.multiplyScalar(n,this.moveDir,t*this.currMoveSpeed);var r,s=e.help_v3;if(s.set(n.x,n.y,0),null===(i=this.tileMapObj)||void 0===i?void 0:i.node.position)s.add(null===(r=this.tileMapObj)||void 0===r?void 0:r.node.position);null===(o=this.tileMapObj)||void 0===o||o.node.setPosition(s)}},r.damper=function(t){this.currMoveSpeed-=this.dampingRate*this.currMoveSpeed,this.currMoveSpeed=Math.min(this.currMoveSpeed,this.maxSpeed),this.currMoveSpeed=Math.max(this.currMoveSpeed,this.minSpeed)},e}(c),f.help_v2=new a,f.help_v3=new p,m=e((M=S).prototype,"tileMapObj",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=M))||d));r._RF.pop()}}}));

System.register("chunks:///_virtual/grid.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./eventer.ts"],(function(t){"use strict";var e,o,i,n,s,r,a,l,c,h,p,f;return{setters:[function(t){e=t.inheritsLoose,o=t.createClass},function(t){i=t.cclegacy,n=t._decorator,s=t.Vec3,r=t.Node,a=t.Layers,l=t.Sprite,c=t.UITransform,h=t.Vec2,p=t.Component},function(t){f=t.Eventer}],execute:function(){var u,_,g;t("GridState",void 0),i._RF.push({},"36a9bXXj2lDI6drNbWmMSQX","grid",void 0);var v,d=n.ccclass;n.property;!function(t){t[t.none=0]="none",t[t.collapseing=1]="collapseing",t[t.complete=2]="complete"}(v||(v=t("GridState",{})));t("Grid",d("Grid")((g=_=function(t){function i(){for(var e,o=arguments.length,i=new Array(o),n=0;n<o;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))||this)._size=100,e._GridPos=new h,e._sp=null,e._wfc=null,e._wfcSpMap=new Map,e._state=v.none,e}e(i,t),i.poolNew=function(){var t=this._poolArr.pop();t?delete t[this.IN_POOL_TAG]:t=new r("grid").addComponent(i);return t},i.poolDelete=function(t){t&&!t[this.IN_POOL_TAG]&&this._poolArr.push(t)},i.getWFC=function(){for(var t,e=0,o=this._wfcPool.length;e<o;e++){var n=this._wfcPool[e];if(!n.isCollapseing){t=n,this._wfcPool.splice(e,1);break}}return t||(t=new WFC.WFC2D(i.wfcDataImg.config)),t},i.storeWFC=function(t){t&&this._wfcPool.push(t)},i.clear=function(){this.posDataMap.clear(),this.posDataMap.clear(),this._wfcPool.length=0,this._poolArr.length=0};var n=i.prototype;return n.start=function(){this.node.on;for(var t=i.tileSize,e=Math.floor(this._size/t),o=0;o<e;o++)for(var n=0;n<e;n++){var s=n+"_"+o,h=new r(s);h.layer=a.Enum.UI_2D,h.parent=this.node,this.node.addChild(h),h.setPosition((n+.5)*t,(o+.5)*t);var p=h.addComponent(l);p.sizeMode=l.SizeMode.CUSTOM,this._wfcSpMap.set(s,p);var f=h.getComponent(c);f.width=t,f.height=t}},n.show=function(t){var e=this,o=this.getPosKey();if(i.posDataMap.get(o))this.refrashDisplay();else{var n,s;i.collapseingMap.set(o,!0);var r=Math.floor(this._size/i.tileSize);null===(n=this.wfc)||void 0===n||n.clearKnown();var a=this.calcaknown(t),l=a&&a.length>0,c=this.calcaHornknown(t);l&&(r+=2,c=c.concat(a)),null===(s=this.wfc)||void 0===s||s.setKnown(c);try{var h;null===(h=this.wfc)||void 0===h||h.collapse(r,r,1e3).then((function(t){i.eventer.Emit(i.ON_COLLAPSED,o),i.collapseingMap.delete(o),t.length<1?console.error("collapse 计算的返回值为空"):o==e.getPosKey()&&(l&&e.cutData(t,r),i.posDataMap.set(o,t),e.refrashDisplay())})).catch((function(t){i.collapseingMap.delete(o),console.error(t)}))}catch(t){console.error(t)}}this._state},n.hide=function(){var t;this._wfcSpMap.forEach((function(t){t&&(t.node.active=!1)})),this._wfc&&(null===(t=this._wfc)||void 0===t?void 0:t.isCollapseing)&&(i.storeWFC(this._wfc),this._wfc=null)},n.setGridPosition=function(t){var e=i.helpV3;e.set(t.x,t.y,0),e=e.multiplyScalar(this._size),this.node.setPosition(e),this._GridPos.set(t.x,t.y)},n.getGridPosition=function(){return this._GridPos.clone()},n.hasData=function(){var t=this.getPosKey();return null!=i.posDataMap.get(t)},n.getPosKey=function(){var t=this._GridPos;return t.x+"_"+t.y},n.refrashDisplay=function(){var t=this.getPosKey();console.log("---- key : "+t);var e=i.posDataMap.get(t),o=this._wfcSpMap;if(e&&o)for(var n=Math.floor(this._size/i.tileSize),r=0,a=e.length;r<a;r++){var l=r%n+"_"+Math.floor((a-1-r)/n),c=o.get(l);if(c){c.node.active=!0,c.spriteFrame=i.wfcDataImg.imgs[e[r][0]],c.node.eulerAngles;var h=i.helpV3;s.set(h,0,0,-90*e[r][1]),c.node.setRotationFromEuler(h)}}},n.calcaHornknown=function(t){var e=[];if(!i.horn||i.horn.length<1)return e;var o,n,s=t,r=Math.floor(this._size/i.tileSize);s&&s.length>0?(o=r+2-2,n=1):(n=0,o=r-1),e.push({x:n,y:n,tiles:i.horn}),e.push({x:o,y:n,tiles:i.horn}),e.push({x:o,y:o,tiles:i.horn}),e.push({x:n,y:o,tiles:i.horn});var a=r-2;if(a<1)return e;for(var l=0;l<a;l++)i.top&&e.push({x:n+1+l,y:n,tiles:i.top}),i.right&&e.push({x:o,y:n+1+l,tiles:i.right}),i.bottom&&e.push({x:n+1+l,y:o,tiles:i.bottom}),i.left&&e.push({x:n,y:n+1+l,tiles:i.left});return e},n.calcaknown=function(t){var e=this;if(!(t&&t.length>0))return null;var o=Math.floor(this._size/i.tileSize),n=o+2,s=[];return null==t||t.forEach((function(t,r){var a,l,c=0,h=0,p=e.getGridPosition(),f=[],u=i.posDataMap;switch(t){case 0:if(h++,a=p.x+c+"_"+(p.y+h),l=u.get(a))for(var _=o-1,g=0;g<o;g++){var v=l[_*o+g];f.push({x:g+1,y:0,tiles:[[v[0],v[1]]]})}break;case 1:if(c++,a=p.x+c+"_"+(p.y+h),l=u.get(a))for(var d=n-1,w=0;w<o;w++){var y=l[w*o+0];f.push({x:d,y:w+1,tiles:[[y[0],y[1]]]})}break;case 2:if(h--,a=p.x+c+"_"+(p.y+h),l=u.get(a))for(var M=n-1,P=0;P<o;P++){var D=l[0*o+P];f.push({x:P+1,y:M,tiles:[[D[0],D[1]]]})}break;case 3:if(c--,a=p.x+c+"_"+(p.y+h),l=u.get(a))for(var m=o-1,S=0;S<o;S++){var x=l[S*o+m];f.push({x:0,y:S+1,tiles:[[x[0],x[1]]]})}}s=s.concat(f)})),s},n.cutData=function(t,e){var o=t.concat();t.length=0,o.forEach((function(o,i){var n=i%e,s=Math.floor(i/e);0<n&&n<e-1&&0<s&&s<e-1&&t.push(o)}))},o(i,[{key:"wfc",get:function(){return!this._wfc&&i.wfcDataImg&&(this._wfc=i.getWFC()),this._wfc}},{key:"size",get:function(){return this._size},set:function(t){this._size=t}},{key:"state",get:function(){var t=this.getPosKey();return i.posDataMap.has(t)?v.complete:i.collapseingMap.has(t)?v.collapseing:v.none}}]),i}(p),_.helpV3=new s,_._poolArr=[],_.IN_POOL_TAG="__inPoolTag__",_.posDataMap=new Map,_.collapseingMap=new Map,_._wfcPool=[],_.ON_COLLAPSED="ON_COLLAPSED",_.tileSize=50,_.eventer=new f,u=g))||u);i._RF.pop()}}}));

System.register("chunks:///_virtual/eventer.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,n,r;return{setters:[function(e){t=e.createForOfIteratorHelperLoose},function(e){n=e.cclegacy,r=e._decorator}],execute:function(){n._RF.push({},"64082O/4ddDQqQMzjCRQqOg","eventer",void 0);r.ccclass,r.property,e("Eventer",function(){function e(){this.events={}}var n=e.prototype;return n.On=function(e,n,r){var s=this.events[e],i=null;if(s)for(var o,c=t(s);!(o=c()).done;){var u=o.value;if(u.func==n){i=u;break}}else s=this.events[e]=[];i?-1==i.thisArgs.lastIndexOf(r)&&i.thisArgs.push(r):s.push({func:n,thisArgs:[r]})},n.Emit=function(e){var n=this.events[e];if(n&&!(n.length<1)){for(var r=n.concat(),s=arguments.length,i=new Array(s>1?s-1:0),o=1;o<s;o++)i[o-1]=arguments[o];for(var c,u=t(r);!(c=u()).done;)for(var v,l=c.value,a=t(l.thisArgs);!(v=a()).done;){var f=v.value;l.func.apply(f,i)}r.length=0}},n.RemoveListener=function(e,t,n){var r=this.events[e];if(r)for(var s=0,i=r.length;s<i;++s)if(t==r[s].func){var o=r[s].thisArgs.lastIndexOf(n);if(-1!=o){r[s].thisArgs.splice(o,1),r[s].thisArgs.length<1&&r.splice(s,1),r.length<1&&delete this.events[e];break}}},n.RemoveListenerAll=function(){this.events={}},n.listenerCount=function(e){return this.events[e]?this.events[e].length:0},e}());n._RF.pop()}}}));

System.register("chunks:///_virtual/mapResHandle.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./tileMap.ts"],(function(e){"use strict";var n,t,o,r,s;return{setters:[function(e){n=e.inheritsLoose},function(e){t=e.cclegacy,o=e._decorator,r=e.Component},function(e){s=e.TileMap}],execute:function(){var a;t._RF.push({},"71a77W7SLxGK4u9o7pMNJKV","mapResHandle",void 0);var l=o.ccclass;o.property,e("MapResHandle",l("MapResHandle")(a=function(e){function t(){for(var n,t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))||this).mapRes="",n}return n(t,e),t.prototype.onCellBtnClick=function(e,n){if(n){var t=JSON.parse(n);console.log("resName : "+this.mapRes);var o=this.node.scene.getComponentInChildren(s);null==o||o.clear(),null==o||o.setRes(t)}},t}(r))||a);t._RF.pop()}}}));

System.register("chunks:///_virtual/downList.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./mapResHandle.ts"],(function(t){"use strict";var n,e,i,o,r,a,s,c,l,p,u,d,h,f;return{setters:[function(t){n=t.applyDecoratedDescriptor,e=t.inheritsLoose,i=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,s=t.Node,c=t.Button,l=t.instantiate,p=t.Vec3,u=t.Label,d=t.EventHandler,h=t.Component},function(t){f=t.MapResHandle}],execute:function(){var v,y,m,g,w,b,C;r._RF.push({},"b580fX1n4VCjJzJIgCLZeqh","downList",void 0);var L=a.ccclass,D=a.property;t("DownList",(v=L("DownList"),y=D({type:s}),m=D({type:c}),v((b=n((w=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return(n=t.call.apply(t,[this].concat(r))||this).inited=!1,n.showSV=!1,i(n,"content",b,o(n)),i(n,"btn",C,o(n)),n}e(n,t);var r=n.prototype;return r.tryToInit=function(){var t,e=this;if(!this.inited&&null!=n.dataArr){this.inited=!0;var i=null===(t=this.content)||void 0===t?void 0:t.getChildByName("template");n.dataArr.forEach((function(t,n){var o,r=l(i);null===(o=e.content)||void 0===o||o.addChild(r),r.active=!0;var a=r.position;p.set(a,a.x,20*-n,0),r.position=a,r.getComponent(u).string=t.resName;var s=r.addComponent(c);r.addComponent(f).mapRes=t.resName;var h=new d;h.component="MapResHandle",h.handler="onCellBtnClick",h.target=r,h.customEventData=JSON.stringify(t),s.clickEvents.push(h)}))}},r.update=function(){this.tryToInit()},r.onBtnClick=function(){this.inited&&(this.showSV=!this.showSV,this.content&&this.content.parent&&this.content.parent.parent&&(this.content.parent.parent.active=this.showSV))},n}(h)).prototype,"content",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=n(w.prototype,"btn",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=w))||g));r._RF.pop()}}}));

System.register("chunks:///_virtual/tileMap.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./wfcLoader.ts","./appMain.ts","./grid.ts"],(function(e){"use strict";var t,r,n,i,a,o,s,c,h,p,u,l,d,f,g,v,_;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.createClass,i=e.asyncToGenerator},function(e){a=e.cclegacy,o=e._decorator,s=e.Vec2,c=e.Rect,h=e.Director,p=e.Canvas,u=e.UITransform,l=e.Layers,d=e.Component},function(e){f=e.WfcLoader},function(e){g=e.AppMain},function(e){v=e.Grid,_=e.GridState}],execute:function(){var y,w,m,M;a._RF.push({},"d8fa778xQNEXrrJY2EvI4m1","tileMap",void 0);var b=o.ccclass,x=o.property;e("TileMap",b("TileMap")((M=m=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this)._gridSize=1e3,t.grids=[],t._canvas=null,t._gridMap=new Map,t._canRun=!1,t._OffsetList=[],t}r(t,e);var a=t.prototype;return a.start=function(){var e=h.instance.getScene();this._canvas=null==e?void 0:e.getComponentInChildren(p)},a.update=function(e){this._canRun&&this.ckBorderOver()},a.clear=function(){this._canRun=!1,this._gridMap.forEach((function(e){null==e||e.hide(),e&&e.node.parent&&e.node.parent.removeChild(e.node),v.poolDelete(e)})),this._gridMap.clear(),v.clear()},a.setRes=function(){var e=i(regeneratorRuntime.mark((function e(t){var r,n,i,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._canRun){e.next=2;break}return e.abrupt("return");case 2:return n=(r=t).resName,i=g.CDNPath+"/res/samples/"+n+"/",e.next=7,f.getWFC(i);case 7:a=e.sent,this._gridSize=1e3,v.tileSize=50,v.wfcDataImg=a,v.horn=r.horn,v.top=r.top,v.right=r.right,v.bottom=r.bottom,v.left=r.left,this._OffsetList.push(new s(0,1)),this._OffsetList.push(new s(1,0)),this._OffsetList.push(new s(0,-1)),this._OffsetList.push(new s(-1,0)),this._canRun=!0;case 21:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),a.ckBorderOver=function(){var e,r=t.helpRect,n=this.node.position,i=null===(e=this._canvas)||void 0===e?void 0:e.node.getComponent(u),a=.5*i.width,o=.5*i.height;r.set(-(n.x+a),-(n.y+o),i.width,i.height);var c=.5;r.width+=a*c,r.height+=o*c,r.x-=a*c,r.y-=o*c;var h=Math.floor(r.x/this._gridSize),p=Math.floor((r.x+r.width)/this._gridSize),d=Math.floor(r.y/this._gridSize),f=Math.floor((r.y+r.height)/this._gridSize),g=t.helpV2;g.x=p-h+1,g.y=f-d+1;var _=new Map,y=new Map;this._gridMap.forEach((function(e,t){y.set(t,!0)}));for(var w=0;w<g.x;w++)for(var m=0;m<g.y;m++){var M=w+h+"_"+(m+d);this._gridMap.has(M)?y.delete(M):_.set(M,!0)}for(var b=y.keys();;){var x=b.next();if(x.done)break;var k=this._gridMap.get(x.value);null==k||k.hide(),k&&k.node.parent&&k.node.parent.removeChild(k.node),v.poolDelete(k),this._gridMap.delete(x.value)}for(b=_.keys();;){var S=b.next();if(S.done)break;var C=v.poolNew();this.node.addChild(C.node),C.size=this._gridSize,C.node.layer=l.Enum.UI_2D;var L=S.value.split("_");C.setGridPosition(new s(Number(L[0]),Number(L[1]))),this._gridMap.set(S.value,C)}_.size>0&&this.showGridpass()},a.showGridpass=function(){var e=this;this._gridMap.forEach(function(){var t=i(regeneratorRuntime.mark((function t(r){var n,i,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=null,i=r.getPosKey(),r.hasData()){t.next=15;break}n=[],a=[];case 5:if(e.ckNeighbors(r,a,n),!(a.length<1)){t.next=9;break}return t.abrupt("break",15);case 9:return t.next=11,e.toWaitNeighbor(a);case 11:if(i==r.getPosKey()){t.next=13;break}return t.abrupt("break",15);case 13:t.next=5;break;case 15:r.show(n);case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},a.ckNeighbors=function(e,t,r){t.length=0,r.length=0;for(var n=e.getGridPosition(),i=0;i<4;i++){var a=this._OffsetList[i],o=n.x+a.x+"_"+(n.y+a.y),s=this._gridMap.get(o);s&&(s.state==_.complete&&r.push(i),s.state==_.collapseing&&t.push(o))}},a.toWaitNeighbor=function(e){var t,r=new Promise((function(e){t=e})),n={};e.forEach((function(e){n[e]=!0}));var i={onCollapsed:function(e){delete n[e],Object.keys(n).length<1&&(v.eventer.RemoveListener(v.ON_COLLAPSED,i.onCollapsed,i),t())}};return v.eventer.On(v.ON_COLLAPSED,i.onCollapsed,i),r},n(t,[{key:"gridSize",get:function(){return this._gridSize},set:function(e){this._gridSize=e}}]),t}(d),m.helpV2=new s,m.helpRect=new c,t((w=M).prototype,"gridSize",[x],Object.getOwnPropertyDescriptor(w.prototype,"gridSize"),w.prototype),y=w))||y);a._RF.pop()}}}));

System.register("chunks:///_virtual/appMain.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./wfcLoader.ts","./downList.ts","./tileMap.ts"],(function(n){"use strict";var t,e,r,o,a,i,s,c,u,p;return{setters:[function(n){t=n.inheritsLoose,e=n.asyncToGenerator},function(n){r=n.cclegacy,o=n._decorator,a=n.Component,i=n.macro,s=n.dynamicAtlasManager},function(n){c=n.WfcLoader},function(n){u=n.DownList},function(n){p=n.TileMap}],execute:function(){var f,l,h;r._RF.push({},"ea491zJoLtLS5qTrFT7zU2L","appMain",void 0);var d=o.ccclass,g=(o.property,n("AppMain",d("AppMain")((h=l=function(n){function r(){return n.apply(this,arguments)||this}return t(r,n),r.prototype.start=function(){var n=e(regeneratorRuntime.mark((function n(){var t,e,o,a,f;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i.CLEANUP_IMAGE_CACHE=!1,s.enabled=!0,t=r.CDNPath+"res/configs/",e=t+"endlessMap.cfg.json",n.next=6,c.xhrLoad(e,"json");case 6:if(o=n.sent,(a=o.response)&&!(a.length<1)){n.next=10;break}return n.abrupt("return");case 10:u.dataArr=a,null==(f=this.node.scene.getComponentInChildren(p))||f.setRes(a[0]);case 13:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}(),r}(a),l.CDNPath="https://anseyuyin.github.io/wfc2D/",f=h))||f));window&&window.location&&-1==window.location.hostname.indexOf("github")&&(g.CDNPath="http://192.168.50.134:5500/"),r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./wfcLoader.ts","./mapResHandle.ts","./downList.ts","./appMain.ts","./eventer.ts","./grid.ts","./tileMap.ts","./touchMove.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});