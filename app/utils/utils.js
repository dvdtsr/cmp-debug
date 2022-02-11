
export function createEl(model) {

  /*
  var model = {
    element: 'div',
    target: target,
    attributes: {
      attr: val
    },
    content: content
  }
  */

  var el = document.createElement(model.element);
  for(var attr in model.attributes) {
    el.setAttribute(attr, model.attributes[attr]);
  }
  el.innerHTML = model.content ? model.content : '';
  model.target ? model.target.appendChild(el) : false;
  return el;
}

export function createInfoBlock(obj, target) {
  for(var key in obj) {
    var wrapper = createEl({
      element: 'div',
      target: target,
      attributes: {
        class: 'info-block flex'
      }
    })
    createEl({
      element: 'span',
      target: wrapper,
      attributes: {
        class: 'info-line-key info-line-key-' + key
      },
      content: key
    })
    createEl({
      element: 'span',
      target: wrapper,
      attributes: {
        class: 'info-line-value info-line-value-' + key
      },
      content: obj[key] ? obj[key] : 'undefined'
    })
  }
}



export function expandConsole(win) {
  top.window.testFunc = 'tt';
  win.classList.toggle('ddo-show-121216');
  var expandButton = win.contentDocument.getElementById('expand_button');
  if(!win.classList.value.match(/\bddo-show-121216\b/)) {
    win.style.transform = 'translateX(calc(-100% + 33px))';
    expandButton.classList.toggle('expanded');
    return;
  }
  win.style.transform = 'translateX(0%)';
  expandButton.classList.toggle('expanded');
  return;
}

export function openTCFDecoder(consentString) {
  var form = createEl({
    element: 'form',
    target: document.body,
    attributes: {
      target: '_blank',
      method: 'post',
      action: 'https://www.consentstringdecoder.com/parse'
    }
  });
  var input = createEl({
    element: 'input',
    target: form,
    attributes: {
      type: 'text',
      value: consentString,
      name: 'tcfv2'
    }
  })
  form.submit();
  form.parentNode.removeChild(form);
}
