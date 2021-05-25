
export function createEl(nodeType, target, attributes, content) {
  var el = document.createElement(nodeType);
  for(var attr in attributes) {
    el.setAttribute(attr, attributes[attr]);
  }
  target.appendChild(el);
  content ? el.innerHTML = content : false;
  return el;
}
