var a0_0x1f202f=a0_0x1654;(function(_0x3c57ae,_0x378fed){var _0x8f1d87=a0_0x1654,_0x2c7cdb=_0x3c57ae();while(!![]){try{var _0x1ce021=-parseInt(_0x8f1d87(0xac))/0x1*(-parseInt(_0x8f1d87(0xfa))/0x2)+parseInt(_0x8f1d87(0x11c))/0x3+parseInt(_0x8f1d87(0xdb))/0x4+-parseInt(_0x8f1d87(0xa0))/0x5*(-parseInt(_0x8f1d87(0xfe))/0x6)+parseInt(_0x8f1d87(0xaa))/0x7*(parseInt(_0x8f1d87(0x137))/0x8)+-parseInt(_0x8f1d87(0x9c))/0x9*(-parseInt(_0x8f1d87(0xe4))/0xa)+-parseInt(_0x8f1d87(0xbd))/0xb;if(_0x1ce021===_0x378fed)break;else _0x2c7cdb['push'](_0x2c7cdb['shift']());}catch(_0x1ef35f){_0x2c7cdb['push'](_0x2c7cdb['shift']());}}}(a0_0x2a65,0x97bc4),document[a0_0x1f202f(0xed)](a0_0x1f202f(0x100),function(){var _0x5aa829=a0_0x1f202f;initDatePicker(),selectFirstTab(),fetchAndisplayClassBooked(),updateHeaderDate(document['getElementById'](_0x5aa829(0x143))[_0x5aa829(0x115)]);var _0xcec460=document[_0x5aa829(0x118)](_0x5aa829(0x8f));_0xcec460[_0x5aa829(0xed)](_0x5aa829(0xc7),function(){fetchAndisplayClassBooked();});var _0xcec460=document[_0x5aa829(0x118)]('tab-book-class');_0xcec460[_0x5aa829(0xed)]('click',function(){fetchAndDisplayClassesAvailable();});const _0x126440=document[_0x5aa829(0x118)]('datePicker'),_0x13f0f8=document['getElementById']('prevDay'),_0x44f851=document[_0x5aa829(0x118)]('nextDay');_0x13f0f8[_0x5aa829(0xed)](_0x5aa829(0xc7),function(){var _0xfbd16d=_0x5aa829;_0x2b7d2d(-0x1);var _0x52414e=document[_0xfbd16d(0x118)](_0xfbd16d(0x143))[_0xfbd16d(0x115)];saveDatePickerSessionStorage(_0x52414e),updateHeaderDate(_0x52414e),fetchAndDisplayClassesAvailable();}),_0x44f851[_0x5aa829(0xed)](_0x5aa829(0xc7),function(){var _0x374b1f=_0x5aa829;_0x2b7d2d(0x1);var _0x3c7a60=document[_0x374b1f(0x118)](_0x374b1f(0x143))[_0x374b1f(0x115)];saveDatePickerSessionStorage(_0x3c7a60),updateHeaderDate(_0x3c7a60),fetchAndDisplayClassesAvailable();}),_0x126440['addEventListener'](_0x5aa829(0x106),function(){var _0x2636c7=_0x5aa829,_0x30912c=document[_0x2636c7(0x118)]('datePicker')['value'];saveDatePickerSessionStorage(_0x30912c),updateHeaderDate(_0x30912c),fetchAndDisplayClassesAvailable();});function _0x2b7d2d(_0x48ea5c){var _0x19ffed=_0x5aa829;const _0x445b32=new Date(_0x126440['value']+_0x19ffed(0x126));_0x445b32[_0x19ffed(0xa3)](_0x445b32[_0x19ffed(0x8c)]()+_0x48ea5c),_0x126440['value']=formatDate(_0x445b32);}var _0x5b0486=document[_0x5aa829(0x10f)](_0x5aa829(0x131));_0x5b0486[_0x5aa829(0xda)](function(_0x42255c){var _0x35968a=_0x5aa829;_0x42255c[_0x35968a(0xed)](_0x35968a(0xc7),function(){var _0x208903=_0x35968a;_0x5b0486[_0x208903(0xda)](function(_0x2afb68){var _0x1fa847=_0x208903;_0x2afb68[_0x1fa847(0xa9)][_0x1fa847(0x135)](_0x1fa847(0xb7));}),this['classList']['add'](_0x208903(0xb7)),fetchAndDisplayClassesAvailable();});});var _0x3a8e29=document[_0x5aa829(0x10f)](_0x5aa829(0x85));_0x3a8e29[_0x5aa829(0xda)](function(_0x1b315f){var _0x1d4500=_0x5aa829;_0x1b315f[_0x1d4500(0xed)]('click',function(){var _0x21aa3a=_0x1d4500;this[_0x21aa3a(0xa9)][_0x21aa3a(0xc9)]('selected-option'),fetchAndDisplayClassesAvailable();});}),document['getElementById'](_0x5aa829(0xae))[_0x5aa829(0xed)](_0x5aa829(0xc7),function(_0x123c8a){var _0x41f926=_0x5aa829;if(_0x123c8a['target']&&_0x123c8a[_0x41f926(0x109)][_0x41f926(0xbc)](_0x41f926(0xe6))){var _0x377367=_0x123c8a['target']['getAttribute']('data-member-booking-id');cancelBooking_resolve(_0x377367)['then'](()=>{fetchAndDisplayClassesAvailable();})[_0x41f926(0xc5)](_0x4fec32=>{var _0x36446a=_0x41f926;console['error'](_0x36446a(0xec),_0x4fec32);});}else{if(_0x123c8a[_0x41f926(0x109)]&&_0x123c8a['target'][_0x41f926(0xbc)](_0x41f926(0xb4)))bookClass(_0x123c8a[_0x41f926(0x109)]),fetchAndDisplayClassesAvailable();else{if(_0x123c8a[_0x41f926(0x109)]&&_0x123c8a[_0x41f926(0x109)][_0x41f926(0xf4)](_0x41f926(0x88))){var _0x30a803=_0x123c8a[_0x41f926(0x109)]['closest']('.booking-item');if(_0x123c8a[_0x41f926(0x109)]['closest']('.attendees')){_0x30a803[_0x41f926(0x10f)]('.attendee-photo')[_0x41f926(0xda)](function(_0x31f09e){var _0x73a310=_0x41f926;_0x31f09e[_0x73a310(0xa9)][_0x73a310(0x135)]('enlarged');});return;}var _0x20926e=_0x30a803[_0x41f926(0xcd)]('.book-button')||_0x30a803[_0x41f926(0xcd)](_0x41f926(0xe6))||_0x30a803[_0x41f926(0xcd)](_0x41f926(0x11d));if(_0x20926e){var _0x1b41f6=_0x20926e[_0x41f926(0xd6)]('data-class-schedule-id'),_0x31dc26=_0x20926e[_0x41f926(0xd6)](_0x41f926(0xc2)),_0xf170d0=_0x30a803[_0x41f926(0xcd)](_0x41f926(0x119))[_0x41f926(0x108)],_0x529b46=_0x30a803[_0x41f926(0xcd)](_0x41f926(0x105))[_0x41f926(0x108)],_0x24b16d=document[_0x41f926(0x9d)](_0x41f926(0x146));_0x24b16d[_0x41f926(0x12c)](_0x41f926(0x8e),_0x1b41f6),_0x24b16d[_0x41f926(0x12c)]('data-class-date',_0x31dc26),_0x24b16d[_0x41f926(0x12c)](_0x41f926(0x11e),_0xf170d0),_0x24b16d[_0x41f926(0x12c)]('data-class-name',_0x529b46),checkAttendees(_0x24b16d,_0x30a803);}else console[_0x41f926(0xab)](_0x41f926(0xc8));}}}}),document[_0x5aa829(0x118)]('booking-info')['addEventListener'](_0x5aa829(0xc7),function(_0x19dac7){var _0x3603b6=_0x5aa829;if(_0x19dac7[_0x3603b6(0x109)]&&_0x19dac7[_0x3603b6(0x109)][_0x3603b6(0xbc)](_0x3603b6(0xe6))){var _0x339401=_0x19dac7[_0x3603b6(0x109)][_0x3603b6(0xd6)]('data-member-booking-id');cancelBooking_resolve(_0x339401)[_0x3603b6(0xf1)](()=>{fetchAndisplayClassBooked();})[_0x3603b6(0xc5)](_0x363aea=>{var _0x105413=_0x3603b6;console['error'](_0x105413(0xec),_0x363aea);});}else{if(_0x19dac7['target']&&_0x19dac7[_0x3603b6(0x109)][_0x3603b6(0xbc)](_0x3603b6(0xb6))){var _0x1ef474=_0x19dac7[_0x3603b6(0x109)][_0x3603b6(0xd6)]('classScheduleId'),_0x1a99d5=_0x19dac7[_0x3603b6(0x109)]['getAttribute']('classDateTime');console['log'](_0x3603b6(0x12e)+_0x1ef474+'\x20'+_0x1a99d5),checkInParticipant(_0x1ef474,_0x1a99d5,button);}}});}));function initDatePicker(){var _0x4481f5=a0_0x1f202f;const _0x506ebe=document[_0x4481f5(0x118)](_0x4481f5(0x143));let _0x47a1d6=sessionStorage[_0x4481f5(0x101)](_0x4481f5(0x103)),_0xbab82a=sessionStorage['getItem'](_0x4481f5(0xfb));_0x47a1d6&&_0xbab82a&&isWithinValidityPeriod(_0xbab82a,0.5)?_0x506ebe[_0x4481f5(0x115)]=_0x47a1d6:(currentDate=getLocalDate(),_0x506ebe['value']=currentDate,saveDatePickerSessionStorage(currentDate));}function selectFirstTab(){var _0x3d7bb5=a0_0x1f202f,_0x43cbf3=document[_0x3d7bb5(0x118)](_0x3d7bb5(0x8f)),_0x5727ff=document[_0x3d7bb5(0x118)]('tab-book-class');_0x43cbf3[_0x3d7bb5(0xa9)][_0x3d7bb5(0x144)](_0x3d7bb5(0x13f)),_0x43cbf3[_0x3d7bb5(0x12c)]('aria-selected','true'),_0x5727ff[_0x3d7bb5(0xa9)][_0x3d7bb5(0x135)](_0x3d7bb5(0x13f)),_0x5727ff[_0x3d7bb5(0x12c)]('aria-selected','false');}function isWithinValidityPeriod(_0x179e22,_0xf8971){var _0x55ee20=a0_0x1f202f;const _0x542f0d=new Date()[_0x55ee20(0x13d)](),_0x453bff=(_0x542f0d-_0x179e22)/(0x3e8*0x3c*0x3c);return _0x453bff<=_0xf8971;}function formatDate(_0x1afdc3){var _0x329461=a0_0x1f202f;let _0x1b4fa1=new Date(_0x1afdc3),_0x355acb=''+(_0x1b4fa1[_0x329461(0x10c)]()+0x1),_0x37838d=''+_0x1b4fa1[_0x329461(0x8c)](),_0x4b761f=_0x1b4fa1[_0x329461(0xa4)]();if(_0x355acb[_0x329461(0x145)]<0x2)_0x355acb='0'+_0x355acb;if(_0x37838d[_0x329461(0x145)]<0x2)_0x37838d='0'+_0x37838d;return[_0x4b761f,_0x355acb,_0x37838d]['join']('-');}function updateHeaderDate(_0x593d57){var _0x5e1d99=a0_0x1f202f;const _0x2d8aa7=document[_0x5e1d99(0x118)](_0x5e1d99(0x8d));if(!_0x2d8aa7){console['error'](_0x5e1d99(0xe3));return;}const _0x1c8303=new Date(_0x593d57),_0x3c2626=_0x1c8303['getDate'](),_0x1edb4b=_0x1c8303[_0x5e1d99(0x111)](_0x5e1d99(0x13e),{'month':_0x5e1d99(0x83)}),_0x14e115=_0x1c8303[_0x5e1d99(0x111)]('en-AU',{'weekday':_0x5e1d99(0x83)});function _0xf1b570(_0x1be6f3){if(_0x1be6f3>0x3&&_0x1be6f3<0x15)return'th';switch(_0x1be6f3%0xa){case 0x1:return'st';case 0x2:return'nd';case 0x3:return'rd';default:return'th';}}const _0x1ce7d1=_0x14e115+'\x20'+(_0x3c2626<0xa?'0':'')+_0x3c2626+_0xf1b570(_0x3c2626)+'\x20'+_0x1edb4b;_0x2d8aa7[_0x5e1d99(0x108)]=_0x1ce7d1;}function getLocalDate(){var _0x1cf122=a0_0x1f202f;const _0x5b8fa6=new Date(),_0x1e712c=_0x5b8fa6[_0x1cf122(0xff)]()*0xea60,_0xbacfc7=new Date(_0x5b8fa6-_0x1e712c)[_0x1cf122(0xbe)]()[_0x1cf122(0xbb)](0x0,0xa);return _0xbacfc7;}function saveDatePickerSessionStorage(_0x192b5a){var _0x5f0c2f=a0_0x1f202f;sessionStorage[_0x5f0c2f(0x129)](_0x5f0c2f(0x103),_0x192b5a),timestamp=new Date()[_0x5f0c2f(0x13d)](),sessionStorage[_0x5f0c2f(0x129)](_0x5f0c2f(0xfb),timestamp);}function bookClass(_0x4eaabc){var _0x211e6c=a0_0x1f202f,_0x191dad=_0x4eaabc['getAttribute'](_0x211e6c(0x8e)),_0x1d2420=_0x4eaabc[_0x211e6c(0xd6)]('data-class-date'),_0x30b968=_0x4eaabc[_0x211e6c(0xd6)](_0x211e6c(0xc1)),_0x5dfd8a=localStorage[_0x211e6c(0x101)]('userId'),_0x2cb2fc=localStorage[_0x211e6c(0x101)](_0x211e6c(0x133)),_0x206842=_0x211e6c(0x90),_0x12445d={'classScheduleId':_0x191dad,'classDateTime':_0x1d2420,'className':_0x30b968,'userId':_0x5dfd8a,'onBehalfBookingReference':'','onBehalfBookFor':''},_0x4b8375=new XMLHttpRequest();_0x4b8375['open'](_0x211e6c(0x82),_0x206842,!![]),_0x4b8375[_0x211e6c(0x8b)](_0x211e6c(0x13b),_0x211e6c(0xa7)),_0x4b8375[_0x211e6c(0x8b)](_0x211e6c(0xba),_0x211e6c(0xa7)),_0x4b8375[_0x211e6c(0x8b)](_0x211e6c(0x81),'Bearer\x20'+_0x2cb2fc),_0x4b8375['onload']=function(){var _0x5aa00c=_0x211e6c,_0x1fa899;try{_0x1fa899=JSON[_0x5aa00c(0x107)](_0x4b8375[_0x5aa00c(0xdc)]);}catch(_0x1311eb){_0x1fa899={'errors':{'message':'Unknown\x20error\x20occurred'}};}_0x4b8375[_0x5aa00c(0xcc)]>=0xc8&&_0x4b8375[_0x5aa00c(0xcc)]<0x12c&&_0x1fa899[_0x5aa00c(0x122)]===0xc8?fetchAndDisplayClassesAvailable():(console[_0x5aa00c(0x8a)](_0x5aa00c(0xf9)+_0x4b8375[_0x5aa00c(0xcc)]+_0x5aa00c(0x92)),alert(_0x1fa899['errors']['message']),errorAPICheckLogin(function(_0x11c64d){var _0x55f3ed=_0x5aa00c;!_0x11c64d&&console[_0x55f3ed(0xab)](_0x55f3ed(0xb2));}));},_0x4b8375[_0x211e6c(0xb3)]=function(){alert('Network\x20error\x20occurred\x20while\x20booking.'),errorAPICheckLogin(function(_0x3938ee){!_0x3938ee&&console['error']('User\x20is\x20not\x20logged\x20in,\x20redirecting\x20to\x20login\x20page.');});},_0x4b8375[_0x211e6c(0xeb)](JSON[_0x211e6c(0x113)](_0x12445d));}function displayErrorMessage(_0x389a82,_0x1345b9){var _0x3175e2=a0_0x1f202f;clearErrorMessage(_0x389a82);var _0x1cb83f=document[_0x3175e2(0x9d)](_0x3175e2(0xee));_0x1cb83f[_0x3175e2(0x11f)]=_0x3175e2(0x87),_0x1cb83f[_0x3175e2(0x108)]=_0x1345b9,_0x389a82[_0x3175e2(0x125)][_0x3175e2(0xc6)](_0x1cb83f,_0x389a82['nextSibling']);}function clearErrorMessage(_0x57fa12){var _0xbdc8c8=a0_0x1f202f,_0x554951=_0x57fa12[_0xbdc8c8(0x139)];_0x554951&&_0x554951['className']===_0xbdc8c8(0x87)&&_0x554951[_0xbdc8c8(0x135)]();}function a0_0x2a65(){var _0xbfa505=['Element\x20with\x20id\x20\x27date-header\x27\x20not\x20found!','16420ehAVxd','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22booking-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22class-name\x22>No\x20class\x20found</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','.cancel-button','errorAPICheckLogin\x20-\x20function\x20called','validateLogin\x20-\x20Validation\x20failed:','open','Other','send','EventListener\x20-\x20Cancellation\x20error:','addEventListener','div','\x22\x20classDateTime=\x22','.location-option.selected-option','then','appendChild','join','closest','href','style','cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20retry','validateLogin\x20-\x20Required\x20session\x20storage\x20items\x20are\x20missing','xhr.status:\x20','34cRqTAZ','timestampLastChanged','</div>','Booked','2730KcuWJA','getTimezoneOffset','DOMContentLoaded','getItem','Error\x20details:','selectedDate','Cancelled','.class-name','change','parse','textContent','target','bookedId','cancelBooking_resolve\x20-\x20Cancellation\x20failed','getMonth','fullName','.attendee-photo','querySelectorAll','cancelBooking_resolve\x20-\x20Network\x20error','toLocaleString','Confirmed','stringify','stopPropagation','value','memberBookingId','\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-date=\x22','getElementById','.time','.class-option.selected-option','localeCompare','1399944TLTTMr','.full-button','data-class-time','className','<p>','location','statusCode','innerHTML','totalBooked','parentNode','T00:00:00','classTime','checkAttendees\x20-\x20Error\x20while\x20checking\x20attendees:','setItem','classCapacity','\x22\x20alt=\x22Avatar\x22\x20class=\x22attendee-photo\x22>','setAttribute','\x20left</div>','before\x20calling\x20checkInParticipant:\x20','isArray','block','.location-option','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','access_token','none','remove','split','16gUTBcJ','trim','nextSibling','memberBookedStatus','Content-Type','replace','getTime','en-AU','w--current','sort','bookedDate','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22column-signin-cancel\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22action-button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22signin-button\x22\x20classScheduleId=\x22','datePicker','add','length','button','\x22>Cancel</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spotsleft\x22>','spots','Response\x20received:','success','\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-date=\x22','bearer','includes','Authorization','POST','long','portalUserId','.class-option','\x22>Cancel</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','error-message','.booking-item','Check\x20in\x20success','log','setRequestHeader','getDate','date-header','data-class-schedule-id','tab-existing-booking','https://crossfit168.clubfit.net.au/api/v1/booking/book-class-v2','userId','response.messageFields','https://crossfit168.clubfit.net.au/api/v1/booking/cancel/','Bearer\x20','<button\x20class=\x22book-button\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-schedule-id=\x22','errorAPICheckLogin\x20-\x20login\x20not\x20validated','errors','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22class-name\x22>','refresh_token','attendees','booking-info','3357gdTgkR','createElement','userType','All','10300HYqJXf','clubName','short','setDate','getFullYear','GET','.attendees','application/json','payload','classList','325661AytcVr','error','48966TaRKoC','No\x20locations\x20selected.','class-available','display','<h3\x20class=\x22name-class\x22>','parentElement','User\x20is\x20not\x20logged\x20in,\x20redirecting\x20to\x20login\x20page.','onerror','.book-button','https://admin.clubfit.net.au/api/v1/account/validate','.signin-button','selected-option','data-location','filter','Accept','slice','matches','30574291VNCrqB','toISOString','<button\x20class=\x22cancel-button\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-member-booking-id=\x22','https://crossfit168.clubfit.net.au/api/v1/booking/class-participants','data-class-name','data-class-date','enlarged','test','catch','insertBefore','click','No\x20book-button\x20or\x20cancel-button\x20found\x20in\x20booking-item.','toggle','Check-in\x20failed:','\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-name=\x22','status','querySelector','\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-schedule-id=\x22','https://crossfit168.clubfit.net.au/api/v1/booking/search-classes','https://crossfit168.clubfit.net.au/api/v1/booking/book-class-participant-checkin','<div\x20class=\x22attendee-item\x22><img\x20src=\x22','CrossFit','<button\x20class=\x22full-button\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-schedule-id=\x22','map','Error\x20fetching\x20information:','getAttribute','<div\x20class=\x22booked-class-columns\x22><div\x20class=\x22div-each-class\x22><div\x20class=\x22w-richtext\x22><p>No\x20class\x20available</p></div></div></div>','checkAttendees\x20-\x20Network\x20error\x20while\x20checking\x20attendees','gridColumn','forEach','1836428xolliO','responseText','onload','classScheduleId','2-digit','</p>','errorAPICheckLogin\x20-\x20login\x20validated','Error\x20while\x20cancelling\x20booking,\x20xhr.status:\x20'];a0_0x2a65=function(){return _0xbfa505;};return a0_0x2a65();}function showInlineAttendees(_0x583613,_0x4394ba){var _0x2dd00d=a0_0x1f202f,_0x2c92f4=_0x4394ba[_0x2dd00d(0xcd)](_0x2dd00d(0xa6));if(!_0x2c92f4)_0x2c92f4=document['createElement'](_0x2dd00d(0xee)),_0x2c92f4['className']=_0x2dd00d(0x9a),_0x4394ba[_0x2dd00d(0xf2)](_0x2c92f4),_0x2c92f4[_0x2dd00d(0xf6)][_0x2dd00d(0xd9)]='1\x20/\x20-1';else{_0x2c92f4[_0x2dd00d(0xf6)][_0x2dd00d(0xaf)]=_0x2c92f4['style']['display']===_0x2dd00d(0x130)?_0x2dd00d(0x134):'block';return;}var _0x2d9095='';Array[_0x2dd00d(0x12f)](_0x583613)&&_0x583613[_0x2dd00d(0x145)]>0x0?(_0x583613[_0x2dd00d(0x140)]((_0x17f4fd,_0x50b3fb)=>_0x17f4fd[_0x2dd00d(0x10d)][_0x2dd00d(0x11b)](_0x50b3fb[_0x2dd00d(0x10d)])),_0x583613[_0x2dd00d(0xda)](function(_0xd49b0f){var _0x4555c9=_0x2dd00d,_0x1bdce1=_0xd49b0f['fullName'][_0x4555c9(0x136)]('\x20')[0x0];_0x2d9095+=_0x4555c9(0xd1)+_0xd49b0f['memberPhotoLocation']+_0x4555c9(0x12b)+_0x1bdce1+_0x4555c9(0xfc);})):_0x2d9095+='<div>No\x20attendees</div>',_0x2c92f4[_0x2dd00d(0x123)]=_0x2d9095,_0x2c92f4[_0x2dd00d(0xf6)][_0x2dd00d(0xaf)]=_0x2dd00d(0x130),_0x2c92f4[_0x2dd00d(0x10f)](_0x2dd00d(0x10e))[_0x2dd00d(0xda)](function(_0x4d8256){var _0x17b0e3=_0x2dd00d;_0x4d8256['addEventListener'](_0x17b0e3(0xc7),function(_0xca3e70){var _0x17811c=_0x17b0e3;_0x4d8256[_0x17811c(0xa9)]['contains'](_0x17811c(0xc3))?_0x4d8256[_0x17811c(0xa9)]['remove']('enlarged'):(_0x2c92f4[_0x17811c(0x10f)](_0x17811c(0x10e))[_0x17811c(0xda)](function(_0x4c54b9){var _0x602b75=_0x17811c;_0x4c54b9[_0x602b75(0xa9)][_0x602b75(0x135)]('enlarged');}),_0x4d8256['classList'][_0x17811c(0x144)]('enlarged')),_0xca3e70[_0x17811c(0x114)]();});}),_0x2c92f4[_0x2dd00d(0xed)]('click',function(_0x7843af){var _0x28d3b6=_0x2dd00d;_0x2c92f4[_0x28d3b6(0x10f)]('.attendee-photo')['forEach'](function(_0x414a6c){var _0xd8a53=_0x28d3b6;_0x414a6c[_0xd8a53(0xa9)][_0xd8a53(0x135)](_0xd8a53(0xc3));}),_0x7843af[_0x28d3b6(0x114)]();}),document['addEventListener'](_0x2dd00d(0xc7),function(_0x2bab61){var _0x2e8d26=_0x2dd00d;!_0x4394ba['contains'](_0x2bab61[_0x2e8d26(0x109)])&&_0x2c92f4[_0x2e8d26(0x10f)](_0x2e8d26(0x10e))[_0x2e8d26(0xda)](function(_0x239e98){var _0x1b8a42=_0x2e8d26;_0x239e98[_0x1b8a42(0xa9)][_0x1b8a42(0x135)](_0x1b8a42(0xc3));});});}function checkAttendees(_0x4aed1a,_0x2fb1bd){var _0x4789a8=a0_0x1f202f,_0x25f166=_0x4aed1a[_0x4789a8(0xd6)](_0x4789a8(0x8e)),_0xa77e2c=_0x4aed1a[_0x4789a8(0xd6)]('data-class-date'),_0xe10b18=_0x4aed1a[_0x4789a8(0xd6)](_0x4789a8(0x11e)),_0x130ef7=_0x4789a8(0xc0),_0x27d32a={'classScheduleId':_0x25f166,'selectedDate':_0xa77e2c,'classTime':_0xe10b18},_0x239071=new XMLHttpRequest();_0x239071[_0x4789a8(0xe9)](_0x4789a8(0x82),_0x130ef7,!![]),_0x239071[_0x4789a8(0x8b)](_0x4789a8(0x13b),_0x4789a8(0xa7)),_0x239071[_0x4789a8(0x8b)](_0x4789a8(0xba),_0x4789a8(0xa7)),_0x239071[_0x4789a8(0x8b)]('Authorization',_0x4789a8(0x14c)),_0x239071[_0x4789a8(0xdd)]=function(){var _0x4fbc76=_0x4789a8;if(_0x239071[_0x4fbc76(0xcc)]>=0xc8&&_0x239071[_0x4fbc76(0xcc)]<0x12c){var _0x2bee63=JSON[_0x4fbc76(0x107)](_0x239071['responseText']),_0x39103d=_0x2bee63[_0x4fbc76(0xa8)];showInlineAttendees(_0x39103d,_0x2fb1bd);}else console[_0x4fbc76(0xab)](_0x4fbc76(0x128),_0x239071[_0x4fbc76(0xcc)]),errorAPICheckLogin();},_0x239071[_0x4789a8(0xb3)]=function(){var _0x34391b=_0x4789a8;console[_0x34391b(0xab)](_0x34391b(0xd8)),errorAPICheckLogin();},_0x239071[_0x4789a8(0xeb)](JSON[_0x4789a8(0x113)](_0x27d32a));}function cancelBooking_resolve(_0x446b54,_0x390e10=0x0){return new Promise((_0x13474b,_0x1da91c)=>{var _0x3ee03b=a0_0x1654,_0x136497=localStorage[_0x3ee03b(0x101)](_0x3ee03b(0x133)),_0x472f09=_0x3ee03b(0x93)+_0x446b54,_0x5d1fa0=new XMLHttpRequest();_0x5d1fa0[_0x3ee03b(0xe9)](_0x3ee03b(0x82),_0x472f09,!![]),_0x5d1fa0[_0x3ee03b(0x8b)](_0x3ee03b(0x13b),_0x3ee03b(0xa7)),_0x5d1fa0['setRequestHeader'](_0x3ee03b(0xba),_0x3ee03b(0xa7)),_0x5d1fa0[_0x3ee03b(0x8b)](_0x3ee03b(0x81),_0x3ee03b(0x94)+_0x136497),_0x5d1fa0[_0x3ee03b(0xdd)]=function(){var _0x1a1a2f=_0x3ee03b;const _0x1cb15d=JSON['parse'](_0x5d1fa0[_0x1a1a2f(0xdc)]);_0x5d1fa0[_0x1a1a2f(0xcc)]>=0xc8&&_0x5d1fa0[_0x1a1a2f(0xcc)]<0x12c?(_0x1cb15d['statusCode']!==0xc8&&console[_0x1a1a2f(0x8a)](_0x1a1a2f(0x149),_0x5d1fa0[_0x1a1a2f(0xdc)]),_0x13474b(_0x5d1fa0['responseText'])):(console['error'](_0x1a1a2f(0xe2),_0x5d1fa0['status']),console[_0x1a1a2f(0xab)](_0x1a1a2f(0x102),_0x5d1fa0[_0x1a1a2f(0xdc)]),_0x390e10<0x1?errorAPICheckLogin(function(_0x37691b){var _0x36909d=_0x1a1a2f;_0x37691b?cancelBooking_resolve(_0x446b54,_0x390e10+0x1)[_0x36909d(0xf1)](_0x13474b)[_0x36909d(0xc5)](_0x1da91c):_0x1da91c(new Error(_0x36909d(0xf7)));}):_0x1da91c(new Error(_0x1a1a2f(0x10b))));},_0x5d1fa0['onerror']=function(){var _0x4de8e7=_0x3ee03b;console['error']('cancelBooking_resolve\x20-\x20Network\x20error\x20while\x20cancelling\x20booking'),_0x390e10<0x1?errorAPICheckLogin(function(_0x2ba589){var _0x4f0cd8=a0_0x1654;_0x2ba589?cancelBooking_resolve(_0x446b54,_0x390e10+0x1)['then'](_0x13474b)[_0x4f0cd8(0xc5)](_0x1da91c):_0x1da91c(new Error('cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20network\x20error\x20and\x20retry'));}):_0x1da91c(new Error(_0x4de8e7(0x110)));},_0x5d1fa0['send']();});}function fetchAndDisplayClassesAvailable(){var _0x41d1ef=a0_0x1f202f,_0x261fdc=document[_0x41d1ef(0x10f)](_0x41d1ef(0xf0));if(_0x261fdc[_0x41d1ef(0x145)]===0x0){console[_0x41d1ef(0x8a)](_0x41d1ef(0xad));return;}var _0x599b9a=document['getElementById'](_0x41d1ef(0x143))[_0x41d1ef(0x115)],_0x1a6e5a=getLocalDate(),_0x2f11e4={'ALX':0x2,'CBD':0x1,'MVL':0x4},_0x5b1e1b=Array['from'](_0x261fdc)[_0x41d1ef(0xd4)](_0x39bfbd=>{var _0x237a91=_0x41d1ef,_0x5608b0=_0x39bfbd[_0x237a91(0xd6)](_0x237a91(0xb8)),_0x38cac7=_0x2f11e4[_0x5608b0];return _0x38cac7;}),_0x2f6967=localStorage['getItem'](_0x41d1ef(0x91)),_0x576a02={'UserId':_0x2f6967,'clubId':_0x5b1e1b[0x0],'selectedDate':_0x599b9a,'classType':0x0,'accountId':_0x5b1e1b[0x0]};if(_0x599b9a<_0x1a6e5a)displayClassAvailable([]);else{var _0x383917=_0x41d1ef(0xcf);makeApiRequest(_0x383917,'POST',_0x576a02,function(_0x5675e9){var _0x378895=_0x41d1ef;displayClassAvailable(_0x5675e9[_0x378895(0xa8)]);});}}function displayClassAvailable(_0x33becf){var _0x10d610=a0_0x1f202f,_0x15390c=document[_0x10d610(0x118)](_0x10d610(0xae));let _0x33c3e7=getSelectedClassOptions(),_0x453dd9='',_0x5304c3=document[_0x10d610(0x118)]('datePicker')[_0x10d610(0x115)];if(_0x33becf[_0x10d610(0x145)]===0x0)_0x453dd9=_0x10d610(0xe5);else{const _0x4a36c4=/crossfit|cf/i,_0x1966c8=/weightlifting/i;let _0x47587c=_0x33becf[_0x10d610(0xb9)](_0x3d5d49=>{var _0x33f095=_0x10d610;const _0x4f7c9a=_0x4a36c4[_0x33f095(0xc4)](_0x3d5d49[_0x33f095(0x11f)]),_0x59c74f=_0x1966c8[_0x33f095(0xc4)](_0x3d5d49[_0x33f095(0x11f)]);if(_0x33c3e7[_0x33f095(0x14d)](_0x33f095(0xd2))&&_0x4f7c9a)return!![];if(_0x33c3e7['includes']('Weightlifting')&&_0x59c74f)return!![];if(_0x33c3e7[_0x33f095(0x14d)](_0x33f095(0xea))&&!_0x4f7c9a&&!_0x59c74f)return!![];if(_0x33c3e7[_0x33f095(0x145)]===0x0||_0x33c3e7[_0x33f095(0x145)]===0x3||_0x33c3e7[_0x33f095(0x14d)](_0x33f095(0x9f)))return!![];if(_0x33c3e7[_0x33f095(0x145)]===0x2&&!_0x33c3e7[_0x33f095(0x14d)]('Other'))return _0x4f7c9a||_0x59c74f;return![];});_0x47587c[_0x10d610(0x145)]===0x0?_0x453dd9='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22booking-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22class-name\x22>No\x20class\x20found</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>':_0x47587c[_0x10d610(0xda)](_0x352b5f=>{var _0xad60cf=_0x10d610;const _0x54cc0c=_0x352b5f[_0xad60cf(0x12a)]-_0x352b5f[_0xad60cf(0x124)],_0x333f54=_0x54cc0c===0x1?'spot':_0xad60cf(0x148);_0x453dd9+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22booking-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22time\x22>'+_0x352b5f[_0xad60cf(0x127)]+_0xad60cf(0x98)+_0x352b5f[_0xad60cf(0x11f)]+'</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22buttonandavailability\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22action-button\x22\x20style=\x22margin-left:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+(_0x352b5f[_0xad60cf(0x13a)]===_0xad60cf(0xfd)?_0xad60cf(0xbf)+_0x352b5f[_0xad60cf(0x116)]+_0xad60cf(0xce)+_0x352b5f['classScheduleId']+_0xad60cf(0x14b)+_0x5304c3+'\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-name=\x22'+_0x352b5f[_0xad60cf(0x11f)]+_0xad60cf(0x147)+_0x54cc0c+'\x20'+_0x333f54+'\x20left</div>':_0x54cc0c>0x0?_0xad60cf(0x95)+_0x352b5f[_0xad60cf(0xde)]+_0xad60cf(0x117)+_0x5304c3+_0xad60cf(0xcb)+_0x352b5f[_0xad60cf(0x11f)]+'\x22>Book</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spotsleft\x22>'+_0x54cc0c+'\x20'+_0x333f54+_0xad60cf(0x12d):_0xad60cf(0xd3)+_0x352b5f[_0xad60cf(0xde)]+_0xad60cf(0x117)+_0x5304c3+_0xad60cf(0xcb)+_0x352b5f[_0xad60cf(0x11f)]+'\x22>Full</button>')+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';});}_0x15390c[_0x10d610(0x123)]=_0x453dd9;}function getSelectedClassOptions(){var _0x31690f=a0_0x1f202f;const _0x3d5bc6=document[_0x31690f(0x10f)](_0x31690f(0x11a));return Array['from'](_0x3d5bc6)[_0x31690f(0xd4)](_0x1da672=>{var _0x257144=_0x31690f;const _0x469cf9=_0x1da672['textContent'][_0x257144(0x138)]();return _0x469cf9;});}function a0_0x1654(_0x1702b9,_0x1b7b69){var _0x2a65df=a0_0x2a65();return a0_0x1654=function(_0x165403,_0x7eb647){_0x165403=_0x165403-0x81;var _0x343fa9=_0x2a65df[_0x165403];return _0x343fa9;},a0_0x1654(_0x1702b9,_0x1b7b69);}function fetchAndisplayClassBooked(){var _0x419a71=a0_0x1f202f,_0x51ca41=localStorage[_0x419a71(0x101)](_0x419a71(0x91)),_0x397532='https://crossfit168.clubfit.net.au/api/v1/booking/current/'+_0x51ca41;makeApiRequest(_0x397532,_0x419a71(0xa5),null,function(_0x32d118){var _0x4c3029=_0x419a71;displayMyBookedClass(_0x32d118[_0x4c3029(0xa8)]);});}function displayMyBookedClass(_0xb8fc70){var _0x597ba6=a0_0x1f202f,_0x50e541=document[_0x597ba6(0x118)](_0x597ba6(0x9b));let _0x45ebab='';_0xb8fc70['forEach'](_0x1eff4c=>{var _0x21b1b5=_0x597ba6;if(_0x1eff4c['bookingStatus']!==_0x21b1b5(0x104)){const _0x194cf2=new Date(_0x1eff4c['bookedDate'])[_0x21b1b5(0x111)](_0x21b1b5(0x13e),{'weekday':_0x21b1b5(0xa2),'month':_0x21b1b5(0xa2),'day':_0x21b1b5(0xdf),'hour':'2-digit','minute':_0x21b1b5(0xdf)})[_0x21b1b5(0x13c)](',',''),_0x3f7bbb=_0x194cf2[_0x21b1b5(0x136)]('\x20')[0x0],_0xa3d01c=_0x194cf2[_0x21b1b5(0x136)]('\x20')[_0x21b1b5(0xbb)](0x1)[_0x21b1b5(0xf3)]('\x20'),_0x3ec099=_0x21b1b5(0xb0)+_0x1eff4c[_0x21b1b5(0x11f)]+'</h3>',_0x43707b=_0x21b1b5(0x120)+_0x3f7bbb+'\x20'+_0xa3d01c+_0x21b1b5(0xe0),_0x39ddd8=_0x21b1b5(0x120)+_0x1eff4c[_0x21b1b5(0xa1)]+_0x21b1b5(0xe0);_0x45ebab+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22booked-class-columns\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22div-each-class\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22w-richtext\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x3ec099+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x43707b+_0x21b1b5(0x132)+_0x39ddd8+_0x21b1b5(0x142)+_0x1eff4c[_0x21b1b5(0xde)]+_0x21b1b5(0xef)+_0x1eff4c[_0x21b1b5(0x141)]+'\x22>Sign-in</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22action-button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22cancel-button\x22\x20data-member-booking-id=\x22'+_0x1eff4c[_0x21b1b5(0x10a)]+_0x21b1b5(0x86);}}),!_0x45ebab&&(_0x45ebab=_0x597ba6(0xd7)),_0x50e541[_0x597ba6(0x123)]=_0x45ebab;}function makeApiRequest(_0x2c5333,_0x31901c,_0x102359,_0x37c69b,_0x58f425=0x0){var _0x3bb337=a0_0x1f202f,_0x2f14f4=localStorage['getItem'](_0x3bb337(0x133)),_0x438bd4=new XMLHttpRequest();_0x438bd4[_0x3bb337(0xe9)](_0x31901c,_0x2c5333,!![]),_0x438bd4[_0x3bb337(0x8b)](_0x3bb337(0x13b),_0x3bb337(0xa7)),_0x438bd4[_0x3bb337(0x8b)](_0x3bb337(0xba),_0x3bb337(0xa7)),_0x438bd4[_0x3bb337(0x8b)]('Authorization',_0x3bb337(0x94)+_0x2f14f4),_0x438bd4['onload']=function(){var _0x11ba6d=_0x3bb337;_0x438bd4[_0x11ba6d(0xcc)]===0xc8?_0x37c69b(JSON[_0x11ba6d(0x107)](_0x438bd4['responseText'])):(console['error'](_0x11ba6d(0xd5),_0x438bd4['status']),_0x58f425<0x1?errorAPICheckLogin(function(_0xf85367){_0xf85367&&makeApiRequest(_0x2c5333,_0x31901c,_0x102359,_0x37c69b,_0x58f425+0x1);}):console['error']('makeApiRequest\x20-\x20Retried\x20request\x20failed:',_0x438bd4['status']));},_0x438bd4[_0x3bb337(0xb3)]=function(){var _0x53076d=_0x3bb337;console[_0x53076d(0xab)]('makeApiRequest\x20-\x20Network\x20error',_0x438bd4[_0x53076d(0xb3)]),_0x58f425<0x1?errorAPICheckLogin(function(_0x1a459f){_0x1a459f&&makeApiRequest(_0x2c5333,_0x31901c,_0x102359,_0x37c69b,_0x58f425+0x1);}):console['error']('makeApiRequest\x20-\x20Retried\x20request\x20failed:',_0x438bd4[_0x53076d(0xcc)]);},_0x102359?_0x438bd4[_0x3bb337(0xeb)](JSON[_0x3bb337(0x113)](_0x102359)):_0x438bd4[_0x3bb337(0xeb)]();}function errorAPICheckLogin(_0xa70575){var _0x58b6aa=a0_0x1f202f;console[_0x58b6aa(0x8a)](_0x58b6aa(0xe7)),validateLogin(function(_0x10bcc2){var _0x12f91d=_0x58b6aa;_0x10bcc2?(console[_0x12f91d(0x8a)](_0x12f91d(0xe1)),_0xa70575(!![])):(console[_0x12f91d(0x8a)](_0x12f91d(0x96)),window[_0x12f91d(0x121)][_0x12f91d(0xf5)]='/');});}function validateLogin(_0x599f34){var _0x5160ff=a0_0x1f202f;if(!localStorage[_0x5160ff(0x101)](_0x5160ff(0x133))||!localStorage[_0x5160ff(0x101)](_0x5160ff(0x91))||!localStorage[_0x5160ff(0x101)](_0x5160ff(0x9e))){console[_0x5160ff(0xab)](_0x5160ff(0xf8)),_0x599f34(![]);return;}const _0x4bf64d=_0x5160ff(0xb5),_0x250ae9=_0x5160ff(0x82),_0x257a07={'xoken':localStorage[_0x5160ff(0x101)](_0x5160ff(0x99)),'userId':localStorage[_0x5160ff(0x101)](_0x5160ff(0x84)),'userType':localStorage[_0x5160ff(0x101)](_0x5160ff(0x9e))};makeApiRequest(_0x4bf64d,_0x250ae9,_0x257a07,function(_0x1793f3){var _0x4fc404=_0x5160ff;Object['keys'](_0x1793f3[_0x4fc404(0xa8)])['forEach'](function(_0x39dc4e){var _0x6689e4=_0x4fc404;localStorage[_0x6689e4(0x129)](_0x39dc4e,_0x1793f3[_0x6689e4(0xa8)][_0x39dc4e]);}),_0x599f34(!![]);},function(_0x58bcf2){var _0x1bccf8=_0x5160ff;console[_0x1bccf8(0xab)](_0x1bccf8(0xe8),_0x58bcf2),_0x599f34(![]);});}function checkInParticipant(_0x22157d,_0x1fc250,_0x1e0bc3){var _0x108e5e=a0_0x1f202f;const _0x496e13=_0x108e5e(0xd0);console[_0x108e5e(0x8a)]('checkInParticipant:\x20'+_0x22157d+'\x20'+_0x1fc250);const _0x62f3d3={'memberNumber':localStorage[_0x108e5e(0x101)](_0x108e5e(0x91)),'classScheduleId':_0x22157d,'classDateTime':_0x1fc250};function _0x163f47(_0x5c697e){var _0xe27bf9=_0x108e5e;if(_0x5c697e[_0xe27bf9(0xa8)]===_0xe27bf9(0x14a)){console[_0xe27bf9(0x8a)](_0xe27bf9(0x89));const _0x425e57=_0x1e0bc3[_0xe27bf9(0xb1)];_0x425e57[_0xe27bf9(0x123)]='';const _0x1d546a=document['createElement'](_0xe27bf9(0xee));_0x1d546a[_0xe27bf9(0x108)]=_0xe27bf9(0x112),_0x425e57[_0xe27bf9(0xf2)](_0x1d546a);}else console['error'](_0xe27bf9(0xca),_0x5c697e[_0xe27bf9(0x97)]);}makeApiRequest(_0x496e13,_0x108e5e(0x82),_0x62f3d3,_0x163f47);}