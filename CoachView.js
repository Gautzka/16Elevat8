const a0_0x2fb9a2=a0_0x45bd;(function(_0x128d7e,_0x419480){const _0x21c236=a0_0x45bd,_0x313fc0=_0x128d7e();while(!![]){try{const _0x5b8d54=parseInt(_0x21c236(0x192))/0x1+-parseInt(_0x21c236(0x191))/0x2*(parseInt(_0x21c236(0x190))/0x3)+-parseInt(_0x21c236(0x1e0))/0x4+-parseInt(_0x21c236(0x196))/0x5*(parseInt(_0x21c236(0x204))/0x6)+parseInt(_0x21c236(0x1b5))/0x7+parseInt(_0x21c236(0x1f4))/0x8+-parseInt(_0x21c236(0x21f))/0x9*(-parseInt(_0x21c236(0x1d3))/0xa);if(_0x5b8d54===_0x419480)break;else _0x313fc0['push'](_0x313fc0['shift']());}catch(_0x4ee9b3){_0x313fc0['push'](_0x313fc0['shift']());}}}(a0_0x49bd,0x7083e),document[a0_0x2fb9a2(0x1a3)](a0_0x2fb9a2(0x1b8),()=>{initializePage(),setupEventListeners(),initializeSidebar();}));function initializeSidebar(){const _0x387a8c=a0_0x2fb9a2,_0x281c76=document[_0x387a8c(0x1d5)](_0x387a8c(0x1f1)),_0x3d19b9=document[_0x387a8c(0x1d5)](_0x387a8c(0x1ea)),_0x346af3=document['querySelector'](_0x387a8c(0x221));_0x281c76[_0x387a8c(0x1b2)]['visible']=_0x387a8c(0x1c6),_0x3d19b9[_0x387a8c(0x1a3)](_0x387a8c(0x200),()=>toggleSidebar(_0x281c76,_0x346af3));}function toggleSidebar(_0x30c07c,_0x1930d5){const _0x4e35ba=a0_0x2fb9a2;_0x30c07c[_0x4e35ba(0x1b2)][_0x4e35ba(0x1a1)]===_0x4e35ba(0x1c6)?(_0x30c07c['style']['transform']=_0x4e35ba(0x218),_0x1930d5[_0x4e35ba(0x20b)][_0x4e35ba(0x1f3)]='0',_0x30c07c['dataset'][_0x4e35ba(0x1a1)]=_0x4e35ba(0x1a5)):(_0x30c07c[_0x4e35ba(0x20b)][_0x4e35ba(0x1fc)]='',_0x1930d5[_0x4e35ba(0x20b)][_0x4e35ba(0x1f3)]='15rem',_0x30c07c[_0x4e35ba(0x1b2)]['visible']=_0x4e35ba(0x1c6));}async function initializePage(){initDatePicker(),await fetchAndDisplayClassesAvailable_API(!![]),fetchAndDisplayAttendees();}function setupEventListeners(){const _0xe4eba=a0_0x2fb9a2,_0x3664c9=document[_0xe4eba(0x1a6)]('datePicker'),_0x4f35f9=document[_0xe4eba(0x1a6)](_0xe4eba(0x222)),_0x1f6841=document[_0xe4eba(0x1a6)](_0xe4eba(0x1a7)),_0x2ff746=document[_0xe4eba(0x1a6)]('location-chosen'),_0xc8083b=document[_0xe4eba(0x1a6)](_0xe4eba(0x1cb)),_0x5a3374=document['getElementById'](_0xe4eba(0x219));_0x4f35f9[_0xe4eba(0x1a3)](_0xe4eba(0x200),handlePrevDayClick),_0x1f6841['addEventListener'](_0xe4eba(0x200),handleNextDayClick),_0x3664c9[_0xe4eba(0x1a3)](_0xe4eba(0x1e4),handleDateChange),_0x2ff746[_0xe4eba(0x1a3)](_0xe4eba(0x1e4),handleLocationChange),_0xc8083b[_0xe4eba(0x1a3)](_0xe4eba(0x1e4),handleClassChange),_0x5a3374&&_0x5a3374['addEventListener'](_0xe4eba(0x200),handleRefreshButtonClick),document['addEventListener'](_0xe4eba(0x200),handleButtonClicks);}async function handlePrevDayClick(){const _0x267723=a0_0x2fb9a2;adjustOneDayDate(-0x1);const _0x2fb7f3=document['getElementById'](_0x267723(0x205))[_0x267723(0x19c)];saveDatePickerSessionStorage(_0x2fb7f3),await fetchAndDisplayClassesAvailable_Choose(),fetchAndDisplayAttendees();}async function handleNextDayClick(){const _0x339a2f=a0_0x2fb9a2;adjustOneDayDate(0x1);const _0x1467e0=document['getElementById'](_0x339a2f(0x205))['value'];saveDatePickerSessionStorage(_0x1467e0),await fetchAndDisplayClassesAvailable_Choose(),fetchAndDisplayAttendees();}function a0_0x49bd(){const _0x4b9d25=['nextDay','getTime','classDateTime','Required\x20information\x20is\x20missing\x20from\x20local\x20storage\x20or\x20location\x20ID\x20map.','memberBookingId','getDate','error','w-button','classScheduleId','No\x20class\x20found','title-coachview','dataset','div','https://crossfit168.clubfit.net.au/api/v1/booking/search-classes-current-date','4076744hngKUq','buttons-checkin-noshow','toISOString','DOMContentLoaded','Content-Type','Error\x20during\x20API\x20call:','selectedDate','textContent','fullName','errorAPICheckLogin\x20-\x20login\x20validated','cancelBooking_resolve\x20-\x20Cancellation\x20failed','HTTP\x20error!\x20status:\x20','.class-attendees','errorAPICheckLogin\x20-\x20function\x20called','Check-in','responseText','appendChild','true','Error\x20fetching\x20classes:','add','status','join','class-chosen','selectedIndex','number','img','u=1','payload','validateLogin\x20-\x20Validation\x20failed:','https://crossfit168.clubfit.net.au/api/v1/booking/book-class-participant-checkin','30uCGJBe','trailers','querySelector','T00:00:00','https://crossfit168.clubfit.net.au/api/v1/booking/cancel/','replace','https://crossfit168.clubfit.net.au/api/v1/booking/class-participants','createElement','errorAPICheckLogin\x20-\x20login\x20not\x20validated','slice','href','setItem','then','2024956pdjyig','gzip,\x20deflate,\x20br,\x20zstd','Accept','No\x20Show','change','POST','catch','Member','location','Bearer\x20','.toggle-button','setDate','contains','Error\x20details:','success','application/json','length','.sidebar','attendee-picture','marginLeft','1021152kcHWxZ','attendee-class','userId','option','cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20network\x20error\x20and\x20retry','className','\x20-\x20','Confirmed','transform','classSchedule','cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20retry','validateLogin\x20-\x20Required\x20session\x20storage\x20items\x20are\x20missing','click','cors','class','alt','29646QLexzK','datePicker','userType','https://crossfit168.clubfit.net.au/api/v1/booking/search-classes','split','classList','setRequestHeader','style','toLocaleDateString','Authorization','Check-in\x20failed:','send','text','innerHTML','memberPhotoLocation','setHours','Required\x20elements\x20not\x20found\x20in\x20the\x20DOM.','src','Error\x20during\x20No\x20Show\x20API\x20call:','parentElement','translateX(-100%)','refresh-attendees','en-AU','keep-alive','forEach','stringify','No\x20location\x20selected.','1158363SPXeLk','log','.outside-sidebar','prevDay','2829Ujrwmg','16plQTOv','174948GmQAFD','keys','json','classTime','300RkoQUD','preventDefault','timestampLastChanged','target','getMonth','access_token','value','cancelBooking_resolve\x20-\x20Network\x20error\x20while\x20cancelling\x20booking','checkin-button','en-US,en;q=0.5','open','visible','getItem','addEventListener','portalUserId','false','getElementById'];a0_0x49bd=function(){return _0x4b9d25;};return a0_0x49bd();}async function handleDateChange(){const _0x42d081=a0_0x2fb9a2,_0x45b146=document[_0x42d081(0x1a6)](_0x42d081(0x205))[_0x42d081(0x19c)];saveDatePickerSessionStorage(_0x45b146),await fetchAndDisplayClassesAvailable_Choose(),fetchAndDisplayAttendees();}function a0_0x45bd(_0x1d8b5f,_0x40ce10){const _0x49bd45=a0_0x49bd();return a0_0x45bd=function(_0x45bd29,_0x3b7fe5){_0x45bd29=_0x45bd29-0x190;let _0x4e8a33=_0x49bd45[_0x45bd29];return _0x4e8a33;},a0_0x45bd(_0x1d8b5f,_0x40ce10);}async function handleLocationChange(){await fetchAndDisplayClassesAvailable_Choose(),fetchAndDisplayAttendees();}function handleClassChange(){fetchAndDisplayAttendees();}function handleRefreshButtonClick(){fetchAndDisplayAttendees();}function handleButtonClicks(_0x572eac){const _0x19fa6b=a0_0x2fb9a2;if(_0x572eac['target']['classList'][_0x19fa6b(0x1ec)]('checkin-button')){_0x572eac[_0x19fa6b(0x197)]();const _0x469264=_0x572eac[_0x19fa6b(0x199)],_0x23282c=_0x469264[_0x19fa6b(0x1b2)][_0x19fa6b(0x1f6)],_0x1b03c0=_0x469264[_0x19fa6b(0x1b2)][_0x19fa6b(0x1af)],_0x553c0f=_0x469264[_0x19fa6b(0x1b2)][_0x19fa6b(0x1a9)];checkInParticipant(_0x23282c,_0x1b03c0,_0x553c0f,_0x469264);}else{if(_0x572eac[_0x19fa6b(0x199)][_0x19fa6b(0x209)][_0x19fa6b(0x1ec)]('noshow-button')){_0x572eac['preventDefault']();const _0x1e75ab=_0x572eac[_0x19fa6b(0x199)],_0x406e41=_0x1e75ab[_0x19fa6b(0x1b2)][_0x19fa6b(0x1ab)];cancelBooking_resolve(_0x406e41)[_0x19fa6b(0x1df)](_0x41aa5e=>{const _0x8b0a51=_0x19fa6b,_0x1fcae6=_0x1e75ab[_0x8b0a51(0x217)];_0x1fcae6['innerHTML']='';const _0x30c48b=document[_0x8b0a51(0x1da)](_0x8b0a51(0x1b3));_0x30c48b[_0x8b0a51(0x1bc)]=_0x8b0a51(0x1e3),_0x1fcae6['appendChild'](_0x30c48b);})['catch'](_0x5d8f4e=>{const _0x477e8c=_0x19fa6b;console[_0x477e8c(0x1ad)](_0x477e8c(0x216),_0x5d8f4e);});}}}function fetchAndDisplayAttendees(){const _0x23e97f=a0_0x2fb9a2,_0x2b797b=document[_0x23e97f(0x1a6)](_0x23e97f(0x1cb)),_0x50d507=document[_0x23e97f(0x1a6)](_0x23e97f(0x205)),_0x4a4050=_0x2b797b['options'][_0x2b797b[_0x23e97f(0x1cc)]],_0x180141=_0x4a4050[_0x23e97f(0x19c)],_0x313bae=_0x4a4050[_0x23e97f(0x1bc)][_0x23e97f(0x208)]('\x20'),_0x20f61d=_0x313bae[0x0],_0x256e8f=_0x313bae[_0x23e97f(0x1dc)](0x1)['join']('\x20'),_0x373216=_0x50d507['value'],_0x1746cb=document[_0x23e97f(0x1a6)]('location-chosen'),_0x55d8c6=_0x1746cb['options'][_0x1746cb['selectedIndex']][_0x23e97f(0x210)];if(_0x4a4050[_0x23e97f(0x1bc)]===_0x23e97f(0x1b0)){const _0x593d0b=document['querySelector'](_0x23e97f(0x1c1));_0x593d0b[_0x23e97f(0x211)]='';const _0x9a287b=document[_0x23e97f(0x1a6)](_0x23e97f(0x1b1));_0x9a287b[_0x23e97f(0x1bc)]=_0x4a4050[_0x23e97f(0x1bc)];}else checkAttendees(_0x180141,_0x373216,_0x256e8f),updateTitle(_0x20f61d,_0x256e8f,_0x373216,_0x55d8c6);}function initDatePicker(){const _0x562b68=a0_0x2fb9a2,_0x4ca3e9=document[_0x562b68(0x1a6)]('datePicker');let _0x6698d=sessionStorage[_0x562b68(0x1a2)](_0x562b68(0x1bb)),_0x56d158=sessionStorage[_0x562b68(0x1a2)]('timestampLastChanged');if(_0x6698d&&_0x56d158&&isWithinValidityPeriod(_0x56d158,0.5))_0x4ca3e9[_0x562b68(0x19c)]=_0x6698d;else{const _0x5330f8=getLocalDate();_0x4ca3e9['value']=_0x5330f8,saveDatePickerSessionStorage(_0x5330f8);}}function saveDatePickerSessionStorage(_0x3377ad){const _0x4eb082=a0_0x2fb9a2;sessionStorage[_0x4eb082(0x1de)](_0x4eb082(0x1bb),_0x3377ad);const _0x3dc8c9=new Date()[_0x4eb082(0x1a8)]();sessionStorage[_0x4eb082(0x1de)](_0x4eb082(0x198),_0x3dc8c9);}function adjustOneDayDate(_0x1601dc){const _0x2a66b9=a0_0x2fb9a2,_0x33fce9=document[_0x2a66b9(0x1a6)]('datePicker'),_0x7d920a=new Date(_0x33fce9['value']+_0x2a66b9(0x1d6));_0x7d920a[_0x2a66b9(0x1eb)](_0x7d920a[_0x2a66b9(0x1ac)]()+_0x1601dc),_0x33fce9[_0x2a66b9(0x19c)]=formatDate(_0x7d920a);}function isWithinValidityPeriod(_0x116751,_0x5d2936){const _0x4c3275=a0_0x2fb9a2,_0x5b3543=new Date()[_0x4c3275(0x1a8)](),_0x26e589=(_0x5b3543-_0x116751)/(0x3e8*0x3c*0x3c);return _0x26e589<=_0x5d2936;}function formatDate(_0x1e6598){const _0x26f69b=a0_0x2fb9a2;let _0x16ef41=new Date(_0x1e6598),_0x5a26ac=''+(_0x16ef41['getMonth']()+0x1),_0x3d593e=''+_0x16ef41[_0x26f69b(0x1ac)](),_0x485ee5=_0x16ef41['getFullYear']();if(_0x5a26ac[_0x26f69b(0x1f0)]<0x2)_0x5a26ac='0'+_0x5a26ac;if(_0x3d593e[_0x26f69b(0x1f0)]<0x2)_0x3d593e='0'+_0x3d593e;return[_0x485ee5,_0x5a26ac,_0x3d593e][_0x26f69b(0x1ca)]('-');}async function fetchAndDisplayClassesAvailable_Choose(){const _0x3ab85b=a0_0x2fb9a2,_0x1ebaed=new Date(document[_0x3ab85b(0x1a6)](_0x3ab85b(0x205))['value']);_0x1ebaed[_0x3ab85b(0x213)](0x0,0x0,0x0,0x0);const _0x1a2b23=new Date();_0x1a2b23[_0x3ab85b(0x213)](0x0,0x0,0x0,0x0),_0x1ebaed[_0x3ab85b(0x1a8)]()===_0x1a2b23[_0x3ab85b(0x1a8)]()?await fetchAndDisplayClassesAvailable_API(!![]):await fetchAndDisplayClassesAvailable_API(![]);}async function fetchAndDisplayClassesAvailable_API(_0x356623){const _0x41e6b8=a0_0x2fb9a2,_0x21cea9=document[_0x41e6b8(0x1a6)]('location-chosen'),_0x118230=document[_0x41e6b8(0x1a6)](_0x41e6b8(0x205)),_0x5217e5=document['getElementById']('class-chosen');if(!_0x21cea9||!_0x118230||!_0x5217e5){console[_0x41e6b8(0x1ad)](_0x41e6b8(0x214));return;}const _0x4b8912=_0x21cea9['value'],_0x196494=_0x118230[_0x41e6b8(0x19c)][_0x41e6b8(0x1d8)](/-/g,'/');if(!_0x4b8912){console[_0x41e6b8(0x220)](_0x41e6b8(0x21e));return;}const _0x32e008={'ALX':0x2,'CBD':0x1,'MVL':0x4},_0x473550=_0x32e008[_0x4b8912],_0x219c4d=localStorage['getItem'](_0x41e6b8(0x1f6));if(!_0x219c4d||!_0x473550){console[_0x41e6b8(0x1ad)](_0x41e6b8(0x1aa));return;}const _0x583585=getLocalDate();let _0x3decc0,_0xcca00b;_0x356623?(_0x3decc0={'UserId':'','clubId':_0x473550,'selectedDate':_0x196494,'department':_0x41e6b8(0x1e7),'imageHeight':0x12c,'imageWidth':0x1f4},_0xcca00b=_0x41e6b8(0x1b4)):(_0x3decc0={'UserId':_0x219c4d,'clubId':_0x473550,'selectedDate':_0x196494,'classType':0x0,'accountId':_0x473550},_0xcca00b=_0x41e6b8(0x207));if(_0x196494<_0x583585)displayClassAvailable([]);else try{const _0xa136e7=await makeApiRequest(_0xcca00b,_0x41e6b8(0x1e5),_0x3decc0);displayClassAvailable(_0xa136e7['payload']);}catch(_0x496542){console[_0x41e6b8(0x1ad)](_0x41e6b8(0x1c7),_0x496542);}}async function makeApiRequest(_0x1389be,_0x3ceb4f,_0x34c0aa){const _0x5ee914=a0_0x2fb9a2,_0x4c332b=localStorage[_0x5ee914(0x1a2)](_0x5ee914(0x19b)),_0x38eccf={'Content-Type':_0x5ee914(0x1ef),'Accept':_0x5ee914(0x1ef),'Authorization':_0x5ee914(0x1e9)+_0x4c332b},_0x24ae87={'method':_0x3ceb4f,'headers':_0x38eccf,'body':JSON['stringify'](_0x34c0aa)},_0x3e4de6=await fetch(_0x1389be,_0x24ae87);if(!_0x3e4de6['ok'])throw new Error(_0x5ee914(0x1c0)+_0x3e4de6[_0x5ee914(0x1c9)]);return await _0x3e4de6[_0x5ee914(0x194)]();}function displayClassAvailable(_0x402fb5){const _0x4a3468=a0_0x2fb9a2,_0x1af14f=document['getElementById']('class-chosen');_0x1af14f['innerHTML']='';if(_0x402fb5[_0x4a3468(0x1f0)]===0x0){const _0x5279a0=document[_0x4a3468(0x1da)](_0x4a3468(0x1f7));_0x5279a0[_0x4a3468(0x19c)]='',_0x5279a0[_0x4a3468(0x1bc)]=_0x4a3468(0x1b0),_0x1af14f[_0x4a3468(0x1c5)](_0x5279a0);return;}_0x402fb5['forEach'](_0x2f337e=>{const _0x3b07ed=_0x4a3468,_0x5406a7=document['createElement'](_0x3b07ed(0x1f7));_0x5406a7[_0x3b07ed(0x19c)]=_0x2f337e[_0x3b07ed(0x1af)],_0x5406a7[_0x3b07ed(0x1bc)]=_0x2f337e['className']+'\x20'+_0x2f337e[_0x3b07ed(0x195)],_0x1af14f['appendChild'](_0x5406a7);});}function updateTitle(_0x10787c,_0x2c4656,_0xc09440,_0x272ced){const _0x50dca7=a0_0x2fb9a2,_0x5ebece=document[_0x50dca7(0x1a6)](_0x50dca7(0x1b1)),_0x2cdff8=new Date(_0xc09440),_0x6f4177=_0x2cdff8[_0x50dca7(0x20c)](_0x50dca7(0x21a),{'weekday':'long'}),_0x5a825d=_0x6f4177+'\x20'+_0x2cdff8[_0x50dca7(0x1ac)]()+'/'+(_0x2cdff8[_0x50dca7(0x19a)]()+0x1),_0x59fa17=_0x10787c+'\x20'+_0x2c4656+_0x50dca7(0x1fa)+_0x5a825d+_0x50dca7(0x1fa)+_0x272ced;_0x5ebece['textContent']=_0x59fa17;}async function checkAttendees(_0x43ca3b,_0x25c930,_0x31a497){const _0x3519d0=a0_0x2fb9a2,_0x21e030=_0x3519d0(0x1d9),_0x19b503={'classScheduleId':_0x43ca3b,'selectedDate':_0x25c930,'classTime':_0x31a497},_0x5cb2e2=localStorage[_0x3519d0(0x1a2)](_0x3519d0(0x19b)),_0x5c8a28={'Content-Type':_0x3519d0(0x1ef),'Accept':_0x3519d0(0x1ef),'Authorization':'Bearer\x20'+_0x5cb2e2};try{const _0x5e3a29=await fetch(_0x21e030,{'method':_0x3519d0(0x1e5),'headers':_0x5c8a28,'body':JSON[_0x3519d0(0x21d)](_0x19b503)});if(!_0x5e3a29['ok'])throw new Error('HTTP\x20error!\x20status:\x20'+_0x5e3a29[_0x3519d0(0x1c9)]);const _0x5ecd53=await _0x5e3a29[_0x3519d0(0x194)](),_0x3d0e18=_0x5ecd53[_0x3519d0(0x1d0)];showAttendees(_0x3d0e18);}catch(_0x3f7a1e){console[_0x3519d0(0x1ad)]('checkAttendees\x20-\x20Error\x20while\x20checking\x20attendees:',_0x3f7a1e),errorAPICheckLogin();}}function showAttendees(_0x57e730){const _0x4b6c4d=a0_0x2fb9a2,_0x38f1f6=document['querySelector']('.class-attendees');_0x38f1f6[_0x4b6c4d(0x211)]='',_0x57e730['forEach'](_0x1df3ae=>{const _0x3c82b6=_0x4b6c4d,_0x19396a=document['createElement'](_0x3c82b6(0x1b3));_0x19396a[_0x3c82b6(0x209)]['add'](_0x3c82b6(0x1f5));const _0x394945=document[_0x3c82b6(0x1da)](_0x3c82b6(0x1ce));_0x394945[_0x3c82b6(0x215)]=_0x1df3ae[_0x3c82b6(0x212)]||'https://clubfitassets.s3.ap-southeast-2.amazonaws.com/common/avatar_default.png',_0x394945[_0x3c82b6(0x203)]=_0x1df3ae[_0x3c82b6(0x1bd)],_0x394945[_0x3c82b6(0x209)][_0x3c82b6(0x1c8)](_0x3c82b6(0x1f2));const _0x52da87=document[_0x3c82b6(0x1da)](_0x3c82b6(0x1b3));_0x52da87['classList'][_0x3c82b6(0x1c8)]('name-attendee'),_0x52da87['textContent']=_0x1df3ae['fullName'];const _0x15e0cd=document[_0x3c82b6(0x1da)](_0x3c82b6(0x1b3));_0x15e0cd[_0x3c82b6(0x209)][_0x3c82b6(0x1c8)](_0x3c82b6(0x1b6));if(_0x1df3ae['hasAttended']){const _0x87063c=document[_0x3c82b6(0x1da)](_0x3c82b6(0x1b3));_0x87063c['textContent']=_0x3c82b6(0x1fb),_0x15e0cd[_0x3c82b6(0x1c5)](_0x87063c);}else{const _0x39ef93=document[_0x3c82b6(0x1da)]('a');_0x39ef93[_0x3c82b6(0x1dd)]='#',_0x39ef93[_0x3c82b6(0x209)][_0x3c82b6(0x1c8)](_0x3c82b6(0x19e),_0x3c82b6(0x1ae)),_0x39ef93[_0x3c82b6(0x1bc)]=_0x3c82b6(0x1c3),_0x39ef93[_0x3c82b6(0x1b2)][_0x3c82b6(0x1f6)]=_0x1df3ae[_0x3c82b6(0x1cd)],_0x39ef93[_0x3c82b6(0x1b2)]['className']=_0x1df3ae[_0x3c82b6(0x1fd)]['class'][_0x3c82b6(0x1f9)],_0x39ef93[_0x3c82b6(0x1b2)]['classTime']=_0x1df3ae[_0x3c82b6(0x1fd)][_0x3c82b6(0x195)],_0x39ef93[_0x3c82b6(0x1b2)][_0x3c82b6(0x1af)]=_0x1df3ae[_0x3c82b6(0x1fd)][_0x3c82b6(0x1af)],_0x39ef93[_0x3c82b6(0x1b2)][_0x3c82b6(0x1a9)]=_0x1df3ae['classDateTime'];const _0x1fcc2e=document['createElement']('a');_0x1fcc2e[_0x3c82b6(0x1dd)]='#',_0x1fcc2e[_0x3c82b6(0x209)][_0x3c82b6(0x1c8)]('noshow-button',_0x3c82b6(0x1ae)),_0x1fcc2e['textContent']=_0x3c82b6(0x1e3),_0x1fcc2e['dataset'][_0x3c82b6(0x1f6)]=_0x1df3ae[_0x3c82b6(0x1cd)],_0x1fcc2e[_0x3c82b6(0x1b2)][_0x3c82b6(0x1f9)]=_0x1df3ae['classSchedule'][_0x3c82b6(0x202)][_0x3c82b6(0x1f9)],_0x1fcc2e[_0x3c82b6(0x1b2)][_0x3c82b6(0x195)]=_0x1df3ae[_0x3c82b6(0x1fd)]['classTime'],_0x1fcc2e[_0x3c82b6(0x1b2)]['classScheduleId']=_0x1df3ae[_0x3c82b6(0x1fd)][_0x3c82b6(0x1af)],_0x1fcc2e[_0x3c82b6(0x1b2)][_0x3c82b6(0x1ab)]=_0x1df3ae['id'],_0x15e0cd[_0x3c82b6(0x1c5)](_0x39ef93),_0x15e0cd[_0x3c82b6(0x1c5)](_0x1fcc2e);}_0x19396a[_0x3c82b6(0x1c5)](_0x394945),_0x19396a[_0x3c82b6(0x1c5)](_0x52da87),_0x19396a[_0x3c82b6(0x1c5)](_0x15e0cd),_0x38f1f6[_0x3c82b6(0x1c5)](_0x19396a);});}async function checkInParticipant(_0x5361d2,_0x51d60d,_0x46866d,_0x248619){const _0x157dab=a0_0x2fb9a2,_0x44d8fb=_0x157dab(0x1d2),_0x31f036={'memberNumber':_0x5361d2,'classScheduleId':_0x51d60d,'classDateTime':_0x46866d},_0x80ac0f=localStorage[_0x157dab(0x1a2)](_0x157dab(0x19b)),_0x221236={'Accept':'application/json','Accept-Language':_0x157dab(0x19f),'Accept-Encoding':_0x157dab(0x1e1),'Authorization':_0x157dab(0x1e9)+_0x80ac0f,'Content-Type':_0x157dab(0x1ef),'Origin':'https://myaccount.clubfit.net.au','Connection':_0x157dab(0x21b),'Referer':'https://myaccount.clubfit.net.au/','Sec-Fetch-Dest':'empty','Sec-Fetch-Mode':_0x157dab(0x201),'Sec-Fetch-Site':'same-site','Priority':_0x157dab(0x1cf),'TE':_0x157dab(0x1d4)};try{const _0x595230=await fetch(_0x44d8fb,{'method':_0x157dab(0x1e5),'headers':_0x221236,'body':JSON[_0x157dab(0x21d)](_0x31f036)});if(!_0x595230['ok'])throw new Error(_0x157dab(0x1c0)+_0x595230[_0x157dab(0x1c9)]);const _0x1d081a=await _0x595230[_0x157dab(0x194)]();if(_0x1d081a[_0x157dab(0x1d0)]===_0x157dab(0x1ee)){const _0xf908c8=_0x248619[_0x157dab(0x217)];_0xf908c8[_0x157dab(0x211)]='';const _0x2da1c3=document[_0x157dab(0x1da)](_0x157dab(0x1b3));_0x2da1c3[_0x157dab(0x1bc)]='Confirmed',_0xf908c8['appendChild'](_0x2da1c3);}else console[_0x157dab(0x1ad)](_0x157dab(0x20e),_0x1d081a['errors']);}catch(_0xdc38f3){console[_0x157dab(0x1ad)](_0x157dab(0x1ba),_0xdc38f3);}}function cancelBooking_resolve(_0x1bd76e,_0x2d4fae=0x0){return new Promise((_0x3e1683,_0x5b98ce)=>{const _0x192d4d=a0_0x45bd;var _0x24977a=localStorage[_0x192d4d(0x1a2)](_0x192d4d(0x19b)),_0x4e32f3=_0x192d4d(0x1d7)+_0x1bd76e,_0x55355a=new XMLHttpRequest();_0x55355a[_0x192d4d(0x1a0)]('POST',_0x4e32f3,!![]),_0x55355a[_0x192d4d(0x20a)](_0x192d4d(0x1b9),_0x192d4d(0x1ef)),_0x55355a[_0x192d4d(0x20a)](_0x192d4d(0x1e2),_0x192d4d(0x1ef)),_0x55355a[_0x192d4d(0x20a)](_0x192d4d(0x20d),_0x192d4d(0x1e9)+_0x24977a),_0x55355a['onload']=function(){const _0x176fd5=_0x192d4d,_0x2abb79=JSON['parse'](_0x55355a[_0x176fd5(0x1c4)]);_0x55355a[_0x176fd5(0x1c9)]>=0xc8&&_0x55355a[_0x176fd5(0x1c9)]<0x12c?(_0x2abb79['statusCode']!==0xc8&&console[_0x176fd5(0x220)]('Response\x20received:',_0x55355a['responseText']),_0x3e1683(_0x55355a[_0x176fd5(0x1c4)])):(console[_0x176fd5(0x1ad)]('Error\x20while\x20cancelling\x20booking,\x20xhr.status:\x20',_0x55355a[_0x176fd5(0x1c9)]),console['error'](_0x176fd5(0x1ed),_0x55355a[_0x176fd5(0x1c4)]),_0x2d4fae<0x1?errorAPICheckLogin(function(_0x967f39){const _0x205f36=_0x176fd5;_0x967f39?cancelBooking_resolve(_0x1bd76e,_0x2d4fae+0x1)[_0x205f36(0x1df)](_0x3e1683)[_0x205f36(0x1e6)](_0x5b98ce):_0x5b98ce(new Error(_0x205f36(0x1fe)));}):_0x5b98ce(new Error(_0x176fd5(0x1bf))));},_0x55355a['onerror']=function(){const _0x552cc3=_0x192d4d;console[_0x552cc3(0x1ad)](_0x552cc3(0x19d)),_0x2d4fae<0x1?errorAPICheckLogin(function(_0x31cd06){const _0x1ff354=_0x552cc3;_0x31cd06?cancelBooking_resolve(_0x1bd76e,_0x2d4fae+0x1)[_0x1ff354(0x1df)](_0x3e1683)[_0x1ff354(0x1e6)](_0x5b98ce):_0x5b98ce(new Error(_0x1ff354(0x1f8)));}):_0x5b98ce(new Error('cancelBooking_resolve\x20-\x20Network\x20error'));},_0x55355a[_0x192d4d(0x20f)]();});}function errorAPICheckLogin(_0xe10bf8){const _0x2da870=a0_0x2fb9a2;console[_0x2da870(0x220)](_0x2da870(0x1c2)),validateLogin(function(_0x1bae6a){const _0xdfe9b9=_0x2da870;_0x1bae6a?(console['log'](_0xdfe9b9(0x1be)),_0xe10bf8(!![])):(console[_0xdfe9b9(0x220)](_0xdfe9b9(0x1db)),window[_0xdfe9b9(0x1e8)][_0xdfe9b9(0x1dd)]='/');});}function validateLogin(_0x34f845){const _0x307405=a0_0x2fb9a2;if(!localStorage[_0x307405(0x1a2)](_0x307405(0x19b))||!localStorage[_0x307405(0x1a2)]('userId')||!localStorage['getItem']('userType')){console['error'](_0x307405(0x1ff)),_0x34f845(![]);return;}const _0x4f79b6='https://admin.clubfit.net.au/api/v1/account/validate',_0x1cb316=_0x307405(0x1e5),_0x3eac1e={'xoken':localStorage[_0x307405(0x1a2)]('refresh_token'),'userId':localStorage['getItem'](_0x307405(0x1a4)),'userType':localStorage[_0x307405(0x1a2)](_0x307405(0x206))};makeApiRequest(_0x4f79b6,_0x1cb316,_0x3eac1e,function(_0x4b2cd0){const _0x4b3cd0=_0x307405;Object[_0x4b3cd0(0x193)](_0x4b2cd0[_0x4b3cd0(0x1d0)])[_0x4b3cd0(0x21c)](function(_0xbe5e5e){localStorage['setItem'](_0xbe5e5e,_0x4b2cd0['payload'][_0xbe5e5e]);}),_0x34f845(!![]);},function(_0x5aa9b4){const _0x254673=_0x307405;console['error'](_0x254673(0x1d1),_0x5aa9b4),_0x34f845(![]);});}function getLocalDate(){const _0x397bbf=a0_0x2fb9a2,_0x102604=new Date(),_0x2fad56=_0x102604['getTimezoneOffset']()*0xea60,_0x50fab7=new Date(_0x102604-_0x2fad56)[_0x397bbf(0x1b7)]()[_0x397bbf(0x1dc)](0x0,0xa);return _0x50fab7;}