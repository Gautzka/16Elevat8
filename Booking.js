var a0_0x4353e5=a0_0x11eb;(function(_0x3eff3d,_0x106876){var _0x618741=a0_0x11eb,_0x1a4c1c=_0x3eff3d();while(!![]){try{var _0x1e1c06=-parseInt(_0x618741(0xd6))/0x1+-parseInt(_0x618741(0x138))/0x2+parseInt(_0x618741(0x19b))/0x3*(-parseInt(_0x618741(0x112))/0x4)+parseInt(_0x618741(0xf0))/0x5*(parseInt(_0x618741(0x163))/0x6)+parseInt(_0x618741(0x11a))/0x7*(-parseInt(_0x618741(0x12c))/0x8)+parseInt(_0x618741(0x18d))/0x9+parseInt(_0x618741(0xfa))/0xa;if(_0x1e1c06===_0x106876)break;else _0x1a4c1c['push'](_0x1a4c1c['shift']());}catch(_0x401046){_0x1a4c1c['push'](_0x1a4c1c['shift']());}}}(a0_0x1af6,0x9c626),document['addEventListener'](a0_0x4353e5(0x10b),function(){var _0x1fa354=a0_0x4353e5;initDatePicker(),selectFirstTab(),fetchAndisplayClassBooked(),updateHeaderDate(document[_0x1fa354(0x157)](_0x1fa354(0xdb))[_0x1fa354(0x194)]);var _0x1ef6b2=document['getElementById'](_0x1fa354(0x142));_0x1ef6b2['addEventListener']('click',function(){fetchAndisplayClassBooked();});var _0x1ef6b2=document[_0x1fa354(0x157)](_0x1fa354(0x14e));_0x1ef6b2['addEventListener'](_0x1fa354(0xde),function(){fetchAndDisplayClassesAvailable();});const _0x4983f6=document[_0x1fa354(0x157)](_0x1fa354(0xdb)),_0x1f1d6f=document[_0x1fa354(0x157)](_0x1fa354(0xfe)),_0x3d384c=document['getElementById'](_0x1fa354(0x18f));_0x1f1d6f[_0x1fa354(0x119)]('click',function(){var _0x41464c=_0x1fa354;_0x1cd7d6(-0x1);var _0x154aea=document['getElementById'](_0x41464c(0xdb))[_0x41464c(0x194)];saveDatePickerSessionStorage(_0x154aea),updateHeaderDate(_0x154aea),fetchAndDisplayClassesAvailable();}),_0x3d384c['addEventListener'](_0x1fa354(0xde),function(){var _0x14de43=_0x1fa354;_0x1cd7d6(0x1);var _0x19f565=document[_0x14de43(0x157)](_0x14de43(0xdb))['value'];saveDatePickerSessionStorage(_0x19f565),updateHeaderDate(_0x19f565),fetchAndDisplayClassesAvailable();}),_0x4983f6[_0x1fa354(0x119)]('change',function(){var _0x87755f=_0x1fa354,_0x5521aa=document[_0x87755f(0x157)](_0x87755f(0xdb))[_0x87755f(0x194)];saveDatePickerSessionStorage(_0x5521aa),updateHeaderDate(_0x5521aa),fetchAndDisplayClassesAvailable();});function _0x1cd7d6(_0x5f33f5){var _0x454260=_0x1fa354;const _0x1ad551=new Date(_0x4983f6[_0x454260(0x194)]+_0x454260(0xf3));_0x1ad551[_0x454260(0x17d)](_0x1ad551[_0x454260(0x19a)]()+_0x5f33f5),_0x4983f6['value']=formatDate(_0x1ad551);}var _0x3c1ee4=document[_0x1fa354(0x186)]('.location-option');_0x3c1ee4['forEach'](function(_0x4a52b5){var _0x11a07f=_0x1fa354;_0x4a52b5['addEventListener'](_0x11a07f(0xde),function(){var _0x2541ab=_0x11a07f;_0x3c1ee4[_0x2541ab(0x102)](function(_0x46ccef){var _0x4d4a72=_0x2541ab;_0x46ccef[_0x4d4a72(0x15e)][_0x4d4a72(0x16f)](_0x4d4a72(0x108));}),this['classList']['add'](_0x2541ab(0x108)),fetchAndDisplayClassesAvailable();});});var _0x2bab45=document[_0x1fa354(0x186)]('.class-option');_0x2bab45[_0x1fa354(0x102)](function(_0x1712f4){var _0x226ee5=_0x1fa354;_0x1712f4['addEventListener'](_0x226ee5(0xde),function(){var _0x219e4c=_0x226ee5;this['classList'][_0x219e4c(0x136)]('selected-option'),fetchAndDisplayClassesAvailable();});}),document[_0x1fa354(0x157)](_0x1fa354(0x16b))[_0x1fa354(0x119)]('click',function(_0x270d48){var _0x2047b4=_0x1fa354;if(_0x270d48[_0x2047b4(0x1a3)]&&_0x270d48[_0x2047b4(0x1a3)]['matches'](_0x2047b4(0x1a7))){var _0x52632d=_0x270d48[_0x2047b4(0x1a3)][_0x2047b4(0xf7)](_0x2047b4(0xd7));cancelBooking_resolve(_0x52632d)[_0x2047b4(0x148)](()=>{fetchAndDisplayClassesAvailable();})[_0x2047b4(0xe8)](_0x34944f=>{var _0x49ec9f=_0x2047b4;console['error'](_0x49ec9f(0x16d),_0x34944f);});}else{if(_0x270d48[_0x2047b4(0x1a3)]&&_0x270d48[_0x2047b4(0x1a3)][_0x2047b4(0x174)](_0x2047b4(0x160)))bookClass(_0x270d48[_0x2047b4(0x1a3)]),fetchAndDisplayClassesAvailable();else{if(_0x270d48['target']&&_0x270d48[_0x2047b4(0x1a3)][_0x2047b4(0x190)](_0x2047b4(0xfb))){var _0x456659=_0x270d48[_0x2047b4(0x1a3)]['closest']('.booking-item');if(_0x270d48[_0x2047b4(0x1a3)][_0x2047b4(0x190)](_0x2047b4(0x179))){_0x456659[_0x2047b4(0x186)](_0x2047b4(0x152))['forEach'](function(_0xd66e84){var _0x1b7f9e=_0x2047b4;_0xd66e84[_0x1b7f9e(0x15e)]['remove']('enlarged');});return;}var _0x53fde8=_0x456659[_0x2047b4(0x199)](_0x2047b4(0x160))||_0x456659[_0x2047b4(0x199)](_0x2047b4(0x1a7))||_0x456659[_0x2047b4(0x199)](_0x2047b4(0x16a));if(_0x53fde8){var _0x4700c8=_0x53fde8['getAttribute'](_0x2047b4(0x107)),_0x11b936=_0x53fde8[_0x2047b4(0xf7)](_0x2047b4(0x166)),_0x5a9f7b=_0x456659[_0x2047b4(0x199)](_0x2047b4(0x118))[_0x2047b4(0xe5)],_0x950cb8=_0x456659[_0x2047b4(0x199)](_0x2047b4(0x123))[_0x2047b4(0xe5)],_0x34ad8a=document[_0x2047b4(0x13e)](_0x2047b4(0xf9));_0x34ad8a['setAttribute']('data-class-schedule-id',_0x4700c8),_0x34ad8a['setAttribute'](_0x2047b4(0x166),_0x11b936),_0x34ad8a[_0x2047b4(0xf2)]('data-class-time',_0x5a9f7b),_0x34ad8a[_0x2047b4(0xf2)](_0x2047b4(0xca),_0x950cb8),checkAttendees(_0x34ad8a,_0x456659);}else console[_0x2047b4(0x19d)](_0x2047b4(0x14c));}}}}),document[_0x1fa354(0x157)](_0x1fa354(0xfd))['addEventListener'](_0x1fa354(0xde),function(_0x34fcdb){var _0x2e7005=_0x1fa354;if(_0x34fcdb['target']&&_0x34fcdb[_0x2e7005(0x1a3)]['matches']('.cancel-button')){var _0x2cf8c5=_0x34fcdb[_0x2e7005(0x1a3)]['getAttribute'](_0x2e7005(0xd7));cancelBooking_resolve(_0x2cf8c5)[_0x2e7005(0x148)](()=>{fetchAndisplayClassBooked();})['catch'](_0x472289=>{var _0x115c34=_0x2e7005;console[_0x115c34(0x19d)](_0x115c34(0x16d),_0x472289);});}else{if(_0x34fcdb[_0x2e7005(0x1a3)]&&_0x34fcdb[_0x2e7005(0x1a3)][_0x2e7005(0x174)](_0x2e7005(0x16e))){const _0x1238e9=_0x34fcdb['target'];var _0x37b00b=_0x34fcdb['target']['getAttribute'](_0x2e7005(0x107)),_0x420608=_0x34fcdb[_0x2e7005(0x1a3)]['getAttribute'](_0x2e7005(0x106));console[_0x2e7005(0x15f)](_0x2e7005(0xf8)+_0x37b00b+'\x20'+_0x420608),checkInParticipant(_0x37b00b,_0x420608,_0x1238e9);}}});}));function initDatePicker(){var _0x23d453=a0_0x4353e5;const _0x5db01b=document[_0x23d453(0x157)]('datePicker');let _0xd4356f=sessionStorage[_0x23d453(0xff)](_0x23d453(0x1a8)),_0x1a1f4a=sessionStorage[_0x23d453(0xff)](_0x23d453(0x182));_0xd4356f&&_0x1a1f4a&&isWithinValidityPeriod(_0x1a1f4a,0.5)?_0x5db01b['value']=_0xd4356f:(currentDate=getLocalDate(),_0x5db01b[_0x23d453(0x194)]=currentDate,saveDatePickerSessionStorage(currentDate));}function selectFirstTab(){var _0x3457e4=a0_0x4353e5,_0xf13b4f=document[_0x3457e4(0x157)](_0x3457e4(0x142)),_0x2d676d=document[_0x3457e4(0x157)](_0x3457e4(0x14e));_0xf13b4f['classList']['add'](_0x3457e4(0x139)),_0xf13b4f[_0x3457e4(0xf2)](_0x3457e4(0x100),'true'),_0x2d676d[_0x3457e4(0x15e)][_0x3457e4(0x16f)](_0x3457e4(0x139)),_0x2d676d[_0x3457e4(0xf2)](_0x3457e4(0x100),_0x3457e4(0x113));}function isWithinValidityPeriod(_0x7c1a44,_0x410b45){var _0x4a2505=a0_0x4353e5;const _0x2020c0=new Date()[_0x4a2505(0xe6)](),_0x2f90bb=(_0x2020c0-_0x7c1a44)/(0x3e8*0x3c*0x3c);return _0x2f90bb<=_0x410b45;}function formatDate(_0x16b477){var _0x2dd0ca=a0_0x4353e5;let _0x1077d3=new Date(_0x16b477),_0x1582ed=''+(_0x1077d3[_0x2dd0ca(0x17a)]()+0x1),_0x462fd8=''+_0x1077d3['getDate'](),_0x4e7c8b=_0x1077d3[_0x2dd0ca(0x178)]();if(_0x1582ed[_0x2dd0ca(0xe3)]<0x2)_0x1582ed='0'+_0x1582ed;if(_0x462fd8[_0x2dd0ca(0xe3)]<0x2)_0x462fd8='0'+_0x462fd8;return[_0x4e7c8b,_0x1582ed,_0x462fd8][_0x2dd0ca(0x10c)]('-');}function updateHeaderDate(_0x1c7f90){var _0x44a042=a0_0x4353e5;const _0xdb1354=document[_0x44a042(0x157)](_0x44a042(0x198));if(!_0xdb1354){console['error'](_0x44a042(0x11f));return;}const _0x297be2=new Date(_0x1c7f90),_0x4747fd=_0x297be2[_0x44a042(0x19a)](),_0x17f4ee=_0x297be2[_0x44a042(0x129)]('en-AU',{'month':'long'}),_0x274449=_0x297be2['toLocaleString'](_0x44a042(0x187),{'weekday':_0x44a042(0xf5)});function _0x137be1(_0x44cee3){if(_0x44cee3>0x3&&_0x44cee3<0x15)return'th';switch(_0x44cee3%0xa){case 0x1:return'st';case 0x2:return'nd';case 0x3:return'rd';default:return'th';}}const _0x247214=_0x274449+'\x20'+(_0x4747fd<0xa?'0':'')+_0x4747fd+_0x137be1(_0x4747fd)+'\x20'+_0x17f4ee;_0xdb1354[_0x44a042(0xe5)]=_0x247214;}function getLocalDate(){var _0x5af3d7=a0_0x4353e5;const _0x2ff6ef=new Date(),_0x827bf4=_0x2ff6ef[_0x5af3d7(0x151)]()*0xea60,_0x5101eb=new Date(_0x2ff6ef-_0x827bf4)['toISOString']()[_0x5af3d7(0xd5)](0x0,0xa);return _0x5101eb;}function saveDatePickerSessionStorage(_0x4474e0){var _0x33781a=a0_0x4353e5;sessionStorage[_0x33781a(0x159)](_0x33781a(0x1a8),_0x4474e0),timestamp=new Date()[_0x33781a(0xe6)](),sessionStorage[_0x33781a(0x159)](_0x33781a(0x182),timestamp);}function bookClass(_0x4373ee){var _0x4e44d1=a0_0x4353e5,_0x507bca=_0x4373ee[_0x4e44d1(0xf7)](_0x4e44d1(0x107)),_0x4ce846=_0x4373ee[_0x4e44d1(0xf7)]('data-class-date'),_0x49edb4=_0x4373ee[_0x4e44d1(0xf7)](_0x4e44d1(0xca)),_0x491b8f=localStorage[_0x4e44d1(0xff)]('userId'),_0xd50f05=localStorage[_0x4e44d1(0xff)]('access_token'),_0x464af9=_0x4e44d1(0x162),_0x34d80b={'classScheduleId':_0x507bca,'classDateTime':_0x4ce846,'className':_0x49edb4,'userId':_0x491b8f,'onBehalfBookingReference':'','onBehalfBookFor':''},_0x5e2dc8=new XMLHttpRequest();_0x5e2dc8[_0x4e44d1(0x14d)](_0x4e44d1(0x12b),_0x464af9,!![]),_0x5e2dc8[_0x4e44d1(0x1a2)]('Content-Type',_0x4e44d1(0xc9)),_0x5e2dc8['setRequestHeader'](_0x4e44d1(0x10a),_0x4e44d1(0xc9)),_0x5e2dc8[_0x4e44d1(0x1a2)](_0x4e44d1(0x17f),'Bearer\x20'+_0xd50f05),_0x5e2dc8[_0x4e44d1(0x169)]=function(){var _0x150ea=_0x4e44d1,_0x13f49c;try{_0x13f49c=JSON[_0x150ea(0x18a)](_0x5e2dc8[_0x150ea(0x181)]);}catch(_0x54655d){_0x13f49c={'errors':{'message':_0x150ea(0x111)}};}_0x5e2dc8[_0x150ea(0x189)]>=0xc8&&_0x5e2dc8[_0x150ea(0x189)]<0x12c&&_0x13f49c[_0x150ea(0x15b)]===0xc8?fetchAndDisplayClassesAvailable():(console[_0x150ea(0x15f)](_0x150ea(0x171)+_0x5e2dc8[_0x150ea(0x189)]+'response.messageFields'),alert(_0x13f49c[_0x150ea(0x10f)][_0x150ea(0x17c)]),errorAPICheckLogin(function(_0x430373){var _0x50d47e=_0x150ea;!_0x430373&&console[_0x50d47e(0x19d)](_0x50d47e(0x116));}));},_0x5e2dc8[_0x4e44d1(0x153)]=function(){var _0x42eecd=_0x4e44d1;alert(_0x42eecd(0x12a)),errorAPICheckLogin(function(_0x2e4c88){var _0x1fe34e=_0x42eecd;!_0x2e4c88&&console[_0x1fe34e(0x19d)](_0x1fe34e(0x116));});},_0x5e2dc8[_0x4e44d1(0x19c)](JSON[_0x4e44d1(0x17b)](_0x34d80b));}function displayErrorMessage(_0x495e97,_0x1777dd){var _0x58aef8=a0_0x4353e5;clearErrorMessage(_0x495e97);var _0x1a3334=document['createElement']('div');_0x1a3334[_0x58aef8(0xcc)]='error-message',_0x1a3334[_0x58aef8(0xe5)]=_0x1777dd,_0x495e97['parentNode'][_0x58aef8(0x131)](_0x1a3334,_0x495e97[_0x58aef8(0x180)]);}function clearErrorMessage(_0x1c69d5){var _0x375807=a0_0x4353e5,_0x123996=_0x1c69d5[_0x375807(0x180)];_0x123996&&_0x123996[_0x375807(0xcc)]===_0x375807(0x137)&&_0x123996[_0x375807(0x16f)]();}function showInlineAttendees(_0x810dbe,_0x847a6a){var _0x15ba79=a0_0x4353e5,_0x57a384=_0x847a6a[_0x15ba79(0x199)](_0x15ba79(0x179));if(!_0x57a384)_0x57a384=document[_0x15ba79(0x13e)](_0x15ba79(0x170)),_0x57a384['className']='attendees',_0x847a6a[_0x15ba79(0x161)](_0x57a384),_0x57a384[_0x15ba79(0x18c)]['gridColumn']=_0x15ba79(0x114);else{_0x57a384[_0x15ba79(0x18c)][_0x15ba79(0x167)]=_0x57a384[_0x15ba79(0x18c)][_0x15ba79(0x167)]==='block'?_0x15ba79(0xd4):_0x15ba79(0x192);return;}var _0x21a44a='';Array[_0x15ba79(0x172)](_0x810dbe)&&_0x810dbe[_0x15ba79(0xe3)]>0x0?(_0x810dbe[_0x15ba79(0x1a6)]((_0x1d4c28,_0x4af695)=>_0x1d4c28[_0x15ba79(0x196)][_0x15ba79(0x168)](_0x4af695['fullName'])),_0x810dbe[_0x15ba79(0x102)](function(_0x3bf7ac){var _0x1b1c2e=_0x15ba79,_0x169a75=_0x3bf7ac[_0x1b1c2e(0x196)]['split']('\x20')[0x0];_0x21a44a+=_0x1b1c2e(0x146)+_0x3bf7ac[_0x1b1c2e(0x15a)]+_0x1b1c2e(0xf6)+_0x169a75+_0x1b1c2e(0x158);})):_0x21a44a+=_0x15ba79(0x147),_0x57a384[_0x15ba79(0xdf)]=_0x21a44a,_0x57a384[_0x15ba79(0x18c)][_0x15ba79(0x167)]=_0x15ba79(0x192),_0x57a384['querySelectorAll'](_0x15ba79(0x152))[_0x15ba79(0x102)](function(_0x15e52a){var _0x4fee2d=_0x15ba79;_0x15e52a['addEventListener'](_0x4fee2d(0xde),function(_0x557b36){var _0x16700e=_0x4fee2d;_0x15e52a[_0x16700e(0x15e)][_0x16700e(0x101)]('enlarged')?_0x15e52a['classList'][_0x16700e(0x16f)](_0x16700e(0x154)):(_0x57a384[_0x16700e(0x186)](_0x16700e(0x152))[_0x16700e(0x102)](function(_0x1737bb){var _0x106df8=_0x16700e;_0x1737bb[_0x106df8(0x15e)][_0x106df8(0x16f)](_0x106df8(0x154));}),_0x15e52a['classList'][_0x16700e(0x11e)](_0x16700e(0x154))),_0x557b36[_0x16700e(0xda)]();});}),_0x57a384[_0x15ba79(0x119)](_0x15ba79(0xde),function(_0x474601){var _0x3a8722=_0x15ba79;_0x57a384[_0x3a8722(0x186)](_0x3a8722(0x152))['forEach'](function(_0x4defd4){var _0x289234=_0x3a8722;_0x4defd4[_0x289234(0x15e)][_0x289234(0x16f)](_0x289234(0x154));}),_0x474601[_0x3a8722(0xda)]();}),document['addEventListener'](_0x15ba79(0xde),function(_0xa8b0a2){var _0x43978e=_0x15ba79;!_0x847a6a[_0x43978e(0x101)](_0xa8b0a2[_0x43978e(0x1a3)])&&_0x57a384[_0x43978e(0x186)](_0x43978e(0x152))[_0x43978e(0x102)](function(_0x11efd7){var _0x1597fb=_0x43978e;_0x11efd7[_0x1597fb(0x15e)][_0x1597fb(0x16f)](_0x1597fb(0x154));});});}function checkAttendees(_0x4d4233,_0x338682){var _0x33a4ae=a0_0x4353e5,_0x5b2ba8=_0x4d4233['getAttribute'](_0x33a4ae(0x107)),_0x1d0fa5=_0x4d4233[_0x33a4ae(0xf7)](_0x33a4ae(0x166)),_0x31829f=_0x4d4233[_0x33a4ae(0xf7)](_0x33a4ae(0xd9)),_0x527b70='https://crossfit168.clubfit.net.au/api/v1/booking/class-participants',_0x1dfa28={'classScheduleId':_0x5b2ba8,'selectedDate':_0x1d0fa5,'classTime':_0x31829f},_0x3cdc32=new XMLHttpRequest();_0x3cdc32[_0x33a4ae(0x14d)](_0x33a4ae(0x12b),_0x527b70,!![]),_0x3cdc32[_0x33a4ae(0x1a2)](_0x33a4ae(0x183),'application/json'),_0x3cdc32[_0x33a4ae(0x1a2)](_0x33a4ae(0x10a),'application/json'),_0x3cdc32[_0x33a4ae(0x1a2)]('Authorization',_0x33a4ae(0x18b)),_0x3cdc32[_0x33a4ae(0x169)]=function(){var _0x4d1dcc=_0x33a4ae;if(_0x3cdc32[_0x4d1dcc(0x189)]>=0xc8&&_0x3cdc32[_0x4d1dcc(0x189)]<0x12c){var _0x19f6e1=JSON[_0x4d1dcc(0x18a)](_0x3cdc32[_0x4d1dcc(0x181)]),_0xa0fc73=_0x19f6e1[_0x4d1dcc(0x13d)];showInlineAttendees(_0xa0fc73,_0x338682);}else console['error'](_0x4d1dcc(0x173),_0x3cdc32[_0x4d1dcc(0x189)]),errorAPICheckLogin();},_0x3cdc32[_0x33a4ae(0x153)]=function(){var _0x1d8acd=_0x33a4ae;console[_0x1d8acd(0x19d)](_0x1d8acd(0x150)),errorAPICheckLogin();},_0x3cdc32['send'](JSON[_0x33a4ae(0x17b)](_0x1dfa28));}function cancelBooking_resolve(_0x40e546,_0xd12123=0x0){return new Promise((_0x41207a,_0x527216)=>{var _0x1d3450=a0_0x11eb,_0x339310=localStorage[_0x1d3450(0xff)](_0x1d3450(0xcf)),_0x230cb9=_0x1d3450(0x14a)+_0x40e546,_0x1a286d=new XMLHttpRequest();_0x1a286d[_0x1d3450(0x14d)](_0x1d3450(0x12b),_0x230cb9,!![]),_0x1a286d[_0x1d3450(0x1a2)](_0x1d3450(0x183),_0x1d3450(0xc9)),_0x1a286d[_0x1d3450(0x1a2)]('Accept','application/json'),_0x1a286d[_0x1d3450(0x1a2)](_0x1d3450(0x17f),_0x1d3450(0x13b)+_0x339310),_0x1a286d[_0x1d3450(0x169)]=function(){var _0x568fb3=_0x1d3450;const _0x467a5f=JSON['parse'](_0x1a286d['responseText']);_0x1a286d[_0x568fb3(0x189)]>=0xc8&&_0x1a286d['status']<0x12c?(_0x467a5f[_0x568fb3(0x15b)]!==0xc8&&console[_0x568fb3(0x15f)]('Response\x20received:',_0x1a286d[_0x568fb3(0x181)]),_0x41207a(_0x1a286d['responseText'])):(console[_0x568fb3(0x19d)](_0x568fb3(0x176),_0x1a286d['status']),console[_0x568fb3(0x19d)](_0x568fb3(0x13c),_0x1a286d['responseText']),_0xd12123<0x1?errorAPICheckLogin(function(_0x902348){var _0x1cf8c4=_0x568fb3;_0x902348?cancelBooking_resolve(_0x40e546,_0xd12123+0x1)['then'](_0x41207a)['catch'](_0x527216):_0x527216(new Error(_0x1cf8c4(0x122)));}):_0x527216(new Error(_0x568fb3(0x12f))));},_0x1a286d[_0x1d3450(0x153)]=function(){var _0x247e06=_0x1d3450;console[_0x247e06(0x19d)](_0x247e06(0x130)),_0xd12123<0x1?errorAPICheckLogin(function(_0x218d85){var _0x524d6c=_0x247e06;_0x218d85?cancelBooking_resolve(_0x40e546,_0xd12123+0x1)[_0x524d6c(0x148)](_0x41207a)[_0x524d6c(0xe8)](_0x527216):_0x527216(new Error('cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20network\x20error\x20and\x20retry'));}):_0x527216(new Error(_0x247e06(0x117)));},_0x1a286d[_0x1d3450(0x19c)]();});}function fetchAndDisplayClassesAvailable(){var _0x21b095=a0_0x4353e5,_0x2bf656=document[_0x21b095(0x186)](_0x21b095(0x135));if(_0x2bf656[_0x21b095(0xe3)]===0x0){console['log'](_0x21b095(0x18e));return;}var _0x43bdd0=document[_0x21b095(0x157)](_0x21b095(0xdb))[_0x21b095(0x194)],_0x2561d2=getLocalDate(),_0x52d48a={'ALX':0x2,'CBD':0x1,'MVL':0x4},_0x1ebf9f=Array['from'](_0x2bf656)['map'](_0x1caf95=>{var _0x30ff55=_0x21b095,_0x468ac1=_0x1caf95[_0x30ff55(0xf7)](_0x30ff55(0xcd)),_0x18d201=_0x52d48a[_0x468ac1];return _0x18d201;}),_0x599175=localStorage[_0x21b095(0xff)](_0x21b095(0xe9)),_0x374143={'UserId':_0x599175,'clubId':_0x1ebf9f[0x0],'selectedDate':_0x43bdd0,'classType':0x0,'accountId':_0x1ebf9f[0x0]};if(_0x43bdd0<_0x2561d2)displayClassAvailable([]);else{var _0x5c6b77=_0x21b095(0xdd);makeApiRequest(_0x5c6b77,_0x21b095(0x12b),_0x374143,function(_0x4b70e2){var _0x4f4dca=_0x21b095;displayClassAvailable(_0x4b70e2[_0x4f4dca(0x13d)]);});}}function displayClassAvailable(_0x567e4e){var _0x6b2f1a=a0_0x4353e5,_0x445fb2=document['getElementById'](_0x6b2f1a(0x16b));let _0x3a5254=getSelectedClassOptions(),_0x2632be='',_0x569305=document[_0x6b2f1a(0x157)](_0x6b2f1a(0xdb))[_0x6b2f1a(0x194)];if(_0x567e4e['length']===0x0)_0x2632be=_0x6b2f1a(0xef);else{const _0x41476d=/crossfit|cf/i,_0x5a6309=/weightlifting/i;let _0x5d4728=_0x567e4e[_0x6b2f1a(0xfc)](_0x37bffd=>{var _0x765f6c=_0x6b2f1a;const _0x57a5e9=_0x41476d[_0x765f6c(0x128)](_0x37bffd[_0x765f6c(0xcc)]),_0x172b6e=_0x5a6309[_0x765f6c(0x128)](_0x37bffd[_0x765f6c(0xcc)]);if(_0x3a5254['includes'](_0x765f6c(0x155))&&_0x57a5e9)return!![];if(_0x3a5254[_0x765f6c(0x149)](_0x765f6c(0x10d))&&_0x172b6e)return!![];if(_0x3a5254[_0x765f6c(0x149)]('Other')&&!_0x57a5e9&&!_0x172b6e)return!![];if(_0x3a5254[_0x765f6c(0xe3)]===0x0||_0x3a5254[_0x765f6c(0xe3)]===0x3||_0x3a5254['includes'](_0x765f6c(0x105)))return!![];if(_0x3a5254[_0x765f6c(0xe3)]===0x2&&!_0x3a5254[_0x765f6c(0x149)]('Other'))return _0x57a5e9||_0x172b6e;return![];});_0x5d4728[_0x6b2f1a(0xe3)]===0x0?_0x2632be='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22booking-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22class-name\x22>No\x20class\x20found</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>':_0x5d4728[_0x6b2f1a(0x102)](_0x2cc939=>{var _0x957638=_0x6b2f1a;const _0x7b4f22=_0x2cc939['classCapacity']-_0x2cc939[_0x957638(0x156)],_0xefbd56=_0x7b4f22===0x1?_0x957638(0xce):'spots';_0x2632be+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22booking-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22time\x22>'+_0x2cc939[_0x957638(0x125)]+_0x957638(0x110)+_0x2cc939[_0x957638(0xcc)]+_0x957638(0xd3)+(_0x2cc939[_0x957638(0xcb)]==='Booked'?_0x957638(0x15d)+_0x2cc939[_0x957638(0x19e)]+_0x957638(0x11d)+_0x2cc939[_0x957638(0xe0)]+_0x957638(0x1a4)+_0x569305+'\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-name=\x22'+_0x2cc939[_0x957638(0xcc)]+_0x957638(0x19f)+_0x7b4f22+'\x20'+_0xefbd56+_0x957638(0xd0):_0x7b4f22>0x0?_0x957638(0x1a5)+_0x2cc939[_0x957638(0xe0)]+_0x957638(0x17e)+_0x569305+_0x957638(0x193)+_0x2cc939['className']+_0x957638(0x165)+_0x7b4f22+'\x20'+_0xefbd56+'\x20left</div>':_0x957638(0x188)+_0x2cc939[_0x957638(0xe0)]+'\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-date=\x22'+_0x569305+_0x957638(0x193)+_0x2cc939[_0x957638(0xcc)]+_0x957638(0x191))+_0x957638(0x140);});}_0x445fb2[_0x6b2f1a(0xdf)]=_0x2632be;}function a0_0x11eb(_0x48e18d,_0x445619){var _0x1af6d6=a0_0x1af6();return a0_0x11eb=function(_0x11ebf9,_0x4ad084){_0x11ebf9=_0x11ebf9-0xc9;var _0x30aee6=_0x1af6d6[_0x11ebf9];return _0x30aee6;},a0_0x11eb(_0x48e18d,_0x445619);}function a0_0x1af6(){var _0x1b4bb8=['timestampLastChanged','Content-Type','Bearer','refresh_token','querySelectorAll','en-AU','<button\x20class=\x22full-button\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-schedule-id=\x22','status','parse','bearer','style','6637167aXNVuA','No\x20locations\x20selected.','nextDay','closest','\x22>Full</button>','block','\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-name=\x22','value','trim','fullName','makeApiRequest\x20-\x20Network\x20error','date-header','querySelector','getDate','4569XYbiYu','send','error','memberBookingId','\x22>Cancel</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spotsleft\x22>','\x22>Cancel</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','location','setRequestHeader','target','\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-date=\x22','<button\x20class=\x22book-button\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-schedule-id=\x22','sort','.cancel-button','selectedDate','application/json','data-class-name','memberBookedStatus','className','data-location','spot','access_token','\x20left</div>','Confirmed','<p>','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22buttonandavailability\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22action-button\x22\x20style=\x22margin-left:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','none','slice','947436ADDDoX','data-member-booking-id','bookedDate','data-class-time','stopPropagation','datePicker','replace','https://crossfit168.clubfit.net.au/api/v1/booking/search-classes','click','innerHTML','classScheduleId','GET','https://admin.clubfit.net.au/api/v1/account/validate','length','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22booked-class-columns\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22div-each-class\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22w-richtext\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','textContent','getTime','portalUserId','catch','userId','toISOString','HTTP\x20error!\x20status:\x20','isCheckedIn:\x20','hasAttended','success','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22booking-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22class-name\x22>No\x20class\x20found</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','751555oRWLbL','errorAPICheckLogin\x20-\x20function\x20called','setAttribute','T00:00:00','clubName','long','\x22\x20alt=\x22Avatar\x22\x20class=\x22attendee-photo\x22>','getAttribute','before\x20calling\x20checkInParticipant:\x20','button','31625010OaxTKc','.booking-item','filter','booking-info','prevDay','getItem','aria-selected','contains','forEach','\x22\x20data-class-date-time=\x22','userType','All','data-class-date-time','data-class-schedule-id','selected-option','map','Accept','DOMContentLoaded','join','Weightlifting','</p>','errors','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22class-name\x22>','Unknown\x20error\x20occurred','948ZeUHNS','false','1\x20/\x20-1','Check\x20in\x20success','User\x20is\x20not\x20logged\x20in,\x20redirecting\x20to\x20login\x20page.','cancelBooking_resolve\x20-\x20Network\x20error','.time','addEventListener','42EHNzLo','<h3\x20class=\x22name-class\x22>','Error\x20fetching\x20information:','\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-schedule-id=\x22','add','Element\x20with\x20id\x20\x27date-header\x27\x20not\x20found!','https://crossfit168.clubfit.net.au/api/v1/booking/current/','makeApiRequest\x20-\x20Retried\x20request\x20failed:','cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20retry','.class-name','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','classTime','json','Cancelled','test','toLocaleString','Network\x20error\x20occurred\x20while\x20booking.','POST','1393064dhwYSC','validateLogin\x20-\x20Validation\x20failed:','isUserCheckedin\x20-\x20Error\x20while\x20checking\x20attendees:','cancelBooking_resolve\x20-\x20Cancellation\x20failed','cancelBooking_resolve\x20-\x20Network\x20error\x20while\x20cancelling\x20booking','insertBefore','.class-option.selected-option','</h3>','href','.location-option.selected-option','toggle','error-message','2113080LKxPuk','w--current','portalUserId\x20','Bearer\x20','Error\x20details:','payload','createElement','parentElement','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','errorAPICheckLogin\x20-\x20login\x20validated','tab-existing-booking','keys','split','2-digit','<div\x20class=\x22attendee-item\x22><img\x20src=\x22','<div>No\x20attendees</div>','then','includes','https://crossfit168.clubfit.net.au/api/v1/booking/cancel/','validateLogin\x20-\x20Required\x20session\x20storage\x20items\x20are\x20missing','No\x20book-button\x20or\x20cancel-button\x20found\x20in\x20booking-item.','open','tab-book-class','number','checkAttendees\x20-\x20Network\x20error\x20while\x20checking\x20attendees','getTimezoneOffset','.attendee-photo','onerror','enlarged','CrossFit','totalBooked','getElementById','</div>','setItem','memberPhotoLocation','statusCode','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','<button\x20class=\x22cancel-button\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-member-booking-id=\x22','classList','log','.book-button','appendChild','https://crossfit168.clubfit.net.au/api/v1/booking/book-class-v2','6VjzrMo','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22column-signin-cancel\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','\x22>Book</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22spotsleft\x22>','data-class-date','display','localeCompare','onload','.full-button','class-available','short','EventListener\x20-\x20Cancellation\x20error:','.signin-button','remove','div','xhr.status:\x20','isArray','checkAttendees\x20-\x20Error\x20while\x20checking\x20attendees:','matches','bookedId','Error\x20while\x20cancelling\x20booking,\x20xhr.status:\x20','\x22>Sign-in</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22action-button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22cancel-button\x22\x20data-member-booking-id=\x22','getFullYear','.attendees','getMonth','stringify','message','setDate','\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-class-date=\x22','Authorization','nextSibling','responseText'];a0_0x1af6=function(){return _0x1b4bb8;};return a0_0x1af6();}function getSelectedClassOptions(){var _0x160350=a0_0x4353e5;const _0x3696bd=document[_0x160350(0x186)](_0x160350(0x132));return Array['from'](_0x3696bd)[_0x160350(0x109)](_0x3ef920=>{var _0x18d400=_0x160350;const _0x21ba80=_0x3ef920['textContent'][_0x18d400(0x195)]();return _0x21ba80;});}function fetchAndisplayClassBooked(){var _0x15b535=a0_0x4353e5,_0x37e7bf=localStorage[_0x15b535(0xff)](_0x15b535(0xe9)),_0x20910d=_0x15b535(0x120)+_0x37e7bf;makeApiRequest(_0x20910d,_0x15b535(0xe1),null,function(_0x400d52){var _0x1a8c5f=_0x15b535;displayMyBookedClass(_0x400d52[_0x1a8c5f(0x13d)]);});}async function displayMyBookedClass(_0x1bec85){var _0x5df785=a0_0x4353e5;const _0x4966ed=document['getElementById'](_0x5df785(0xfd));let _0x3f973d='';const _0x503814=getLocalDate();for(const _0xfaba7 of _0x1bec85){if(_0xfaba7['bookingStatus']!==_0x5df785(0x127)){const _0x5a80f8=new Date(_0xfaba7[_0x5df785(0xd8)])[_0x5df785(0xea)]()['slice'](0x0,0xa),_0x97418b=new Date(_0xfaba7[_0x5df785(0xd8)])[_0x5df785(0x129)](_0x5df785(0x187),{'weekday':'short','month':_0x5df785(0x16c),'day':_0x5df785(0x145),'hour':_0x5df785(0x145),'minute':'2-digit'})[_0x5df785(0xdc)](',',''),_0x2d77af=_0x97418b[_0x5df785(0x144)]('\x20')[0x0],_0x4e6900=_0x97418b[_0x5df785(0x144)]('\x20')['slice'](0x1)['join']('\x20'),_0x4591a4=_0x5df785(0x11b)+_0xfaba7['className']+_0x5df785(0x133),_0x5cdf42=_0x5df785(0xd2)+_0x2d77af+'\x20'+_0x4e6900+_0x5df785(0x10e),_0x516e93=_0x5df785(0xd2)+_0xfaba7[_0x5df785(0xf4)]+_0x5df785(0x10e);let _0x883a80='';if(_0x5a80f8===_0x503814){const _0x5b233b=await isUserCheckedin(_0xfaba7[_0x5df785(0xe0)],_0x503814,_0xfaba7[_0x5df785(0x125)]);console[_0x5df785(0x15f)](_0x5df785(0xec)+_0x5b233b),!_0x5b233b?_0x883a80='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22action-button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22signin-button\x22\x20data-class-schedule-id=\x22'+_0xfaba7[_0x5df785(0xe0)]+_0x5df785(0x103)+_0xfaba7['bookedDate']+_0x5df785(0x177)+_0xfaba7['bookedId']+_0x5df785(0x1a0):_0x883a80='<div\x20class=\x22action-button\x22>Signed\x20in</div>';}else _0x883a80='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22action-button\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22cancel-button\x22\x20data-member-booking-id=\x22'+_0xfaba7[_0x5df785(0x175)]+'\x22>Cancel</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';_0x3f973d+=_0x5df785(0xe4)+_0x4591a4+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x5cdf42+_0x5df785(0x15c)+_0x516e93+_0x5df785(0x164)+_0x883a80+_0x5df785(0x124);}}!_0x3f973d&&(_0x3f973d='<div\x20class=\x22booked-class-columns\x22><div\x20class=\x22div-each-class\x22><div\x20class=\x22w-richtext\x22><p>No\x20class\x20available</p></div></div></div>'),_0x4966ed['innerHTML']=_0x3f973d;}async function isUserCheckedin(_0x546621,_0x35ae9f,_0x363e6a){var _0x133aa2=a0_0x4353e5;const _0xb3d375='https://crossfit168.clubfit.net.au/api/v1/booking/class-participants',_0x3278bf={'classScheduleId':_0x546621,'selectedDate':_0x35ae9f,'classTime':_0x363e6a};try{const _0x1e409a=await makeApiRequest_noToken(_0xb3d375,_0x133aa2(0x12b),_0x3278bf),_0x1782e5=_0x1e409a[_0x133aa2(0x13d)],_0x1bc4f1=localStorage[_0x133aa2(0xff)](_0x133aa2(0xe9));console['log'](_0x133aa2(0x13a)+_0x1bc4f1);for(const _0x2aca0e of _0x1782e5){console[_0x133aa2(0x15f)](_0x2aca0e[_0x133aa2(0x14f)]+':\x20'+_0x2aca0e['hasAttended']),console[_0x133aa2(0x15f)](_0x2aca0e[_0x133aa2(0x14f)]===_0x1bc4f1),console[_0x133aa2(0x15f)](_0x2aca0e[_0x133aa2(0xed)]);if(_0x2aca0e[_0x133aa2(0x14f)]===_0x1bc4f1&&_0x2aca0e[_0x133aa2(0xed)])return console['log']('user\x20checked\x20in:\x20'+_0x2aca0e[_0x133aa2(0x14f)]+'\x20'+_0x2aca0e['hasAttended']),!![];}}catch(_0x585586){console['error'](_0x133aa2(0x12e),_0x585586);}return![];}function makeApiRequest(_0x2f41b8,_0xf7fdee,_0x42a310,_0x5854a1,_0x1a90ff=0x0){var _0x375874=a0_0x4353e5,_0xcf4bbe=localStorage['getItem']('access_token'),_0x18b4bf=new XMLHttpRequest();_0x18b4bf[_0x375874(0x14d)](_0xf7fdee,_0x2f41b8,!![]),_0x18b4bf['setRequestHeader'](_0x375874(0x183),_0x375874(0xc9)),_0x18b4bf[_0x375874(0x1a2)]('Accept','application/json'),_0x18b4bf[_0x375874(0x1a2)]('Authorization',_0x375874(0x13b)+_0xcf4bbe),_0x18b4bf[_0x375874(0x169)]=function(){var _0x52cd6c=_0x375874;_0x18b4bf[_0x52cd6c(0x189)]===0xc8?_0x5854a1(JSON['parse'](_0x18b4bf[_0x52cd6c(0x181)])):(console[_0x52cd6c(0x19d)](_0x52cd6c(0x11c),_0x18b4bf[_0x52cd6c(0x189)]),_0x1a90ff<0x1?errorAPICheckLogin(function(_0x4d0535){_0x4d0535&&makeApiRequest(_0x2f41b8,_0xf7fdee,_0x42a310,_0x5854a1,_0x1a90ff+0x1);}):console[_0x52cd6c(0x19d)](_0x52cd6c(0x121),_0x18b4bf[_0x52cd6c(0x189)]));},_0x18b4bf['onerror']=function(){var _0x76b1cb=_0x375874;console[_0x76b1cb(0x19d)](_0x76b1cb(0x197),_0x18b4bf[_0x76b1cb(0x153)]),_0x1a90ff<0x1?errorAPICheckLogin(function(_0x4d7dbe){_0x4d7dbe&&makeApiRequest(_0x2f41b8,_0xf7fdee,_0x42a310,_0x5854a1,_0x1a90ff+0x1);}):console[_0x76b1cb(0x19d)]('makeApiRequest\x20-\x20Retried\x20request\x20failed:',_0x18b4bf[_0x76b1cb(0x189)]);},_0x42a310?_0x18b4bf[_0x375874(0x19c)](JSON[_0x375874(0x17b)](_0x42a310)):_0x18b4bf[_0x375874(0x19c)]();}async function makeApiRequest_noToken(_0x3be04e,_0x42137a,_0x188c80){var _0x3529a5=a0_0x4353e5;const _0x18fb4b={'Content-Type':'application/json','Accept':_0x3529a5(0xc9),'Authorization':_0x3529a5(0x184)},_0x575630={'method':_0x42137a,'headers':_0x18fb4b,'body':JSON[_0x3529a5(0x17b)](_0x188c80)},_0x440fe5=await fetch(_0x3be04e,_0x575630);if(!_0x440fe5['ok'])throw new Error(_0x3529a5(0xeb)+_0x440fe5[_0x3529a5(0x189)]);return await _0x440fe5[_0x3529a5(0x126)]();}function errorAPICheckLogin(_0xdb9d86){var _0x5330af=a0_0x4353e5;console['log'](_0x5330af(0xf1)),validateLogin(function(_0x4fb4cb){var _0x3aa7e4=_0x5330af;_0x4fb4cb?(console[_0x3aa7e4(0x15f)](_0x3aa7e4(0x141)),_0xdb9d86(!![])):(console[_0x3aa7e4(0x15f)]('errorAPICheckLogin\x20-\x20login\x20not\x20validated'),window[_0x3aa7e4(0x1a1)][_0x3aa7e4(0x134)]='/');});}function validateLogin(_0x19ed6d){var _0x13b459=a0_0x4353e5;if(!localStorage[_0x13b459(0xff)](_0x13b459(0xcf))||!localStorage[_0x13b459(0xff)](_0x13b459(0xe9))||!localStorage['getItem'](_0x13b459(0x104))){console['error'](_0x13b459(0x14b)),_0x19ed6d(![]);return;}const _0x35819f=_0x13b459(0xe2),_0x4084d9=_0x13b459(0x12b),_0x142f5d={'xoken':localStorage[_0x13b459(0xff)](_0x13b459(0x185)),'userId':localStorage[_0x13b459(0xff)](_0x13b459(0xe7)),'userType':localStorage[_0x13b459(0xff)](_0x13b459(0x104))};makeApiRequest(_0x35819f,_0x4084d9,_0x142f5d,function(_0x1ba367){var _0x145ab3=_0x13b459;Object[_0x145ab3(0x143)](_0x1ba367[_0x145ab3(0x13d)])[_0x145ab3(0x102)](function(_0x28b57d){localStorage['setItem'](_0x28b57d,_0x1ba367['payload'][_0x28b57d]);}),_0x19ed6d(!![]);},function(_0x5de2a0){var _0x342c0b=_0x13b459;console['error'](_0x342c0b(0x12d),_0x5de2a0),_0x19ed6d(![]);});}function checkInParticipant(_0x1a199b,_0x17a90a,_0x4f07b5){var _0x4c4576=a0_0x4353e5;const _0x35e510='https://crossfit168.clubfit.net.au/api/v1/booking/book-class-participant-checkin';console['log']('checkInParticipant:\x20'+_0x1a199b+'\x20'+_0x17a90a);const _0x3856c5={'memberNumber':localStorage[_0x4c4576(0xff)](_0x4c4576(0xe9)),'classScheduleId':_0x1a199b,'classDateTime':_0x17a90a};function _0x4179cb(_0x13095d){var _0x25444f=_0x4c4576;if(_0x13095d[_0x25444f(0x13d)]===_0x25444f(0xee)){console[_0x25444f(0x15f)](_0x25444f(0x115));const _0x337c9f=_0x4f07b5[_0x25444f(0x13f)];_0x337c9f[_0x25444f(0xdf)]='';const _0x321bf9=document[_0x25444f(0x13e)](_0x25444f(0x170));_0x321bf9[_0x25444f(0xe5)]=_0x25444f(0xd1),_0x337c9f['appendChild'](_0x321bf9);}else console['error']('Check-in\x20failed:',_0x13095d['errors']);}makeApiRequest(_0x35e510,'POST',_0x3856c5,_0x4179cb);}