/* this file used for jest testing configuration */
import $ from 'jquery';
global.$ = global.jQuery = $;

import isVisible from 'is-visible';
global.isVisible = isVisible;

global.simulateEvent = (element, eventType) => {
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent(eventType, false, true);
    element.dispatchEvent(evt);
}