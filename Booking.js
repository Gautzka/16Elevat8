var a0_0x135f01=a0_0x4377;(function(_0x3aa652,_0x27ea07){var _0x313e71=a0_0x4377,_0x3e7c65=_0x3aa652();while(!![]){try{var _0x5da654=parseInt(_0x313e71(0xb0))/0x1+-parseInt(_0x313e71(0x159))/0x2*(parseInt(_0x313e71(0x98))/0x3)+-parseInt(_0x313e71(0x9c))/0x4*(-parseInt(_0x313e71(0xdd))/0x5)+-parseInt(_0x313e71(0xc6))/0x6*(parseInt(_0x313e71(0x9f))/0x7)+parseInt(_0x313e71(0xa7))/0x8*(parseInt(_0x313e71(0xbd))/0x9)+-parseInt(_0x313e71(0x144))/0xa*(-parseInt(_0x313e71(0x85))/0xb)+-parseInt(_0x313e71(0x90))/0xc;if(_0x5da654===_0x27ea07)break;else _0x3e7c65['push'](_0x3e7c65['shift']());}catch(_0x2fea25){_0x3e7c65['push'](_0x3e7c65['shift']());}}}(a0_0x5050,0x967f1),document[a0_0x135f01(0xf3)](a0_0x135f01(0x11c),function(){var _0x494901=a0_0x135f01;initDatePicker(),selectFirstTab(),fetchAndisplayClassBooked(),updateHeaderDate(document[_0x494901(0xd7)](_0x494901(0xad))[_0x494901(0x130)]);var _0x41079b=document[_0x494901(0xd7)](_0x494901(0x12a));_0x41079b[_0x494901(0xf3)](_0x494901(0xbf),function(){fetchAndisplayClassBooked();});var _0x41079b=document[_0x494901(0xd7)](_0x494901(0x15c));_0x41079b[_0x494901(0xf3)](_0x494901(0xbf),function(){fetchAndDisplayClassesAvailable();});const _0x517bb2=document[_0x494901(0xd7)](_0x494901(0xad)),_0x20b8d0=document[_0x494901(0xd7)](_0x494901(0xfa)),_0x5a50e5=document[_0x494901(0xd7)](_0x494901(0xea));_0x20b8d0[_0x494901(0xf3)](_0x494901(0xbf),function(){var _0x5a7a1f=_0x494901;_0x1bf1b5(-0x1);var _0x9386b5=document[_0x5a7a1f(0xd7)](_0x5a7a1f(0xad))[_0x5a7a1f(0x130)];saveDatePickerSessionStorage(_0x9386b5),updateHeaderDate(_0x9386b5),fetchAndDisplayClassesAvailable();}),_0x5a50e5['addEventListener'](_0x494901(0xbf),function(){var _0xf7e14=_0x494901;_0x1bf1b5(0x1);var _0x406965=document[_0xf7e14(0xd7)]('datePicker')[_0xf7e14(0x130)];saveDatePickerSessionStorage(_0x406965),updateHeaderDate(_0x406965),fetchAndDisplayClassesAvailable();}),_0x517bb2[_0x494901(0xf3)]('change',function(){var _0x5947e2=_0x494901,_0x90e09d=document[_0x5947e2(0xd7)](_0x5947e2(0xad))[_0x5947e2(0x130)];saveDatePickerSessionStorage(_0x90e09d),updateHeaderDate(_0x90e09d),fetchAndDisplayClassesAvailable();});function _0x1bf1b5(_0x35281a){var _0x188384=_0x494901;const _0x5b96e1=new Date(_0x517bb2[_0x188384(0x130)]+_0x188384(0x11f));_0x5b96e1[_0x188384(0xb2)](_0x5b96e1['getDate']()+_0x35281a),_0x517bb2[_0x188384(0x130)]=formatDate(_0x5b96e1);}var _0x11d3fd=document['querySelectorAll'](_0x494901(0xe3));_0x11d3fd[_0x494901(0xc4)](function(_0x106af2){var _0x3d682d=_0x494901;_0x106af2['addEventListener'](_0x3d682d(0xbf),function(){var _0x5b5050=_0x3d682d;_0x11d3fd['forEach'](function(_0xca361b){var _0x30a8e2=a0_0x4377;_0xca361b[_0x30a8e2(0xa6)][_0x30a8e2(0x119)](_0x30a8e2(0x92));}),this[_0x5b5050(0xa6)]['add']('selected-option'),fetchAndDisplayClassesAvailable();});});var _0x721fb8=document[_0x494901(0x8b)](_0x494901(0x87));_0x721fb8[_0x494901(0xc4)](function(_0x528e20){var _0x5eeb37=_0x494901;_0x528e20[_0x5eeb37(0xf3)](_0x5eeb37(0xbf),function(){var _0x441632=_0x5eeb37;this[_0x441632(0xa6)]['toggle'](_0x441632(0x92)),fetchAndDisplayClassesAvailable();});}),document[_0x494901(0xd7)](_0x494901(0xb9))[_0x494901(0xf3)](_0x494901(0xbf),function(_0x21ef6f){var _0xfcc2cc=_0x494901;if(_0x21ef6f['target']&&_0x21ef6f[_0xfcc2cc(0xd8)]['matches'](_0xfcc2cc(0x124))){var _0xb2c29c=_0x21ef6f[_0xfcc2cc(0xd8)]['getAttribute'](_0xfcc2cc(0xb1));cancelBooking_resolve(_0xb2c29c)[_0xfcc2cc(0xcc)](()=>{fetchAndDisplayClassesAvailable();})[_0xfcc2cc(0x12b)](_0x271172=>{var _0x1a73b1=_0xfcc2cc;console[_0x1a73b1(0x104)]('EventListener\x20-\x20Cancellation\x20error:',_0x271172);});}else{if(_0x21ef6f['target']&&_0x21ef6f[_0xfcc2cc(0xd8)][_0xfcc2cc(0xac)]('.book-button'))bookClass(_0x21ef6f[_0xfcc2cc(0xd8)]),fetchAndDisplayClassesAvailable();else{if(_0x21ef6f[_0xfcc2cc(0xd8)]&&_0x21ef6f[_0xfcc2cc(0xd8)][_0xfcc2cc(0xb8)]('.booking-item')){var _0x18c0b7=_0x21ef6f[_0xfcc2cc(0xd8)][_0xfcc2cc(0xb8)](_0xfcc2cc(0x81));if(_0x21ef6f[_0xfcc2cc(0xd8)][_0xfcc2cc(0xb8)](_0xfcc2cc(0x13f))){_0x18c0b7[_0xfcc2cc(0x8b)](_0xfcc2cc(0x11a))[_0xfcc2cc(0xc4)](function(_0x197d82){var _0x598064=_0xfcc2cc;_0x197d82[_0x598064(0xa6)][_0x598064(0x119)](_0x598064(0xec));});return;}var _0x4dda5e=_0x18c0b7[_0xfcc2cc(0x158)](_0xfcc2cc(0xd6))||_0x18c0b7[_0xfcc2cc(0x158)]('.cancel-button')||_0x18c0b7[_0xfcc2cc(0x158)](_0xfcc2cc(0xe2));if(_0x4dda5e){var _0x4962d7=_0x4dda5e[_0xfcc2cc(0xd5)]('data-class-schedule-id'),_0x434b0e=_0x4dda5e[_0xfcc2cc(0xd5)]('data-class-date'),_0xcfe950=_0x18c0b7[_0xfcc2cc(0x158)]('.time')['textContent'],_0xe3d6ce=_0x18c0b7['querySelector'](_0xfcc2cc(0xf6))['textContent'],_0x214616=document[_0xfcc2cc(0xd2)](_0xfcc2cc(0x9d));_0x214616[_0xfcc2cc(0xbc)]('data-class-schedule-id',_0x4962d7),_0x214616[_0xfcc2cc(0xbc)](_0xfcc2cc(0x131),_0x434b0e),_0x214616['setAttribute'](_0xfcc2cc(0x9a),_0xcfe950),_0x214616[_0xfcc2cc(0xbc)](_0xfcc2cc(0xae),_0xe3d6ce),checkAttendees(_0x214616,_0x18c0b7);}else console[_0xfcc2cc(0x104)](_0xfcc2cc(0xa1));}}}}),document[_0x494901(0xd7)](_0x494901(0x117))['addEventListener'](_0x494901(0xbf),function(_0x150504){var _0xc18de3=_0x494901;if(_0x150504[_0xc18de3(0xd8)]&&_0x150504[_0xc18de3(0xd8)][_0xc18de3(0xac)]('.cancel-button')){var _0x36f5e8=_0x150504[_0xc18de3(0xd8)]['getAttribute'](_0xc18de3(0xb1));cancelBooking_resolve(_0x36f5e8)[_0xc18de3(0xcc)](()=>{fetchAndisplayClassBooked();})[_0xc18de3(0x12b)](_0x1d8259=>{var _0x502f57=_0xc18de3;console[_0x502f57(0x104)]('EventListener\x20-\x20Cancellation\x20error:',_0x1d8259);});}else{if(_0x150504[_0xc18de3(0xd8)]&&_0x150504['target'][_0xc18de3(0xac)](_0xc18de3(0xcb))){const _0x5a59b4=_0x150504[_0xc18de3(0xd8)];var _0x2cd7dc=_0x150504[_0xc18de3(0xd8)][_0xc18de3(0xd5)](_0xc18de3(0xe6)),_0x22c3fa=_0x150504['target'][_0xc18de3(0xd5)](_0xc18de3(0xc9));console['log'](_0xc18de3(0x109)+_0x2cd7dc+'\x20'+_0x22c3fa),checkInParticipant(_0x2cd7dc,_0x22c3fa,_0x5a59b4);}}});}));function initDatePicker(){var _0x5a6f01=a0_0x135f01;const _0x5e7a2b=document[_0x5a6f01(0xd7)](_0x5a6f01(0xad));let _0x3fbdc7=sessionStorage[_0x5a6f01(0xc5)](_0x5a6f01(0xd9)),_0x19a975=sessionStorage[_0x5a6f01(0xc5)](_0x5a6f01(0x111));_0x3fbdc7&&_0x19a975&&isWithinValidityPeriod(_0x19a975,0.5)?_0x5e7a2b[_0x5a6f01(0x130)]=_0x3fbdc7:(currentDate=getLocalDate(),_0x5e7a2b[_0x5a6f01(0x130)]=currentDate,saveDatePickerSessionStorage(currentDate));}function selectFirstTab(){var _0x233aee=a0_0x135f01,_0x5086ed=document[_0x233aee(0xd7)](_0x233aee(0x12a)),_0x3d8840=document[_0x233aee(0xd7)](_0x233aee(0x15c));_0x5086ed[_0x233aee(0xa6)]['add']('w--current'),_0x5086ed['setAttribute'](_0x233aee(0x105),_0x233aee(0x116)),_0x3d8840['classList'][_0x233aee(0x119)](_0x233aee(0xee)),_0x3d8840[_0x233aee(0xbc)](_0x233aee(0x105),_0x233aee(0x15d));}function isWithinValidityPeriod(_0x86e483,_0x5e3127){const _0x156117=new Date()['getTime'](),_0x830a58=(_0x156117-_0x86e483)/(0x3e8*0x3c*0x3c);return _0x830a58<=_0x5e3127;}function formatDate(_0x4f4683){var _0x4ddbd9=a0_0x135f01;let _0x31fdd3=new Date(_0x4f4683),_0x34df32=''+(_0x31fdd3[_0x4ddbd9(0xdf)]()+0x1),_0x1ac07f=''+_0x31fdd3['getDate'](),_0x1122b0=_0x31fdd3[_0x4ddbd9(0x82)]();if(_0x34df32[_0x4ddbd9(0xd4)]<0x2)_0x34df32='0'+_0x34df32;if(_0x1ac07f[_0x4ddbd9(0xd4)]<0x2)_0x1ac07f='0'+_0x1ac07f;return[_0x1122b0,_0x34df32,_0x1ac07f][_0x4ddbd9(0x10b)]('-');}function updateHeaderDate(_0x33f09c){var _0xd233eb=a0_0x135f01;const _0x14fa75=document[_0xd233eb(0xd7)](_0xd233eb(0x126));if(!_0x14fa75){console[_0xd233eb(0x104)](_0xd233eb(0xf8));return;}const _0x19f22c=new Date(_0x33f09c),_0x5ce4b1=_0x19f22c[_0xd233eb(0x121)](),_0x4ac6b4=_0x19f22c[_0xd233eb(0xa3)](_0xd233eb(0x113),{'month':_0xd233eb(0x108)}),_0x586e25=_0x19f22c[_0xd233eb(0xa3)](_0xd233eb(0x113),{'weekday':_0xd233eb(0x108)});function _0x118540(_0x5e4305){if(_0x5e4305>0x3&&_0x5e4305<0x15)return'th';switch(_0x5e4305%0xa){case 0x1:return'st';case 0x2:return'nd';case 0x3:return'rd';default:return'th';}}const _0x4d3430=_0x586e25+'\x20'+(_0x5ce4b1<0xa?'0':'')+_0x5ce4b1+_0x118540(_0x5ce4b1)+'\x20'+_0x4ac6b4;_0x14fa75[_0xd233eb(0x10d)]=_0x4d3430;}function getLocalDate(){var _0x5248e7=a0_0x135f01;const _0x11c4af=new Date(),_0x4a329e=_0x11c4af[_0x5248e7(0x14d)]()*0xea60,_0x19f727=new Date(_0x11c4af-_0x4a329e)['toISOString']()[_0x5248e7(0x118)](0x0,0xa);return _0x19f727;}function saveDatePickerSessionStorage(_0x246813){var _0x4a2ecf=a0_0x135f01;sessionStorage[_0x4a2ecf(0x8a)]('selectedDate',_0x246813),timestamp=new Date()[_0x4a2ecf(0xda)](),sessionStorage[_0x4a2ecf(0x8a)]('timestampLastChanged',timestamp);}function bookClass(_0x42fbf2){var _0x806c36=a0_0x135f01,_0x12d8d2=_0x42fbf2['getAttribute'](_0x806c36(0xaa)),_0x1e9995=_0x42fbf2[_0x806c36(0xd5)](_0x806c36(0x131)),_0x45289a=_0x42fbf2[_0x806c36(0xd5)](_0x806c36(0xae)),_0x5ea3e9=localStorage[_0x806c36(0xc5)](_0x806c36(0x127)),_0x12b89a=localStorage[_0x806c36(0xc5)](_0x806c36(0xde)),_0x428e14=_0x806c36(0x133),_0x563426={'classScheduleId':_0x12d8d2,'classDateTime':_0x1e9995,'className':_0x45289a,'userId':_0x5ea3e9,'onBehalfBookingReference':'','onBehalfBookFor':''},_0x1395b4=new XMLHttpRequest();_0x1395b4[_0x806c36(0xe9)](_0x806c36(0x122),_0x428e14,!![]),_0x1395b4['setRequestHeader']('Content-Type',_0x806c36(0x95)),_0x1395b4[_0x806c36(0x14f)](_0x806c36(0x7e),_0x806c36(0x95)),_0x1395b4['setRequestHeader'](_0x806c36(0x97),'Bearer\x20'+_0x12b89a),_0x1395b4[_0x806c36(0xaf)]=function(){var _0x41b3d0=_0x806c36,_0x1c26c1;try{_0x1c26c1=JSON['parse'](_0x1395b4[_0x41b3d0(0xcf)]);}catch(_0x2f02c9){_0x1c26c1={'errors':{'message':_0x41b3d0(0x14b)}};}_0x1395b4[_0x41b3d0(0x7f)]>=0xc8&&_0x1395b4[_0x41b3d0(0x7f)]<0x12c&&_0x1c26c1[_0x41b3d0(0x8f)]===0xc8?fetchAndDisplayClassesAvailable():(console['log'](_0x41b3d0(0x8e)+_0x1395b4[_0x41b3d0(0x7f)]+_0x41b3d0(0xe1)),alert(_0x1c26c1['errors'][_0x41b3d0(0x11e)]),errorAPICheckLogin(function(_0x3dbee9){var _0x553447=_0x41b3d0;!_0x3dbee9&&console[_0x553447(0x104)](_0x553447(0x148));}));},_0x1395b4[_0x806c36(0xb7)]=function(){var _0x40e34f=_0x806c36;alert(_0x40e34f(0x156)),errorAPICheckLogin(function(_0x45a16e){var _0x339c6e=_0x40e34f;!_0x45a16e&&console[_0x339c6e(0x104)](_0x339c6e(0x148));});},_0x1395b4[_0x806c36(0x155)](JSON['stringify'](_0x563426));}function displayErrorMessage(_0x50514a,_0x1ac39e){var _0x3c275a=a0_0x135f01;clearErrorMessage(_0x50514a);var _0x3c5035=document[_0x3c275a(0xd2)](_0x3c275a(0xff));_0x3c5035['className']=_0x3c275a(0xc7),_0x3c5035[_0x3c275a(0x10d)]=_0x1ac39e,_0x50514a[_0x3c275a(0xc2)][_0x3c275a(0xab)](_0x3c5035,_0x50514a['nextSibling']);}function clearErrorMessage(_0x331dd3){var _0x256643=a0_0x135f01,_0x448c5a=_0x331dd3['nextSibling'];_0x448c5a&&_0x448c5a[_0x256643(0x12f)]==='error-message'&&_0x448c5a[_0x256643(0x119)]();}function showInlineAttendees(_0x269262,_0x793940){var _0x22d463=a0_0x135f01,_0x23a7a2=_0x793940[_0x22d463(0x158)](_0x22d463(0x13f));if(!_0x23a7a2)_0x23a7a2=document[_0x22d463(0xd2)](_0x22d463(0xff)),_0x23a7a2['className']=_0x22d463(0xe5),_0x793940['appendChild'](_0x23a7a2),_0x23a7a2[_0x22d463(0x153)][_0x22d463(0xf0)]=_0x22d463(0xf9);else{_0x23a7a2['style'][_0x22d463(0x152)]=_0x23a7a2[_0x22d463(0x153)][_0x22d463(0x152)]===_0x22d463(0x107)?'none':'block';return;}var _0x479a20='';Array[_0x22d463(0x9b)](_0x269262)&&_0x269262[_0x22d463(0xd4)]>0x0?(_0x269262['sort']((_0x33f127,_0x68e3f0)=>_0x33f127[_0x22d463(0xa4)][_0x22d463(0x136)](_0x68e3f0[_0x22d463(0xa4)])),_0x269262[_0x22d463(0xc4)](function(_0x5e558f){var _0x17cbda=_0x22d463,_0x57b3c5=_0x5e558f[_0x17cbda(0xa4)][_0x17cbda(0xcd)]('\x20')[0x0];_0x479a20+=_0x17cbda(0xfd)+_0x5e558f['memberPhotoLocation']+_0x17cbda(0x8d)+_0x57b3c5+_0x17cbda(0xba);})):_0x479a20+=_0x22d463(0xe7),_0x23a7a2[_0x22d463(0x154)]=_0x479a20,_0x23a7a2[_0x22d463(0x153)][_0x22d463(0x152)]='block',_0x23a7a2[_0x22d463(0x8b)]('.attendee-photo')[_0x22d463(0xc4)](function(_0x577c0c){var _0xbca34d=_0x22d463;_0x577c0c[_0xbca34d(0xf3)](_0xbca34d(0xbf),function(_0x336154){var _0x9d0a9b=_0xbca34d;_0x577c0c[_0x9d0a9b(0xa6)]['contains']('enlarged')?_0x577c0c[_0x9d0a9b(0xa6)]['remove'](_0x9d0a9b(0xec)):(_0x23a7a2[_0x9d0a9b(0x8b)](_0x9d0a9b(0x11a))['forEach'](function(_0xfb3338){var _0x561b88=_0x9d0a9b;_0xfb3338[_0x561b88(0xa6)][_0x561b88(0x119)](_0x561b88(0xec));}),_0x577c0c['classList'][_0x9d0a9b(0x10f)](_0x9d0a9b(0xec))),_0x336154[_0x9d0a9b(0xc8)]();});}),_0x23a7a2[_0x22d463(0xf3)](_0x22d463(0xbf),function(_0x5f1f16){var _0x50d159=_0x22d463;_0x23a7a2['querySelectorAll'](_0x50d159(0x11a))[_0x50d159(0xc4)](function(_0x5d775d){var _0x3621e8=_0x50d159;_0x5d775d[_0x3621e8(0xa6)][_0x3621e8(0x119)](_0x3621e8(0xec));}),_0x5f1f16['stopPropagation']();}),document[_0x22d463(0xf3)](_0x22d463(0xbf),function(_0x3fe211){var _0x4d1c8e=_0x22d463;!_0x793940[_0x4d1c8e(0xb5)](_0x3fe211[_0x4d1c8e(0xd8)])&&_0x23a7a2['querySelectorAll']('.attendee-photo')[_0x4d1c8e(0xc4)](function(_0x451f1f){var _0x3341ca=_0x4d1c8e;_0x451f1f[_0x3341ca(0xa6)][_0x3341ca(0x119)](_0x3341ca(0xec));});});}function checkAttendees(_0x202d37,_0x5b6562){var _0x3a41fb=a0_0x135f01,_0x24e450=_0x202d37[_0x3a41fb(0xd5)]('data-class-schedule-id'),_0x15b959=_0x202d37['getAttribute']('data-class-date'),_0x4a7043=_0x202d37['getAttribute'](_0x3a41fb(0x9a)),_0x5e23bf=_0x3a41fb(0x93),_0x171735={'classScheduleId':_0x24e450,'selectedDate':_0x15b959,'classTime':_0x4a7043},_0x5191ad=new XMLHttpRequest();_0x5191ad['open'](_0x3a41fb(0x122),_0x5e23bf,!![]),_0x5191ad[_0x3a41fb(0x14f)](_0x3a41fb(0x14e),_0x3a41fb(0x95)),_0x5191ad[_0x3a41fb(0x14f)]('Accept',_0x3a41fb(0x95)),_0x5191ad['setRequestHeader'](_0x3a41fb(0x97),_0x3a41fb(0x8c)),_0x5191ad['onload']=function(){var _0x5d8504=_0x3a41fb;if(_0x5191ad[_0x5d8504(0x7f)]>=0xc8&&_0x5191ad[_0x5d8504(0x7f)]<0x12c){var _0x550d9f=JSON[_0x5d8504(0x141)](_0x5191ad[_0x5d8504(0xcf)]),_0x336031=_0x550d9f[_0x5d8504(0xc1)];showInlineAttendees(_0x336031,_0x5b6562);}else console[_0x5d8504(0x104)](_0x5d8504(0xfb),_0x5191ad['status']),errorAPICheckLogin();},_0x5191ad['onerror']=function(){var _0x33ce68=_0x3a41fb;console[_0x33ce68(0x104)](_0x33ce68(0x157)),errorAPICheckLogin();},_0x5191ad['send'](JSON[_0x3a41fb(0xc0)](_0x171735));}function cancelBooking_resolve(_0x399e41,_0x1aad03=0x0){return new Promise((_0x5396e5,_0x1b30ec)=>{var _0x5087ba=a0_0x4377,_0x5f0e3f=localStorage[_0x5087ba(0xc5)](_0x5087ba(0xde)),_0xc5a809=_0x5087ba(0x147)+_0x399e41,_0x26c2c0=new XMLHttpRequest();_0x26c2c0[_0x5087ba(0xe9)](_0x5087ba(0x122),_0xc5a809,!![]),_0x26c2c0[_0x5087ba(0x14f)](_0x5087ba(0x14e),_0x5087ba(0x95)),_0x26c2c0[_0x5087ba(0x14f)](_0x5087ba(0x7e),_0x5087ba(0x95)),_0x26c2c0[_0x5087ba(0x14f)](_0x5087ba(0x97),'Bearer\x20'+_0x5f0e3f),_0x26c2c0[_0x5087ba(0xaf)]=function(){var _0x135c94=_0x5087ba;const _0x51550e=JSON[_0x135c94(0x141)](_0x26c2c0[_0x135c94(0xcf)]);_0x26c2c0[_0x135c94(0x7f)]>=0xc8&&_0x26c2c0[_0x135c94(0x7f)]<0x12c?(_0x51550e[_0x135c94(0x8f)]!==0xc8&&console[_0x135c94(0xa9)]('Response\x20received:',_0x26c2c0['responseText']),_0x5396e5(_0x26c2c0['responseText'])):(console['error']('Error\x20while\x20cancelling\x20booking,\x20xhr.status:\x20',_0x26c2c0[_0x135c94(0x7f)]),console[_0x135c94(0x104)](_0x135c94(0x110),_0x26c2c0[_0x135c94(0xcf)]),_0x1aad03<0x1?errorAPICheckLogin(function(_0x3509fd){var _0x5b4548=_0x135c94;_0x3509fd?cancelBooking_resolve(_0x399e41,_0x1aad03+0x1)['then'](_0x5396e5)[_0x5b4548(0x12b)](_0x1b30ec):_0x1b30ec(new Error(_0x5b4548(0x89)));}):_0x1b30ec(new Error(_0x135c94(0xed))));},_0x26c2c0[_0x5087ba(0xb7)]=function(){var _0x2e317a=_0x5087ba;console[_0x2e317a(0x104)](_0x2e317a(0xf2)),_0x1aad03<0x1?errorAPICheckLogin(function(_0x1a5b6e){var _0x41351c=_0x2e317a;_0x1a5b6e?cancelBooking_resolve(_0x399e41,_0x1aad03+0x1)[_0x41351c(0xcc)](_0x5396e5)['catch'](_0x1b30ec):_0x1b30ec(new Error(_0x41351c(0x99)));}):_0x1b30ec(new Error(_0x2e317a(0xe4)));},_0x26c2c0['send']();});}function fetchAndDisplayClassesAvailable(){var _0xba240=a0_0x135f01,_0x962650=document[_0xba240(0x8b)](_0xba240(0x129));if(_0x962650[_0xba240(0xd4)]===0x0){console[_0xba240(0xa9)](_0xba240(0x115));return;}var _0x159992=document['getElementById'](_0xba240(0xad))[_0xba240(0x130)],_0x20b9a9=getLocalDate(),_0x2ab938={'ALX':0x2,'CBD':0x1,'MVL':0x4},_0x37031a=Array[_0xba240(0x15a)](_0x962650)['map'](_0x5a969f=>{var _0x23db43=_0xba240,_0x31b121=_0x5a969f[_0x23db43(0xd5)]('data-location'),_0x38b667=_0x2ab938[_0x31b121];return _0x38b667;}),_0x23059b=localStorage[_0xba240(0xc5)](_0xba240(0x127)),_0x238661={'UserId':_0x23059b,'clubId':_0x37031a[0x0],'selectedDate':_0x159992,'classType':0x0,'accountId':_0x37031a[0x0]};if(_0x159992<_0x20b9a9)displayClassAvailable([]);else{var _0x2d4f3a=_0xba240(0xfc);makeApiRequest(_0x2d4f3a,_0xba240(0x122),_0x238661,function(_0x44e5f8){var _0x4e8adc=_0xba240;displayClassAvailable(_0x44e5f8[_0x4e8adc(0xc1)]);});}}function a0_0x4377(_0x13c0bc,_0xb3dd6){var _0x505032=a0_0x5050();return a0_0x4377=function(_0x4377a2,_0x3923b6){_0x4377a2=_0x4377a2-0x7e;var _0x3ea9b9=_0x505032[_0x4377a2];return _0x3ea9b9;},a0_0x4377(_0x13c0bc,_0xb3dd6);}function displayClassAvailable(_0x2d9c00){var _0x4d1b8e=a0_0x135f01,_0x3a2cc0=document[_0x4d1b8e(0xd7)]('class-available');let _0x2ff2de=getSelectedClassOptions(),_0x14c46b='',_0x3302a3=document[_0x4d1b8e(0xd7)]('datePicker')[_0x4d1b8e(0x130)];if(_0x2d9c00[_0x4d1b8e(0xd4)]===0x0)_0x14c46b=_0x4d1b8e(0x125);else{const _0x53e3f4=/crossfit|cf/i,_0x3f11ba=/weightlifting/i;let _0x3e9b86=_0x2d9c00['filter'](_0x30a854=>{var _0x33dc71=_0x4d1b8e;const _0x5921d3=_0x53e3f4['test'](_0x30a854[_0x33dc71(0x12f)]),_0x59aae5=_0x3f11ba[_0x33dc71(0x120)](_0x30a854[_0x33dc71(0x12f)]);if(_0x2ff2de['includes'](_0x33dc71(0x100))&&_0x5921d3)return!![];if(_0x2ff2de[_0x33dc71(0x13c)]('Weightlifting')&&_0x59aae5)return!![];if(_0x2ff2de['includes'](_0x33dc71(0x10c))&&!_0x5921d3&&!_0x59aae5)return!![];if(_0x2ff2de[_0x33dc71(0xd4)]===0x0||_0x2ff2de[_0x33dc71(0xd4)]===0x3||_0x2ff2de[_0x33dc71(0x13c)]('All'))return!![];if(_0x2ff2de[_0x33dc71(0xd4)]===0x2&&!_0x2ff2de[_0x33dc71(0x13c)](_0x33dc71(0x10c)))return _0x5921d3||_0x59aae5;return![];});_0x3e9b86['length']===0x0?_0x14c46b=_0x4d1b8e(0x10a):_0x3e9b86['forEach'](_0x2cf0ad=>{var _0x386a71=_0x4d1b8e;const _0x2d7e8e=_0x2cf0ad[_0x386a71(0x9e)]-_0x2cf0ad[_0x386a71(0x13b)],_0x42c8cd=_0x2d7e8e===0x1?'spot':_0x386a71(0xa5);_0x14c46b+=_0x386a71(0x84)+_0x2cf0ad[_0x386a71(0x96)]+_0x386a71(0xeb)+_0x2cf0ad[_0x386a71(0x12f)]+_0x386a71(0xbe)+(_0x2cf0ad[_0x386a71(0xf1)]==='Booked'?'<button\x20class=\x22cancel-button\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-member-booking-id=\x22'+_0x2cf0ad[_0x386a71(0x83)]+_0x386a71(0xce)+_0x2cf0ad[_0x386a71(0xe6)]+_0x386a71(0xe0)+_0x3302a3+'\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-name=\x22'+_0x2cf0ad[_0x386a71(0x12f)]+_0x386a71(0x112)+_0x2d7e8e+'\x20'+_0x42c8cd+'\x20left</div>':_0x2d7e8e>0x0?_0x386a71(0x145)+_0x2cf0ad['classScheduleId']+_0x386a71(0x11d)+_0x3302a3+_0x386a71(0x12c)+_0x2cf0ad['className']+_0x386a71(0xfe)+_0x2d7e8e+'\x20'+_0x42c8cd+_0x386a71(0x143):_0x386a71(0x94)+_0x2cf0ad[_0x386a71(0xe6)]+_0x386a71(0x11d)+_0x3302a3+_0x386a71(0x12c)+_0x2cf0ad[_0x386a71(0x12f)]+_0x386a71(0x11b))+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';});}_0x3a2cc0[_0x4d1b8e(0x154)]=_0x14c46b;}function getSelectedClassOptions(){var _0x301269=a0_0x135f01;const _0x12defe=document[_0x301269(0x8b)](_0x301269(0x138));return Array[_0x301269(0x15a)](_0x12defe)[_0x301269(0xb6)](_0x126d21=>{var _0x324396=_0x301269;const _0x3ecf92=_0x126d21[_0x324396(0x10d)][_0x324396(0x14c)]();return _0x3ecf92;});}function fetchAndisplayClassBooked(){var _0x454794=a0_0x135f01,_0x53e9c0=localStorage[_0x454794(0xc5)]('userId'),_0x437cf0=_0x454794(0xca)+_0x53e9c0;makeApiRequest(_0x437cf0,_0x454794(0x12d),null,function(_0x1981f3){var _0x16d5e2=_0x454794;displayMyBookedClass(_0x1981f3[_0x16d5e2(0xc1)]);});}async function displayMyBookedClass(_0x27cd0a){var _0x4a111b=a0_0x135f01;const _0x4aa480=document[_0x4a111b(0xd7)](_0x4a111b(0x117));let _0x22352e='';const _0x4145f8=getLocalDate();for(const _0x1bb2dc of _0x27cd0a){if(_0x1bb2dc[_0x4a111b(0x106)]!==_0x4a111b(0x149)){const _0x39324b=new Date(_0x1bb2dc[_0x4a111b(0x114)])[_0x4a111b(0x139)]()['slice'](0x0,0xa),_0x34a11b=new Date(_0x1bb2dc['bookedDate'])[_0x4a111b(0xa3)](_0x4a111b(0x113),{'weekday':_0x4a111b(0xa0),'month':'short','day':_0x4a111b(0x132),'hour':_0x4a111b(0x132),'minute':_0x4a111b(0x132)})[_0x4a111b(0xbb)](',',''),_0x5444de=_0x34a11b[_0x4a111b(0xcd)]('\x20')[0x0],_0x29e953=_0x34a11b['split']('\x20')['slice'](0x1)['join']('\x20'),_0x1ab404=_0x4a111b(0x137)+_0x1bb2dc[_0x4a111b(0x12f)]+'</h3>',_0x6198b6='<p>'+_0x5444de+'\x20'+_0x29e953+_0x4a111b(0xef),_0xf7bd35=_0x4a111b(0x123)+_0x1bb2dc['clubName']+_0x4a111b(0xef);let _0x46d153='';if(_0x39324b===_0x4145f8){const _0x28e552=await isUserCheckedin(_0x1bb2dc['classScheduleId'],_0x4145f8,_0x1bb2dc[_0x4a111b(0x96)]);!_0x28e552?_0x46d153='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22action-button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22signin-button\x22\x20data-class-schedule-id=\x22'+_0x1bb2dc[_0x4a111b(0xe6)]+_0x4a111b(0xd1)+_0x1bb2dc['bookedDate']+_0x4a111b(0x150)+_0x1bb2dc[_0x4a111b(0xc3)]+_0x4a111b(0x12e):_0x46d153=_0x4a111b(0x101);}else _0x46d153=_0x4a111b(0x142)+_0x1bb2dc[_0x4a111b(0xc3)]+_0x4a111b(0xb4);_0x22352e+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22booked-class-columns\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22div-each-class\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22w-richtext\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x1ab404+_0x4a111b(0x13a)+_0x6198b6+_0x4a111b(0x13a)+_0xf7bd35+_0x4a111b(0x135)+_0x46d153+_0x4a111b(0xf5);}}!_0x22352e&&(_0x22352e=_0x4a111b(0x151)),_0x4aa480['innerHTML']=_0x22352e;}async function isUserCheckedin(_0x7273c6,_0x5b3281,_0x34219d){var _0x2488e6=a0_0x135f01;const _0x5eecf5=_0x2488e6(0x93),_0x19d89d={'classScheduleId':_0x7273c6,'selectedDate':_0x5b3281,'classTime':_0x34219d};try{const _0x387b25=await makeApiRequest_noToken(_0x5eecf5,_0x2488e6(0x122),_0x19d89d),_0x43cc24=_0x387b25['payload'],_0x158a27=localStorage['getItem']('portalUserId');for(const _0x5abb71 of _0x43cc24){console['log'](_0x5abb71[_0x2488e6(0x102)]+'\x20:'+articipant[_0x2488e6(0x10e)]);if(_0x5abb71['number']===_0x158a27&&_0x5abb71[_0x2488e6(0x10e)])return!![];}}catch(_0x3efb40){console['error'](_0x2488e6(0x13d),_0x3efb40);}return![];}function makeApiRequest(_0x2db972,_0x105d43,_0x177cbe,_0x4f6fe3,_0x253320=0x0){var _0x3ea353=a0_0x135f01,_0x23f1d5=localStorage[_0x3ea353(0xc5)](_0x3ea353(0xde)),_0x3852c9=new XMLHttpRequest();_0x3852c9[_0x3ea353(0xe9)](_0x105d43,_0x2db972,!![]),_0x3852c9[_0x3ea353(0x14f)](_0x3ea353(0x14e),'application/json'),_0x3852c9[_0x3ea353(0x14f)](_0x3ea353(0x7e),'application/json'),_0x3852c9[_0x3ea353(0x14f)](_0x3ea353(0x97),_0x3ea353(0x134)+_0x23f1d5),_0x3852c9[_0x3ea353(0xaf)]=function(){var _0x2163fb=_0x3ea353;_0x3852c9[_0x2163fb(0x7f)]===0xc8?_0x4f6fe3(JSON[_0x2163fb(0x141)](_0x3852c9[_0x2163fb(0xcf)])):(console[_0x2163fb(0x104)]('Error\x20fetching\x20information:',_0x3852c9[_0x2163fb(0x7f)]),_0x253320<0x1?errorAPICheckLogin(function(_0x5d265e){_0x5d265e&&makeApiRequest(_0x2db972,_0x105d43,_0x177cbe,_0x4f6fe3,_0x253320+0x1);}):console['error'](_0x2163fb(0xa2),_0x3852c9[_0x2163fb(0x7f)]));},_0x3852c9[_0x3ea353(0xb7)]=function(){var _0x58db62=_0x3ea353;console[_0x58db62(0x104)](_0x58db62(0x146),_0x3852c9['onerror']),_0x253320<0x1?errorAPICheckLogin(function(_0x57e8f3){_0x57e8f3&&makeApiRequest(_0x2db972,_0x105d43,_0x177cbe,_0x4f6fe3,_0x253320+0x1);}):console[_0x58db62(0x104)](_0x58db62(0xa2),_0x3852c9[_0x58db62(0x7f)]);},_0x177cbe?_0x3852c9[_0x3ea353(0x155)](JSON[_0x3ea353(0xc0)](_0x177cbe)):_0x3852c9[_0x3ea353(0x155)]();}async function makeApiRequest_noToken(_0x117cc9,_0xe8a7ad,_0x3b0bfe){var _0x2a8af9=a0_0x135f01;const _0x3e6c18={'Content-Type':_0x2a8af9(0x95),'Accept':'application/json','Authorization':_0x2a8af9(0xd3)},_0x51838c={'method':_0xe8a7ad,'headers':_0x3e6c18,'body':JSON[_0x2a8af9(0xc0)](_0x3b0bfe)},_0xf3b5dc=await fetch(_0x117cc9,_0x51838c);if(!_0xf3b5dc['ok'])throw new Error(_0x2a8af9(0xdb)+_0xf3b5dc[_0x2a8af9(0x7f)]);return await _0xf3b5dc['json']();}function errorAPICheckLogin(_0x2e5bfe){var _0x1f5dbb=a0_0x135f01;console[_0x1f5dbb(0xa9)](_0x1f5dbb(0xe8)),validateLogin(function(_0x39d8c2){var _0x18504e=_0x1f5dbb;_0x39d8c2?(console[_0x18504e(0xa9)](_0x18504e(0xf7)),_0x2e5bfe(!![])):(console[_0x18504e(0xa9)]('errorAPICheckLogin\x20-\x20login\x20not\x20validated'),window[_0x18504e(0xf4)][_0x18504e(0x14a)]='/');});}function a0_0x5050(){var _0x20be98=['onerror','closest','class-available','</div>','replace','setAttribute','38169jTJEkA','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22buttonandavailability\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22action-button\x22\x20style=\x22margin-left:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','click','stringify','payload','parentNode','bookedId','forEach','getItem','66fYZpcH','error-message','stopPropagation','classDateTime','https://crossfit168.clubfit.net.au/api/v1/booking/current/','.signin-button','then','split','\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-schedule-id=\x22','responseText','appendChild','\x22\x20data-class-date-time=\x22','createElement','Bearer','length','getAttribute','.book-button','getElementById','target','selectedDate','getTime','HTTP\x20error!\x20status:\x20','errors','12050lHOMwa','access_token','getMonth','\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-date=\x22','response.messageFields','.full-button','.location-option','cancelBooking_resolve\x20-\x20Network\x20error','attendees','classScheduleId','<div>No\x20attendees</div>','errorAPICheckLogin\x20-\x20function\x20called','open','nextDay','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22class-name\x22>','enlarged','cancelBooking_resolve\x20-\x20Cancellation\x20failed','w--current','</p>','gridColumn','memberBookedStatus','cancelBooking_resolve\x20-\x20Network\x20error\x20while\x20cancelling\x20booking','addEventListener','location','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','.class-name','errorAPICheckLogin\x20-\x20login\x20validated','Element\x20with\x20id\x20\x27date-header\x27\x20not\x20found!','1\x20/\x20-1','prevDay','checkAttendees\x20-\x20Error\x20while\x20checking\x20attendees:','https://crossfit168.clubfit.net.au/api/v1/booking/search-classes','<div\x20class=\x22attendee-item\x22><img\x20src=\x22','\x22>Book</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spotsleft\x22>','div','CrossFit','<div\x20class=\x22action-button\x22>Signed\x20in</div>','number','https://admin.clubfit.net.au/api/v1/account/validate','error','aria-selected','bookingStatus','block','long','before\x20calling\x20checkInParticipant:\x20','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22booking-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22class-name\x22>No\x20class\x20found</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','join','Other','textContent','hasAttended','add','Error\x20details:','timestampLastChanged','\x22>Cancel</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spotsleft\x22>','en-AU','bookedDate','No\x20locations\x20selected.','true','booking-info','slice','remove','.attendee-photo','\x22>Full</button>','DOMContentLoaded','\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-date=\x22','message','T00:00:00','test','getDate','POST','<p>','.cancel-button','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22booking-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22class-name\x22>No\x20class\x20found</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','date-header','userId','Check\x20in\x20success','.location-option.selected-option','tab-existing-booking','catch','\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-name=\x22','GET','\x22>Cancel</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','className','value','data-class-date','2-digit','https://crossfit168.clubfit.net.au/api/v1/booking/book-class-v2','Bearer\x20','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22column-signin-cancel\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','localeCompare','<h3\x20class=\x22name-class\x22>','.class-option.selected-option','toISOString','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','totalBooked','includes','isUserCheckedin\x20-\x20Error\x20while\x20checking\x20attendees:','checkInParticipant:\x20','.attendees','refresh_token','parse','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22action-button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22cancel-button\x22\x20data-member-booking-id=\x22','\x20left</div>','20uRZPeK','<button\x20class=\x22book-button\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-schedule-id=\x22','makeApiRequest\x20-\x20Network\x20error','https://crossfit168.clubfit.net.au/api/v1/booking/cancel/','User\x20is\x20not\x20logged\x20in,\x20redirecting\x20to\x20login\x20page.','Cancelled','href','Unknown\x20error\x20occurred','trim','getTimezoneOffset','Content-Type','setRequestHeader','\x22>Sign-in</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22action-button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22cancel-button\x22\x20data-member-booking-id=\x22','<div\x20class=\x22booked-class-columns\x22><div\x20class=\x22div-each-class\x22><div\x20class=\x22w-richtext\x22><p>No\x20class\x20available</p></div></div></div>','display','style','innerHTML','send','Network\x20error\x20occurred\x20while\x20booking.','checkAttendees\x20-\x20Network\x20error\x20while\x20checking\x20attendees','querySelector','2HYNKGK','from','validateLogin\x20-\x20Required\x20session\x20storage\x20items\x20are\x20missing','tab-book-class','false','Accept','status','validateLogin\x20-\x20Validation\x20failed:','.booking-item','getFullYear','memberBookingId','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22booking-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22time\x22>','1786587yPDQtN','portalUserId','.class-option','Confirmed','cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20retry','setItem','querySelectorAll','bearer','\x22\x20alt=\x22Avatar\x22\x20class=\x22attendee-photo\x22>','xhr.status:\x20','statusCode','13446132OsEABG','success','selected-option','https://crossfit168.clubfit.net.au/api/v1/booking/class-participants','<button\x20class=\x22full-button\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-schedule-id=\x22','application/json','classTime','Authorization','105471oMxmgI','cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20network\x20error\x20and\x20retry','data-class-time','isArray','1880bgiVgB','button','classCapacity','153321NugPIW','short','No\x20book-button\x20or\x20cancel-button\x20found\x20in\x20booking-item.','makeApiRequest\x20-\x20Retried\x20request\x20failed:','toLocaleString','fullName','spots','classList','88qDJVms','keys','log','data-class-schedule-id','insertBefore','matches','datePicker','data-class-name','onload','508849pJJxkR','data-member-booking-id','setDate','https://crossfit168.clubfit.net.au/api/v1/booking/book-class-participant-checkin','\x22>Cancel</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','contains','map'];a0_0x5050=function(){return _0x20be98;};return a0_0x5050();}function validateLogin(_0x5bb1b6){var _0x1d97ee=a0_0x135f01;if(!localStorage[_0x1d97ee(0xc5)]('access_token')||!localStorage[_0x1d97ee(0xc5)](_0x1d97ee(0x127))||!localStorage[_0x1d97ee(0xc5)]('userType')){console[_0x1d97ee(0x104)](_0x1d97ee(0x15b)),_0x5bb1b6(![]);return;}const _0x3fd2e3=_0x1d97ee(0x103),_0x4f082c=_0x1d97ee(0x122),_0x51fcfa={'xoken':localStorage['getItem'](_0x1d97ee(0x140)),'userId':localStorage[_0x1d97ee(0xc5)](_0x1d97ee(0x86)),'userType':localStorage['getItem']('userType')};makeApiRequest(_0x3fd2e3,_0x4f082c,_0x51fcfa,function(_0x489c23){var _0x2e5645=_0x1d97ee;Object[_0x2e5645(0xa8)](_0x489c23[_0x2e5645(0xc1)])[_0x2e5645(0xc4)](function(_0x3d14d2){var _0x47b928=_0x2e5645;localStorage['setItem'](_0x3d14d2,_0x489c23[_0x47b928(0xc1)][_0x3d14d2]);}),_0x5bb1b6(!![]);},function(_0x1a3eff){var _0x7cd4ca=_0x1d97ee;console[_0x7cd4ca(0x104)](_0x7cd4ca(0x80),_0x1a3eff),_0x5bb1b6(![]);});}function checkInParticipant(_0x3c74f1,_0x65cded,_0x2f3d10){var _0xc4afbf=a0_0x135f01;const _0x5450cb=_0xc4afbf(0xb3);console[_0xc4afbf(0xa9)](_0xc4afbf(0x13e)+_0x3c74f1+'\x20'+_0x65cded);const _0x51f433={'memberNumber':localStorage[_0xc4afbf(0xc5)](_0xc4afbf(0x127)),'classScheduleId':_0x3c74f1,'classDateTime':_0x65cded};function _0x5e4391(_0x2d54b0){var _0x53ec8d=_0xc4afbf;if(_0x2d54b0[_0x53ec8d(0xc1)]===_0x53ec8d(0x91)){console['log'](_0x53ec8d(0x128));const _0x4e9e40=_0x2f3d10['parentElement'];_0x4e9e40[_0x53ec8d(0x154)]='';const _0x427be8=document[_0x53ec8d(0xd2)](_0x53ec8d(0xff));_0x427be8[_0x53ec8d(0x10d)]=_0x53ec8d(0x88),_0x4e9e40[_0x53ec8d(0xd0)](_0x427be8);}else console[_0x53ec8d(0x104)]('Check-in\x20failed:',_0x2d54b0[_0x53ec8d(0xdc)]);}makeApiRequest(_0x5450cb,_0xc4afbf(0x122),_0x51f433,_0x5e4391);}