var a0_0x207199=a0_0x1e2a;(function(_0x26695e,_0x480596){var _0xe200df=a0_0x1e2a,_0x1d9ced=_0x26695e();while(!![]){try{var _0x599c45=-parseInt(_0xe200df(0x22c))/0x1+-parseInt(_0xe200df(0x216))/0x2*(parseInt(_0xe200df(0x25c))/0x3)+parseInt(_0xe200df(0x24c))/0x4*(-parseInt(_0xe200df(0x1ce))/0x5)+parseInt(_0xe200df(0x1e8))/0x6*(-parseInt(_0xe200df(0x233))/0x7)+-parseInt(_0xe200df(0x281))/0x8*(parseInt(_0xe200df(0x248))/0x9)+-parseInt(_0xe200df(0x242))/0xa+parseInt(_0xe200df(0x203))/0xb;if(_0x599c45===_0x480596)break;else _0x1d9ced['push'](_0x1d9ced['shift']());}catch(_0x554939){_0x1d9ced['push'](_0x1d9ced['shift']());}}}(a0_0x5590,0x3e8a3),document[a0_0x207199(0x240)](a0_0x207199(0x26a),function(){var _0xb675dc=a0_0x207199;initDatePicker(),selectFirstTab(),fetchAndisplayClassBooked(),updateHeaderDate(document[_0xb675dc(0x28a)]('datePicker')[_0xb675dc(0x263)]);var _0x2e4c57=document[_0xb675dc(0x28a)](_0xb675dc(0x211));_0x2e4c57[_0xb675dc(0x240)](_0xb675dc(0x27a),function(){fetchAndisplayClassBooked();});var _0x2e4c57=document[_0xb675dc(0x28a)](_0xb675dc(0x1e4));_0x2e4c57['addEventListener']('click',function(){fetchAndDisplayClassesAvailable();});const _0x12b616=document[_0xb675dc(0x28a)](_0xb675dc(0x1f7)),_0x267988=document[_0xb675dc(0x28a)]('prevDay'),_0x322e9e=document[_0xb675dc(0x28a)]('nextDay');_0x267988[_0xb675dc(0x240)](_0xb675dc(0x27a),function(){var _0x1e7dd1=_0xb675dc;_0x42fd99(-0x1);var _0x5b7d7e=document[_0x1e7dd1(0x28a)](_0x1e7dd1(0x1f7))[_0x1e7dd1(0x263)];saveDatePickerSessionStorage(_0x5b7d7e),updateHeaderDate(_0x5b7d7e),fetchAndDisplayClassesAvailable();}),_0x322e9e[_0xb675dc(0x240)](_0xb675dc(0x27a),function(){var _0x185e34=_0xb675dc;_0x42fd99(0x1);var _0x49e414=document[_0x185e34(0x28a)](_0x185e34(0x1f7))['value'];saveDatePickerSessionStorage(_0x49e414),updateHeaderDate(_0x49e414),fetchAndDisplayClassesAvailable();}),_0x12b616[_0xb675dc(0x240)]('change',function(){var _0x995f82=_0xb675dc,_0x413ca4=document[_0x995f82(0x28a)](_0x995f82(0x1f7))[_0x995f82(0x263)];saveDatePickerSessionStorage(_0x413ca4),updateHeaderDate(_0x413ca4),fetchAndDisplayClassesAvailable();});function _0x42fd99(_0x14a4ae){var _0x1b58bd=_0xb675dc;const _0x47b6c9=new Date(_0x12b616[_0x1b58bd(0x263)]+'T00:00:00');_0x47b6c9[_0x1b58bd(0x1fa)](_0x47b6c9[_0x1b58bd(0x22a)]()+_0x14a4ae),_0x12b616['value']=formatDate(_0x47b6c9);}var _0x90faf3=document[_0xb675dc(0x20f)](_0xb675dc(0x218));_0x90faf3[_0xb675dc(0x1d9)](function(_0x3f8369){var _0xa7a891=_0xb675dc;_0x3f8369[_0xa7a891(0x240)]('click',function(){var _0x2e82ae=_0xa7a891;_0x90faf3[_0x2e82ae(0x1d9)](function(_0x43cc88){var _0x1fd0c7=_0x2e82ae;_0x43cc88[_0x1fd0c7(0x232)][_0x1fd0c7(0x262)](_0x1fd0c7(0x26b));}),this[_0x2e82ae(0x232)]['add'](_0x2e82ae(0x26b)),fetchAndDisplayClassesAvailable();});});var _0x4a87b2=document[_0xb675dc(0x20f)]('.class-option');_0x4a87b2[_0xb675dc(0x1d9)](function(_0xb5a2e2){var _0x5c5f94=_0xb675dc;_0xb5a2e2[_0x5c5f94(0x240)](_0x5c5f94(0x27a),function(){var _0x518412=_0x5c5f94;this[_0x518412(0x232)][_0x518412(0x247)](_0x518412(0x26b)),fetchAndDisplayClassesAvailable();});}),document[_0xb675dc(0x28a)]('class-available')[_0xb675dc(0x240)](_0xb675dc(0x27a),function(_0x5f2e4f){var _0x597712=_0xb675dc;if(_0x5f2e4f[_0x597712(0x22f)]&&_0x5f2e4f['target'][_0x597712(0x1db)]('.cancel-button')){var _0x1f4fce=_0x5f2e4f['target'][_0x597712(0x237)]('data-member-booking-id');cancelBooking_resolve(_0x1f4fce)['then'](()=>{fetchAndDisplayClassesAvailable();})['catch'](_0x5f42b6=>{var _0x2ab8b7=_0x597712;console['error'](_0x2ab8b7(0x24e),_0x5f42b6);});}else{if(_0x5f2e4f[_0x597712(0x22f)]&&_0x5f2e4f[_0x597712(0x22f)][_0x597712(0x1db)](_0x597712(0x277)))bookClass(_0x5f2e4f['target']),fetchAndDisplayClassesAvailable();else{if(_0x5f2e4f[_0x597712(0x22f)]&&_0x5f2e4f[_0x597712(0x22f)][_0x597712(0x1e0)](_0x597712(0x246))){var _0xb1c6ac=_0x5f2e4f[_0x597712(0x22f)][_0x597712(0x1e0)](_0x597712(0x246));if(_0x5f2e4f['target'][_0x597712(0x1e0)](_0x597712(0x210))){_0xb1c6ac[_0x597712(0x20f)](_0x597712(0x214))['forEach'](function(_0x1afc8d){var _0x4f5c41=_0x597712;_0x1afc8d[_0x4f5c41(0x232)][_0x4f5c41(0x262)](_0x4f5c41(0x279));});return;}var _0x12f7d2=_0xb1c6ac[_0x597712(0x1c1)](_0x597712(0x277))||_0xb1c6ac[_0x597712(0x1c1)]('.cancel-button')||_0xb1c6ac['querySelector']('.full-button');if(_0x12f7d2){var _0x32eded=_0x12f7d2['getAttribute']('data-class-schedule-id'),_0x486282=_0x12f7d2[_0x597712(0x237)]('data-class-date'),_0x3b57fb=_0xb1c6ac[_0x597712(0x1c1)](_0x597712(0x289))[_0x597712(0x276)],_0x494a54=_0xb1c6ac[_0x597712(0x1c1)](_0x597712(0x27b))['textContent'],_0x5a27d3=document[_0x597712(0x26d)](_0x597712(0x229));_0x5a27d3['setAttribute'](_0x597712(0x1fb),_0x32eded),_0x5a27d3[_0x597712(0x222)]('data-class-date',_0x486282),_0x5a27d3['setAttribute'](_0x597712(0x1d3),_0x3b57fb),_0x5a27d3[_0x597712(0x222)](_0x597712(0x1cc),_0x494a54),checkAttendees(_0x5a27d3,_0xb1c6ac);}else console[_0x597712(0x20a)]('No\x20book-button\x20or\x20cancel-button\x20found\x20in\x20booking-item.');}}}}),document['getElementById']('booking-info')['addEventListener']('click',function(_0x307fb0){var _0x4ddfa0=_0xb675dc;if(_0x307fb0[_0x4ddfa0(0x22f)]&&_0x307fb0[_0x4ddfa0(0x22f)][_0x4ddfa0(0x1db)](_0x4ddfa0(0x26c))){var _0x34d6e8=_0x307fb0['target']['getAttribute'](_0x4ddfa0(0x257));cancelBooking_resolve(_0x34d6e8)['then'](()=>{fetchAndisplayClassBooked();})[_0x4ddfa0(0x21a)](_0x2036b1=>{var _0xcc2b66=_0x4ddfa0;console[_0xcc2b66(0x20a)](_0xcc2b66(0x24e),_0x2036b1);});}else{if(_0x307fb0[_0x4ddfa0(0x22f)]&&_0x307fb0[_0x4ddfa0(0x22f)][_0x4ddfa0(0x1db)](_0x4ddfa0(0x1f8))){const _0x15545f=_0x307fb0[_0x4ddfa0(0x22f)];var _0x12ecd0=_0x307fb0[_0x4ddfa0(0x22f)][_0x4ddfa0(0x237)](_0x4ddfa0(0x1fb)),_0x594c7b=_0x307fb0['target'][_0x4ddfa0(0x237)]('data-class-date-time');checkInParticipant(_0x12ecd0,_0x594c7b,_0x15545f);}}});}));function initDatePicker(){var _0x36134e=a0_0x207199;const _0x3f30e8=document[_0x36134e(0x28a)](_0x36134e(0x1f7));let _0x2720a3=sessionStorage[_0x36134e(0x1e3)](_0x36134e(0x227)),_0x3f7cc3=sessionStorage[_0x36134e(0x1e3)](_0x36134e(0x230));_0x2720a3&&_0x3f7cc3&&isWithinValidityPeriod(_0x3f7cc3,0.5)?_0x3f30e8[_0x36134e(0x263)]=_0x2720a3:(currentDate=getLocalDate(),_0x3f30e8[_0x36134e(0x263)]=currentDate,saveDatePickerSessionStorage(currentDate));}function selectFirstTab(){var _0x2e40ff=a0_0x207199,_0x2728ee=document[_0x2e40ff(0x28a)]('tab-existing-booking'),_0x2d1a1c=document['getElementById'](_0x2e40ff(0x1e4));_0x2728ee[_0x2e40ff(0x232)]['add'](_0x2e40ff(0x258)),_0x2728ee[_0x2e40ff(0x222)](_0x2e40ff(0x273),_0x2e40ff(0x23b)),_0x2d1a1c['classList'][_0x2e40ff(0x262)]('w--current'),_0x2d1a1c[_0x2e40ff(0x222)](_0x2e40ff(0x273),'false');}function isWithinValidityPeriod(_0x5a609e,_0x36d230){var _0x5c0a19=a0_0x207199;const _0x112b42=new Date()[_0x5c0a19(0x249)](),_0x4eca7c=(_0x112b42-_0x5a609e)/(0x3e8*0x3c*0x3c);return _0x4eca7c<=_0x36d230;}function formatDate(_0x34a119){var _0x4d227d=a0_0x207199;let _0x667ad8=new Date(_0x34a119),_0x23e03e=''+(_0x667ad8[_0x4d227d(0x220)]()+0x1),_0x1827e9=''+_0x667ad8[_0x4d227d(0x22a)](),_0xb5c345=_0x667ad8['getFullYear']();if(_0x23e03e[_0x4d227d(0x21e)]<0x2)_0x23e03e='0'+_0x23e03e;if(_0x1827e9[_0x4d227d(0x21e)]<0x2)_0x1827e9='0'+_0x1827e9;return[_0xb5c345,_0x23e03e,_0x1827e9]['join']('-');}function updateHeaderDate(_0x19241b){var _0x1b99d7=a0_0x207199;const _0x23e2a4=document[_0x1b99d7(0x28a)]('date-header');if(!_0x23e2a4){console[_0x1b99d7(0x20a)]('Element\x20with\x20id\x20\x27date-header\x27\x20not\x20found!');return;}const _0xcc5a4b=new Date(_0x19241b),_0x51721c=_0xcc5a4b[_0x1b99d7(0x22a)](),_0x36cf92=_0xcc5a4b[_0x1b99d7(0x1d1)](_0x1b99d7(0x1c2),{'month':_0x1b99d7(0x1e2)}),_0x50a841=_0xcc5a4b['toLocaleString']('en-AU',{'weekday':_0x1b99d7(0x1e2)});function _0x39583f(_0x2a85b7){if(_0x2a85b7>0x3&&_0x2a85b7<0x15)return'th';switch(_0x2a85b7%0xa){case 0x1:return'st';case 0x2:return'nd';case 0x3:return'rd';default:return'th';}}const _0x111876=_0x50a841+'\x20'+(_0x51721c<0xa?'0':'')+_0x51721c+_0x39583f(_0x51721c)+'\x20'+_0x36cf92;_0x23e2a4[_0x1b99d7(0x276)]=_0x111876;}function getLocalDate(){var _0x10c816=a0_0x207199;const _0x17c2bb=new Date(),_0x4a21bc=_0x17c2bb[_0x10c816(0x1c4)]()*0xea60,_0x12ea74=new Date(_0x17c2bb-_0x4a21bc)[_0x10c816(0x1de)]()['slice'](0x0,0xa);return _0x12ea74;}function saveDatePickerSessionStorage(_0x38844d){var _0x289c83=a0_0x207199;sessionStorage[_0x289c83(0x1cf)](_0x289c83(0x227),_0x38844d),timestamp=new Date()['getTime'](),sessionStorage[_0x289c83(0x1cf)](_0x289c83(0x230),timestamp);}function bookClass(_0x4d0dc4){var _0x597210=a0_0x207199,_0xf8630f=_0x4d0dc4[_0x597210(0x237)](_0x597210(0x1fb)),_0x4a1e2d=_0x4d0dc4['getAttribute'](_0x597210(0x241)),_0x4b0cd8=_0x4d0dc4[_0x597210(0x237)]('data-class-name'),_0x1cf82b=localStorage[_0x597210(0x1e3)]('userId'),_0x697238=localStorage[_0x597210(0x1e3)](_0x597210(0x256)),_0x426ee2='https://crossfit168.clubfit.net.au/api/v1/booking/book-class-v2',_0x32e34a={'classScheduleId':_0xf8630f,'classDateTime':_0x4a1e2d,'className':_0x4b0cd8,'userId':_0x1cf82b,'onBehalfBookingReference':'','onBehalfBookFor':''},_0x304f68=new XMLHttpRequest();_0x304f68[_0x597210(0x213)](_0x597210(0x1c7),_0x426ee2,!![]),_0x304f68[_0x597210(0x27e)]('Content-Type',_0x597210(0x22e)),_0x304f68[_0x597210(0x27e)](_0x597210(0x1c9),_0x597210(0x22e)),_0x304f68['setRequestHeader'](_0x597210(0x1cd),_0x597210(0x24a)+_0x697238),_0x304f68[_0x597210(0x274)]=function(){var _0x474d2c=_0x597210,_0x4a2847;try{_0x4a2847=JSON[_0x474d2c(0x259)](_0x304f68[_0x474d2c(0x271)]);}catch(_0x2709c8){_0x4a2847={'errors':{'message':'Unknown\x20error\x20occurred'}};}_0x304f68['status']>=0xc8&&_0x304f68['status']<0x12c&&_0x4a2847[_0x474d2c(0x23e)]===0xc8?fetchAndDisplayClassesAvailable():(console[_0x474d2c(0x250)](_0x474d2c(0x239)+_0x304f68[_0x474d2c(0x1d5)]+_0x474d2c(0x23d)),alert(_0x4a2847[_0x474d2c(0x287)]['message']),errorAPICheckLogin(function(_0x34fd73){var _0x15b181=_0x474d2c;!_0x34fd73&&console['error'](_0x15b181(0x24b));}));},_0x304f68[_0x597210(0x26f)]=function(){var _0x4c518d=_0x597210;alert(_0x4c518d(0x1d2)),errorAPICheckLogin(function(_0x546448){var _0x399223=_0x4c518d;!_0x546448&&console[_0x399223(0x20a)](_0x399223(0x24b));});},_0x304f68[_0x597210(0x1df)](JSON[_0x597210(0x251)](_0x32e34a));}function displayErrorMessage(_0x3c0d83,_0x58a82e){var _0x3d5e07=a0_0x207199;clearErrorMessage(_0x3c0d83);var _0x4c624a=document[_0x3d5e07(0x26d)](_0x3d5e07(0x23f));_0x4c624a[_0x3d5e07(0x1ee)]=_0x3d5e07(0x245),_0x4c624a['textContent']=_0x58a82e,_0x3c0d83[_0x3d5e07(0x1da)][_0x3d5e07(0x1e1)](_0x4c624a,_0x3c0d83[_0x3d5e07(0x25e)]);}function clearErrorMessage(_0x597a1c){var _0x362922=a0_0x207199,_0xa05baf=_0x597a1c[_0x362922(0x25e)];_0xa05baf&&_0xa05baf['className']===_0x362922(0x245)&&_0xa05baf['remove']();}function a0_0x5590(){var _0x2503d3=['div','addEventListener','data-class-date','1273860pcLhAh','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22column-signin-cancel\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','\x20left</div>','error-message','.booking-item','toggle','18yZFBJv','getTime','Bearer\x20','User\x20is\x20not\x20logged\x20in,\x20redirecting\x20to\x20login\x20page.','40UBjxJz','\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-date=\x22','EventListener\x20-\x20Cancellation\x20error:','add','log','stringify','innerHTML','bookedId','parentElement','short','access_token','data-member-booking-id','w--current','parse','includes','test','339oagqqn','classCapacity','nextSibling','\x22>Book</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spotsleft\x22>','style','.class-option.selected-option','remove','value','Booked','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22booking-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22time\x22>','\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-date=\x22','cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20retry','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22buttonandavailability\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22action-button\x22\x20style=\x22margin-left:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','userId','DOMContentLoaded','selected-option','.cancel-button','createElement','spot','onerror','2-digit','responseText','https://crossfit168.clubfit.net.au/api/v1/booking/book-class-participant-checkin','aria-selected','onload','booking-info','textContent','.book-button','https://crossfit168.clubfit.net.au/api/v1/booking/current/','enlarged','click','.class-name','Signed\x20in','https://crossfit168.clubfit.net.au/api/v1/booking/cancel/','setRequestHeader','validateLogin\x20-\x20Validation\x20failed:','gridColumn','541912MxirBO','json','\x22\x20data-class-date-time=\x22','Weightlifting','</h3>','\x22\x20alt=\x22Avatar\x22\x20class=\x22attendee-photo\x22>','errors','hasAttended','.time','getElementById','<div\x20class=\x22booked-class-columns\x22><div\x20class=\x22div-each-class\x22><div\x20class=\x22w-richtext\x22><p>No\x20class\x20available</p></div></div></div>','totalBooked','querySelector','en-AU','1\x20/\x20-1','getTimezoneOffset','success','.location-option.selected-option','POST','GET','Accept','attendees','<div\x20class=\x22attendee-item\x22><img\x20src=\x22','data-class-name','Authorization','116420ADCEeH','setItem','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22class-name\x22>','toLocaleString','Network\x20error\x20occurred\x20while\x20booking.','data-class-time','\x22>Cancel</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','status','\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-name=\x22','\x22>Cancel</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','class-available','forEach','parentNode','matches','keys','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22booked-class-columns\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22div-each-class\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22w-richtext\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','toISOString','send','closest','insertBefore','long','getItem','tab-book-class','Other','<div\x20class=\x22action-button\x22>Signed\x20in</div>','https://crossfit168.clubfit.net.au/api/v1/booking/class-participants','251982uUPRPN','<div>No\x20attendees</div>','data-location','slice','map','display','className','href','todo:\x20remove\x20both\x20buttons','Bearer','cancelBooking_resolve\x20-\x20Cancellation\x20failed','Cancelled','<button\x20class=\x22full-button\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-schedule-id=\x22','cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20network\x20error\x20and\x20retry','contains','datePicker','.signin-button','memberBookingId','setDate','data-class-schedule-id','then','classScheduleId','HTTP\x20error!\x20status:\x20','action-button','<button\x20class=\x22book-button\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-schedule-id=\x22','Error\x20while\x20cancelling\x20booking,\x20xhr.status:\x20','split','21852787hwbUBI','trim','localeCompare','payload','errorAPICheckLogin\x20-\x20login\x20validated','from','stopPropagation','error','block','\x22>Sign-in</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22action-button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22cancel-button\x22\x20data-member-booking-id=\x22','appendChild','fullName','querySelectorAll','.attendees','tab-existing-booking','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22action-button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22signin-button\x22\x20data-class-schedule-id=\x22','open','.attendee-photo','bookedDate','7026WbflYa','\x22>Cancel</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spotsleft\x22>','.location-option','Error\x20fetching\x20information:','catch','number','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','portalUserId','length','clubName','getMonth','Check-in\x20failed:','setAttribute','.action-button','isUserCheckedin\x20-\x20Error\x20while\x20checking\x20attendees:','<button\x20class=\x22cancel-button\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-member-booking-id=\x22','<p>','selectedDate','Error\x20details:','button','getDate','location','459808kOPvcU','CrossFit','application/json','target','timestampLastChanged','classTime','classList','63LPkTsS','makeApiRequest\x20-\x20Retried\x20request\x20failed:','spots','userType','getAttribute','Response\x20received:','xhr.status:\x20','none','true','Content-Type','response.messageFields','statusCode'];a0_0x5590=function(){return _0x2503d3;};return a0_0x5590();}function showInlineAttendees(_0x113e6c,_0x2c1619){var _0x47621b=a0_0x207199,_0x51edf6=_0x2c1619[_0x47621b(0x1c1)](_0x47621b(0x210));if(!_0x51edf6)_0x51edf6=document[_0x47621b(0x26d)](_0x47621b(0x23f)),_0x51edf6[_0x47621b(0x1ee)]=_0x47621b(0x1ca),_0x2c1619[_0x47621b(0x20d)](_0x51edf6),_0x51edf6['style'][_0x47621b(0x280)]=_0x47621b(0x1c3);else{_0x51edf6['style'][_0x47621b(0x1ed)]=_0x51edf6['style']['display']===_0x47621b(0x20b)?_0x47621b(0x23a):_0x47621b(0x20b);return;}var _0x1bc808='';Array['isArray'](_0x113e6c)&&_0x113e6c[_0x47621b(0x21e)]>0x0?(_0x113e6c['sort']((_0x56fcef,_0x1c8c47)=>_0x56fcef[_0x47621b(0x20e)][_0x47621b(0x205)](_0x1c8c47['fullName'])),_0x113e6c[_0x47621b(0x1d9)](function(_0x28b06d){var _0x1170e6=_0x47621b,_0x53e78d=_0x28b06d[_0x1170e6(0x20e)]['split']('\x20')[0x0];_0x1bc808+=_0x1170e6(0x1cb)+_0x28b06d['memberPhotoLocation']+_0x1170e6(0x286)+_0x53e78d+'</div>';})):_0x1bc808+=_0x47621b(0x1e9),_0x51edf6[_0x47621b(0x252)]=_0x1bc808,_0x51edf6[_0x47621b(0x260)][_0x47621b(0x1ed)]='block',_0x51edf6[_0x47621b(0x20f)](_0x47621b(0x214))['forEach'](function(_0x37a26d){var _0x36cde2=_0x47621b;_0x37a26d[_0x36cde2(0x240)](_0x36cde2(0x27a),function(_0x5dd88b){var _0x187102=_0x36cde2;_0x37a26d[_0x187102(0x232)][_0x187102(0x1f6)](_0x187102(0x279))?_0x37a26d['classList'][_0x187102(0x262)](_0x187102(0x279)):(_0x51edf6[_0x187102(0x20f)](_0x187102(0x214))[_0x187102(0x1d9)](function(_0x100631){var _0x1bc362=_0x187102;_0x100631[_0x1bc362(0x232)][_0x1bc362(0x262)](_0x1bc362(0x279));}),_0x37a26d['classList']['add'](_0x187102(0x279))),_0x5dd88b[_0x187102(0x209)]();});}),_0x51edf6['addEventListener']('click',function(_0x5c6ae0){var _0x19769b=_0x47621b;_0x51edf6[_0x19769b(0x20f)](_0x19769b(0x214))[_0x19769b(0x1d9)](function(_0x37d08c){var _0x3ddbc3=_0x19769b;_0x37d08c[_0x3ddbc3(0x232)]['remove']('enlarged');}),_0x5c6ae0[_0x19769b(0x209)]();}),document[_0x47621b(0x240)](_0x47621b(0x27a),function(_0x1bc169){var _0x2d4dbe=_0x47621b;!_0x2c1619[_0x2d4dbe(0x1f6)](_0x1bc169[_0x2d4dbe(0x22f)])&&_0x51edf6['querySelectorAll']('.attendee-photo')['forEach'](function(_0x387ffb){var _0x22213e=_0x2d4dbe;_0x387ffb[_0x22213e(0x232)][_0x22213e(0x262)]('enlarged');});});}function checkAttendees(_0x59d18f,_0x3063ca){var _0x47ee19=a0_0x207199,_0x2d8167=_0x59d18f[_0x47ee19(0x237)](_0x47ee19(0x1fb)),_0x11363d=_0x59d18f[_0x47ee19(0x237)](_0x47ee19(0x241)),_0x530123=_0x59d18f[_0x47ee19(0x237)](_0x47ee19(0x1d3)),_0x5cdbcf=_0x47ee19(0x1e7),_0x56e61a={'classScheduleId':_0x2d8167,'selectedDate':_0x11363d,'classTime':_0x530123},_0x5dc8b1=new XMLHttpRequest();_0x5dc8b1[_0x47ee19(0x213)](_0x47ee19(0x1c7),_0x5cdbcf,!![]),_0x5dc8b1['setRequestHeader'](_0x47ee19(0x23c),_0x47ee19(0x22e)),_0x5dc8b1[_0x47ee19(0x27e)]('Accept',_0x47ee19(0x22e)),_0x5dc8b1[_0x47ee19(0x27e)](_0x47ee19(0x1cd),'bearer'),_0x5dc8b1[_0x47ee19(0x274)]=function(){var _0x28a05f=_0x47ee19;if(_0x5dc8b1[_0x28a05f(0x1d5)]>=0xc8&&_0x5dc8b1['status']<0x12c){var _0x50a06c=JSON[_0x28a05f(0x259)](_0x5dc8b1['responseText']),_0x2bcd31=_0x50a06c[_0x28a05f(0x206)];showInlineAttendees(_0x2bcd31,_0x3063ca);}else console[_0x28a05f(0x20a)]('checkAttendees\x20-\x20Error\x20while\x20checking\x20attendees:',_0x5dc8b1[_0x28a05f(0x1d5)]),errorAPICheckLogin();},_0x5dc8b1[_0x47ee19(0x26f)]=function(){var _0x2375d5=_0x47ee19;console[_0x2375d5(0x20a)]('checkAttendees\x20-\x20Network\x20error\x20while\x20checking\x20attendees'),errorAPICheckLogin();},_0x5dc8b1['send'](JSON['stringify'](_0x56e61a));}function cancelBooking_resolve(_0x127b8e,_0x34edd2=0x0){return new Promise((_0x1991f6,_0x347bff)=>{var _0x540e77=a0_0x1e2a,_0x4dcfcd=localStorage[_0x540e77(0x1e3)](_0x540e77(0x256)),_0x2207cc=_0x540e77(0x27d)+_0x127b8e,_0x17998d=new XMLHttpRequest();_0x17998d[_0x540e77(0x213)](_0x540e77(0x1c7),_0x2207cc,!![]),_0x17998d[_0x540e77(0x27e)](_0x540e77(0x23c),_0x540e77(0x22e)),_0x17998d[_0x540e77(0x27e)](_0x540e77(0x1c9),_0x540e77(0x22e)),_0x17998d[_0x540e77(0x27e)](_0x540e77(0x1cd),'Bearer\x20'+_0x4dcfcd),_0x17998d[_0x540e77(0x274)]=function(){var _0x414bd5=_0x540e77;const _0xe1ff02=JSON[_0x414bd5(0x259)](_0x17998d[_0x414bd5(0x271)]);_0x17998d[_0x414bd5(0x1d5)]>=0xc8&&_0x17998d[_0x414bd5(0x1d5)]<0x12c?(_0xe1ff02[_0x414bd5(0x23e)]!==0xc8&&console[_0x414bd5(0x250)](_0x414bd5(0x238),_0x17998d[_0x414bd5(0x271)]),_0x1991f6(_0x17998d[_0x414bd5(0x271)])):(console[_0x414bd5(0x20a)](_0x414bd5(0x201),_0x17998d[_0x414bd5(0x1d5)]),console['error'](_0x414bd5(0x228),_0x17998d[_0x414bd5(0x271)]),_0x34edd2<0x1?errorAPICheckLogin(function(_0x546b31){var _0x2c25ea=_0x414bd5;_0x546b31?cancelBooking_resolve(_0x127b8e,_0x34edd2+0x1)[_0x2c25ea(0x1fc)](_0x1991f6)['catch'](_0x347bff):_0x347bff(new Error(_0x2c25ea(0x267)));}):_0x347bff(new Error(_0x414bd5(0x1f2))));},_0x17998d[_0x540e77(0x26f)]=function(){console['error']('cancelBooking_resolve\x20-\x20Network\x20error\x20while\x20cancelling\x20booking'),_0x34edd2<0x1?errorAPICheckLogin(function(_0x125fff){var _0x1df286=a0_0x1e2a;_0x125fff?cancelBooking_resolve(_0x127b8e,_0x34edd2+0x1)[_0x1df286(0x1fc)](_0x1991f6)[_0x1df286(0x21a)](_0x347bff):_0x347bff(new Error(_0x1df286(0x1f5)));}):_0x347bff(new Error('cancelBooking_resolve\x20-\x20Network\x20error'));},_0x17998d[_0x540e77(0x1df)]();});}function fetchAndDisplayClassesAvailable(){var _0x548d35=a0_0x207199,_0x493838=document[_0x548d35(0x20f)](_0x548d35(0x1c6));if(_0x493838[_0x548d35(0x21e)]===0x0){console[_0x548d35(0x250)]('No\x20locations\x20selected.');return;}var _0x4c03f0=document[_0x548d35(0x28a)](_0x548d35(0x1f7))[_0x548d35(0x263)],_0x91d545=getLocalDate(),_0x21fd5={'ALX':0x2,'CBD':0x1,'MVL':0x4},_0x1dda10=Array[_0x548d35(0x208)](_0x493838)[_0x548d35(0x1ec)](_0x1ba017=>{var _0x3cd6ac=_0x548d35,_0x2f0813=_0x1ba017['getAttribute'](_0x3cd6ac(0x1ea)),_0x13f213=_0x21fd5[_0x2f0813];return _0x13f213;}),_0xbde5b=localStorage[_0x548d35(0x1e3)](_0x548d35(0x269)),_0x39e761={'UserId':_0xbde5b,'clubId':_0x1dda10[0x0],'selectedDate':_0x4c03f0,'classType':0x0,'accountId':_0x1dda10[0x0]};if(_0x4c03f0<_0x91d545)displayClassAvailable([]);else{var _0x15a5a6='https://crossfit168.clubfit.net.au/api/v1/booking/search-classes';makeApiRequest(_0x15a5a6,_0x548d35(0x1c7),_0x39e761,function(_0x12f5d8){var _0x450ba0=_0x548d35;displayClassAvailable(_0x12f5d8[_0x450ba0(0x206)]);});}}function displayClassAvailable(_0x100bd5){var _0x26fd03=a0_0x207199,_0x1899be=document[_0x26fd03(0x28a)](_0x26fd03(0x1d8));let _0x3002d2=getSelectedClassOptions(),_0x5b5fa1='',_0x45a3be=document[_0x26fd03(0x28a)]('datePicker')[_0x26fd03(0x263)];if(_0x100bd5[_0x26fd03(0x21e)]===0x0)_0x5b5fa1='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22booking-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22class-name\x22>No\x20class\x20found</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';else{const _0x374080=/crossfit|cf/i,_0x2c5c0e=/weightlifting/i;let _0xfd11df=_0x100bd5['filter'](_0x51f1c4=>{var _0xdde4b9=_0x26fd03;const _0x19fd8b=_0x374080[_0xdde4b9(0x25b)](_0x51f1c4['className']),_0x2ed14b=_0x2c5c0e[_0xdde4b9(0x25b)](_0x51f1c4[_0xdde4b9(0x1ee)]);if(_0x3002d2[_0xdde4b9(0x25a)](_0xdde4b9(0x22d))&&_0x19fd8b)return!![];if(_0x3002d2[_0xdde4b9(0x25a)](_0xdde4b9(0x284))&&_0x2ed14b)return!![];if(_0x3002d2[_0xdde4b9(0x25a)](_0xdde4b9(0x1e5))&&!_0x19fd8b&&!_0x2ed14b)return!![];if(_0x3002d2['length']===0x0||_0x3002d2[_0xdde4b9(0x21e)]===0x3||_0x3002d2[_0xdde4b9(0x25a)]('All'))return!![];if(_0x3002d2['length']===0x2&&!_0x3002d2['includes'](_0xdde4b9(0x1e5)))return _0x19fd8b||_0x2ed14b;return![];});_0xfd11df[_0x26fd03(0x21e)]===0x0?_0x5b5fa1='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22booking-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22class-name\x22>No\x20class\x20found</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>':_0xfd11df[_0x26fd03(0x1d9)](_0x28dc33=>{var _0x2afb09=_0x26fd03;const _0x607814=_0x28dc33[_0x2afb09(0x25d)]-_0x28dc33[_0x2afb09(0x1c0)],_0x4da625=_0x607814===0x1?_0x2afb09(0x26e):_0x2afb09(0x235);_0x5b5fa1+=_0x2afb09(0x265)+_0x28dc33[_0x2afb09(0x231)]+_0x2afb09(0x1d0)+_0x28dc33['className']+_0x2afb09(0x268)+(_0x28dc33['memberBookedStatus']===_0x2afb09(0x264)?_0x2afb09(0x225)+_0x28dc33[_0x2afb09(0x1f9)]+'\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-schedule-id=\x22'+_0x28dc33[_0x2afb09(0x1fd)]+_0x2afb09(0x24d)+_0x45a3be+'\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-name=\x22'+_0x28dc33['className']+_0x2afb09(0x217)+_0x607814+'\x20'+_0x4da625+'\x20left</div>':_0x607814>0x0?_0x2afb09(0x200)+_0x28dc33[_0x2afb09(0x1fd)]+'\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-date=\x22'+_0x45a3be+_0x2afb09(0x1d6)+_0x28dc33[_0x2afb09(0x1ee)]+_0x2afb09(0x25f)+_0x607814+'\x20'+_0x4da625+_0x2afb09(0x244):_0x2afb09(0x1f4)+_0x28dc33['classScheduleId']+_0x2afb09(0x266)+_0x45a3be+_0x2afb09(0x1d6)+_0x28dc33['className']+'\x22>Full</button>')+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';});}_0x1899be[_0x26fd03(0x252)]=_0x5b5fa1;}function getSelectedClassOptions(){var _0x2ff88f=a0_0x207199;const _0x9cbd0d=document[_0x2ff88f(0x20f)](_0x2ff88f(0x261));return Array[_0x2ff88f(0x208)](_0x9cbd0d)[_0x2ff88f(0x1ec)](_0x1cb94b=>{var _0x43db0e=_0x2ff88f;const _0x434f67=_0x1cb94b['textContent'][_0x43db0e(0x204)]();return _0x434f67;});}function fetchAndisplayClassBooked(){var _0x4f40d7=a0_0x207199,_0x3f2861=localStorage[_0x4f40d7(0x1e3)](_0x4f40d7(0x269)),_0xdadd1b=_0x4f40d7(0x278)+_0x3f2861;makeApiRequest(_0xdadd1b,_0x4f40d7(0x1c8),null,function(_0x1d7028){var _0x2f9724=_0x4f40d7;displayMyBookedClass(_0x1d7028[_0x2f9724(0x206)]);});}function a0_0x1e2a(_0x4bd614,_0x135b27){var _0x55902d=a0_0x5590();return a0_0x1e2a=function(_0x1e2a52,_0x1e84d3){_0x1e2a52=_0x1e2a52-0x1c0;var _0x4c6c45=_0x55902d[_0x1e2a52];return _0x4c6c45;},a0_0x1e2a(_0x4bd614,_0x135b27);}async function displayMyBookedClass(_0x28f30e){var _0x5020c8=a0_0x207199;const _0x1da64f=document[_0x5020c8(0x28a)](_0x5020c8(0x275));let _0x45b2ff='';const _0x481e10=getLocalDate();for(const _0x3e5486 of _0x28f30e){if(_0x3e5486['bookingStatus']!==_0x5020c8(0x1f3)){const _0x4b9ee5=_0x3e5486[_0x5020c8(0x215)]['slice'](0x0,0xa),_0x488f52=new Date(_0x3e5486[_0x5020c8(0x215)])[_0x5020c8(0x1d1)]('en-AU',{'weekday':_0x5020c8(0x255),'month':_0x5020c8(0x255),'day':'2-digit','hour':_0x5020c8(0x270),'minute':_0x5020c8(0x270)})['replace'](',',''),_0x2378f2=_0x488f52[_0x5020c8(0x202)]('\x20')[0x0],_0x2f615e=_0x488f52['split']('\x20')[_0x5020c8(0x1eb)](0x1)['join']('\x20'),_0x13dbff='<h3\x20class=\x22name-class\x22>'+_0x3e5486[_0x5020c8(0x1ee)]+_0x5020c8(0x285),_0x41d3f4=_0x5020c8(0x226)+_0x2378f2+'\x20'+_0x2f615e+'</p>',_0x258e6c='<p>'+_0x3e5486[_0x5020c8(0x21f)]+'</p>';let _0x50ee26='';if(_0x4b9ee5===_0x481e10){const _0x18c9df=await isUserCheckedin(_0x3e5486[_0x5020c8(0x1fd)],_0x481e10,_0x3e5486['classTime']);!_0x18c9df?_0x50ee26=_0x5020c8(0x212)+_0x3e5486[_0x5020c8(0x1fd)]+_0x5020c8(0x283)+_0x3e5486[_0x5020c8(0x215)]+_0x5020c8(0x20c)+_0x3e5486[_0x5020c8(0x253)]+_0x5020c8(0x1d4):_0x50ee26=_0x5020c8(0x1e6);}else _0x50ee26='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22action-button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22cancel-button\x22\x20data-member-booking-id=\x22'+_0x3e5486['bookedId']+_0x5020c8(0x1d7);_0x45b2ff+=_0x5020c8(0x1dd)+_0x13dbff+_0x5020c8(0x21c)+_0x41d3f4+_0x5020c8(0x21c)+_0x258e6c+_0x5020c8(0x243)+_0x50ee26+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';}}!_0x45b2ff&&(_0x45b2ff=_0x5020c8(0x28b)),_0x1da64f[_0x5020c8(0x252)]=_0x45b2ff;}function getLocalDate(){var _0xde512=a0_0x207199;const _0x425277=new Date(),_0x2b9345=_0x425277[_0xde512(0x1c4)]()*0xea60,_0x2801e4=new Date(_0x425277-_0x2b9345)['toISOString']()[_0xde512(0x1eb)](0x0,0xa);return _0x2801e4;}async function isUserCheckedin(_0x525885,_0x33ef14,_0xefca8d){var _0x2d7aec=a0_0x207199;const _0x55ae2e=_0x2d7aec(0x1e7),_0x2612c1={'classScheduleId':_0x525885,'selectedDate':_0x33ef14,'classTime':_0xefca8d};try{const _0x3ce10c=await makeApiRequest_noToken(_0x55ae2e,_0x2d7aec(0x1c7),_0x2612c1),_0x13cb04=_0x3ce10c[_0x2d7aec(0x206)],_0x3ca6a5=localStorage['getItem'](_0x2d7aec(0x269));for(const _0x5f32b9 of _0x13cb04){if(_0x5f32b9[_0x2d7aec(0x21b)]===_0x3ca6a5&&_0x5f32b9[_0x2d7aec(0x288)])return!![];}}catch(_0x30d4b3){console[_0x2d7aec(0x20a)](_0x2d7aec(0x224),_0x30d4b3);}return![];}function makeApiRequest(_0x18986d,_0x11a3f3,_0x5291b3,_0x3f7701,_0x185e2f=0x0){var _0x2c58c5=a0_0x207199,_0x1eeda4=localStorage[_0x2c58c5(0x1e3)](_0x2c58c5(0x256)),_0x564178=new XMLHttpRequest();_0x564178[_0x2c58c5(0x213)](_0x11a3f3,_0x18986d,!![]),_0x564178[_0x2c58c5(0x27e)](_0x2c58c5(0x23c),_0x2c58c5(0x22e)),_0x564178[_0x2c58c5(0x27e)]('Accept',_0x2c58c5(0x22e)),_0x564178[_0x2c58c5(0x27e)](_0x2c58c5(0x1cd),_0x2c58c5(0x24a)+_0x1eeda4),_0x564178[_0x2c58c5(0x274)]=function(){var _0x3692f4=_0x2c58c5;_0x564178[_0x3692f4(0x1d5)]===0xc8?_0x3f7701(JSON[_0x3692f4(0x259)](_0x564178[_0x3692f4(0x271)])):(console['error'](_0x3692f4(0x219),_0x564178[_0x3692f4(0x1d5)]),_0x185e2f<0x1?errorAPICheckLogin(function(_0x229262){_0x229262&&makeApiRequest(_0x18986d,_0x11a3f3,_0x5291b3,_0x3f7701,_0x185e2f+0x1);}):console['error'](_0x3692f4(0x234),_0x564178[_0x3692f4(0x1d5)]));},_0x564178[_0x2c58c5(0x26f)]=function(){var _0x23e5be=_0x2c58c5;console[_0x23e5be(0x20a)]('makeApiRequest\x20-\x20Network\x20error',_0x564178[_0x23e5be(0x26f)]),_0x185e2f<0x1?errorAPICheckLogin(function(_0x3c159f){_0x3c159f&&makeApiRequest(_0x18986d,_0x11a3f3,_0x5291b3,_0x3f7701,_0x185e2f+0x1);}):console[_0x23e5be(0x20a)](_0x23e5be(0x234),_0x564178[_0x23e5be(0x1d5)]);},_0x5291b3?_0x564178['send'](JSON[_0x2c58c5(0x251)](_0x5291b3)):_0x564178['send']();}async function makeApiRequest_noToken(_0xb8ff19,_0x1b8c00,_0x5e6219){var _0x988d5d=a0_0x207199;const _0x144f35={'Content-Type':'application/json','Accept':'application/json','Authorization':_0x988d5d(0x1f1)},_0x40e53a={'method':_0x1b8c00,'headers':_0x144f35,'body':JSON[_0x988d5d(0x251)](_0x5e6219)},_0x2dbf7d=await fetch(_0xb8ff19,_0x40e53a);if(!_0x2dbf7d['ok'])throw new Error(_0x988d5d(0x1fe)+_0x2dbf7d[_0x988d5d(0x1d5)]);return await _0x2dbf7d[_0x988d5d(0x282)]();}function errorAPICheckLogin(_0x2d7efa){console['log']('errorAPICheckLogin\x20-\x20function\x20called'),validateLogin(function(_0x23218b){var _0x2b8715=a0_0x1e2a;_0x23218b?(console[_0x2b8715(0x250)](_0x2b8715(0x207)),_0x2d7efa(!![])):(console[_0x2b8715(0x250)]('errorAPICheckLogin\x20-\x20login\x20not\x20validated'),window[_0x2b8715(0x22b)][_0x2b8715(0x1ef)]='/');});}function validateLogin(_0x179101){var _0x3caf20=a0_0x207199;if(!localStorage[_0x3caf20(0x1e3)](_0x3caf20(0x256))||!localStorage[_0x3caf20(0x1e3)]('userId')||!localStorage[_0x3caf20(0x1e3)](_0x3caf20(0x236))){console[_0x3caf20(0x20a)]('validateLogin\x20-\x20Required\x20session\x20storage\x20items\x20are\x20missing'),_0x179101(![]);return;}const _0x478af3='https://admin.clubfit.net.au/api/v1/account/validate',_0x5cb75e=_0x3caf20(0x1c7),_0x2dd728={'xoken':localStorage[_0x3caf20(0x1e3)]('refresh_token'),'userId':localStorage[_0x3caf20(0x1e3)](_0x3caf20(0x21d)),'userType':localStorage[_0x3caf20(0x1e3)](_0x3caf20(0x236))};makeApiRequest(_0x478af3,_0x5cb75e,_0x2dd728,function(_0x2045b9){var _0x66b569=_0x3caf20;Object[_0x66b569(0x1dc)](_0x2045b9['payload'])[_0x66b569(0x1d9)](function(_0x30f513){localStorage['setItem'](_0x30f513,_0x2045b9['payload'][_0x30f513]);}),_0x179101(!![]);},function(_0x31ae16){var _0x19872e=_0x3caf20;console[_0x19872e(0x20a)](_0x19872e(0x27f),_0x31ae16),_0x179101(![]);});}function checkInParticipant(_0x1608e5,_0x4cf417,_0x293e24){var _0x5e936c=a0_0x207199;const _0x671d65=_0x5e936c(0x272),_0xa749dd={'memberNumber':localStorage['getItem'](_0x5e936c(0x269)),'classScheduleId':_0x1608e5,'classDateTime':_0x4cf417};function _0x4341a1(_0x4be76c){var _0x3a2ac8=_0x5e936c;if(_0x4be76c[_0x3a2ac8(0x206)]===_0x3a2ac8(0x1c5)){console[_0x3a2ac8(0x250)](_0x3a2ac8(0x1f0));const _0x517208=_0x293e24[_0x3a2ac8(0x1e0)](_0x3a2ac8(0x223))[_0x3a2ac8(0x254)];_0x517208[_0x3a2ac8(0x252)]='';const _0x150a74=document['createElement'](_0x3a2ac8(0x23f));_0x150a74['classList'][_0x3a2ac8(0x24f)](_0x3a2ac8(0x1ff)),_0x150a74[_0x3a2ac8(0x276)]=_0x3a2ac8(0x27c),_0x517208[_0x3a2ac8(0x20d)](_0x150a74);}else console[_0x3a2ac8(0x20a)](_0x3a2ac8(0x221),_0x4be76c[_0x3a2ac8(0x287)]);}makeApiRequest(_0x671d65,_0x5e936c(0x1c7),_0xa749dd,_0x4341a1);}