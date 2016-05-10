Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var CropManager=function(){function CropManager(){_classCallCheck(this,CropManager);}_createClass(CropManager,[{key:'imageCrop',value:function imageCrop(
imageParam){var width=arguments.length<=1||arguments[1]===undefined?0:arguments[1];var height=arguments.length<=2||arguments[2]===undefined?0:arguments[2];
var image=imageParam;

if(!image){
return null;}


if(!image.match(new RegExp('^//img([1-3])?.mapado.net/'))){
var host=this._getHost(image);
image=host+image;}


if(width>0){
var extension=this._getExt(image);
if(extension.length>4){
extension=null;}


image+='_thumbs/'+parseInt(width,10);
if(height>0){
image+='-'+parseInt(height,10);}


if(extension){
image+='.'+extension;}}



return image;}},{key:'_getHost',value:function _getHost(


image){
var shard='';
var matches=new RegExp('^[0-9]{4}/[0-9]{1,2}/([0-9]{1,2})').exec(image);
if(matches){
shard=parseInt(matches[1]%2,10);
shard=shard>0?shard:''; // remove "0"
}
return '//img'+shard+'.mapado.net/';}},{key:'_getExt',value:function _getExt(


path){
var str=path;
var dotP=str.lastIndexOf('.')+1;

if(dotP&&dotP!==str.length){
return str.substr(dotP);}


return '';}}]);return CropManager;}();exports.default=



new CropManager();