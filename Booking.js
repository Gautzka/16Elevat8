var a0_0x2ee0e4=a0_0x209a;(function(_0x4e8da9,_0x4544f6){var _0x4e009c=a0_0x209a,_0x4509e5=_0x4e8da9();while(!![]){try{var _0x67b2c5=parseInt(_0x4e009c(0x2a9))/0x1+parseInt(_0x4e009c(0x267))/0x2*(parseInt(_0x4e009c(0x1ef))/0x3)+parseInt(_0x4e009c(0x286))/0x4+-parseInt(_0x4e009c(0x280))/0x5+-parseInt(_0x4e009c(0x22b))/0x6+-parseInt(_0x4e009c(0x25d))/0x7*(parseInt(_0x4e009c(0x288))/0x8)+-parseInt(_0x4e009c(0x210))/0x9*(-parseInt(_0x4e009c(0x26e))/0xa);if(_0x67b2c5===_0x4544f6)break;else _0x4509e5['push'](_0x4509e5['shift']());}catch(_0x519fc0){_0x4509e5['push'](_0x4509e5['shift']());}}}(a0_0x19d3,0x99aea),document[a0_0x2ee0e4(0x204)]('DOMContentLoaded',function(){var _0x500d77=a0_0x2ee0e4;initDatePicker(),selectFirstTab(),fetchAndisplayClassBooked(),updateHeaderDate(document[_0x500d77(0x24a)](_0x500d77(0x25a))['value']);var _0xbd34da=document[_0x500d77(0x24a)]('tab-existing-booking');_0xbd34da[_0x500d77(0x204)](_0x500d77(0x20f),function(){fetchAndisplayClassBooked();});var _0xbd34da=document[_0x500d77(0x24a)](_0x500d77(0x290));_0xbd34da[_0x500d77(0x204)](_0x500d77(0x20f),function(){fetchAndDisplayClassesAvailable();});const _0x2ec95e=document[_0x500d77(0x24a)](_0x500d77(0x25a)),_0x58f9fb=document['getElementById'](_0x500d77(0x2a2)),_0x3a0d20=document[_0x500d77(0x24a)](_0x500d77(0x20c));_0x58f9fb[_0x500d77(0x204)](_0x500d77(0x20f),function(){var _0x54617e=_0x500d77;_0x183a05(-0x1);var _0x5c3603=document['getElementById'](_0x54617e(0x25a))[_0x54617e(0x207)];saveDatePickerSessionStorage(_0x5c3603),updateHeaderDate(_0x5c3603),fetchAndDisplayClassesAvailable();}),_0x3a0d20[_0x500d77(0x204)](_0x500d77(0x20f),function(){var _0x1c6d7d=_0x500d77;_0x183a05(0x1);var _0x58a1c3=document[_0x1c6d7d(0x24a)](_0x1c6d7d(0x25a))['value'];saveDatePickerSessionStorage(_0x58a1c3),updateHeaderDate(_0x58a1c3),fetchAndDisplayClassesAvailable();}),_0x2ec95e[_0x500d77(0x204)](_0x500d77(0x26b),function(){var _0x1297b7=_0x500d77,_0x5ac3bb=document[_0x1297b7(0x24a)](_0x1297b7(0x25a))[_0x1297b7(0x207)];saveDatePickerSessionStorage(_0x5ac3bb),updateHeaderDate(_0x5ac3bb),fetchAndDisplayClassesAvailable();});function _0x183a05(_0xdec027){var _0x306f91=_0x500d77;const _0x3d9d11=new Date(_0x2ec95e['value']+_0x306f91(0x29d));_0x3d9d11['setDate'](_0x3d9d11[_0x306f91(0x250)]()+_0xdec027),_0x2ec95e[_0x306f91(0x207)]=formatDate(_0x3d9d11);}var _0x4fe8eb=document[_0x500d77(0x238)](_0x500d77(0x1f5));_0x4fe8eb[_0x500d77(0x22f)](function(_0x3c0eb3){var _0x3b1fce=_0x500d77;_0x3c0eb3[_0x3b1fce(0x204)]('click',function(){var _0x48a50e=_0x3b1fce;_0x4fe8eb[_0x48a50e(0x22f)](function(_0xda1a74){var _0x1a5f8d=_0x48a50e;_0xda1a74[_0x1a5f8d(0x282)][_0x1a5f8d(0x265)](_0x1a5f8d(0x205));}),this[_0x48a50e(0x282)][_0x48a50e(0x28e)](_0x48a50e(0x205)),fetchAndDisplayClassesAvailable();});});var _0x4e319=document[_0x500d77(0x238)](_0x500d77(0x2a8));_0x4e319[_0x500d77(0x22f)](function(_0x3b37bd){_0x3b37bd['addEventListener']('click',function(){var _0x4c0833=a0_0x209a;this[_0x4c0833(0x282)][_0x4c0833(0x1d9)](_0x4c0833(0x205)),fetchAndDisplayClassesAvailable();});}),document['getElementById'](_0x500d77(0x28d))[_0x500d77(0x204)](_0x500d77(0x20f),function(_0x121bdc){var _0x1d7b05=_0x500d77;if(_0x121bdc[_0x1d7b05(0x2a5)]&&_0x121bdc['target'][_0x1d7b05(0x218)](_0x1d7b05(0x28b))){var _0x1c00d1=_0x121bdc[_0x1d7b05(0x2a5)][_0x1d7b05(0x1dc)]('data-member-booking-id');cancelBooking_resolve(_0x1c00d1)[_0x1d7b05(0x1e5)](()=>{fetchAndDisplayClassesAvailable();})[_0x1d7b05(0x239)](_0x495b97=>{var _0x189104=_0x1d7b05;console[_0x189104(0x25e)](_0x189104(0x275),_0x495b97);});}else{if(_0x121bdc[_0x1d7b05(0x2a5)]&&_0x121bdc[_0x1d7b05(0x2a5)][_0x1d7b05(0x218)](_0x1d7b05(0x22c)))bookClass(_0x121bdc[_0x1d7b05(0x2a5)]),fetchAndDisplayClassesAvailable();else{if(_0x121bdc['target']&&_0x121bdc[_0x1d7b05(0x2a5)][_0x1d7b05(0x1df)](_0x1d7b05(0x222))){var _0xa95290=_0x121bdc['target'][_0x1d7b05(0x1df)](_0x1d7b05(0x222));if(_0x121bdc[_0x1d7b05(0x2a5)]['closest'](_0x1d7b05(0x237))){_0xa95290[_0x1d7b05(0x238)](_0x1d7b05(0x269))[_0x1d7b05(0x22f)](function(_0x1afb70){var _0x53484e=_0x1d7b05;_0x1afb70[_0x53484e(0x282)][_0x53484e(0x265)](_0x53484e(0x1e1));});return;}var _0x307d61=_0xa95290[_0x1d7b05(0x23c)]('.book-button')||_0xa95290[_0x1d7b05(0x23c)]('.cancel-button')||_0xa95290[_0x1d7b05(0x23c)](_0x1d7b05(0x291));if(_0x307d61){var _0x26ab58=_0x307d61[_0x1d7b05(0x1dc)](_0x1d7b05(0x1f4)),_0x56fb1d=_0x307d61[_0x1d7b05(0x1dc)](_0x1d7b05(0x1fe)),_0x2f4979=_0xa95290[_0x1d7b05(0x23c)](_0x1d7b05(0x1fd))[_0x1d7b05(0x20d)],_0x255c02=_0xa95290[_0x1d7b05(0x23c)](_0x1d7b05(0x201))[_0x1d7b05(0x20d)],_0x55717a=document[_0x1d7b05(0x1dd)]('button');_0x55717a[_0x1d7b05(0x292)](_0x1d7b05(0x1f4),_0x26ab58),_0x55717a[_0x1d7b05(0x292)]('data-class-date',_0x56fb1d),_0x55717a[_0x1d7b05(0x292)]('data-class-time',_0x2f4979),_0x55717a[_0x1d7b05(0x292)](_0x1d7b05(0x217),_0x255c02),checkAttendees(_0x55717a,_0xa95290);}else console[_0x1d7b05(0x25e)]('No\x20book-button\x20or\x20cancel-button\x20found\x20in\x20booking-item.');}}}}),document['getElementById'](_0x500d77(0x256))['addEventListener'](_0x500d77(0x20f),function(_0x31b72d){var _0xf2b851=_0x500d77;if(_0x31b72d[_0xf2b851(0x2a5)]&&_0x31b72d[_0xf2b851(0x2a5)]['matches'](_0xf2b851(0x28b))){var _0x51541e=_0x31b72d[_0xf2b851(0x2a5)][_0xf2b851(0x1dc)]('data-member-booking-id');cancelBooking_resolve(_0x51541e)['then'](()=>{fetchAndisplayClassBooked();})[_0xf2b851(0x239)](_0x4ac780=>{var _0x51cb7e=_0xf2b851;console[_0x51cb7e(0x25e)](_0x51cb7e(0x275),_0x4ac780);});}else{if(_0x31b72d['target']&&_0x31b72d[_0xf2b851(0x2a5)]['matches'](_0xf2b851(0x229))){const _0x5ee3d8=_0x31b72d[_0xf2b851(0x2a5)];var _0x25d428=_0x31b72d[_0xf2b851(0x2a5)][_0xf2b851(0x1dc)](_0xf2b851(0x252)),_0x2a86e0=_0x31b72d['target'][_0xf2b851(0x1dc)](_0xf2b851(0x220));console[_0xf2b851(0x2aa)](_0xf2b851(0x233)+_0x25d428+'\x20'+_0x2a86e0),checkInParticipant(_0x25d428,_0x2a86e0,_0x5ee3d8);}}});}));function initDatePicker(){var _0x30ea86=a0_0x2ee0e4;const _0x208f91=document[_0x30ea86(0x24a)](_0x30ea86(0x25a));let _0xdfb555=sessionStorage['getItem'](_0x30ea86(0x1d8)),_0x28ccc0=sessionStorage['getItem'](_0x30ea86(0x21a));_0xdfb555&&_0x28ccc0&&isWithinValidityPeriod(_0x28ccc0,0.5)?_0x208f91[_0x30ea86(0x207)]=_0xdfb555:(currentDate=getLocalDate(),_0x208f91['value']=currentDate,saveDatePickerSessionStorage(currentDate));}function selectFirstTab(){var _0x29ba8d=a0_0x2ee0e4,_0x8d628a=document[_0x29ba8d(0x24a)](_0x29ba8d(0x1f2)),_0x1a927b=document[_0x29ba8d(0x24a)](_0x29ba8d(0x290));_0x8d628a['classList'][_0x29ba8d(0x28e)](_0x29ba8d(0x1e7)),_0x8d628a[_0x29ba8d(0x292)](_0x29ba8d(0x274),_0x29ba8d(0x1f7)),_0x1a927b[_0x29ba8d(0x282)][_0x29ba8d(0x265)]('w--current'),_0x1a927b[_0x29ba8d(0x292)](_0x29ba8d(0x274),_0x29ba8d(0x241));}function isWithinValidityPeriod(_0x1fe440,_0x2c51b2){const _0x4f258b=new Date()['getTime'](),_0xc8753e=(_0x4f258b-_0x1fe440)/(0x3e8*0x3c*0x3c);return _0xc8753e<=_0x2c51b2;}function formatDate(_0x7e8794){var _0x536d86=a0_0x2ee0e4;let _0x369a00=new Date(_0x7e8794),_0x4b9688=''+(_0x369a00[_0x536d86(0x27c)]()+0x1),_0x81c6d2=''+_0x369a00[_0x536d86(0x250)](),_0x10118a=_0x369a00[_0x536d86(0x232)]();if(_0x4b9688[_0x536d86(0x253)]<0x2)_0x4b9688='0'+_0x4b9688;if(_0x81c6d2[_0x536d86(0x253)]<0x2)_0x81c6d2='0'+_0x81c6d2;return[_0x10118a,_0x4b9688,_0x81c6d2][_0x536d86(0x26a)]('-');}function updateHeaderDate(_0x219d5e){var _0x322f85=a0_0x2ee0e4;const _0x68724b=document['getElementById'](_0x322f85(0x283));if(!_0x68724b){console['error']('Element\x20with\x20id\x20\x27date-header\x27\x20not\x20found!');return;}const _0x1d2d40=new Date(_0x219d5e),_0x5bf8f6=_0x1d2d40[_0x322f85(0x250)](),_0x185d0a=_0x1d2d40[_0x322f85(0x294)]('en-AU',{'month':_0x322f85(0x1f0)}),_0x5aee94=_0x1d2d40[_0x322f85(0x294)](_0x322f85(0x279),{'weekday':_0x322f85(0x1f0)});function _0x4bc39d(_0x15ba36){if(_0x15ba36>0x3&&_0x15ba36<0x15)return'th';switch(_0x15ba36%0xa){case 0x1:return'st';case 0x2:return'nd';case 0x3:return'rd';default:return'th';}}const _0x4c035a=_0x5aee94+'\x20'+(_0x5bf8f6<0xa?'0':'')+_0x5bf8f6+_0x4bc39d(_0x5bf8f6)+'\x20'+_0x185d0a;_0x68724b[_0x322f85(0x20d)]=_0x4c035a;}function getLocalDate(){var _0x5e38e1=a0_0x2ee0e4;const _0x4f7287=new Date(),_0x1ad9dc=_0x4f7287[_0x5e38e1(0x272)]()*0xea60,_0x42261a=new Date(_0x4f7287-_0x1ad9dc)[_0x5e38e1(0x202)]()[_0x5e38e1(0x27d)](0x0,0xa);return _0x42261a;}function saveDatePickerSessionStorage(_0x1b75ea){var _0x1230c0=a0_0x2ee0e4;sessionStorage[_0x1230c0(0x24c)](_0x1230c0(0x1d8),_0x1b75ea),timestamp=new Date()[_0x1230c0(0x25b)](),sessionStorage['setItem'](_0x1230c0(0x21a),timestamp);}function bookClass(_0x2d348c){var _0x4f362a=a0_0x2ee0e4,_0x3d78ee=_0x2d348c['getAttribute'](_0x4f362a(0x1f4)),_0x44e349=_0x2d348c[_0x4f362a(0x1dc)](_0x4f362a(0x1fe)),_0xbf0a8c=_0x2d348c['getAttribute'](_0x4f362a(0x217)),_0x59c52d=localStorage[_0x4f362a(0x27e)](_0x4f362a(0x22d)),_0x1033af=localStorage[_0x4f362a(0x27e)](_0x4f362a(0x1da)),_0x2d7e77=_0x4f362a(0x281),_0x409242={'classScheduleId':_0x3d78ee,'classDateTime':_0x44e349,'className':_0xbf0a8c,'userId':_0x59c52d,'onBehalfBookingReference':'','onBehalfBookFor':''},_0x3d9673=new XMLHttpRequest();_0x3d9673[_0x4f362a(0x28c)](_0x4f362a(0x284),_0x2d7e77,!![]),_0x3d9673[_0x4f362a(0x227)](_0x4f362a(0x1e9),'application/json'),_0x3d9673[_0x4f362a(0x227)]('Accept','application/json'),_0x3d9673[_0x4f362a(0x227)]('Authorization',_0x4f362a(0x2a3)+_0x1033af),_0x3d9673['onload']=function(){var _0xfb6b72=_0x4f362a,_0x5bc841;try{_0x5bc841=JSON[_0xfb6b72(0x23e)](_0x3d9673[_0xfb6b72(0x29a)]);}catch(_0x177658){_0x5bc841={'errors':{'message':'Unknown\x20error\x20occurred'}};}_0x3d9673[_0xfb6b72(0x26f)]>=0xc8&&_0x3d9673[_0xfb6b72(0x26f)]<0x12c&&_0x5bc841[_0xfb6b72(0x221)]===0xc8?fetchAndDisplayClassesAvailable():(console['log'](_0xfb6b72(0x271)+_0x3d9673[_0xfb6b72(0x26f)]+_0xfb6b72(0x287)),alert(_0x5bc841['errors'][_0xfb6b72(0x258)]),errorAPICheckLogin(function(_0x31c38f){var _0x4d885f=_0xfb6b72;!_0x31c38f&&console[_0x4d885f(0x25e)](_0x4d885f(0x26c));}));},_0x3d9673[_0x4f362a(0x1d3)]=function(){var _0x304c06=_0x4f362a;alert(_0x304c06(0x212)),errorAPICheckLogin(function(_0x1e3190){var _0x397387=_0x304c06;!_0x1e3190&&console[_0x397387(0x25e)](_0x397387(0x26c));});},_0x3d9673[_0x4f362a(0x1d7)](JSON['stringify'](_0x409242));}function displayErrorMessage(_0x49ac2c,_0xeec569){var _0x46ed5b=a0_0x2ee0e4;clearErrorMessage(_0x49ac2c);var _0xb13ccb=document[_0x46ed5b(0x1dd)](_0x46ed5b(0x209));_0xb13ccb['className']=_0x46ed5b(0x1d5),_0xb13ccb['textContent']=_0xeec569,_0x49ac2c['parentNode']['insertBefore'](_0xb13ccb,_0x49ac2c[_0x46ed5b(0x1f8)]);}function clearErrorMessage(_0x4fc3d1){var _0x83c6cf=a0_0x2ee0e4,_0x484c28=_0x4fc3d1['nextSibling'];_0x484c28&&_0x484c28[_0x83c6cf(0x223)]==='error-message'&&_0x484c28[_0x83c6cf(0x265)]();}function showInlineAttendees(_0x5eb66b,_0x1d3931){var _0x3f7948=a0_0x2ee0e4,_0x4108ce=_0x1d3931[_0x3f7948(0x23c)]('.attendees');if(!_0x4108ce)_0x4108ce=document[_0x3f7948(0x1dd)](_0x3f7948(0x209)),_0x4108ce[_0x3f7948(0x223)]='attendees',_0x1d3931['appendChild'](_0x4108ce),_0x4108ce[_0x3f7948(0x257)]['gridColumn']=_0x3f7948(0x21f);else{_0x4108ce[_0x3f7948(0x257)][_0x3f7948(0x245)]=_0x4108ce[_0x3f7948(0x257)][_0x3f7948(0x245)]===_0x3f7948(0x263)?'none':_0x3f7948(0x263);return;}var _0xf93aee='';Array[_0x3f7948(0x289)](_0x5eb66b)&&_0x5eb66b['length']>0x0?(_0x5eb66b[_0x3f7948(0x29f)]((_0x2325ee,_0x3fca61)=>_0x2325ee[_0x3f7948(0x243)]['localeCompare'](_0x3fca61[_0x3f7948(0x243)])),_0x5eb66b['forEach'](function(_0x5b3899){var _0x200a71=_0x3f7948,_0xd2f6eb=_0x5b3899[_0x200a71(0x243)]['split']('\x20')[0x0];_0xf93aee+=_0x200a71(0x251)+_0x5b3899[_0x200a71(0x1e6)]+'\x22\x20alt=\x22Avatar\x22\x20class=\x22attendee-photo\x22>'+_0xd2f6eb+_0x200a71(0x235);})):_0xf93aee+=_0x3f7948(0x1fb),_0x4108ce['innerHTML']=_0xf93aee,_0x4108ce['style']['display']=_0x3f7948(0x263),_0x4108ce['querySelectorAll'](_0x3f7948(0x269))['forEach'](function(_0x5bc28f){var _0x5dea5f=_0x3f7948;_0x5bc28f[_0x5dea5f(0x204)](_0x5dea5f(0x20f),function(_0x4ef360){var _0x572a87=_0x5dea5f;_0x5bc28f[_0x572a87(0x282)][_0x572a87(0x1d4)](_0x572a87(0x1e1))?_0x5bc28f[_0x572a87(0x282)][_0x572a87(0x265)](_0x572a87(0x1e1)):(_0x4108ce[_0x572a87(0x238)]('.attendee-photo')[_0x572a87(0x22f)](function(_0x1cc611){var _0x31e13f=_0x572a87;_0x1cc611[_0x31e13f(0x282)][_0x31e13f(0x265)](_0x31e13f(0x1e1));}),_0x5bc28f['classList'][_0x572a87(0x28e)]('enlarged')),_0x4ef360[_0x572a87(0x1ed)]();});}),_0x4108ce[_0x3f7948(0x204)](_0x3f7948(0x20f),function(_0x4b962c){var _0x765df8=_0x3f7948;_0x4108ce[_0x765df8(0x238)]('.attendee-photo')['forEach'](function(_0x341a21){var _0x47cf29=_0x765df8;_0x341a21['classList'][_0x47cf29(0x265)](_0x47cf29(0x1e1));}),_0x4b962c[_0x765df8(0x1ed)]();}),document[_0x3f7948(0x204)](_0x3f7948(0x20f),function(_0x460b30){var _0x497844=_0x3f7948;!_0x1d3931['contains'](_0x460b30[_0x497844(0x2a5)])&&_0x4108ce[_0x497844(0x238)](_0x497844(0x269))['forEach'](function(_0x38f7e7){var _0x7133de=_0x497844;_0x38f7e7[_0x7133de(0x282)][_0x7133de(0x265)]('enlarged');});});}function checkAttendees(_0x5ba606,_0x4d2a19){var _0xaa490a=a0_0x2ee0e4,_0x5b3369=_0x5ba606[_0xaa490a(0x1dc)](_0xaa490a(0x1f4)),_0x1650ef=_0x5ba606['getAttribute'](_0xaa490a(0x1fe)),_0x406cea=_0x5ba606['getAttribute']('data-class-time'),_0x2669a9=_0xaa490a(0x1f9),_0x81297={'classScheduleId':_0x5b3369,'selectedDate':_0x1650ef,'classTime':_0x406cea},_0x4a17c9=new XMLHttpRequest();_0x4a17c9[_0xaa490a(0x28c)]('POST',_0x2669a9,!![]),_0x4a17c9['setRequestHeader'](_0xaa490a(0x1e9),_0xaa490a(0x231)),_0x4a17c9[_0xaa490a(0x227)](_0xaa490a(0x29c),_0xaa490a(0x231)),_0x4a17c9[_0xaa490a(0x227)]('Authorization',_0xaa490a(0x242)),_0x4a17c9[_0xaa490a(0x264)]=function(){var _0x4c2f40=_0xaa490a;if(_0x4a17c9[_0x4c2f40(0x26f)]>=0xc8&&_0x4a17c9['status']<0x12c){var _0x593872=JSON[_0x4c2f40(0x23e)](_0x4a17c9[_0x4c2f40(0x29a)]),_0x463be3=_0x593872['payload'];showInlineAttendees(_0x463be3,_0x4d2a19);}else console[_0x4c2f40(0x25e)](_0x4c2f40(0x1eb),_0x4a17c9[_0x4c2f40(0x26f)]),errorAPICheckLogin();},_0x4a17c9[_0xaa490a(0x1d3)]=function(){var _0x3e3a56=_0xaa490a;console[_0x3e3a56(0x25e)]('checkAttendees\x20-\x20Network\x20error\x20while\x20checking\x20attendees'),errorAPICheckLogin();},_0x4a17c9['send'](JSON[_0xaa490a(0x2a1)](_0x81297));}function cancelBooking_resolve(_0x49e29a,_0x2a7c77=0x0){return new Promise((_0x2f5712,_0x99c359)=>{var _0x4952c5=a0_0x209a,_0x574a00=localStorage['getItem'](_0x4952c5(0x1da)),_0x4726e4=_0x4952c5(0x27a)+_0x49e29a,_0x4cfd9d=new XMLHttpRequest();_0x4cfd9d['open'](_0x4952c5(0x284),_0x4726e4,!![]),_0x4cfd9d[_0x4952c5(0x227)](_0x4952c5(0x1e9),'application/json'),_0x4cfd9d[_0x4952c5(0x227)](_0x4952c5(0x29c),'application/json'),_0x4cfd9d[_0x4952c5(0x227)]('Authorization',_0x4952c5(0x2a3)+_0x574a00),_0x4cfd9d[_0x4952c5(0x264)]=function(){var _0x3934e3=_0x4952c5;const _0x49d74f=JSON['parse'](_0x4cfd9d[_0x3934e3(0x29a)]);_0x4cfd9d[_0x3934e3(0x26f)]>=0xc8&&_0x4cfd9d['status']<0x12c?(_0x49d74f['statusCode']!==0xc8&&console[_0x3934e3(0x2aa)](_0x3934e3(0x261),_0x4cfd9d[_0x3934e3(0x29a)]),_0x2f5712(_0x4cfd9d[_0x3934e3(0x29a)])):(console['error'](_0x3934e3(0x23a),_0x4cfd9d['status']),console[_0x3934e3(0x25e)](_0x3934e3(0x23b),_0x4cfd9d[_0x3934e3(0x29a)]),_0x2a7c77<0x1?errorAPICheckLogin(function(_0x32175e){var _0x3914b1=_0x3934e3;_0x32175e?cancelBooking_resolve(_0x49e29a,_0x2a7c77+0x1)['then'](_0x2f5712)[_0x3914b1(0x239)](_0x99c359):_0x99c359(new Error(_0x3914b1(0x21d)));}):_0x99c359(new Error('cancelBooking_resolve\x20-\x20Cancellation\x20failed')));},_0x4cfd9d['onerror']=function(){var _0x4110c2=_0x4952c5;console[_0x4110c2(0x25e)](_0x4110c2(0x2a0)),_0x2a7c77<0x1?errorAPICheckLogin(function(_0x537d96){var _0x15fbc2=_0x4110c2;_0x537d96?cancelBooking_resolve(_0x49e29a,_0x2a7c77+0x1)[_0x15fbc2(0x1e5)](_0x2f5712)[_0x15fbc2(0x239)](_0x99c359):_0x99c359(new Error(_0x15fbc2(0x224)));}):_0x99c359(new Error('cancelBooking_resolve\x20-\x20Network\x20error'));},_0x4cfd9d[_0x4952c5(0x1d7)]();});}function a0_0x209a(_0x23702c,_0x1a8824){var _0x19d322=a0_0x19d3();return a0_0x209a=function(_0x209a38,_0xf0709f){_0x209a38=_0x209a38-0x1d3;var _0x301780=_0x19d322[_0x209a38];return _0x301780;},a0_0x209a(_0x23702c,_0x1a8824);}function fetchAndDisplayClassesAvailable(){var _0x451856=a0_0x2ee0e4,_0x1a329e=document[_0x451856(0x238)](_0x451856(0x293));if(_0x1a329e[_0x451856(0x253)]===0x0){console[_0x451856(0x2aa)]('No\x20locations\x20selected.');return;}var _0x3a240c=document[_0x451856(0x24a)](_0x451856(0x25a))['value'],_0x2d94fc=getLocalDate(),_0x36a66f={'ALX':0x2,'CBD':0x1,'MVL':0x4},_0x282334=Array[_0x451856(0x24f)](_0x1a329e)[_0x451856(0x1fa)](_0x5e179b=>{var _0x322823=_0x451856,_0x3160c4=_0x5e179b['getAttribute'](_0x322823(0x203)),_0x5e7090=_0x36a66f[_0x3160c4];return _0x5e7090;}),_0x1efd7f=localStorage[_0x451856(0x27e)](_0x451856(0x22d)),_0x267ec2={'UserId':_0x1efd7f,'clubId':_0x282334[0x0],'selectedDate':_0x3a240c,'classType':0x0,'accountId':_0x282334[0x0]};if(_0x3a240c<_0x2d94fc)displayClassAvailable([]);else{var _0x58a42a=_0x451856(0x1f1);makeApiRequest(_0x58a42a,'POST',_0x267ec2,function(_0x1d5f6c){var _0x3aeddb=_0x451856;displayClassAvailable(_0x1d5f6c[_0x3aeddb(0x25f)]);});}}function displayClassAvailable(_0x240fe8){var _0x5712e0=a0_0x2ee0e4,_0x1cdb7d=document[_0x5712e0(0x24a)](_0x5712e0(0x28d));let _0x1036c6=getSelectedClassOptions(),_0x10ea4e='',_0x912f55=document['getElementById'](_0x5712e0(0x25a))[_0x5712e0(0x207)];if(_0x240fe8[_0x5712e0(0x253)]===0x0)_0x10ea4e=_0x5712e0(0x1e8);else{const _0x347721=/crossfit|cf/i,_0x4afed4=/weightlifting/i;let _0x1780a9=_0x240fe8['filter'](_0x570495=>{var _0x5a3f0e=_0x5712e0;const _0x449013=_0x347721[_0x5a3f0e(0x22a)](_0x570495[_0x5a3f0e(0x223)]),_0x3039a4=_0x4afed4['test'](_0x570495['className']);if(_0x1036c6[_0x5a3f0e(0x234)](_0x5a3f0e(0x20e))&&_0x449013)return!![];if(_0x1036c6[_0x5a3f0e(0x234)](_0x5a3f0e(0x298))&&_0x3039a4)return!![];if(_0x1036c6[_0x5a3f0e(0x234)](_0x5a3f0e(0x1ff))&&!_0x449013&&!_0x3039a4)return!![];if(_0x1036c6[_0x5a3f0e(0x253)]===0x0||_0x1036c6[_0x5a3f0e(0x253)]===0x3||_0x1036c6[_0x5a3f0e(0x234)](_0x5a3f0e(0x277)))return!![];if(_0x1036c6['length']===0x2&&!_0x1036c6['includes'](_0x5a3f0e(0x1ff)))return _0x449013||_0x3039a4;return![];});_0x1780a9[_0x5712e0(0x253)]===0x0?_0x10ea4e=_0x5712e0(0x278):_0x1780a9[_0x5712e0(0x22f)](_0x52dbb6=>{var _0x59e07=_0x5712e0;const _0x3e2b5f=_0x52dbb6[_0x59e07(0x23d)]-_0x52dbb6[_0x59e07(0x27b)],_0x5b43e4=_0x3e2b5f===0x1?_0x59e07(0x1db):_0x59e07(0x236);_0x10ea4e+=_0x59e07(0x226)+_0x52dbb6[_0x59e07(0x244)]+'</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22class-name\x22>'+_0x52dbb6[_0x59e07(0x223)]+_0x59e07(0x29b)+(_0x52dbb6[_0x59e07(0x2a4)]===_0x59e07(0x255)?_0x59e07(0x262)+_0x52dbb6[_0x59e07(0x1f3)]+_0x59e07(0x1e4)+_0x52dbb6[_0x59e07(0x252)]+_0x59e07(0x1e2)+_0x912f55+_0x59e07(0x240)+_0x52dbb6[_0x59e07(0x223)]+'\x22>Cancel</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spotsleft\x22>'+_0x3e2b5f+'\x20'+_0x5b43e4+_0x59e07(0x254):_0x3e2b5f>0x0?_0x59e07(0x211)+_0x52dbb6['classScheduleId']+_0x59e07(0x26d)+_0x912f55+_0x59e07(0x1d6)+_0x52dbb6[_0x59e07(0x223)]+'\x22>Book</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spotsleft\x22>'+_0x3e2b5f+'\x20'+_0x5b43e4+_0x59e07(0x254):_0x59e07(0x216)+_0x52dbb6['classScheduleId']+'\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-date=\x22'+_0x912f55+'\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-name=\x22'+_0x52dbb6[_0x59e07(0x223)]+_0x59e07(0x1f6))+_0x59e07(0x268);});}_0x1cdb7d[_0x5712e0(0x266)]=_0x10ea4e;}function getSelectedClassOptions(){var _0x3b2758=a0_0x2ee0e4;const _0x37a28c=document[_0x3b2758(0x238)](_0x3b2758(0x230));return Array['from'](_0x37a28c)[_0x3b2758(0x1fa)](_0x4f5fce=>{var _0x17c1c1=_0x3b2758;const _0x3092a1=_0x4f5fce['textContent'][_0x17c1c1(0x28f)]();return _0x3092a1;});}function fetchAndisplayClassBooked(){var _0x3fb28a=a0_0x2ee0e4,_0x411211=localStorage['getItem'](_0x3fb28a(0x22d)),_0x121798='https://crossfit168.clubfit.net.au/api/v1/booking/current/'+_0x411211;makeApiRequest(_0x121798,_0x3fb28a(0x215),null,function(_0x26c0a0){var _0x19025f=_0x3fb28a;displayMyBookedClass(_0x26c0a0[_0x19025f(0x25f)]);});}function a0_0x19d3(){var _0x8cf0cf=['booking-info','style','message','2-digit','datePicker','getTime','makeApiRequest\x20-\x20Retried\x20request\x20failed:','28gFdTIq','error','payload','location','Response\x20received:','<button\x20class=\x22cancel-button\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-member-booking-id=\x22','block','onload','remove','innerHTML','278dXNBxy','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','.attendee-photo','join','change','User\x20is\x20not\x20logged\x20in,\x20redirecting\x20to\x20login\x20page.','\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-date=\x22','53210oARztc','status','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','xhr.status:\x20','getTimezoneOffset','errorAPICheckLogin\x20-\x20function\x20called','aria-selected','EventListener\x20-\x20Cancellation\x20error:','replace','All','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22booking-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22class-name\x22>No\x20class\x20found</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','en-AU','https://crossfit168.clubfit.net.au/api/v1/booking/cancel/','totalBooked','getMonth','slice','getItem','checkInParticipant:\x20','96430PfGkHk','https://crossfit168.clubfit.net.au/api/v1/booking/book-class-v2','classList','date-header','POST','bookedId','2389848yJEtTi','response.messageFields','1576152ijKWmy','isArray','Error\x20fetching\x20information:','.cancel-button','open','class-available','add','trim','tab-book-class','.full-button','setAttribute','.location-option.selected-option','toLocaleString','\x22\x20data-class-date-time=\x22','userType','validateLogin\x20-\x20Required\x20session\x20storage\x20items\x20are\x20missing','Weightlifting','href','responseText','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22buttonandavailability\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22action-button\x22\x20style=\x22margin-left:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','Accept','T00:00:00','</h3>','sort','cancelBooking_resolve\x20-\x20Network\x20error\x20while\x20cancelling\x20booking','stringify','prevDay','Bearer\x20','memberBookedStatus','target','refresh_token','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22action-button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22signin-button\x22\x20data-class-schedule-id=\x22','.class-option','777027aHonUq','log','onerror','contains','error-message','\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-name=\x22','send','selectedDate','toggle','access_token','spot','getAttribute','createElement','keys','closest','Check-in\x20failed:','enlarged','\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-date=\x22','</p>','\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-schedule-id=\x22','then','memberPhotoLocation','w--current','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22booking-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22class-name\x22>No\x20class\x20found</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','Content-Type','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','checkAttendees\x20-\x20Error\x20while\x20checking\x20attendees:','success','stopPropagation','<h3\x20class=\x22name-class\x22>','22158NIuwAG','long','https://crossfit168.clubfit.net.au/api/v1/booking/search-classes','tab-existing-booking','memberBookingId','data-class-schedule-id','.location-option','\x22>Full</button>','true','nextSibling','https://crossfit168.clubfit.net.au/api/v1/booking/class-participants','map','<div>No\x20attendees</div>','HTTP\x20error!\x20status:\x20','.time','data-class-date','Other','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22column-signin-cancel\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','.class-name','toISOString','data-location','addEventListener','selected-option','<div\x20class=\x22action-button\x22>Signed\x20in</div>','value','json','div','Bearer','split','nextDay','textContent','CrossFit','click','423ElYkmv','<button\x20class=\x22book-button\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-schedule-id=\x22','Network\x20error\x20occurred\x20while\x20booking.','errors','makeApiRequest\x20-\x20Network\x20error','GET','<button\x20class=\x22full-button\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-schedule-id=\x22','data-class-name','matches','<p>','timestampLastChanged','bookedDate','appendChild','cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20retry','Check\x20in\x20success','1\x20/\x20-1','classDateTime','statusCode','.booking-item','className','cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20network\x20error\x20and\x20retry','short','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22booking-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22time\x22>','setRequestHeader','clubName','.signin-button','test','7286316nmCxat','.book-button','userId','errorAPICheckLogin\x20-\x20login\x20validated','forEach','.class-option.selected-option','application/json','getFullYear','before\x20calling\x20checkInParticipant:\x20','includes','</div>','spots','.attendees','querySelectorAll','catch','Error\x20while\x20cancelling\x20booking,\x20xhr.status:\x20','Error\x20details:','querySelector','classCapacity','parse','Cancelled','\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-name=\x22','false','bearer','fullName','classTime','display','\x22>Cancel</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','bookingStatus','https://crossfit168.clubfit.net.au/api/v1/booking/book-class-participant-checkin','parentElement','getElementById','<div\x20class=\x22booked-class-columns\x22><div\x20class=\x22div-each-class\x22><div\x20class=\x22w-richtext\x22><p>No\x20class\x20available</p></div></div></div>','setItem','Authorization','https://admin.clubfit.net.au/api/v1/account/validate','from','getDate','<div\x20class=\x22attendee-item\x22><img\x20src=\x22','classScheduleId','length','\x20left</div>','Booked'];a0_0x19d3=function(){return _0x8cf0cf;};return a0_0x19d3();}async function displayMyBookedClass(_0xaac605){var _0x4a2fd7=a0_0x2ee0e4;const _0x1a8d22=document[_0x4a2fd7(0x24a)](_0x4a2fd7(0x256));let _0x2402ec='';const _0x5c0aba=getLocalDate();for(const _0x414c10 of _0xaac605){if(_0x414c10[_0x4a2fd7(0x247)]!==_0x4a2fd7(0x23f)){const _0x276abd=new Date(_0x414c10[_0x4a2fd7(0x21b)])[_0x4a2fd7(0x202)]()[_0x4a2fd7(0x27d)](0x0,0xa),_0x4d7c5d=new Date(_0x414c10[_0x4a2fd7(0x21b)])['toLocaleString'](_0x4a2fd7(0x279),{'weekday':'short','month':_0x4a2fd7(0x225),'day':'2-digit','hour':_0x4a2fd7(0x259),'minute':_0x4a2fd7(0x259)})[_0x4a2fd7(0x276)](',',''),_0x472458=_0x4d7c5d[_0x4a2fd7(0x20b)]('\x20')[0x0],_0x1063dc=_0x4d7c5d['split']('\x20')['slice'](0x1)['join']('\x20'),_0x22835d=_0x4a2fd7(0x1ee)+_0x414c10[_0x4a2fd7(0x223)]+_0x4a2fd7(0x29e),_0x37889b='<p>'+_0x472458+'\x20'+_0x1063dc+_0x4a2fd7(0x1e3),_0x27f5db=_0x4a2fd7(0x219)+_0x414c10[_0x4a2fd7(0x228)]+_0x4a2fd7(0x1e3);let _0x3585fe='';if(_0x276abd===_0x5c0aba){const _0x32dd99=await isUserCheckedin(_0x414c10[_0x4a2fd7(0x252)],_0x5c0aba,_0x414c10[_0x4a2fd7(0x244)]);!_0x32dd99?_0x3585fe=_0x4a2fd7(0x2a7)+_0x414c10[_0x4a2fd7(0x252)]+_0x4a2fd7(0x295)+_0x414c10[_0x4a2fd7(0x21b)]+'\x22>Sign-in</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22action-button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22cancel-button\x22\x20data-member-booking-id=\x22'+_0x414c10[_0x4a2fd7(0x285)]+_0x4a2fd7(0x246):_0x3585fe=_0x4a2fd7(0x206);}else _0x3585fe='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22action-button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22cancel-button\x22\x20data-member-booking-id=\x22'+_0x414c10[_0x4a2fd7(0x285)]+'\x22>Cancel</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';_0x2402ec+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22booked-class-columns\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22div-each-class\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22w-richtext\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x22835d+_0x4a2fd7(0x270)+_0x37889b+_0x4a2fd7(0x270)+_0x27f5db+_0x4a2fd7(0x200)+_0x3585fe+_0x4a2fd7(0x1ea);}}!_0x2402ec&&(_0x2402ec=_0x4a2fd7(0x24b)),_0x1a8d22[_0x4a2fd7(0x266)]=_0x2402ec;}async function isUserCheckedin(_0x3492f8,_0x3251bd,_0x285644){var _0x255286=a0_0x2ee0e4;const _0x404ac8=_0x255286(0x1f9),_0x6fb01c={'classScheduleId':_0x3492f8,'selectedDate':_0x3251bd,'classTime':_0x285644};try{const _0x5066fb=await makeApiRequest_noToken(_0x404ac8,_0x255286(0x284),_0x6fb01c),_0x5814d4=_0x5066fb[_0x255286(0x25f)];return _0x5814d4;}catch(_0x5895a2){console[_0x255286(0x25e)]('checkAttendees\x20-\x20Error\x20while\x20checking\x20attendees:',_0x5895a2);}return![];}function makeApiRequest(_0x31dacc,_0x749340,_0x1b8b53,_0x313dc5,_0x1a4746=0x0){var _0x393328=a0_0x2ee0e4,_0x46f7b1=localStorage[_0x393328(0x27e)]('access_token'),_0x16ed66=new XMLHttpRequest();_0x16ed66[_0x393328(0x28c)](_0x749340,_0x31dacc,!![]),_0x16ed66[_0x393328(0x227)](_0x393328(0x1e9),_0x393328(0x231)),_0x16ed66[_0x393328(0x227)](_0x393328(0x29c),_0x393328(0x231)),_0x16ed66[_0x393328(0x227)](_0x393328(0x24d),_0x393328(0x2a3)+_0x46f7b1),_0x16ed66[_0x393328(0x264)]=function(){var _0x2ebb22=_0x393328;_0x16ed66['status']===0xc8?_0x313dc5(JSON[_0x2ebb22(0x23e)](_0x16ed66[_0x2ebb22(0x29a)])):(console['error'](_0x2ebb22(0x28a),_0x16ed66[_0x2ebb22(0x26f)]),_0x1a4746<0x1?errorAPICheckLogin(function(_0x59e68e){_0x59e68e&&makeApiRequest(_0x31dacc,_0x749340,_0x1b8b53,_0x313dc5,_0x1a4746+0x1);}):console[_0x2ebb22(0x25e)](_0x2ebb22(0x25c),_0x16ed66[_0x2ebb22(0x26f)]));},_0x16ed66[_0x393328(0x1d3)]=function(){var _0x202ed4=_0x393328;console[_0x202ed4(0x25e)](_0x202ed4(0x214),_0x16ed66[_0x202ed4(0x1d3)]),_0x1a4746<0x1?errorAPICheckLogin(function(_0x58efa7){_0x58efa7&&makeApiRequest(_0x31dacc,_0x749340,_0x1b8b53,_0x313dc5,_0x1a4746+0x1);}):console['error'](_0x202ed4(0x25c),_0x16ed66[_0x202ed4(0x26f)]);},_0x1b8b53?_0x16ed66[_0x393328(0x1d7)](JSON[_0x393328(0x2a1)](_0x1b8b53)):_0x16ed66[_0x393328(0x1d7)]();}async function makeApiRequest_noToken(_0x392bde,_0x29d586,_0x54e152){var _0x311cf7=a0_0x2ee0e4;const _0x43089b={'Content-Type':'application/json','Accept':'application/json','Authorization':_0x311cf7(0x20a)},_0x3c29df={'method':_0x29d586,'headers':_0x43089b,'body':JSON['stringify'](_0x54e152)},_0x48a014=await fetch(_0x392bde,_0x3c29df);if(!_0x48a014['ok'])throw new Error(_0x311cf7(0x1fc)+_0x48a014['status']);return await _0x48a014[_0x311cf7(0x208)]();}function errorAPICheckLogin(_0x537afe){var _0x402117=a0_0x2ee0e4;console[_0x402117(0x2aa)](_0x402117(0x273)),validateLogin(function(_0x20e8cc){var _0x3f5968=_0x402117;_0x20e8cc?(console['log'](_0x3f5968(0x22e)),_0x537afe(!![])):(console[_0x3f5968(0x2aa)]('errorAPICheckLogin\x20-\x20login\x20not\x20validated'),window[_0x3f5968(0x260)][_0x3f5968(0x299)]='/');});}function validateLogin(_0x3a2467){var _0x16a917=a0_0x2ee0e4;if(!localStorage[_0x16a917(0x27e)](_0x16a917(0x1da))||!localStorage[_0x16a917(0x27e)](_0x16a917(0x22d))||!localStorage[_0x16a917(0x27e)](_0x16a917(0x296))){console['error'](_0x16a917(0x297)),_0x3a2467(![]);return;}const _0x349c5f=_0x16a917(0x24e),_0x53593e='POST',_0x160be7={'xoken':localStorage[_0x16a917(0x27e)](_0x16a917(0x2a6)),'userId':localStorage['getItem']('portalUserId'),'userType':localStorage['getItem'](_0x16a917(0x296))};makeApiRequest(_0x349c5f,_0x53593e,_0x160be7,function(_0x3d082d){var _0x5d99ea=_0x16a917;Object[_0x5d99ea(0x1de)](_0x3d082d[_0x5d99ea(0x25f)])['forEach'](function(_0xc5184c){var _0x10b473=_0x5d99ea;localStorage['setItem'](_0xc5184c,_0x3d082d[_0x10b473(0x25f)][_0xc5184c]);}),_0x3a2467(!![]);},function(_0x11a898){var _0x5448b2=_0x16a917;console[_0x5448b2(0x25e)]('validateLogin\x20-\x20Validation\x20failed:',_0x11a898),_0x3a2467(![]);});}function checkInParticipant(_0x547551,_0x39736c,_0x111b32){var _0x52d9df=a0_0x2ee0e4;const _0x5204b1=_0x52d9df(0x248);console['log'](_0x52d9df(0x27f)+_0x547551+'\x20'+_0x39736c);const _0x3d1dc9={'memberNumber':localStorage['getItem'](_0x52d9df(0x22d)),'classScheduleId':_0x547551,'classDateTime':_0x39736c};function _0x1f1f56(_0xd205b9){var _0x51d570=_0x52d9df;if(_0xd205b9[_0x51d570(0x25f)]===_0x51d570(0x1ec)){console[_0x51d570(0x2aa)](_0x51d570(0x21e));const _0x5ce9f5=_0x111b32[_0x51d570(0x249)];_0x5ce9f5[_0x51d570(0x266)]='';const _0x5dde96=document[_0x51d570(0x1dd)](_0x51d570(0x209));_0x5dde96['textContent']='Confirmed',_0x5ce9f5[_0x51d570(0x21c)](_0x5dde96);}else console['error'](_0x51d570(0x1e0),_0xd205b9[_0x51d570(0x213)]);}makeApiRequest(_0x5204b1,_0x52d9df(0x284),_0x3d1dc9,_0x1f1f56);}