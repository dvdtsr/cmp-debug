import { createEl } from './utils/createEl.js';

import { mainStyle } from './utils/style.js';




window.ddoReady = function(_doc) {

  _doc = _doc.contentDocument;

  console.log(_doc);

  createEl('style',
    _doc.head,
    {
      type: 'text/css'
    },
    mainStyle
  );

  _doc = _doc.contentDocument;
  // ALL IN THERE
}

// init : create Iframe
if(!document.getElementById('ddo-iframe')) {
  createEl('iframe',
    document.body,
    {
      id: 'ddo-iframe',
      style: 'display:block;width:30vw;min-width:400px;position:fixed;top:0;left:0;border:none;height:100vh;',
      onload: 'ddoReady(this)'
    }
  )
}
