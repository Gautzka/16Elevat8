const a0_0x3818c3=a0_0x1efc;(function(_0x20f459,_0x28b183){const _0xe42ac5=a0_0x1efc,_0x63dc9f=_0x20f459();while(!![]){try{const _0x4c3054=-parseInt(_0xe42ac5(0x106))/0x1+-parseInt(_0xe42ac5(0xca))/0x2*(parseInt(_0xe42ac5(0xd2))/0x3)+parseInt(_0xe42ac5(0xe4))/0x4*(parseInt(_0xe42ac5(0xfc))/0x5)+-parseInt(_0xe42ac5(0xb5))/0x6+parseInt(_0xe42ac5(0xdc))/0x7*(parseInt(_0xe42ac5(0x100))/0x8)+-parseInt(_0xe42ac5(0x105))/0x9+parseInt(_0xe42ac5(0xfb))/0xa;if(_0x4c3054===_0x28b183)break;else _0x63dc9f['push'](_0x63dc9f['shift']());}catch(_0x2c8caa){_0x63dc9f['push'](_0x63dc9f['shift']());}}}(a0_0x56d2,0x5db7a),document[a0_0x3818c3(0xe0)](a0_0x3818c3(0xeb),()=>{initializePage(),setInterval(()=>{initializePage();},0xea60);}));async function initializePage(){const _0x5bb07c=a0_0x3818c3,_0x59cffc=getLocalDate(),_0x44cca6=new URL(window['location']['href']),_0x16820c=_0x44cca6[_0x5bb07c(0xce)]['split']('-'),_0x78e4f3='ALX',_0x3da0a6='Zone',_0x1a5c9a=await findClassCurrentDate(_0x59cffc,_0x78e4f3);if(_0x1a5c9a!=='No\x20classes\x20found.'){const _0x52c778=findClassToDisplay(_0x1a5c9a,_0x3da0a6);if(_0x52c778){const _0x5dad24=_0x52c778[_0x5bb07c(0xe7)],_0x3c2d74=_0x52c778[_0x5bb07c(0xb9)],_0x2f7b4c=await fetchAndDisplayAttendees(_0x5dad24,_0x59cffc,_0x3c2d74);console[_0x5bb07c(0xdf)](_0x5bb07c(0xbe)+_0x2f7b4c[_0x5bb07c(0xfa)]),_0x2f7b4c&&showAttendees(_0x2f7b4c),updateTitle(_0x52c778['className'],_0x3c2d74,_0x59cffc,_0x78e4f3);}else console[_0x5bb07c(0xdf)](_0x5bb07c(0xf4));}else{console[_0x5bb07c(0xdf)](_0x5bb07c(0xcc));const _0x5f1a01=document['querySelector'](_0x5bb07c(0xf8));_0x5f1a01[_0x5bb07c(0x108)]='';const _0x1bef18=document[_0x5bb07c(0xef)](_0x5bb07c(0xc8));_0x1bef18['textContent']=_0x5bb07c(0xfd);}}async function findClassCurrentDate(_0x1db91d,_0x301f85){const _0x1b8618=a0_0x3818c3,_0xa80c24={'ALX':0x2,'CBD':0x1,'MVL':0x4},_0x47fe2f=_0xa80c24[_0x301f85];let _0x290508,_0x2217aa;_0x290508={'UserId':'','clubId':_0x47fe2f,'selectedDate':_0x1db91d,'department':'Member','imageHeight':0x12c,'imageWidth':0x1f4},_0x2217aa=_0x1b8618(0xcd);try{const _0x51e597=await makeApiRequest_noToken(_0x2217aa,'POST',_0x290508);return _0x51e597[_0x1b8618(0xf1)]&&_0x51e597['errors']['message']?(console[_0x1b8618(0xdf)](_0x1b8618(0xc4)+_0x51e597[_0x1b8618(0xf1)]['message']),_0x51e597['errors'][_0x1b8618(0xee)]):_0x51e597['payload'];}catch(_0x2b37ae){console[_0x1b8618(0xbf)](_0x1b8618(0xe1),_0x2b37ae);}}function findClassToDisplay(_0x5ceb14,_0x456717){const _0x4301ea=a0_0x3818c3;console[_0x4301ea(0xdf)](_0x4301ea(0xde));_0x456717===_0x4301ea(0xed)?_0x456717=['Crossfit',_0x4301ea(0xc1),_0x4301ea(0xe3),_0x4301ea(0xc0)]:_0x456717=[_0x4301ea(0xd4)];const _0x5047f2=new Date();let _0x1aaffb=null,_0x395845=Infinity;for(let _0x2433d2=0x0;_0x2433d2<_0x5ceb14[_0x4301ea(0xfa)];_0x2433d2++){let _0x2658cd=_0x5ceb14[_0x2433d2];if(_0x456717[_0x4301ea(0xc5)](_0x2658cd[_0x4301ea(0xd3)])){const [_0x439bee,_0x572958,_0x35616b]=_0x2658cd[_0x4301ea(0x101)][_0x4301ea(0xc6)](':')[_0x4301ea(0xd1)](Number);let _0x4f124f=new Date();_0x4f124f[_0x4301ea(0xc7)](_0x439bee,_0x572958,_0x35616b,0x0);let _0x15a1da=(_0x4f124f-_0x5047f2)/(0x3e8*0x3c);console[_0x4301ea(0xdf)](_0x4301ea(0xdb)+_0x2658cd[_0x4301ea(0xd3)]+':\x20'+_0x15a1da+_0x4301ea(0xba));if(_0x15a1da<=0x0&&_0x15a1da>=-parseInt(_0x2658cd['classDuration']))return console[_0x4301ea(0xdf)](_0x4301ea(0x103)+_0x2658cd['className']),_0x2658cd;if(_0x15a1da>0x0&&_0x15a1da<=0xa)return console['log'](_0x4301ea(0xfe)+_0x2658cd[_0x4301ea(0xd3)]),_0x2658cd;_0x15a1da>0xa&&_0x15a1da<_0x395845&&(_0x395845=_0x15a1da,_0x1aaffb=_0x2658cd);}}return _0x1aaffb?console[_0x4301ea(0xdf)](_0x4301ea(0xb8)+_0x1aaffb[_0x4301ea(0xd3)]+'\x20in\x20'+_0x395845+'\x20minutes'):console['log'](_0x4301ea(0xd5)),_0x1aaffb;}async function fetchAndDisplayAttendees(_0x508e1f,_0x12a296,_0x5acb60){const _0x2ef41c=a0_0x3818c3,_0xaab57b='https://crossfit168.clubfit.net.au/api/v1/booking/class-participants',_0x4bfeed={'classScheduleId':_0x508e1f,'selectedDate':_0x12a296,'classTime':_0x5acb60};try{const _0x33dcb0=await makeApiRequest_noToken(_0xaab57b,_0x2ef41c(0xec),_0x4bfeed),_0x4f9e5b=_0x33dcb0[_0x2ef41c(0xd8)];return _0x4f9e5b;}catch(_0x317ee9){console[_0x2ef41c(0xbf)]('checkAttendees\x20-\x20Error\x20while\x20checking\x20attendees:',_0x317ee9);}}function a0_0x56d2(){const _0x5e77c4=['Mobility','52tDLhAM','status','add','classScheduleId','hasAttended','src','Number\x20of\x20users\x20signed\x20in:\x20','DOMContentLoaded','POST','Crossfit','message','getElementById','alt','errors','textContent','stringify','No\x20class\x20to\x20display','getDate','attendee-picture','getMonth','.class-attendees','json','length','11485500CWxlfS','132520BGZpdR','No\x20Class\x20found','Upcoming\x20class\x20within\x2010\x20minutes:\x20','toISOString','296VnPRqz','classStartTime','fullName','Current\x20class\x20happening:\x20','name-attendee','620919Xdklmq','542774zmYRfs','attendee-class','innerHTML','324132TlpjFs','forEach','long','No\x20current\x20or\x20immediate\x20upcoming\x20class\x20found.\x20Closest\x20upcoming\x20class:\x20','classTime','\x20minutes','getTimezoneOffset','application/json','HTTP\x20error!\x20status:\x20','Number\x20of\x20participants:\x20','error','Zone','Skill','querySelector','memberPhotoLocation','response.errors.message:\x20','includes','split','setHours','title-coachview','img','4DzLWgr','appendChild','No\x20classes\x20found.','https://crossfit168.clubfit.net.au/api/v1/booking/search-classes-current-date','pathname','\x20-\x20','div','map','983688arRrJL','className','Weightlifting','No\x20class\x20found\x20to\x20display','createElement','slice','payload','en-AU','todo:\x20re-add\x20filter\x20on\x20only\x20checked-in','Time\x20difference\x20for\x20','40173XraSOJ','classList','Finding\x20class\x20to\x20display...','log','addEventListener','Error\x20fetching\x20classes:','toLocaleDateString'];a0_0x56d2=function(){return _0x5e77c4;};return a0_0x56d2();}function a0_0x1efc(_0x43d85c,_0x2c82e1){const _0x56d205=a0_0x56d2();return a0_0x1efc=function(_0x1efc23,_0x6fd4dc){_0x1efc23=_0x1efc23-0xb5;let _0x9611d0=_0x56d205[_0x1efc23];return _0x9611d0;},a0_0x1efc(_0x43d85c,_0x2c82e1);}function showAttendees(_0x4f5c1d){const _0x59c818=a0_0x3818c3,_0x519eb8=document[_0x59c818(0xc2)]('.class-attendees');_0x519eb8[_0x59c818(0x108)]='';let _0x2b6604=0x0;_0x4f5c1d[_0x59c818(0xb6)](_0x4f5c54=>{const _0x52b432=_0x59c818;console[_0x52b432(0xdf)](_0x52b432(0xda));if(_0x4f5c54[_0x52b432(0xe8)]){_0x2b6604++;const _0x2fb5c4=document[_0x52b432(0xd6)](_0x52b432(0xd0));_0x2fb5c4[_0x52b432(0xdd)]['add'](_0x52b432(0x107));const _0x3c47e6=document[_0x52b432(0xd6)](_0x52b432(0xc9));_0x3c47e6[_0x52b432(0xe9)]=_0x4f5c54[_0x52b432(0xc3)]||'https://clubfitassets.s3.ap-southeast-2.amazonaws.com/common/avatar_default.png',_0x3c47e6[_0x52b432(0xf0)]=_0x4f5c54[_0x52b432(0x102)],_0x3c47e6[_0x52b432(0xdd)]['add'](_0x52b432(0xf6));const _0x4b32a1=document['createElement']('div');_0x4b32a1[_0x52b432(0xdd)][_0x52b432(0xe6)](_0x52b432(0x104)),_0x4b32a1[_0x52b432(0xf2)]=_0x4f5c54[_0x52b432(0x102)][_0x52b432(0xc6)]('\x20')[0x0],_0x2fb5c4[_0x52b432(0xcb)](_0x3c47e6),_0x2fb5c4[_0x52b432(0xcb)](_0x4b32a1),_0x519eb8[_0x52b432(0xcb)](_0x2fb5c4);}}),console[_0x59c818(0xdf)](_0x59c818(0xea)+_0x2b6604);}async function makeApiRequest_noToken(_0x16eee3,_0x20bbb4,_0x1fd571){const _0x153344=a0_0x3818c3,_0x44c449={'Content-Type':'application/json','Accept':_0x153344(0xbc),'Authorization':'Bearer'},_0x59e9a0={'method':_0x20bbb4,'headers':_0x44c449,'body':JSON[_0x153344(0xf3)](_0x1fd571)},_0x159198=await fetch(_0x16eee3,_0x59e9a0);if(!_0x159198['ok'])throw new Error(_0x153344(0xbd)+_0x159198[_0x153344(0xe5)]);return await _0x159198[_0x153344(0xf9)]();}function getLocalDate(){const _0x4ed3ca=a0_0x3818c3,_0x45211c=new Date(),_0x81ad7d=_0x45211c[_0x4ed3ca(0xbb)]()*0xea60,_0x8adafe=new Date(_0x45211c-_0x81ad7d)[_0x4ed3ca(0xff)]()[_0x4ed3ca(0xd7)](0x0,0xa);return _0x8adafe;}function updateTitle(_0x261116,_0x3e2a26,_0x443cb5,_0x35c97c){const _0x56a54f=a0_0x3818c3,_0x39d570=document['getElementById'](_0x56a54f(0xc8)),_0x37c5a5=new Date(_0x443cb5),_0x499561=_0x37c5a5[_0x56a54f(0xe2)](_0x56a54f(0xd9),{'weekday':_0x56a54f(0xb7)}),_0x3710f8=_0x499561+'\x20'+_0x37c5a5[_0x56a54f(0xf5)]()+'/'+(_0x37c5a5[_0x56a54f(0xf7)]()+0x1),_0x4adb0c=_0x261116+'\x20'+_0x3e2a26+_0x56a54f(0xcf)+_0x3710f8+_0x56a54f(0xcf)+_0x35c97c;_0x39d570[_0x56a54f(0xf2)]=_0x4adb0c;}