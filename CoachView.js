const a0_0x191a4a=a0_0x5553;(function(_0x2a8586,_0x76fad4){const _0x584409=a0_0x5553,_0x3b1de4=_0x2a8586();while(!![]){try{const _0x2b85ca=parseInt(_0x584409(0xd3))/0x1*(-parseInt(_0x584409(0x89))/0x2)+-parseInt(_0x584409(0xd6))/0x3+-parseInt(_0x584409(0xb8))/0x4+-parseInt(_0x584409(0x93))/0x5+-parseInt(_0x584409(0xe1))/0x6*(-parseInt(_0x584409(0x92))/0x7)+-parseInt(_0x584409(0x8b))/0x8+parseInt(_0x584409(0xe4))/0x9*(parseInt(_0x584409(0x8e))/0xa);if(_0x2b85ca===_0x76fad4)break;else _0x3b1de4['push'](_0x3b1de4['shift']());}catch(_0x4ca4be){_0x3b1de4['push'](_0x3b1de4['shift']());}}}(a0_0xb3e0,0xa26ae),document[a0_0x191a4a(0xb6)]('DOMContentLoaded',()=>{initializePage(),setupEventListeners(),initializeSidebar();}));function initializeSidebar(){const _0x1c3059=a0_0x191a4a,_0x705b7a=document['querySelector'](_0x1c3059(0xe9)),_0x49709c=document[_0x1c3059(0xf3)](_0x1c3059(0xd1)),_0x3c4f9d=document['querySelector'](_0x1c3059(0xca));_0x705b7a[_0x1c3059(0x103)][_0x1c3059(0x7c)]=_0x1c3059(0xd8),_0x49709c[_0x1c3059(0xb6)](_0x1c3059(0xc7),()=>toggleSidebar(_0x705b7a,_0x3c4f9d));}function toggleSidebar(_0x8e215f,_0x3c3b81){const _0x4126d2=a0_0x191a4a;_0x8e215f[_0x4126d2(0x103)]['visible']===_0x4126d2(0xd8)?(_0x8e215f['style'][_0x4126d2(0xa0)]='translateX(-100%)',_0x3c3b81[_0x4126d2(0xba)][_0x4126d2(0x75)]='0',_0x8e215f[_0x4126d2(0x103)][_0x4126d2(0x7c)]='false'):(_0x8e215f[_0x4126d2(0xba)]['transform']='',_0x3c3b81['style']['marginLeft']=_0x4126d2(0x82),_0x8e215f[_0x4126d2(0x103)]['visible']=_0x4126d2(0xd8));}async function initializePage(){initDatePicker(),await fetchAndDisplayClassesAvailable_API(!![]),fetchAndDisplayAttendees();}function setupEventListeners(){const _0x8fef8f=a0_0x191a4a,_0x3da7fd=document[_0x8fef8f(0x9a)](_0x8fef8f(0x101)),_0x28d6bc=document[_0x8fef8f(0x9a)](_0x8fef8f(0xf2)),_0x19f7ab=document[_0x8fef8f(0x9a)](_0x8fef8f(0xae)),_0x2e5059=document[_0x8fef8f(0x9a)]('location-chosen'),_0x2246bb=document[_0x8fef8f(0x9a)]('class-chosen'),_0x3dbe66=document[_0x8fef8f(0x9a)]('refresh-attendees');_0x28d6bc[_0x8fef8f(0xb6)]('click',handlePrevDayClick),_0x19f7ab['addEventListener'](_0x8fef8f(0xc7),handleNextDayClick),_0x3da7fd[_0x8fef8f(0xb6)](_0x8fef8f(0xaa),handleDateChange),_0x2e5059[_0x8fef8f(0xb6)]('change',handleLocationChange),_0x2246bb[_0x8fef8f(0xb6)](_0x8fef8f(0xaa),handleClassChange),_0x3dbe66&&_0x3dbe66[_0x8fef8f(0xb6)](_0x8fef8f(0xc7),handleRefreshButtonClick),document[_0x8fef8f(0xb6)](_0x8fef8f(0xc7),handleButtonClicks);}function a0_0x5553(_0x29d4b8,_0x14eadd){const _0xb3e051=a0_0xb3e0();return a0_0x5553=function(_0x555399,_0x49f78c){_0x555399=_0x555399-0x72;let _0x172931=_0xb3e051[_0x555399];return _0x172931;},a0_0x5553(_0x29d4b8,_0x14eadd);}async function handlePrevDayClick(){const _0x30f1c1=a0_0x191a4a;adjustOneDayDate(-0x1);const _0x56b150=document[_0x30f1c1(0x9a)](_0x30f1c1(0x101))['value'];saveDatePickerSessionStorage(_0x56b150),await fetchAndDisplayClassesAvailable_Choose(),fetchAndDisplayAttendees();}async function handleNextDayClick(){const _0x4d6499=a0_0x191a4a;adjustOneDayDate(0x1);const _0x5a3e16=document['getElementById'](_0x4d6499(0x101))[_0x4d6499(0xb0)];saveDatePickerSessionStorage(_0x5a3e16),await fetchAndDisplayClassesAvailable_Choose(),fetchAndDisplayAttendees();}async function handleDateChange(){const _0x8d834=a0_0x191a4a,_0xd1fcc1=document[_0x8d834(0x9a)]('datePicker')[_0x8d834(0xb0)];saveDatePickerSessionStorage(_0xd1fcc1),await fetchAndDisplayClassesAvailable_Choose(),fetchAndDisplayAttendees();}async function handleLocationChange(){await fetchAndDisplayClassesAvailable_Choose(),fetchAndDisplayAttendees();}function handleClassChange(){fetchAndDisplayAttendees();}function handleRefreshButtonClick(){fetchAndDisplayAttendees();}function handleButtonClicks(_0x2ef04d){const _0x504bf2=a0_0x191a4a;if(_0x2ef04d[_0x504bf2(0xd4)][_0x504bf2(0xad)]['contains'](_0x504bf2(0xe6))){_0x2ef04d['preventDefault']();const _0x1d03a8=_0x2ef04d[_0x504bf2(0xd4)],_0x1a349f=_0x1d03a8[_0x504bf2(0x103)][_0x504bf2(0xbb)],_0x52690a=_0x1d03a8[_0x504bf2(0x103)][_0x504bf2(0x95)],_0x4e5aff=_0x1d03a8[_0x504bf2(0x103)][_0x504bf2(0x98)];checkInParticipant(_0x1a349f,_0x52690a,_0x4e5aff,_0x1d03a8);}else{if(_0x2ef04d[_0x504bf2(0xd4)][_0x504bf2(0xad)][_0x504bf2(0x7b)](_0x504bf2(0x8a))){_0x2ef04d[_0x504bf2(0xf8)]();const _0x4d8309=_0x2ef04d['target'],_0x46af87=_0x4d8309[_0x504bf2(0x103)][_0x504bf2(0xdf)];cancelBooking_resolve(_0x46af87)[_0x504bf2(0x91)](_0x27926e=>{const _0x18aa16=_0x504bf2,_0x3904d4=_0x4d8309[_0x18aa16(0xd0)];_0x3904d4[_0x18aa16(0xea)]='';const _0x350692=document[_0x18aa16(0x83)](_0x18aa16(0xc5));_0x350692['textContent']=_0x18aa16(0xc4),_0x3904d4['appendChild'](_0x350692);})[_0x504bf2(0xab)](_0x5f0f98=>{const _0x15b317=_0x504bf2;console[_0x15b317(0x80)]('Error\x20during\x20No\x20Show\x20API\x20call:',_0x5f0f98);});}}}function fetchAndDisplayAttendees(){const _0x2aaf69=a0_0x191a4a,_0x478bd8=document[_0x2aaf69(0x9a)](_0x2aaf69(0xdb)),_0x389d86=document[_0x2aaf69(0x9a)](_0x2aaf69(0x101)),_0x5baa14=_0x478bd8[_0x2aaf69(0xf5)][_0x478bd8['selectedIndex']],_0x432c1e=_0x5baa14[_0x2aaf69(0xb0)],_0x207f34=_0x5baa14['textContent'][_0x2aaf69(0xc9)]('\x20'),_0x393169=_0x207f34[0x0],_0x521848=_0x207f34[_0x2aaf69(0x96)](0x1)[_0x2aaf69(0x9e)]('\x20'),_0x115548=_0x389d86[_0x2aaf69(0xb0)],_0x83a649=document[_0x2aaf69(0x9a)](_0x2aaf69(0xe3)),_0x337465=_0x83a649[_0x2aaf69(0xf5)][_0x83a649['selectedIndex']]['text'];if(_0x5baa14[_0x2aaf69(0x8c)]==='No\x20class\x20found'){const _0x37405c=document[_0x2aaf69(0xf3)]('.class-attendees');_0x37405c[_0x2aaf69(0xea)]='';const _0x5be6f2=document[_0x2aaf69(0x9a)](_0x2aaf69(0xb3));_0x5be6f2['textContent']=_0x5baa14['textContent'];}else checkAttendees(_0x432c1e,_0x115548,_0x521848),updateTitle(_0x393169,_0x521848,_0x115548,_0x337465);}function a0_0xb3e0(){const _0x1ce1e9=['split','.outside-sidebar','alt','Error\x20while\x20cancelling\x20booking,\x20xhr.status:\x20','Response\x20received:','https://crossfit168.clubfit.net.au/api/v1/booking/class-participants','same-site','parentElement','.toggle-button','https://crossfit168.clubfit.net.au/api/v1/booking/search-classes-current-date','1053053iEDLnU','target','Error\x20during\x20API\x20call:','1376349rhlMDm','Required\x20information\x20is\x20missing\x20from\x20local\x20storage\x20or\x20location\x20ID\x20map.','true','setHours','Bearer\x20','class-chosen','name-attendee','portalUserId','empty','memberBookingId','classSchedule','2889570KYwjvZ','setRequestHeader','location-chosen','153459jrtfJs','getTime','checkin-button','Accept','stringify','.sidebar','innerHTML','parse','json','setItem','https://myaccount.clubfit.net.au/','getMonth','href','cancelBooking_resolve\x20-\x20Network\x20error\x20while\x20cancelling\x20booking','prevDay','querySelector','errorAPICheckLogin\x20-\x20login\x20not\x20validated','options','option','No\x20location\x20selected.','preventDefault','hasAttended','long','status','access_token','errorAPICheckLogin\x20-\x20function\x20called','cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20network\x20error\x20and\x20retry','https://crossfit168.clubfit.net.au/api/v1/booking/search-classes','cors','datePicker','\x20-\x20','dataset','https://crossfit168.clubfit.net.au/api/v1/booking/book-class-participant-checkin','Check-in\x20failed:','fullName','marginLeft','w-button','validateLogin\x20-\x20Validation\x20failed:','memberPhotoLocation','application/json','https://clubfitassets.s3.ap-southeast-2.amazonaws.com/common/avatar_default.png','contains','visible','Member','refresh_token','length','error','Check-in','15rem','createElement','cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20retry','cancelBooking_resolve\x20-\x20Network\x20error','success','errorAPICheckLogin\x20-\x20login\x20validated','POST','2FDIhlZ','noshow-button','5079144vigZvy','textContent','cancelBooking_resolve\x20-\x20Cancellation\x20failed','2460JRwYQA','https://admin.clubfit.net.au/api/v1/account/validate','location','then','14NzCOPU','5484245iCAYHK','en-AU','classScheduleId','slice','getItem','classDateTime','payload','getElementById','onerror','keys','setDate','join','getDate','transform','.class-attendees','getTimezoneOffset','errors','checkAttendees\x20-\x20Error\x20while\x20checking\x20attendees:','responseText','HTTP\x20error!\x20status:\x20','forEach','toISOString','add','change','catch','u=1','classList','nextDay','classTime','value','timestampLastChanged','appendChild','title-coachview','getFullYear','https://myaccount.clubfit.net.au','addEventListener','trailers','4995584WRLJQd','open','style','userId','Required\x20elements\x20not\x20found\x20in\x20the\x20DOM.','en-US,en;q=0.5','statusCode','userType','Authorization','log','className','Confirmed','No\x20Show','div','attendee-class','click','class'];a0_0xb3e0=function(){return _0x1ce1e9;};return a0_0xb3e0();}function initDatePicker(){const _0x95d7dd=a0_0x191a4a,_0x35aa03=document['getElementById']('datePicker');let _0x5e7af8=sessionStorage['getItem']('selectedDate'),_0x51abb0=sessionStorage['getItem']('timestampLastChanged');if(_0x5e7af8&&_0x51abb0&&isWithinValidityPeriod(_0x51abb0,0.5))_0x35aa03[_0x95d7dd(0xb0)]=_0x5e7af8;else{const _0x3b2c6e=getLocalDate();_0x35aa03[_0x95d7dd(0xb0)]=_0x3b2c6e,saveDatePickerSessionStorage(_0x3b2c6e);}}function saveDatePickerSessionStorage(_0x708d30){const _0x32bf27=a0_0x191a4a;sessionStorage['setItem']('selectedDate',_0x708d30);const _0x54b4ad=new Date()[_0x32bf27(0xe5)]();sessionStorage[_0x32bf27(0xed)](_0x32bf27(0xb1),_0x54b4ad);}function adjustOneDayDate(_0x5b8382){const _0x3f55f8=a0_0x191a4a,_0x328f94=document[_0x3f55f8(0x9a)](_0x3f55f8(0x101)),_0x6ab4c1=new Date(_0x328f94['value']+'T00:00:00');_0x6ab4c1[_0x3f55f8(0x9d)](_0x6ab4c1[_0x3f55f8(0x9f)]()+_0x5b8382),_0x328f94[_0x3f55f8(0xb0)]=formatDate(_0x6ab4c1);}function isWithinValidityPeriod(_0x1c0c20,_0x1ca11e){const _0x3686b4=a0_0x191a4a,_0x232462=new Date()[_0x3686b4(0xe5)](),_0xb50792=(_0x232462-_0x1c0c20)/(0x3e8*0x3c*0x3c);return _0xb50792<=_0x1ca11e;}function formatDate(_0x242e0c){const _0x42748f=a0_0x191a4a;let _0x54b98e=new Date(_0x242e0c),_0x276e23=''+(_0x54b98e[_0x42748f(0xef)]()+0x1),_0x327574=''+_0x54b98e[_0x42748f(0x9f)](),_0x42db2b=_0x54b98e[_0x42748f(0xb4)]();if(_0x276e23[_0x42748f(0x7f)]<0x2)_0x276e23='0'+_0x276e23;if(_0x327574[_0x42748f(0x7f)]<0x2)_0x327574='0'+_0x327574;return[_0x42db2b,_0x276e23,_0x327574][_0x42748f(0x9e)]('-');}async function fetchAndDisplayClassesAvailable_Choose(){const _0x66796c=a0_0x191a4a,_0x2b77d1=new Date(document['getElementById'](_0x66796c(0x101))[_0x66796c(0xb0)]);_0x2b77d1[_0x66796c(0xd9)](0x0,0x0,0x0,0x0);const _0x469788=new Date();_0x469788[_0x66796c(0xd9)](0x0,0x0,0x0,0x0),_0x2b77d1['getTime']()===_0x469788[_0x66796c(0xe5)]()?await fetchAndDisplayClassesAvailable_API(!![]):await fetchAndDisplayClassesAvailable_API(![]);}async function fetchAndDisplayClassesAvailable_API(_0x4f1caa){const _0x42475d=a0_0x191a4a,_0xf810f=document[_0x42475d(0x9a)](_0x42475d(0xe3)),_0x1ac413=document[_0x42475d(0x9a)](_0x42475d(0x101)),_0x38cdb8=document[_0x42475d(0x9a)](_0x42475d(0xdb));if(!_0xf810f||!_0x1ac413||!_0x38cdb8){console[_0x42475d(0x80)](_0x42475d(0xbc));return;}const _0x40f5ab=_0xf810f[_0x42475d(0xb0)],_0x46c92a=_0x1ac413[_0x42475d(0xb0)]['replace'](/-/g,'/');if(!_0x40f5ab){console['log'](_0x42475d(0xf7));return;}const _0x2faf22={'ALX':0x2,'CBD':0x1,'MVL':0x4},_0x24acb2=_0x2faf22[_0x40f5ab],_0x3cec64=localStorage['getItem'](_0x42475d(0xbb));if(!_0x3cec64||!_0x24acb2){console[_0x42475d(0x80)](_0x42475d(0xd7));return;}const _0x33f45e=getLocalDate();let _0x4dd045,_0x42e52d;_0x4f1caa?(_0x4dd045={'UserId':'','clubId':_0x24acb2,'selectedDate':_0x46c92a,'department':_0x42475d(0x7d),'imageHeight':0x12c,'imageWidth':0x1f4},_0x42e52d=_0x42475d(0xd2)):(_0x4dd045={'UserId':_0x3cec64,'clubId':_0x24acb2,'selectedDate':_0x46c92a,'classType':0x0,'accountId':_0x24acb2},_0x42e52d=_0x42475d(0xff));if(_0x46c92a<_0x33f45e)displayClassAvailable([]);else try{const _0x3c2431=await makeApiRequest(_0x42e52d,_0x42475d(0x88),_0x4dd045);displayClassAvailable(_0x3c2431['payload']);}catch(_0x26bc45){console[_0x42475d(0x80)]('Error\x20fetching\x20classes:',_0x26bc45);}}async function makeApiRequest(_0x38ceb1,_0x1075d6,_0x1ebb45){const _0x15336d=a0_0x191a4a,_0x44e323=localStorage[_0x15336d(0x97)]('access_token'),_0x4327b7={'Content-Type':_0x15336d(0x79),'Accept':_0x15336d(0x79),'Authorization':_0x15336d(0xda)+_0x44e323},_0x223ee2={'method':_0x1075d6,'headers':_0x4327b7,'body':JSON[_0x15336d(0xe8)](_0x1ebb45)},_0x2eba14=await fetch(_0x38ceb1,_0x223ee2);if(!_0x2eba14['ok'])throw new Error(_0x15336d(0xa6)+_0x2eba14[_0x15336d(0xfb)]);return await _0x2eba14[_0x15336d(0xec)]();}function displayClassAvailable(_0x5ddd38){const _0x34ed6e=a0_0x191a4a,_0x2b21fc=document['getElementById'](_0x34ed6e(0xdb));_0x2b21fc[_0x34ed6e(0xea)]='';if(_0x5ddd38[_0x34ed6e(0x7f)]===0x0){const _0x1f4f10=document[_0x34ed6e(0x83)](_0x34ed6e(0xf6));_0x1f4f10[_0x34ed6e(0xb0)]='',_0x1f4f10[_0x34ed6e(0x8c)]='No\x20class\x20found',_0x2b21fc['appendChild'](_0x1f4f10);return;}_0x5ddd38[_0x34ed6e(0xa7)](_0x26055f=>{const _0x35f0db=_0x34ed6e,_0x33483b=document[_0x35f0db(0x83)](_0x35f0db(0xf6));_0x33483b['value']=_0x26055f['classScheduleId'],_0x33483b['textContent']=_0x26055f[_0x35f0db(0xc2)]+'\x20'+_0x26055f[_0x35f0db(0xaf)],_0x2b21fc[_0x35f0db(0xb2)](_0x33483b);});}function updateTitle(_0x27fce3,_0x3cdd2e,_0x2442f6,_0x266673){const _0x13ea21=a0_0x191a4a,_0x59610c=document[_0x13ea21(0x9a)](_0x13ea21(0xb3)),_0x4fcf68=new Date(_0x2442f6),_0x30968e=_0x4fcf68['toLocaleDateString'](_0x13ea21(0x94),{'weekday':_0x13ea21(0xfa)}),_0x3249a7=_0x30968e+'\x20'+_0x4fcf68[_0x13ea21(0x9f)]()+'/'+(_0x4fcf68[_0x13ea21(0xef)]()+0x1),_0x4e1fd0=_0x27fce3+'\x20'+_0x3cdd2e+_0x13ea21(0x102)+_0x3249a7+'\x20-\x20'+_0x266673;_0x59610c[_0x13ea21(0x8c)]=_0x4e1fd0;}async function checkAttendees(_0xb2379,_0x149ff2,_0x2eac31){const _0x2ab6f1=a0_0x191a4a,_0x43f18c=_0x2ab6f1(0xce),_0x496346={'classScheduleId':_0xb2379,'selectedDate':_0x149ff2,'classTime':_0x2eac31},_0x469724=localStorage[_0x2ab6f1(0x97)]('access_token'),_0x4015d7={'Content-Type':_0x2ab6f1(0x79),'Accept':_0x2ab6f1(0x79),'Authorization':_0x2ab6f1(0xda)+_0x469724};try{const _0x12c097=await fetch(_0x43f18c,{'method':_0x2ab6f1(0x88),'headers':_0x4015d7,'body':JSON[_0x2ab6f1(0xe8)](_0x496346)});if(!_0x12c097['ok'])throw new Error('HTTP\x20error!\x20status:\x20'+_0x12c097[_0x2ab6f1(0xfb)]);const _0x4998b7=await _0x12c097['json'](),_0x2e884d=_0x4998b7[_0x2ab6f1(0x99)];showAttendees(_0x2e884d);}catch(_0x116930){console['error'](_0x2ab6f1(0xa4),_0x116930),errorAPICheckLogin();}}function showAttendees(_0x32c2d6){const _0x489570=a0_0x191a4a,_0x514bb1=document['querySelector'](_0x489570(0xa1));_0x514bb1[_0x489570(0xea)]='',_0x32c2d6[_0x489570(0xa7)](_0x39b5f1=>{const _0x277cc9=_0x489570,_0x19f762=document[_0x277cc9(0x83)]('div');_0x19f762[_0x277cc9(0xad)][_0x277cc9(0xa9)](_0x277cc9(0xc6));const _0x4fc1de=document[_0x277cc9(0x83)]('img');_0x4fc1de['src']=_0x39b5f1[_0x277cc9(0x78)]||_0x277cc9(0x7a),_0x4fc1de[_0x277cc9(0xcb)]=_0x39b5f1[_0x277cc9(0x74)],_0x4fc1de[_0x277cc9(0xad)][_0x277cc9(0xa9)]('attendee-picture');const _0x533953=document['createElement'](_0x277cc9(0xc5));_0x533953[_0x277cc9(0xad)]['add'](_0x277cc9(0xdc)),_0x533953['textContent']=_0x39b5f1[_0x277cc9(0x74)];const _0x45de60=document[_0x277cc9(0x83)]('div');_0x45de60[_0x277cc9(0xad)][_0x277cc9(0xa9)]('buttons-checkin-noshow');if(_0x39b5f1[_0x277cc9(0xf9)]){const _0x17b6d7=document['createElement'](_0x277cc9(0xc5));_0x17b6d7[_0x277cc9(0x8c)]=_0x277cc9(0xc3),_0x45de60[_0x277cc9(0xb2)](_0x17b6d7);}else{const _0x1a8e86=document[_0x277cc9(0x83)]('a');_0x1a8e86[_0x277cc9(0xf0)]='#',_0x1a8e86[_0x277cc9(0xad)][_0x277cc9(0xa9)](_0x277cc9(0xe6),_0x277cc9(0x76)),_0x1a8e86['textContent']=_0x277cc9(0x81),_0x1a8e86[_0x277cc9(0x103)][_0x277cc9(0xbb)]=_0x39b5f1['number'],_0x1a8e86[_0x277cc9(0x103)]['className']=_0x39b5f1[_0x277cc9(0xe0)][_0x277cc9(0xc8)]['className'],_0x1a8e86[_0x277cc9(0x103)][_0x277cc9(0xaf)]=_0x39b5f1['classSchedule'][_0x277cc9(0xaf)],_0x1a8e86['dataset'][_0x277cc9(0x95)]=_0x39b5f1[_0x277cc9(0xe0)][_0x277cc9(0x95)],_0x1a8e86[_0x277cc9(0x103)][_0x277cc9(0x98)]=_0x39b5f1[_0x277cc9(0x98)];const _0x569b6f=document[_0x277cc9(0x83)]('a');_0x569b6f[_0x277cc9(0xf0)]='#',_0x569b6f[_0x277cc9(0xad)][_0x277cc9(0xa9)](_0x277cc9(0x8a),_0x277cc9(0x76)),_0x569b6f[_0x277cc9(0x8c)]='No\x20Show',_0x569b6f[_0x277cc9(0x103)][_0x277cc9(0xbb)]=_0x39b5f1['number'],_0x569b6f[_0x277cc9(0x103)][_0x277cc9(0xc2)]=_0x39b5f1['classSchedule']['class']['className'],_0x569b6f['dataset'][_0x277cc9(0xaf)]=_0x39b5f1[_0x277cc9(0xe0)][_0x277cc9(0xaf)],_0x569b6f[_0x277cc9(0x103)][_0x277cc9(0x95)]=_0x39b5f1[_0x277cc9(0xe0)][_0x277cc9(0x95)],_0x569b6f['dataset'][_0x277cc9(0xdf)]=_0x39b5f1['id'],_0x45de60[_0x277cc9(0xb2)](_0x1a8e86),_0x45de60[_0x277cc9(0xb2)](_0x569b6f);}_0x19f762[_0x277cc9(0xb2)](_0x4fc1de),_0x19f762[_0x277cc9(0xb2)](_0x533953),_0x19f762[_0x277cc9(0xb2)](_0x45de60),_0x514bb1[_0x277cc9(0xb2)](_0x19f762);});}async function checkInParticipant(_0x4245e3,_0x3ebefb,_0x5ba86b,_0x3b0fae){const _0x4aa5a6=a0_0x191a4a,_0x5f1b41=_0x4aa5a6(0x72),_0x513fd1={'memberNumber':_0x4245e3,'classScheduleId':_0x3ebefb,'classDateTime':_0x5ba86b},_0x441351=localStorage['getItem'](_0x4aa5a6(0xfc)),_0x444227={'Accept':_0x4aa5a6(0x79),'Accept-Language':_0x4aa5a6(0xbd),'Accept-Encoding':'gzip,\x20deflate,\x20br,\x20zstd','Authorization':_0x4aa5a6(0xda)+_0x441351,'Content-Type':_0x4aa5a6(0x79),'Origin':_0x4aa5a6(0xb5),'Connection':'keep-alive','Referer':_0x4aa5a6(0xee),'Sec-Fetch-Dest':_0x4aa5a6(0xde),'Sec-Fetch-Mode':_0x4aa5a6(0x100),'Sec-Fetch-Site':_0x4aa5a6(0xcf),'Priority':_0x4aa5a6(0xac),'TE':_0x4aa5a6(0xb7)};try{const _0x4cd2bb=await fetch(_0x5f1b41,{'method':_0x4aa5a6(0x88),'headers':_0x444227,'body':JSON[_0x4aa5a6(0xe8)](_0x513fd1)});if(!_0x4cd2bb['ok'])throw new Error(_0x4aa5a6(0xa6)+_0x4cd2bb['status']);const _0x3a8e32=await _0x4cd2bb['json']();if(_0x3a8e32[_0x4aa5a6(0x99)]===_0x4aa5a6(0x86)){const _0x55940a=_0x3b0fae['parentElement'];_0x55940a['innerHTML']='';const _0x4f6236=document['createElement'](_0x4aa5a6(0xc5));_0x4f6236[_0x4aa5a6(0x8c)]=_0x4aa5a6(0xc3),_0x55940a[_0x4aa5a6(0xb2)](_0x4f6236);}else console['error'](_0x4aa5a6(0x73),_0x3a8e32[_0x4aa5a6(0xa3)]);}catch(_0x33b75b){console[_0x4aa5a6(0x80)](_0x4aa5a6(0xd5),_0x33b75b);}}function cancelBooking_resolve(_0x4a865c,_0x29a1fb=0x0){return new Promise((_0x535983,_0x266aff)=>{const _0x2ef845=a0_0x5553;var _0x74cf3d=localStorage[_0x2ef845(0x97)](_0x2ef845(0xfc)),_0x47b240='https://crossfit168.clubfit.net.au/api/v1/booking/cancel/'+_0x4a865c,_0x4625e0=new XMLHttpRequest();_0x4625e0[_0x2ef845(0xb9)](_0x2ef845(0x88),_0x47b240,!![]),_0x4625e0[_0x2ef845(0xe2)]('Content-Type',_0x2ef845(0x79)),_0x4625e0[_0x2ef845(0xe2)](_0x2ef845(0xe7),_0x2ef845(0x79)),_0x4625e0[_0x2ef845(0xe2)](_0x2ef845(0xc0),_0x2ef845(0xda)+_0x74cf3d),_0x4625e0['onload']=function(){const _0x539475=_0x2ef845,_0x352800=JSON[_0x539475(0xeb)](_0x4625e0[_0x539475(0xa5)]);_0x4625e0[_0x539475(0xfb)]>=0xc8&&_0x4625e0[_0x539475(0xfb)]<0x12c?(_0x352800[_0x539475(0xbe)]!==0xc8&&console[_0x539475(0xc1)](_0x539475(0xcd),_0x4625e0[_0x539475(0xa5)]),_0x535983(_0x4625e0[_0x539475(0xa5)])):(console[_0x539475(0x80)](_0x539475(0xcc),_0x4625e0[_0x539475(0xfb)]),console[_0x539475(0x80)]('Error\x20details:',_0x4625e0[_0x539475(0xa5)]),_0x29a1fb<0x1?errorAPICheckLogin(function(_0x35ef8d){const _0x4a8baa=_0x539475;_0x35ef8d?cancelBooking_resolve(_0x4a865c,_0x29a1fb+0x1)[_0x4a8baa(0x91)](_0x535983)[_0x4a8baa(0xab)](_0x266aff):_0x266aff(new Error(_0x4a8baa(0x84)));}):_0x266aff(new Error(_0x539475(0x8d))));},_0x4625e0[_0x2ef845(0x9b)]=function(){const _0x169111=_0x2ef845;console[_0x169111(0x80)](_0x169111(0xf1)),_0x29a1fb<0x1?errorAPICheckLogin(function(_0x419ef8){const _0x5b5a39=_0x169111;_0x419ef8?cancelBooking_resolve(_0x4a865c,_0x29a1fb+0x1)[_0x5b5a39(0x91)](_0x535983)[_0x5b5a39(0xab)](_0x266aff):_0x266aff(new Error(_0x5b5a39(0xfe)));}):_0x266aff(new Error(_0x169111(0x85)));},_0x4625e0['send']();});}function errorAPICheckLogin(_0x16953a){const _0x2fce59=a0_0x191a4a;console[_0x2fce59(0xc1)](_0x2fce59(0xfd)),validateLogin(function(_0x3c136b){const _0x2e5902=_0x2fce59;_0x3c136b?(console[_0x2e5902(0xc1)](_0x2e5902(0x87)),_0x16953a(!![])):(console[_0x2e5902(0xc1)](_0x2e5902(0xf4)),window[_0x2e5902(0x90)]['href']='/');});}function validateLogin(_0x8475a2){const _0x35f0e9=a0_0x191a4a;if(!localStorage['getItem']('access_token')||!localStorage['getItem'](_0x35f0e9(0xbb))||!localStorage['getItem'](_0x35f0e9(0xbf))){console['error']('validateLogin\x20-\x20Required\x20session\x20storage\x20items\x20are\x20missing'),_0x8475a2(![]);return;}const _0x21f0a8=_0x35f0e9(0x8f),_0x24bdf6='POST',_0x163175={'xoken':localStorage['getItem'](_0x35f0e9(0x7e)),'userId':localStorage[_0x35f0e9(0x97)](_0x35f0e9(0xdd)),'userType':localStorage['getItem'](_0x35f0e9(0xbf))};makeApiRequest(_0x21f0a8,_0x24bdf6,_0x163175,function(_0x4157ce){const _0x40e19c=_0x35f0e9;Object[_0x40e19c(0x9c)](_0x4157ce[_0x40e19c(0x99)])[_0x40e19c(0xa7)](function(_0xb328d9){const _0x262d36=_0x40e19c;localStorage['setItem'](_0xb328d9,_0x4157ce[_0x262d36(0x99)][_0xb328d9]);}),_0x8475a2(!![]);},function(_0x2238e6){const _0x3f556a=_0x35f0e9;console[_0x3f556a(0x80)](_0x3f556a(0x77),_0x2238e6),_0x8475a2(![]);});}function getLocalDate(){const _0x48dcfa=a0_0x191a4a,_0x534ab3=new Date(),_0x2da896=_0x534ab3[_0x48dcfa(0xa2)]()*0xea60,_0x1c85ca=new Date(_0x534ab3-_0x2da896)[_0x48dcfa(0xa8)]()['slice'](0x0,0xa);return _0x1c85ca;}