const a0_0x2b644c=a0_0x1010;(function(_0x1d339e,_0x27f5d2){const _0x23ae2d=a0_0x1010,_0xb7fa3=_0x1d339e();while(!![]){try{const _0x522583=-parseInt(_0x23ae2d(0x136))/0x1+-parseInt(_0x23ae2d(0x11c))/0x2+parseInt(_0x23ae2d(0x150))/0x3*(parseInt(_0x23ae2d(0x115))/0x4)+parseInt(_0x23ae2d(0x122))/0x5+-parseInt(_0x23ae2d(0xd0))/0x6+parseInt(_0x23ae2d(0xfb))/0x7+parseInt(_0x23ae2d(0x149))/0x8;if(_0x522583===_0x27f5d2)break;else _0xb7fa3['push'](_0xb7fa3['shift']());}catch(_0xba935c){_0xb7fa3['push'](_0xb7fa3['shift']());}}}(a0_0x32f3,0xd3644),document[a0_0x2b644c(0xcd)](a0_0x2b644c(0xcb),()=>{initializePage(),setupEventListeners(),initializeSidebar();}));function initializeSidebar(){const _0x3b57f6=a0_0x2b644c,_0x2846d4=document['querySelector']('.sidebar'),_0x54dcb3=document[_0x3b57f6(0xca)](_0x3b57f6(0x105)),_0x2e0baa=document[_0x3b57f6(0xca)](_0x3b57f6(0xc5));_0x2846d4[_0x3b57f6(0x138)][_0x3b57f6(0x142)]='true',_0x54dcb3[_0x3b57f6(0xcd)](_0x3b57f6(0xdd),()=>toggleSidebar(_0x2846d4,_0x2e0baa));}function toggleSidebar(_0x516eef,_0x3016e5){const _0x5b5058=a0_0x2b644c;_0x516eef[_0x5b5058(0x138)]['visible']===_0x5b5058(0x121)?(_0x516eef[_0x5b5058(0xee)][_0x5b5058(0x104)]=_0x5b5058(0x11f),_0x3016e5[_0x5b5058(0xee)][_0x5b5058(0xdb)]='0',_0x516eef[_0x5b5058(0x138)][_0x5b5058(0x142)]=_0x5b5058(0xe3)):(_0x516eef[_0x5b5058(0xee)]['transform']='',_0x3016e5[_0x5b5058(0xee)][_0x5b5058(0xdb)]='15rem',_0x516eef['dataset'][_0x5b5058(0x142)]=_0x5b5058(0x121));}async function initializePage(){initDatePicker(),await fetchAndDisplayClassesAvailable_API(!![]),fetchAndDisplayAttendees();}function a0_0x1010(_0xe6296,_0x402eec){const _0x32f354=a0_0x32f3();return a0_0x1010=function(_0x101038,_0x50b913){_0x101038=_0x101038-0xc5;let _0x1bb1f5=_0x32f354[_0x101038];return _0x1bb1f5;},a0_0x1010(_0xe6296,_0x402eec);}function setupEventListeners(){const _0x5f45c0=a0_0x2b644c,_0x3c1440=document[_0x5f45c0(0x11d)](_0x5f45c0(0x12a)),_0x5e7a20=document[_0x5f45c0(0x11d)]('prevDay'),_0x5b180=document[_0x5f45c0(0x11d)](_0x5f45c0(0xc9)),_0xccc217=document['getElementById']('location-chosen'),_0x192327=document['getElementById'](_0x5f45c0(0xed)),_0x4891b8=document['getElementById']('refresh-attendees');_0x5e7a20[_0x5f45c0(0xcd)](_0x5f45c0(0xdd),handlePrevDayClick),_0x5b180[_0x5f45c0(0xcd)](_0x5f45c0(0xdd),handleNextDayClick),_0x3c1440[_0x5f45c0(0xcd)](_0x5f45c0(0xf8),handleDateChange),_0xccc217[_0x5f45c0(0xcd)](_0x5f45c0(0xf8),handleLocationChange),_0x192327[_0x5f45c0(0xcd)](_0x5f45c0(0xf8),handleClassChange),_0x4891b8&&_0x4891b8['addEventListener'](_0x5f45c0(0xdd),handleRefreshButtonClick),document[_0x5f45c0(0xcd)]('click',handleButtonClicks);}async function handlePrevDayClick(){const _0xfbd491=a0_0x2b644c;adjustOneDayDate(-0x1);const _0x570fb9=document['getElementById'](_0xfbd491(0x12a))['value'];saveDatePickerSessionStorage(_0x570fb9),await fetchAndDisplayClassesAvailable_Choose(),fetchAndDisplayAttendees();}async function handleNextDayClick(){const _0x243db1=a0_0x2b644c;adjustOneDayDate(0x1);const _0xa8e68b=document['getElementById'](_0x243db1(0x12a))[_0x243db1(0x146)];saveDatePickerSessionStorage(_0xa8e68b),await fetchAndDisplayClassesAvailable_Choose(),fetchAndDisplayAttendees();}async function handleDateChange(){const _0x277dbd=a0_0x2b644c,_0x12b271=document[_0x277dbd(0x11d)]('datePicker')[_0x277dbd(0x146)];saveDatePickerSessionStorage(_0x12b271),await fetchAndDisplayClassesAvailable_Choose(),fetchAndDisplayAttendees();}async function handleLocationChange(){await fetchAndDisplayClassesAvailable_Choose(),fetchAndDisplayAttendees();}function handleClassChange(){fetchAndDisplayAttendees();}function handleRefreshButtonClick(){fetchAndDisplayAttendees();}function handleButtonClicks(_0x2b238c){const _0x29ff2b=a0_0x2b644c;if(_0x2b238c[_0x29ff2b(0xe7)][_0x29ff2b(0x14d)][_0x29ff2b(0xfc)]('checkin-button')){_0x2b238c[_0x29ff2b(0xd8)]();const _0x2cbef9=_0x2b238c['target'],_0x48ef40=_0x2cbef9[_0x29ff2b(0x138)][_0x29ff2b(0x148)],_0x1163bb=_0x2cbef9['dataset'][_0x29ff2b(0xce)],_0x2f0fc3=_0x2cbef9['dataset'][_0x29ff2b(0xf6)];checkInParticipant(_0x48ef40,_0x1163bb,_0x2f0fc3,_0x2cbef9);}else{if(_0x2b238c[_0x29ff2b(0xe7)]['classList']['contains']('noshow-button')){_0x2b238c['preventDefault']();const _0x1b161e=_0x2b238c[_0x29ff2b(0xe7)],_0x2a150f=_0x1b161e['dataset'][_0x29ff2b(0x10d)];cancelBooking_resolve(_0x2a150f)[_0x29ff2b(0xf5)](_0x3ab642=>{const _0x507518=_0x29ff2b,_0x204fe0=_0x1b161e[_0x507518(0x131)];_0x204fe0[_0x507518(0x14c)]='';const _0x21a21b=document['createElement']('div');_0x21a21b[_0x507518(0xef)]=_0x507518(0x109),_0x204fe0[_0x507518(0xde)](_0x21a21b);})['catch'](_0x45ae0f=>{const _0x502a90=_0x29ff2b;console[_0x502a90(0xe1)](_0x502a90(0xc8),_0x45ae0f);});}}}function fetchAndDisplayAttendees(){const _0x1e469d=a0_0x2b644c,_0x58176b=document['getElementById'](_0x1e469d(0xed)),_0x583df6=document['getElementById'](_0x1e469d(0x12a)),_0x3a31ba=_0x58176b['options'][_0x58176b[_0x1e469d(0xd6)]],_0x520005=_0x3a31ba[_0x1e469d(0x146)],_0x18ee40=_0x3a31ba['textContent'][_0x1e469d(0x151)]('\x20'),_0x1e4915=_0x18ee40[0x0],_0x986f4d=_0x18ee40[_0x1e469d(0x117)](0x1)[_0x1e469d(0x106)]('\x20'),_0x1f0505=_0x583df6[_0x1e469d(0x146)],_0x28b9ac=document[_0x1e469d(0x11d)](_0x1e469d(0xea)),_0x42e3d9=_0x28b9ac[_0x1e469d(0x114)][_0x28b9ac['selectedIndex']][_0x1e469d(0x100)];if(_0x3a31ba[_0x1e469d(0xef)]===_0x1e469d(0x123)){const _0x2d52b1=document[_0x1e469d(0xca)](_0x1e469d(0x102));_0x2d52b1[_0x1e469d(0x14c)]='';const _0x546e4a=document['getElementById'](_0x1e469d(0xdc));_0x546e4a['textContent']=_0x3a31ba[_0x1e469d(0xef)];}else checkAttendees(_0x520005,_0x1f0505,_0x986f4d),updateTitle(_0x1e4915,_0x986f4d,_0x1f0505,_0x42e3d9);}function initDatePicker(){const _0x11e0b3=a0_0x2b644c,_0x31fd3f=document['getElementById'](_0x11e0b3(0x12a));let _0x4ef732=sessionStorage[_0x11e0b3(0xf4)](_0x11e0b3(0xfe)),_0x119a21=sessionStorage[_0x11e0b3(0xf4)]('timestampLastChanged');if(_0x4ef732&&_0x119a21&&isWithinValidityPeriod(_0x119a21,0.5))_0x31fd3f[_0x11e0b3(0x146)]=_0x4ef732;else{const _0x1c75b1=getLocalDate();_0x31fd3f[_0x11e0b3(0x146)]=_0x1c75b1,saveDatePickerSessionStorage(_0x1c75b1);}}function saveDatePickerSessionStorage(_0x502687){const _0x55fc17=a0_0x2b644c;sessionStorage[_0x55fc17(0xc7)]('selectedDate',_0x502687);const _0x3ab2a4=new Date()[_0x55fc17(0x130)]();sessionStorage[_0x55fc17(0xc7)](_0x55fc17(0x155),_0x3ab2a4);}function adjustOneDayDate(_0x378c19){const _0x462406=a0_0x2b644c,_0x573b6b=document[_0x462406(0x11d)](_0x462406(0x12a)),_0x236ac5=new Date(_0x573b6b[_0x462406(0x146)]+'T00:00:00');_0x236ac5['setDate'](_0x236ac5['getDate']()+_0x378c19),_0x573b6b[_0x462406(0x146)]=formatDate(_0x236ac5);}function isWithinValidityPeriod(_0x38cf01,_0x3f9a0a){const _0x12199a=a0_0x2b644c,_0x1783be=new Date()[_0x12199a(0x130)](),_0xe37065=(_0x1783be-_0x38cf01)/(0x3e8*0x3c*0x3c);return _0xe37065<=_0x3f9a0a;}function formatDate(_0x110aff){const _0x4d94eb=a0_0x2b644c;let _0x558318=new Date(_0x110aff),_0x21237e=''+(_0x558318[_0x4d94eb(0xd4)]()+0x1),_0x279c22=''+_0x558318[_0x4d94eb(0x14e)](),_0x3d91b1=_0x558318[_0x4d94eb(0x101)]();if(_0x21237e[_0x4d94eb(0xe8)]<0x2)_0x21237e='0'+_0x21237e;if(_0x279c22['length']<0x2)_0x279c22='0'+_0x279c22;return[_0x3d91b1,_0x21237e,_0x279c22]['join']('-');}async function fetchAndDisplayClassesAvailable_Choose(){const _0x2ef417=a0_0x2b644c,_0x18f467=new Date(document['getElementById']('datePicker')[_0x2ef417(0x146)]);_0x18f467[_0x2ef417(0x10e)](0x0,0x0,0x0,0x0);const _0x434c83=new Date();_0x434c83['setHours'](0x0,0x0,0x0,0x0),_0x18f467[_0x2ef417(0x130)]()===_0x434c83['getTime']()?await fetchAndDisplayClassesAvailable_API(!![]):await fetchAndDisplayClassesAvailable_API(![]);}async function fetchAndDisplayClassesAvailable_API(_0xea2c7d){const _0x14e688=a0_0x2b644c,_0x536539=document['getElementById'](_0x14e688(0xea)),_0xe9ed9c=document[_0x14e688(0x11d)](_0x14e688(0x12a)),_0x18f881=document[_0x14e688(0x11d)](_0x14e688(0xed));if(!_0x536539||!_0xe9ed9c||!_0x18f881){console['error'](_0x14e688(0x129));return;}const _0x17e6d7=_0x536539[_0x14e688(0x146)],_0x4d67f9=_0xe9ed9c['value'][_0x14e688(0x14a)](/-/g,'/');if(!_0x17e6d7){console[_0x14e688(0x145)]('No\x20location\x20selected.');return;}const _0x45ef67={'ALX':0x2,'CBD':0x1,'MVL':0x4},_0x1628d8=_0x45ef67[_0x17e6d7],_0x25f444=localStorage[_0x14e688(0xf4)]('userId');if(!_0x25f444||!_0x1628d8){console[_0x14e688(0xe1)](_0x14e688(0xe0));return;}const _0x1576f1=getLocalDate();let _0x58428d,_0x3eef85;_0xea2c7d?(_0x58428d={'UserId':'','clubId':_0x1628d8,'selectedDate':_0x4d67f9,'department':_0x14e688(0x12e),'imageHeight':0x12c,'imageWidth':0x1f4},_0x3eef85=_0x14e688(0xcf)):(_0x58428d={'UserId':_0x25f444,'clubId':_0x1628d8,'selectedDate':_0x4d67f9,'classType':0x0,'accountId':_0x1628d8},_0x3eef85='https://crossfit168.clubfit.net.au/api/v1/booking/search-classes');if(_0x4d67f9<_0x1576f1)displayClassAvailable([]);else try{const _0x190147=await makeApiRequest(_0x3eef85,_0x14e688(0x119),_0x58428d);displayClassAvailable(_0x190147[_0x14e688(0x144)]);}catch(_0x53421e){console[_0x14e688(0xe1)](_0x14e688(0x139),_0x53421e);}}async function makeApiRequest(_0x585a28,_0x42a6e9,_0x1afe96){const _0x2cf3b=a0_0x2b644c,_0x13ab54=localStorage[_0x2cf3b(0xf4)](_0x2cf3b(0x132)),_0x4122b1={'Content-Type':_0x2cf3b(0x141),'Accept':_0x2cf3b(0x141),'Authorization':_0x2cf3b(0x13e)+_0x13ab54},_0x544260={'method':_0x42a6e9,'headers':_0x4122b1,'body':JSON[_0x2cf3b(0x14b)](_0x1afe96)},_0x4f7ada=await fetch(_0x585a28,_0x544260);if(!_0x4f7ada['ok'])throw new Error(_0x2cf3b(0xdf)+_0x4f7ada['status']);return await _0x4f7ada[_0x2cf3b(0x108)]();}function a0_0x32f3(){const _0x3eee06=['target','length','name-attendee','location-chosen','en-AU','location','class-chosen','style','textContent','validateLogin\x20-\x20Validation\x20failed:','href','add','memberPhotoLocation','getItem','then','classDateTime','onerror','change','noshow-button','long','9799692plwNCg','contains','cancelBooking_resolve\x20-\x20Cancellation\x20failed','selectedDate','option','text','getFullYear','.class-attendees','className','transform','.toggle-button','join','Error\x20while\x20cancelling\x20booking,\x20xhr.status:\x20','json','No\x20Show','catch','https://myaccount.clubfit.net.au/','img','memberBookingId','setHours','class','Content-Type','setRequestHeader','buttons-checkin-noshow','https://myaccount.clubfit.net.au','options','1596IJDHzY','Check-in','slice','alt','POST','onload','getTimezoneOffset','1765876QvHvVM','getElementById','createElement','translateX(-100%)','empty','true','997585RwPpus','No\x20class\x20found','cors','en-US,en;q=0.5','cancelBooking_resolve\x20-\x20Network\x20error','src','forEach','Required\x20elements\x20not\x20found\x20in\x20the\x20DOM.','datePicker','https://admin.clubfit.net.au/api/v1/account/validate','div','status','Member','https://crossfit168.clubfit.net.au/api/v1/booking/class-participants','getTime','parentElement','access_token','refresh_token','statusCode','cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20network\x20error\x20and\x20retry','1084244iyiAlG','gzip,\x20deflate,\x20br,\x20zstd','dataset','Error\x20fetching\x20classes:','Confirmed','cancelBooking_resolve\x20-\x20Network\x20error\x20while\x20cancelling\x20booking','toLocaleDateString','validateLogin\x20-\x20Required\x20session\x20storage\x20items\x20are\x20missing','Bearer\x20','checkin-button','errors','application/json','visible','send','payload','log','value','toISOString','userId','5655144axAKGG','replace','stringify','innerHTML','classList','getDate','w-button','9714kMxfbo','split','classTime','hasAttended','https://clubfitassets.s3.ap-southeast-2.amazonaws.com/common/avatar_default.png','timestampLastChanged','https://crossfit168.clubfit.net.au/api/v1/booking/book-class-participant-checkin','Error\x20details:','number','Check-in\x20failed:','.outside-sidebar','parse','setItem','Error\x20during\x20No\x20Show\x20API\x20call:','nextDay','querySelector','DOMContentLoaded','keys','addEventListener','classScheduleId','https://crossfit168.clubfit.net.au/api/v1/booking/search-classes-current-date','4591716gFGlNF','checkAttendees\x20-\x20Error\x20while\x20checking\x20attendees:','userType','classSchedule','getMonth','responseText','selectedIndex','fullName','preventDefault','cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20retry','Error\x20during\x20API\x20call:','marginLeft','title-coachview','click','appendChild','HTTP\x20error!\x20status:\x20','Required\x20information\x20is\x20missing\x20from\x20local\x20storage\x20or\x20location\x20ID\x20map.','error','Response\x20received:','false','https://crossfit168.clubfit.net.au/api/v1/booking/cancel/','Authorization','open'];a0_0x32f3=function(){return _0x3eee06;};return a0_0x32f3();}function displayClassAvailable(_0x3c6cf6){const _0x23e452=a0_0x2b644c,_0x3bd1b6=document['getElementById'](_0x23e452(0xed));_0x3bd1b6[_0x23e452(0x14c)]='';if(_0x3c6cf6[_0x23e452(0xe8)]===0x0){const _0xf8e419=document[_0x23e452(0x11e)](_0x23e452(0xff));_0xf8e419[_0x23e452(0x146)]='',_0xf8e419[_0x23e452(0xef)]=_0x23e452(0x123),_0x3bd1b6[_0x23e452(0xde)](_0xf8e419);return;}_0x3c6cf6['forEach'](_0xd6717a=>{const _0x2cfb05=_0x23e452,_0x2bcc23=document[_0x2cfb05(0x11e)]('option');_0x2bcc23['value']=_0xd6717a[_0x2cfb05(0xce)],_0x2bcc23[_0x2cfb05(0xef)]=_0xd6717a[_0x2cfb05(0x103)]+'\x20'+_0xd6717a[_0x2cfb05(0x152)],_0x3bd1b6['appendChild'](_0x2bcc23);});}function updateTitle(_0x32dd16,_0x326aef,_0x546b1f,_0x55889d){const _0x52cd3a=a0_0x2b644c,_0x9d2d4e=document[_0x52cd3a(0x11d)]('title-coachview'),_0x402ab8=new Date(_0x546b1f),_0x56da73=_0x402ab8[_0x52cd3a(0x13c)](_0x52cd3a(0xeb),{'weekday':_0x52cd3a(0xfa)}),_0x5b23b4=_0x56da73+'\x20'+_0x402ab8[_0x52cd3a(0x14e)]()+'/'+(_0x402ab8[_0x52cd3a(0xd4)]()+0x1),_0x13c07b=_0x32dd16+'\x20'+_0x326aef+'\x20-\x20'+_0x5b23b4+'\x20-\x20'+_0x55889d;_0x9d2d4e['textContent']=_0x13c07b;}async function checkAttendees(_0x37beb1,_0x208a7f,_0x2a0f28){const _0x202073=a0_0x2b644c,_0x566ba0=_0x202073(0x12f),_0x5015e3={'classScheduleId':_0x37beb1,'selectedDate':_0x208a7f,'classTime':_0x2a0f28},_0x3d2100=localStorage[_0x202073(0xf4)](_0x202073(0x132)),_0x133a4f={'Content-Type':_0x202073(0x141),'Accept':_0x202073(0x141),'Authorization':_0x202073(0x13e)+_0x3d2100};try{const _0x5c5938=await fetch(_0x566ba0,{'method':_0x202073(0x119),'headers':_0x133a4f,'body':JSON['stringify'](_0x5015e3)});if(!_0x5c5938['ok'])throw new Error('HTTP\x20error!\x20status:\x20'+_0x5c5938['status']);const _0x108eb6=await _0x5c5938['json'](),_0x4a2ada=_0x108eb6[_0x202073(0x144)];showAttendees(_0x4a2ada);}catch(_0xde1563){console[_0x202073(0xe1)](_0x202073(0xd1),_0xde1563),errorAPICheckLogin();}}function showAttendees(_0xebc10c){const _0x524b85=a0_0x2b644c,_0xe29c0a=document[_0x524b85(0xca)](_0x524b85(0x102));_0xe29c0a['innerHTML']='',_0xebc10c[_0x524b85(0x128)](_0x22e091=>{const _0x3a6f78=_0x524b85,_0x36ece3=document[_0x3a6f78(0x11e)](_0x3a6f78(0x12c));_0x36ece3[_0x3a6f78(0x14d)][_0x3a6f78(0xf2)]('attendee-class');const _0x2bc2b0=document[_0x3a6f78(0x11e)](_0x3a6f78(0x10c));_0x2bc2b0[_0x3a6f78(0x127)]=_0x22e091[_0x3a6f78(0xf3)]||_0x3a6f78(0x154),_0x2bc2b0[_0x3a6f78(0x118)]=_0x22e091[_0x3a6f78(0xd7)],_0x2bc2b0['classList'][_0x3a6f78(0xf2)]('attendee-picture');const _0x1aaf3b=document['createElement'](_0x3a6f78(0x12c));_0x1aaf3b[_0x3a6f78(0x14d)][_0x3a6f78(0xf2)](_0x3a6f78(0xe9)),_0x1aaf3b[_0x3a6f78(0xef)]=_0x22e091[_0x3a6f78(0xd7)];const _0x6b899c=document[_0x3a6f78(0x11e)](_0x3a6f78(0x12c));_0x6b899c[_0x3a6f78(0x14d)][_0x3a6f78(0xf2)](_0x3a6f78(0x112));if(_0x22e091[_0x3a6f78(0x153)]){const _0x23832d=document[_0x3a6f78(0x11e)]('div');_0x23832d['textContent']=_0x3a6f78(0x13a),_0x6b899c[_0x3a6f78(0xde)](_0x23832d);}else{const _0x58786e=document['createElement']('a');_0x58786e[_0x3a6f78(0xf1)]='#',_0x58786e[_0x3a6f78(0x14d)][_0x3a6f78(0xf2)](_0x3a6f78(0x13f),_0x3a6f78(0x14f)),_0x58786e[_0x3a6f78(0xef)]=_0x3a6f78(0x116),_0x58786e['dataset'][_0x3a6f78(0x148)]=_0x22e091[_0x3a6f78(0x158)],_0x58786e[_0x3a6f78(0x138)][_0x3a6f78(0x103)]=_0x22e091[_0x3a6f78(0xd3)][_0x3a6f78(0x10f)][_0x3a6f78(0x103)],_0x58786e[_0x3a6f78(0x138)][_0x3a6f78(0x152)]=_0x22e091[_0x3a6f78(0xd3)][_0x3a6f78(0x152)],_0x58786e[_0x3a6f78(0x138)]['classScheduleId']=_0x22e091['classSchedule'][_0x3a6f78(0xce)],_0x58786e[_0x3a6f78(0x138)][_0x3a6f78(0xf6)]=_0x22e091[_0x3a6f78(0xf6)];const _0x1f783d=document['createElement']('a');_0x1f783d[_0x3a6f78(0xf1)]='#',_0x1f783d['classList']['add'](_0x3a6f78(0xf9),_0x3a6f78(0x14f)),_0x1f783d[_0x3a6f78(0xef)]=_0x3a6f78(0x109),_0x1f783d[_0x3a6f78(0x138)]['userId']=_0x22e091[_0x3a6f78(0x158)],_0x1f783d[_0x3a6f78(0x138)][_0x3a6f78(0x103)]=_0x22e091[_0x3a6f78(0xd3)][_0x3a6f78(0x10f)][_0x3a6f78(0x103)],_0x1f783d[_0x3a6f78(0x138)]['classTime']=_0x22e091[_0x3a6f78(0xd3)][_0x3a6f78(0x152)],_0x1f783d[_0x3a6f78(0x138)]['classScheduleId']=_0x22e091[_0x3a6f78(0xd3)][_0x3a6f78(0xce)],_0x1f783d['dataset'][_0x3a6f78(0x10d)]=_0x22e091['id'],_0x6b899c['appendChild'](_0x58786e),_0x6b899c[_0x3a6f78(0xde)](_0x1f783d);}_0x36ece3[_0x3a6f78(0xde)](_0x2bc2b0),_0x36ece3[_0x3a6f78(0xde)](_0x1aaf3b),_0x36ece3['appendChild'](_0x6b899c),_0xe29c0a[_0x3a6f78(0xde)](_0x36ece3);});}async function checkInParticipant(_0x48dd3f,_0x36f045,_0xccd778,_0x5b6582){const _0x550301=a0_0x2b644c,_0x226060=_0x550301(0x156),_0x30559d={'memberNumber':_0x48dd3f,'classScheduleId':_0x36f045,'classDateTime':_0xccd778},_0x34b0bd=localStorage[_0x550301(0xf4)](_0x550301(0x132)),_0x353ac4={'Accept':'application/json','Accept-Language':_0x550301(0x125),'Accept-Encoding':_0x550301(0x137),'Authorization':'Bearer\x20'+_0x34b0bd,'Content-Type':_0x550301(0x141),'Origin':_0x550301(0x113),'Connection':'keep-alive','Referer':_0x550301(0x10b),'Sec-Fetch-Dest':_0x550301(0x120),'Sec-Fetch-Mode':_0x550301(0x124),'Sec-Fetch-Site':'same-site','Priority':'u=1','TE':'trailers'};try{const _0x312354=await fetch(_0x226060,{'method':_0x550301(0x119),'headers':_0x353ac4,'body':JSON[_0x550301(0x14b)](_0x30559d)});if(!_0x312354['ok'])throw new Error(_0x550301(0xdf)+_0x312354[_0x550301(0x12d)]);const _0x38d1e9=await _0x312354['json']();if(_0x38d1e9['payload']==='success'){const _0xaca0c0=_0x5b6582[_0x550301(0x131)];_0xaca0c0[_0x550301(0x14c)]='';const _0x5b7199=document[_0x550301(0x11e)](_0x550301(0x12c));_0x5b7199[_0x550301(0xef)]=_0x550301(0x13a),_0xaca0c0[_0x550301(0xde)](_0x5b7199);}else console['error'](_0x550301(0x159),_0x38d1e9[_0x550301(0x140)]);}catch(_0x5949f0){console[_0x550301(0xe1)](_0x550301(0xda),_0x5949f0);}}function cancelBooking_resolve(_0x44e849,_0x1b4b21=0x0){return new Promise((_0x4931e1,_0x4b0a6f)=>{const _0x5560f2=a0_0x1010;var _0x3f681f=localStorage[_0x5560f2(0xf4)](_0x5560f2(0x132)),_0x3147d0=_0x5560f2(0xe4)+_0x44e849,_0x5261ac=new XMLHttpRequest();_0x5261ac[_0x5560f2(0xe6)](_0x5560f2(0x119),_0x3147d0,!![]),_0x5261ac[_0x5560f2(0x111)](_0x5560f2(0x110),_0x5560f2(0x141)),_0x5261ac[_0x5560f2(0x111)]('Accept','application/json'),_0x5261ac[_0x5560f2(0x111)](_0x5560f2(0xe5),_0x5560f2(0x13e)+_0x3f681f),_0x5261ac[_0x5560f2(0x11a)]=function(){const _0x17fa16=_0x5560f2,_0x544b6a=JSON[_0x17fa16(0xc6)](_0x5261ac[_0x17fa16(0xd5)]);_0x5261ac[_0x17fa16(0x12d)]>=0xc8&&_0x5261ac[_0x17fa16(0x12d)]<0x12c?(_0x544b6a[_0x17fa16(0x134)]!==0xc8&&console['log'](_0x17fa16(0xe2),_0x5261ac['responseText']),_0x4931e1(_0x5261ac[_0x17fa16(0xd5)])):(console[_0x17fa16(0xe1)](_0x17fa16(0x107),_0x5261ac[_0x17fa16(0x12d)]),console['error'](_0x17fa16(0x157),_0x5261ac[_0x17fa16(0xd5)]),_0x1b4b21<0x1?errorAPICheckLogin(function(_0x10ba50){const _0x5e8cf5=_0x17fa16;_0x10ba50?cancelBooking_resolve(_0x44e849,_0x1b4b21+0x1)[_0x5e8cf5(0xf5)](_0x4931e1)['catch'](_0x4b0a6f):_0x4b0a6f(new Error(_0x5e8cf5(0xd9)));}):_0x4b0a6f(new Error(_0x17fa16(0xfd))));},_0x5261ac[_0x5560f2(0xf7)]=function(){const _0x3a0123=_0x5560f2;console[_0x3a0123(0xe1)](_0x3a0123(0x13b)),_0x1b4b21<0x1?errorAPICheckLogin(function(_0xa44290){const _0x56cb3e=_0x3a0123;_0xa44290?cancelBooking_resolve(_0x44e849,_0x1b4b21+0x1)[_0x56cb3e(0xf5)](_0x4931e1)[_0x56cb3e(0x10a)](_0x4b0a6f):_0x4b0a6f(new Error(_0x56cb3e(0x135)));}):_0x4b0a6f(new Error(_0x3a0123(0x126)));},_0x5261ac[_0x5560f2(0x143)]();});}function errorAPICheckLogin(_0x361928){const _0x633a87=a0_0x2b644c;console[_0x633a87(0x145)]('errorAPICheckLogin\x20-\x20function\x20called'),validateLogin(function(_0xc1de1b){const _0x149669=_0x633a87;_0xc1de1b?(console[_0x149669(0x145)]('errorAPICheckLogin\x20-\x20login\x20validated'),_0x361928(!![])):(console[_0x149669(0x145)]('errorAPICheckLogin\x20-\x20login\x20not\x20validated'),window[_0x149669(0xec)][_0x149669(0xf1)]='/');});}function validateLogin(_0x5c313d){const _0x18536c=a0_0x2b644c;if(!localStorage[_0x18536c(0xf4)]('access_token')||!localStorage[_0x18536c(0xf4)](_0x18536c(0x148))||!localStorage['getItem']('userType')){console[_0x18536c(0xe1)](_0x18536c(0x13d)),_0x5c313d(![]);return;}const _0x5788ea=_0x18536c(0x12b),_0x39346d=_0x18536c(0x119),_0x5b57b0={'xoken':localStorage[_0x18536c(0xf4)](_0x18536c(0x133)),'userId':localStorage[_0x18536c(0xf4)]('portalUserId'),'userType':localStorage[_0x18536c(0xf4)](_0x18536c(0xd2))};makeApiRequest(_0x5788ea,_0x39346d,_0x5b57b0,function(_0x374e48){const _0x6bc00=_0x18536c;Object[_0x6bc00(0xcc)](_0x374e48['payload'])['forEach'](function(_0x24d878){const _0x36ee60=_0x6bc00;localStorage[_0x36ee60(0xc7)](_0x24d878,_0x374e48[_0x36ee60(0x144)][_0x24d878]);}),_0x5c313d(!![]);},function(_0x26e67c){const _0x509b9c=_0x18536c;console[_0x509b9c(0xe1)](_0x509b9c(0xf0),_0x26e67c),_0x5c313d(![]);});}function getLocalDate(){const _0x39d11c=a0_0x2b644c,_0x475818=new Date(),_0x5a17af=_0x475818[_0x39d11c(0x11b)]()*0xea60,_0x39c38f=new Date(_0x475818-_0x5a17af)[_0x39d11c(0x147)]()[_0x39d11c(0x117)](0x0,0xa);return _0x39c38f;}