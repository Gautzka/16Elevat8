const a0_0x58ccd9=a0_0x5c52;(function(_0x5746ae,_0x59b69e){const _0x487f0d=a0_0x5c52,_0x103e96=_0x5746ae();while(!![]){try{const _0x4eb724=parseInt(_0x487f0d(0x1d8))/0x1*(parseInt(_0x487f0d(0x1c1))/0x2)+parseInt(_0x487f0d(0x1c2))/0x3*(parseInt(_0x487f0d(0x1b6))/0x4)+parseInt(_0x487f0d(0x1b5))/0x5+-parseInt(_0x487f0d(0x1db))/0x6+parseInt(_0x487f0d(0x1d4))/0x7*(parseInt(_0x487f0d(0x21f))/0x8)+-parseInt(_0x487f0d(0x1f4))/0x9*(parseInt(_0x487f0d(0x1d3))/0xa)+-parseInt(_0x487f0d(0x1ea))/0xb*(-parseInt(_0x487f0d(0x20f))/0xc);if(_0x4eb724===_0x59b69e)break;else _0x103e96['push'](_0x103e96['shift']());}catch(_0x2bf327){_0x103e96['push'](_0x103e96['shift']());}}}(a0_0x506a,0xb94e1),document[a0_0x58ccd9(0x214)]('DOMContentLoaded',()=>{initializePage(),setupEventListeners(),initializeSidebar();}));function a0_0x5c52(_0x27c0da,_0x59dc37){const _0x506a1d=a0_0x506a();return a0_0x5c52=function(_0x5c52c4,_0x94d391){_0x5c52c4=_0x5c52c4-0x1a4;let _0x13f33b=_0x506a1d[_0x5c52c4];return _0x13f33b;},a0_0x5c52(_0x27c0da,_0x59dc37);}function initializeSidebar(){const _0x9d40a7=a0_0x58ccd9,_0x27a4fb=document['querySelector'](_0x9d40a7(0x1de)),_0x943f57=document[_0x9d40a7(0x1dd)](_0x9d40a7(0x1b4)),_0x2fcca6=document[_0x9d40a7(0x1dd)](_0x9d40a7(0x218));_0x27a4fb[_0x9d40a7(0x1b1)][_0x9d40a7(0x1e1)]=_0x9d40a7(0x1ac),_0x943f57['addEventListener'](_0x9d40a7(0x216),()=>toggleSidebar(_0x27a4fb,_0x2fcca6));}function toggleSidebar(_0x36c132,_0xb9dfed){const _0x4fce32=a0_0x58ccd9;_0x36c132[_0x4fce32(0x1b1)][_0x4fce32(0x1e1)]===_0x4fce32(0x1ac)?(_0x36c132['style']['transform']=_0x4fce32(0x1c9),_0xb9dfed[_0x4fce32(0x1e2)][_0x4fce32(0x1b3)]='0',_0x36c132[_0x4fce32(0x1b1)][_0x4fce32(0x1e1)]='false'):(_0x36c132[_0x4fce32(0x1e2)][_0x4fce32(0x1ab)]='',_0xb9dfed[_0x4fce32(0x1e2)]['marginLeft']=_0x4fce32(0x21a),_0x36c132[_0x4fce32(0x1b1)]['visible']='true');}async function initializePage(){initDatePicker(),await fetchAndDisplayClassesAvailable_API_CurrentDate(),fetchAndDisplayAttendees();}function setupEventListeners(){const _0x2cba07=a0_0x58ccd9,_0x4876a8=document['getElementById'](_0x2cba07(0x1be)),_0x42c063=document['getElementById'](_0x2cba07(0x22f)),_0x401848=document[_0x2cba07(0x223)]('nextDay'),_0x15fc25=document[_0x2cba07(0x223)]('location-chosen'),_0x68744f=document['getElementById'](_0x2cba07(0x1c6)),_0x233e02=document[_0x2cba07(0x223)](_0x2cba07(0x22d));_0x42c063[_0x2cba07(0x214)](_0x2cba07(0x216),handlePrevDayClick),_0x401848[_0x2cba07(0x214)]('click',handleNextDayClick),_0x4876a8[_0x2cba07(0x214)](_0x2cba07(0x1e0),handleDateChange),_0x15fc25[_0x2cba07(0x214)](_0x2cba07(0x1e0),handleLocationChange),_0x68744f[_0x2cba07(0x214)]('change',handleClassChange),_0x233e02&&_0x233e02[_0x2cba07(0x214)]('click',handleRefreshButtonClick),document[_0x2cba07(0x214)]('click',handleButtonClicks);}async function handlePrevDayClick(){const _0x50de64=a0_0x58ccd9;adjustOneDayDate(-0x1);const _0x3aee93=document[_0x50de64(0x223)](_0x50de64(0x1be))['value'];saveDatePickerSessionStorage(_0x3aee93),await fetchAndDisplayClassesAvailable_API_CurrentDate(),fetchAndDisplayAttendees();}async function handleNextDayClick(){const _0x2b14a7=a0_0x58ccd9;adjustOneDayDate(0x1);const _0xff1579=document[_0x2b14a7(0x223)]('datePicker')[_0x2b14a7(0x1b0)];saveDatePickerSessionStorage(_0xff1579),await fetchAndDisplayClassesAvailable_API_CurrentDate(),fetchAndDisplayAttendees();}async function handleDateChange(){const _0x5b5d28=a0_0x58ccd9,_0x5e45f8=document[_0x5b5d28(0x223)]('datePicker')[_0x5b5d28(0x1b0)];saveDatePickerSessionStorage(_0x5e45f8),await fetchAndDisplayClassesAvailable_API_CurrentDate(),fetchAndDisplayAttendees();}async function handleLocationChange(){await fetchAndDisplayClassesAvailable_API_CurrentDate(),fetchAndDisplayAttendees();}function handleClassChange(){fetchAndDisplayAttendees();}function handleRefreshButtonClick(){fetchAndDisplayAttendees();}function handleButtonClicks(_0x4c984b){const _0x595242=a0_0x58ccd9;if(_0x4c984b[_0x595242(0x1f8)]['classList'][_0x595242(0x1b9)](_0x595242(0x1ef))){_0x4c984b[_0x595242(0x20e)]();const _0xab4aca=_0x4c984b[_0x595242(0x1f8)],_0x2009bf=_0xab4aca['dataset'][_0x595242(0x20d)],_0x12456d=_0xab4aca[_0x595242(0x1b1)][_0x595242(0x1f7)],_0x516da3=_0xab4aca[_0x595242(0x1b1)]['classDateTime'];checkInParticipant(_0x2009bf,_0x12456d,_0x516da3,_0xab4aca);}else{if(_0x4c984b['target'][_0x595242(0x1ec)][_0x595242(0x1b9)]('noshow-button')){_0x4c984b[_0x595242(0x20e)]();const _0x55c605=_0x4c984b[_0x595242(0x1f8)],_0x57c6cc=_0x55c605[_0x595242(0x1b1)]['memberBookingId'];cancelBooking_resolve(_0x57c6cc)['then'](_0x40529c=>{const _0x34e287=_0x595242,_0x5caaab=_0x55c605[_0x34e287(0x208)];_0x5caaab[_0x34e287(0x229)]='';const _0x29528c=document['createElement'](_0x34e287(0x1dc));_0x29528c[_0x34e287(0x22a)]=_0x34e287(0x222),_0x5caaab[_0x34e287(0x1d9)](_0x29528c);})[_0x595242(0x1fa)](_0x534c24=>{const _0x15ad2d=_0x595242;console[_0x15ad2d(0x1d2)]('Error\x20during\x20No\x20Show\x20API\x20call:',_0x534c24);});}}}function fetchAndDisplayAttendees(){const _0xbdf503=a0_0x58ccd9,_0x56aa7f=document[_0xbdf503(0x223)](_0xbdf503(0x1c6)),_0x5da60f=document[_0xbdf503(0x223)]('datePicker'),_0x5c627d=_0x56aa7f['options'][_0x56aa7f[_0xbdf503(0x213)]],_0x531260=_0x5c627d['value'],_0x2818d5=_0x5c627d[_0xbdf503(0x22a)][_0xbdf503(0x21d)]('\x20'),_0x690041=_0x2818d5[0x0],_0x6aa81a=_0x2818d5['slice'](0x1)[_0xbdf503(0x1e6)]('\x20'),_0x56dd2e=_0x5da60f['value'],_0x4c94d9=document[_0xbdf503(0x223)](_0xbdf503(0x1d5)),_0xfb2b11=_0x4c94d9['options'][_0x4c94d9[_0xbdf503(0x213)]]['text'];if(_0x5c627d[_0xbdf503(0x22a)]===_0xbdf503(0x20a)){const _0xfac11e=document[_0xbdf503(0x1dd)](_0xbdf503(0x200));_0xfac11e['innerHTML']='';const _0x19952d=document['getElementById']('title-coachview');_0x19952d['textContent']=_0x5c627d['textContent'];}else checkAttendees(_0x531260,_0x56dd2e,_0x6aa81a),updateTitle(_0x690041,_0x6aa81a,_0x56dd2e,_0xfb2b11);}function initDatePicker(){const _0x2c9d06=a0_0x58ccd9,_0x55eb62=document[_0x2c9d06(0x223)](_0x2c9d06(0x1be));let _0x4d5850=sessionStorage[_0x2c9d06(0x217)](_0x2c9d06(0x206)),_0x5c7d08=sessionStorage[_0x2c9d06(0x217)](_0x2c9d06(0x1cc));if(_0x4d5850&&_0x5c7d08&&isWithinValidityPeriod(_0x5c7d08,0.5))_0x55eb62[_0x2c9d06(0x1b0)]=_0x4d5850;else{const _0x2fe610=getLocalDate();_0x55eb62[_0x2c9d06(0x1b0)]=_0x2fe610,saveDatePickerSessionStorage(_0x2fe610);}}function saveDatePickerSessionStorage(_0x5cb278){const _0x2ad432=a0_0x58ccd9;sessionStorage[_0x2ad432(0x226)]('selectedDate',_0x5cb278);const _0x589d5b=new Date()[_0x2ad432(0x203)]();sessionStorage[_0x2ad432(0x226)](_0x2ad432(0x1cc),_0x589d5b);}function adjustOneDayDate(_0x5b84dc){const _0x3fb8bc=a0_0x58ccd9,_0x32d316=document[_0x3fb8bc(0x223)]('datePicker'),_0x619ab7=new Date(_0x32d316[_0x3fb8bc(0x1b0)]+'T00:00:00');_0x619ab7[_0x3fb8bc(0x21c)](_0x619ab7['getDate']()+_0x5b84dc),_0x32d316[_0x3fb8bc(0x1b0)]=formatDate(_0x619ab7);}function a0_0x506a(){const _0x3639f9=['textContent','errorAPICheckLogin\x20-\x20login\x20validated','cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20network\x20error\x20and\x20retry','refresh-attendees','log','prevDay','\x20-\x20','long','onerror','gzip,\x20deflate,\x20br,\x20zstd','success','length','onload','en-AU','forEach','name-attendee','transform','true','https://crossfit168.clubfit.net.au/api/v1/booking/book-class-participant-checkin','empty','attendee-picture','value','dataset','cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20retry','marginLeft','.toggle-button','1633315FZxvcf','4VAqxNZ','classDateTime','href','contains','Authorization','en-US,en;q=0.5','Error\x20fetching\x20classes:','application/json','datePicker','Error\x20during\x20API\x20call:','statusCode','80764ShNIKy','1154565JqLfxk','https://clubfitassets.s3.ap-southeast-2.amazonaws.com/common/avatar_default.png','toLocaleDateString','https://crossfit168.clubfit.net.au/api/v1/booking/class-participants','class-chosen','src','errorAPICheckLogin\x20-\x20function\x20called','translateX(-100%)','cancelBooking_resolve\x20-\x20Cancellation\x20failed','buttons-checkin-noshow','timestampLastChanged','cors','access_token','memberBookingId','toISOString','same-site','error','13026170XORSFd','14fVBUnp','location-chosen','classSchedule','portalUserId','32BbZLIE','appendChild','payload:\x20','8055678UoCRPm','div','querySelector','.sidebar','errorAPICheckLogin\x20-\x20login\x20not\x20validated','change','visible','style','setRequestHeader','checkAttendees\x20-\x20Error\x20while\x20checking\x20attendees:','trailers','join','parse','cancelBooking_resolve\x20-\x20Network\x20error\x20while\x20cancelling\x20booking','className','20801TorakT','getDate','classList','createElement','json','checkin-button','Confirmed','POST','classTime','img','9JTEmGk','title-coachview','validateLogin\x20-\x20Required\x20session\x20storage\x20items\x20are\x20missing','classScheduleId','target','Bearer\x20','catch','add','Error\x20while\x20cancelling\x20booking,\x20xhr.status:\x20','payload','memberPhotoLocation','location','.class-attendees','noshow-button','https://admin.clubfit.net.au/api/v1/account/validate','getTime','https://myaccount.clubfit.net.au','userType','selectedDate','cancelBooking_resolve\x20-\x20Network\x20error','parentElement','stringify','No\x20class\x20found','Accept','replace','userId','preventDefault','6420bHBYvG','class','option','HTTP\x20error!\x20status:\x20','selectedIndex','addEventListener','status','click','getItem','.outside-sidebar','w-button','15rem','No\x20location\x20selected.','setDate','split','then','1555248hSXyPE','https://crossfit168.clubfit.net.au/api/v1/booking/search-classes-current-date','responseText','No\x20Show','getElementById','number','getFullYear','setItem','Check-in\x20failed:','errors','innerHTML'];a0_0x506a=function(){return _0x3639f9;};return a0_0x506a();}function isWithinValidityPeriod(_0x81368c,_0x15344){const _0x4c2704=a0_0x58ccd9,_0x32dbf4=new Date()[_0x4c2704(0x203)](),_0x94060c=(_0x32dbf4-_0x81368c)/(0x3e8*0x3c*0x3c);return _0x94060c<=_0x15344;}function formatDate(_0x5aad98){const _0x358c1b=a0_0x58ccd9;let _0x59a2b0=new Date(_0x5aad98),_0x38117d=''+(_0x59a2b0['getMonth']()+0x1),_0x41aad0=''+_0x59a2b0[_0x358c1b(0x1eb)](),_0x3d839e=_0x59a2b0[_0x358c1b(0x225)]();if(_0x38117d[_0x358c1b(0x1a6)]<0x2)_0x38117d='0'+_0x38117d;if(_0x41aad0[_0x358c1b(0x1a6)]<0x2)_0x41aad0='0'+_0x41aad0;return[_0x3d839e,_0x38117d,_0x41aad0][_0x358c1b(0x1e6)]('-');}async function fetchAndDisplayClassesAvailable_API_CurrentDate(){const _0xa9f946=a0_0x58ccd9,_0x21e716=document['getElementById'](_0xa9f946(0x1d5)),_0x33e7ce=document['getElementById'](_0xa9f946(0x1be)),_0x302cd2=document[_0xa9f946(0x223)](_0xa9f946(0x1c6));if(!_0x21e716||!_0x33e7ce||!_0x302cd2){console['error']('Required\x20elements\x20not\x20found\x20in\x20the\x20DOM.');return;}const _0x32a2e3=_0x21e716['value'],_0x12eba7=_0x33e7ce[_0xa9f946(0x1b0)][_0xa9f946(0x20c)](/-/g,'/');if(!_0x32a2e3){console['log'](_0xa9f946(0x21b));return;}const _0x24a9f7={'ALX':0x2,'CBD':0x1,'MVL':0x4},_0x3476a9=_0x24a9f7[_0x32a2e3],_0x54ea32=localStorage[_0xa9f946(0x217)]('userId');if(!_0x54ea32||!_0x3476a9){console[_0xa9f946(0x1d2)]('Required\x20information\x20is\x20missing\x20from\x20local\x20storage\x20or\x20location\x20ID\x20map.');return;}const _0x1a3885={'UserId':'','clubId':_0x3476a9,'selectedDate':_0x12eba7,'department':'Member','imageHeight':0x12c,'imageWidth':0x1f4};console[_0xa9f946(0x22e)](_0xa9f946(0x1da)+_0x1a3885);const _0x4ed411=getLocalDate();if(_0x12eba7<_0x4ed411)displayClassAvailable([]);else{const _0x218402=_0xa9f946(0x220);try{const _0x4b5814=await makeApiRequest(_0x218402,_0xa9f946(0x1f1),_0x1a3885);displayClassAvailable(_0x4b5814['payload']);}catch(_0x280148){console[_0xa9f946(0x1d2)](_0xa9f946(0x1bc),_0x280148);}}}async function makeApiRequest(_0x5e006d,_0x273683,_0x5e88b4){const _0x5b82c8=a0_0x58ccd9,_0x5b3d1f=localStorage[_0x5b82c8(0x217)](_0x5b82c8(0x1ce)),_0x5490a6={'Content-Type':'application/json','Accept':_0x5b82c8(0x1bd),'Authorization':_0x5b82c8(0x1f9)+_0x5b3d1f},_0x7b11d8={'method':_0x273683,'headers':_0x5490a6,'body':JSON[_0x5b82c8(0x209)](_0x5e88b4)},_0x5bb85b=await fetch(_0x5e006d,_0x7b11d8);if(!_0x5bb85b['ok'])throw new Error(_0x5b82c8(0x212)+_0x5bb85b[_0x5b82c8(0x215)]);return await _0x5bb85b[_0x5b82c8(0x1ee)]();}function displayClassAvailable(_0x16f61a){const _0x3d7843=a0_0x58ccd9,_0x4ef15c=document[_0x3d7843(0x223)]('class-chosen');_0x4ef15c[_0x3d7843(0x229)]='';if(_0x16f61a[_0x3d7843(0x1a6)]===0x0){const _0x4ac267=document[_0x3d7843(0x1ed)](_0x3d7843(0x211));_0x4ac267[_0x3d7843(0x1b0)]='',_0x4ac267[_0x3d7843(0x22a)]=_0x3d7843(0x20a),_0x4ef15c[_0x3d7843(0x1d9)](_0x4ac267);return;}_0x16f61a[_0x3d7843(0x1a9)](_0x109ae3=>{const _0x330a78=_0x3d7843,_0x340206=document['createElement']('option');_0x340206[_0x330a78(0x1b0)]=_0x109ae3[_0x330a78(0x1f7)],_0x340206[_0x330a78(0x22a)]=_0x109ae3['className']+'\x20'+_0x109ae3[_0x330a78(0x1f2)],_0x4ef15c[_0x330a78(0x1d9)](_0x340206);});}function updateTitle(_0xb01771,_0xd673b3,_0x399d72,_0x427e61){const _0x3fcd01=a0_0x58ccd9,_0x1e2c20=document['getElementById'](_0x3fcd01(0x1f5)),_0x5e4d99=new Date(_0x399d72),_0x3a7285=_0x5e4d99[_0x3fcd01(0x1c4)](_0x3fcd01(0x1a8),{'weekday':_0x3fcd01(0x231)}),_0x3fb13f=_0x3a7285+'\x20'+_0x5e4d99[_0x3fcd01(0x1eb)]()+'/'+(_0x5e4d99['getMonth']()+0x1),_0x1e09de=_0xb01771+'\x20'+_0xd673b3+_0x3fcd01(0x230)+_0x3fb13f+'\x20-\x20'+_0x427e61;_0x1e2c20[_0x3fcd01(0x22a)]=_0x1e09de;}async function checkAttendees(_0xc37437,_0x22e064,_0x5b2c50){const _0x2f5b5c=a0_0x58ccd9,_0x2fc77a=_0x2f5b5c(0x1c5),_0x521e6f={'classScheduleId':_0xc37437,'selectedDate':_0x22e064,'classTime':_0x5b2c50},_0x19844d=localStorage[_0x2f5b5c(0x217)](_0x2f5b5c(0x1ce)),_0x3d4561={'Content-Type':_0x2f5b5c(0x1bd),'Accept':'application/json','Authorization':_0x2f5b5c(0x1f9)+_0x19844d};try{const _0x22cfd8=await fetch(_0x2fc77a,{'method':_0x2f5b5c(0x1f1),'headers':_0x3d4561,'body':JSON[_0x2f5b5c(0x209)](_0x521e6f)});if(!_0x22cfd8['ok'])throw new Error('HTTP\x20error!\x20status:\x20'+_0x22cfd8[_0x2f5b5c(0x215)]);const _0x17facb=await _0x22cfd8[_0x2f5b5c(0x1ee)](),_0x24b3e2=_0x17facb[_0x2f5b5c(0x1fd)];showAttendees(_0x24b3e2);}catch(_0xff85dd){console[_0x2f5b5c(0x1d2)](_0x2f5b5c(0x1e4),_0xff85dd),errorAPICheckLogin();}}function showAttendees(_0x33e68d){const _0x17cb1f=a0_0x58ccd9,_0x3e2106=document[_0x17cb1f(0x1dd)](_0x17cb1f(0x200));_0x3e2106[_0x17cb1f(0x229)]='',_0x33e68d[_0x17cb1f(0x1a9)](_0x12c992=>{const _0x5d756a=_0x17cb1f,_0x18c189=document[_0x5d756a(0x1ed)](_0x5d756a(0x1dc));_0x18c189[_0x5d756a(0x1ec)][_0x5d756a(0x1fb)]('attendee-class');const _0x47c039=document['createElement'](_0x5d756a(0x1f3));_0x47c039[_0x5d756a(0x1c7)]=_0x12c992[_0x5d756a(0x1fe)]||_0x5d756a(0x1c3),_0x47c039['alt']=_0x12c992['fullName'],_0x47c039['classList'][_0x5d756a(0x1fb)](_0x5d756a(0x1af));const _0x3b765a=document[_0x5d756a(0x1ed)]('div');_0x3b765a['classList'][_0x5d756a(0x1fb)](_0x5d756a(0x1aa)),_0x3b765a[_0x5d756a(0x22a)]=_0x12c992['fullName'];const _0x1f493e=document[_0x5d756a(0x1ed)](_0x5d756a(0x1dc));_0x1f493e['classList'][_0x5d756a(0x1fb)](_0x5d756a(0x1cb));if(_0x12c992['hasAttended']){const _0x115de0=document['createElement'](_0x5d756a(0x1dc));_0x115de0['textContent']='Confirmed',_0x1f493e[_0x5d756a(0x1d9)](_0x115de0);}else{const _0x5f59e7=document[_0x5d756a(0x1ed)]('a');_0x5f59e7[_0x5d756a(0x1b8)]='#',_0x5f59e7[_0x5d756a(0x1ec)][_0x5d756a(0x1fb)](_0x5d756a(0x1ef),_0x5d756a(0x219)),_0x5f59e7[_0x5d756a(0x22a)]='Check-in',_0x5f59e7['dataset']['userId']=_0x12c992['number'],_0x5f59e7[_0x5d756a(0x1b1)][_0x5d756a(0x1e9)]=_0x12c992[_0x5d756a(0x1d6)][_0x5d756a(0x210)][_0x5d756a(0x1e9)],_0x5f59e7['dataset']['classTime']=_0x12c992['classSchedule'][_0x5d756a(0x1f2)],_0x5f59e7[_0x5d756a(0x1b1)][_0x5d756a(0x1f7)]=_0x12c992[_0x5d756a(0x1d6)]['classScheduleId'],_0x5f59e7[_0x5d756a(0x1b1)]['classDateTime']=_0x12c992[_0x5d756a(0x1b7)];const _0x46e04b=document['createElement']('a');_0x46e04b['href']='#',_0x46e04b['classList'][_0x5d756a(0x1fb)](_0x5d756a(0x201),_0x5d756a(0x219)),_0x46e04b['textContent']=_0x5d756a(0x222),_0x46e04b[_0x5d756a(0x1b1)]['userId']=_0x12c992[_0x5d756a(0x224)],_0x46e04b[_0x5d756a(0x1b1)][_0x5d756a(0x1e9)]=_0x12c992[_0x5d756a(0x1d6)][_0x5d756a(0x210)][_0x5d756a(0x1e9)],_0x46e04b['dataset'][_0x5d756a(0x1f2)]=_0x12c992[_0x5d756a(0x1d6)][_0x5d756a(0x1f2)],_0x46e04b[_0x5d756a(0x1b1)][_0x5d756a(0x1f7)]=_0x12c992[_0x5d756a(0x1d6)][_0x5d756a(0x1f7)],_0x46e04b[_0x5d756a(0x1b1)][_0x5d756a(0x1cf)]=_0x12c992['id'],_0x1f493e[_0x5d756a(0x1d9)](_0x5f59e7),_0x1f493e[_0x5d756a(0x1d9)](_0x46e04b);}_0x18c189['appendChild'](_0x47c039),_0x18c189[_0x5d756a(0x1d9)](_0x3b765a),_0x18c189[_0x5d756a(0x1d9)](_0x1f493e),_0x3e2106[_0x5d756a(0x1d9)](_0x18c189);});}async function checkInParticipant(_0x98983c,_0x2d48ab,_0x975277,_0xa67025){const _0x1c7282=a0_0x58ccd9,_0x542cb9=_0x1c7282(0x1ad),_0x3e17b0={'memberNumber':_0x98983c,'classScheduleId':_0x2d48ab,'classDateTime':_0x975277},_0x2f1bde=localStorage['getItem']('access_token'),_0x37d9df={'Accept':'application/json','Accept-Language':_0x1c7282(0x1bb),'Accept-Encoding':_0x1c7282(0x1a4),'Authorization':'Bearer\x20'+_0x2f1bde,'Content-Type':_0x1c7282(0x1bd),'Origin':_0x1c7282(0x204),'Connection':'keep-alive','Referer':'https://myaccount.clubfit.net.au/','Sec-Fetch-Dest':_0x1c7282(0x1ae),'Sec-Fetch-Mode':_0x1c7282(0x1cd),'Sec-Fetch-Site':_0x1c7282(0x1d1),'Priority':'u=1','TE':_0x1c7282(0x1e5)};try{const _0x336954=await fetch(_0x542cb9,{'method':'POST','headers':_0x37d9df,'body':JSON[_0x1c7282(0x209)](_0x3e17b0)});if(!_0x336954['ok'])throw new Error(_0x1c7282(0x212)+_0x336954['status']);const _0xe9cf84=await _0x336954[_0x1c7282(0x1ee)]();if(_0xe9cf84[_0x1c7282(0x1fd)]===_0x1c7282(0x1a5)){const _0xe9fc59=_0xa67025['parentElement'];_0xe9fc59[_0x1c7282(0x229)]='';const _0x46d2b6=document[_0x1c7282(0x1ed)]('div');_0x46d2b6['textContent']=_0x1c7282(0x1f0),_0xe9fc59[_0x1c7282(0x1d9)](_0x46d2b6);}else console[_0x1c7282(0x1d2)](_0x1c7282(0x227),_0xe9cf84[_0x1c7282(0x228)]);}catch(_0x16ced5){console['error'](_0x1c7282(0x1bf),_0x16ced5);}}function cancelBooking_resolve(_0x3d95db,_0x46321a=0x0){return new Promise((_0x55d09b,_0x3ea855)=>{const _0x9f0976=a0_0x5c52;var _0x23129e=localStorage['getItem'](_0x9f0976(0x1ce)),_0x26b4e2='https://crossfit168.clubfit.net.au/api/v1/booking/cancel/'+_0x3d95db,_0x5729fc=new XMLHttpRequest();_0x5729fc['open'](_0x9f0976(0x1f1),_0x26b4e2,!![]),_0x5729fc[_0x9f0976(0x1e3)]('Content-Type',_0x9f0976(0x1bd)),_0x5729fc['setRequestHeader'](_0x9f0976(0x20b),_0x9f0976(0x1bd)),_0x5729fc[_0x9f0976(0x1e3)](_0x9f0976(0x1ba),_0x9f0976(0x1f9)+_0x23129e),_0x5729fc[_0x9f0976(0x1a7)]=function(){const _0x9d7991=_0x9f0976,_0x383f95=JSON[_0x9d7991(0x1e7)](_0x5729fc[_0x9d7991(0x221)]);_0x5729fc[_0x9d7991(0x215)]>=0xc8&&_0x5729fc[_0x9d7991(0x215)]<0x12c?(_0x383f95[_0x9d7991(0x1c0)]!==0xc8&&console['log']('Response\x20received:',_0x5729fc[_0x9d7991(0x221)]),_0x55d09b(_0x5729fc[_0x9d7991(0x221)])):(console[_0x9d7991(0x1d2)](_0x9d7991(0x1fc),_0x5729fc[_0x9d7991(0x215)]),console[_0x9d7991(0x1d2)]('Error\x20details:',_0x5729fc['responseText']),_0x46321a<0x1?errorAPICheckLogin(function(_0x4b0b42){const _0x247795=_0x9d7991;_0x4b0b42?cancelBooking_resolve(_0x3d95db,_0x46321a+0x1)['then'](_0x55d09b)[_0x247795(0x1fa)](_0x3ea855):_0x3ea855(new Error(_0x247795(0x1b2)));}):_0x3ea855(new Error(_0x9d7991(0x1ca))));},_0x5729fc[_0x9f0976(0x232)]=function(){const _0x2e90fc=_0x9f0976;console[_0x2e90fc(0x1d2)](_0x2e90fc(0x1e8)),_0x46321a<0x1?errorAPICheckLogin(function(_0xec6cf3){const _0x5ac8e8=_0x2e90fc;_0xec6cf3?cancelBooking_resolve(_0x3d95db,_0x46321a+0x1)[_0x5ac8e8(0x21e)](_0x55d09b)[_0x5ac8e8(0x1fa)](_0x3ea855):_0x3ea855(new Error(_0x5ac8e8(0x22c)));}):_0x3ea855(new Error(_0x2e90fc(0x207)));},_0x5729fc['send']();});}function errorAPICheckLogin(_0x5a05df){const _0x5607de=a0_0x58ccd9;console[_0x5607de(0x22e)](_0x5607de(0x1c8)),validateLogin(function(_0x53a442){const _0x2c5029=_0x5607de;_0x53a442?(console[_0x2c5029(0x22e)](_0x2c5029(0x22b)),_0x5a05df(!![])):(console[_0x2c5029(0x22e)](_0x2c5029(0x1df)),window[_0x2c5029(0x1ff)][_0x2c5029(0x1b8)]='/');});}function validateLogin(_0x453c0f){const _0x3fb2cc=a0_0x58ccd9;if(!localStorage[_0x3fb2cc(0x217)](_0x3fb2cc(0x1ce))||!localStorage[_0x3fb2cc(0x217)](_0x3fb2cc(0x20d))||!localStorage[_0x3fb2cc(0x217)]('userType')){console['error'](_0x3fb2cc(0x1f6)),_0x453c0f(![]);return;}const _0x2f5748=_0x3fb2cc(0x202),_0x18acf0=_0x3fb2cc(0x1f1),_0x2cd686={'xoken':localStorage[_0x3fb2cc(0x217)]('refresh_token'),'userId':localStorage[_0x3fb2cc(0x217)](_0x3fb2cc(0x1d7)),'userType':localStorage[_0x3fb2cc(0x217)](_0x3fb2cc(0x205))};makeApiRequest(_0x2f5748,_0x18acf0,_0x2cd686,function(_0x5052e1){const _0x58662d=_0x3fb2cc;Object['keys'](_0x5052e1[_0x58662d(0x1fd)])[_0x58662d(0x1a9)](function(_0x103014){const _0x26ec73=_0x58662d;localStorage[_0x26ec73(0x226)](_0x103014,_0x5052e1['payload'][_0x103014]);}),_0x453c0f(!![]);},function(_0x1d7fea){const _0x2bad02=_0x3fb2cc;console[_0x2bad02(0x1d2)]('validateLogin\x20-\x20Validation\x20failed:',_0x1d7fea),_0x453c0f(![]);});}function getLocalDate(){const _0x5084d1=a0_0x58ccd9,_0x38193b=new Date(),_0x4f6028=_0x38193b['getTimezoneOffset']()*0xea60,_0x38a388=new Date(_0x38193b-_0x4f6028)[_0x5084d1(0x1d0)]()['slice'](0x0,0xa);return _0x38a388;}