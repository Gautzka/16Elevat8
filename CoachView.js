const a0_0x33a51e=a0_0xe049;(function(_0x3598eb,_0x2ccd6d){const _0x11ff18=a0_0xe049,_0x494b36=_0x3598eb();while(!![]){try{const _0x47c81e=parseInt(_0x11ff18(0xf0))/0x1*(parseInt(_0x11ff18(0x155))/0x2)+-parseInt(_0x11ff18(0x10a))/0x3+-parseInt(_0x11ff18(0x10f))/0x4+-parseInt(_0x11ff18(0x167))/0x5*(parseInt(_0x11ff18(0x12e))/0x6)+parseInt(_0x11ff18(0x123))/0x7+-parseInt(_0x11ff18(0xec))/0x8+parseInt(_0x11ff18(0xe2))/0x9;if(_0x47c81e===_0x2ccd6d)break;else _0x494b36['push'](_0x494b36['shift']());}catch(_0x26c0b5){_0x494b36['push'](_0x494b36['shift']());}}}(a0_0x27f1,0xc1477),document[a0_0x33a51e(0xe1)](a0_0x33a51e(0x144),()=>{initializePage(),setupEventListeners(),initializeSidebar();}));function initializeSidebar(){const _0x617c4b=a0_0x33a51e,_0x459fb8=document[_0x617c4b(0x102)]('.sidebar'),_0x27894f=document['querySelector']('.toggle-button'),_0xd09815=document[_0x617c4b(0x102)](_0x617c4b(0x14e));_0x459fb8[_0x617c4b(0x133)][_0x617c4b(0x14d)]=_0x617c4b(0xeb),_0x27894f['addEventListener']('click',()=>toggleSidebar(_0x459fb8,_0xd09815));}function toggleSidebar(_0x585cd2,_0x5a5c77){const _0x278aaa=a0_0x33a51e;_0x585cd2[_0x278aaa(0x133)]['visible']==='true'?(_0x585cd2[_0x278aaa(0x10e)]['transform']=_0x278aaa(0x127),_0x5a5c77[_0x278aaa(0x10e)]['marginLeft']='0',_0x585cd2[_0x278aaa(0x133)][_0x278aaa(0x14d)]=_0x278aaa(0x107)):(_0x585cd2['style']['transform']='',_0x5a5c77[_0x278aaa(0x10e)][_0x278aaa(0x140)]='15rem',_0x585cd2[_0x278aaa(0x133)]['visible']=_0x278aaa(0xeb));}async function initializePage(){initDatePicker(),await fetchAndDisplayClassesAvailable_API(!![]),fetchAndDisplayAttendees();}function setupEventListeners(){const _0x4da882=a0_0x33a51e,_0x5d1769=document[_0x4da882(0x138)](_0x4da882(0x104)),_0x35ff5a=document['getElementById'](_0x4da882(0xf2)),_0x1f1faa=document[_0x4da882(0x138)]('nextDay'),_0x26b8e1=document[_0x4da882(0x138)](_0x4da882(0xf1)),_0x17285f=document[_0x4da882(0x138)]('class-chosen'),_0x40da7b=document[_0x4da882(0x138)](_0x4da882(0x110));_0x35ff5a['addEventListener'](_0x4da882(0xfa),handlePrevDayClick),_0x1f1faa[_0x4da882(0xe1)](_0x4da882(0xfa),handleNextDayClick),_0x5d1769[_0x4da882(0xe1)](_0x4da882(0x11e),handleDateChange),_0x26b8e1[_0x4da882(0xe1)](_0x4da882(0x11e),handleLocationChange),_0x17285f['addEventListener'](_0x4da882(0x11e),handleClassChange),_0x40da7b&&_0x40da7b['addEventListener']('click',handleRefreshButtonClick),document['addEventListener'](_0x4da882(0xfa),handleButtonClicks);}async function handlePrevDayClick(){const _0x10516a=a0_0x33a51e;adjustOneDayDate(-0x1);const _0x5302bd=document[_0x10516a(0x138)](_0x10516a(0x104))[_0x10516a(0x11c)];saveDatePickerSessionStorage(_0x5302bd),await fetchAndDisplayClassesAvailable_Choose(),fetchAndDisplayAttendees();}async function handleNextDayClick(){const _0x41090f=a0_0x33a51e;adjustOneDayDate(0x1);const _0x4b0da6=document['getElementById'](_0x41090f(0x104))[_0x41090f(0x11c)];saveDatePickerSessionStorage(_0x4b0da6),await fetchAndDisplayClassesAvailable_Choose(),fetchAndDisplayAttendees();}async function handleDateChange(){const _0x5ee6ba=a0_0x33a51e,_0x550904=document[_0x5ee6ba(0x138)]('datePicker')['value'];saveDatePickerSessionStorage(_0x550904),await fetchAndDisplayClassesAvailable_Choose(),fetchAndDisplayAttendees();}async function handleLocationChange(){await fetchAndDisplayClassesAvailable_Choose(),fetchAndDisplayAttendees();}function handleClassChange(){fetchAndDisplayAttendees();}function handleRefreshButtonClick(){fetchAndDisplayAttendees();}function handleButtonClicks(_0x3a3428){const _0x8b782=a0_0x33a51e;if(_0x3a3428[_0x8b782(0x100)][_0x8b782(0x122)][_0x8b782(0x10b)](_0x8b782(0x151))){_0x3a3428[_0x8b782(0x137)]();const _0x418eaa=_0x3a3428['target'],_0x291ac9=_0x418eaa[_0x8b782(0x133)][_0x8b782(0x15c)],_0x4e0371=_0x418eaa['dataset'][_0x8b782(0x13b)],_0x4bdda1=_0x418eaa[_0x8b782(0x133)][_0x8b782(0xe9)];checkInParticipant(_0x291ac9,_0x4e0371,_0x4bdda1,_0x418eaa);}else{if(_0x3a3428[_0x8b782(0x100)][_0x8b782(0x122)][_0x8b782(0x10b)]('noshow-button')){_0x3a3428[_0x8b782(0x137)]();const _0x1bc4fe=_0x3a3428[_0x8b782(0x100)],_0x4d39c2=_0x1bc4fe[_0x8b782(0x133)]['memberBookingId'];cancelBooking_resolve(_0x4d39c2)[_0x8b782(0x11a)](_0x584cd9=>{const _0x34be49=_0x8b782,_0x2dd146=_0x1bc4fe[_0x34be49(0x11f)];_0x2dd146[_0x34be49(0xe3)]='';const _0x30017d=document[_0x34be49(0x173)]('div');_0x30017d['textContent']=_0x34be49(0x15e),_0x2dd146[_0x34be49(0x160)](_0x30017d);})[_0x8b782(0xe8)](_0x10b0b6=>{const _0x69daf4=_0x8b782;console[_0x69daf4(0x112)](_0x69daf4(0xf7),_0x10b0b6);});}}}function a0_0xe049(_0x4e3594,_0x3b8f1a){const _0x27f1c3=a0_0x27f1();return a0_0xe049=function(_0xe0496e,_0x111927){_0xe0496e=_0xe0496e-0xe1;let _0x26abce=_0x27f1c3[_0xe0496e];return _0x26abce;},a0_0xe049(_0x4e3594,_0x3b8f1a);}function fetchAndDisplayAttendees(){const _0x4ca80f=a0_0x33a51e,_0x2134ca=document[_0x4ca80f(0x138)](_0x4ca80f(0x16a)),_0x3f465e=document[_0x4ca80f(0x138)](_0x4ca80f(0x104)),_0x158470=_0x2134ca[_0x4ca80f(0x165)][_0x2134ca[_0x4ca80f(0x106)]],_0x506128=_0x158470[_0x4ca80f(0x11c)],_0x55352c=_0x158470['textContent'][_0x4ca80f(0x103)]('\x20'),_0x2ad5ad=_0x55352c[0x0],_0x136080=_0x55352c[_0x4ca80f(0x139)](0x1)['join']('\x20'),_0x2f7b3f=_0x3f465e[_0x4ca80f(0x11c)],_0x5ab03f=document[_0x4ca80f(0x138)]('location-chosen'),_0xb66794=_0x5ab03f[_0x4ca80f(0x165)][_0x5ab03f[_0x4ca80f(0x106)]][_0x4ca80f(0xef)];if(_0x158470[_0x4ca80f(0x136)]===_0x4ca80f(0x169)){const _0x502069=document[_0x4ca80f(0x102)](_0x4ca80f(0x12d));_0x502069[_0x4ca80f(0xe3)]='';const _0x5a0ccb=document['getElementById']('title-coachview');_0x5a0ccb['textContent']=_0x158470[_0x4ca80f(0x136)];}else checkAttendees(_0x506128,_0x2f7b3f,_0x136080),updateTitle(_0x2ad5ad,_0x136080,_0x2f7b3f,_0xb66794);}function initDatePicker(){const _0x5db17e=a0_0x33a51e,_0x21c260=document[_0x5db17e(0x138)](_0x5db17e(0x104));let _0x5f24b4=sessionStorage[_0x5db17e(0x12a)](_0x5db17e(0x15d)),_0x22c4e6=sessionStorage[_0x5db17e(0x12a)](_0x5db17e(0x14f));if(_0x5f24b4&&_0x22c4e6&&isWithinValidityPeriod(_0x22c4e6,0.5))_0x21c260[_0x5db17e(0x11c)]=_0x5f24b4;else{const _0x3b3e8b=getLocalDate();_0x21c260[_0x5db17e(0x11c)]=_0x3b3e8b,saveDatePickerSessionStorage(_0x3b3e8b);}}function saveDatePickerSessionStorage(_0x1ec504){const _0x293434=a0_0x33a51e;sessionStorage[_0x293434(0x147)](_0x293434(0x15d),_0x1ec504);const _0x40d553=new Date()['getTime']();sessionStorage['setItem'](_0x293434(0x14f),_0x40d553);}function adjustOneDayDate(_0x545272){const _0x8e737a=a0_0x33a51e,_0x13e032=document[_0x8e737a(0x138)](_0x8e737a(0x104)),_0x3d4910=new Date(_0x13e032['value']+_0x8e737a(0x150));_0x3d4910[_0x8e737a(0x16e)](_0x3d4910['getDate']()+_0x545272),_0x13e032[_0x8e737a(0x11c)]=formatDate(_0x3d4910);}function isWithinValidityPeriod(_0x2fcbbf,_0x249df9){const _0x13a9a7=a0_0x33a51e,_0x5721e7=new Date()[_0x13a9a7(0x118)](),_0x29c0c6=(_0x5721e7-_0x2fcbbf)/(0x3e8*0x3c*0x3c);return _0x29c0c6<=_0x249df9;}function formatDate(_0x284733){const _0x358b16=a0_0x33a51e;let _0x6a3c44=new Date(_0x284733),_0x354093=''+(_0x6a3c44[_0x358b16(0x153)]()+0x1),_0x3c7265=''+_0x6a3c44[_0x358b16(0x13f)](),_0x442d5f=_0x6a3c44[_0x358b16(0xee)]();if(_0x354093[_0x358b16(0x114)]<0x2)_0x354093='0'+_0x354093;if(_0x3c7265['length']<0x2)_0x3c7265='0'+_0x3c7265;return[_0x442d5f,_0x354093,_0x3c7265][_0x358b16(0x119)]('-');}async function fetchAndDisplayClassesAvailable_Choose(){const _0x4eda51=a0_0x33a51e,_0x1e633e=new Date(document['getElementById']('datePicker')['value']);_0x1e633e[_0x4eda51(0x143)](0x0,0x0,0x0,0x0);const _0x51a61d=new Date();_0x51a61d[_0x4eda51(0x143)](0x0,0x0,0x0,0x0),_0x1e633e[_0x4eda51(0x118)]()===_0x51a61d[_0x4eda51(0x118)]()?await fetchAndDisplayClassesAvailable_API(!![]):await fetchAndDisplayClassesAvailable_API(![]);}async function fetchAndDisplayClassesAvailable_API(_0x17440b){const _0x1532d0=a0_0x33a51e,_0x347f43=document[_0x1532d0(0x138)](_0x1532d0(0xf1)),_0x3d1318=document['getElementById'](_0x1532d0(0x104)),_0x49afeb=document[_0x1532d0(0x138)](_0x1532d0(0x16a));if(!_0x347f43||!_0x3d1318||!_0x49afeb){console[_0x1532d0(0x112)](_0x1532d0(0x101));return;}const _0x3d6169=_0x347f43[_0x1532d0(0x11c)],_0x25028a=_0x3d1318[_0x1532d0(0x11c)]['replace'](/-/g,'/');if(!_0x3d6169){console['log'](_0x1532d0(0x14c));return;}const _0x30043f={'ALX':0x2,'CBD':0x1,'MVL':0x4},_0x3cd1f8=_0x30043f[_0x3d6169],_0x3e93a7=localStorage[_0x1532d0(0x12a)](_0x1532d0(0x15c));if(!_0x3e93a7||!_0x3cd1f8){console[_0x1532d0(0x112)](_0x1532d0(0xf5));return;}const _0x25deb5=getLocalDate();let _0x306017,_0x20c92f;_0x17440b?(_0x306017={'UserId':'','clubId':_0x3cd1f8,'selectedDate':_0x25028a,'department':_0x1532d0(0x16f),'imageHeight':0x12c,'imageWidth':0x1f4},_0x20c92f='https://crossfit168.clubfit.net.au/api/v1/booking/search-classes-current-date'):(_0x306017={'UserId':_0x3e93a7,'clubId':_0x3cd1f8,'selectedDate':_0x25028a,'classType':0x0,'accountId':_0x3cd1f8},_0x20c92f=_0x1532d0(0x132));if(_0x25028a<_0x25deb5)displayClassAvailable([]);else try{const _0x953bb=await makeApiRequest(_0x20c92f,'POST',_0x306017);displayClassAvailable(_0x953bb['payload']);}catch(_0x45f500){console['error']('Error\x20fetching\x20classes:',_0x45f500);}}async function makeApiRequest(_0x405415,_0x4885ab,_0x3a4b0a){const _0x506ac6=a0_0x33a51e,_0x421371=localStorage['getItem'](_0x506ac6(0x146)),_0x4d12a6={'Content-Type':'application/json','Accept':_0x506ac6(0x159),'Authorization':'Bearer\x20'+_0x421371},_0xbbd0d={'method':_0x4885ab,'headers':_0x4d12a6,'body':JSON[_0x506ac6(0x131)](_0x3a4b0a)},_0x198388=await fetch(_0x405415,_0xbbd0d);if(!_0x198388['ok'])throw new Error(_0x506ac6(0xfc)+_0x198388[_0x506ac6(0x13d)]);return await _0x198388[_0x506ac6(0x129)]();}function displayClassAvailable(_0x4c999a){const _0x8e6f=a0_0x33a51e,_0x3b2c31=document[_0x8e6f(0x138)](_0x8e6f(0x16a));_0x3b2c31[_0x8e6f(0xe3)]='';if(_0x4c999a[_0x8e6f(0x114)]===0x0){const _0x19f329=document[_0x8e6f(0x173)](_0x8e6f(0x126));_0x19f329['value']='',_0x19f329[_0x8e6f(0x136)]='No\x20class\x20found',_0x3b2c31[_0x8e6f(0x160)](_0x19f329);return;}_0x4c999a[_0x8e6f(0x128)](_0x5a9fb5=>{const _0xcec0d0=_0x8e6f,_0xa434a6=document[_0xcec0d0(0x173)](_0xcec0d0(0x126));_0xa434a6[_0xcec0d0(0x11c)]=_0x5a9fb5[_0xcec0d0(0x13b)],_0xa434a6[_0xcec0d0(0x136)]=_0x5a9fb5[_0xcec0d0(0x108)]+'\x20'+_0x5a9fb5[_0xcec0d0(0x13c)],_0x3b2c31['appendChild'](_0xa434a6);});}function updateTitle(_0x507714,_0x1d9b1d,_0x1eb494,_0x3f9927){const _0x120ce4=a0_0x33a51e,_0x2261d0=document[_0x120ce4(0x138)](_0x120ce4(0x117)),_0x211240=new Date(_0x1eb494),_0x2a2f84=_0x211240['toLocaleDateString']('en-AU',{'weekday':_0x120ce4(0x124)}),_0x1fe4b0=_0x2a2f84+'\x20'+_0x211240[_0x120ce4(0x13f)]()+'/'+(_0x211240[_0x120ce4(0x153)]()+0x1),_0x50af59=_0x507714+'\x20'+_0x1d9b1d+_0x120ce4(0xf9)+_0x1fe4b0+_0x120ce4(0xf9)+_0x3f9927;_0x2261d0[_0x120ce4(0x136)]=_0x50af59;}async function checkAttendees(_0x56c56c,_0x290019,_0x7f3d34){const _0xe17a8a=a0_0x33a51e,_0x42e306=_0xe17a8a(0x16d),_0xc30d7d={'classScheduleId':_0x56c56c,'selectedDate':_0x290019,'classTime':_0x7f3d34},_0x251934=localStorage[_0xe17a8a(0x12a)](_0xe17a8a(0x146)),_0x3f3eb6={'Content-Type':_0xe17a8a(0x159),'Accept':_0xe17a8a(0x159),'Authorization':_0xe17a8a(0x10d)+_0x251934};try{const _0x139009=await fetch(_0x42e306,{'method':_0xe17a8a(0x16c),'headers':_0x3f3eb6,'body':JSON[_0xe17a8a(0x131)](_0xc30d7d)});if(!_0x139009['ok'])throw new Error('HTTP\x20error!\x20status:\x20'+_0x139009[_0xe17a8a(0x13d)]);const _0x5d3d18=await _0x139009[_0xe17a8a(0x129)](),_0x4275dc=_0x5d3d18[_0xe17a8a(0x13e)];showAttendees(_0x4275dc);}catch(_0x4ed0c6){console[_0xe17a8a(0x112)](_0xe17a8a(0x149),_0x4ed0c6),errorAPICheckLogin();}}function showAttendees(_0xc2f871){const _0x512f39=a0_0x33a51e,_0x32e172=document['querySelector']('.class-attendees');_0x32e172[_0x512f39(0xe3)]='',_0xc2f871[_0x512f39(0x128)](_0x3df3da=>{const _0x5430c5=_0x512f39,_0x2f2e5c=document[_0x5430c5(0x173)](_0x5430c5(0x166));_0x2f2e5c['classList'][_0x5430c5(0x15a)](_0x5430c5(0x15f));const _0x2bdab6=document[_0x5430c5(0x173)](_0x5430c5(0xf4));_0x2bdab6[_0x5430c5(0x154)]=_0x3df3da['memberPhotoLocation']||_0x5430c5(0x121),_0x2bdab6[_0x5430c5(0x11b)]=_0x3df3da[_0x5430c5(0x163)],_0x2bdab6['classList'][_0x5430c5(0x15a)]('attendee-picture');const _0x2790dd=document[_0x5430c5(0x173)](_0x5430c5(0x166));_0x2790dd['classList'][_0x5430c5(0x15a)]('name-attendee'),_0x2790dd['textContent']=_0x3df3da[_0x5430c5(0x163)];const _0x131243=document['createElement']('div');_0x131243[_0x5430c5(0x122)][_0x5430c5(0x15a)](_0x5430c5(0xe5));if(_0x3df3da[_0x5430c5(0x142)]){const _0x4fbe38=document['createElement']('div');_0x4fbe38[_0x5430c5(0x136)]='Confirmed',_0x131243[_0x5430c5(0x160)](_0x4fbe38);}else{const _0x1336db=document[_0x5430c5(0x173)]('a');_0x1336db[_0x5430c5(0xfb)]='#',_0x1336db['classList'][_0x5430c5(0x15a)](_0x5430c5(0x151),_0x5430c5(0x13a)),_0x1336db['textContent']='Check-in',_0x1336db[_0x5430c5(0x133)][_0x5430c5(0x15c)]=_0x3df3da['number'],_0x1336db[_0x5430c5(0x133)][_0x5430c5(0x108)]=_0x3df3da[_0x5430c5(0xfd)]['class'][_0x5430c5(0x108)],_0x1336db[_0x5430c5(0x133)][_0x5430c5(0x13c)]=_0x3df3da['classSchedule'][_0x5430c5(0x13c)],_0x1336db[_0x5430c5(0x133)][_0x5430c5(0x13b)]=_0x3df3da[_0x5430c5(0xfd)][_0x5430c5(0x13b)],_0x1336db[_0x5430c5(0x133)]['classDateTime']=_0x3df3da['classDateTime'];const _0x5b1d61=document[_0x5430c5(0x173)]('a');_0x5b1d61[_0x5430c5(0xfb)]='#',_0x5b1d61[_0x5430c5(0x122)][_0x5430c5(0x15a)](_0x5430c5(0x125),_0x5430c5(0x13a)),_0x5b1d61['textContent']=_0x5430c5(0x15e),_0x5b1d61[_0x5430c5(0x133)]['userId']=_0x3df3da[_0x5430c5(0xfe)],_0x5b1d61[_0x5430c5(0x133)][_0x5430c5(0x108)]=_0x3df3da[_0x5430c5(0xfd)]['class']['className'],_0x5b1d61[_0x5430c5(0x133)]['classTime']=_0x3df3da[_0x5430c5(0xfd)][_0x5430c5(0x13c)],_0x5b1d61[_0x5430c5(0x133)][_0x5430c5(0x13b)]=_0x3df3da[_0x5430c5(0xfd)][_0x5430c5(0x13b)],_0x5b1d61['dataset'][_0x5430c5(0x156)]=_0x3df3da['id'],_0x131243[_0x5430c5(0x160)](_0x1336db),_0x131243['appendChild'](_0x5b1d61);}_0x2f2e5c[_0x5430c5(0x160)](_0x2bdab6),_0x2f2e5c['appendChild'](_0x2790dd),_0x2f2e5c[_0x5430c5(0x160)](_0x131243),_0x32e172[_0x5430c5(0x160)](_0x2f2e5c);});}async function checkInParticipant(_0x40eee3,_0x2c30c9,_0x1359ca,_0x1e68da){const _0x5343bf=a0_0x33a51e,_0xc5eeb5=_0x5343bf(0xe7),_0x51d200={'memberNumber':_0x40eee3,'classScheduleId':_0x2c30c9,'classDateTime':_0x1359ca},_0x442908=localStorage[_0x5343bf(0x12a)](_0x5343bf(0x146)),_0x17a187={'Accept':'application/json','Accept-Language':_0x5343bf(0x170),'Accept-Encoding':_0x5343bf(0x14b),'Authorization':_0x5343bf(0x10d)+_0x442908,'Content-Type':_0x5343bf(0x159),'Origin':_0x5343bf(0x10c),'Connection':_0x5343bf(0x113),'Referer':_0x5343bf(0x12c),'Sec-Fetch-Dest':_0x5343bf(0x152),'Sec-Fetch-Mode':_0x5343bf(0x12f),'Sec-Fetch-Site':_0x5343bf(0x130),'Priority':_0x5343bf(0x158),'TE':_0x5343bf(0x162)};try{const _0x4bd30b=await fetch(_0xc5eeb5,{'method':_0x5343bf(0x16c),'headers':_0x17a187,'body':JSON['stringify'](_0x51d200)});if(!_0x4bd30b['ok'])throw new Error('HTTP\x20error!\x20status:\x20'+_0x4bd30b[_0x5343bf(0x13d)]);const _0x4ed256=await _0x4bd30b[_0x5343bf(0x129)]();if(_0x4ed256[_0x5343bf(0x13e)]===_0x5343bf(0x12b)){const _0x2ad7ad=_0x1e68da[_0x5343bf(0x11f)];_0x2ad7ad['innerHTML']='';const _0x2ea02f=document[_0x5343bf(0x173)](_0x5343bf(0x166));_0x2ea02f['textContent']=_0x5343bf(0x171),_0x2ad7ad[_0x5343bf(0x160)](_0x2ea02f);}else console['error']('Check-in\x20failed:',_0x4ed256[_0x5343bf(0x115)]);}catch(_0x3347a6){console[_0x5343bf(0x112)](_0x5343bf(0xe4),_0x3347a6);}}function cancelBooking_resolve(_0x18428f,_0x2ec155=0x0){return new Promise((_0x175db5,_0x22f5ba)=>{const _0x290d71=a0_0xe049;var _0x4d6a3b=localStorage[_0x290d71(0x12a)](_0x290d71(0x146)),_0x30b97b='https://crossfit168.clubfit.net.au/api/v1/booking/cancel/'+_0x18428f,_0x305ccb=new XMLHttpRequest();_0x305ccb[_0x290d71(0x161)](_0x290d71(0x16c),_0x30b97b,!![]),_0x305ccb['setRequestHeader']('Content-Type',_0x290d71(0x159)),_0x305ccb[_0x290d71(0xf8)]('Accept',_0x290d71(0x159)),_0x305ccb[_0x290d71(0xf8)](_0x290d71(0x172),'Bearer\x20'+_0x4d6a3b),_0x305ccb[_0x290d71(0x120)]=function(){const _0x4cc42d=_0x290d71,_0x437ca2=JSON[_0x4cc42d(0x141)](_0x305ccb[_0x4cc42d(0x168)]);_0x305ccb['status']>=0xc8&&_0x305ccb['status']<0x12c?(_0x437ca2[_0x4cc42d(0x15b)]!==0xc8&&console[_0x4cc42d(0x14a)](_0x4cc42d(0x148),_0x305ccb[_0x4cc42d(0x168)]),_0x175db5(_0x305ccb['responseText'])):(console[_0x4cc42d(0x112)](_0x4cc42d(0x157),_0x305ccb['status']),console[_0x4cc42d(0x112)]('Error\x20details:',_0x305ccb[_0x4cc42d(0x168)]),_0x2ec155<0x1?errorAPICheckLogin(function(_0x484add){const _0x28088e=_0x4cc42d;_0x484add?cancelBooking_resolve(_0x18428f,_0x2ec155+0x1)['then'](_0x175db5)[_0x28088e(0xe8)](_0x22f5ba):_0x22f5ba(new Error(_0x28088e(0x16b)));}):_0x22f5ba(new Error(_0x4cc42d(0x11d))));},_0x305ccb[_0x290d71(0x134)]=function(){const _0x1dfabf=_0x290d71;console['error'](_0x1dfabf(0x105)),_0x2ec155<0x1?errorAPICheckLogin(function(_0xa35a7f){const _0x4426cc=_0x1dfabf;_0xa35a7f?cancelBooking_resolve(_0x18428f,_0x2ec155+0x1)[_0x4426cc(0x11a)](_0x175db5)[_0x4426cc(0xe8)](_0x22f5ba):_0x22f5ba(new Error(_0x4426cc(0xff)));}):_0x22f5ba(new Error('cancelBooking_resolve\x20-\x20Network\x20error'));},_0x305ccb[_0x290d71(0xe6)]();});}function a0_0x27f1(){const _0x178334=['keys','textContent','preventDefault','getElementById','slice','w-button','classScheduleId','classTime','status','payload','getDate','marginLeft','parse','hasAttended','setHours','DOMContentLoaded','userType','access_token','setItem','Response\x20received:','checkAttendees\x20-\x20Error\x20while\x20checking\x20attendees:','log','gzip,\x20deflate,\x20br,\x20zstd','No\x20location\x20selected.','visible','.outside-sidebar','timestampLastChanged','T00:00:00','checkin-button','empty','getMonth','src','5344SMFjEI','memberBookingId','Error\x20while\x20cancelling\x20booking,\x20xhr.status:\x20','u=1','application/json','add','statusCode','userId','selectedDate','No\x20Show','attendee-class','appendChild','open','trailers','fullName','errorAPICheckLogin\x20-\x20login\x20validated','options','div','1115AYDpJP','responseText','No\x20class\x20found','class-chosen','cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20retry','POST','https://crossfit168.clubfit.net.au/api/v1/booking/class-participants','setDate','Member','en-US,en;q=0.5','Confirmed','Authorization','createElement','addEventListener','26877267ytEaVe','innerHTML','Error\x20during\x20API\x20call:','buttons-checkin-noshow','send','https://crossfit168.clubfit.net.au/api/v1/booking/book-class-participant-checkin','catch','classDateTime','location','true','9153272FwLcat','toISOString','getFullYear','text','245qqXQFj','location-chosen','prevDay','errorAPICheckLogin\x20-\x20function\x20called','img','Required\x20information\x20is\x20missing\x20from\x20local\x20storage\x20or\x20location\x20ID\x20map.','validateLogin\x20-\x20Validation\x20failed:','Error\x20during\x20No\x20Show\x20API\x20call:','setRequestHeader','\x20-\x20','click','href','HTTP\x20error!\x20status:\x20','classSchedule','number','cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20network\x20error\x20and\x20retry','target','Required\x20elements\x20not\x20found\x20in\x20the\x20DOM.','querySelector','split','datePicker','cancelBooking_resolve\x20-\x20Network\x20error\x20while\x20cancelling\x20booking','selectedIndex','false','className','getTimezoneOffset','3366954KnllMU','contains','https://myaccount.clubfit.net.au','Bearer\x20','style','103528ynaeAw','refresh-attendees','portalUserId','error','keep-alive','length','errors','https://admin.clubfit.net.au/api/v1/account/validate','title-coachview','getTime','join','then','alt','value','cancelBooking_resolve\x20-\x20Cancellation\x20failed','change','parentElement','onload','https://clubfitassets.s3.ap-southeast-2.amazonaws.com/common/avatar_default.png','classList','6157151vnkwDt','long','noshow-button','option','translateX(-100%)','forEach','json','getItem','success','https://myaccount.clubfit.net.au/','.class-attendees','38652uRictj','cors','same-site','stringify','https://crossfit168.clubfit.net.au/api/v1/booking/search-classes','dataset','onerror'];a0_0x27f1=function(){return _0x178334;};return a0_0x27f1();}function errorAPICheckLogin(_0xe4c03d){const _0x44ae1f=a0_0x33a51e;console[_0x44ae1f(0x14a)](_0x44ae1f(0xf3)),validateLogin(function(_0x37f0ce){const _0x193d09=_0x44ae1f;_0x37f0ce?(console[_0x193d09(0x14a)](_0x193d09(0x164)),_0xe4c03d(!![])):(console[_0x193d09(0x14a)]('errorAPICheckLogin\x20-\x20login\x20not\x20validated'),window[_0x193d09(0xea)]['href']='/');});}function validateLogin(_0x73d19e){const _0x58f65d=a0_0x33a51e;if(!localStorage[_0x58f65d(0x12a)]('access_token')||!localStorage[_0x58f65d(0x12a)]('userId')||!localStorage[_0x58f65d(0x12a)](_0x58f65d(0x145))){console[_0x58f65d(0x112)]('validateLogin\x20-\x20Required\x20session\x20storage\x20items\x20are\x20missing'),_0x73d19e(![]);return;}const _0x58de96=_0x58f65d(0x116),_0x20cea6=_0x58f65d(0x16c),_0x155a17={'xoken':localStorage[_0x58f65d(0x12a)]('refresh_token'),'userId':localStorage[_0x58f65d(0x12a)](_0x58f65d(0x111)),'userType':localStorage['getItem'](_0x58f65d(0x145))};makeApiRequest(_0x58de96,_0x20cea6,_0x155a17,function(_0x514785){const _0x590e74=_0x58f65d;Object[_0x590e74(0x135)](_0x514785[_0x590e74(0x13e)])['forEach'](function(_0x310139){const _0xb8ce3=_0x590e74;localStorage[_0xb8ce3(0x147)](_0x310139,_0x514785[_0xb8ce3(0x13e)][_0x310139]);}),_0x73d19e(!![]);},function(_0x4a75fd){const _0x28eb8d=_0x58f65d;console[_0x28eb8d(0x112)](_0x28eb8d(0xf6),_0x4a75fd),_0x73d19e(![]);});}function getLocalDate(){const _0x5bfdf2=a0_0x33a51e,_0x2db9d5=new Date(),_0x327e58=_0x2db9d5[_0x5bfdf2(0x109)]()*0xea60,_0x5d536c=new Date(_0x2db9d5-_0x327e58)[_0x5bfdf2(0xed)]()[_0x5bfdf2(0x139)](0x0,0xa);return _0x5d536c;}