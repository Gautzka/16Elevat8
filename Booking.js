var a0_0x275fbd=a0_0x49b2;(function(_0x4e6be6,_0x2822ef){var _0x183bfe=a0_0x49b2,_0x469391=_0x4e6be6();while(!![]){try{var _0x38a2a3=parseInt(_0x183bfe(0x1c6))/0x1+parseInt(_0x183bfe(0x150))/0x2*(-parseInt(_0x183bfe(0x202))/0x3)+-parseInt(_0x183bfe(0x203))/0x4*(parseInt(_0x183bfe(0x16d))/0x5)+parseInt(_0x183bfe(0x177))/0x6+-parseInt(_0x183bfe(0x18d))/0x7+-parseInt(_0x183bfe(0x1b0))/0x8+parseInt(_0x183bfe(0x1a3))/0x9;if(_0x38a2a3===_0x2822ef)break;else _0x469391['push'](_0x469391['shift']());}catch(_0x235ac6){_0x469391['push'](_0x469391['shift']());}}}(a0_0x4add,0xef375),document[a0_0x275fbd(0x1f9)]('DOMContentLoaded',function(){var _0x18c1f9=a0_0x275fbd;initDatePicker(),selectFirstTab(),fetchAndisplayClassBooked(),updateHeaderDate(document[_0x18c1f9(0x19e)](_0x18c1f9(0x190))[_0x18c1f9(0x1d2)]);var _0x39adb6=document[_0x18c1f9(0x19e)](_0x18c1f9(0x188));_0x39adb6['addEventListener'](_0x18c1f9(0x1b5),function(){fetchAndisplayClassBooked();});var _0x39adb6=document[_0x18c1f9(0x19e)](_0x18c1f9(0x15c));_0x39adb6[_0x18c1f9(0x1f9)]('click',function(){fetchAndDisplayClassesAvailable();});const _0x118e82=document[_0x18c1f9(0x19e)](_0x18c1f9(0x190)),_0xf7f784=document['getElementById'](_0x18c1f9(0x1da)),_0x66fd06=document['getElementById'](_0x18c1f9(0x200));_0xf7f784[_0x18c1f9(0x1f9)]('click',function(){var _0xcea003=_0x18c1f9;_0x141835(-0x1);var _0x2124d0=document[_0xcea003(0x19e)](_0xcea003(0x190))['value'];saveDatePickerSessionStorage(_0x2124d0),updateHeaderDate(_0x2124d0),fetchAndDisplayClassesAvailable();}),_0x66fd06[_0x18c1f9(0x1f9)](_0x18c1f9(0x1b5),function(){var _0x132ec5=_0x18c1f9;_0x141835(0x1);var _0x2b6dec=document['getElementById'](_0x132ec5(0x190))['value'];saveDatePickerSessionStorage(_0x2b6dec),updateHeaderDate(_0x2b6dec),fetchAndDisplayClassesAvailable();}),_0x118e82['addEventListener'](_0x18c1f9(0x14c),function(){var _0x379a66=_0x18c1f9,_0x5b9edb=document['getElementById']('datePicker')[_0x379a66(0x1d2)];saveDatePickerSessionStorage(_0x5b9edb),updateHeaderDate(_0x5b9edb),fetchAndDisplayClassesAvailable();});function _0x141835(_0x58688f){var _0x142a2b=_0x18c1f9;const _0x258f48=new Date(_0x118e82[_0x142a2b(0x1d2)]+_0x142a2b(0x159));_0x258f48['setDate'](_0x258f48[_0x142a2b(0x185)]()+_0x58688f),_0x118e82[_0x142a2b(0x1d2)]=formatDate(_0x258f48);}var _0x152f97=document[_0x18c1f9(0x1ea)](_0x18c1f9(0x197));_0x152f97[_0x18c1f9(0x158)](function(_0x4c0820){var _0x24680b=_0x18c1f9;_0x4c0820['addEventListener'](_0x24680b(0x1b5),function(){var _0xad5088=_0x24680b;_0x152f97[_0xad5088(0x158)](function(_0x29e8cd){var _0x3c8a73=_0xad5088;_0x29e8cd[_0x3c8a73(0x1c4)]['remove']('selected-option');}),this[_0xad5088(0x1c4)][_0xad5088(0x20f)](_0xad5088(0x18e)),fetchAndDisplayClassesAvailable();});});var _0x238e98=document['querySelectorAll'](_0x18c1f9(0x1de));_0x238e98['forEach'](function(_0x46b89e){var _0x513e1d=_0x18c1f9;_0x46b89e['addEventListener'](_0x513e1d(0x1b5),function(){var _0x13d818=_0x513e1d;this[_0x13d818(0x1c4)][_0x13d818(0x20b)](_0x13d818(0x18e)),fetchAndDisplayClassesAvailable();});}),document[_0x18c1f9(0x19e)](_0x18c1f9(0x1db))[_0x18c1f9(0x1f9)]('click',function(_0x7aa5e2){var _0x440fc0=_0x18c1f9;if(_0x7aa5e2[_0x440fc0(0x17b)]&&_0x7aa5e2['target'][_0x440fc0(0x1c0)](_0x440fc0(0x211))){var _0x19795c=_0x7aa5e2[_0x440fc0(0x17b)][_0x440fc0(0x160)](_0x440fc0(0x1bf));cancelBooking_resolve(_0x19795c)['then'](()=>{fetchAndDisplayClassesAvailable();})[_0x440fc0(0x16a)](_0x1f113b=>{var _0x39c92a=_0x440fc0;console[_0x39c92a(0x178)](_0x39c92a(0x1f7),_0x1f113b);});}else{if(_0x7aa5e2[_0x440fc0(0x17b)]&&_0x7aa5e2[_0x440fc0(0x17b)][_0x440fc0(0x1c0)]('.book-button'))bookClass(_0x7aa5e2[_0x440fc0(0x17b)]),fetchAndDisplayClassesAvailable();else{if(_0x7aa5e2[_0x440fc0(0x17b)]&&_0x7aa5e2[_0x440fc0(0x17b)][_0x440fc0(0x168)](_0x440fc0(0x1aa))){var _0x4d9513=_0x7aa5e2[_0x440fc0(0x17b)]['closest']('.booking-item');if(_0x7aa5e2[_0x440fc0(0x17b)][_0x440fc0(0x168)](_0x440fc0(0x1c9))){_0x4d9513[_0x440fc0(0x1ea)]('.attendee-photo')[_0x440fc0(0x158)](function(_0x40eb56){var _0x23a6bd=_0x440fc0;_0x40eb56[_0x23a6bd(0x1c4)][_0x23a6bd(0x16b)]('enlarged');});return;}var _0x433503=_0x4d9513[_0x440fc0(0x1a7)](_0x440fc0(0x140))||_0x4d9513['querySelector'](_0x440fc0(0x211))||_0x4d9513[_0x440fc0(0x1a7)](_0x440fc0(0x1cd));if(_0x433503){var _0x3689c2=_0x433503['getAttribute'](_0x440fc0(0x214)),_0x20cbd0=_0x433503[_0x440fc0(0x160)]('data-class-date'),_0x230e7d=_0x4d9513[_0x440fc0(0x1a7)](_0x440fc0(0x1e0))[_0x440fc0(0x20d)],_0x595893=_0x4d9513[_0x440fc0(0x1a7)](_0x440fc0(0x1d0))[_0x440fc0(0x20d)],_0x54c9fe=document[_0x440fc0(0x1a6)]('button');_0x54c9fe['setAttribute'](_0x440fc0(0x214),_0x3689c2),_0x54c9fe['setAttribute'](_0x440fc0(0x1c1),_0x20cbd0),_0x54c9fe[_0x440fc0(0x20c)](_0x440fc0(0x210),_0x230e7d),_0x54c9fe['setAttribute'](_0x440fc0(0x15b),_0x595893),checkAttendees(_0x54c9fe,_0x4d9513);}else console[_0x440fc0(0x178)](_0x440fc0(0x1a9));}}}}),document[_0x18c1f9(0x19e)](_0x18c1f9(0x17a))[_0x18c1f9(0x1f9)](_0x18c1f9(0x1b5),function(_0x1e82a9){var _0x9b801=_0x18c1f9;if(_0x1e82a9[_0x9b801(0x17b)]&&_0x1e82a9[_0x9b801(0x17b)]['matches'](_0x9b801(0x211))){var _0x531df3=_0x1e82a9[_0x9b801(0x17b)][_0x9b801(0x160)](_0x9b801(0x1bf));cancelBooking_resolve(_0x531df3)[_0x9b801(0x1e5)](()=>{fetchAndisplayClassBooked();})['catch'](_0x19723f=>{var _0x4bb5fb=_0x9b801;console[_0x4bb5fb(0x178)]('EventListener\x20-\x20Cancellation\x20error:',_0x19723f);});}else{if(_0x1e82a9[_0x9b801(0x17b)]&&_0x1e82a9[_0x9b801(0x17b)][_0x9b801(0x1c0)](_0x9b801(0x152))){const _0x579e1e=_0x1e82a9['target'];var _0x446331=_0x1e82a9['target'][_0x9b801(0x160)]('classScheduleId'),_0x1a51d4=_0x1e82a9['target'][_0x9b801(0x160)]('classDateTime');console[_0x9b801(0x17d)](_0x9b801(0x1b4)+_0x446331+'\x20'+_0x1a51d4),checkInParticipant(_0x446331,_0x1a51d4,_0x579e1e);}}});}));function initDatePicker(){var _0x507530=a0_0x275fbd;const _0x2e7edd=document[_0x507530(0x19e)](_0x507530(0x190));let _0x45b66d=sessionStorage[_0x507530(0x165)](_0x507530(0x148)),_0x15749a=sessionStorage[_0x507530(0x165)]('timestampLastChanged');_0x45b66d&&_0x15749a&&isWithinValidityPeriod(_0x15749a,0.5)?_0x2e7edd[_0x507530(0x1d2)]=_0x45b66d:(currentDate=getLocalDate(),_0x2e7edd[_0x507530(0x1d2)]=currentDate,saveDatePickerSessionStorage(currentDate));}function selectFirstTab(){var _0x49fa27=a0_0x275fbd,_0x4e1430=document[_0x49fa27(0x19e)](_0x49fa27(0x188)),_0x476869=document[_0x49fa27(0x19e)](_0x49fa27(0x15c));_0x4e1430['classList'][_0x49fa27(0x20f)](_0x49fa27(0x1d1)),_0x4e1430['setAttribute'](_0x49fa27(0x1d3),_0x49fa27(0x1f6)),_0x476869[_0x49fa27(0x1c4)]['remove']('w--current'),_0x476869[_0x49fa27(0x20c)](_0x49fa27(0x1d3),_0x49fa27(0x215));}function isWithinValidityPeriod(_0x2e752d,_0x48e297){const _0x2988c3=new Date()['getTime'](),_0x347cd1=(_0x2988c3-_0x2e752d)/(0x3e8*0x3c*0x3c);return _0x347cd1<=_0x48e297;}function formatDate(_0x4f58b0){var _0x3b7a6a=a0_0x275fbd;let _0x257f12=new Date(_0x4f58b0),_0x2ea073=''+(_0x257f12[_0x3b7a6a(0x1d9)]()+0x1),_0x7e1536=''+_0x257f12[_0x3b7a6a(0x185)](),_0x212d4a=_0x257f12[_0x3b7a6a(0x16e)]();if(_0x2ea073['length']<0x2)_0x2ea073='0'+_0x2ea073;if(_0x7e1536['length']<0x2)_0x7e1536='0'+_0x7e1536;return[_0x212d4a,_0x2ea073,_0x7e1536][_0x3b7a6a(0x1e4)]('-');}function a0_0x4add(){var _0x3976f7=['contains','<div\x20class=\x22action-button\x22>Signed\x20in</div>','<button\x20class=\x22cancel-button\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-member-booking-id=\x22','className','responseText','getMonth','prevDay','class-available','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22class-name\x22>','filter','.class-option','totalBooked','.time','errors','appendChild','makeApiRequest\x20-\x20Retried\x20request\x20failed:','join','then','status','from','Unknown\x20error\x20occurred','div','querySelectorAll','User\x20is\x20not\x20logged\x20in,\x20redirecting\x20to\x20login\x20page.','json','</p>','onload','Weightlifting','getTimezoneOffset','makeApiRequest\x20-\x20Network\x20error','\x22\x20data-class-date-time=\x22','<p>','toLocaleString','split','true','EventListener\x20-\x20Cancellation\x20error:','includes','addEventListener','attendees','checkInParticipant:\x20','application/json','setRequestHeader','</h3>','href','nextDay','.location-option.selected-option','3nLUBPM','3346744DuDRDe','open','\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-date=\x22','userId','\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-name=\x22','.attendee-photo','Other','xhr.status:\x20','toggle','setAttribute','textContent','\x22>Sign-in</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22action-button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22cancel-button\x22\x20data-member-booking-id=\x22','add','data-class-time','.cancel-button','short','innerHTML','data-class-schedule-id','false','<button\x20class=\x22book-button\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-schedule-id=\x22','.book-button','test','validateLogin\x20-\x20Validation\x20failed:','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','classTime','All','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22booking-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22class-name\x22>No\x20class\x20found</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','classCapacity','selectedDate','POST','<button\x20class=\x22full-button\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-schedule-id=\x22','trim','change','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','Check\x20in\x20success','<h3\x20class=\x22name-class\x22>','3008272yAucfa','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22booked-class-columns\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22div-each-class\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22w-richtext\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','.signin-button','errorAPICheckLogin\x20-\x20function\x20called','gridColumn','errorAPICheckLogin\x20-\x20login\x20not\x20validated','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22action-button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22signin-button\x22\x20data-class-schedule-id=\x22','Element\x20with\x20id\x20\x27date-header\x27\x20not\x20found!','forEach','T00:00:00','block','data-class-name','tab-book-class','onerror','access_token','replace','getAttribute','\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-schedule-id=\x22','isArray','enlarged','cancelBooking_resolve\x20-\x20Network\x20error','getItem','statusCode','location','closest','\x22>Full</button>','catch','remove','HTTP\x20error!\x20status:\x20','5FNYRFl','getFullYear','<div>No\x20attendees</div>','spots','<div\x20class=\x22attendee-item\x22><img\x20src=\x22','bookingStatus','data-location','toISOString','\x20left</div>','Content-Type','1440066gSfEGD','error','insertBefore','booking-info','target','\x22\x20alt=\x22Avatar\x22\x20class=\x22attendee-photo\x22>','log','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','slice','cancelBooking_resolve\x20-\x20Cancellation\x20failed','sort','setItem','error-message','payload','getDate','spot','Accept','tab-existing-booking','\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-name=\x22','response.messageFields','<div\x20class=\x22booked-class-columns\x22><div\x20class=\x22div-each-class\x22><div\x20class=\x22w-richtext\x22><p>No\x20class\x20available</p></div></div></div>','map','12581387QtOqed','selected-option','stringify','datePicker','userType','.class-option.selected-option','date-header','Authorization','Booked','https://crossfit168.clubfit.net.au/api/v1/booking/cancel/','.location-option','memberBookingId','Error\x20details:','stopPropagation','parse','nextSibling','\x22>Book</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spotsleft\x22>','getElementById','errorAPICheckLogin\x20-\x20login\x20validated','refresh_token','getTime','GET','52557345buvzpK','Response\x20received:','message','createElement','querySelector','style','No\x20book-button\x20or\x20cancel-button\x20found\x20in\x20booking-item.','.booking-item','Bearer\x20','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22action-button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22cancel-button\x22\x20data-member-booking-id=\x22','bookedDate','timestampLastChanged','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22booking-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22class-name\x22>No\x20class\x20found</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','14317304JNMMIq','clubName','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22buttonandavailability\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22action-button\x22\x20style=\x22margin-left:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','classScheduleId','before\x20calling\x20checkInParticipant:\x20','click','en-AU','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22column-signin-cancel\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','display','\x22>Cancel</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','send','isUserCheckedin\x20','long','memberBookedStatus','checkAttendees\x20-\x20Error\x20while\x20checking\x20attendees:','data-member-booking-id','matches','data-class-date','length','Check-in\x20failed:','classList','https://crossfit168.clubfit.net.au/api/v1/booking/search-classes','827939WggAMv','bookedId','2-digit','.attendees','CrossFit','https://crossfit168.clubfit.net.au/api/v1/booking/class-participants','parentNode','.full-button','cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20retry','1\x20/\x20-1','.class-name','w--current','value','aria-selected'];a0_0x4add=function(){return _0x3976f7;};return a0_0x4add();}function updateHeaderDate(_0x3de58e){var _0x1c8c6d=a0_0x275fbd;const _0x195481=document[_0x1c8c6d(0x19e)](_0x1c8c6d(0x193));if(!_0x195481){console[_0x1c8c6d(0x178)](_0x1c8c6d(0x157));return;}const _0x4ebfb5=new Date(_0x3de58e),_0x4bf828=_0x4ebfb5[_0x1c8c6d(0x185)](),_0x375283=_0x4ebfb5[_0x1c8c6d(0x1f4)](_0x1c8c6d(0x1b6),{'month':_0x1c8c6d(0x1bc)}),_0x56d749=_0x4ebfb5[_0x1c8c6d(0x1f4)]('en-AU',{'weekday':_0x1c8c6d(0x1bc)});function _0x3a034b(_0x482f44){if(_0x482f44>0x3&&_0x482f44<0x15)return'th';switch(_0x482f44%0xa){case 0x1:return'st';case 0x2:return'nd';case 0x3:return'rd';default:return'th';}}const _0x44a580=_0x56d749+'\x20'+(_0x4bf828<0xa?'0':'')+_0x4bf828+_0x3a034b(_0x4bf828)+'\x20'+_0x375283;_0x195481[_0x1c8c6d(0x20d)]=_0x44a580;}function getLocalDate(){var _0x2e4fc6=a0_0x275fbd;const _0x36a930=new Date(),_0x5cfb76=_0x36a930[_0x2e4fc6(0x1f0)]()*0xea60,_0x477636=new Date(_0x36a930-_0x5cfb76)[_0x2e4fc6(0x174)]()[_0x2e4fc6(0x17f)](0x0,0xa);return _0x477636;}function saveDatePickerSessionStorage(_0x53d570){var _0x18a1c2=a0_0x275fbd;sessionStorage[_0x18a1c2(0x182)]('selectedDate',_0x53d570),timestamp=new Date()[_0x18a1c2(0x1a1)](),sessionStorage[_0x18a1c2(0x182)](_0x18a1c2(0x1ae),timestamp);}function bookClass(_0x3380aa){var _0x1f71c3=a0_0x275fbd,_0x59fe24=_0x3380aa[_0x1f71c3(0x160)](_0x1f71c3(0x214)),_0x30c690=_0x3380aa[_0x1f71c3(0x160)]('data-class-date'),_0x57bd4a=_0x3380aa['getAttribute'](_0x1f71c3(0x15b)),_0x489ea4=localStorage['getItem'](_0x1f71c3(0x206)),_0x79dc76=localStorage[_0x1f71c3(0x165)]('access_token'),_0x2ff956='https://crossfit168.clubfit.net.au/api/v1/booking/book-class-v2',_0x16e012={'classScheduleId':_0x59fe24,'classDateTime':_0x30c690,'className':_0x57bd4a,'userId':_0x489ea4,'onBehalfBookingReference':'','onBehalfBookFor':''},_0x427819=new XMLHttpRequest();_0x427819[_0x1f71c3(0x204)]('POST',_0x2ff956,!![]),_0x427819['setRequestHeader'](_0x1f71c3(0x176),_0x1f71c3(0x1fc)),_0x427819[_0x1f71c3(0x1fd)](_0x1f71c3(0x187),_0x1f71c3(0x1fc)),_0x427819[_0x1f71c3(0x1fd)](_0x1f71c3(0x194),_0x1f71c3(0x1ab)+_0x79dc76),_0x427819[_0x1f71c3(0x1ee)]=function(){var _0x3ba1bd=_0x1f71c3,_0x188002;try{_0x188002=JSON[_0x3ba1bd(0x19b)](_0x427819[_0x3ba1bd(0x1d8)]);}catch(_0x5f3756){_0x188002={'errors':{'message':_0x3ba1bd(0x1e8)}};}_0x427819[_0x3ba1bd(0x1e6)]>=0xc8&&_0x427819[_0x3ba1bd(0x1e6)]<0x12c&&_0x188002[_0x3ba1bd(0x166)]===0xc8?fetchAndDisplayClassesAvailable():(console[_0x3ba1bd(0x17d)](_0x3ba1bd(0x20a)+_0x427819['status']+_0x3ba1bd(0x18a)),alert(_0x188002[_0x3ba1bd(0x1e1)][_0x3ba1bd(0x1a5)]),errorAPICheckLogin(function(_0x5d0a36){var _0x58c5cd=_0x3ba1bd;!_0x5d0a36&&console[_0x58c5cd(0x178)]('User\x20is\x20not\x20logged\x20in,\x20redirecting\x20to\x20login\x20page.');}));},_0x427819[_0x1f71c3(0x15d)]=function(){alert('Network\x20error\x20occurred\x20while\x20booking.'),errorAPICheckLogin(function(_0x47818b){var _0x9f8bc5=a0_0x49b2;!_0x47818b&&console['error'](_0x9f8bc5(0x1eb));});},_0x427819['send'](JSON[_0x1f71c3(0x18f)](_0x16e012));}function displayErrorMessage(_0x44c71f,_0x4ade09){var _0x18487f=a0_0x275fbd;clearErrorMessage(_0x44c71f);var _0xba9aab=document[_0x18487f(0x1a6)]('div');_0xba9aab[_0x18487f(0x1d7)]=_0x18487f(0x183),_0xba9aab[_0x18487f(0x20d)]=_0x4ade09,_0x44c71f[_0x18487f(0x1cc)][_0x18487f(0x179)](_0xba9aab,_0x44c71f[_0x18487f(0x19c)]);}function clearErrorMessage(_0x273b09){var _0x252cc1=a0_0x275fbd,_0x31813d=_0x273b09[_0x252cc1(0x19c)];_0x31813d&&_0x31813d[_0x252cc1(0x1d7)]==='error-message'&&_0x31813d[_0x252cc1(0x16b)]();}function showInlineAttendees(_0x57d179,_0xf0e669){var _0x169a81=a0_0x275fbd,_0x402214=_0xf0e669[_0x169a81(0x1a7)]('.attendees');if(!_0x402214)_0x402214=document['createElement'](_0x169a81(0x1e9)),_0x402214[_0x169a81(0x1d7)]=_0x169a81(0x1fa),_0xf0e669[_0x169a81(0x1e2)](_0x402214),_0x402214['style'][_0x169a81(0x154)]=_0x169a81(0x1cf);else{_0x402214[_0x169a81(0x1a8)][_0x169a81(0x1b8)]=_0x402214[_0x169a81(0x1a8)][_0x169a81(0x1b8)]===_0x169a81(0x15a)?'none':_0x169a81(0x15a);return;}var _0x42d629='';Array[_0x169a81(0x162)](_0x57d179)&&_0x57d179['length']>0x0?(_0x57d179[_0x169a81(0x181)]((_0x17bb16,_0x1798fc)=>_0x17bb16['fullName']['localeCompare'](_0x1798fc['fullName'])),_0x57d179[_0x169a81(0x158)](function(_0x54e4ab){var _0x3db6d9=_0x169a81,_0x498a42=_0x54e4ab['fullName'][_0x3db6d9(0x1f5)]('\x20')[0x0];_0x42d629+=_0x3db6d9(0x171)+_0x54e4ab['memberPhotoLocation']+_0x3db6d9(0x17c)+_0x498a42+'</div>';})):_0x42d629+=_0x169a81(0x16f),_0x402214[_0x169a81(0x213)]=_0x42d629,_0x402214[_0x169a81(0x1a8)][_0x169a81(0x1b8)]='block',_0x402214[_0x169a81(0x1ea)](_0x169a81(0x208))[_0x169a81(0x158)](function(_0x33bc40){var _0x5bedfd=_0x169a81;_0x33bc40[_0x5bedfd(0x1f9)]('click',function(_0x13ef6e){var _0x21ac93=_0x5bedfd;_0x33bc40['classList']['contains'](_0x21ac93(0x163))?_0x33bc40[_0x21ac93(0x1c4)][_0x21ac93(0x16b)]('enlarged'):(_0x402214[_0x21ac93(0x1ea)](_0x21ac93(0x208))[_0x21ac93(0x158)](function(_0x48ee9b){var _0x4ed28e=_0x21ac93;_0x48ee9b[_0x4ed28e(0x1c4)][_0x4ed28e(0x16b)]('enlarged');}),_0x33bc40[_0x21ac93(0x1c4)][_0x21ac93(0x20f)]('enlarged')),_0x13ef6e['stopPropagation']();});}),_0x402214[_0x169a81(0x1f9)](_0x169a81(0x1b5),function(_0x3a1251){var _0x38806b=_0x169a81;_0x402214[_0x38806b(0x1ea)]('.attendee-photo')[_0x38806b(0x158)](function(_0x535618){var _0x17d1b8=_0x38806b;_0x535618[_0x17d1b8(0x1c4)][_0x17d1b8(0x16b)](_0x17d1b8(0x163));}),_0x3a1251[_0x38806b(0x19a)]();}),document[_0x169a81(0x1f9)](_0x169a81(0x1b5),function(_0x3c8a08){var _0x75f281=_0x169a81;!_0xf0e669[_0x75f281(0x1d4)](_0x3c8a08[_0x75f281(0x17b)])&&_0x402214[_0x75f281(0x1ea)](_0x75f281(0x208))[_0x75f281(0x158)](function(_0x563523){var _0x4373ae=_0x75f281;_0x563523['classList'][_0x4373ae(0x16b)](_0x4373ae(0x163));});});}function checkAttendees(_0x58241d,_0x23a89c){var _0x1a414a=a0_0x275fbd,_0x1ac037=_0x58241d[_0x1a414a(0x160)]('data-class-schedule-id'),_0x19a52b=_0x58241d[_0x1a414a(0x160)](_0x1a414a(0x1c1)),_0x4134ee=_0x58241d['getAttribute'](_0x1a414a(0x210)),_0x5c991f=_0x1a414a(0x1cb),_0x16ce0d={'classScheduleId':_0x1ac037,'selectedDate':_0x19a52b,'classTime':_0x4134ee},_0x2a1b6c=new XMLHttpRequest();_0x2a1b6c[_0x1a414a(0x204)]('POST',_0x5c991f,!![]),_0x2a1b6c['setRequestHeader']('Content-Type',_0x1a414a(0x1fc)),_0x2a1b6c[_0x1a414a(0x1fd)](_0x1a414a(0x187),'application/json'),_0x2a1b6c['setRequestHeader'](_0x1a414a(0x194),'bearer'),_0x2a1b6c[_0x1a414a(0x1ee)]=function(){var _0x372c59=_0x1a414a;if(_0x2a1b6c[_0x372c59(0x1e6)]>=0xc8&&_0x2a1b6c['status']<0x12c){var _0x2097b9=JSON[_0x372c59(0x19b)](_0x2a1b6c[_0x372c59(0x1d8)]),_0x17be07=_0x2097b9['payload'];showInlineAttendees(_0x17be07,_0x23a89c);}else console[_0x372c59(0x178)]('checkAttendees\x20-\x20Error\x20while\x20checking\x20attendees:',_0x2a1b6c[_0x372c59(0x1e6)]),errorAPICheckLogin();},_0x2a1b6c[_0x1a414a(0x15d)]=function(){var _0x20dc14=_0x1a414a;console[_0x20dc14(0x178)]('checkAttendees\x20-\x20Network\x20error\x20while\x20checking\x20attendees'),errorAPICheckLogin();},_0x2a1b6c[_0x1a414a(0x1ba)](JSON[_0x1a414a(0x18f)](_0x16ce0d));}function cancelBooking_resolve(_0x4c7f7c,_0x467d23=0x0){return new Promise((_0x3c9892,_0x321e04)=>{var _0x58dcb7=a0_0x49b2,_0x2cd628=localStorage[_0x58dcb7(0x165)](_0x58dcb7(0x15e)),_0x5e6a74=_0x58dcb7(0x196)+_0x4c7f7c,_0x3a5442=new XMLHttpRequest();_0x3a5442[_0x58dcb7(0x204)]('POST',_0x5e6a74,!![]),_0x3a5442[_0x58dcb7(0x1fd)](_0x58dcb7(0x176),_0x58dcb7(0x1fc)),_0x3a5442[_0x58dcb7(0x1fd)](_0x58dcb7(0x187),_0x58dcb7(0x1fc)),_0x3a5442[_0x58dcb7(0x1fd)](_0x58dcb7(0x194),_0x58dcb7(0x1ab)+_0x2cd628),_0x3a5442['onload']=function(){var _0x29e399=_0x58dcb7;const _0x29e490=JSON['parse'](_0x3a5442['responseText']);_0x3a5442[_0x29e399(0x1e6)]>=0xc8&&_0x3a5442[_0x29e399(0x1e6)]<0x12c?(_0x29e490[_0x29e399(0x166)]!==0xc8&&console[_0x29e399(0x17d)](_0x29e399(0x1a4),_0x3a5442[_0x29e399(0x1d8)]),_0x3c9892(_0x3a5442[_0x29e399(0x1d8)])):(console[_0x29e399(0x178)]('Error\x20while\x20cancelling\x20booking,\x20xhr.status:\x20',_0x3a5442[_0x29e399(0x1e6)]),console[_0x29e399(0x178)](_0x29e399(0x199),_0x3a5442[_0x29e399(0x1d8)]),_0x467d23<0x1?errorAPICheckLogin(function(_0x206056){var _0x475698=_0x29e399;_0x206056?cancelBooking_resolve(_0x4c7f7c,_0x467d23+0x1)[_0x475698(0x1e5)](_0x3c9892)['catch'](_0x321e04):_0x321e04(new Error(_0x475698(0x1ce)));}):_0x321e04(new Error(_0x29e399(0x180))));},_0x3a5442[_0x58dcb7(0x15d)]=function(){var _0x5aba52=_0x58dcb7;console[_0x5aba52(0x178)]('cancelBooking_resolve\x20-\x20Network\x20error\x20while\x20cancelling\x20booking'),_0x467d23<0x1?errorAPICheckLogin(function(_0x19a9a8){var _0x217b08=_0x5aba52;_0x19a9a8?cancelBooking_resolve(_0x4c7f7c,_0x467d23+0x1)[_0x217b08(0x1e5)](_0x3c9892)[_0x217b08(0x16a)](_0x321e04):_0x321e04(new Error('cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20network\x20error\x20and\x20retry'));}):_0x321e04(new Error(_0x5aba52(0x164)));},_0x3a5442['send']();});}function fetchAndDisplayClassesAvailable(){var _0x1327b2=a0_0x275fbd,_0x551131=document['querySelectorAll'](_0x1327b2(0x201));if(_0x551131[_0x1327b2(0x1c2)]===0x0){console[_0x1327b2(0x17d)]('No\x20locations\x20selected.');return;}var _0x40dac0=document[_0x1327b2(0x19e)](_0x1327b2(0x190))['value'],_0xc0cd32=getLocalDate(),_0x4dd12c={'ALX':0x2,'CBD':0x1,'MVL':0x4},_0x442988=Array[_0x1327b2(0x1e7)](_0x551131)[_0x1327b2(0x18c)](_0x5a6fff=>{var _0x2894bb=_0x1327b2,_0x38574c=_0x5a6fff['getAttribute'](_0x2894bb(0x173)),_0x3762e1=_0x4dd12c[_0x38574c];return _0x3762e1;}),_0x3d9516=localStorage[_0x1327b2(0x165)](_0x1327b2(0x206)),_0x38aba6={'UserId':_0x3d9516,'clubId':_0x442988[0x0],'selectedDate':_0x40dac0,'classType':0x0,'accountId':_0x442988[0x0]};if(_0x40dac0<_0xc0cd32)displayClassAvailable([]);else{var _0x2e076e=_0x1327b2(0x1c5);makeApiRequest(_0x2e076e,_0x1327b2(0x149),_0x38aba6,function(_0xabaf67){var _0x4f76de=_0x1327b2;displayClassAvailable(_0xabaf67[_0x4f76de(0x184)]);});}}function displayClassAvailable(_0x2b2e78){var _0x4e7582=a0_0x275fbd,_0x1cc995=document['getElementById'](_0x4e7582(0x1db));let _0x721a5a=getSelectedClassOptions(),_0xe9fdd9='',_0x402cb9=document[_0x4e7582(0x19e)](_0x4e7582(0x190))['value'];if(_0x2b2e78[_0x4e7582(0x1c2)]===0x0)_0xe9fdd9=_0x4e7582(0x1af);else{const _0x31d6ec=/crossfit|cf/i,_0x288688=/weightlifting/i;let _0x37cca9=_0x2b2e78[_0x4e7582(0x1dd)](_0x4e652d=>{var _0x5a0843=_0x4e7582;const _0x1adc97=_0x31d6ec[_0x5a0843(0x141)](_0x4e652d['className']),_0x2871e4=_0x288688[_0x5a0843(0x141)](_0x4e652d['className']);if(_0x721a5a[_0x5a0843(0x1f8)](_0x5a0843(0x1ca))&&_0x1adc97)return!![];if(_0x721a5a[_0x5a0843(0x1f8)](_0x5a0843(0x1ef))&&_0x2871e4)return!![];if(_0x721a5a[_0x5a0843(0x1f8)](_0x5a0843(0x209))&&!_0x1adc97&&!_0x2871e4)return!![];if(_0x721a5a[_0x5a0843(0x1c2)]===0x0||_0x721a5a[_0x5a0843(0x1c2)]===0x3||_0x721a5a[_0x5a0843(0x1f8)](_0x5a0843(0x145)))return!![];if(_0x721a5a['length']===0x2&&!_0x721a5a[_0x5a0843(0x1f8)](_0x5a0843(0x209)))return _0x1adc97||_0x2871e4;return![];});_0x37cca9['length']===0x0?_0xe9fdd9=_0x4e7582(0x146):_0x37cca9[_0x4e7582(0x158)](_0x8cf965=>{var _0x3230c4=_0x4e7582;const _0x18e1c0=_0x8cf965[_0x3230c4(0x147)]-_0x8cf965[_0x3230c4(0x1df)],_0x4603c6=_0x18e1c0===0x1?_0x3230c4(0x186):_0x3230c4(0x170);_0xe9fdd9+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22booking-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22time\x22>'+_0x8cf965[_0x3230c4(0x144)]+_0x3230c4(0x1dc)+_0x8cf965[_0x3230c4(0x1d7)]+_0x3230c4(0x1b2)+(_0x8cf965[_0x3230c4(0x1bd)]===_0x3230c4(0x195)?_0x3230c4(0x1d6)+_0x8cf965[_0x3230c4(0x198)]+_0x3230c4(0x161)+_0x8cf965[_0x3230c4(0x1b3)]+'\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-date=\x22'+_0x402cb9+_0x3230c4(0x207)+_0x8cf965[_0x3230c4(0x1d7)]+'\x22>Cancel</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spotsleft\x22>'+_0x18e1c0+'\x20'+_0x4603c6+_0x3230c4(0x175):_0x18e1c0>0x0?_0x3230c4(0x13f)+_0x8cf965[_0x3230c4(0x1b3)]+_0x3230c4(0x205)+_0x402cb9+'\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-name=\x22'+_0x8cf965[_0x3230c4(0x1d7)]+_0x3230c4(0x19d)+_0x18e1c0+'\x20'+_0x4603c6+_0x3230c4(0x175):_0x3230c4(0x14a)+_0x8cf965['classScheduleId']+_0x3230c4(0x205)+_0x402cb9+_0x3230c4(0x189)+_0x8cf965[_0x3230c4(0x1d7)]+_0x3230c4(0x169))+_0x3230c4(0x143);});}_0x1cc995[_0x4e7582(0x213)]=_0xe9fdd9;}function getSelectedClassOptions(){var _0x34a2a3=a0_0x275fbd;const _0x3ebc68=document[_0x34a2a3(0x1ea)](_0x34a2a3(0x192));return Array['from'](_0x3ebc68)[_0x34a2a3(0x18c)](_0x260b66=>{var _0x16d09b=_0x34a2a3;const _0x119114=_0x260b66[_0x16d09b(0x20d)][_0x16d09b(0x14b)]();return _0x119114;});}function fetchAndisplayClassBooked(){var _0x185f2f=a0_0x275fbd,_0x490eee=localStorage[_0x185f2f(0x165)](_0x185f2f(0x206)),_0xb3cf6b='https://crossfit168.clubfit.net.au/api/v1/booking/current/'+_0x490eee;makeApiRequest(_0xb3cf6b,_0x185f2f(0x1a2),null,function(_0x5c2f5e){var _0x1e2f1f=_0x185f2f;displayMyBookedClass(_0x5c2f5e[_0x1e2f1f(0x184)]);});}async function displayMyBookedClass(_0x4d4712){var _0xe9b3f0=a0_0x275fbd;const _0x3baa44=document['getElementById'](_0xe9b3f0(0x17a));let _0x40761d='';const _0x26c21a=getLocalDate();for(const _0x3f9098 of _0x4d4712){if(_0x3f9098[_0xe9b3f0(0x172)]!=='Cancelled'){const _0x250040=new Date(_0x3f9098[_0xe9b3f0(0x1ad)])['toISOString']()['slice'](0x0,0xa),_0x140820=new Date(_0x3f9098['bookedDate'])['toLocaleString'](_0xe9b3f0(0x1b6),{'weekday':'short','month':_0xe9b3f0(0x212),'day':'2-digit','hour':'2-digit','minute':_0xe9b3f0(0x1c8)})[_0xe9b3f0(0x15f)](',',''),_0x109342=_0x140820['split']('\x20')[0x0],_0x391417=_0x140820[_0xe9b3f0(0x1f5)]('\x20')[_0xe9b3f0(0x17f)](0x1)[_0xe9b3f0(0x1e4)]('\x20'),_0x5ce9c5=_0xe9b3f0(0x14f)+_0x3f9098[_0xe9b3f0(0x1d7)]+_0xe9b3f0(0x1fe),_0x332e78=_0xe9b3f0(0x1f3)+_0x109342+'\x20'+_0x391417+'</p>',_0x51f438='<p>'+_0x3f9098[_0xe9b3f0(0x1b1)]+_0xe9b3f0(0x1ed);let _0x50155f='';if(_0x250040===_0x26c21a){const _0x5c32b2=await isUserCheckedin(_0x3f9098['classScheduleId'],_0x26c21a,_0x3f9098[_0xe9b3f0(0x144)]);!_0x5c32b2?_0x50155f=_0xe9b3f0(0x156)+_0x3f9098['classScheduleId']+_0xe9b3f0(0x1f2)+_0x3f9098['bookedDate']+_0xe9b3f0(0x20e)+_0x3f9098[_0xe9b3f0(0x1c7)]+'\x22>Cancel</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>':_0x50155f=_0xe9b3f0(0x1d5);}else _0x50155f=_0xe9b3f0(0x1ac)+_0x3f9098[_0xe9b3f0(0x1c7)]+_0xe9b3f0(0x1b9);_0x40761d+=_0xe9b3f0(0x151)+_0x5ce9c5+_0xe9b3f0(0x14d)+_0x332e78+_0xe9b3f0(0x14d)+_0x51f438+_0xe9b3f0(0x1b7)+_0x50155f+_0xe9b3f0(0x17e);}}!_0x40761d&&(_0x40761d=_0xe9b3f0(0x18b)),_0x3baa44[_0xe9b3f0(0x213)]=_0x40761d;}async function isUserCheckedin(_0x4be776,_0x2a4b67,_0xcabb81){var _0x13823c=a0_0x275fbd;console[_0x13823c(0x17d)](_0x13823c(0x1bb)+_0x4be776+'\x20'+_0x2a4b67+'\x20'+_0xcabb81);const _0x556768=_0x13823c(0x1cb),_0x1efc0b={'classScheduleId':_0x4be776,'selectedDate':_0x2a4b67,'classTime':_0xcabb81};try{const _0xe952cf=await makeApiRequest_noToken(_0x556768,_0x13823c(0x149),_0x1efc0b),_0x339b91=_0xe952cf[_0x13823c(0x184)];return console[_0x13823c(0x17d)](_0x339b91),![];}catch(_0x1432ed){console['error'](_0x13823c(0x1be),_0x1432ed);}return![];}function makeApiRequest(_0x11f776,_0x17b24d,_0x2c1c29,_0x5eb521,_0x505361=0x0){var _0x302616=a0_0x275fbd,_0x94894b=localStorage[_0x302616(0x165)]('access_token'),_0xfec8f2=new XMLHttpRequest();_0xfec8f2[_0x302616(0x204)](_0x17b24d,_0x11f776,!![]),_0xfec8f2[_0x302616(0x1fd)]('Content-Type',_0x302616(0x1fc)),_0xfec8f2[_0x302616(0x1fd)](_0x302616(0x187),'application/json'),_0xfec8f2[_0x302616(0x1fd)]('Authorization','Bearer\x20'+_0x94894b),_0xfec8f2[_0x302616(0x1ee)]=function(){var _0xa5dcb=_0x302616;_0xfec8f2[_0xa5dcb(0x1e6)]===0xc8?_0x5eb521(JSON[_0xa5dcb(0x19b)](_0xfec8f2['responseText'])):(console['error']('Error\x20fetching\x20information:',_0xfec8f2[_0xa5dcb(0x1e6)]),_0x505361<0x1?errorAPICheckLogin(function(_0x453b36){_0x453b36&&makeApiRequest(_0x11f776,_0x17b24d,_0x2c1c29,_0x5eb521,_0x505361+0x1);}):console[_0xa5dcb(0x178)]('makeApiRequest\x20-\x20Retried\x20request\x20failed:',_0xfec8f2[_0xa5dcb(0x1e6)]));},_0xfec8f2[_0x302616(0x15d)]=function(){var _0x4c8166=_0x302616;console['error'](_0x4c8166(0x1f1),_0xfec8f2[_0x4c8166(0x15d)]),_0x505361<0x1?errorAPICheckLogin(function(_0x5c8fc7){_0x5c8fc7&&makeApiRequest(_0x11f776,_0x17b24d,_0x2c1c29,_0x5eb521,_0x505361+0x1);}):console[_0x4c8166(0x178)](_0x4c8166(0x1e3),_0xfec8f2['status']);},_0x2c1c29?_0xfec8f2[_0x302616(0x1ba)](JSON['stringify'](_0x2c1c29)):_0xfec8f2['send']();}async function makeApiRequest_noToken(_0x81f89d,_0x2ea4b3,_0x3e4924){var _0x464281=a0_0x275fbd;const _0x1ccecd={'Content-Type':_0x464281(0x1fc),'Accept':_0x464281(0x1fc),'Authorization':'Bearer'},_0x21f61f={'method':_0x2ea4b3,'headers':_0x1ccecd,'body':JSON[_0x464281(0x18f)](_0x3e4924)},_0x207d0a=await fetch(_0x81f89d,_0x21f61f);if(!_0x207d0a['ok'])throw new Error(_0x464281(0x16c)+_0x207d0a[_0x464281(0x1e6)]);return await _0x207d0a[_0x464281(0x1ec)]();}function errorAPICheckLogin(_0x501ce3){var _0x215cfb=a0_0x275fbd;console[_0x215cfb(0x17d)](_0x215cfb(0x153)),validateLogin(function(_0x11d5b0){var _0x8232b5=_0x215cfb;_0x11d5b0?(console[_0x8232b5(0x17d)](_0x8232b5(0x19f)),_0x501ce3(!![])):(console[_0x8232b5(0x17d)](_0x8232b5(0x155)),window[_0x8232b5(0x167)][_0x8232b5(0x1ff)]='/');});}function a0_0x49b2(_0x47d5d0,_0x3b79b6){var _0x4add9d=a0_0x4add();return a0_0x49b2=function(_0x49b2d1,_0x9d8d37){_0x49b2d1=_0x49b2d1-0x13f;var _0x3eed17=_0x4add9d[_0x49b2d1];return _0x3eed17;},a0_0x49b2(_0x47d5d0,_0x3b79b6);}function validateLogin(_0x30fc96){var _0x394428=a0_0x275fbd;if(!localStorage['getItem'](_0x394428(0x15e))||!localStorage[_0x394428(0x165)](_0x394428(0x206))||!localStorage[_0x394428(0x165)](_0x394428(0x191))){console[_0x394428(0x178)]('validateLogin\x20-\x20Required\x20session\x20storage\x20items\x20are\x20missing'),_0x30fc96(![]);return;}const _0x1ccff5='https://admin.clubfit.net.au/api/v1/account/validate',_0x56e03b=_0x394428(0x149),_0x3b5970={'xoken':localStorage[_0x394428(0x165)](_0x394428(0x1a0)),'userId':localStorage['getItem']('portalUserId'),'userType':localStorage[_0x394428(0x165)](_0x394428(0x191))};makeApiRequest(_0x1ccff5,_0x56e03b,_0x3b5970,function(_0x2cd052){var _0x55f838=_0x394428;Object['keys'](_0x2cd052[_0x55f838(0x184)])[_0x55f838(0x158)](function(_0x4ed6db){var _0x505306=_0x55f838;localStorage[_0x505306(0x182)](_0x4ed6db,_0x2cd052[_0x505306(0x184)][_0x4ed6db]);}),_0x30fc96(!![]);},function(_0xd018e0){var _0x2c9716=_0x394428;console[_0x2c9716(0x178)](_0x2c9716(0x142),_0xd018e0),_0x30fc96(![]);});}function checkInParticipant(_0x735e53,_0x27bfcd,_0x42954a){var _0x54b959=a0_0x275fbd;const _0x504ccf='https://crossfit168.clubfit.net.au/api/v1/booking/book-class-participant-checkin';console['log'](_0x54b959(0x1fb)+_0x735e53+'\x20'+_0x27bfcd);const _0x1cc265={'memberNumber':localStorage[_0x54b959(0x165)]('userId'),'classScheduleId':_0x735e53,'classDateTime':_0x27bfcd};function _0x433dc(_0x2c6cee){var _0xf6073f=_0x54b959;if(_0x2c6cee[_0xf6073f(0x184)]==='success'){console['log'](_0xf6073f(0x14e));const _0x1e5312=_0x42954a['parentElement'];_0x1e5312[_0xf6073f(0x213)]='';const _0x3afafe=document['createElement'](_0xf6073f(0x1e9));_0x3afafe[_0xf6073f(0x20d)]='Confirmed',_0x1e5312[_0xf6073f(0x1e2)](_0x3afafe);}else console['error'](_0xf6073f(0x1c3),_0x2c6cee['errors']);}makeApiRequest(_0x504ccf,_0x54b959(0x149),_0x1cc265,_0x433dc);}