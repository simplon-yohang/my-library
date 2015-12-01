function byId (elementId){
  return document.getElementById(elementId);
}
function byClass (ClassName,atIndex) {
  var elements = document.getElementsByClassName(elementClass);
  var tElements =Array.prototype.slice.call(elements);
  return atIndex != null ? tElements[atIndex] : tElements; 
}
