var a0_0xa27205=a0_0x5ce7;(function(_0x580764,_0x1020e9){var _0x411b9d=a0_0x5ce7,_0x15a067=_0x580764();while(!![]){try{var _0x37c132=-parseInt(_0x411b9d(0x197))/0x1+-parseInt(_0x411b9d(0x1c3))/0x2+-parseInt(_0x411b9d(0x216))/0x3*(-parseInt(_0x411b9d(0x233))/0x4)+-parseInt(_0x411b9d(0x236))/0x5*(parseInt(_0x411b9d(0x1d4))/0x6)+-parseInt(_0x411b9d(0x1aa))/0x7*(parseInt(_0x411b9d(0x1d0))/0x8)+-parseInt(_0x411b9d(0x22a))/0x9+parseInt(_0x411b9d(0x1a3))/0xa*(parseInt(_0x411b9d(0x205))/0xb);if(_0x37c132===_0x1020e9)break;else _0x15a067['push'](_0x15a067['shift']());}catch(_0x32c10e){_0x15a067['push'](_0x15a067['shift']());}}}(a0_0x79d3,0x1a689),document[a0_0xa27205(0x1bd)](a0_0xa27205(0x169),function(){var _0x3cc5bf=a0_0xa27205;initDatePicker(),selectFirstTab(),fetchAndisplayClassBooked(),updateHeaderDate(document[_0x3cc5bf(0x1dd)](_0x3cc5bf(0x188))[_0x3cc5bf(0x232)]);var _0x468ac8=document[_0x3cc5bf(0x1dd)](_0x3cc5bf(0x22b));_0x468ac8['addEventListener'](_0x3cc5bf(0x185),function(){fetchAndisplayClassBooked();});var _0x468ac8=document[_0x3cc5bf(0x1dd)]('tab-book-class');_0x468ac8['addEventListener']('click',function(){fetchAndDisplayClassesAvailable();});const _0x27a0a4=document[_0x3cc5bf(0x1dd)](_0x3cc5bf(0x188)),_0x18ab3f=document[_0x3cc5bf(0x1dd)]('prevDay'),_0x30026e=document[_0x3cc5bf(0x1dd)](_0x3cc5bf(0x1f9));_0x18ab3f['addEventListener']('click',function(){var _0x4408c8=_0x3cc5bf;_0x4e14e6(-0x1);var _0x355a9f=document[_0x4408c8(0x1dd)](_0x4408c8(0x188))[_0x4408c8(0x232)];saveDatePickerSessionStorage(_0x355a9f),updateHeaderDate(_0x355a9f),fetchAndDisplayClassesAvailable();}),_0x30026e['addEventListener'](_0x3cc5bf(0x185),function(){var _0x4554e1=_0x3cc5bf;_0x4e14e6(0x1);var _0x3bb797=document['getElementById'](_0x4554e1(0x188))[_0x4554e1(0x232)];saveDatePickerSessionStorage(_0x3bb797),updateHeaderDate(_0x3bb797),fetchAndDisplayClassesAvailable();}),_0x27a0a4[_0x3cc5bf(0x1bd)](_0x3cc5bf(0x20b),function(){var _0x47ef3d=_0x3cc5bf,_0x494911=document[_0x47ef3d(0x1dd)](_0x47ef3d(0x188))[_0x47ef3d(0x232)];saveDatePickerSessionStorage(_0x494911),updateHeaderDate(_0x494911),fetchAndDisplayClassesAvailable();});function _0x4e14e6(_0x230001){var _0x22c8ed=_0x3cc5bf;const _0x572814=new Date(_0x27a0a4['value']+'T00:00:00');_0x572814['setDate'](_0x572814[_0x22c8ed(0x18b)]()+_0x230001),_0x27a0a4[_0x22c8ed(0x232)]=formatDate(_0x572814);}var _0x110656=document[_0x3cc5bf(0x1dc)](_0x3cc5bf(0x212));_0x110656[_0x3cc5bf(0x1e5)](function(_0x1395e4){var _0x59cc40=_0x3cc5bf;_0x1395e4['addEventListener'](_0x59cc40(0x185),function(){var _0x4e3c72=_0x59cc40;_0x110656['forEach'](function(_0x371d81){var _0x4fe570=a0_0x5ce7;_0x371d81['classList'][_0x4fe570(0x21c)](_0x4fe570(0x1e2));}),this[_0x4e3c72(0x1cf)][_0x4e3c72(0x17f)](_0x4e3c72(0x1e2)),fetchAndDisplayClassesAvailable();});});var _0x2d37b9=document['querySelectorAll'](_0x3cc5bf(0x22f));_0x2d37b9[_0x3cc5bf(0x1e5)](function(_0x2199e9){var _0x165de7=_0x3cc5bf;_0x2199e9['addEventListener'](_0x165de7(0x185),function(){var _0x54aaa1=_0x165de7;this['classList']['toggle'](_0x54aaa1(0x1e2)),fetchAndDisplayClassesAvailable();});}),document[_0x3cc5bf(0x1dd)](_0x3cc5bf(0x177))[_0x3cc5bf(0x1bd)](_0x3cc5bf(0x185),function(_0x434b9e){var _0x51ba8f=_0x3cc5bf;if(_0x434b9e[_0x51ba8f(0x1b1)]&&_0x434b9e['target']['matches'](_0x51ba8f(0x1fe))){var _0x10e6a0=_0x434b9e['target'][_0x51ba8f(0x1ea)](_0x51ba8f(0x200));cancelBooking_resolve(_0x10e6a0)['then'](()=>{fetchAndDisplayClassesAvailable();})['catch'](_0x5d85a3=>{var _0x4ce3d0=_0x51ba8f;console['error'](_0x4ce3d0(0x22e),_0x5d85a3);});}else{if(_0x434b9e[_0x51ba8f(0x1b1)]&&_0x434b9e['target']['matches'](_0x51ba8f(0x20e)))bookClass(_0x434b9e[_0x51ba8f(0x1b1)]),fetchAndDisplayClassesAvailable();else{if(_0x434b9e['target']&&_0x434b9e['target'][_0x51ba8f(0x1c5)](_0x51ba8f(0x1fb))){var _0x42d49=_0x434b9e[_0x51ba8f(0x1b1)][_0x51ba8f(0x1c5)](_0x51ba8f(0x1fb));if(_0x434b9e[_0x51ba8f(0x1b1)][_0x51ba8f(0x1c5)](_0x51ba8f(0x1c2))){_0x42d49[_0x51ba8f(0x1dc)]('.attendee-photo')[_0x51ba8f(0x1e5)](function(_0x4bbfbd){var _0x170eaa=_0x51ba8f;_0x4bbfbd[_0x170eaa(0x1cf)][_0x170eaa(0x21c)](_0x170eaa(0x20d));});return;}var _0x15c65f=_0x42d49[_0x51ba8f(0x172)](_0x51ba8f(0x20e))||_0x42d49[_0x51ba8f(0x172)](_0x51ba8f(0x1fe))||_0x42d49[_0x51ba8f(0x172)](_0x51ba8f(0x202));if(_0x15c65f){var _0x51ac59=_0x15c65f[_0x51ba8f(0x1ea)]('data-class-schedule-id'),_0x442714=_0x15c65f[_0x51ba8f(0x1ea)](_0x51ba8f(0x17b)),_0x336a4c=_0x42d49[_0x51ba8f(0x172)](_0x51ba8f(0x16e))[_0x51ba8f(0x222)],_0x174d23=_0x42d49[_0x51ba8f(0x172)](_0x51ba8f(0x1e6))[_0x51ba8f(0x222)],_0x189cfa=document['createElement'](_0x51ba8f(0x1cd));_0x189cfa[_0x51ba8f(0x191)](_0x51ba8f(0x203),_0x51ac59),_0x189cfa['setAttribute'](_0x51ba8f(0x17b),_0x442714),_0x189cfa[_0x51ba8f(0x191)]('data-class-time',_0x336a4c),_0x189cfa[_0x51ba8f(0x191)](_0x51ba8f(0x17d),_0x174d23),checkAttendees(_0x189cfa,_0x42d49);}else console['error'](_0x51ba8f(0x1cc));}}}}),document[_0x3cc5bf(0x1dd)](_0x3cc5bf(0x1bb))[_0x3cc5bf(0x1bd)](_0x3cc5bf(0x185),function(_0x596db9){var _0x2447d8=_0x3cc5bf;if(_0x596db9['target']&&_0x596db9['target'][_0x2447d8(0x219)](_0x2447d8(0x1fe))){var _0x2af02a=_0x596db9[_0x2447d8(0x1b1)]['getAttribute']('data-member-booking-id');cancelBooking_resolve(_0x2af02a)[_0x2447d8(0x238)](()=>{fetchAndisplayClassBooked();})[_0x2447d8(0x20a)](_0x2569ec=>{var _0x241ee8=_0x2447d8;console['error'](_0x241ee8(0x22e),_0x2569ec);});}else{if(_0x596db9[_0x2447d8(0x1b1)]&&_0x596db9[_0x2447d8(0x1b1)]['matches'](_0x2447d8(0x213))){const _0x291eb5=_0x596db9['target'];var _0x26e615=_0x596db9['target']['getAttribute']('data-class-schedule-id'),_0x487961=_0x596db9[_0x2447d8(0x1b1)][_0x2447d8(0x1ea)](_0x2447d8(0x1a2));checkInParticipant(_0x26e615,_0x487961,_0x291eb5);}}});}));function initDatePicker(){var _0x4f1dfe=a0_0xa27205;const _0x1bd0e9=document['getElementById'](_0x4f1dfe(0x188));let _0x2358af=sessionStorage[_0x4f1dfe(0x208)](_0x4f1dfe(0x1b5)),_0x5c621b=sessionStorage[_0x4f1dfe(0x208)](_0x4f1dfe(0x19c));_0x2358af&&_0x5c621b&&isWithinValidityPeriod(_0x5c621b,0.5)?_0x1bd0e9[_0x4f1dfe(0x232)]=_0x2358af:(currentDate=getLocalDate(),_0x1bd0e9[_0x4f1dfe(0x232)]=currentDate,saveDatePickerSessionStorage(currentDate));}function a0_0x79d3(){var _0x1acb4c=['\x22>Sign-in</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22action-button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22cancel-button\x22\x20data-member-booking-id=\x22','<p>','\x22\x20alt=\x22Avatar\x22\x20class=\x22attendee-photo\x22>','timestampLastChanged','\x22>Cancel</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22action-button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22signin-button\x22\x20data-class-schedule-id=\x22','toLocaleString','isArray','parse','data-class-date-time','4504970YeXwbs','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22class-name\x22>','errorAPICheckLogin\x20-\x20function\x20called','Network\x20error\x20occurred\x20while\x20booking.','date-header','includes','cancelBooking_resolve\x20-\x20Network\x20error\x20while\x20cancelling\x20booking','21WzcVTQ','<button\x20class=\x22cancel-button\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-member-booking-id=\x22','status','stopPropagation','Check-in\x20failed:','</h3>','setItem','target','Accept','https://admin.clubfit.net.au/api/v1/account/validate','Other','selectedDate','attendees','getTime','message','parentElement','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22buttonandavailability\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22action-button\x22\x20style=\x22margin-left:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','booking-info','en-AU','addEventListener','aria-selected','Response\x20received:','refresh_token','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','.attendees','245806YPJWgg','sort','closest','\x22>Full</button>','fullName','block','statusCode','localeCompare','No\x20locations\x20selected.','No\x20book-button\x20or\x20cancel-button\x20found\x20in\x20booking-item.','button','Authorization','classList','169208QmZSVx','open','success','Content-Type','133968sULAzq','.attendee-photo','makeApiRequest\x20-\x20Retried\x20request\x20failed:','bookedDate','from','classScheduleId','xhr.status:\x20','clubName','querySelectorAll','getElementById','hasAttended','classTime','makeApiRequest\x20-\x20Network\x20error','GET','selected-option','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22booking-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22class-name\x22>No\x20class\x20found</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','join','forEach','.class-name','style','validateLogin\x20-\x20Required\x20session\x20storage\x20items\x20are\x20missing','w--current','getAttribute','error','spot','memberBookedStatus','responseText','Booked','checkAttendees\x20-\x20Network\x20error\x20while\x20checking\x20attendees','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22action-button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22cancel-button\x22\x20data-member-booking-id=\x22','number','\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-date=\x22','\x20left</div>','checkAttendees\x20-\x20Error\x20while\x20checking\x20attendees:','\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-name=\x22','trim','className','nextDay','</div>','.booking-item','Error\x20while\x20cancelling\x20booking,\x20xhr.status:\x20','false','.cancel-button','log','data-member-booking-id','gridColumn','.full-button','data-class-schedule-id','display','11TQvHdL','setRequestHeader','Weightlifting','getItem','long','catch','change','cancelBooking_resolve\x20-\x20Network\x20error','enlarged','.book-button','error-message','Bearer\x20','bookedId','.location-option','.signin-button','\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-date=\x22','POST','66slosfh','<div\x20class=\x22attendee-item\x22><img\x20src=\x22','2-digit','matches','https://crossfit168.clubfit.net.au/api/v1/booking/current/','<div\x20class=\x22action-button\x22>Signed\x20in</div>','remove','split','div','HTTP\x20error!\x20status:\x20','\x22>Cancel</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','getFullYear','textContent','send','insertBefore','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','<h3\x20class=\x22name-class\x22>','Error\x20details:','memberBookingId','map','1856583nLGPvq','tab-existing-booking','cancelBooking_resolve\x20-\x20Cancellation\x20failed','https://crossfit168.clubfit.net.au/api/v1/booking/class-participants','EventListener\x20-\x20Cancellation\x20error:','.class-option','data-class-time','https://crossfit168.clubfit.net.au/api/v1/booking/cancel/','value','37340MIdJqP','Element\x20with\x20id\x20\x27date-header\x27\x20not\x20found!','bookingStatus','20VjZanq','getTimezoneOffset','then','memberPhotoLocation','length','none','totalBooked','userId','DOMContentLoaded','1\x20/\x20-1','access_token','createElement','contains','.time','onerror','json','innerHTML','querySelector','userType','href','Error\x20fetching\x20information:','</p>','class-available','onload','filter','cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20retry','data-class-date','data-location','data-class-name','https://crossfit168.clubfit.net.au/api/v1/booking/book-class-v2','add','https://crossfit168.clubfit.net.au/api/v1/booking/search-classes','\x22>Cancel</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spotsleft\x22>','appendChild','stringify','slice','click','User\x20is\x20not\x20logged\x20in,\x20redirecting\x20to\x20login\x20page.','payload','datePicker','nextSibling','parentNode','getDate','errors','application/json','test','true','<div\x20class=\x22booked-class-columns\x22><div\x20class=\x22div-each-class\x22><div\x20class=\x22w-richtext\x22><p>No\x20class\x20available</p></div></div></div>','setAttribute','CrossFit','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22column-signin-cancel\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','.action-button','short','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','65743tNOlks','replace'];a0_0x79d3=function(){return _0x1acb4c;};return a0_0x79d3();}function selectFirstTab(){var _0xb5188d=a0_0xa27205,_0x2b18fb=document['getElementById']('tab-existing-booking'),_0x54ffbc=document['getElementById']('tab-book-class');_0x2b18fb['classList'][_0xb5188d(0x17f)](_0xb5188d(0x1e9)),_0x2b18fb[_0xb5188d(0x191)]('aria-selected',_0xb5188d(0x18f)),_0x54ffbc[_0xb5188d(0x1cf)][_0xb5188d(0x21c)](_0xb5188d(0x1e9)),_0x54ffbc['setAttribute'](_0xb5188d(0x1be),_0xb5188d(0x1fd));}function isWithinValidityPeriod(_0x4ebf4f,_0x423526){var _0x4d106a=a0_0xa27205;const _0x401549=new Date()[_0x4d106a(0x1b7)](),_0x41a48d=(_0x401549-_0x4ebf4f)/(0x3e8*0x3c*0x3c);return _0x41a48d<=_0x423526;}function formatDate(_0xbacea8){var _0x44ec42=a0_0xa27205;let _0x1d5c13=new Date(_0xbacea8),_0x3da01b=''+(_0x1d5c13['getMonth']()+0x1),_0x14936a=''+_0x1d5c13['getDate'](),_0x4facf2=_0x1d5c13[_0x44ec42(0x221)]();if(_0x3da01b['length']<0x2)_0x3da01b='0'+_0x3da01b;if(_0x14936a[_0x44ec42(0x165)]<0x2)_0x14936a='0'+_0x14936a;return[_0x4facf2,_0x3da01b,_0x14936a]['join']('-');}function updateHeaderDate(_0x1b9c68){var _0x4db439=a0_0xa27205;const _0x1bf9e8=document[_0x4db439(0x1dd)](_0x4db439(0x1a7));if(!_0x1bf9e8){console[_0x4db439(0x1eb)](_0x4db439(0x234));return;}const _0x3051ec=new Date(_0x1b9c68),_0x521e09=_0x3051ec[_0x4db439(0x18b)](),_0x3b1ca2=_0x3051ec['toLocaleString'](_0x4db439(0x1bc),{'month':_0x4db439(0x209)}),_0x5d21e7=_0x3051ec[_0x4db439(0x19f)](_0x4db439(0x1bc),{'weekday':_0x4db439(0x209)});function _0x1807f2(_0x599c07){if(_0x599c07>0x3&&_0x599c07<0x15)return'th';switch(_0x599c07%0xa){case 0x1:return'st';case 0x2:return'nd';case 0x3:return'rd';default:return'th';}}const _0x4df4ec=_0x5d21e7+'\x20'+(_0x521e09<0xa?'0':'')+_0x521e09+_0x1807f2(_0x521e09)+'\x20'+_0x3b1ca2;_0x1bf9e8[_0x4db439(0x222)]=_0x4df4ec;}function getLocalDate(){var _0x2f6ab6=a0_0xa27205;const _0x34626b=new Date(),_0x65f4=_0x34626b['getTimezoneOffset']()*0xea60,_0x259415=new Date(_0x34626b-_0x65f4)['toISOString']()[_0x2f6ab6(0x184)](0x0,0xa);return _0x259415;}function a0_0x5ce7(_0x486a71,_0x323141){var _0x79d3c9=a0_0x79d3();return a0_0x5ce7=function(_0x5ce76b,_0x558917){_0x5ce76b=_0x5ce76b-0x165;var _0x3a975a=_0x79d3c9[_0x5ce76b];return _0x3a975a;},a0_0x5ce7(_0x486a71,_0x323141);}function saveDatePickerSessionStorage(_0x446d32){var _0x4f4c4f=a0_0xa27205;sessionStorage['setItem'](_0x4f4c4f(0x1b5),_0x446d32),timestamp=new Date()[_0x4f4c4f(0x1b7)](),sessionStorage['setItem'](_0x4f4c4f(0x19c),timestamp);}function bookClass(_0x38887b){var _0x1f5d57=a0_0xa27205,_0x31d112=_0x38887b[_0x1f5d57(0x1ea)]('data-class-schedule-id'),_0x12bef1=_0x38887b['getAttribute'](_0x1f5d57(0x17b)),_0x47ae75=_0x38887b[_0x1f5d57(0x1ea)](_0x1f5d57(0x17d)),_0x3472e2=localStorage['getItem'](_0x1f5d57(0x168)),_0x54de6b=localStorage[_0x1f5d57(0x208)]('access_token'),_0x436b61=_0x1f5d57(0x17e),_0x5ca469={'classScheduleId':_0x31d112,'classDateTime':_0x12bef1,'className':_0x47ae75,'userId':_0x3472e2,'onBehalfBookingReference':'','onBehalfBookFor':''},_0xe605ba=new XMLHttpRequest();_0xe605ba[_0x1f5d57(0x1d1)](_0x1f5d57(0x215),_0x436b61,!![]),_0xe605ba[_0x1f5d57(0x206)]('Content-Type',_0x1f5d57(0x18d)),_0xe605ba[_0x1f5d57(0x206)]('Accept',_0x1f5d57(0x18d)),_0xe605ba[_0x1f5d57(0x206)](_0x1f5d57(0x1ce),_0x1f5d57(0x210)+_0x54de6b),_0xe605ba[_0x1f5d57(0x178)]=function(){var _0xbe6393=_0x1f5d57,_0x45183a;try{_0x45183a=JSON[_0xbe6393(0x1a1)](_0xe605ba['responseText']);}catch(_0x1578b6){_0x45183a={'errors':{'message':'Unknown\x20error\x20occurred'}};}_0xe605ba[_0xbe6393(0x1ac)]>=0xc8&&_0xe605ba[_0xbe6393(0x1ac)]<0x12c&&_0x45183a['statusCode']===0xc8?fetchAndDisplayClassesAvailable():(console[_0xbe6393(0x1ff)](_0xbe6393(0x1da)+_0xe605ba['status']+'response.messageFields'),alert(_0x45183a[_0xbe6393(0x18c)][_0xbe6393(0x1b8)]),errorAPICheckLogin(function(_0x5bfbd9){var _0x532fdf=_0xbe6393;!_0x5bfbd9&&console[_0x532fdf(0x1eb)](_0x532fdf(0x186));}));},_0xe605ba[_0x1f5d57(0x16f)]=function(){var _0x3df956=_0x1f5d57;alert(_0x3df956(0x1a6)),errorAPICheckLogin(function(_0x2daf3b){var _0x33a738=_0x3df956;!_0x2daf3b&&console[_0x33a738(0x1eb)](_0x33a738(0x186));});},_0xe605ba[_0x1f5d57(0x223)](JSON[_0x1f5d57(0x183)](_0x5ca469));}function displayErrorMessage(_0x4f913a,_0xcfefe5){var _0x10c5df=a0_0xa27205;clearErrorMessage(_0x4f913a);var _0x433766=document[_0x10c5df(0x16c)]('div');_0x433766[_0x10c5df(0x1f8)]=_0x10c5df(0x20f),_0x433766[_0x10c5df(0x222)]=_0xcfefe5,_0x4f913a[_0x10c5df(0x18a)][_0x10c5df(0x224)](_0x433766,_0x4f913a[_0x10c5df(0x189)]);}function clearErrorMessage(_0x5b5368){var _0x41265b=a0_0xa27205,_0x1f3f1f=_0x5b5368['nextSibling'];_0x1f3f1f&&_0x1f3f1f[_0x41265b(0x1f8)]===_0x41265b(0x20f)&&_0x1f3f1f['remove']();}function showInlineAttendees(_0x6582b9,_0x388bd7){var _0x409a9c=a0_0xa27205,_0x1d8d4d=_0x388bd7[_0x409a9c(0x172)]('.attendees');if(!_0x1d8d4d)_0x1d8d4d=document['createElement'](_0x409a9c(0x21e)),_0x1d8d4d[_0x409a9c(0x1f8)]=_0x409a9c(0x1b6),_0x388bd7[_0x409a9c(0x182)](_0x1d8d4d),_0x1d8d4d[_0x409a9c(0x1e7)][_0x409a9c(0x201)]=_0x409a9c(0x16a);else{_0x1d8d4d[_0x409a9c(0x1e7)][_0x409a9c(0x204)]=_0x1d8d4d[_0x409a9c(0x1e7)]['display']===_0x409a9c(0x1c8)?_0x409a9c(0x166):_0x409a9c(0x1c8);return;}var _0x171d63='';Array[_0x409a9c(0x1a0)](_0x6582b9)&&_0x6582b9['length']>0x0?(_0x6582b9[_0x409a9c(0x1c4)]((_0x19cb26,_0x2ea717)=>_0x19cb26[_0x409a9c(0x1c7)][_0x409a9c(0x1ca)](_0x2ea717['fullName'])),_0x6582b9[_0x409a9c(0x1e5)](function(_0xf66389){var _0x2644cc=_0x409a9c,_0x21f7f3=_0xf66389[_0x2644cc(0x1c7)][_0x2644cc(0x21d)]('\x20')[0x0];_0x171d63+=_0x2644cc(0x217)+_0xf66389[_0x2644cc(0x239)]+_0x2644cc(0x19b)+_0x21f7f3+_0x2644cc(0x1fa);})):_0x171d63+='<div>No\x20attendees</div>',_0x1d8d4d['innerHTML']=_0x171d63,_0x1d8d4d[_0x409a9c(0x1e7)][_0x409a9c(0x204)]=_0x409a9c(0x1c8),_0x1d8d4d[_0x409a9c(0x1dc)](_0x409a9c(0x1d5))[_0x409a9c(0x1e5)](function(_0x1287c0){var _0x2fe316=_0x409a9c;_0x1287c0[_0x2fe316(0x1bd)](_0x2fe316(0x185),function(_0x251467){var _0xfc8e6=_0x2fe316;_0x1287c0['classList']['contains'](_0xfc8e6(0x20d))?_0x1287c0[_0xfc8e6(0x1cf)][_0xfc8e6(0x21c)](_0xfc8e6(0x20d)):(_0x1d8d4d[_0xfc8e6(0x1dc)](_0xfc8e6(0x1d5))[_0xfc8e6(0x1e5)](function(_0x2cdd92){var _0x3cf44d=_0xfc8e6;_0x2cdd92[_0x3cf44d(0x1cf)][_0x3cf44d(0x21c)](_0x3cf44d(0x20d));}),_0x1287c0[_0xfc8e6(0x1cf)][_0xfc8e6(0x17f)]('enlarged')),_0x251467[_0xfc8e6(0x1ad)]();});}),_0x1d8d4d[_0x409a9c(0x1bd)]('click',function(_0x10ac54){var _0x62a299=_0x409a9c;_0x1d8d4d[_0x62a299(0x1dc)](_0x62a299(0x1d5))[_0x62a299(0x1e5)](function(_0x207cb8){var _0x169783=_0x62a299;_0x207cb8[_0x169783(0x1cf)][_0x169783(0x21c)](_0x169783(0x20d));}),_0x10ac54[_0x62a299(0x1ad)]();}),document['addEventListener'](_0x409a9c(0x185),function(_0x1aea35){var _0xab1ec2=_0x409a9c;!_0x388bd7[_0xab1ec2(0x16d)](_0x1aea35[_0xab1ec2(0x1b1)])&&_0x1d8d4d[_0xab1ec2(0x1dc)](_0xab1ec2(0x1d5))[_0xab1ec2(0x1e5)](function(_0x308bf1){var _0x17b909=_0xab1ec2;_0x308bf1[_0x17b909(0x1cf)][_0x17b909(0x21c)](_0x17b909(0x20d));});});}function checkAttendees(_0x410167,_0x50419d){var _0x3e0243=a0_0xa27205,_0x381f61=_0x410167[_0x3e0243(0x1ea)](_0x3e0243(0x203)),_0x4b2509=_0x410167[_0x3e0243(0x1ea)](_0x3e0243(0x17b)),_0x32dff0=_0x410167[_0x3e0243(0x1ea)](_0x3e0243(0x230)),_0x5d4535='https://crossfit168.clubfit.net.au/api/v1/booking/class-participants',_0x4099e6={'classScheduleId':_0x381f61,'selectedDate':_0x4b2509,'classTime':_0x32dff0},_0x111bd5=new XMLHttpRequest();_0x111bd5[_0x3e0243(0x1d1)](_0x3e0243(0x215),_0x5d4535,!![]),_0x111bd5[_0x3e0243(0x206)](_0x3e0243(0x1d3),_0x3e0243(0x18d)),_0x111bd5[_0x3e0243(0x206)](_0x3e0243(0x1b2),_0x3e0243(0x18d)),_0x111bd5[_0x3e0243(0x206)](_0x3e0243(0x1ce),'bearer'),_0x111bd5[_0x3e0243(0x178)]=function(){var _0x156397=_0x3e0243;if(_0x111bd5['status']>=0xc8&&_0x111bd5[_0x156397(0x1ac)]<0x12c){var _0x4c9659=JSON['parse'](_0x111bd5['responseText']),_0x1d88fd=_0x4c9659[_0x156397(0x187)];showInlineAttendees(_0x1d88fd,_0x50419d);}else console[_0x156397(0x1eb)](_0x156397(0x1f5),_0x111bd5[_0x156397(0x1ac)]),errorAPICheckLogin();},_0x111bd5[_0x3e0243(0x16f)]=function(){var _0x19b2c6=_0x3e0243;console[_0x19b2c6(0x1eb)](_0x19b2c6(0x1f0)),errorAPICheckLogin();},_0x111bd5[_0x3e0243(0x223)](JSON['stringify'](_0x4099e6));}function cancelBooking_resolve(_0x39fe4a,_0x4db344=0x0){return new Promise((_0x4b6240,_0x48f13e)=>{var _0x165050=a0_0x5ce7,_0x2090dd=localStorage[_0x165050(0x208)](_0x165050(0x16b)),_0x2428c9=_0x165050(0x231)+_0x39fe4a,_0x5cec8e=new XMLHttpRequest();_0x5cec8e['open'](_0x165050(0x215),_0x2428c9,!![]),_0x5cec8e[_0x165050(0x206)](_0x165050(0x1d3),_0x165050(0x18d)),_0x5cec8e['setRequestHeader']('Accept',_0x165050(0x18d)),_0x5cec8e['setRequestHeader'](_0x165050(0x1ce),_0x165050(0x210)+_0x2090dd),_0x5cec8e[_0x165050(0x178)]=function(){var _0x4cc687=_0x165050;const _0x43a389=JSON[_0x4cc687(0x1a1)](_0x5cec8e[_0x4cc687(0x1ee)]);_0x5cec8e[_0x4cc687(0x1ac)]>=0xc8&&_0x5cec8e['status']<0x12c?(_0x43a389[_0x4cc687(0x1c9)]!==0xc8&&console[_0x4cc687(0x1ff)](_0x4cc687(0x1bf),_0x5cec8e['responseText']),_0x4b6240(_0x5cec8e['responseText'])):(console[_0x4cc687(0x1eb)](_0x4cc687(0x1fc),_0x5cec8e[_0x4cc687(0x1ac)]),console[_0x4cc687(0x1eb)](_0x4cc687(0x227),_0x5cec8e['responseText']),_0x4db344<0x1?errorAPICheckLogin(function(_0x138bad){var _0x526d78=_0x4cc687;_0x138bad?cancelBooking_resolve(_0x39fe4a,_0x4db344+0x1)[_0x526d78(0x238)](_0x4b6240)[_0x526d78(0x20a)](_0x48f13e):_0x48f13e(new Error(_0x526d78(0x17a)));}):_0x48f13e(new Error(_0x4cc687(0x22c))));},_0x5cec8e[_0x165050(0x16f)]=function(){var _0x450fc9=_0x165050;console[_0x450fc9(0x1eb)](_0x450fc9(0x1a9)),_0x4db344<0x1?errorAPICheckLogin(function(_0xc70748){var _0xaaaff0=_0x450fc9;_0xc70748?cancelBooking_resolve(_0x39fe4a,_0x4db344+0x1)[_0xaaaff0(0x238)](_0x4b6240)[_0xaaaff0(0x20a)](_0x48f13e):_0x48f13e(new Error('cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20network\x20error\x20and\x20retry'));}):_0x48f13e(new Error(_0x450fc9(0x20c)));},_0x5cec8e['send']();});}function fetchAndDisplayClassesAvailable(){var _0x2e67fa=a0_0xa27205,_0x18af56=document['querySelectorAll']('.location-option.selected-option');if(_0x18af56[_0x2e67fa(0x165)]===0x0){console[_0x2e67fa(0x1ff)](_0x2e67fa(0x1cb));return;}var _0x4bd384=document[_0x2e67fa(0x1dd)](_0x2e67fa(0x188))[_0x2e67fa(0x232)],_0x2c9d68=getLocalDate(),_0x52ebf3={'ALX':0x2,'CBD':0x1,'MVL':0x4},_0x2f7c80=Array['from'](_0x18af56)[_0x2e67fa(0x229)](_0x2c2892=>{var _0x2a6346=_0x2e67fa,_0x320fa1=_0x2c2892[_0x2a6346(0x1ea)](_0x2a6346(0x17c)),_0x274582=_0x52ebf3[_0x320fa1];return _0x274582;}),_0x4867b8=localStorage[_0x2e67fa(0x208)]('userId'),_0x23d8d7={'UserId':_0x4867b8,'clubId':_0x2f7c80[0x0],'selectedDate':_0x4bd384,'classType':0x0,'accountId':_0x2f7c80[0x0]};if(_0x4bd384<_0x2c9d68)displayClassAvailable([]);else{var _0x12d993=_0x2e67fa(0x180);makeApiRequest(_0x12d993,_0x2e67fa(0x215),_0x23d8d7,function(_0x27f2a0){var _0x4b113d=_0x2e67fa;displayClassAvailable(_0x27f2a0[_0x4b113d(0x187)]);});}}function displayClassAvailable(_0x3fa951){var _0xa5ffb=a0_0xa27205,_0x2a8990=document['getElementById'](_0xa5ffb(0x177));let _0x5f3b92=getSelectedClassOptions(),_0x54b9f0='',_0xba3b94=document['getElementById'](_0xa5ffb(0x188))[_0xa5ffb(0x232)];if(_0x3fa951[_0xa5ffb(0x165)]===0x0)_0x54b9f0='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22booking-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22class-name\x22>No\x20class\x20found</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';else{const _0x599a69=/crossfit|cf/i,_0x1454ac=/weightlifting/i;let _0xe436d5=_0x3fa951[_0xa5ffb(0x179)](_0x4395fb=>{var _0x15bfad=_0xa5ffb;const _0x4ffa0f=_0x599a69[_0x15bfad(0x18e)](_0x4395fb[_0x15bfad(0x1f8)]),_0x22eae0=_0x1454ac[_0x15bfad(0x18e)](_0x4395fb[_0x15bfad(0x1f8)]);if(_0x5f3b92[_0x15bfad(0x1a8)](_0x15bfad(0x192))&&_0x4ffa0f)return!![];if(_0x5f3b92[_0x15bfad(0x1a8)](_0x15bfad(0x207))&&_0x22eae0)return!![];if(_0x5f3b92[_0x15bfad(0x1a8)](_0x15bfad(0x1b4))&&!_0x4ffa0f&&!_0x22eae0)return!![];if(_0x5f3b92[_0x15bfad(0x165)]===0x0||_0x5f3b92[_0x15bfad(0x165)]===0x3||_0x5f3b92['includes']('All'))return!![];if(_0x5f3b92[_0x15bfad(0x165)]===0x2&&!_0x5f3b92[_0x15bfad(0x1a8)](_0x15bfad(0x1b4)))return _0x4ffa0f||_0x22eae0;return![];});_0xe436d5[_0xa5ffb(0x165)]===0x0?_0x54b9f0=_0xa5ffb(0x1e3):_0xe436d5[_0xa5ffb(0x1e5)](_0x5cab6e=>{var _0x550f62=_0xa5ffb;const _0x532fbd=_0x5cab6e['classCapacity']-_0x5cab6e[_0x550f62(0x167)],_0x152fc1=_0x532fbd===0x1?_0x550f62(0x1ec):'spots';_0x54b9f0+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22booking-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22time\x22>'+_0x5cab6e['classTime']+_0x550f62(0x1a4)+_0x5cab6e[_0x550f62(0x1f8)]+_0x550f62(0x1ba)+(_0x5cab6e[_0x550f62(0x1ed)]===_0x550f62(0x1ef)?_0x550f62(0x1ab)+_0x5cab6e[_0x550f62(0x228)]+'\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-schedule-id=\x22'+_0x5cab6e[_0x550f62(0x1d9)]+_0x550f62(0x214)+_0xba3b94+'\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-name=\x22'+_0x5cab6e[_0x550f62(0x1f8)]+_0x550f62(0x181)+_0x532fbd+'\x20'+_0x152fc1+_0x550f62(0x1f4):_0x532fbd>0x0?'<button\x20class=\x22book-button\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-schedule-id=\x22'+_0x5cab6e[_0x550f62(0x1d9)]+_0x550f62(0x1f3)+_0xba3b94+_0x550f62(0x1f6)+_0x5cab6e[_0x550f62(0x1f8)]+'\x22>Book</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spotsleft\x22>'+_0x532fbd+'\x20'+_0x152fc1+_0x550f62(0x1f4):'<button\x20class=\x22full-button\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-schedule-id=\x22'+_0x5cab6e[_0x550f62(0x1d9)]+_0x550f62(0x1f3)+_0xba3b94+_0x550f62(0x1f6)+_0x5cab6e[_0x550f62(0x1f8)]+_0x550f62(0x1c6))+_0x550f62(0x1c1);});}_0x2a8990[_0xa5ffb(0x171)]=_0x54b9f0;}function getSelectedClassOptions(){var _0x3a5761=a0_0xa27205;const _0x442eb4=document[_0x3a5761(0x1dc)]('.class-option.selected-option');return Array[_0x3a5761(0x1d8)](_0x442eb4)[_0x3a5761(0x229)](_0x48ce90=>{var _0x6833a=_0x3a5761;const _0x49f0d1=_0x48ce90[_0x6833a(0x222)][_0x6833a(0x1f7)]();return _0x49f0d1;});}function fetchAndisplayClassBooked(){var _0x9c8da5=a0_0xa27205,_0x2a2769=localStorage[_0x9c8da5(0x208)](_0x9c8da5(0x168)),_0x568ff8=_0x9c8da5(0x21a)+_0x2a2769;makeApiRequest(_0x568ff8,_0x9c8da5(0x1e1),null,function(_0x2efbf1){var _0x27f257=_0x9c8da5;displayMyBookedClass(_0x2efbf1[_0x27f257(0x187)]);});}async function displayMyBookedClass(_0x1a7d73){var _0x198225=a0_0xa27205;const _0x547e03=document[_0x198225(0x1dd)](_0x198225(0x1bb));let _0xd016ed='';const _0x442062=getLocalDate();for(const _0x4ba790 of _0x1a7d73){if(_0x4ba790[_0x198225(0x235)]!=='Cancelled'){const _0x3d0864=_0x4ba790['bookedDate'][_0x198225(0x184)](0x0,0xa),_0x3aa037=new Date(_0x4ba790[_0x198225(0x1d7)])[_0x198225(0x19f)](_0x198225(0x1bc),{'weekday':_0x198225(0x195),'month':_0x198225(0x195),'day':_0x198225(0x218),'hour':_0x198225(0x218),'minute':_0x198225(0x218)})[_0x198225(0x198)](',',''),_0x2362bd=_0x3aa037['split']('\x20')[0x0],_0x2b5de7=_0x3aa037['split']('\x20')[_0x198225(0x184)](0x1)[_0x198225(0x1e4)]('\x20'),_0x25c4da=_0x198225(0x226)+_0x4ba790['className']+_0x198225(0x1af),_0x124943=_0x198225(0x19a)+_0x2362bd+'\x20'+_0x2b5de7+_0x198225(0x176),_0x20d9a0='<p>'+_0x4ba790[_0x198225(0x1db)]+'</p>';let _0xa807e2='';if(_0x3d0864===_0x442062){const _0x47e5ae=await isUserCheckedin(_0x4ba790[_0x198225(0x1d9)],_0x442062,_0x4ba790[_0x198225(0x1df)]);!_0x47e5ae?_0xa807e2=_0x198225(0x19e)+_0x4ba790[_0x198225(0x1d9)]+'\x22\x20data-class-date-time=\x22'+_0x4ba790[_0x198225(0x1d7)]+_0x198225(0x199)+_0x4ba790[_0x198225(0x211)]+_0x198225(0x19d):_0xa807e2=_0x198225(0x21b);}else _0xa807e2=_0x198225(0x1f1)+_0x4ba790['bookedId']+_0x198225(0x220);_0xd016ed+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22booked-class-columns\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22div-each-class\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22w-richtext\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x25c4da+_0x198225(0x225)+_0x124943+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x20d9a0+_0x198225(0x193)+_0xa807e2+_0x198225(0x196);}}!_0xd016ed&&(_0xd016ed=_0x198225(0x190)),_0x547e03[_0x198225(0x171)]=_0xd016ed;}function getLocalDate(){var _0x207ff9=a0_0xa27205;const _0x5a0bf6=new Date(),_0x4e7d44=_0x5a0bf6[_0x207ff9(0x237)]()*0xea60,_0x6bb3e2=new Date(_0x5a0bf6-_0x4e7d44)['toISOString']()[_0x207ff9(0x184)](0x0,0xa);return _0x6bb3e2;}async function isUserCheckedin(_0x3604cf,_0x470f28,_0x20556e){var _0x1f3aa2=a0_0xa27205;const _0x345305=_0x1f3aa2(0x22d),_0x116024={'classScheduleId':_0x3604cf,'selectedDate':_0x470f28,'classTime':_0x20556e};try{const _0x1500c5=await makeApiRequest_noToken(_0x345305,_0x1f3aa2(0x215),_0x116024),_0x1d2de7=_0x1500c5[_0x1f3aa2(0x187)],_0x245c34=localStorage['getItem']('userId');for(const _0x45db6e of _0x1d2de7){if(_0x45db6e[_0x1f3aa2(0x1f2)]===_0x245c34&&_0x45db6e[_0x1f3aa2(0x1de)])return!![];}}catch(_0x75d0be){console[_0x1f3aa2(0x1eb)]('isUserCheckedin\x20-\x20Error\x20while\x20checking\x20attendees:',_0x75d0be);}return![];}function makeApiRequest(_0x264168,_0x2bc8c4,_0x57d903,_0x137f94,_0x3778ed=0x0){var _0x5d47ba=a0_0xa27205,_0x5e7259=localStorage[_0x5d47ba(0x208)](_0x5d47ba(0x16b)),_0x75a74d=new XMLHttpRequest();_0x75a74d[_0x5d47ba(0x1d1)](_0x2bc8c4,_0x264168,!![]),_0x75a74d['setRequestHeader'](_0x5d47ba(0x1d3),_0x5d47ba(0x18d)),_0x75a74d['setRequestHeader'](_0x5d47ba(0x1b2),_0x5d47ba(0x18d)),_0x75a74d[_0x5d47ba(0x206)](_0x5d47ba(0x1ce),_0x5d47ba(0x210)+_0x5e7259),_0x75a74d[_0x5d47ba(0x178)]=function(){var _0xb2a003=_0x5d47ba;_0x75a74d[_0xb2a003(0x1ac)]===0xc8?_0x137f94(JSON[_0xb2a003(0x1a1)](_0x75a74d[_0xb2a003(0x1ee)])):(console['error'](_0xb2a003(0x175),_0x75a74d['status']),_0x3778ed<0x1?errorAPICheckLogin(function(_0x57d974){_0x57d974&&makeApiRequest(_0x264168,_0x2bc8c4,_0x57d903,_0x137f94,_0x3778ed+0x1);}):console[_0xb2a003(0x1eb)]('makeApiRequest\x20-\x20Retried\x20request\x20failed:',_0x75a74d['status']));},_0x75a74d[_0x5d47ba(0x16f)]=function(){var _0x1495d5=_0x5d47ba;console['error'](_0x1495d5(0x1e0),_0x75a74d['onerror']),_0x3778ed<0x1?errorAPICheckLogin(function(_0x3945b3){_0x3945b3&&makeApiRequest(_0x264168,_0x2bc8c4,_0x57d903,_0x137f94,_0x3778ed+0x1);}):console[_0x1495d5(0x1eb)](_0x1495d5(0x1d6),_0x75a74d[_0x1495d5(0x1ac)]);},_0x57d903?_0x75a74d['send'](JSON[_0x5d47ba(0x183)](_0x57d903)):_0x75a74d['send']();}async function makeApiRequest_noToken(_0x3d7075,_0x806a15,_0x3eab8d){var _0x25feb1=a0_0xa27205;const _0x267ed0={'Content-Type':_0x25feb1(0x18d),'Accept':_0x25feb1(0x18d),'Authorization':'Bearer'},_0x1ffb01={'method':_0x806a15,'headers':_0x267ed0,'body':JSON[_0x25feb1(0x183)](_0x3eab8d)},_0x56bf23=await fetch(_0x3d7075,_0x1ffb01);if(!_0x56bf23['ok'])throw new Error(_0x25feb1(0x21f)+_0x56bf23[_0x25feb1(0x1ac)]);return await _0x56bf23[_0x25feb1(0x170)]();}function errorAPICheckLogin(_0x3ab9c9){var _0x1dc58e=a0_0xa27205;console[_0x1dc58e(0x1ff)](_0x1dc58e(0x1a5)),validateLogin(function(_0x5f35c7){var _0x41556c=_0x1dc58e;_0x5f35c7?(console[_0x41556c(0x1ff)]('errorAPICheckLogin\x20-\x20login\x20validated'),_0x3ab9c9(!![])):(console[_0x41556c(0x1ff)]('errorAPICheckLogin\x20-\x20login\x20not\x20validated'),window['location'][_0x41556c(0x174)]='/');});}function validateLogin(_0x25b841){var _0x4a8e33=a0_0xa27205;if(!localStorage[_0x4a8e33(0x208)](_0x4a8e33(0x16b))||!localStorage[_0x4a8e33(0x208)](_0x4a8e33(0x168))||!localStorage['getItem']('userType')){console[_0x4a8e33(0x1eb)](_0x4a8e33(0x1e8)),_0x25b841(![]);return;}const _0x3c7f52=_0x4a8e33(0x1b3),_0x3ff1d2=_0x4a8e33(0x215),_0x593409={'xoken':localStorage[_0x4a8e33(0x208)](_0x4a8e33(0x1c0)),'userId':localStorage[_0x4a8e33(0x208)]('portalUserId'),'userType':localStorage['getItem'](_0x4a8e33(0x173))};makeApiRequest(_0x3c7f52,_0x3ff1d2,_0x593409,function(_0x1706b1){var _0x21bb21=_0x4a8e33;Object['keys'](_0x1706b1[_0x21bb21(0x187)])[_0x21bb21(0x1e5)](function(_0x35fe79){var _0x31fcdf=_0x21bb21;localStorage[_0x31fcdf(0x1b0)](_0x35fe79,_0x1706b1[_0x31fcdf(0x187)][_0x35fe79]);}),_0x25b841(!![]);},function(_0x115d40){var _0x21fe6d=_0x4a8e33;console[_0x21fe6d(0x1eb)]('validateLogin\x20-\x20Validation\x20failed:',_0x115d40),_0x25b841(![]);});}function checkInParticipant(_0x11c3b6,_0x10c64b,_0x260916){var _0x4e7b53=a0_0xa27205;const _0x70a0bb='https://crossfit168.clubfit.net.au/api/v1/booking/book-class-participant-checkin',_0x3a05e7={'memberNumber':localStorage[_0x4e7b53(0x208)]('userId'),'classScheduleId':_0x11c3b6,'classDateTime':_0x10c64b};function _0x30e5e9(_0x1dad39){var _0x1d1de4=_0x4e7b53;if(_0x1dad39[_0x1d1de4(0x187)]===_0x1d1de4(0x1d2)){console[_0x1d1de4(0x1ff)]('todo:\x20remove\x20both\x20buttons');const _0x16a27b=_0x260916[_0x1d1de4(0x1c5)](_0x1d1de4(0x194))[_0x1d1de4(0x1b9)];_0x16a27b[_0x1d1de4(0x171)]='';const _0x47beb1=document['createElement'](_0x1d1de4(0x21e));_0x47beb1[_0x1d1de4(0x1cf)][_0x1d1de4(0x17f)]('action-button'),_0x47beb1['textContent']='Signed\x20in',_0x16a27b[_0x1d1de4(0x182)](_0x47beb1);}else console['error'](_0x1d1de4(0x1ae),_0x1dad39['errors']);}makeApiRequest(_0x70a0bb,_0x4e7b53(0x215),_0x3a05e7,_0x30e5e9);}