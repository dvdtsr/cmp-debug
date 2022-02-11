import {
  createEl,
  createInfoBlock,
  expandConsole,
  openTCFDecoder
} from './utils/utils.js';
import { style } from './style.js';

import { template } from './modules/template.js';

import { writeNoticeInfo } from './modules/notice_info/view.js';

import { writeUserStatus } from './modules/user_status/view.js';



window.ddoReady = function(_win) {

  const _doc = _win.contentDocument;

// Inject style in iframe
  createEl({
    element: 'style',
    target: _doc.head,
    attributes: {
      type: 'text/css'
    },
    content: style.replace(/(\r\n|\n|\r)/gm, '').replace(/\s{2,}/gm, ' ')
  })

  // ALL IN THERE
  _doc.body.innerHTML = template;



  createInfoBlock(
    {
      'apiKey': Didomi.getConfig().app.apiKey,
      'notice_id': didomiRemoteConfig.notices[0].notice_id
    },
    _doc.querySelector('#notice-info .area')
  )

  createInfoBlock(
    {
      'consent_string': Didomi.getUserStatus().consent_string,
      'addtl': Didomi.getUserStatus().addtl_consent
    },
    _doc.querySelector('#user-status .area')
  )



  // Iframe events listeners
  _doc.addEventListener('click', function(e) {

    /*Expand*/
    if(e.target.getAttribute('id') == 'expand_button') {
      expandConsole(_win)
    }

    /*Open TCF Decoder*/
    if(e.target.getAttribute('class') && e.target.classList.contains('info-line-key-consent_string')) {
      console.log('clicked');
      var cs = e.target.parentNode.querySelector('.info-line-value-consent_string').innerHTML;
      if(cs) {
        openTCFDecoder(cs)
      }
    }
  })

}

// init : create Iframe and execute "ddoReady" onload

function injectIfDDO() {
  createEl({
    element: 'iframe',
    target: document.body,
    attributes: {
      id: 'ddo-iframe-121216',
      style: 'transform:translateX(calc(-100% + 33px));display:block;width:30vw;min-width:400px;position:fixed;top:0;left:0;border:none;height:100vh;z-index:2147483647;transition-duration:0.3s;',
      onload: 'ddoReady(this)'
    }
  })
}

(function() {
  var x = 0;
  var intervalID = setInterval(function () {
    if(typeof Didomi || ++x === 10) {
      if(!document.getElementById('ddo-iframe-121216')){
        injectIfDDO();
        window.clearInterval(intervalID);
      }
    }
  }, 200);
})();
