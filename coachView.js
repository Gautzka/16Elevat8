const a0_0x1896b2=a0_0x2a10;(function(_0x8b32e7,_0x56b35d){const _0x242272=a0_0x2a10,_0xa5d7c7=_0x8b32e7();while(!![]){try{const _0x5520fb=parseInt(_0x242272(0xac))/0x1+parseInt(_0x242272(0xc7))/0x2+parseInt(_0x242272(0xc8))/0x3*(parseInt(_0x242272(0x11a))/0x4)+-parseInt(_0x242272(0x111))/0x5+-parseInt(_0x242272(0xf8))/0x6+parseInt(_0x242272(0x9b))/0x7*(parseInt(_0x242272(0xa0))/0x8)+-parseInt(_0x242272(0xcc))/0x9*(parseInt(_0x242272(0xea))/0xa);if(_0x5520fb===_0x56b35d)break;else _0xa5d7c7['push'](_0xa5d7c7['shift']());}catch(_0x4c4ee4){_0xa5d7c7['push'](_0xa5d7c7['shift']());}}}(a0_0x1840,0x3195f),document[a0_0x1896b2(0x101)](a0_0x1896b2(0xb4),()=>{initializePage(),setupEventListeners(),initializeSidebar();}));function initializeSidebar(){const _0x1ae45c=a0_0x1896b2,_0x3205c8=document[_0x1ae45c(0xf7)](_0x1ae45c(0xa7)),_0x5c1a6a=document['querySelector'](_0x1ae45c(0xc5)),_0x2842e1=document[_0x1ae45c(0xf7)]('.outside-sidebar');_0x3205c8[_0x1ae45c(0x11e)][_0x1ae45c(0xaf)]=_0x1ae45c(0xe1),_0x5c1a6a[_0x1ae45c(0x101)](_0x1ae45c(0xa3),()=>toggleSidebar(_0x3205c8,_0x2842e1));}function toggleSidebar(_0x486449,_0x586b18){const _0x317fec=a0_0x1896b2;_0x486449[_0x317fec(0x11e)][_0x317fec(0xaf)]===_0x317fec(0xe1)?(_0x486449['style']['transform']=_0x317fec(0xc0),_0x586b18[_0x317fec(0xa4)][_0x317fec(0xec)]='0',_0x486449[_0x317fec(0x11e)][_0x317fec(0xaf)]=_0x317fec(0xf6)):(_0x486449[_0x317fec(0xa4)]['transform']='',_0x586b18[_0x317fec(0xa4)][_0x317fec(0xec)]=_0x317fec(0xb8),_0x486449[_0x317fec(0x11e)][_0x317fec(0xaf)]=_0x317fec(0xe1));}async function initializePage(){initDatePicker(),await fetchAndDisplayClassesAvailable(),fetchAndDisplayAttendees();}function setupEventListeners(){const _0x393a02=a0_0x1896b2,_0x466bd1=document[_0x393a02(0xe4)](_0x393a02(0x99)),_0x9dc546=document[_0x393a02(0xe4)](_0x393a02(0x98)),_0x49cf0f=document[_0x393a02(0xe4)]('nextDay'),_0x2d3bbd=document[_0x393a02(0xe4)]('location-chosen'),_0x5077a8=document[_0x393a02(0xe4)]('class-chosen'),_0x3593e3=document['getElementById']('refresh-attendees');_0x9dc546[_0x393a02(0x101)](_0x393a02(0xa3),handlePrevDayClick),_0x49cf0f[_0x393a02(0x101)]('click',handleNextDayClick),_0x466bd1[_0x393a02(0x101)](_0x393a02(0x106),handleDateChange),_0x2d3bbd[_0x393a02(0x101)](_0x393a02(0x106),handleLocationChange),_0x5077a8[_0x393a02(0x101)](_0x393a02(0x106),handleClassChange),_0x3593e3&&_0x3593e3[_0x393a02(0x101)](_0x393a02(0xa3),handleRefreshButtonClick),document[_0x393a02(0x101)]('click',handleButtonClicks);}async function handlePrevDayClick(){const _0x33ec20=a0_0x1896b2;adjustOneDayDate(-0x1);const _0x518eb0=document[_0x33ec20(0xe4)]('datePicker')[_0x33ec20(0x97)];saveDatePickerSessionStorage(_0x518eb0),await fetchAndDisplayClassesAvailable(),fetchAndDisplayAttendees();}async function handleNextDayClick(){const _0x438f1d=a0_0x1896b2;adjustOneDayDate(0x1);const _0x1bb3a4=document[_0x438f1d(0xe4)](_0x438f1d(0x99))['value'];saveDatePickerSessionStorage(_0x1bb3a4),await fetchAndDisplayClassesAvailable(),fetchAndDisplayAttendees();}async function handleDateChange(){const _0x5891f0=a0_0x1896b2,_0x3686df=document[_0x5891f0(0xe4)](_0x5891f0(0x99))[_0x5891f0(0x97)];saveDatePickerSessionStorage(_0x3686df),await fetchAndDisplayClassesAvailable(),fetchAndDisplayAttendees();}async function handleLocationChange(){await fetchAndDisplayClassesAvailable(),fetchAndDisplayAttendees();}function handleClassChange(){fetchAndDisplayAttendees();}function handleRefreshButtonClick(){fetchAndDisplayAttendees();}function handleButtonClicks(_0x371b97){const _0x417a64=a0_0x1896b2;if(_0x371b97[_0x417a64(0xbb)][_0x417a64(0xee)][_0x417a64(0xff)](_0x417a64(0xd9))){_0x371b97[_0x417a64(0xcf)]();const _0x557125=_0x371b97[_0x417a64(0xbb)],_0x33f55f=_0x557125[_0x417a64(0x11e)][_0x417a64(0x95)],_0x602353=_0x557125[_0x417a64(0x11e)][_0x417a64(0xfc)],_0x27705d=_0x557125[_0x417a64(0x11e)][_0x417a64(0xf5)];checkInParticipant(_0x33f55f,_0x602353,_0x27705d,_0x557125);}else{if(_0x371b97[_0x417a64(0xbb)][_0x417a64(0xee)][_0x417a64(0xff)](_0x417a64(0x108))){_0x371b97['preventDefault']();const _0x521b08=_0x371b97['target'],_0x2e4d54=_0x521b08[_0x417a64(0x11e)][_0x417a64(0xa9)];cancelBooking_resolve(_0x2e4d54)[_0x417a64(0xdf)](_0xe7cb09=>{const _0x4be305=_0x417a64,_0x13a123=_0x521b08[_0x4be305(0xd1)];_0x13a123['innerHTML']='';const _0x1c0e4e=document[_0x4be305(0x10c)](_0x4be305(0x10e));_0x1c0e4e['textContent']='No\x20Show',_0x13a123[_0x4be305(0xbd)](_0x1c0e4e);})[_0x417a64(0x117)](_0x33746c=>{const _0x22142f=_0x417a64;console[_0x22142f(0xfa)](_0x22142f(0xf9),_0x33746c);});}}}function fetchAndDisplayAttendees(){const _0x3a8b66=a0_0x1896b2,_0x33992c=document[_0x3a8b66(0xe4)](_0x3a8b66(0xe9)),_0x3f7423=document['getElementById'](_0x3a8b66(0x99)),_0x4d5a07=_0x33992c['options'][_0x33992c[_0x3a8b66(0xde)]],_0x2e1bfa=_0x4d5a07[_0x3a8b66(0x97)],_0x5013d3=_0x4d5a07[_0x3a8b66(0xc1)][_0x3a8b66(0x118)]('\x20'),_0x2eb095=_0x5013d3[0x0],_0x2bbd20=_0x5013d3[_0x3a8b66(0x105)](0x1)[_0x3a8b66(0xcd)]('\x20'),_0x2c203d=_0x3f7423['value'],_0x138d24=document[_0x3a8b66(0xe4)](_0x3a8b66(0xce)),_0xce5a85=_0x138d24[_0x3a8b66(0x113)][_0x138d24[_0x3a8b66(0xde)]][_0x3a8b66(0x10b)];if(_0x4d5a07[_0x3a8b66(0xc1)]===_0x3a8b66(0xb2)){const _0x1eb060=document[_0x3a8b66(0xf7)]('.class-attendees');_0x1eb060['innerHTML']='';const _0x53dc22=document['getElementById'](_0x3a8b66(0xdb));_0x53dc22[_0x3a8b66(0xc1)]=_0x4d5a07[_0x3a8b66(0xc1)];}else checkAttendees(_0x2e1bfa,_0x2c203d,_0x2bbd20),updateTitle(_0x2eb095,_0x2bbd20,_0x2c203d,_0xce5a85);}function a0_0x2a10(_0x4784d4,_0x21818e){const _0x184005=a0_0x1840();return a0_0x2a10=function(_0x2a1057,_0x1fff89){_0x2a1057=_0x2a1057-0x93;let _0x414514=_0x184005[_0x2a1057];return _0x414514;},a0_0x2a10(_0x4784d4,_0x21818e);}function initDatePicker(){const _0x2a7532=a0_0x1896b2,_0x7b322=document[_0x2a7532(0xe4)](_0x2a7532(0x99));let _0x46ffca=sessionStorage[_0x2a7532(0x9d)](_0x2a7532(0x10a)),_0x22e983=sessionStorage[_0x2a7532(0x9d)](_0x2a7532(0xd4));if(_0x46ffca&&_0x22e983&&isWithinValidityPeriod(_0x22e983,0.5))_0x7b322[_0x2a7532(0x97)]=_0x46ffca;else{const _0xd44095=getLocalDate();_0x7b322[_0x2a7532(0x97)]=_0xd44095,saveDatePickerSessionStorage(_0xd44095);}}function saveDatePickerSessionStorage(_0x435b6b){const _0xc088bd=a0_0x1896b2;sessionStorage[_0xc088bd(0xeb)](_0xc088bd(0x10a),_0x435b6b);const _0x44eae7=new Date()['getTime']();sessionStorage[_0xc088bd(0xeb)](_0xc088bd(0xd4),_0x44eae7);}function adjustOneDayDate(_0x328610){const _0x36dce3=a0_0x1896b2,_0x302974=document[_0x36dce3(0xe4)](_0x36dce3(0x99)),_0x29a442=new Date(_0x302974['value']+'T00:00:00');_0x29a442['setDate'](_0x29a442[_0x36dce3(0xc9)]()+_0x328610),_0x302974['value']=formatDate(_0x29a442);}function isWithinValidityPeriod(_0x43354a,_0x39a002){const _0x7957d4=new Date()['getTime'](),_0x178d6a=(_0x7957d4-_0x43354a)/(0x3e8*0x3c*0x3c);return _0x178d6a<=_0x39a002;}function a0_0x1840(){const _0x245039=['.sidebar','cancelBooking_resolve\x20-\x20Cancellation\x20failed','memberBookingId','HTTP\x20error!\x20status:\x20','Required\x20elements\x20not\x20found\x20in\x20the\x20DOM.','340649tBaLVi','No\x20Show','en-AU','visible','keys','setRequestHeader','No\x20class\x20found','fullName','DOMContentLoaded','href','errors','userType','15rem','Check-in\x20failed:','gzip,\x20deflate,\x20br,\x20zstd','target','https://crossfit168.clubfit.net.au/api/v1/booking/book-class-participant-checkin','appendChild','application/json','memberPhotoLocation','translateX(-100%)','textContent','length','trailers','stringify','.toggle-button','validateLogin\x20-\x20Required\x20session\x20storage\x20items\x20are\x20missing','150910gANAEZ','12ijqiWN','getDate','getFullYear','log','711081nxhZhn','join','location-chosen','preventDefault','getMonth','parentElement','cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20network\x20error\x20and\x20retry','empty','timestampLastChanged','attendee-picture','errorAPICheckLogin\x20-\x20login\x20validated','innerHTML','validateLogin\x20-\x20Validation\x20failed:','checkin-button','classTime','title-coachview','attendee-class','Error\x20while\x20cancelling\x20booking,\x20xhr.status:\x20','selectedIndex','then','Accept','true','add','buttons-checkin-noshow','getElementById','toLocaleDateString','w-button','errorAPICheckLogin\x20-\x20login\x20not\x20validated','Confirmed','class-chosen','10RafcQD','setItem','marginLeft','.class-attendees','classList','alt','access_token','cancelBooking_resolve\x20-\x20Network\x20error\x20while\x20cancelling\x20booking','https://clubfitassets.s3.ap-southeast-2.amazonaws.com/common/avatar_default.png','name-attendee','No\x20location\x20selected.','classDateTime','false','querySelector','1620666quwSPt','Error\x20during\x20No\x20Show\x20API\x20call:','error','forEach','classScheduleId','https://myaccount.clubfit.net.au','hasAttended','contains','Error\x20details:','addEventListener','responseText','same-site','cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20retry','slice','change','class','noshow-button','number','selectedDate','text','createElement','cors','div','classSchedule','Bearer\x20','605085YvAVjB','Required\x20information\x20is\x20missing\x20from\x20local\x20storage\x20or\x20location\x20ID\x20map.','options','https://crossfit168.clubfit.net.au/api/v1/booking/search-classes','https://myaccount.clubfit.net.au/','payload','catch','split','u=1','159472JDSGPm','Check-in','refresh_token','open','dataset','className','parse','en-US,en;q=0.5','errorAPICheckLogin\x20-\x20function\x20called','img','userId','status','value','prevDay','datePicker','https://crossfit168.clubfit.net.au/api/v1/booking/cancel/','392vpOJPT','json','getItem','https://admin.clubfit.net.au/api/v1/account/validate','Response\x20received:','13952MTXGMB','option','success','click','style','POST','src'];a0_0x1840=function(){return _0x245039;};return a0_0x1840();}function formatDate(_0x212d08){const _0x1956b8=a0_0x1896b2;let _0x201fa9=new Date(_0x212d08),_0x1184d2=''+(_0x201fa9[_0x1956b8(0xd0)]()+0x1),_0x3f0813=''+_0x201fa9['getDate'](),_0x2d9c6d=_0x201fa9[_0x1956b8(0xca)]();if(_0x1184d2[_0x1956b8(0xc2)]<0x2)_0x1184d2='0'+_0x1184d2;if(_0x3f0813[_0x1956b8(0xc2)]<0x2)_0x3f0813='0'+_0x3f0813;return[_0x2d9c6d,_0x1184d2,_0x3f0813][_0x1956b8(0xcd)]('-');}async function fetchAndDisplayClassesAvailable(){const _0x2d82b6=a0_0x1896b2,_0x4567e7=document[_0x2d82b6(0xe4)]('location-chosen'),_0x3e3b14=document[_0x2d82b6(0xe4)](_0x2d82b6(0x99)),_0x14c332=document[_0x2d82b6(0xe4)]('class-chosen');if(!_0x4567e7||!_0x3e3b14||!_0x14c332){console[_0x2d82b6(0xfa)](_0x2d82b6(0xab));return;}const _0x13ffd0=_0x4567e7[_0x2d82b6(0x97)],_0x1e96a9=_0x3e3b14['value'];if(!_0x13ffd0){console[_0x2d82b6(0xcb)](_0x2d82b6(0xf4));return;}const _0x224315={'ALX':0x2,'CBD':0x1,'MVL':0x4},_0x5a9b35=_0x224315[_0x13ffd0],_0x1eaa8f=localStorage['getItem'](_0x2d82b6(0x95));if(!_0x1eaa8f||!_0x5a9b35){console[_0x2d82b6(0xfa)](_0x2d82b6(0x112));return;}const _0x1c3ea7={'UserId':_0x1eaa8f,'clubId':_0x5a9b35,'selectedDate':_0x1e96a9,'classType':0x0,'accountId':_0x5a9b35},_0x43e429=getLocalDate();if(_0x1e96a9<_0x43e429)displayClassAvailable([]);else{const _0x1ee601=_0x2d82b6(0x114);try{const _0x3a6953=await makeApiRequest(_0x1ee601,_0x2d82b6(0xa5),_0x1c3ea7);displayClassAvailable(_0x3a6953['payload']);}catch(_0x525555){console['error']('Error\x20fetching\x20classes:',_0x525555);}}}async function makeApiRequest(_0x293154,_0x37ceb7,_0x4ead05){const _0x1e2307=a0_0x1896b2,_0x52407b=localStorage[_0x1e2307(0x9d)](_0x1e2307(0xf0)),_0x5e00dd={'Content-Type':'application/json','Accept':'application/json','Authorization':_0x1e2307(0x110)+_0x52407b},_0x1ffd75={'method':_0x37ceb7,'headers':_0x5e00dd,'body':JSON[_0x1e2307(0xc4)](_0x4ead05)},_0x47647b=await fetch(_0x293154,_0x1ffd75);if(!_0x47647b['ok'])throw new Error('HTTP\x20error!\x20status:\x20'+_0x47647b[_0x1e2307(0x96)]);return await _0x47647b[_0x1e2307(0x9c)]();}function displayClassAvailable(_0x26b379){const _0x5b216e=a0_0x1896b2,_0x5461b6=document['getElementById'](_0x5b216e(0xe9));_0x5461b6[_0x5b216e(0xd7)]='';if(_0x26b379['length']===0x0){const _0x147fb9=document[_0x5b216e(0x10c)](_0x5b216e(0xa1));_0x147fb9[_0x5b216e(0x97)]='',_0x147fb9[_0x5b216e(0xc1)]=_0x5b216e(0xb2),_0x5461b6[_0x5b216e(0xbd)](_0x147fb9);return;}_0x26b379['forEach'](_0x252d82=>{const _0x545654=_0x5b216e,_0x145737=document[_0x545654(0x10c)](_0x545654(0xa1));_0x145737['value']=_0x252d82[_0x545654(0xfc)],_0x145737['textContent']=_0x252d82['className']+'\x20'+_0x252d82[_0x545654(0xda)],_0x5461b6[_0x545654(0xbd)](_0x145737);});}function updateTitle(_0x203c85,_0x77c9ca,_0xddfd52,_0x58e051){const _0x20429c=a0_0x1896b2,_0x560cdb=document[_0x20429c(0xe4)](_0x20429c(0xdb)),_0x2a8c27=new Date(_0xddfd52),_0x52e201=_0x2a8c27[_0x20429c(0xe5)](_0x20429c(0xae),{'weekday':'long'}),_0x107ef4=_0x52e201+'\x20'+_0x2a8c27[_0x20429c(0xc9)]()+'/'+(_0x2a8c27[_0x20429c(0xd0)]()+0x1),_0x267424=_0x203c85+'\x20'+_0x77c9ca+'\x20-\x20'+_0x107ef4+'\x20-\x20'+_0x58e051;_0x560cdb[_0x20429c(0xc1)]=_0x267424;}async function checkAttendees(_0x5f0c08,_0x3eacf6,_0x10138d){const _0x248284=a0_0x1896b2,_0x18d600='https://crossfit168.clubfit.net.au/api/v1/booking/class-participants',_0x481d64={'classScheduleId':_0x5f0c08,'selectedDate':_0x3eacf6,'classTime':_0x10138d},_0x19c528=localStorage['getItem']('access_token'),_0xd237da={'Content-Type':_0x248284(0xbe),'Accept':_0x248284(0xbe),'Authorization':_0x248284(0x110)+_0x19c528};try{const _0xd2579c=await fetch(_0x18d600,{'method':_0x248284(0xa5),'headers':_0xd237da,'body':JSON[_0x248284(0xc4)](_0x481d64)});if(!_0xd2579c['ok'])throw new Error(_0x248284(0xaa)+_0xd2579c['status']);const _0x31ac10=await _0xd2579c['json'](),_0x193cf0=_0x31ac10[_0x248284(0x116)];showAttendees(_0x193cf0);}catch(_0x2897c1){console[_0x248284(0xfa)]('checkAttendees\x20-\x20Error\x20while\x20checking\x20attendees:',_0x2897c1),errorAPICheckLogin();}}function showAttendees(_0x2d457d){const _0x3dd829=a0_0x1896b2,_0x43826a=document[_0x3dd829(0xf7)](_0x3dd829(0xed));_0x43826a[_0x3dd829(0xd7)]='',_0x2d457d[_0x3dd829(0xfb)](_0x13d43a=>{const _0x33bccb=_0x3dd829,_0x273237=document[_0x33bccb(0x10c)](_0x33bccb(0x10e));_0x273237[_0x33bccb(0xee)][_0x33bccb(0xe2)](_0x33bccb(0xdc));const _0x2d3916=document[_0x33bccb(0x10c)](_0x33bccb(0x94));_0x2d3916[_0x33bccb(0xa6)]=_0x13d43a[_0x33bccb(0xbf)]||_0x33bccb(0xf2),_0x2d3916[_0x33bccb(0xef)]=_0x13d43a['fullName'],_0x2d3916['classList'][_0x33bccb(0xe2)](_0x33bccb(0xd5));const _0x3f69c0=document[_0x33bccb(0x10c)]('div');_0x3f69c0[_0x33bccb(0xee)][_0x33bccb(0xe2)](_0x33bccb(0xf3)),_0x3f69c0[_0x33bccb(0xc1)]=_0x13d43a[_0x33bccb(0xb3)];const _0x347f98=document[_0x33bccb(0x10c)](_0x33bccb(0x10e));_0x347f98[_0x33bccb(0xee)][_0x33bccb(0xe2)](_0x33bccb(0xe3));if(_0x13d43a[_0x33bccb(0xfe)]){const _0x1344c2=document[_0x33bccb(0x10c)](_0x33bccb(0x10e));_0x1344c2[_0x33bccb(0xc1)]=_0x33bccb(0xe8),_0x347f98[_0x33bccb(0xbd)](_0x1344c2);}else{const _0x47359b=document[_0x33bccb(0x10c)]('a');_0x47359b[_0x33bccb(0xb5)]='#',_0x47359b[_0x33bccb(0xee)]['add'](_0x33bccb(0xd9),_0x33bccb(0xe6)),_0x47359b[_0x33bccb(0xc1)]=_0x33bccb(0x11b),_0x47359b[_0x33bccb(0x11e)][_0x33bccb(0x95)]=_0x13d43a[_0x33bccb(0x109)],_0x47359b[_0x33bccb(0x11e)][_0x33bccb(0x11f)]=_0x13d43a[_0x33bccb(0x10f)][_0x33bccb(0x107)][_0x33bccb(0x11f)],_0x47359b[_0x33bccb(0x11e)]['classTime']=_0x13d43a[_0x33bccb(0x10f)]['classTime'],_0x47359b['dataset'][_0x33bccb(0xfc)]=_0x13d43a[_0x33bccb(0x10f)]['classScheduleId'],_0x47359b[_0x33bccb(0x11e)][_0x33bccb(0xf5)]=_0x13d43a[_0x33bccb(0xf5)];const _0x9b5ae6=document[_0x33bccb(0x10c)]('a');_0x9b5ae6['href']='#',_0x9b5ae6[_0x33bccb(0xee)][_0x33bccb(0xe2)](_0x33bccb(0x108),'w-button'),_0x9b5ae6['textContent']=_0x33bccb(0xad),_0x9b5ae6[_0x33bccb(0x11e)][_0x33bccb(0x95)]=_0x13d43a[_0x33bccb(0x109)],_0x9b5ae6[_0x33bccb(0x11e)][_0x33bccb(0x11f)]=_0x13d43a['classSchedule'][_0x33bccb(0x107)][_0x33bccb(0x11f)],_0x9b5ae6['dataset'][_0x33bccb(0xda)]=_0x13d43a[_0x33bccb(0x10f)][_0x33bccb(0xda)],_0x9b5ae6[_0x33bccb(0x11e)][_0x33bccb(0xfc)]=_0x13d43a[_0x33bccb(0x10f)][_0x33bccb(0xfc)],_0x9b5ae6[_0x33bccb(0x11e)][_0x33bccb(0xa9)]=_0x13d43a['id'],_0x347f98[_0x33bccb(0xbd)](_0x47359b),_0x347f98[_0x33bccb(0xbd)](_0x9b5ae6);}_0x273237['appendChild'](_0x2d3916),_0x273237['appendChild'](_0x3f69c0),_0x273237[_0x33bccb(0xbd)](_0x347f98),_0x43826a[_0x33bccb(0xbd)](_0x273237);});}async function checkInParticipant(_0x20bf46,_0x5775f6,_0x73a0fa,_0x125a2c){const _0x136bd6=a0_0x1896b2,_0x38e7f6=_0x136bd6(0xbc),_0x16403e={'memberNumber':_0x20bf46,'classScheduleId':_0x5775f6,'classDateTime':_0x73a0fa},_0x39a145=localStorage[_0x136bd6(0x9d)](_0x136bd6(0xf0)),_0x1a9611={'Accept':_0x136bd6(0xbe),'Accept-Language':_0x136bd6(0x121),'Accept-Encoding':_0x136bd6(0xba),'Authorization':_0x136bd6(0x110)+_0x39a145,'Content-Type':'application/json','Origin':_0x136bd6(0xfd),'Connection':'keep-alive','Referer':_0x136bd6(0x115),'Sec-Fetch-Dest':_0x136bd6(0xd3),'Sec-Fetch-Mode':_0x136bd6(0x10d),'Sec-Fetch-Site':_0x136bd6(0x103),'Priority':_0x136bd6(0x119),'TE':_0x136bd6(0xc3)};try{const _0x286bc6=await fetch(_0x38e7f6,{'method':'POST','headers':_0x1a9611,'body':JSON['stringify'](_0x16403e)});if(!_0x286bc6['ok'])throw new Error(_0x136bd6(0xaa)+_0x286bc6['status']);const _0xc7ad92=await _0x286bc6[_0x136bd6(0x9c)]();if(_0xc7ad92[_0x136bd6(0x116)]===_0x136bd6(0xa2)){const _0x3794a9=_0x125a2c[_0x136bd6(0xd1)];_0x3794a9[_0x136bd6(0xd7)]='';const _0x27cf80=document[_0x136bd6(0x10c)](_0x136bd6(0x10e));_0x27cf80[_0x136bd6(0xc1)]=_0x136bd6(0xe8),_0x3794a9[_0x136bd6(0xbd)](_0x27cf80);}else console['error'](_0x136bd6(0xb9),_0xc7ad92[_0x136bd6(0xb6)]);}catch(_0x18bb02){console['error']('Error\x20during\x20API\x20call:',_0x18bb02);}}function cancelBooking_resolve(_0x5df892,_0x1dacea=0x0){return new Promise((_0x231025,_0x1ffcb7)=>{const _0x517dba=a0_0x2a10;var _0x1865fc=localStorage[_0x517dba(0x9d)](_0x517dba(0xf0)),_0x179a24=_0x517dba(0x9a)+_0x5df892,_0xa5fd9a=new XMLHttpRequest();_0xa5fd9a[_0x517dba(0x11d)](_0x517dba(0xa5),_0x179a24,!![]),_0xa5fd9a[_0x517dba(0xb1)]('Content-Type',_0x517dba(0xbe)),_0xa5fd9a[_0x517dba(0xb1)](_0x517dba(0xe0),_0x517dba(0xbe)),_0xa5fd9a[_0x517dba(0xb1)]('Authorization',_0x517dba(0x110)+_0x1865fc),_0xa5fd9a['onload']=function(){const _0xbf084a=_0x517dba,_0x54ee2d=JSON[_0xbf084a(0x120)](_0xa5fd9a[_0xbf084a(0x102)]);_0xa5fd9a['status']>=0xc8&&_0xa5fd9a[_0xbf084a(0x96)]<0x12c?(_0x54ee2d['statusCode']!==0xc8&&console['log'](_0xbf084a(0x9f),_0xa5fd9a[_0xbf084a(0x102)]),_0x231025(_0xa5fd9a[_0xbf084a(0x102)])):(console[_0xbf084a(0xfa)](_0xbf084a(0xdd),_0xa5fd9a[_0xbf084a(0x96)]),console[_0xbf084a(0xfa)](_0xbf084a(0x100),_0xa5fd9a[_0xbf084a(0x102)]),_0x1dacea<0x1?errorAPICheckLogin(function(_0x4e2219){const _0x5efe36=_0xbf084a;_0x4e2219?cancelBooking_resolve(_0x5df892,_0x1dacea+0x1)[_0x5efe36(0xdf)](_0x231025)[_0x5efe36(0x117)](_0x1ffcb7):_0x1ffcb7(new Error(_0x5efe36(0x104)));}):_0x1ffcb7(new Error(_0xbf084a(0xa8))));},_0xa5fd9a['onerror']=function(){const _0x9f9775=_0x517dba;console[_0x9f9775(0xfa)](_0x9f9775(0xf1)),_0x1dacea<0x1?errorAPICheckLogin(function(_0x5668e6){const _0x19bde3=_0x9f9775;_0x5668e6?cancelBooking_resolve(_0x5df892,_0x1dacea+0x1)[_0x19bde3(0xdf)](_0x231025)[_0x19bde3(0x117)](_0x1ffcb7):_0x1ffcb7(new Error(_0x19bde3(0xd2)));}):_0x1ffcb7(new Error('cancelBooking_resolve\x20-\x20Network\x20error'));},_0xa5fd9a['send']();});}function errorAPICheckLogin(_0x4adb19){const _0x3e0a4a=a0_0x1896b2;console['log'](_0x3e0a4a(0x93)),validateLogin(function(_0x1d89ed){const _0x16a3b4=_0x3e0a4a;_0x1d89ed?(console['log'](_0x16a3b4(0xd6)),_0x4adb19(!![])):(console[_0x16a3b4(0xcb)](_0x16a3b4(0xe7)),window['location'][_0x16a3b4(0xb5)]='/');});}function validateLogin(_0x527dca){const _0x4ad2c1=a0_0x1896b2;if(!localStorage[_0x4ad2c1(0x9d)]('access_token')||!localStorage[_0x4ad2c1(0x9d)](_0x4ad2c1(0x95))||!localStorage[_0x4ad2c1(0x9d)]('userType')){console[_0x4ad2c1(0xfa)](_0x4ad2c1(0xc6)),_0x527dca(![]);return;}const _0x4c8d0f=_0x4ad2c1(0x9e),_0xdf3628=_0x4ad2c1(0xa5),_0x45bea3={'xoken':localStorage['getItem'](_0x4ad2c1(0x11c)),'userId':localStorage[_0x4ad2c1(0x9d)]('portalUserId'),'userType':localStorage[_0x4ad2c1(0x9d)](_0x4ad2c1(0xb7))};makeApiRequest(_0x4c8d0f,_0xdf3628,_0x45bea3,function(_0x2bc7d4){const _0x5a2f8a=_0x4ad2c1;Object[_0x5a2f8a(0xb0)](_0x2bc7d4[_0x5a2f8a(0x116)])['forEach'](function(_0x3fe82e){localStorage['setItem'](_0x3fe82e,_0x2bc7d4['payload'][_0x3fe82e]);}),_0x527dca(!![]);},function(_0x5333fe){const _0x1948b5=_0x4ad2c1;console[_0x1948b5(0xfa)](_0x1948b5(0xd8),_0x5333fe),_0x527dca(![]);});}function getLocalDate(){const _0x341fa9=new Date(),_0x3a3db0=_0x341fa9['getTimezoneOffset']()*0xea60,_0x3742ce=new Date(_0x341fa9-_0x3a3db0)['toISOString']()['slice'](0x0,0xa);return _0x3742ce;}