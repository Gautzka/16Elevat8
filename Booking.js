var a0_0x28d2c3=a0_0x19b6;(function(_0x3c8375,_0x3e1713){var _0x8d3df0=a0_0x19b6,_0x2daf71=_0x3c8375();while(!![]){try{var _0x1851c1=-parseInt(_0x8d3df0(0x199))/0x1*(-parseInt(_0x8d3df0(0x18a))/0x2)+-parseInt(_0x8d3df0(0x18f))/0x3+-parseInt(_0x8d3df0(0x112))/0x4*(parseInt(_0x8d3df0(0x19c))/0x5)+parseInt(_0x8d3df0(0x100))/0x6+-parseInt(_0x8d3df0(0x1c6))/0x7*(-parseInt(_0x8d3df0(0x178))/0x8)+parseInt(_0x8d3df0(0x1bb))/0x9+-parseInt(_0x8d3df0(0xfd))/0xa;if(_0x1851c1===_0x3e1713)break;else _0x2daf71['push'](_0x2daf71['shift']());}catch(_0x1fb8df){_0x2daf71['push'](_0x2daf71['shift']());}}}(a0_0x21f6,0x79703),document[a0_0x28d2c3(0x166)](a0_0x28d2c3(0x121),function(){var _0x4d009d=a0_0x28d2c3;initDatePicker(),selectFirstTab(),fetchAndisplayClassBooked(),updateHeaderDate(document[_0x4d009d(0x177)](_0x4d009d(0x139))['value']);var _0x2847c0=document[_0x4d009d(0x177)](_0x4d009d(0x1ba));_0x2847c0['addEventListener'](_0x4d009d(0x144),function(){fetchAndisplayClassBooked();});var _0x2847c0=document[_0x4d009d(0x177)](_0x4d009d(0x15a));_0x2847c0[_0x4d009d(0x166)](_0x4d009d(0x144),function(){fetchAndDisplayClassesAvailable();});const _0x235e96=document[_0x4d009d(0x177)]('datePicker'),_0x116321=document[_0x4d009d(0x177)](_0x4d009d(0x119)),_0x16833d=document[_0x4d009d(0x177)]('nextDay');_0x116321['addEventListener'](_0x4d009d(0x144),function(){var _0x2aed2f=_0x4d009d;_0x2d57cb(-0x1);var _0x5ec255=document['getElementById'](_0x2aed2f(0x139))[_0x2aed2f(0x17f)];saveDatePickerSessionStorage(_0x5ec255),updateHeaderDate(_0x5ec255),fetchAndDisplayClassesAvailable();}),_0x16833d[_0x4d009d(0x166)]('click',function(){var _0x283376=_0x4d009d;_0x2d57cb(0x1);var _0x3febf1=document[_0x283376(0x177)](_0x283376(0x139))[_0x283376(0x17f)];saveDatePickerSessionStorage(_0x3febf1),updateHeaderDate(_0x3febf1),fetchAndDisplayClassesAvailable();}),_0x235e96[_0x4d009d(0x166)](_0x4d009d(0x15d),function(){var _0x280597=_0x4d009d,_0x325f05=document[_0x280597(0x177)]('datePicker')[_0x280597(0x17f)];saveDatePickerSessionStorage(_0x325f05),updateHeaderDate(_0x325f05),fetchAndDisplayClassesAvailable();});function _0x2d57cb(_0x194c6d){var _0x3202c9=_0x4d009d;const _0x279835=new Date(_0x235e96[_0x3202c9(0x17f)]+_0x3202c9(0x12c));_0x279835[_0x3202c9(0x123)](_0x279835[_0x3202c9(0x113)]()+_0x194c6d),_0x235e96['value']=formatDate(_0x279835);}var _0x378b40=document[_0x4d009d(0x180)](_0x4d009d(0x13f));_0x378b40['forEach'](function(_0x1e3aa5){var _0x47c813=_0x4d009d;_0x1e3aa5[_0x47c813(0x166)](_0x47c813(0x144),function(){var _0x519295=_0x47c813;_0x378b40[_0x519295(0x15b)](function(_0x96d018){var _0x55abae=_0x519295;_0x96d018[_0x55abae(0x16e)][_0x55abae(0x10d)](_0x55abae(0xfe));}),this['classList'][_0x519295(0x17a)](_0x519295(0xfe)),fetchAndDisplayClassesAvailable();});});var _0x6b0f78=document['querySelectorAll'](_0x4d009d(0x1c5));_0x6b0f78[_0x4d009d(0x15b)](function(_0x3bfd45){var _0x54727f=_0x4d009d;_0x3bfd45[_0x54727f(0x166)]('click',function(){var _0x54feac=_0x54727f;this[_0x54feac(0x16e)][_0x54feac(0x1be)](_0x54feac(0xfe)),fetchAndDisplayClassesAvailable();});}),document[_0x4d009d(0x177)](_0x4d009d(0x1a1))['addEventListener']('click',function(_0x33ac45){var _0x17e4cc=_0x4d009d;if(_0x33ac45[_0x17e4cc(0x179)]&&_0x33ac45[_0x17e4cc(0x179)][_0x17e4cc(0x16a)](_0x17e4cc(0x16f))){var _0x417ba1=_0x33ac45[_0x17e4cc(0x179)][_0x17e4cc(0x145)](_0x17e4cc(0x151));cancelBooking_resolve(_0x417ba1)['then'](()=>{fetchAndDisplayClassesAvailable();})[_0x17e4cc(0x13d)](_0x25aef4=>{var _0x462bec=_0x17e4cc;console['error'](_0x462bec(0x15e),_0x25aef4);});}else{if(_0x33ac45[_0x17e4cc(0x179)]&&_0x33ac45['target'][_0x17e4cc(0x16a)](_0x17e4cc(0x1c0)))bookClass(_0x33ac45[_0x17e4cc(0x179)]),fetchAndDisplayClassesAvailable();else{if(_0x33ac45[_0x17e4cc(0x179)]&&_0x33ac45['target'][_0x17e4cc(0x11b)](_0x17e4cc(0x156))){var _0x8ad2c3=_0x33ac45['target']['closest'](_0x17e4cc(0x156));if(_0x33ac45['target'][_0x17e4cc(0x11b)]('.attendees')){_0x8ad2c3['querySelectorAll'](_0x17e4cc(0x1c4))[_0x17e4cc(0x15b)](function(_0x52dc59){var _0x4dc087=_0x17e4cc;_0x52dc59[_0x4dc087(0x16e)][_0x4dc087(0x10d)](_0x4dc087(0x13b));});return;}var _0x32263a=_0x8ad2c3[_0x17e4cc(0xff)]('.book-button')||_0x8ad2c3[_0x17e4cc(0xff)](_0x17e4cc(0x16f))||_0x8ad2c3['querySelector']('.full-button');if(_0x32263a){var _0x33c598=_0x32263a[_0x17e4cc(0x145)](_0x17e4cc(0x1b2)),_0x542011=_0x32263a[_0x17e4cc(0x145)](_0x17e4cc(0x176)),_0x4acb4f=_0x8ad2c3[_0x17e4cc(0xff)](_0x17e4cc(0x1a3))[_0x17e4cc(0x134)],_0x54e936=_0x8ad2c3[_0x17e4cc(0xff)](_0x17e4cc(0x154))[_0x17e4cc(0x134)],_0x39f666=document[_0x17e4cc(0x10e)](_0x17e4cc(0x163));_0x39f666['setAttribute'](_0x17e4cc(0x1b2),_0x33c598),_0x39f666[_0x17e4cc(0x1b9)](_0x17e4cc(0x176),_0x542011),_0x39f666[_0x17e4cc(0x1b9)](_0x17e4cc(0x181),_0x4acb4f),_0x39f666[_0x17e4cc(0x1b9)](_0x17e4cc(0x153),_0x54e936),checkAttendees(_0x39f666,_0x8ad2c3);}else console[_0x17e4cc(0x14a)](_0x17e4cc(0x18c));}}}}),document[_0x4d009d(0x177)](_0x4d009d(0x1c1))['addEventListener']('click',function(_0x24c33d){var _0x3a2156=_0x4d009d;if(_0x24c33d['target']&&_0x24c33d[_0x3a2156(0x179)][_0x3a2156(0x16a)](_0x3a2156(0x16f))){var _0x311ae6=_0x24c33d['target']['getAttribute']('data-member-booking-id');cancelBooking_resolve(_0x311ae6)['then'](()=>{fetchAndisplayClassBooked();})[_0x3a2156(0x13d)](_0x1538bc=>{var _0x5e7599=_0x3a2156;console[_0x5e7599(0x14a)](_0x5e7599(0x15e),_0x1538bc);});}else{if(_0x24c33d[_0x3a2156(0x179)]&&_0x24c33d['target'][_0x3a2156(0x16a)]('.signin-button')){const _0xd66d10=_0x24c33d[_0x3a2156(0x179)];var _0x517dde=_0x24c33d[_0x3a2156(0x179)][_0x3a2156(0x145)](_0x3a2156(0x1b2)),_0x16c7db=_0x24c33d[_0x3a2156(0x179)]['getAttribute']('data-class-date-time');checkInParticipant(_0x517dde,_0x16c7db,_0xd66d10);}}});}));function initDatePicker(){var _0x40e14f=a0_0x28d2c3;const _0x55895c=document['getElementById'](_0x40e14f(0x139));let _0x309873=sessionStorage[_0x40e14f(0x1a5)]('selectedDate'),_0x122746=sessionStorage[_0x40e14f(0x1a5)](_0x40e14f(0x16d));_0x309873&&_0x122746&&isWithinValidityPeriod(_0x122746,0.5)?_0x55895c[_0x40e14f(0x17f)]=_0x309873:(currentDate=getLocalDate(),_0x55895c[_0x40e14f(0x17f)]=currentDate,saveDatePickerSessionStorage(currentDate));}function selectFirstTab(){var _0x567c4f=a0_0x28d2c3,_0x478322=document[_0x567c4f(0x177)]('tab-existing-booking'),_0xe4bc1e=document[_0x567c4f(0x177)](_0x567c4f(0x15a));_0x478322['classList'][_0x567c4f(0x17a)](_0x567c4f(0x132)),_0x478322[_0x567c4f(0x1b9)](_0x567c4f(0x175),_0x567c4f(0x11e)),_0xe4bc1e[_0x567c4f(0x16e)][_0x567c4f(0x10d)](_0x567c4f(0x132)),_0xe4bc1e[_0x567c4f(0x1b9)](_0x567c4f(0x175),'false');}function isWithinValidityPeriod(_0x8e5442,_0x4b24f0){var _0x3d4de8=a0_0x28d2c3;const _0x4f6ce2=new Date()[_0x3d4de8(0x124)](),_0x57e191=(_0x4f6ce2-_0x8e5442)/(0x3e8*0x3c*0x3c);return _0x57e191<=_0x4b24f0;}function formatDate(_0x4af52c){var _0x3866d6=a0_0x28d2c3;let _0x4e816d=new Date(_0x4af52c),_0x86c052=''+(_0x4e816d['getMonth']()+0x1),_0x3b1f06=''+_0x4e816d['getDate'](),_0x47362e=_0x4e816d[_0x3866d6(0x120)]();if(_0x86c052[_0x3866d6(0x147)]<0x2)_0x86c052='0'+_0x86c052;if(_0x3b1f06[_0x3866d6(0x147)]<0x2)_0x3b1f06='0'+_0x3b1f06;return[_0x47362e,_0x86c052,_0x3b1f06][_0x3866d6(0x141)]('-');}function updateHeaderDate(_0x649243){var _0x54bcd2=a0_0x28d2c3;const _0x321e04=document['getElementById'](_0x54bcd2(0x12a));if(!_0x321e04){console['error']('Element\x20with\x20id\x20\x27date-header\x27\x20not\x20found!');return;}const _0xcb3ad0=new Date(_0x649243),_0x2c2dc5=_0xcb3ad0[_0x54bcd2(0x113)](),_0x4dd66a=_0xcb3ad0[_0x54bcd2(0x173)](_0x54bcd2(0x16b),{'month':_0x54bcd2(0x1c3)}),_0x3303d2=_0xcb3ad0[_0x54bcd2(0x173)](_0x54bcd2(0x16b),{'weekday':_0x54bcd2(0x1c3)});function _0x14dded(_0x37e9fd){if(_0x37e9fd>0x3&&_0x37e9fd<0x15)return'th';switch(_0x37e9fd%0xa){case 0x1:return'st';case 0x2:return'nd';case 0x3:return'rd';default:return'th';}}const _0x577d58=_0x3303d2+'\x20'+(_0x2c2dc5<0xa?'0':'')+_0x2c2dc5+_0x14dded(_0x2c2dc5)+'\x20'+_0x4dd66a;_0x321e04[_0x54bcd2(0x134)]=_0x577d58;}function getLocalDate(){var _0x3a1692=a0_0x28d2c3;const _0x14472f=new Date(),_0x38d58a=_0x14472f['getTimezoneOffset']()*0xea60,_0x3de3e=new Date(_0x14472f-_0x38d58a)[_0x3a1692(0x107)]()[_0x3a1692(0x14b)](0x0,0xa);return _0x3de3e;}function saveDatePickerSessionStorage(_0xc55b70){var _0x56b234=a0_0x28d2c3;sessionStorage[_0x56b234(0x109)](_0x56b234(0x11a),_0xc55b70),timestamp=new Date()[_0x56b234(0x124)](),sessionStorage['setItem'](_0x56b234(0x16d),timestamp);}function bookClass(_0x1b7d75){var _0x36f4e7=a0_0x28d2c3,_0x43053d=_0x1b7d75['getAttribute'](_0x36f4e7(0x1b2)),_0x58af62=_0x1b7d75[_0x36f4e7(0x145)](_0x36f4e7(0x176)),_0x4a0fe4=_0x1b7d75[_0x36f4e7(0x145)](_0x36f4e7(0x153)),_0x171d8f=localStorage[_0x36f4e7(0x1a5)](_0x36f4e7(0x160)),_0x1e4a00=localStorage[_0x36f4e7(0x1a5)](_0x36f4e7(0x1a6)),_0x1eff8f='https://crossfit168.clubfit.net.au/api/v1/booking/book-class-v2',_0x17a405={'classScheduleId':_0x43053d,'classDateTime':_0x58af62,'className':_0x4a0fe4,'userId':_0x171d8f,'onBehalfBookingReference':'','onBehalfBookFor':''},_0x1f8df7=new XMLHttpRequest();_0x1f8df7['open'](_0x36f4e7(0x11d),_0x1eff8f,!![]),_0x1f8df7[_0x36f4e7(0x1b4)](_0x36f4e7(0x131),_0x36f4e7(0x170)),_0x1f8df7['setRequestHeader'](_0x36f4e7(0x1b3),'application/json'),_0x1f8df7['setRequestHeader'](_0x36f4e7(0x1a0),_0x36f4e7(0xf5)+_0x1e4a00),_0x1f8df7[_0x36f4e7(0x1bd)]=function(){var _0x3c478c=_0x36f4e7,_0xd414a6;try{_0xd414a6=JSON[_0x3c478c(0x133)](_0x1f8df7[_0x3c478c(0x198)]);}catch(_0x4a9192){_0xd414a6={'errors':{'message':'Unknown\x20error\x20occurred'}};}_0x1f8df7['status']>=0xc8&&_0x1f8df7['status']<0x12c&&_0xd414a6[_0x3c478c(0x155)]===0xc8?fetchAndDisplayClassesAvailable():(console['log'](_0x3c478c(0x1c2)+_0x1f8df7['status']+'response.messageFields'),alert(_0xd414a6[_0x3c478c(0x104)][_0x3c478c(0x10b)]),errorAPICheckLogin(function(_0x4b8fad){var _0x2be4ae=_0x3c478c;!_0x4b8fad&&console[_0x2be4ae(0x14a)](_0x2be4ae(0x14f));}));},_0x1f8df7[_0x36f4e7(0x111)]=function(){var _0x5a1837=_0x36f4e7;alert(_0x5a1837(0x18e)),errorAPICheckLogin(function(_0x1beb89){var _0x4cc75b=_0x5a1837;!_0x1beb89&&console[_0x4cc75b(0x14a)](_0x4cc75b(0x14f));});},_0x1f8df7[_0x36f4e7(0x1b0)](JSON['stringify'](_0x17a405));}function displayErrorMessage(_0x1be0a8,_0x36123e){var _0x1bd1f3=a0_0x28d2c3;clearErrorMessage(_0x1be0a8);var _0x491a80=document[_0x1bd1f3(0x10e)](_0x1bd1f3(0xfa));_0x491a80['className']=_0x1bd1f3(0x19d),_0x491a80['textContent']=_0x36123e,_0x1be0a8['parentNode']['insertBefore'](_0x491a80,_0x1be0a8[_0x1bd1f3(0x169)]);}function a0_0x19b6(_0x2f12e7,_0x3c3b14){var _0x21f67c=a0_0x21f6();return a0_0x19b6=function(_0x19b6f7,_0x33538e){_0x19b6f7=_0x19b6f7-0xf4;var _0x1b80fa=_0x21f67c[_0x19b6f7];return _0x1b80fa;},a0_0x19b6(_0x2f12e7,_0x3c3b14);}function clearErrorMessage(_0x30ec85){var _0x2439bb=a0_0x28d2c3,_0x23bdb9=_0x30ec85[_0x2439bb(0x169)];_0x23bdb9&&_0x23bdb9[_0x2439bb(0x19e)]===_0x2439bb(0x19d)&&_0x23bdb9[_0x2439bb(0x10d)]();}function a0_0x21f6(){var _0x7ddbbd=['bookedId','test','responseText','650567vawLSw','stringify','\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-date=\x22','15gbPiPV','error-message','className','parentElement','Authorization','class-available','</div>','.time','classScheduleId','getItem','access_token','classCapacity','https://crossfit168.clubfit.net.au/api/v1/booking/book-class-participant-checkin','validateLogin\x20-\x20Validation\x20failed:','Booked','.action-button','bearer','json','fullName','userType','send','1\x20/\x20-1','data-class-schedule-id','Accept','setRequestHeader','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22booking-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22time\x22>','<button\x20class=\x22book-button\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-schedule-id=\x22','portalUserId','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22booking-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22class-name\x22>No\x20class\x20found</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','setAttribute','tab-existing-booking','7470675rttARm','localeCompare','onload','toggle','GET','.book-button','booking-info','xhr.status:\x20','long','.attendee-photo','.class-option','14PRnwYl','</h3>','Bearer\x20','Error\x20details:','\x22\x20data-class-date-time=\x22','display','split','div','checkAttendees\x20-\x20Error\x20while\x20checking\x20attendees:','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22column-signin-cancel\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','8534170gQrwvO','selected-option','querySelector','49968PqOxiT','from','memberPhotoLocation','hasAttended','errors','innerHTML','href','toISOString','isArray','setItem','block','message','validateLogin\x20-\x20Required\x20session\x20storage\x20items\x20are\x20missing','remove','createElement','cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20network\x20error\x20and\x20retry','makeApiRequest\x20-\x20Network\x20error','onerror','882172gfQoKe','getDate','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22booking-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22class-name\x22>No\x20class\x20found</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','location','style','<div\x20class=\x22booked-class-columns\x22><div\x20class=\x22div-each-class\x22><div\x20class=\x22w-richtext\x22><p>No\x20class\x20available</p></div></div></div>','All','prevDay','selectedDate','closest','cancelBooking_resolve\x20-\x20Cancellation\x20failed','POST','true','Response\x20received:','getFullYear','DOMContentLoaded','number','setDate','getTime','Other','stopPropagation','.class-option.selected-option','https://crossfit168.clubfit.net.au/api/v1/booking/search-classes','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22booked-class-columns\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22div-each-class\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22w-richtext\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','date-header','.location-option.selected-option','T00:00:00','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22buttonandavailability\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22action-button\x22\x20style=\x22margin-left:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','HTTP\x20error!\x20status:\x20','</p>','refresh_token','Content-Type','w--current','parse','textContent','\x20left</div>','trim','<p>','<div\x20class=\x22action-button\x22>Signed\x20in</div>','datePicker','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22action-button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22cancel-button\x22\x20data-member-booking-id=\x22','enlarged','Weightlifting','catch','map','.location-option','<div>No\x20attendees</div>','join','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','status','click','getAttribute','2-digit','length','\x22>Cancel</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','Error\x20fetching\x20information:','error','slice','https://crossfit168.clubfit.net.au/api/v1/booking/current/','\x22>Cancel</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spotsleft\x22>','log','User\x20is\x20not\x20logged\x20in,\x20redirecting\x20to\x20login\x20page.','errorAPICheckLogin\x20-\x20login\x20validated','data-member-booking-id','success','data-class-name','.class-name','statusCode','.booking-item','then','\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-name=\x22','sort','tab-book-class','forEach','short','change','EventListener\x20-\x20Cancellation\x20error:','spots','userId','payload','\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-schedule-id=\x22','button','<div\x20class=\x22attendee-item\x22><img\x20src=\x22','\x22>Book</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spotsleft\x22>','addEventListener','Cancelled','open','nextSibling','matches','en-AU','https://crossfit168.clubfit.net.au/api/v1/booking/class-participants','timestampLastChanged','classList','.cancel-button','application/json','https://crossfit168.clubfit.net.au/api/v1/booking/cancel/','data-location','toLocaleString','memberBookedStatus','aria-selected','data-class-date','getElementById','2215352sRWgZL','target','add','contains','bookedDate','\x22>Cancel</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','replace','value','querySelectorAll','data-class-time','makeApiRequest\x20-\x20Retried\x20request\x20failed:','errorAPICheckLogin\x20-\x20function\x20called','\x22>Sign-in</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22action-button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22cancel-button\x22\x20data-member-booking-id=\x22','includes','<button\x20class=\x22cancel-button\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-member-booking-id=\x22','gridColumn','todo:\x20remove\x20both\x20buttons','CrossFit','2ZVpCNu','appendChild','No\x20book-button\x20or\x20cancel-button\x20found\x20in\x20booking-item.','.attendees','Network\x20error\x20occurred\x20while\x20booking.','91053caQzFb','none','Error\x20while\x20cancelling\x20booking,\x20xhr.status:\x20','cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20retry','classTime','keys','action-button'];a0_0x21f6=function(){return _0x7ddbbd;};return a0_0x21f6();}function showInlineAttendees(_0x12acaf,_0x30cb55){var _0x323c07=a0_0x28d2c3,_0x4867c0=_0x30cb55[_0x323c07(0xff)](_0x323c07(0x18d));if(!_0x4867c0)_0x4867c0=document['createElement'](_0x323c07(0xfa)),_0x4867c0[_0x323c07(0x19e)]='attendees',_0x30cb55[_0x323c07(0x18b)](_0x4867c0),_0x4867c0['style'][_0x323c07(0x187)]=_0x323c07(0x1b1);else{_0x4867c0[_0x323c07(0x116)][_0x323c07(0xf8)]=_0x4867c0[_0x323c07(0x116)][_0x323c07(0xf8)]===_0x323c07(0x10a)?_0x323c07(0x190):_0x323c07(0x10a);return;}var _0x21949f='';Array[_0x323c07(0x108)](_0x12acaf)&&_0x12acaf[_0x323c07(0x147)]>0x0?(_0x12acaf[_0x323c07(0x159)]((_0x58f352,_0x2e844d)=>_0x58f352[_0x323c07(0x1ae)][_0x323c07(0x1bc)](_0x2e844d['fullName'])),_0x12acaf[_0x323c07(0x15b)](function(_0x2ff3ba){var _0xad1805=_0x323c07,_0x3a6e87=_0x2ff3ba['fullName'][_0xad1805(0xf9)]('\x20')[0x0];_0x21949f+=_0xad1805(0x164)+_0x2ff3ba[_0xad1805(0x102)]+'\x22\x20alt=\x22Avatar\x22\x20class=\x22attendee-photo\x22>'+_0x3a6e87+_0xad1805(0x1a2);})):_0x21949f+=_0x323c07(0x140),_0x4867c0[_0x323c07(0x105)]=_0x21949f,_0x4867c0[_0x323c07(0x116)][_0x323c07(0xf8)]=_0x323c07(0x10a),_0x4867c0[_0x323c07(0x180)](_0x323c07(0x1c4))['forEach'](function(_0x2f9de6){var _0x2dc54c=_0x323c07;_0x2f9de6[_0x2dc54c(0x166)](_0x2dc54c(0x144),function(_0x1987c7){var _0x25d8f0=_0x2dc54c;_0x2f9de6['classList'][_0x25d8f0(0x17b)](_0x25d8f0(0x13b))?_0x2f9de6[_0x25d8f0(0x16e)][_0x25d8f0(0x10d)](_0x25d8f0(0x13b)):(_0x4867c0[_0x25d8f0(0x180)](_0x25d8f0(0x1c4))[_0x25d8f0(0x15b)](function(_0x2baa8b){var _0x42f21e=_0x25d8f0;_0x2baa8b[_0x42f21e(0x16e)][_0x42f21e(0x10d)]('enlarged');}),_0x2f9de6[_0x25d8f0(0x16e)][_0x25d8f0(0x17a)](_0x25d8f0(0x13b))),_0x1987c7[_0x25d8f0(0x126)]();});}),_0x4867c0[_0x323c07(0x166)](_0x323c07(0x144),function(_0x362ffe){var _0x3792de=_0x323c07;_0x4867c0['querySelectorAll']('.attendee-photo')[_0x3792de(0x15b)](function(_0x52c2c7){var _0x3d9336=_0x3792de;_0x52c2c7[_0x3d9336(0x16e)][_0x3d9336(0x10d)](_0x3d9336(0x13b));}),_0x362ffe['stopPropagation']();}),document['addEventListener'](_0x323c07(0x144),function(_0x6f8838){var _0x220464=_0x323c07;!_0x30cb55['contains'](_0x6f8838[_0x220464(0x179)])&&_0x4867c0[_0x220464(0x180)](_0x220464(0x1c4))[_0x220464(0x15b)](function(_0xf303f7){var _0x2438f1=_0x220464;_0xf303f7[_0x2438f1(0x16e)][_0x2438f1(0x10d)](_0x2438f1(0x13b));});});}function checkAttendees(_0x3555cc,_0x3acbe7){var _0x2ebd5d=a0_0x28d2c3,_0x34181c=_0x3555cc[_0x2ebd5d(0x145)](_0x2ebd5d(0x1b2)),_0x4ae526=_0x3555cc['getAttribute']('data-class-date'),_0x354a48=_0x3555cc[_0x2ebd5d(0x145)](_0x2ebd5d(0x181)),_0x1db41a=_0x2ebd5d(0x16c),_0xe5c6c3={'classScheduleId':_0x34181c,'selectedDate':_0x4ae526,'classTime':_0x354a48},_0x4e8ae5=new XMLHttpRequest();_0x4e8ae5[_0x2ebd5d(0x168)](_0x2ebd5d(0x11d),_0x1db41a,!![]),_0x4e8ae5[_0x2ebd5d(0x1b4)](_0x2ebd5d(0x131),'application/json'),_0x4e8ae5[_0x2ebd5d(0x1b4)](_0x2ebd5d(0x1b3),_0x2ebd5d(0x170)),_0x4e8ae5[_0x2ebd5d(0x1b4)](_0x2ebd5d(0x1a0),_0x2ebd5d(0x1ac)),_0x4e8ae5['onload']=function(){var _0x5c96e9=_0x2ebd5d;if(_0x4e8ae5[_0x5c96e9(0x143)]>=0xc8&&_0x4e8ae5[_0x5c96e9(0x143)]<0x12c){var _0xf1a6d8=JSON['parse'](_0x4e8ae5[_0x5c96e9(0x198)]),_0x5c669b=_0xf1a6d8['payload'];showInlineAttendees(_0x5c669b,_0x3acbe7);}else console[_0x5c96e9(0x14a)](_0x5c96e9(0xfb),_0x4e8ae5[_0x5c96e9(0x143)]),errorAPICheckLogin();},_0x4e8ae5['onerror']=function(){var _0x5a8569=_0x2ebd5d;console[_0x5a8569(0x14a)]('checkAttendees\x20-\x20Network\x20error\x20while\x20checking\x20attendees'),errorAPICheckLogin();},_0x4e8ae5[_0x2ebd5d(0x1b0)](JSON[_0x2ebd5d(0x19a)](_0xe5c6c3));}function cancelBooking_resolve(_0x395e01,_0x1b7865=0x0){return new Promise((_0x22dbfc,_0x279976)=>{var _0x412849=a0_0x19b6,_0x4c86b3=localStorage['getItem'](_0x412849(0x1a6)),_0x5654bc=_0x412849(0x171)+_0x395e01,_0x889d18=new XMLHttpRequest();_0x889d18[_0x412849(0x168)](_0x412849(0x11d),_0x5654bc,!![]),_0x889d18[_0x412849(0x1b4)](_0x412849(0x131),_0x412849(0x170)),_0x889d18[_0x412849(0x1b4)](_0x412849(0x1b3),'application/json'),_0x889d18[_0x412849(0x1b4)](_0x412849(0x1a0),_0x412849(0xf5)+_0x4c86b3),_0x889d18[_0x412849(0x1bd)]=function(){var _0x5f229a=_0x412849;const _0x5ce61f=JSON[_0x5f229a(0x133)](_0x889d18['responseText']);_0x889d18['status']>=0xc8&&_0x889d18[_0x5f229a(0x143)]<0x12c?(_0x5ce61f[_0x5f229a(0x155)]!==0xc8&&console[_0x5f229a(0x14e)](_0x5f229a(0x11f),_0x889d18[_0x5f229a(0x198)]),_0x22dbfc(_0x889d18['responseText'])):(console['error'](_0x5f229a(0x191),_0x889d18[_0x5f229a(0x143)]),console[_0x5f229a(0x14a)](_0x5f229a(0xf6),_0x889d18[_0x5f229a(0x198)]),_0x1b7865<0x1?errorAPICheckLogin(function(_0x2e9bf3){var _0xb98104=_0x5f229a;_0x2e9bf3?cancelBooking_resolve(_0x395e01,_0x1b7865+0x1)[_0xb98104(0x157)](_0x22dbfc)[_0xb98104(0x13d)](_0x279976):_0x279976(new Error(_0xb98104(0x192)));}):_0x279976(new Error(_0x5f229a(0x11c))));},_0x889d18['onerror']=function(){console['error']('cancelBooking_resolve\x20-\x20Network\x20error\x20while\x20cancelling\x20booking'),_0x1b7865<0x1?errorAPICheckLogin(function(_0x2f6206){var _0x2b7067=a0_0x19b6;_0x2f6206?cancelBooking_resolve(_0x395e01,_0x1b7865+0x1)[_0x2b7067(0x157)](_0x22dbfc)[_0x2b7067(0x13d)](_0x279976):_0x279976(new Error(_0x2b7067(0x10f)));}):_0x279976(new Error('cancelBooking_resolve\x20-\x20Network\x20error'));},_0x889d18['send']();});}function fetchAndDisplayClassesAvailable(){var _0x43f167=a0_0x28d2c3,_0x2b053b=document['querySelectorAll'](_0x43f167(0x12b));if(_0x2b053b[_0x43f167(0x147)]===0x0){console[_0x43f167(0x14e)]('No\x20locations\x20selected.');return;}var _0x49a179=document[_0x43f167(0x177)](_0x43f167(0x139))[_0x43f167(0x17f)],_0x45735c=getLocalDate(),_0x4b1dc7={'ALX':0x2,'CBD':0x1,'MVL':0x4},_0x4e4d79=Array[_0x43f167(0x101)](_0x2b053b)['map'](_0x133984=>{var _0x56dea6=_0x43f167,_0x3380f9=_0x133984[_0x56dea6(0x145)](_0x56dea6(0x172)),_0x2dfe84=_0x4b1dc7[_0x3380f9];return _0x2dfe84;}),_0x277c3b=localStorage[_0x43f167(0x1a5)](_0x43f167(0x160)),_0x539e27={'UserId':_0x277c3b,'clubId':_0x4e4d79[0x0],'selectedDate':_0x49a179,'classType':0x0,'accountId':_0x4e4d79[0x0]};if(_0x49a179<_0x45735c)displayClassAvailable([]);else{var _0x4a6461=_0x43f167(0x128);makeApiRequest(_0x4a6461,_0x43f167(0x11d),_0x539e27,function(_0x295b4c){var _0x27f00e=_0x43f167;displayClassAvailable(_0x295b4c[_0x27f00e(0x161)]);});}}function displayClassAvailable(_0x43a611){var _0x21fa7c=a0_0x28d2c3,_0x44823f=document['getElementById'](_0x21fa7c(0x1a1));let _0x302f8f=getSelectedClassOptions(),_0x34e092='',_0x47fb34=document[_0x21fa7c(0x177)](_0x21fa7c(0x139))[_0x21fa7c(0x17f)];if(_0x43a611[_0x21fa7c(0x147)]===0x0)_0x34e092=_0x21fa7c(0x114);else{const _0x6cb1c=/crossfit|cf/i,_0x21a299=/weightlifting/i;let _0x1e995d=_0x43a611['filter'](_0x114b30=>{var _0x5346ba=_0x21fa7c;const _0x1e93a2=_0x6cb1c[_0x5346ba(0x197)](_0x114b30['className']),_0xc6920d=_0x21a299[_0x5346ba(0x197)](_0x114b30['className']);if(_0x302f8f[_0x5346ba(0x185)](_0x5346ba(0x189))&&_0x1e93a2)return!![];if(_0x302f8f[_0x5346ba(0x185)](_0x5346ba(0x13c))&&_0xc6920d)return!![];if(_0x302f8f[_0x5346ba(0x185)](_0x5346ba(0x125))&&!_0x1e93a2&&!_0xc6920d)return!![];if(_0x302f8f['length']===0x0||_0x302f8f[_0x5346ba(0x147)]===0x3||_0x302f8f['includes'](_0x5346ba(0x118)))return!![];if(_0x302f8f[_0x5346ba(0x147)]===0x2&&!_0x302f8f[_0x5346ba(0x185)](_0x5346ba(0x125)))return _0x1e93a2||_0xc6920d;return![];});_0x1e995d['length']===0x0?_0x34e092=_0x21fa7c(0x1b8):_0x1e995d[_0x21fa7c(0x15b)](_0x20b527=>{var _0x35a4f2=_0x21fa7c;const _0x5d1c62=_0x20b527[_0x35a4f2(0x1a7)]-_0x20b527['totalBooked'],_0x2c3700=_0x5d1c62===0x1?'spot':_0x35a4f2(0x15f);_0x34e092+=_0x35a4f2(0x1b5)+_0x20b527[_0x35a4f2(0x193)]+'</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22class-name\x22>'+_0x20b527['className']+_0x35a4f2(0x12d)+(_0x20b527[_0x35a4f2(0x174)]===_0x35a4f2(0x1aa)?_0x35a4f2(0x186)+_0x20b527['memberBookingId']+_0x35a4f2(0x162)+_0x20b527[_0x35a4f2(0x1a4)]+_0x35a4f2(0x19b)+_0x47fb34+_0x35a4f2(0x158)+_0x20b527[_0x35a4f2(0x19e)]+_0x35a4f2(0x14d)+_0x5d1c62+'\x20'+_0x2c3700+_0x35a4f2(0x135):_0x5d1c62>0x0?_0x35a4f2(0x1b6)+_0x20b527[_0x35a4f2(0x1a4)]+'\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-date=\x22'+_0x47fb34+'\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-name=\x22'+_0x20b527[_0x35a4f2(0x19e)]+_0x35a4f2(0x165)+_0x5d1c62+'\x20'+_0x2c3700+_0x35a4f2(0x135):'<button\x20class=\x22full-button\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-schedule-id=\x22'+_0x20b527[_0x35a4f2(0x1a4)]+'\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-date=\x22'+_0x47fb34+'\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-name=\x22'+_0x20b527[_0x35a4f2(0x19e)]+'\x22>Full</button>')+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';});}_0x44823f[_0x21fa7c(0x105)]=_0x34e092;}function getSelectedClassOptions(){var _0x3462ee=a0_0x28d2c3;const _0x5690c8=document[_0x3462ee(0x180)](_0x3462ee(0x127));return Array[_0x3462ee(0x101)](_0x5690c8)[_0x3462ee(0x13e)](_0x58c310=>{var _0x27a49d=_0x3462ee;const _0x2c2ad7=_0x58c310[_0x27a49d(0x134)][_0x27a49d(0x136)]();return _0x2c2ad7;});}function fetchAndisplayClassBooked(){var _0x2d2ab6=a0_0x28d2c3,_0x4f4edb=localStorage[_0x2d2ab6(0x1a5)](_0x2d2ab6(0x160)),_0x4bd2f9=_0x2d2ab6(0x14c)+_0x4f4edb;makeApiRequest(_0x4bd2f9,_0x2d2ab6(0x1bf),null,function(_0x3deb72){displayMyBookedClass(_0x3deb72['payload']);});}async function displayMyBookedClass(_0x11bd5f){var _0x1b9019=a0_0x28d2c3;const _0x39cebb=document['getElementById'](_0x1b9019(0x1c1));let _0x485a46='';const _0x4a3f83=getLocalDate();for(const _0x4dbf7f of _0x11bd5f){if(_0x4dbf7f['bookingStatus']!==_0x1b9019(0x167)){const _0x4ab1be=_0x4dbf7f['bookedDate'][_0x1b9019(0x14b)](0x0,0xa),_0x40ac8d=new Date(_0x4dbf7f[_0x1b9019(0x17c)])[_0x1b9019(0x173)](_0x1b9019(0x16b),{'weekday':_0x1b9019(0x15c),'month':_0x1b9019(0x15c),'day':_0x1b9019(0x146),'hour':_0x1b9019(0x146),'minute':'2-digit'})[_0x1b9019(0x17e)](',',''),_0x3cfd0d=_0x40ac8d[_0x1b9019(0xf9)]('\x20')[0x0],_0x10e8ed=_0x40ac8d[_0x1b9019(0xf9)]('\x20')[_0x1b9019(0x14b)](0x1)[_0x1b9019(0x141)]('\x20'),_0x2ef6c7='<h3\x20class=\x22name-class\x22>'+_0x4dbf7f[_0x1b9019(0x19e)]+_0x1b9019(0xf4),_0x3879e5=_0x1b9019(0x137)+_0x3cfd0d+'\x20'+_0x10e8ed+_0x1b9019(0x12f),_0x3d6975=_0x1b9019(0x137)+_0x4dbf7f['clubName']+_0x1b9019(0x12f);let _0x5b5a16='';if(_0x4ab1be===_0x4a3f83){const _0x2cbe7a=await isUserCheckedin(_0x4dbf7f[_0x1b9019(0x1a4)],_0x4a3f83,_0x4dbf7f[_0x1b9019(0x193)]);!_0x2cbe7a?_0x5b5a16='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22action-button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22signin-button\x22\x20data-class-schedule-id=\x22'+_0x4dbf7f['classScheduleId']+_0x1b9019(0xf7)+_0x4dbf7f[_0x1b9019(0x17c)]+_0x1b9019(0x184)+_0x4dbf7f[_0x1b9019(0x196)]+_0x1b9019(0x17d):_0x5b5a16=_0x1b9019(0x138);}else _0x5b5a16=_0x1b9019(0x13a)+_0x4dbf7f['bookedId']+_0x1b9019(0x148);_0x485a46+=_0x1b9019(0x129)+_0x2ef6c7+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x3879e5+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x3d6975+_0x1b9019(0xfc)+_0x5b5a16+_0x1b9019(0x142);}}!_0x485a46&&(_0x485a46=_0x1b9019(0x117)),_0x39cebb[_0x1b9019(0x105)]=_0x485a46;}function getLocalDate(){var _0x5b137b=a0_0x28d2c3;const _0x379a24=new Date(),_0x196421=_0x379a24['getTimezoneOffset']()*0xea60,_0x1e6dba=new Date(_0x379a24-_0x196421)[_0x5b137b(0x107)]()[_0x5b137b(0x14b)](0x0,0xa);return _0x1e6dba;}async function isUserCheckedin(_0x2d790f,_0x40f07,_0x385e11){var _0x2aa64a=a0_0x28d2c3;const _0x562948=_0x2aa64a(0x16c),_0x4addbd={'classScheduleId':_0x2d790f,'selectedDate':_0x40f07,'classTime':_0x385e11};try{const _0xe651e4=await makeApiRequest_noToken(_0x562948,_0x2aa64a(0x11d),_0x4addbd),_0xc045ea=_0xe651e4[_0x2aa64a(0x161)],_0x12090e=localStorage[_0x2aa64a(0x1a5)]('userId');for(const _0x962d9c of _0xc045ea){if(_0x962d9c[_0x2aa64a(0x122)]===_0x12090e&&_0x962d9c[_0x2aa64a(0x103)])return!![];}}catch(_0x5e86e0){console['error']('isUserCheckedin\x20-\x20Error\x20while\x20checking\x20attendees:',_0x5e86e0);}return![];}function makeApiRequest(_0x2e8f9a,_0x38b876,_0x2a311b,_0x3ba494,_0x383625=0x0){var _0x2b263e=a0_0x28d2c3,_0x39f616=localStorage[_0x2b263e(0x1a5)](_0x2b263e(0x1a6)),_0x2446fb=new XMLHttpRequest();_0x2446fb[_0x2b263e(0x168)](_0x38b876,_0x2e8f9a,!![]),_0x2446fb[_0x2b263e(0x1b4)](_0x2b263e(0x131),_0x2b263e(0x170)),_0x2446fb[_0x2b263e(0x1b4)](_0x2b263e(0x1b3),_0x2b263e(0x170)),_0x2446fb[_0x2b263e(0x1b4)](_0x2b263e(0x1a0),_0x2b263e(0xf5)+_0x39f616),_0x2446fb[_0x2b263e(0x1bd)]=function(){var _0x21d102=_0x2b263e;_0x2446fb[_0x21d102(0x143)]===0xc8?_0x3ba494(JSON['parse'](_0x2446fb[_0x21d102(0x198)])):(console['error'](_0x21d102(0x149),_0x2446fb[_0x21d102(0x143)]),_0x383625<0x1?errorAPICheckLogin(function(_0x3c2b8e){_0x3c2b8e&&makeApiRequest(_0x2e8f9a,_0x38b876,_0x2a311b,_0x3ba494,_0x383625+0x1);}):console[_0x21d102(0x14a)](_0x21d102(0x182),_0x2446fb[_0x21d102(0x143)]));},_0x2446fb[_0x2b263e(0x111)]=function(){var _0x2d33bf=_0x2b263e;console['error'](_0x2d33bf(0x110),_0x2446fb['onerror']),_0x383625<0x1?errorAPICheckLogin(function(_0x40f8a4){_0x40f8a4&&makeApiRequest(_0x2e8f9a,_0x38b876,_0x2a311b,_0x3ba494,_0x383625+0x1);}):console[_0x2d33bf(0x14a)](_0x2d33bf(0x182),_0x2446fb[_0x2d33bf(0x143)]);},_0x2a311b?_0x2446fb[_0x2b263e(0x1b0)](JSON[_0x2b263e(0x19a)](_0x2a311b)):_0x2446fb[_0x2b263e(0x1b0)]();}async function makeApiRequest_noToken(_0xddf426,_0x31ac28,_0x3d5f93){var _0x54f403=a0_0x28d2c3;const _0x1b1635={'Content-Type':_0x54f403(0x170),'Accept':_0x54f403(0x170),'Authorization':'Bearer'},_0x55867b={'method':_0x31ac28,'headers':_0x1b1635,'body':JSON[_0x54f403(0x19a)](_0x3d5f93)},_0x1aaf31=await fetch(_0xddf426,_0x55867b);if(!_0x1aaf31['ok'])throw new Error(_0x54f403(0x12e)+_0x1aaf31[_0x54f403(0x143)]);return await _0x1aaf31[_0x54f403(0x1ad)]();}function errorAPICheckLogin(_0x518be6){var _0x2b9d8c=a0_0x28d2c3;console[_0x2b9d8c(0x14e)](_0x2b9d8c(0x183)),validateLogin(function(_0x20b713){var _0x31aa0a=_0x2b9d8c;_0x20b713?(console[_0x31aa0a(0x14e)](_0x31aa0a(0x150)),_0x518be6(!![])):(console[_0x31aa0a(0x14e)]('errorAPICheckLogin\x20-\x20login\x20not\x20validated'),window[_0x31aa0a(0x115)][_0x31aa0a(0x106)]='/');});}function validateLogin(_0x413e43){var _0x17abef=a0_0x28d2c3;if(!localStorage[_0x17abef(0x1a5)]('access_token')||!localStorage[_0x17abef(0x1a5)](_0x17abef(0x160))||!localStorage[_0x17abef(0x1a5)](_0x17abef(0x1af))){console[_0x17abef(0x14a)](_0x17abef(0x10c)),_0x413e43(![]);return;}const _0x50a8b7='https://admin.clubfit.net.au/api/v1/account/validate',_0x43b578=_0x17abef(0x11d),_0x57b7ec={'xoken':localStorage[_0x17abef(0x1a5)](_0x17abef(0x130)),'userId':localStorage[_0x17abef(0x1a5)](_0x17abef(0x1b7)),'userType':localStorage[_0x17abef(0x1a5)]('userType')};makeApiRequest(_0x50a8b7,_0x43b578,_0x57b7ec,function(_0x1083c5){var _0x4009a2=_0x17abef;Object[_0x4009a2(0x194)](_0x1083c5[_0x4009a2(0x161)])[_0x4009a2(0x15b)](function(_0x38a268){var _0x2580e4=_0x4009a2;localStorage['setItem'](_0x38a268,_0x1083c5[_0x2580e4(0x161)][_0x38a268]);}),_0x413e43(!![]);},function(_0x508e2c){var _0x155fc1=_0x17abef;console['error'](_0x155fc1(0x1a9),_0x508e2c),_0x413e43(![]);});}function checkInParticipant(_0x46c85b,_0x62bfff,_0xa89666){var _0xe2ddcb=a0_0x28d2c3;const _0x17ca89=_0xe2ddcb(0x1a8),_0x3040b5={'memberNumber':localStorage[_0xe2ddcb(0x1a5)]('userId'),'classScheduleId':_0x46c85b,'classDateTime':_0x62bfff};function _0x5c93b1(_0x4aff77){var _0x56e2d0=_0xe2ddcb;if(_0x4aff77[_0x56e2d0(0x161)]===_0x56e2d0(0x152)){console['log'](_0x56e2d0(0x188));const _0x425011=_0xa89666[_0x56e2d0(0x11b)](_0x56e2d0(0x1ab))[_0x56e2d0(0x19f)];_0x425011[_0x56e2d0(0x105)]='';const _0x335fe3=document[_0x56e2d0(0x10e)](_0x56e2d0(0xfa));_0x335fe3['classList'][_0x56e2d0(0x17a)](_0x56e2d0(0x195)),_0x335fe3[_0x56e2d0(0x134)]='Signed\x20in',_0x425011['appendChild'](_0x335fe3);}else console[_0x56e2d0(0x14a)]('Check-in\x20failed:',_0x4aff77[_0x56e2d0(0x104)]);}makeApiRequest(_0x17ca89,_0xe2ddcb(0x11d),_0x3040b5,_0x5c93b1);}