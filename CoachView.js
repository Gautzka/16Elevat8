const a0_0x23f5e9=a0_0xed77;(function(_0x4ba05b,_0x424e80){const _0x46737a=a0_0xed77,_0x2c9162=_0x4ba05b();while(!![]){try{const _0x886ac0=parseInt(_0x46737a(0x238))/0x1*(-parseInt(_0x46737a(0x1e9))/0x2)+-parseInt(_0x46737a(0x1f7))/0x3*(-parseInt(_0x46737a(0x1e3))/0x4)+-parseInt(_0x46737a(0x1c4))/0x5*(parseInt(_0x46737a(0x1db))/0x6)+parseInt(_0x46737a(0x1ce))/0x7+-parseInt(_0x46737a(0x1fe))/0x8+parseInt(_0x46737a(0x1ba))/0x9*(-parseInt(_0x46737a(0x22e))/0xa)+-parseInt(_0x46737a(0x1c0))/0xb*(-parseInt(_0x46737a(0x1e6))/0xc);if(_0x886ac0===_0x424e80)break;else _0x2c9162['push'](_0x2c9162['shift']());}catch(_0x3e8894){_0x2c9162['push'](_0x2c9162['shift']());}}}(a0_0x4bf1,0xdacd9),document['addEventListener'](a0_0x23f5e9(0x227),()=>{initializePage(),setupEventListeners(),initializeSidebar();}));function initializeSidebar(){const _0x36b05c=a0_0x23f5e9,_0x5ac562=document[_0x36b05c(0x22c)](_0x36b05c(0x1cc)),_0x8cb5a4=document[_0x36b05c(0x22c)](_0x36b05c(0x21d)),_0x154140=document[_0x36b05c(0x22c)](_0x36b05c(0x232));_0x5ac562[_0x36b05c(0x228)][_0x36b05c(0x1bd)]=_0x36b05c(0x1ab),_0x8cb5a4[_0x36b05c(0x1ad)](_0x36b05c(0x20b),()=>toggleSidebar(_0x5ac562,_0x154140));}function toggleSidebar(_0xeb6561,_0x48d687){const _0x4b3b22=a0_0x23f5e9;_0xeb6561['dataset'][_0x4b3b22(0x1bd)]===_0x4b3b22(0x1ab)?(_0xeb6561[_0x4b3b22(0x237)][_0x4b3b22(0x1b1)]=_0x4b3b22(0x1d2),_0x48d687['style']['marginLeft']='0',_0xeb6561[_0x4b3b22(0x228)][_0x4b3b22(0x1bd)]=_0x4b3b22(0x1b0)):(_0xeb6561[_0x4b3b22(0x237)][_0x4b3b22(0x1b1)]='',_0x48d687[_0x4b3b22(0x237)]['marginLeft']=_0x4b3b22(0x22d),_0xeb6561[_0x4b3b22(0x228)][_0x4b3b22(0x1bd)]=_0x4b3b22(0x1ab));}async function initializePage(){initDatePicker(),await fetchAndDisplayClassesAvailable(),fetchAndDisplayAttendees();}function setupEventListeners(){const _0x608180=a0_0x23f5e9,_0x14493f=document[_0x608180(0x1fd)](_0x608180(0x23e)),_0x2d3d4e=document[_0x608180(0x1fd)](_0x608180(0x21e)),_0x31759b=document[_0x608180(0x1fd)](_0x608180(0x1b9)),_0x1111fa=document[_0x608180(0x1fd)]('location-chosen'),_0x89438=document[_0x608180(0x1fd)](_0x608180(0x236)),_0x175e0a=document[_0x608180(0x1fd)]('refresh-attendees');_0x2d3d4e['addEventListener'](_0x608180(0x20b),handlePrevDayClick),_0x31759b['addEventListener'](_0x608180(0x20b),handleNextDayClick),_0x14493f['addEventListener'](_0x608180(0x1af),handleDateChange),_0x1111fa[_0x608180(0x1ad)]('change',handleLocationChange),_0x89438[_0x608180(0x1ad)](_0x608180(0x1af),handleClassChange),_0x175e0a&&_0x175e0a[_0x608180(0x1ad)](_0x608180(0x20b),handleRefreshButtonClick),document[_0x608180(0x1ad)](_0x608180(0x20b),handleButtonClicks);}async function handlePrevDayClick(){const _0x2815ac=a0_0x23f5e9;adjustOneDayDate(-0x1);const _0x3791bb=document['getElementById'](_0x2815ac(0x23e))[_0x2815ac(0x1dd)];saveDatePickerSessionStorage(_0x3791bb),await fetchAndDisplayClassesAvailable(),fetchAndDisplayAttendees();}async function handleNextDayClick(){const _0x5975ef=a0_0x23f5e9;adjustOneDayDate(0x1);const _0x13f040=document['getElementById'](_0x5975ef(0x23e))['value'];saveDatePickerSessionStorage(_0x13f040),await fetchAndDisplayClassesAvailable(),fetchAndDisplayAttendees();}function a0_0xed77(_0x361d22,_0x23e427){const _0x4bf194=a0_0x4bf1();return a0_0xed77=function(_0xed77a8,_0x146b38){_0xed77a8=_0xed77a8-0x1aa;let _0x2ddbd4=_0x4bf194[_0xed77a8];return _0x2ddbd4;},a0_0xed77(_0x361d22,_0x23e427);}async function handleDateChange(){const _0x53307b=a0_0x23f5e9,_0x58db83=document[_0x53307b(0x1fd)](_0x53307b(0x23e))['value'];saveDatePickerSessionStorage(_0x58db83),await fetchAndDisplayClassesAvailable(),fetchAndDisplayAttendees();}async function handleLocationChange(){await fetchAndDisplayClassesAvailable(),fetchAndDisplayAttendees();}function handleClassChange(){fetchAndDisplayAttendees();}function handleRefreshButtonClick(){fetchAndDisplayAttendees();}function handleButtonClicks(_0x3b1433){const _0x448e64=a0_0x23f5e9;if(_0x3b1433[_0x448e64(0x218)][_0x448e64(0x225)][_0x448e64(0x1d1)](_0x448e64(0x20d))){_0x3b1433[_0x448e64(0x1bc)]();const _0x247c3e=_0x3b1433['target'],_0x46b451=_0x247c3e[_0x448e64(0x228)][_0x448e64(0x205)],_0xe70778=_0x247c3e[_0x448e64(0x228)][_0x448e64(0x1ff)],_0x15a99b=_0x247c3e['dataset']['classDateTime'];checkInParticipant(_0x46b451,_0xe70778,_0x15a99b,_0x247c3e);}else{if(_0x3b1433[_0x448e64(0x218)][_0x448e64(0x225)][_0x448e64(0x1d1)](_0x448e64(0x215))){_0x3b1433['preventDefault']();const _0x2a812c=_0x3b1433[_0x448e64(0x218)],_0xd5a10f=_0x2a812c[_0x448e64(0x228)][_0x448e64(0x210)];cancelBooking_resolve(_0xd5a10f)[_0x448e64(0x209)](_0x3d5263=>{const _0x3404dd=_0x448e64,_0x14c0a4=_0x2a812c[_0x3404dd(0x1d3)];_0x14c0a4['innerHTML']='';const _0x42565c=document[_0x3404dd(0x1f9)](_0x3404dd(0x21a));_0x42565c['textContent']=_0x3404dd(0x20c),_0x14c0a4[_0x3404dd(0x207)](_0x42565c);})[_0x448e64(0x239)](_0x2ae922=>{const _0x3c8c86=_0x448e64;console[_0x3c8c86(0x1be)](_0x3c8c86(0x1f4),_0x2ae922);});}}}function fetchAndDisplayAttendees(){const _0x2e3308=a0_0x23f5e9,_0x30deaf=document[_0x2e3308(0x1fd)](_0x2e3308(0x236)),_0x5b4d1b=document[_0x2e3308(0x1fd)]('datePicker'),_0x346fd6=_0x30deaf['options'][_0x30deaf[_0x2e3308(0x1dc)]],_0x4e5245=_0x346fd6[_0x2e3308(0x1dd)],_0x50db8b=_0x346fd6['textContent'][_0x2e3308(0x1ed)]('\x20'),_0x3590fa=_0x50db8b[0x0],_0x517266=_0x50db8b[_0x2e3308(0x23b)](0x1)[_0x2e3308(0x203)]('\x20'),_0x248a4e=_0x5b4d1b[_0x2e3308(0x1dd)],_0x5bf496=document['getElementById'](_0x2e3308(0x1b7)),_0x3afd27=_0x5bf496[_0x2e3308(0x213)][_0x5bf496[_0x2e3308(0x1dc)]][_0x2e3308(0x1ae)];if(_0x346fd6[_0x2e3308(0x208)]===_0x2e3308(0x22f)){const _0x23c600=document[_0x2e3308(0x22c)](_0x2e3308(0x21b));_0x23c600[_0x2e3308(0x1cd)]='';const _0x1e127d=document[_0x2e3308(0x1fd)](_0x2e3308(0x1cf));_0x1e127d['textContent']=_0x346fd6['textContent'];}else checkAttendees(_0x4e5245,_0x248a4e,_0x517266),updateTitle(_0x3590fa,_0x517266,_0x248a4e,_0x3afd27);}function initDatePicker(){const _0x318201=a0_0x23f5e9,_0x12b5d9=document['getElementById'](_0x318201(0x23e));let _0x451d6a=sessionStorage[_0x318201(0x20e)](_0x318201(0x204)),_0x944ffd=sessionStorage[_0x318201(0x20e)](_0x318201(0x200));if(_0x451d6a&&_0x944ffd&&isWithinValidityPeriod(_0x944ffd,0.5))_0x12b5d9[_0x318201(0x1dd)]=_0x451d6a;else{const _0x2eaa64=getLocalDate();_0x12b5d9[_0x318201(0x1dd)]=_0x2eaa64,saveDatePickerSessionStorage(_0x2eaa64);}}function saveDatePickerSessionStorage(_0xa17d6c){const _0x7c04b0=a0_0x23f5e9;sessionStorage[_0x7c04b0(0x1f5)](_0x7c04b0(0x204),_0xa17d6c);const _0x5b70d4=new Date()[_0x7c04b0(0x22a)]();sessionStorage['setItem'](_0x7c04b0(0x200),_0x5b70d4);}function adjustOneDayDate(_0x121b59){const _0x1fef80=a0_0x23f5e9,_0x46216c=document['getElementById'](_0x1fef80(0x23e)),_0x26609a=new Date(_0x46216c[_0x1fef80(0x1dd)]+_0x1fef80(0x1d0));_0x26609a['setDate'](_0x26609a[_0x1fef80(0x1d4)]()+_0x121b59),_0x46216c[_0x1fef80(0x1dd)]=formatDate(_0x26609a);}function isWithinValidityPeriod(_0x13537e,_0x5a5ad5){const _0x2670b4=new Date()['getTime'](),_0x466b5d=(_0x2670b4-_0x13537e)/(0x3e8*0x3c*0x3c);return _0x466b5d<=_0x5a5ad5;}function formatDate(_0x292ab0){const _0x122b42=a0_0x23f5e9;let _0x18829c=new Date(_0x292ab0),_0x3fae6b=''+(_0x18829c[_0x122b42(0x222)]()+0x1),_0x333d48=''+_0x18829c[_0x122b42(0x1d4)](),_0x40becc=_0x18829c[_0x122b42(0x201)]();if(_0x3fae6b['length']<0x2)_0x3fae6b='0'+_0x3fae6b;if(_0x333d48['length']<0x2)_0x333d48='0'+_0x333d48;return[_0x40becc,_0x3fae6b,_0x333d48][_0x122b42(0x203)]('-');}async function fetchAndDisplayClassesAvailable(){const _0x4dff8b=a0_0x23f5e9,_0x372a27=document[_0x4dff8b(0x1fd)]('location-chosen'),_0x1d890d=document[_0x4dff8b(0x1fd)]('datePicker'),_0x5a034c=document[_0x4dff8b(0x1fd)](_0x4dff8b(0x236));if(!_0x372a27||!_0x1d890d||!_0x5a034c){console['error']('Required\x20elements\x20not\x20found\x20in\x20the\x20DOM.');return;}const _0x2f4899=_0x372a27[_0x4dff8b(0x1dd)],_0x18fbe9=_0x1d890d['value'];if(!_0x2f4899){console[_0x4dff8b(0x1ea)](_0x4dff8b(0x1e2));return;}const _0x99eb7a={'ALX':0x2,'CBD':0x1,'MVL':0x4},_0x2491fd=_0x99eb7a[_0x2f4899],_0x17c1bb=localStorage[_0x4dff8b(0x20e)](_0x4dff8b(0x205));if(!_0x17c1bb||!_0x2491fd){console[_0x4dff8b(0x1be)](_0x4dff8b(0x1e1));return;}const _0x3bdfde={'UserId':_0x17c1bb,'clubId':_0x2491fd,'selectedDate':_0x18fbe9,'classType':0x0,'accountId':_0x2491fd},_0x1ab172=getLocalDate();if(_0x18fbe9<_0x1ab172)displayClassAvailable([]);else{const _0x5ce081=_0x4dff8b(0x1df);try{const _0x1eefdc=await makeApiRequest(_0x5ce081,_0x4dff8b(0x1c2),_0x3bdfde);displayClassAvailable(_0x1eefdc['payload']);}catch(_0x3be2c1){console[_0x4dff8b(0x1be)](_0x4dff8b(0x23c),_0x3be2c1);}}}async function makeApiRequest(_0xb04025,_0x5b4ebe,_0x4539ae){const _0x5291b3=a0_0x23f5e9,_0x1919b0=localStorage['getItem']('access_token'),_0x1f9aa8={'Content-Type':_0x5291b3(0x229),'Accept':'application/json','Authorization':_0x5291b3(0x211)+_0x1919b0},_0x2bb5b0={'method':_0x5b4ebe,'headers':_0x1f9aa8,'body':JSON[_0x5291b3(0x226)](_0x4539ae)},_0x28f17a=await fetch(_0xb04025,_0x2bb5b0);if(!_0x28f17a['ok'])throw new Error(_0x5291b3(0x1b3)+_0x28f17a[_0x5291b3(0x1c6)]);return await _0x28f17a[_0x5291b3(0x1f0)]();}function displayClassAvailable(_0x496b0f){const _0x2965e2=a0_0x23f5e9,_0x5bac0e=document[_0x2965e2(0x1fd)]('class-chosen');_0x5bac0e[_0x2965e2(0x1cd)]='';if(_0x496b0f[_0x2965e2(0x1d5)]===0x0){const _0x46e51e=document[_0x2965e2(0x1f9)](_0x2965e2(0x1b6));_0x46e51e[_0x2965e2(0x1dd)]='',_0x46e51e['textContent']=_0x2965e2(0x22f),_0x5bac0e[_0x2965e2(0x207)](_0x46e51e);return;}_0x496b0f[_0x2965e2(0x23d)](_0xab0551=>{const _0x5f31a6=_0x2965e2,_0x55fe7a=document['createElement'](_0x5f31a6(0x1b6));_0x55fe7a[_0x5f31a6(0x1dd)]=_0xab0551[_0x5f31a6(0x1ff)],_0x55fe7a[_0x5f31a6(0x208)]=_0xab0551[_0x5f31a6(0x1e4)]+'\x20'+_0xab0551[_0x5f31a6(0x212)],_0x5bac0e[_0x5f31a6(0x207)](_0x55fe7a);});}function updateTitle(_0x1f2963,_0x5836ba,_0x2621ec,_0x146f45){const _0x53d0d5=a0_0x23f5e9,_0x124725=document[_0x53d0d5(0x1fd)](_0x53d0d5(0x1cf)),_0x558b56=new Date(_0x2621ec),_0x6ece=_0x558b56[_0x53d0d5(0x1ca)](_0x53d0d5(0x1fb),{'weekday':'long'}),_0x1110bc=_0x6ece+'\x20'+_0x558b56[_0x53d0d5(0x1d4)]()+'/'+(_0x558b56[_0x53d0d5(0x222)]()+0x1),_0x43f360=_0x1f2963+'\x20'+_0x5836ba+'\x20-\x20'+_0x1110bc+_0x53d0d5(0x231)+_0x146f45;_0x124725[_0x53d0d5(0x208)]=_0x43f360;}async function checkAttendees(_0x4dc223,_0x809a20,_0x3ac04){const _0x17093c=a0_0x23f5e9,_0x201565=_0x17093c(0x224),_0x320bf6={'classScheduleId':_0x4dc223,'selectedDate':_0x809a20,'classTime':_0x3ac04},_0x422c1b=localStorage['getItem']('access_token'),_0x302182={'Content-Type':_0x17093c(0x229),'Accept':_0x17093c(0x229),'Authorization':_0x17093c(0x211)+_0x422c1b};try{const _0x15fea5=await fetch(_0x201565,{'method':'POST','headers':_0x302182,'body':JSON[_0x17093c(0x226)](_0x320bf6)});if(!_0x15fea5['ok'])throw new Error('HTTP\x20error!\x20status:\x20'+_0x15fea5['status']);const _0x1d0c11=await _0x15fea5[_0x17093c(0x1f0)](),_0x2f3b2e=_0x1d0c11[_0x17093c(0x230)];showAttendees(_0x2f3b2e);}catch(_0x31fcb3){console[_0x17093c(0x1be)](_0x17093c(0x1d7),_0x31fcb3),errorAPICheckLogin();}}function showAttendees(_0x13a891){const _0x313d0d=a0_0x23f5e9,_0x3dc5c6=document[_0x313d0d(0x22c)](_0x313d0d(0x21b));_0x3dc5c6['innerHTML']='',_0x13a891[_0x313d0d(0x23d)](_0x32c46d=>{const _0x2ae40b=_0x313d0d,_0x4ff9e3=document[_0x2ae40b(0x1f9)]('div');_0x4ff9e3[_0x2ae40b(0x225)][_0x2ae40b(0x1c3)](_0x2ae40b(0x214));const _0x50b478=document[_0x2ae40b(0x1f9)](_0x2ae40b(0x22b));_0x50b478[_0x2ae40b(0x23a)]=_0x32c46d['memberPhotoLocation']||_0x2ae40b(0x221),_0x50b478[_0x2ae40b(0x1b4)]=_0x32c46d[_0x2ae40b(0x1e7)],_0x50b478[_0x2ae40b(0x225)][_0x2ae40b(0x1c3)](_0x2ae40b(0x234));const _0x3cb709=document['createElement'](_0x2ae40b(0x21a));_0x3cb709[_0x2ae40b(0x225)][_0x2ae40b(0x1c3)](_0x2ae40b(0x1f8)),_0x3cb709[_0x2ae40b(0x208)]=_0x32c46d[_0x2ae40b(0x1e7)];const _0x536bfb=document[_0x2ae40b(0x1f9)](_0x2ae40b(0x21a));_0x536bfb[_0x2ae40b(0x225)]['add']('buttons-checkin-noshow');if(_0x32c46d[_0x2ae40b(0x1f6)]){const _0x118bb9=document[_0x2ae40b(0x1f9)](_0x2ae40b(0x21a));_0x118bb9[_0x2ae40b(0x208)]=_0x2ae40b(0x235),_0x536bfb['appendChild'](_0x118bb9);}else{const _0x6faee3=document[_0x2ae40b(0x1f9)]('a');_0x6faee3['href']='#',_0x6faee3[_0x2ae40b(0x225)]['add'](_0x2ae40b(0x20d),_0x2ae40b(0x21c)),_0x6faee3[_0x2ae40b(0x208)]=_0x2ae40b(0x1b2),_0x6faee3[_0x2ae40b(0x228)][_0x2ae40b(0x205)]=_0x32c46d['number'],_0x6faee3[_0x2ae40b(0x228)][_0x2ae40b(0x1e4)]=_0x32c46d[_0x2ae40b(0x1b5)][_0x2ae40b(0x1ec)][_0x2ae40b(0x1e4)],_0x6faee3[_0x2ae40b(0x228)]['classTime']=_0x32c46d[_0x2ae40b(0x1b5)][_0x2ae40b(0x212)],_0x6faee3['dataset'][_0x2ae40b(0x1ff)]=_0x32c46d[_0x2ae40b(0x1b5)]['classScheduleId'],_0x6faee3[_0x2ae40b(0x228)][_0x2ae40b(0x1bb)]=_0x32c46d['classDateTime'];const _0x8edd3f=document[_0x2ae40b(0x1f9)]('a');_0x8edd3f[_0x2ae40b(0x1eb)]='#',_0x8edd3f[_0x2ae40b(0x225)][_0x2ae40b(0x1c3)](_0x2ae40b(0x215),_0x2ae40b(0x21c)),_0x8edd3f[_0x2ae40b(0x208)]=_0x2ae40b(0x20c),_0x8edd3f[_0x2ae40b(0x228)][_0x2ae40b(0x205)]=_0x32c46d[_0x2ae40b(0x1ac)],_0x8edd3f['dataset'][_0x2ae40b(0x1e4)]=_0x32c46d['classSchedule'][_0x2ae40b(0x1ec)][_0x2ae40b(0x1e4)],_0x8edd3f[_0x2ae40b(0x228)][_0x2ae40b(0x212)]=_0x32c46d[_0x2ae40b(0x1b5)][_0x2ae40b(0x212)],_0x8edd3f[_0x2ae40b(0x228)][_0x2ae40b(0x1ff)]=_0x32c46d['classSchedule'][_0x2ae40b(0x1ff)],_0x8edd3f[_0x2ae40b(0x228)]['memberBookingId']=_0x32c46d['id'],_0x536bfb['appendChild'](_0x6faee3),_0x536bfb[_0x2ae40b(0x207)](_0x8edd3f);}_0x4ff9e3[_0x2ae40b(0x207)](_0x50b478),_0x4ff9e3['appendChild'](_0x3cb709),_0x4ff9e3[_0x2ae40b(0x207)](_0x536bfb),_0x3dc5c6['appendChild'](_0x4ff9e3);});}async function checkInParticipant(_0x55efc7,_0x260083,_0x1246ff,_0x195043){const _0x2d27ca=a0_0x23f5e9,_0x9e9e57=_0x2d27ca(0x220),_0x580090={'memberNumber':_0x55efc7,'classScheduleId':_0x260083,'classDateTime':_0x1246ff},_0x5ce0ac=localStorage[_0x2d27ca(0x20e)](_0x2d27ca(0x20f)),_0x5f562d={'Accept':_0x2d27ca(0x229),'Accept-Language':_0x2d27ca(0x1c8),'Accept-Encoding':_0x2d27ca(0x1da),'Authorization':_0x2d27ca(0x211)+_0x5ce0ac,'Content-Type':_0x2d27ca(0x229),'Origin':_0x2d27ca(0x23f),'Connection':_0x2d27ca(0x1e0),'Referer':_0x2d27ca(0x1bf),'Sec-Fetch-Dest':_0x2d27ca(0x223),'Sec-Fetch-Mode':_0x2d27ca(0x21f),'Sec-Fetch-Site':_0x2d27ca(0x216),'Priority':'u=1','TE':'trailers'};try{const _0x232551=await fetch(_0x9e9e57,{'method':_0x2d27ca(0x1c2),'headers':_0x5f562d,'body':JSON[_0x2d27ca(0x226)](_0x580090)});if(!_0x232551['ok'])throw new Error(_0x2d27ca(0x1b3)+_0x232551[_0x2d27ca(0x1c6)]);const _0x220db4=await _0x232551[_0x2d27ca(0x1f0)]();if(_0x220db4['payload']===_0x2d27ca(0x240)){const _0x51c9ca=_0x195043[_0x2d27ca(0x1d3)];_0x51c9ca[_0x2d27ca(0x1cd)]='';const _0x24f94c=document['createElement'](_0x2d27ca(0x21a));_0x24f94c['textContent']=_0x2d27ca(0x235),_0x51c9ca[_0x2d27ca(0x207)](_0x24f94c);}else console[_0x2d27ca(0x1be)](_0x2d27ca(0x1c5),_0x220db4[_0x2d27ca(0x1fc)]);}catch(_0x2faa7d){console[_0x2d27ca(0x1be)]('Error\x20during\x20API\x20call:',_0x2faa7d);}}function cancelBooking_resolve(_0x6cf438,_0xd20a19=0x0){return new Promise((_0x38615a,_0x568ce5)=>{const _0x3ae8a8=a0_0xed77;var _0x59fef5=localStorage[_0x3ae8a8(0x20e)](_0x3ae8a8(0x20f)),_0x1acee5='https://crossfit168.clubfit.net.au/api/v1/booking/cancel/'+_0x6cf438,_0x237de5=new XMLHttpRequest();_0x237de5[_0x3ae8a8(0x1c9)](_0x3ae8a8(0x1c2),_0x1acee5,!![]),_0x237de5[_0x3ae8a8(0x20a)](_0x3ae8a8(0x1f3),_0x3ae8a8(0x229)),_0x237de5[_0x3ae8a8(0x20a)]('Accept',_0x3ae8a8(0x229)),_0x237de5[_0x3ae8a8(0x20a)](_0x3ae8a8(0x217),_0x3ae8a8(0x211)+_0x59fef5),_0x237de5['onload']=function(){const _0x483c63=_0x3ae8a8,_0x2689ca=JSON['parse'](_0x237de5[_0x483c63(0x1d6)]);_0x237de5[_0x483c63(0x1c6)]>=0xc8&&_0x237de5[_0x483c63(0x1c6)]<0x12c?(_0x2689ca[_0x483c63(0x1aa)]!==0xc8&&console[_0x483c63(0x1ea)](_0x483c63(0x206),_0x237de5['responseText']),_0x38615a(_0x237de5[_0x483c63(0x1d6)])):(console[_0x483c63(0x1be)](_0x483c63(0x1ef),_0x237de5[_0x483c63(0x1c6)]),console['error'](_0x483c63(0x1d8),_0x237de5[_0x483c63(0x1d6)]),_0xd20a19<0x1?errorAPICheckLogin(function(_0x265192){const _0xd534e=_0x483c63;_0x265192?cancelBooking_resolve(_0x6cf438,_0xd20a19+0x1)[_0xd534e(0x209)](_0x38615a)[_0xd534e(0x239)](_0x568ce5):_0x568ce5(new Error(_0xd534e(0x1e5)));}):_0x568ce5(new Error(_0x483c63(0x233))));},_0x237de5[_0x3ae8a8(0x1f1)]=function(){const _0x4e3765=_0x3ae8a8;console[_0x4e3765(0x1be)](_0x4e3765(0x1fa)),_0xd20a19<0x1?errorAPICheckLogin(function(_0x3bbcbd){const _0x44a201=_0x4e3765;_0x3bbcbd?cancelBooking_resolve(_0x6cf438,_0xd20a19+0x1)['then'](_0x38615a)['catch'](_0x568ce5):_0x568ce5(new Error(_0x44a201(0x1cb)));}):_0x568ce5(new Error(_0x4e3765(0x219)));},_0x237de5[_0x3ae8a8(0x1c1)]();});}function errorAPICheckLogin(_0x4858e9){const _0x1c5442=a0_0x23f5e9;console[_0x1c5442(0x1ea)](_0x1c5442(0x1e8)),validateLogin(function(_0x3f871a){const _0x5a5924=_0x1c5442;_0x3f871a?(console[_0x5a5924(0x1ea)](_0x5a5924(0x202)),_0x4858e9(!![])):(console[_0x5a5924(0x1ea)]('errorAPICheckLogin\x20-\x20login\x20not\x20validated'),window[_0x5a5924(0x1f2)][_0x5a5924(0x1eb)]='/');});}function validateLogin(_0x1306a5){const _0x2fb073=a0_0x23f5e9;if(!localStorage[_0x2fb073(0x20e)]('access_token')||!localStorage['getItem'](_0x2fb073(0x205))||!localStorage[_0x2fb073(0x20e)]('userType')){console[_0x2fb073(0x1be)](_0x2fb073(0x1c7)),_0x1306a5(![]);return;}const _0x56fa02=_0x2fb073(0x1de),_0x3fd329=_0x2fb073(0x1c2),_0x3138c6={'xoken':localStorage[_0x2fb073(0x20e)]('refresh_token'),'userId':localStorage[_0x2fb073(0x20e)](_0x2fb073(0x1b8)),'userType':localStorage[_0x2fb073(0x20e)]('userType')};makeApiRequest(_0x56fa02,_0x3fd329,_0x3138c6,function(_0x39e4c1){const _0x5a25d0=_0x2fb073;Object[_0x5a25d0(0x1d9)](_0x39e4c1[_0x5a25d0(0x230)])['forEach'](function(_0x1a0034){const _0x697d4=_0x5a25d0;localStorage[_0x697d4(0x1f5)](_0x1a0034,_0x39e4c1['payload'][_0x1a0034]);}),_0x1306a5(!![]);},function(_0x3768d2){const _0x373a92=_0x2fb073;console[_0x373a92(0x1be)]('validateLogin\x20-\x20Validation\x20failed:',_0x3768d2),_0x1306a5(![]);});}function getLocalDate(){const _0x412f21=a0_0x23f5e9,_0x11e3c4=new Date(),_0x2a6c8d=_0x11e3c4['getTimezoneOffset']()*0xea60,_0xc5f060=new Date(_0x11e3c4-_0x2a6c8d)[_0x412f21(0x1ee)]()['slice'](0x0,0xa);return _0xc5f060;}function a0_0x4bf1(){const _0x3876b7=['number','addEventListener','text','change','false','transform','Check-in','HTTP\x20error!\x20status:\x20','alt','classSchedule','option','location-chosen','portalUserId','nextDay','9xLmqmp','classDateTime','preventDefault','visible','error','https://myaccount.clubfit.net.au/','59884qwMOkI','send','POST','add','54275wGxDAU','Check-in\x20failed:','status','validateLogin\x20-\x20Required\x20session\x20storage\x20items\x20are\x20missing','en-US,en;q=0.5','open','toLocaleDateString','cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20network\x20error\x20and\x20retry','.sidebar','innerHTML','4869284aqtZCx','title-coachview','T00:00:00','contains','translateX(-100%)','parentElement','getDate','length','responseText','checkAttendees\x20-\x20Error\x20while\x20checking\x20attendees:','Error\x20details:','keys','gzip,\x20deflate,\x20br,\x20zstd','432iJUBHX','selectedIndex','value','https://admin.clubfit.net.au/api/v1/account/validate','https://crossfit168.clubfit.net.au/api/v1/booking/search-classes','keep-alive','Required\x20information\x20is\x20missing\x20from\x20local\x20storage\x20or\x20location\x20ID\x20map.','No\x20location\x20selected.','2746748yHGNZG','className','cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20retry','7848EwtWkY','fullName','errorAPICheckLogin\x20-\x20function\x20called','1125326prcQAb','log','href','class','split','toISOString','Error\x20while\x20cancelling\x20booking,\x20xhr.status:\x20','json','onerror','location','Content-Type','Error\x20during\x20No\x20Show\x20API\x20call:','setItem','hasAttended','6tmeCXd','name-attendee','createElement','cancelBooking_resolve\x20-\x20Network\x20error\x20while\x20cancelling\x20booking','en-AU','errors','getElementById','13887928ckmnXC','classScheduleId','timestampLastChanged','getFullYear','errorAPICheckLogin\x20-\x20login\x20validated','join','selectedDate','userId','Response\x20received:','appendChild','textContent','then','setRequestHeader','click','No\x20Show','checkin-button','getItem','access_token','memberBookingId','Bearer\x20','classTime','options','attendee-class','noshow-button','same-site','Authorization','target','cancelBooking_resolve\x20-\x20Network\x20error','div','.class-attendees','w-button','.toggle-button','prevDay','cors','https://crossfit168.clubfit.net.au/api/v1/booking/book-class-participant-checkin','https://clubfitassets.s3.ap-southeast-2.amazonaws.com/common/avatar_default.png','getMonth','empty','https://crossfit168.clubfit.net.au/api/v1/booking/class-participants','classList','stringify','DOMContentLoaded','dataset','application/json','getTime','img','querySelector','15rem','5276050fGmzvS','No\x20class\x20found','payload','\x20-\x20','.outside-sidebar','cancelBooking_resolve\x20-\x20Cancellation\x20failed','attendee-picture','Confirmed','class-chosen','style','3GZAfEE','catch','src','slice','Error\x20fetching\x20classes:','forEach','datePicker','https://myaccount.clubfit.net.au','success','statusCode','true'];a0_0x4bf1=function(){return _0x3876b7;};return a0_0x4bf1();}