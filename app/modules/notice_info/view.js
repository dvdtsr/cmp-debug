
import { createEl } from '../../utils/utils.js';

export function writeNoticeInfo(obj, target) {
  ['notice_id', 'apiKey'].forEach((info) => {
    var wrapper = createEl({
      element: 'div',
      target: target,
      attributes: {
        class: 'info-block'
      }
    })
    createEl({
      element: 'span',
      target: wrapper,
      attributes: {
        class: 'info-line-key info-line-key-' + info
      },
      content: info
    })
    createEl({
      element: 'span',
      target: wrapper,
      attributes: {
        class: 'info-line-value info-line-value-' + info
      },
      content: notice_id
    })
  })
};
