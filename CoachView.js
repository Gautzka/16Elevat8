const a0_0x21fd7f=a0_0x4662;(function(_0x1046e8,_0x51eb74){const _0x2a19a9=a0_0x4662,_0x1adf20=_0x1046e8();while(!![]){try{const _0x5e9dc6=-parseInt(_0x2a19a9(0x1ce))/0x1+parseInt(_0x2a19a9(0x211))/0x2*(parseInt(_0x2a19a9(0x221))/0x3)+-parseInt(_0x2a19a9(0x1c7))/0x4*(-parseInt(_0x2a19a9(0x1e2))/0x5)+parseInt(_0x2a19a9(0x1cb))/0x6+parseInt(_0x2a19a9(0x236))/0x7*(-parseInt(_0x2a19a9(0x1ea))/0x8)+-parseInt(_0x2a19a9(0x202))/0x9+parseInt(_0x2a19a9(0x1f3))/0xa*(parseInt(_0x2a19a9(0x228))/0xb);if(_0x5e9dc6===_0x51eb74)break;else _0x1adf20['push'](_0x1adf20['shift']());}catch(_0x65d664){_0x1adf20['push'](_0x1adf20['shift']());}}}(a0_0x1165,0x837f0),document[a0_0x21fd7f(0x200)]('DOMContentLoaded',()=>{initializePage(),setupEventListeners(),initializeSidebar();}));function initializeSidebar(){const _0x1bbdeb=a0_0x21fd7f,_0x1fa2c8=document[_0x1bbdeb(0x21c)](_0x1bbdeb(0x1b6)),_0x2b5499=document[_0x1bbdeb(0x21c)](_0x1bbdeb(0x208)),_0x1f3933=document['querySelector'](_0x1bbdeb(0x219));_0x1fa2c8[_0x1bbdeb(0x1b3)]['visible']=_0x1bbdeb(0x1b8),_0x2b5499['addEventListener'](_0x1bbdeb(0x1d3),()=>toggleSidebar(_0x1fa2c8,_0x1f3933));}function toggleSidebar(_0x1e2f55,_0x578102){const _0x5ed85f=a0_0x21fd7f;_0x1e2f55[_0x5ed85f(0x1b3)][_0x5ed85f(0x1b4)]===_0x5ed85f(0x1b8)?(_0x1e2f55['style']['transform']=_0x5ed85f(0x23c),_0x578102[_0x5ed85f(0x1fb)]['marginLeft']='0',_0x1e2f55[_0x5ed85f(0x1b3)][_0x5ed85f(0x1b4)]=_0x5ed85f(0x1d6)):(_0x1e2f55[_0x5ed85f(0x1fb)][_0x5ed85f(0x1c3)]='',_0x578102[_0x5ed85f(0x1fb)][_0x5ed85f(0x1ff)]='15rem',_0x1e2f55[_0x5ed85f(0x1b3)][_0x5ed85f(0x1b4)]=_0x5ed85f(0x1b8));}async function initializePage(){initDatePicker(),await fetchAndDisplayClassesAvailable_API_CurrentDate(),fetchAndDisplayAttendees();}function setupEventListeners(){const _0x488c75=a0_0x21fd7f,_0x21c966=document[_0x488c75(0x225)](_0x488c75(0x245)),_0x51db0b=document[_0x488c75(0x225)]('prevDay'),_0x57668e=document[_0x488c75(0x225)](_0x488c75(0x1bc)),_0x86afac=document[_0x488c75(0x225)](_0x488c75(0x1c9)),_0x204701=document[_0x488c75(0x225)](_0x488c75(0x1af)),_0x523879=document[_0x488c75(0x225)](_0x488c75(0x235));_0x51db0b[_0x488c75(0x200)](_0x488c75(0x1d3),handlePrevDayClick),_0x57668e[_0x488c75(0x200)](_0x488c75(0x1d3),handleNextDayClick),_0x21c966[_0x488c75(0x200)](_0x488c75(0x1e8),handleDateChange),_0x86afac[_0x488c75(0x200)](_0x488c75(0x1e8),handleLocationChange),_0x204701[_0x488c75(0x200)](_0x488c75(0x1e8),handleClassChange),_0x523879&&_0x523879['addEventListener'](_0x488c75(0x1d3),handleRefreshButtonClick),document[_0x488c75(0x200)](_0x488c75(0x1d3),handleButtonClicks);}async function handlePrevDayClick(){const _0x221a95=a0_0x21fd7f;adjustOneDayDate(-0x1);const _0x191abc=document[_0x221a95(0x225)](_0x221a95(0x245))[_0x221a95(0x1da)];saveDatePickerSessionStorage(_0x191abc),await fetchAndDisplayClassesAvailable_Choose(),fetchAndDisplayAttendees();}async function handleNextDayClick(){const _0x314fae=a0_0x21fd7f;adjustOneDayDate(0x1);const _0x42998d=document[_0x314fae(0x225)](_0x314fae(0x245))['value'];saveDatePickerSessionStorage(_0x42998d),await fetchAndDisplayClassesAvailable_Choose(),fetchAndDisplayAttendees();}async function handleDateChange(){const _0x533e39=a0_0x21fd7f,_0x1d93fb=document[_0x533e39(0x225)](_0x533e39(0x245))[_0x533e39(0x1da)];saveDatePickerSessionStorage(_0x1d93fb),await fetchAndDisplayClassesAvailable_Choose(),fetchAndDisplayAttendees();}async function handleLocationChange(){await fetchAndDisplayClassesAvailable_Choose(),fetchAndDisplayAttendees();}function handleClassChange(){fetchAndDisplayAttendees();}function handleRefreshButtonClick(){fetchAndDisplayAttendees();}function handleButtonClicks(_0x534b51){const _0x20a0be=a0_0x21fd7f;if(_0x534b51['target'][_0x20a0be(0x1ee)]['contains']('checkin-button')){_0x534b51[_0x20a0be(0x226)]();const _0x47dc67=_0x534b51['target'],_0x182232=_0x47dc67[_0x20a0be(0x1b3)][_0x20a0be(0x1eb)],_0x2e6f5c=_0x47dc67[_0x20a0be(0x1b3)][_0x20a0be(0x1fd)],_0x47fe30=_0x47dc67[_0x20a0be(0x1b3)][_0x20a0be(0x22d)];checkInParticipant(_0x182232,_0x2e6f5c,_0x47fe30,_0x47dc67);}else{if(_0x534b51[_0x20a0be(0x1f7)][_0x20a0be(0x1ee)][_0x20a0be(0x1fc)](_0x20a0be(0x1f9))){_0x534b51['preventDefault']();const _0x524a6f=_0x534b51['target'],_0x4dce3b=_0x524a6f[_0x20a0be(0x1b3)][_0x20a0be(0x22f)];cancelBooking_resolve(_0x4dce3b)[_0x20a0be(0x1b9)](_0x319737=>{const _0x32c1ab=_0x20a0be,_0x4a48a9=_0x524a6f['parentElement'];_0x4a48a9[_0x32c1ab(0x220)]='';const _0x56c7ad=document[_0x32c1ab(0x239)](_0x32c1ab(0x247));_0x56c7ad[_0x32c1ab(0x1c4)]=_0x32c1ab(0x223),_0x4a48a9[_0x32c1ab(0x23d)](_0x56c7ad);})[_0x20a0be(0x243)](_0x1e22f7=>{const _0x2c5e35=_0x20a0be;console[_0x2c5e35(0x230)]('Error\x20during\x20No\x20Show\x20API\x20call:',_0x1e22f7);});}}}function a0_0x1165(){const _0x44b071=['Member','class','number','name-attendee','HTTP\x20error!\x20status:\x20','https://myaccount.clubfit.net.au/','slice','144805oOyqOx','fetchAndDisplayClassesAvailable_API_CurrentDate','refresh_token','https://crossfit168.clubfit.net.au/api/v1/booking/cancel/','getTime','attendee-class','change','https://crossfit168.clubfit.net.au/api/v1/booking/search-classes-current-date','100312gByqbo','userId','Required\x20information\x20is\x20missing\x20from\x20local\x20storage\x20or\x20location\x20ID\x20map.','Error\x20fetching\x20classes:','classList','add','getMonth','img','classSchedule','10vbYsIh','href','trailers','POST','target','attendee-picture','noshow-button','Accept','style','contains','classScheduleId','onerror','marginLeft','addEventListener','className','1667520AMTveI','getTimezoneOffset','Check-in','No\x20location\x20selected.','parse','responseText','.toggle-button','errorAPICheckLogin\x20-\x20function\x20called','portalUserId','getDate','selectedDate','u=1','title-coachview','send','open','207432FIeppN','success','w-button','Error\x20details:','todayDate.getTime():\x20','log','errorAPICheckLogin\x20-\x20login\x20not\x20validated','setRequestHeader','.outside-sidebar','cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20network\x20error\x20and\x20retry','Response\x20received:','querySelector','payload','statusCode','json','innerHTML','12kGvyDz','src','No\x20Show','https://myaccount.clubfit.net.au','getElementById','preventDefault','cancelBooking_resolve\x20-\x20Cancellation\x20failed','4070231XhYQKN','Required\x20elements\x20not\x20found\x20in\x20the\x20DOM.','.class-attendees','options','classTime','classDateTime','Confirmed','memberBookingId','error','forEach','location','option','gzip,\x20deflate,\x20br,\x20zstd','refresh-attendees','259KXhGQc','timestampLastChanged','fullName','createElement','cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20retry','en-AU','translateX(-100%)','appendChild','en-US,en;q=0.5','validateLogin\x20-\x20Validation\x20failed:','\x20-\x20','cancelBooking_resolve\x20-\x20Network\x20error','same-site','catch','toLocaleDateString','datePicker','application/json','div','class-chosen','status','memberPhotoLocation','selectedIndex','dataset','visible','access_token','.sidebar','Bearer\x20','true','then','keys','stringify','nextDay','cancelBooking_resolve\x20-\x20Network\x20error\x20while\x20cancelling\x20booking','empty','toISOString','setHours','parentElement','https://crossfit168.clubfit.net.au/api/v1/booking/class-participants','transform','textContent','userType','getFullYear','4raIcQk','keep-alive','location-chosen','https://crossfit168.clubfit.net.au/api/v1/booking/book-class-participant-checkin','5565180UxjzIY','validateLogin\x20-\x20Required\x20session\x20storage\x20items\x20are\x20missing','join','553545HGluyM','hasAttended','Authorization','long','https://crossfit168.clubfit.net.au/api/v1/booking/search-classes','click','onload','getItem','false','setItem','Check-in\x20failed:','length','value'];a0_0x1165=function(){return _0x44b071;};return a0_0x1165();}function fetchAndDisplayAttendees(){const _0x52f357=a0_0x21fd7f,_0x56c177=document['getElementById'](_0x52f357(0x1af)),_0x1c2266=document[_0x52f357(0x225)](_0x52f357(0x245)),_0x4268f3=_0x56c177[_0x52f357(0x22b)][_0x56c177['selectedIndex']],_0x3a3cf6=_0x4268f3['value'],_0x4777de=_0x4268f3[_0x52f357(0x1c4)]['split']('\x20'),_0x1a8350=_0x4777de[0x0],_0x249e43=_0x4777de[_0x52f357(0x1e1)](0x1)[_0x52f357(0x1cd)]('\x20'),_0xead131=_0x1c2266[_0x52f357(0x1da)],_0x4f24ab=document['getElementById'](_0x52f357(0x1c9)),_0x4bf3d5=_0x4f24ab[_0x52f357(0x22b)][_0x4f24ab[_0x52f357(0x1b2)]]['text'];if(_0x4268f3[_0x52f357(0x1c4)]==='No\x20class\x20found'){const _0x19c036=document[_0x52f357(0x21c)](_0x52f357(0x22a));_0x19c036['innerHTML']='';const _0x2a0955=document[_0x52f357(0x225)]('title-coachview');_0x2a0955[_0x52f357(0x1c4)]=_0x4268f3[_0x52f357(0x1c4)];}else checkAttendees(_0x3a3cf6,_0xead131,_0x249e43),updateTitle(_0x1a8350,_0x249e43,_0xead131,_0x4bf3d5);}function initDatePicker(){const _0x4d5712=a0_0x21fd7f,_0x3dfafd=document[_0x4d5712(0x225)](_0x4d5712(0x245));let _0x56012a=sessionStorage['getItem'](_0x4d5712(0x20c)),_0x1950f3=sessionStorage['getItem'](_0x4d5712(0x237));if(_0x56012a&&_0x1950f3&&isWithinValidityPeriod(_0x1950f3,0.5))_0x3dfafd[_0x4d5712(0x1da)]=_0x56012a;else{const _0x11039e=getLocalDate();_0x3dfafd[_0x4d5712(0x1da)]=_0x11039e,saveDatePickerSessionStorage(_0x11039e);}}function saveDatePickerSessionStorage(_0x5d7b30){const _0x1b1abc=a0_0x21fd7f;sessionStorage[_0x1b1abc(0x1d7)](_0x1b1abc(0x20c),_0x5d7b30);const _0x8f5a1c=new Date()[_0x1b1abc(0x1e6)]();sessionStorage['setItem'](_0x1b1abc(0x237),_0x8f5a1c);}function adjustOneDayDate(_0x48f2b2){const _0xbe6148=a0_0x21fd7f,_0x93183a=document[_0xbe6148(0x225)](_0xbe6148(0x245)),_0x471d62=new Date(_0x93183a[_0xbe6148(0x1da)]+'T00:00:00');_0x471d62['setDate'](_0x471d62['getDate']()+_0x48f2b2),_0x93183a[_0xbe6148(0x1da)]=formatDate(_0x471d62);}function isWithinValidityPeriod(_0x4a2ee1,_0x249db0){const _0x47e0b5=a0_0x21fd7f,_0xc170e2=new Date()[_0x47e0b5(0x1e6)](),_0x187292=(_0xc170e2-_0x4a2ee1)/(0x3e8*0x3c*0x3c);return _0x187292<=_0x249db0;}function formatDate(_0x13c650){const _0xd7c576=a0_0x21fd7f;let _0x4c8eac=new Date(_0x13c650),_0x5f2356=''+(_0x4c8eac['getMonth']()+0x1),_0x24bff6=''+_0x4c8eac[_0xd7c576(0x20b)](),_0x538f88=_0x4c8eac[_0xd7c576(0x1c6)]();if(_0x5f2356[_0xd7c576(0x1d9)]<0x2)_0x5f2356='0'+_0x5f2356;if(_0x24bff6[_0xd7c576(0x1d9)]<0x2)_0x24bff6='0'+_0x24bff6;return[_0x538f88,_0x5f2356,_0x24bff6][_0xd7c576(0x1cd)]('-');}async function fetchAndDisplayClassesAvailable_Choose(){const _0x283c0d=a0_0x21fd7f,_0x43f981=document[_0x283c0d(0x225)]('datePicker'),_0x2f270c=new Date(_0x43f981[_0x283c0d(0x1da)]);_0x2f270c['setHours'](0x0,0x0,0x0,0x0);const _0x20f9e7=new Date();_0x20f9e7[_0x283c0d(0x1c0)](0x0,0x0,0x0,0x0),console[_0x283c0d(0x216)]('selectedDate.getTime():\x20'+_0x2f270c[_0x283c0d(0x1e6)]()),console[_0x283c0d(0x216)](_0x283c0d(0x215)+_0x20f9e7['getTime']()),_0x2f270c[_0x283c0d(0x1e6)]()===_0x20f9e7[_0x283c0d(0x1e6)]()?(console[_0x283c0d(0x216)](_0x283c0d(0x1e3)),await fetchAndDisplayClassesAvailable_API_CurrentDate()):(console['log']('fetchAndDisplayClassesAvailable'),await fetchAndDisplayClassesAvailable());}async function fetchAndDisplayClassesAvailable_API_CurrentDate(){const _0x62d044=a0_0x21fd7f,_0xc83aeb=document['getElementById'](_0x62d044(0x1c9)),_0x22731d=document[_0x62d044(0x225)](_0x62d044(0x245)),_0x123a4a=document['getElementById']('class-chosen');if(!_0xc83aeb||!_0x22731d||!_0x123a4a){console[_0x62d044(0x230)](_0x62d044(0x229));return;}const _0xbd1651=_0xc83aeb[_0x62d044(0x1da)],_0x3a3abb=_0x22731d[_0x62d044(0x1da)]['replace'](/-/g,'/');if(!_0xbd1651){console[_0x62d044(0x216)]('No\x20location\x20selected.');return;}const _0x39f321={'ALX':0x2,'CBD':0x1,'MVL':0x4},_0x578014=_0x39f321[_0xbd1651],_0x30735c=localStorage[_0x62d044(0x1d5)](_0x62d044(0x1eb));if(!_0x30735c||!_0x578014){console['error'](_0x62d044(0x1ec));return;}const _0x3ad743={'UserId':'','clubId':_0x578014,'selectedDate':_0x3a3abb,'department':_0x62d044(0x1db),'imageHeight':0x12c,'imageWidth':0x1f4},_0x2217eb=getLocalDate();if(_0x3a3abb<_0x2217eb)displayClassAvailable([]);else{const _0x346379=_0x62d044(0x1e9);try{const _0x11e759=await makeApiRequest(_0x346379,_0x62d044(0x1f6),_0x3ad743);displayClassAvailable(_0x11e759[_0x62d044(0x21d)]);}catch(_0x374935){console[_0x62d044(0x230)](_0x62d044(0x1ed),_0x374935);}}}async function fetchAndDisplayClassesAvailable(){const _0x333007=a0_0x21fd7f,_0x2ea8c4=document[_0x333007(0x225)](_0x333007(0x1c9)),_0x4e43e3=document[_0x333007(0x225)]('datePicker'),_0x309584=document['getElementById']('class-chosen');if(!_0x2ea8c4||!_0x4e43e3||!_0x309584){console[_0x333007(0x230)](_0x333007(0x229));return;}const _0x36d5f1=_0x2ea8c4[_0x333007(0x1da)],_0xb6673=_0x4e43e3[_0x333007(0x1da)];if(!_0x36d5f1){console[_0x333007(0x216)](_0x333007(0x205));return;}const _0x5ec21d={'ALX':0x2,'CBD':0x1,'MVL':0x4},_0x88f346=_0x5ec21d[_0x36d5f1],_0x24291f=localStorage[_0x333007(0x1d5)](_0x333007(0x1eb));if(!_0x24291f||!_0x88f346){console[_0x333007(0x230)](_0x333007(0x1ec));return;}const _0x3147c0={'UserId':_0x24291f,'clubId':_0x88f346,'selectedDate':_0xb6673,'classType':0x0,'accountId':_0x88f346},_0x5493de=getLocalDate();if(_0xb6673<_0x5493de)displayClassAvailable([]);else{const _0x3ad4c4=_0x333007(0x1d2);try{const _0x2e5546=await makeApiRequest(_0x3ad4c4,_0x333007(0x1f6),_0x3147c0);displayClassAvailable(_0x2e5546['payload']);}catch(_0x195fef){console[_0x333007(0x230)](_0x333007(0x1ed),_0x195fef);}}}async function makeApiRequest(_0x21c2cd,_0x1cb972,_0x43a52c){const _0xc11913=a0_0x21fd7f,_0x5743ca=localStorage[_0xc11913(0x1d5)](_0xc11913(0x1b5)),_0x5be3b4={'Content-Type':_0xc11913(0x246),'Accept':_0xc11913(0x246),'Authorization':'Bearer\x20'+_0x5743ca},_0x3dc1e4={'method':_0x1cb972,'headers':_0x5be3b4,'body':JSON['stringify'](_0x43a52c)},_0x3d3bf3=await fetch(_0x21c2cd,_0x3dc1e4);if(!_0x3d3bf3['ok'])throw new Error('HTTP\x20error!\x20status:\x20'+_0x3d3bf3['status']);return await _0x3d3bf3[_0xc11913(0x21f)]();}function displayClassAvailable(_0x578541){const _0x4c4f79=a0_0x21fd7f,_0x2e0229=document['getElementById'](_0x4c4f79(0x1af));_0x2e0229[_0x4c4f79(0x220)]='';if(_0x578541['length']===0x0){const _0x2a923d=document['createElement'](_0x4c4f79(0x233));_0x2a923d['value']='',_0x2a923d[_0x4c4f79(0x1c4)]='No\x20class\x20found',_0x2e0229['appendChild'](_0x2a923d);return;}_0x578541[_0x4c4f79(0x231)](_0x230545=>{const _0xa507c2=_0x4c4f79,_0x33f60f=document[_0xa507c2(0x239)](_0xa507c2(0x233));_0x33f60f['value']=_0x230545[_0xa507c2(0x1fd)],_0x33f60f[_0xa507c2(0x1c4)]=_0x230545['className']+'\x20'+_0x230545[_0xa507c2(0x22c)],_0x2e0229['appendChild'](_0x33f60f);});}function updateTitle(_0xcd3e85,_0x7abe55,_0x2e41f3,_0x12cadb){const _0x1651ca=a0_0x21fd7f,_0x3d7629=document[_0x1651ca(0x225)](_0x1651ca(0x20e)),_0xaea2b3=new Date(_0x2e41f3),_0x11ef46=_0xaea2b3[_0x1651ca(0x244)](_0x1651ca(0x23b),{'weekday':_0x1651ca(0x1d1)}),_0x187b99=_0x11ef46+'\x20'+_0xaea2b3[_0x1651ca(0x20b)]()+'/'+(_0xaea2b3[_0x1651ca(0x1f0)]()+0x1),_0x134559=_0xcd3e85+'\x20'+_0x7abe55+'\x20-\x20'+_0x187b99+_0x1651ca(0x240)+_0x12cadb;_0x3d7629[_0x1651ca(0x1c4)]=_0x134559;}async function checkAttendees(_0x5900b3,_0x476337,_0x27c508){const _0x428c31=a0_0x21fd7f,_0x11a7be=_0x428c31(0x1c2),_0x333220={'classScheduleId':_0x5900b3,'selectedDate':_0x476337,'classTime':_0x27c508},_0x42cd73=localStorage[_0x428c31(0x1d5)]('access_token'),_0x413a1d={'Content-Type':_0x428c31(0x246),'Accept':_0x428c31(0x246),'Authorization':_0x428c31(0x1b7)+_0x42cd73};try{const _0x1210e0=await fetch(_0x11a7be,{'method':_0x428c31(0x1f6),'headers':_0x413a1d,'body':JSON[_0x428c31(0x1bb)](_0x333220)});if(!_0x1210e0['ok'])throw new Error(_0x428c31(0x1df)+_0x1210e0[_0x428c31(0x1b0)]);const _0x402339=await _0x1210e0[_0x428c31(0x21f)](),_0x94703c=_0x402339[_0x428c31(0x21d)];showAttendees(_0x94703c);}catch(_0x3fdef0){console[_0x428c31(0x230)]('checkAttendees\x20-\x20Error\x20while\x20checking\x20attendees:',_0x3fdef0),errorAPICheckLogin();}}function showAttendees(_0x468755){const _0x1cc7bf=a0_0x21fd7f,_0x2c5e4e=document['querySelector'](_0x1cc7bf(0x22a));_0x2c5e4e[_0x1cc7bf(0x220)]='',_0x468755['forEach'](_0x4e9d50=>{const _0x2786c7=_0x1cc7bf,_0x39a59a=document[_0x2786c7(0x239)]('div');_0x39a59a[_0x2786c7(0x1ee)][_0x2786c7(0x1ef)](_0x2786c7(0x1e7));const _0x24a889=document['createElement'](_0x2786c7(0x1f1));_0x24a889[_0x2786c7(0x222)]=_0x4e9d50[_0x2786c7(0x1b1)]||'https://clubfitassets.s3.ap-southeast-2.amazonaws.com/common/avatar_default.png',_0x24a889['alt']=_0x4e9d50[_0x2786c7(0x238)],_0x24a889[_0x2786c7(0x1ee)][_0x2786c7(0x1ef)](_0x2786c7(0x1f8));const _0x675673=document[_0x2786c7(0x239)](_0x2786c7(0x247));_0x675673[_0x2786c7(0x1ee)][_0x2786c7(0x1ef)](_0x2786c7(0x1de)),_0x675673['textContent']=_0x4e9d50[_0x2786c7(0x238)];const _0x4012af=document['createElement'](_0x2786c7(0x247));_0x4012af[_0x2786c7(0x1ee)][_0x2786c7(0x1ef)]('buttons-checkin-noshow');if(_0x4e9d50[_0x2786c7(0x1cf)]){const _0x3daddf=document[_0x2786c7(0x239)]('div');_0x3daddf[_0x2786c7(0x1c4)]=_0x2786c7(0x22e),_0x4012af[_0x2786c7(0x23d)](_0x3daddf);}else{const _0x8717e6=document['createElement']('a');_0x8717e6[_0x2786c7(0x1f4)]='#',_0x8717e6[_0x2786c7(0x1ee)][_0x2786c7(0x1ef)]('checkin-button','w-button'),_0x8717e6['textContent']=_0x2786c7(0x204),_0x8717e6[_0x2786c7(0x1b3)][_0x2786c7(0x1eb)]=_0x4e9d50[_0x2786c7(0x1dd)],_0x8717e6[_0x2786c7(0x1b3)][_0x2786c7(0x201)]=_0x4e9d50[_0x2786c7(0x1f2)][_0x2786c7(0x1dc)][_0x2786c7(0x201)],_0x8717e6[_0x2786c7(0x1b3)][_0x2786c7(0x22c)]=_0x4e9d50['classSchedule'][_0x2786c7(0x22c)],_0x8717e6['dataset'][_0x2786c7(0x1fd)]=_0x4e9d50[_0x2786c7(0x1f2)][_0x2786c7(0x1fd)],_0x8717e6['dataset'][_0x2786c7(0x22d)]=_0x4e9d50[_0x2786c7(0x22d)];const _0x29678e=document['createElement']('a');_0x29678e[_0x2786c7(0x1f4)]='#',_0x29678e[_0x2786c7(0x1ee)]['add']('noshow-button',_0x2786c7(0x213)),_0x29678e[_0x2786c7(0x1c4)]=_0x2786c7(0x223),_0x29678e['dataset']['userId']=_0x4e9d50['number'],_0x29678e[_0x2786c7(0x1b3)][_0x2786c7(0x201)]=_0x4e9d50['classSchedule'][_0x2786c7(0x1dc)][_0x2786c7(0x201)],_0x29678e['dataset']['classTime']=_0x4e9d50['classSchedule']['classTime'],_0x29678e[_0x2786c7(0x1b3)][_0x2786c7(0x1fd)]=_0x4e9d50[_0x2786c7(0x1f2)]['classScheduleId'],_0x29678e[_0x2786c7(0x1b3)][_0x2786c7(0x22f)]=_0x4e9d50['id'],_0x4012af[_0x2786c7(0x23d)](_0x8717e6),_0x4012af['appendChild'](_0x29678e);}_0x39a59a['appendChild'](_0x24a889),_0x39a59a[_0x2786c7(0x23d)](_0x675673),_0x39a59a[_0x2786c7(0x23d)](_0x4012af),_0x2c5e4e[_0x2786c7(0x23d)](_0x39a59a);});}async function checkInParticipant(_0x28b770,_0x21de07,_0x154b54,_0x14089a){const _0xd108b7=a0_0x21fd7f,_0x5b8722=_0xd108b7(0x1ca),_0x4d5e14={'memberNumber':_0x28b770,'classScheduleId':_0x21de07,'classDateTime':_0x154b54},_0x39e707=localStorage['getItem'](_0xd108b7(0x1b5)),_0x16ef36={'Accept':'application/json','Accept-Language':_0xd108b7(0x23e),'Accept-Encoding':_0xd108b7(0x234),'Authorization':_0xd108b7(0x1b7)+_0x39e707,'Content-Type':_0xd108b7(0x246),'Origin':_0xd108b7(0x224),'Connection':_0xd108b7(0x1c8),'Referer':_0xd108b7(0x1e0),'Sec-Fetch-Dest':_0xd108b7(0x1be),'Sec-Fetch-Mode':'cors','Sec-Fetch-Site':_0xd108b7(0x242),'Priority':_0xd108b7(0x20d),'TE':_0xd108b7(0x1f5)};try{const _0x3e71e4=await fetch(_0x5b8722,{'method':'POST','headers':_0x16ef36,'body':JSON['stringify'](_0x4d5e14)});if(!_0x3e71e4['ok'])throw new Error('HTTP\x20error!\x20status:\x20'+_0x3e71e4[_0xd108b7(0x1b0)]);const _0x35605f=await _0x3e71e4[_0xd108b7(0x21f)]();if(_0x35605f['payload']===_0xd108b7(0x212)){const _0x26ad87=_0x14089a[_0xd108b7(0x1c1)];_0x26ad87['innerHTML']='';const _0x4009f7=document[_0xd108b7(0x239)](_0xd108b7(0x247));_0x4009f7[_0xd108b7(0x1c4)]='Confirmed',_0x26ad87[_0xd108b7(0x23d)](_0x4009f7);}else console[_0xd108b7(0x230)](_0xd108b7(0x1d8),_0x35605f['errors']);}catch(_0x5b2b7b){console[_0xd108b7(0x230)]('Error\x20during\x20API\x20call:',_0x5b2b7b);}}function cancelBooking_resolve(_0x559b78,_0x29ad00=0x0){return new Promise((_0x5b0709,_0x387569)=>{const _0x4955c7=a0_0x4662;var _0x3ee8e1=localStorage['getItem'](_0x4955c7(0x1b5)),_0x254b83=_0x4955c7(0x1e5)+_0x559b78,_0x11245e=new XMLHttpRequest();_0x11245e[_0x4955c7(0x210)](_0x4955c7(0x1f6),_0x254b83,!![]),_0x11245e[_0x4955c7(0x218)]('Content-Type',_0x4955c7(0x246)),_0x11245e[_0x4955c7(0x218)](_0x4955c7(0x1fa),_0x4955c7(0x246)),_0x11245e['setRequestHeader'](_0x4955c7(0x1d0),'Bearer\x20'+_0x3ee8e1),_0x11245e[_0x4955c7(0x1d4)]=function(){const _0x1d24d0=_0x4955c7,_0x1b15c2=JSON[_0x1d24d0(0x206)](_0x11245e[_0x1d24d0(0x207)]);_0x11245e['status']>=0xc8&&_0x11245e[_0x1d24d0(0x1b0)]<0x12c?(_0x1b15c2[_0x1d24d0(0x21e)]!==0xc8&&console[_0x1d24d0(0x216)](_0x1d24d0(0x21b),_0x11245e[_0x1d24d0(0x207)]),_0x5b0709(_0x11245e[_0x1d24d0(0x207)])):(console['error']('Error\x20while\x20cancelling\x20booking,\x20xhr.status:\x20',_0x11245e[_0x1d24d0(0x1b0)]),console['error'](_0x1d24d0(0x214),_0x11245e[_0x1d24d0(0x207)]),_0x29ad00<0x1?errorAPICheckLogin(function(_0x20f3b7){const _0x248c74=_0x1d24d0;_0x20f3b7?cancelBooking_resolve(_0x559b78,_0x29ad00+0x1)['then'](_0x5b0709)[_0x248c74(0x243)](_0x387569):_0x387569(new Error(_0x248c74(0x23a)));}):_0x387569(new Error(_0x1d24d0(0x227))));},_0x11245e[_0x4955c7(0x1fe)]=function(){const _0x58c51d=_0x4955c7;console[_0x58c51d(0x230)](_0x58c51d(0x1bd)),_0x29ad00<0x1?errorAPICheckLogin(function(_0x44b29a){const _0x520ec5=_0x58c51d;_0x44b29a?cancelBooking_resolve(_0x559b78,_0x29ad00+0x1)['then'](_0x5b0709)[_0x520ec5(0x243)](_0x387569):_0x387569(new Error(_0x520ec5(0x21a)));}):_0x387569(new Error(_0x58c51d(0x241)));},_0x11245e[_0x4955c7(0x20f)]();});}function errorAPICheckLogin(_0x2693bf){const _0x46d631=a0_0x21fd7f;console['log'](_0x46d631(0x209)),validateLogin(function(_0x4fff51){const _0x1f467d=_0x46d631;_0x4fff51?(console[_0x1f467d(0x216)]('errorAPICheckLogin\x20-\x20login\x20validated'),_0x2693bf(!![])):(console[_0x1f467d(0x216)](_0x1f467d(0x217)),window[_0x1f467d(0x232)][_0x1f467d(0x1f4)]='/');});}function validateLogin(_0x19235b){const _0x1d06d6=a0_0x21fd7f;if(!localStorage[_0x1d06d6(0x1d5)](_0x1d06d6(0x1b5))||!localStorage['getItem']('userId')||!localStorage[_0x1d06d6(0x1d5)]('userType')){console[_0x1d06d6(0x230)](_0x1d06d6(0x1cc)),_0x19235b(![]);return;}const _0x444bd1='https://admin.clubfit.net.au/api/v1/account/validate',_0x52615b='POST',_0x34b777={'xoken':localStorage[_0x1d06d6(0x1d5)](_0x1d06d6(0x1e4)),'userId':localStorage[_0x1d06d6(0x1d5)](_0x1d06d6(0x20a)),'userType':localStorage[_0x1d06d6(0x1d5)](_0x1d06d6(0x1c5))};makeApiRequest(_0x444bd1,_0x52615b,_0x34b777,function(_0x535c9f){const _0x3e458b=_0x1d06d6;Object[_0x3e458b(0x1ba)](_0x535c9f[_0x3e458b(0x21d)])[_0x3e458b(0x231)](function(_0x44eec3){const _0x58d1da=_0x3e458b;localStorage[_0x58d1da(0x1d7)](_0x44eec3,_0x535c9f[_0x58d1da(0x21d)][_0x44eec3]);}),_0x19235b(!![]);},function(_0x28b4b4){const _0x3b94b2=_0x1d06d6;console[_0x3b94b2(0x230)](_0x3b94b2(0x23f),_0x28b4b4),_0x19235b(![]);});}function a0_0x4662(_0x3b7397,_0x451efa){const _0x11653f=a0_0x1165();return a0_0x4662=function(_0x466235,_0xe1dec5){_0x466235=_0x466235-0x1af;let _0x59c6ee=_0x11653f[_0x466235];return _0x59c6ee;},a0_0x4662(_0x3b7397,_0x451efa);}function getLocalDate(){const _0x3c55dc=a0_0x21fd7f,_0x505e06=new Date(),_0x592d92=_0x505e06[_0x3c55dc(0x203)]()*0xea60,_0x1075b4=new Date(_0x505e06-_0x592d92)[_0x3c55dc(0x1bf)]()['slice'](0x0,0xa);return _0x1075b4;}