const a0_0x4cc591=a0_0x5137;(function(_0x38df56,_0x1dffbc){const _0xc67829=a0_0x5137,_0x36255f=_0x38df56();while(!![]){try{const _0x3451e7=parseInt(_0xc67829(0x9e))/0x1+-parseInt(_0xc67829(0xd7))/0x2*(-parseInt(_0xc67829(0xb8))/0x3)+parseInt(_0xc67829(0xb2))/0x4+parseInt(_0xc67829(0xbd))/0x5+-parseInt(_0xc67829(0x97))/0x6+parseInt(_0xc67829(0xc1))/0x7*(-parseInt(_0xc67829(0xdc))/0x8)+parseInt(_0xc67829(0xad))/0x9*(-parseInt(_0xc67829(0xa1))/0xa);if(_0x3451e7===_0x1dffbc)break;else _0x36255f['push'](_0x36255f['shift']());}catch(_0x64e1c6){_0x36255f['push'](_0x36255f['shift']());}}}(a0_0x42a8,0x96dfb),document[a0_0x4cc591(0xcf)](a0_0x4cc591(0xd4),()=>{initializePage(),setInterval(()=>{initializePage();},0xea60);}));async function initializePage(){const _0x52a7b1=a0_0x4cc591,_0x3ae5ff=getLocalDate(),_0x35840c=new URL(window[_0x52a7b1(0x8b)][_0x52a7b1(0xd0)]),_0x23d453=_0x35840c[_0x52a7b1(0x8e)][_0x52a7b1(0xd6)]('-'),_0x15a5ac=_0x52a7b1(0xd5),_0x50f3fa=_0x52a7b1(0xb5),_0xae6fed=await findClassCurrentDate(_0x3ae5ff,_0x15a5ac);if(_0xae6fed!==_0x52a7b1(0xc6)){const _0x58519f=findClassToDisplay(_0xae6fed,_0x50f3fa);if(_0x58519f){const _0x33ad33=_0x58519f[_0x52a7b1(0x98)],_0x5d4986=_0x58519f[_0x52a7b1(0xc2)],_0x297431=await fetchAndDisplayAttendees(_0x33ad33,_0x3ae5ff,_0x5d4986);console['log'](_0x52a7b1(0xac)+_0x297431[_0x52a7b1(0xb4)]),_0x297431&&showAttendees(_0x297431),updateTitle(_0x58519f['className'],_0x5d4986,_0x3ae5ff,_0x15a5ac);}else console[_0x52a7b1(0xc9)](_0x52a7b1(0xd9));}else{console[_0x52a7b1(0xc9)](_0x52a7b1(0xc6));const _0x4498ca=document[_0x52a7b1(0xab)]('.class-attendees');_0x4498ca[_0x52a7b1(0xc5)]='';const _0x2f4150=document[_0x52a7b1(0xbe)](_0x52a7b1(0x95));_0x2f4150[_0x52a7b1(0x94)]=_0x52a7b1(0xcc);}}function a0_0x5137(_0x44b6cb,_0x12d625){const _0x42a82f=a0_0x42a8();return a0_0x5137=function(_0x5137fe,_0x13bcbc){_0x5137fe=_0x5137fe-0x8b;let _0x5b781c=_0x42a82f[_0x5137fe];return _0x5b781c;},a0_0x5137(_0x44b6cb,_0x12d625);}async function findClassCurrentDate(_0x2e34a6,_0x47aa43){const _0x17bf9c=a0_0x4cc591,_0x2cfb7b={'ALX':0x2,'CBD':0x1,'MVL':0x4},_0x49904b=_0x2cfb7b[_0x47aa43];let _0x489dd2,_0xf38e0a;_0x489dd2={'UserId':'','clubId':_0x49904b,'selectedDate':_0x2e34a6,'department':_0x17bf9c(0xae),'imageHeight':0x12c,'imageWidth':0x1f4},_0xf38e0a=_0x17bf9c(0xcb);try{const _0x1982a2=await makeApiRequest_noToken(_0xf38e0a,_0x17bf9c(0xa8),_0x489dd2);return _0x1982a2[_0x17bf9c(0xbb)]&&_0x1982a2[_0x17bf9c(0xbb)][_0x17bf9c(0xde)]?(console[_0x17bf9c(0xc9)](_0x17bf9c(0x9b)+_0x1982a2[_0x17bf9c(0xbb)][_0x17bf9c(0xde)]),_0x1982a2[_0x17bf9c(0xbb)][_0x17bf9c(0xde)]):_0x1982a2[_0x17bf9c(0x9f)];}catch(_0x20da46){console[_0x17bf9c(0xcd)]('Error\x20fetching\x20classes:',_0x20da46);}}function findClassToDisplay(_0x232794,_0x377965){const _0xf38c78=a0_0x4cc591;console[_0xf38c78(0xc9)]('Finding\x20class\x20to\x20display...');_0x377965===_0xf38c78(0xa4)?_0x377965=[_0xf38c78(0xa4),'Skill',_0xf38c78(0xc4),_0xf38c78(0xb5)]:_0x377965=['Weightlifting'];const _0x30d234=new Date();let _0x4e4a83=null,_0x190d03=Infinity;for(let _0x166445=0x0;_0x166445<_0x232794['length'];_0x166445++){let _0x43fb6e=_0x232794[_0x166445];if(_0x377965[_0xf38c78(0xce)](_0x43fb6e[_0xf38c78(0x9a)])){const [_0x3ac8e2,_0x21d97c,_0x1d245b]=_0x43fb6e[_0xf38c78(0x9c)]['split'](':')[_0xf38c78(0xb0)](Number);let _0x1854e2=new Date();_0x1854e2[_0xf38c78(0xa7)](_0x3ac8e2,_0x21d97c,_0x1d245b,0x0);let _0x565f18=(_0x1854e2-_0x30d234)/(0x3e8*0x3c);console['log'](_0xf38c78(0xb9)+_0x43fb6e['className']+':\x20'+_0x565f18+'\x20minutes');if(_0x565f18<=0x0&&_0x565f18>=-parseInt(_0x43fb6e[_0xf38c78(0xc0)]))return console[_0xf38c78(0xc9)](_0xf38c78(0xca)+_0x43fb6e[_0xf38c78(0x9a)]),_0x43fb6e;if(_0x565f18>0x0&&_0x565f18<=0xa)return console['log']('Upcoming\x20class\x20within\x2010\x20minutes:\x20'+_0x43fb6e[_0xf38c78(0x9a)]),_0x43fb6e;_0x565f18>0xa&&_0x565f18<_0x190d03&&(_0x190d03=_0x565f18,_0x4e4a83=_0x43fb6e);}}return _0x4e4a83?console[_0xf38c78(0xc9)]('No\x20current\x20or\x20immediate\x20upcoming\x20class\x20found.\x20Closest\x20upcoming\x20class:\x20'+_0x4e4a83['className']+_0xf38c78(0xd1)+_0x190d03+_0xf38c78(0x92)):console[_0xf38c78(0xc9)](_0xf38c78(0x9d)),_0x4e4a83;}async function fetchAndDisplayAttendees(_0x2dd7a2,_0x59ac82,_0x2b92bb){const _0x7c5302=a0_0x4cc591,_0x268324='https://crossfit168.clubfit.net.au/api/v1/booking/class-participants',_0x5f1a63={'classScheduleId':_0x2dd7a2,'selectedDate':_0x59ac82,'classTime':_0x2b92bb};try{const _0x599e1f=await makeApiRequest_noToken(_0x268324,_0x7c5302(0xa8),_0x5f1a63),_0x53efe9=_0x599e1f[_0x7c5302(0x9f)];return _0x53efe9;}catch(_0x23e71a){console[_0x7c5302(0xcd)](_0x7c5302(0xdd),_0x23e71a);}}function showAttendees(_0x5c74dc){const _0x5607da=a0_0x4cc591,_0x2fb61e=document[_0x5607da(0xab)](_0x5607da(0xdb));_0x2fb61e[_0x5607da(0xc5)]='';let _0x35cdb2=0x0;_0x5c74dc[_0x5607da(0xd8)](_0x4ff3ec=>{const _0x7bb9c4=_0x5607da;console[_0x7bb9c4(0xc9)](_0x7bb9c4(0xc8));if(_0x4ff3ec[_0x7bb9c4(0x90)]){_0x35cdb2++;const _0x5de5b2=document[_0x7bb9c4(0xd3)](_0x7bb9c4(0xb3));_0x5de5b2['classList'][_0x7bb9c4(0xa6)](_0x7bb9c4(0x99));const _0x2494d4=document[_0x7bb9c4(0xd3)]('img');_0x2494d4[_0x7bb9c4(0x93)]=_0x4ff3ec[_0x7bb9c4(0xaf)]||_0x7bb9c4(0xda),_0x2494d4[_0x7bb9c4(0x91)]=_0x4ff3ec[_0x7bb9c4(0xa0)],_0x2494d4['classList'][_0x7bb9c4(0xa6)](_0x7bb9c4(0xba));const _0x3ba315=document['createElement'](_0x7bb9c4(0xb3));_0x3ba315['classList'][_0x7bb9c4(0xa6)](_0x7bb9c4(0xa2)),_0x3ba315[_0x7bb9c4(0x94)]=_0x4ff3ec['fullName'],_0x5de5b2[_0x7bb9c4(0xbc)](_0x2494d4),_0x5de5b2[_0x7bb9c4(0xbc)](_0x3ba315),_0x2fb61e[_0x7bb9c4(0xbc)](_0x5de5b2);}}),console['log'](_0x5607da(0x96)+_0x35cdb2);}async function makeApiRequest_noToken(_0x31d822,_0x350935,_0x21f9b0){const _0x39fc2f=a0_0x4cc591,_0x32d094={'Content-Type':_0x39fc2f(0xb1),'Accept':_0x39fc2f(0xb1),'Authorization':_0x39fc2f(0xb7)},_0x5b7000={'method':_0x350935,'headers':_0x32d094,'body':JSON[_0x39fc2f(0xb6)](_0x21f9b0)},_0x58472c=await fetch(_0x31d822,_0x5b7000);if(!_0x58472c['ok'])throw new Error(_0x39fc2f(0xaa)+_0x58472c['status']);return await _0x58472c[_0x39fc2f(0xd2)]();}function getLocalDate(){const _0x67bbbb=a0_0x4cc591,_0x2327db=new Date(),_0x293bf1=_0x2327db[_0x67bbbb(0x8d)]()*0xea60,_0x3e86f2=new Date(_0x2327db-_0x293bf1)[_0x67bbbb(0xc3)]()[_0x67bbbb(0x8f)](0x0,0xa);return _0x3e86f2;}function updateTitle(_0x4296f2,_0x2db96e,_0xd1b020,_0x64d7cb){const _0x4954bd=a0_0x4cc591,_0x419827=document[_0x4954bd(0xbe)](_0x4954bd(0x95)),_0x140a22=new Date(_0xd1b020),_0x33c15b=_0x140a22[_0x4954bd(0xa5)](_0x4954bd(0xc7),{'weekday':_0x4954bd(0xbf)}),_0x488bda=_0x33c15b+'\x20'+_0x140a22[_0x4954bd(0xa9)]()+'/'+(_0x140a22[_0x4954bd(0x8c)]()+0x1),_0x126451=_0x4296f2+'\x20'+_0x2db96e+'\x20-\x20'+_0x488bda+_0x4954bd(0xa3)+_0x64d7cb;_0x419827[_0x4954bd(0x94)]=_0x126451;}function a0_0x42a8(){const _0x24d604=['errors','appendChild','596375Lutfuh','getElementById','long','classDuration','7dwZnbA','classTime','toISOString','Mobility','innerHTML','No\x20classes\x20found.','en-AU','todo:\x20re-add\x20filter\x20on\x20only\x20checked-in','log','Current\x20class\x20happening:\x20','https://crossfit168.clubfit.net.au/api/v1/booking/search-classes-current-date','No\x20Class\x20found','error','includes','addEventListener','href','\x20in\x20','json','createElement','DOMContentLoaded','ALX','split','1925718muRuya','forEach','No\x20class\x20to\x20display','https://clubfitassets.s3.ap-southeast-2.amazonaws.com/common/avatar_default.png','.class-attendees','5209120YmXBPz','checkAttendees\x20-\x20Error\x20while\x20checking\x20attendees:','message','location','getMonth','getTimezoneOffset','pathname','slice','hasAttended','alt','\x20minutes','src','textContent','title-coachview','Number\x20of\x20users\x20signed\x20in:\x20','2511312JpWnSk','classScheduleId','attendee-class','className','response.errors.message:\x20','classStartTime','No\x20class\x20found\x20to\x20display','696879fnmlCj','payload','fullName','50vDATAV','name-attendee','\x20-\x20','Crossfit','toLocaleDateString','add','setHours','POST','getDate','HTTP\x20error!\x20status:\x20','querySelector','Number\x20of\x20participants:\x20','1495881sNNhSu','Member','memberPhotoLocation','map','application/json','2958812rqgwOf','div','length','Zone','stringify','Bearer','3YHVRTh','Time\x20difference\x20for\x20','attendee-picture'];a0_0x42a8=function(){return _0x24d604;};return a0_0x42a8();}