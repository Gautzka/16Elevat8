const a0_0x3fc16a=a0_0x3d9b;(function(_0x390e5c,_0x5a00e6){const _0x14450d=a0_0x3d9b,_0x261adf=_0x390e5c();while(!![]){try{const _0x3020a4=-parseInt(_0x14450d(0x152))/0x1+-parseInt(_0x14450d(0x1ba))/0x2*(parseInt(_0x14450d(0x156))/0x3)+parseInt(_0x14450d(0x17f))/0x4*(-parseInt(_0x14450d(0x1c3))/0x5)+parseInt(_0x14450d(0x1c6))/0x6*(parseInt(_0x14450d(0x1a7))/0x7)+parseInt(_0x14450d(0x1a6))/0x8+-parseInt(_0x14450d(0x191))/0x9+-parseInt(_0x14450d(0x183))/0xa*(-parseInt(_0x14450d(0x187))/0xb);if(_0x3020a4===_0x5a00e6)break;else _0x261adf['push'](_0x261adf['shift']());}catch(_0xd53af8){_0x261adf['push'](_0x261adf['shift']());}}}(a0_0x1f2d,0x728d0),document[a0_0x3fc16a(0x16b)](a0_0x3fc16a(0x19f),()=>{initializePage(),setupEventListeners(),initializeSidebar();}));function initializeSidebar(){const _0x3be6bf=a0_0x3fc16a,_0x56740b=document[_0x3be6bf(0x17b)](_0x3be6bf(0x1c5)),_0xa70b87=document['querySelector']('.toggle-button'),_0x3a3a86=document[_0x3be6bf(0x17b)]('.outside-sidebar');_0x56740b[_0x3be6bf(0x1a1)]['visible']=_0x3be6bf(0x1a0),_0xa70b87[_0x3be6bf(0x16b)](_0x3be6bf(0x1ac),()=>toggleSidebar(_0x56740b,_0x3a3a86));}function toggleSidebar(_0x4077cd,_0x2bbebc){const _0xebb639=a0_0x3fc16a;_0x4077cd[_0xebb639(0x1a1)]['visible']===_0xebb639(0x1a0)?(_0x4077cd[_0xebb639(0x188)][_0xebb639(0x1c0)]='translateX(-100%)',_0x2bbebc[_0xebb639(0x188)][_0xebb639(0x161)]='0',_0x4077cd[_0xebb639(0x1a1)]['visible']=_0xebb639(0x18c)):(_0x4077cd[_0xebb639(0x188)][_0xebb639(0x1c0)]='',_0x2bbebc['style']['marginLeft']=_0xebb639(0x176),_0x4077cd['dataset'][_0xebb639(0x16a)]=_0xebb639(0x1a0));}async function initializePage(){initDatePicker(),await fetchAndDisplayClassesAvailable_API(!![]),fetchAndDisplayAttendees();}function setupEventListeners(){const _0x4c7775=a0_0x3fc16a,_0x4158cc=document[_0x4c7775(0x1b6)](_0x4c7775(0x14a)),_0x3ed7b3=document[_0x4c7775(0x1b6)](_0x4c7775(0x197)),_0xbf6689=document[_0x4c7775(0x1b6)](_0x4c7775(0x1a8)),_0x356e54=document['getElementById']('location-chosen'),_0x37eae1=document[_0x4c7775(0x1b6)](_0x4c7775(0x185)),_0xe39664=document[_0x4c7775(0x1b6)](_0x4c7775(0x150));_0x3ed7b3['addEventListener'](_0x4c7775(0x1ac),handlePrevDayClick),_0xbf6689[_0x4c7775(0x16b)](_0x4c7775(0x1ac),handleNextDayClick),_0x4158cc[_0x4c7775(0x16b)]('change',handleDateChange),_0x356e54[_0x4c7775(0x16b)](_0x4c7775(0x17d),handleLocationChange),_0x37eae1[_0x4c7775(0x16b)]('change',handleClassChange),_0xe39664&&_0xe39664['addEventListener'](_0x4c7775(0x1ac),handleRefreshButtonClick),document[_0x4c7775(0x16b)]('click',handleButtonClicks);}async function handlePrevDayClick(){const _0xfabdcb=a0_0x3fc16a;adjustOneDayDate(-0x1);const _0x29e953=document[_0xfabdcb(0x1b6)](_0xfabdcb(0x14a))[_0xfabdcb(0x149)];saveDatePickerSessionStorage(_0x29e953),await fetchAndDisplayClassesAvailable_Choose(),fetchAndDisplayAttendees();}async function handleNextDayClick(){const _0x51fbfe=a0_0x3fc16a;adjustOneDayDate(0x1);const _0x4bd589=document[_0x51fbfe(0x1b6)](_0x51fbfe(0x14a))[_0x51fbfe(0x149)];saveDatePickerSessionStorage(_0x4bd589),await fetchAndDisplayClassesAvailable_Choose(),fetchAndDisplayAttendees();}async function handleDateChange(){const _0x9234b1=a0_0x3fc16a,_0x14330b=document['getElementById'](_0x9234b1(0x14a))[_0x9234b1(0x149)];saveDatePickerSessionStorage(_0x14330b),await fetchAndDisplayClassesAvailable_Choose(),fetchAndDisplayAttendees();}async function handleLocationChange(){await fetchAndDisplayClassesAvailable_Choose(),fetchAndDisplayAttendees();}function handleClassChange(){fetchAndDisplayAttendees();}function handleRefreshButtonClick(){fetchAndDisplayAttendees();}function handleButtonClicks(_0x1f8099){const _0x16aceb=a0_0x3fc16a;if(_0x1f8099[_0x16aceb(0x18d)][_0x16aceb(0x15d)][_0x16aceb(0x180)]('checkin-button')){_0x1f8099[_0x16aceb(0x169)]();const _0x4ca9dd=_0x1f8099[_0x16aceb(0x18d)],_0x41c067=_0x4ca9dd['dataset'][_0x16aceb(0x196)],_0x50fb3f=_0x4ca9dd[_0x16aceb(0x1a1)]['classScheduleId'],_0x36923c=_0x4ca9dd['dataset'][_0x16aceb(0x1ce)];checkInParticipant(_0x41c067,_0x50fb3f,_0x36923c,_0x4ca9dd);}else{if(_0x1f8099['target'][_0x16aceb(0x15d)][_0x16aceb(0x180)](_0x16aceb(0x193))){_0x1f8099[_0x16aceb(0x169)]();const _0x454a6a=_0x1f8099[_0x16aceb(0x18d)],_0x505986=_0x454a6a[_0x16aceb(0x1a1)][_0x16aceb(0x1d4)];cancelBooking_resolve(_0x505986)[_0x16aceb(0x1d2)](_0x1ca11d=>{const _0x28fde0=_0x16aceb,_0x1056df=_0x454a6a['parentElement'];_0x1056df['innerHTML']='';const _0x4b7d96=document[_0x28fde0(0x1a9)](_0x28fde0(0x1b1));_0x4b7d96[_0x28fde0(0x1bd)]='No\x20Show',_0x1056df[_0x28fde0(0x1d9)](_0x4b7d96);})[_0x16aceb(0x179)](_0x2bde98=>{const _0x57a696=_0x16aceb;console['error'](_0x57a696(0x1da),_0x2bde98);});}}}function fetchAndDisplayAttendees(){const _0x4d062d=a0_0x3fc16a,_0x245ad5=document['getElementById'](_0x4d062d(0x185)),_0x55231c=document[_0x4d062d(0x1b6)](_0x4d062d(0x14a)),_0x413d5e=_0x245ad5['options'][_0x245ad5[_0x4d062d(0x1bf)]],_0x1937dc=_0x413d5e['value'],_0x2122a3=_0x413d5e[_0x4d062d(0x1bd)][_0x4d062d(0x17c)]('\x20'),_0x306034=_0x2122a3[0x0],_0x1a0b27=_0x2122a3[_0x4d062d(0x178)](0x1)[_0x4d062d(0x153)]('\x20'),_0x236c39=_0x55231c[_0x4d062d(0x149)],_0xc410c0=document['getElementById']('location-chosen'),_0x17cff4=_0xc410c0[_0x4d062d(0x1a3)][_0xc410c0[_0x4d062d(0x1bf)]][_0x4d062d(0x1bb)];if(_0x413d5e[_0x4d062d(0x1bd)]===_0x4d062d(0x14b)){const _0x4d7ea3=document[_0x4d062d(0x17b)]('.class-attendees');_0x4d7ea3[_0x4d062d(0x15f)]='';const _0xf47a4e=document[_0x4d062d(0x1b6)]('title-coachview');_0xf47a4e['textContent']=_0x413d5e[_0x4d062d(0x1bd)];}else checkAttendees(_0x1937dc,_0x236c39,_0x1a0b27),updateTitle(_0x306034,_0x1a0b27,_0x236c39,_0x17cff4);}function initDatePicker(){const _0x5f1d76=a0_0x3fc16a,_0x3d2bbd=document[_0x5f1d76(0x1b6)](_0x5f1d76(0x14a));let _0x360548=sessionStorage[_0x5f1d76(0x1a4)](_0x5f1d76(0x168)),_0xc73201=sessionStorage[_0x5f1d76(0x1a4)](_0x5f1d76(0x1d3));if(_0x360548&&_0xc73201&&isWithinValidityPeriod(_0xc73201,0.5))_0x3d2bbd[_0x5f1d76(0x149)]=_0x360548;else{const _0x14ca87=getLocalDate();_0x3d2bbd[_0x5f1d76(0x149)]=_0x14ca87,saveDatePickerSessionStorage(_0x14ca87);}}function saveDatePickerSessionStorage(_0x148584){const _0x5abdef=a0_0x3fc16a;sessionStorage[_0x5abdef(0x184)](_0x5abdef(0x168),_0x148584);const _0x396f8c=new Date()[_0x5abdef(0x173)]();sessionStorage['setItem'](_0x5abdef(0x1d3),_0x396f8c);}function a0_0x1f2d(){const _0x47cf5b=['classList','Error\x20during\x20API\x20call:','innerHTML','https://crossfit168.clubfit.net.au/api/v1/booking/search-classes-current-date','marginLeft','validateLogin\x20-\x20Validation\x20failed:','Required\x20information\x20is\x20missing\x20from\x20local\x20storage\x20or\x20location\x20ID\x20map.','trailers','classSchedule','application/json','errorAPICheckLogin\x20-\x20function\x20called','selectedDate','preventDefault','visible','addEventListener','fullName','access_token','Bearer\x20','setRequestHeader','stringify','u=1','Content-Type','getTime','status','https://crossfit168.clubfit.net.au/api/v1/booking/class-participants','15rem','.class-attendees','slice','catch','https://crossfit168.clubfit.net.au/api/v1/booking/book-class-participant-checkin','querySelector','split','change','keys','735564ukmqbV','contains','No\x20Show','long','456340ZTJDtE','setItem','class-chosen','json','209sCHsnP','style','setDate','Error\x20fetching\x20classes:','HTTP\x20error!\x20status:\x20','false','target','classTime','en-AU','T00:00:00','4798197whtIft','attendee-picture','noshow-button','cancelBooking_resolve\x20-\x20Network\x20error','title-coachview','userId','prevDay','https://myaccount.clubfit.net.au','parse','cancelBooking_resolve\x20-\x20Network\x20error\x20while\x20cancelling\x20booking','w-button','src','forEach','userType','DOMContentLoaded','true','dataset','POST','options','getItem','replace','4595360LxtXPV','889qvklwf','nextDay','createElement','errorAPICheckLogin\x20-\x20login\x20not\x20validated','attendee-class','click','gzip,\x20deflate,\x20br,\x20zstd','checkin-button','https://clubfitassets.s3.ap-southeast-2.amazonaws.com/common/avatar_default.png','hasAttended','div','alt','\x20-\x20','keep-alive','en-US,en;q=0.5','getElementById','getDate','location-chosen','statusCode','4RseAiX','text','Error\x20details:','textContent','cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20network\x20error\x20and\x20retry','selectedIndex','transform','length','setHours','5nSrwbd','same-site','.sidebar','31602JBWuCy','img','error','class','add','Check-in\x20failed:','classScheduleId','No\x20location\x20selected.','classDateTime','getFullYear','Response\x20received:','success','then','timestampLastChanged','memberBookingId','payload','errors','href','errorAPICheckLogin\x20-\x20login\x20validated','appendChild','Error\x20during\x20No\x20Show\x20API\x20call:','getMonth','value','datePicker','No\x20class\x20found','responseText','https://myaccount.clubfit.net.au/','className','location','refresh-attendees','cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20retry','913563BlqJJc','join','checkAttendees\x20-\x20Error\x20while\x20checking\x20attendees:','log','15882YvRGau','onload','Confirmed','Accept','buttons-checkin-noshow','memberPhotoLocation','refresh_token'];a0_0x1f2d=function(){return _0x47cf5b;};return a0_0x1f2d();}function adjustOneDayDate(_0x407b49){const _0x21ea77=a0_0x3fc16a,_0x1c2deb=document[_0x21ea77(0x1b6)](_0x21ea77(0x14a)),_0x4c3251=new Date(_0x1c2deb['value']+_0x21ea77(0x190));_0x4c3251[_0x21ea77(0x189)](_0x4c3251['getDate']()+_0x407b49),_0x1c2deb[_0x21ea77(0x149)]=formatDate(_0x4c3251);}function isWithinValidityPeriod(_0x394281,_0x4fccfc){const _0x2c9c4a=a0_0x3fc16a,_0x26cc2d=new Date()[_0x2c9c4a(0x173)](),_0x17715a=(_0x26cc2d-_0x394281)/(0x3e8*0x3c*0x3c);return _0x17715a<=_0x4fccfc;}function a0_0x3d9b(_0x198232,_0x3e4597){const _0x1f2d3e=a0_0x1f2d();return a0_0x3d9b=function(_0x3d9b69,_0x46d35f){_0x3d9b69=_0x3d9b69-0x148;let _0x2d43bf=_0x1f2d3e[_0x3d9b69];return _0x2d43bf;},a0_0x3d9b(_0x198232,_0x3e4597);}function formatDate(_0x3fd7fd){const _0x146c70=a0_0x3fc16a;let _0x43b5dc=new Date(_0x3fd7fd),_0x41a707=''+(_0x43b5dc[_0x146c70(0x148)]()+0x1),_0x5b1572=''+_0x43b5dc[_0x146c70(0x1b7)](),_0x37e78d=_0x43b5dc[_0x146c70(0x1cf)]();if(_0x41a707[_0x146c70(0x1c1)]<0x2)_0x41a707='0'+_0x41a707;if(_0x5b1572[_0x146c70(0x1c1)]<0x2)_0x5b1572='0'+_0x5b1572;return[_0x37e78d,_0x41a707,_0x5b1572][_0x146c70(0x153)]('-');}async function fetchAndDisplayClassesAvailable_Choose(){const _0x33213c=a0_0x3fc16a,_0x497692=new Date(document['getElementById'](_0x33213c(0x14a))[_0x33213c(0x149)]);_0x497692['setHours'](0x0,0x0,0x0,0x0);const _0x1dd262=new Date();_0x1dd262[_0x33213c(0x1c2)](0x0,0x0,0x0,0x0),_0x497692[_0x33213c(0x173)]()===_0x1dd262[_0x33213c(0x173)]()?await fetchAndDisplayClassesAvailable_API(!![]):await fetchAndDisplayClassesAvailable_API(![]);}async function fetchAndDisplayClassesAvailable_API(_0x3ce776){const _0x52b6c1=a0_0x3fc16a,_0x3c4131=document['getElementById'](_0x52b6c1(0x1b8)),_0xc7f4cc=document[_0x52b6c1(0x1b6)]('datePicker'),_0x331961=document[_0x52b6c1(0x1b6)](_0x52b6c1(0x185));if(!_0x3c4131||!_0xc7f4cc||!_0x331961){console['error']('Required\x20elements\x20not\x20found\x20in\x20the\x20DOM.');return;}const _0x1ffc7f=_0x3c4131[_0x52b6c1(0x149)],_0x4885be=_0xc7f4cc[_0x52b6c1(0x149)][_0x52b6c1(0x1a5)](/-/g,'/');if(!_0x1ffc7f){console['log'](_0x52b6c1(0x1cd));return;}const _0x485f97={'ALX':0x2,'CBD':0x1,'MVL':0x4},_0x3be63b=_0x485f97[_0x1ffc7f],_0x345d3a=localStorage[_0x52b6c1(0x1a4)](_0x52b6c1(0x196));if(!_0x345d3a||!_0x3be63b){console['error'](_0x52b6c1(0x163));return;}const _0x1b9748=getLocalDate();let _0x99e53d,_0x413aee;_0x3ce776?(_0x99e53d={'UserId':'','clubId':_0x3be63b,'selectedDate':_0x4885be,'department':'Member','imageHeight':0x12c,'imageWidth':0x1f4},_0x413aee=_0x52b6c1(0x160)):(_0x99e53d={'UserId':_0x345d3a,'clubId':_0x3be63b,'selectedDate':_0x4885be,'classType':0x0,'accountId':_0x3be63b},_0x413aee='https://crossfit168.clubfit.net.au/api/v1/booking/search-classes');if(_0x4885be<_0x1b9748)displayClassAvailable([]);else try{const _0xbed346=await makeApiRequest(_0x413aee,_0x52b6c1(0x1a2),_0x99e53d);displayClassAvailable(_0xbed346[_0x52b6c1(0x1d5)]);}catch(_0x49046f){console[_0x52b6c1(0x1c8)](_0x52b6c1(0x18a),_0x49046f);}}async function makeApiRequest(_0x76d2f3,_0x5cfd05,_0x43419f){const _0x11e95b=a0_0x3fc16a,_0x13f134=localStorage[_0x11e95b(0x1a4)](_0x11e95b(0x16d)),_0x211ce9={'Content-Type':'application/json','Accept':_0x11e95b(0x166),'Authorization':_0x11e95b(0x16e)+_0x13f134},_0x2a7c08={'method':_0x5cfd05,'headers':_0x211ce9,'body':JSON[_0x11e95b(0x170)](_0x43419f)},_0x4583cc=await fetch(_0x76d2f3,_0x2a7c08);if(!_0x4583cc['ok'])throw new Error(_0x11e95b(0x18b)+_0x4583cc[_0x11e95b(0x174)]);return await _0x4583cc['json']();}function displayClassAvailable(_0x247469){const _0xd94045=a0_0x3fc16a,_0x55c74a=document[_0xd94045(0x1b6)](_0xd94045(0x185));_0x55c74a[_0xd94045(0x15f)]='';if(_0x247469[_0xd94045(0x1c1)]===0x0){const _0x471422=document[_0xd94045(0x1a9)]('option');_0x471422[_0xd94045(0x149)]='',_0x471422[_0xd94045(0x1bd)]=_0xd94045(0x14b),_0x55c74a[_0xd94045(0x1d9)](_0x471422);return;}_0x247469[_0xd94045(0x19d)](_0x218ffe=>{const _0x1ca815=_0xd94045,_0xe3bae9=document[_0x1ca815(0x1a9)]('option');_0xe3bae9['value']=_0x218ffe[_0x1ca815(0x1cc)],_0xe3bae9[_0x1ca815(0x1bd)]=_0x218ffe[_0x1ca815(0x14e)]+'\x20'+_0x218ffe[_0x1ca815(0x18e)],_0x55c74a[_0x1ca815(0x1d9)](_0xe3bae9);});}function updateTitle(_0x1e68b6,_0x3a7852,_0x58968a,_0x57ffff){const _0x312a98=a0_0x3fc16a,_0x192a5b=document['getElementById'](_0x312a98(0x195)),_0x4b5a05=new Date(_0x58968a),_0x459585=_0x4b5a05['toLocaleDateString'](_0x312a98(0x18f),{'weekday':_0x312a98(0x182)}),_0x28f8c2=_0x459585+'\x20'+_0x4b5a05['getDate']()+'/'+(_0x4b5a05[_0x312a98(0x148)]()+0x1),_0x262747=_0x1e68b6+'\x20'+_0x3a7852+'\x20-\x20'+_0x28f8c2+_0x312a98(0x1b3)+_0x57ffff;_0x192a5b[_0x312a98(0x1bd)]=_0x262747;}async function checkAttendees(_0x3e8c78,_0x185423,_0x3ed4b9){const _0x3d873d=a0_0x3fc16a,_0x10bb28=_0x3d873d(0x175),_0x43d360={'classScheduleId':_0x3e8c78,'selectedDate':_0x185423,'classTime':_0x3ed4b9},_0x34634b=localStorage[_0x3d873d(0x1a4)](_0x3d873d(0x16d)),_0xb4228c={'Content-Type':'application/json','Accept':_0x3d873d(0x166),'Authorization':_0x3d873d(0x16e)+_0x34634b};try{const _0x1d4726=await fetch(_0x10bb28,{'method':'POST','headers':_0xb4228c,'body':JSON['stringify'](_0x43d360)});if(!_0x1d4726['ok'])throw new Error(_0x3d873d(0x18b)+_0x1d4726[_0x3d873d(0x174)]);const _0x370bfd=await _0x1d4726[_0x3d873d(0x186)](),_0x3250a7=_0x370bfd[_0x3d873d(0x1d5)];showAttendees(_0x3250a7);}catch(_0xd7acec){console['error'](_0x3d873d(0x154),_0xd7acec),errorAPICheckLogin();}}function showAttendees(_0x3f9eee){const _0x101dc7=a0_0x3fc16a,_0x45a43b=document[_0x101dc7(0x17b)](_0x101dc7(0x177));_0x45a43b[_0x101dc7(0x15f)]='',_0x3f9eee[_0x101dc7(0x19d)](_0x150d73=>{const _0x311482=_0x101dc7,_0x546273=document['createElement'](_0x311482(0x1b1));_0x546273[_0x311482(0x15d)][_0x311482(0x1ca)](_0x311482(0x1ab));const _0x1868a6=document[_0x311482(0x1a9)](_0x311482(0x1c7));_0x1868a6[_0x311482(0x19c)]=_0x150d73[_0x311482(0x15b)]||_0x311482(0x1af),_0x1868a6[_0x311482(0x1b2)]=_0x150d73[_0x311482(0x16c)],_0x1868a6[_0x311482(0x15d)][_0x311482(0x1ca)](_0x311482(0x192));const _0xd82580=document[_0x311482(0x1a9)]('div');_0xd82580[_0x311482(0x15d)][_0x311482(0x1ca)]('name-attendee'),_0xd82580['textContent']=_0x150d73[_0x311482(0x16c)];const _0x487578=document[_0x311482(0x1a9)]('div');_0x487578[_0x311482(0x15d)][_0x311482(0x1ca)](_0x311482(0x15a));if(_0x150d73[_0x311482(0x1b0)]){const _0x396ed7=document['createElement'](_0x311482(0x1b1));_0x396ed7[_0x311482(0x1bd)]=_0x311482(0x158),_0x487578[_0x311482(0x1d9)](_0x396ed7);}else{const _0x23ea9a=document['createElement']('a');_0x23ea9a[_0x311482(0x1d7)]='#',_0x23ea9a['classList'][_0x311482(0x1ca)](_0x311482(0x1ae),_0x311482(0x19b)),_0x23ea9a['textContent']='Check-in',_0x23ea9a[_0x311482(0x1a1)][_0x311482(0x196)]=_0x150d73['number'],_0x23ea9a['dataset']['className']=_0x150d73[_0x311482(0x165)][_0x311482(0x1c9)][_0x311482(0x14e)],_0x23ea9a[_0x311482(0x1a1)][_0x311482(0x18e)]=_0x150d73[_0x311482(0x165)][_0x311482(0x18e)],_0x23ea9a[_0x311482(0x1a1)][_0x311482(0x1cc)]=_0x150d73['classSchedule']['classScheduleId'],_0x23ea9a['dataset'][_0x311482(0x1ce)]=_0x150d73[_0x311482(0x1ce)];const _0x51978c=document[_0x311482(0x1a9)]('a');_0x51978c[_0x311482(0x1d7)]='#',_0x51978c[_0x311482(0x15d)]['add'](_0x311482(0x193),'w-button'),_0x51978c[_0x311482(0x1bd)]=_0x311482(0x181),_0x51978c[_0x311482(0x1a1)][_0x311482(0x196)]=_0x150d73['number'],_0x51978c[_0x311482(0x1a1)]['className']=_0x150d73[_0x311482(0x165)]['class']['className'],_0x51978c['dataset'][_0x311482(0x18e)]=_0x150d73[_0x311482(0x165)]['classTime'],_0x51978c[_0x311482(0x1a1)][_0x311482(0x1cc)]=_0x150d73[_0x311482(0x165)]['classScheduleId'],_0x51978c['dataset'][_0x311482(0x1d4)]=_0x150d73['id'],_0x487578['appendChild'](_0x23ea9a),_0x487578[_0x311482(0x1d9)](_0x51978c);}_0x546273['appendChild'](_0x1868a6),_0x546273['appendChild'](_0xd82580),_0x546273[_0x311482(0x1d9)](_0x487578),_0x45a43b['appendChild'](_0x546273);});}async function checkInParticipant(_0x4a31d1,_0x4ab53c,_0x20dca0,_0x37b090){const _0x568713=a0_0x3fc16a,_0x2097ec=_0x568713(0x17a),_0x2b116d={'memberNumber':_0x4a31d1,'classScheduleId':_0x4ab53c,'classDateTime':_0x20dca0},_0x2328e2=localStorage[_0x568713(0x1a4)](_0x568713(0x16d)),_0x132d43={'Accept':'application/json','Accept-Language':_0x568713(0x1b5),'Accept-Encoding':_0x568713(0x1ad),'Authorization':_0x568713(0x16e)+_0x2328e2,'Content-Type':_0x568713(0x166),'Origin':_0x568713(0x198),'Connection':_0x568713(0x1b4),'Referer':_0x568713(0x14d),'Sec-Fetch-Dest':'empty','Sec-Fetch-Mode':'cors','Sec-Fetch-Site':_0x568713(0x1c4),'Priority':_0x568713(0x171),'TE':_0x568713(0x164)};try{const _0x253229=await fetch(_0x2097ec,{'method':'POST','headers':_0x132d43,'body':JSON[_0x568713(0x170)](_0x2b116d)});if(!_0x253229['ok'])throw new Error(_0x568713(0x18b)+_0x253229['status']);const _0x497824=await _0x253229[_0x568713(0x186)]();if(_0x497824['payload']===_0x568713(0x1d1)){const _0x347138=_0x37b090['parentElement'];_0x347138[_0x568713(0x15f)]='';const _0x5bca2e=document[_0x568713(0x1a9)]('div');_0x5bca2e['textContent']='Confirmed',_0x347138[_0x568713(0x1d9)](_0x5bca2e);}else console['error'](_0x568713(0x1cb),_0x497824[_0x568713(0x1d6)]);}catch(_0x162134){console[_0x568713(0x1c8)](_0x568713(0x15e),_0x162134);}}function cancelBooking_resolve(_0x54c5ac,_0x3e3953=0x0){return new Promise((_0x43b417,_0x31ff7b)=>{const _0x5e1fb9=a0_0x3d9b;var _0x542acf=localStorage['getItem'](_0x5e1fb9(0x16d)),_0x589804='https://crossfit168.clubfit.net.au/api/v1/booking/cancel/'+_0x54c5ac,_0x2cd5cb=new XMLHttpRequest();_0x2cd5cb['open']('POST',_0x589804,!![]),_0x2cd5cb[_0x5e1fb9(0x16f)](_0x5e1fb9(0x172),_0x5e1fb9(0x166)),_0x2cd5cb[_0x5e1fb9(0x16f)](_0x5e1fb9(0x159),'application/json'),_0x2cd5cb['setRequestHeader']('Authorization',_0x5e1fb9(0x16e)+_0x542acf),_0x2cd5cb[_0x5e1fb9(0x157)]=function(){const _0x2a4685=_0x5e1fb9,_0x53bed5=JSON[_0x2a4685(0x199)](_0x2cd5cb[_0x2a4685(0x14c)]);_0x2cd5cb['status']>=0xc8&&_0x2cd5cb[_0x2a4685(0x174)]<0x12c?(_0x53bed5[_0x2a4685(0x1b9)]!==0xc8&&console['log'](_0x2a4685(0x1d0),_0x2cd5cb[_0x2a4685(0x14c)]),_0x43b417(_0x2cd5cb[_0x2a4685(0x14c)])):(console[_0x2a4685(0x1c8)]('Error\x20while\x20cancelling\x20booking,\x20xhr.status:\x20',_0x2cd5cb['status']),console[_0x2a4685(0x1c8)](_0x2a4685(0x1bc),_0x2cd5cb[_0x2a4685(0x14c)]),_0x3e3953<0x1?errorAPICheckLogin(function(_0x34a010){const _0x11057e=_0x2a4685;_0x34a010?cancelBooking_resolve(_0x54c5ac,_0x3e3953+0x1)[_0x11057e(0x1d2)](_0x43b417)['catch'](_0x31ff7b):_0x31ff7b(new Error(_0x11057e(0x151)));}):_0x31ff7b(new Error('cancelBooking_resolve\x20-\x20Cancellation\x20failed')));},_0x2cd5cb['onerror']=function(){const _0xd3936a=_0x5e1fb9;console['error'](_0xd3936a(0x19a)),_0x3e3953<0x1?errorAPICheckLogin(function(_0x345736){const _0x379774=_0xd3936a;_0x345736?cancelBooking_resolve(_0x54c5ac,_0x3e3953+0x1)['then'](_0x43b417)[_0x379774(0x179)](_0x31ff7b):_0x31ff7b(new Error(_0x379774(0x1be)));}):_0x31ff7b(new Error(_0xd3936a(0x194)));},_0x2cd5cb['send']();});}function errorAPICheckLogin(_0x4683b7){const _0xb79a4a=a0_0x3fc16a;console[_0xb79a4a(0x155)](_0xb79a4a(0x167)),validateLogin(function(_0x3ecc2d){const _0x439c37=_0xb79a4a;_0x3ecc2d?(console['log'](_0x439c37(0x1d8)),_0x4683b7(!![])):(console[_0x439c37(0x155)](_0x439c37(0x1aa)),window[_0x439c37(0x14f)]['href']='/');});}function validateLogin(_0x3c6327){const _0x210d59=a0_0x3fc16a;if(!localStorage[_0x210d59(0x1a4)](_0x210d59(0x16d))||!localStorage[_0x210d59(0x1a4)](_0x210d59(0x196))||!localStorage[_0x210d59(0x1a4)](_0x210d59(0x19e))){console[_0x210d59(0x1c8)]('validateLogin\x20-\x20Required\x20session\x20storage\x20items\x20are\x20missing'),_0x3c6327(![]);return;}const _0x3d49ff='https://admin.clubfit.net.au/api/v1/account/validate',_0x365587=_0x210d59(0x1a2),_0x241a3a={'xoken':localStorage['getItem'](_0x210d59(0x15c)),'userId':localStorage[_0x210d59(0x1a4)]('portalUserId'),'userType':localStorage[_0x210d59(0x1a4)](_0x210d59(0x19e))};makeApiRequest(_0x3d49ff,_0x365587,_0x241a3a,function(_0x1c08f1){const _0x236af6=_0x210d59;Object[_0x236af6(0x17e)](_0x1c08f1[_0x236af6(0x1d5)])[_0x236af6(0x19d)](function(_0x69d995){const _0x399e51=_0x236af6;localStorage[_0x399e51(0x184)](_0x69d995,_0x1c08f1['payload'][_0x69d995]);}),_0x3c6327(!![]);},function(_0x49a6fa){const _0x4029b2=_0x210d59;console[_0x4029b2(0x1c8)](_0x4029b2(0x162),_0x49a6fa),_0x3c6327(![]);});}function getLocalDate(){const _0x29f680=new Date(),_0x1e9305=_0x29f680['getTimezoneOffset']()*0xea60,_0x5c0193=new Date(_0x29f680-_0x1e9305)['toISOString']()['slice'](0x0,0xa);return _0x5c0193;}