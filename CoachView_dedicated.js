const a0_0x7fce32=a0_0x4a80;(function(_0x37cab3,_0x16863e){const _0x1557c9=a0_0x4a80,_0x1de173=_0x37cab3();while(!![]){try{const _0x580d24=parseInt(_0x1557c9(0x171))/0x1+-parseInt(_0x1557c9(0x153))/0x2*(-parseInt(_0x1557c9(0x17c))/0x3)+-parseInt(_0x1557c9(0x17a))/0x4*(parseInt(_0x1557c9(0x192))/0x5)+-parseInt(_0x1557c9(0x15c))/0x6+parseInt(_0x1557c9(0x162))/0x7+-parseInt(_0x1557c9(0x18d))/0x8+parseInt(_0x1557c9(0x15d))/0x9;if(_0x580d24===_0x16863e)break;else _0x1de173['push'](_0x1de173['shift']());}catch(_0xda7c2a){_0x1de173['push'](_0x1de173['shift']());}}}(a0_0x5386,0x5dc8e),document[a0_0x7fce32(0x183)](a0_0x7fce32(0x194),()=>{initializePage(),setInterval(()=>{initializePage();},0xea60);}));function a0_0x5386(){const _0x2e765e=['Weightlifting','DOMContentLoaded','src','add','classList','json','title-coachview','ALX','No\x20Class\x20found','checkAttendees\x20-\x20Error\x20while\x20checking\x20attendees:','payload','1306NwlrrV','fullName','getTimezoneOffset','Number\x20of\x20users\x20signed\x20in:\x20','Zone','getDate','Mobility','\x20-\x20','https://crossfit168.clubfit.net.au/api/v1/booking/search-classes-current-date','1031976xIiZSk','1864926QCLyOe','https://clubfitassets.s3.ap-southeast-2.amazonaws.com/common/avatar_default.png','POST','alt','classStartTime','4994990kylhfq','status','getMonth','textContent','attendee-class','toISOString','classTime','pathname','div','innerHTML','classScheduleId','.class-attendees','Crossfit','message','Number\x20of\x20participants:\x20','374226HpEING','\x20in\x20','https://crossfit168.clubfit.net.au/api/v1/booking/class-participants','application/json','errors','No\x20current\x20or\x20immediate\x20upcoming\x20class\x20found.\x20Closest\x20upcoming\x20class:\x20','map','Upcoming\x20class\x20within\x2010\x20minutes:\x20','Time\x20difference\x20for\x20','818276cYnfsJ','length','1317XKUCSm','getElementById','error','en-AU','className','createElement','Current\x20class\x20happening:\x20','addEventListener','Bearer','img','querySelector','split','long','appendChild','No\x20class\x20found\x20to\x20display','log','Member','4931208UBeiFW','slice','memberPhotoLocation','location','No\x20class\x20to\x20display','10iRZGLF'];a0_0x5386=function(){return _0x2e765e;};return a0_0x5386();}async function initializePage(){const _0x1df9c4=a0_0x7fce32,_0x483b08=getLocalDate(),_0x3f6813=new URL(window[_0x1df9c4(0x190)]['href']),_0x1d4938=_0x3f6813[_0x1df9c4(0x169)][_0x1df9c4(0x187)]('-'),_0x3764ab=_0x1df9c4(0x14f),_0x1f07b2='Zone',_0x911348=await findClassCurrentDate(_0x483b08,_0x3764ab);if(_0x911348!=='No\x20classes\x20found.'){const _0x3f77d2=findClassToDisplay(_0x911348,_0x1f07b2);if(_0x3f77d2){const _0x59ba4a=_0x3f77d2[_0x1df9c4(0x16c)],_0xd0ea78=_0x3f77d2[_0x1df9c4(0x168)],_0x2bcf1d=await fetchAndDisplayAttendees(_0x59ba4a,_0x483b08,_0xd0ea78);console[_0x1df9c4(0x18b)](_0x1df9c4(0x170)+_0x2bcf1d[_0x1df9c4(0x17b)]),_0x2bcf1d&&showAttendees(_0x2bcf1d),updateTitle(_0x3f77d2[_0x1df9c4(0x180)],_0xd0ea78,_0x483b08,_0x3764ab);}else console[_0x1df9c4(0x18b)](_0x1df9c4(0x191));}else{console['log']('No\x20classes\x20found.');const _0x57d4d0=document[_0x1df9c4(0x186)](_0x1df9c4(0x16d));_0x57d4d0[_0x1df9c4(0x16b)]='';const _0x3687d5=document[_0x1df9c4(0x17d)](_0x1df9c4(0x14e));_0x3687d5[_0x1df9c4(0x165)]=_0x1df9c4(0x150);}}async function findClassCurrentDate(_0x4096b1,_0x206fbc){const _0x4c444b=a0_0x7fce32,_0x1cd47b={'ALX':0x2,'CBD':0x1,'MVL':0x4},_0x5bcf1d=_0x1cd47b[_0x206fbc];let _0x52df6f,_0x784111;_0x52df6f={'UserId':'','clubId':_0x5bcf1d,'selectedDate':_0x4096b1,'department':_0x4c444b(0x18c),'imageHeight':0x12c,'imageWidth':0x1f4},_0x784111=_0x4c444b(0x15b);try{const _0x24615d=await makeApiRequest_noToken(_0x784111,'POST',_0x52df6f);return _0x24615d[_0x4c444b(0x175)]&&_0x24615d[_0x4c444b(0x175)][_0x4c444b(0x16f)]?(console[_0x4c444b(0x18b)]('response.errors.message:\x20'+_0x24615d[_0x4c444b(0x175)]['message']),_0x24615d[_0x4c444b(0x175)][_0x4c444b(0x16f)]):_0x24615d[_0x4c444b(0x152)];}catch(_0x3ef22d){console[_0x4c444b(0x17e)]('Error\x20fetching\x20classes:',_0x3ef22d);}}function findClassToDisplay(_0x21c8f3,_0x15ab5a){const _0x146cd9=a0_0x7fce32;console[_0x146cd9(0x18b)]('Finding\x20class\x20to\x20display...');_0x15ab5a===_0x146cd9(0x16e)?_0x15ab5a=['Crossfit','Skill',_0x146cd9(0x159),_0x146cd9(0x157)]:_0x15ab5a=[_0x146cd9(0x193)];const _0x58eb6d=new Date();let _0x8b9561=null,_0x531bf7=Infinity;for(let _0x50cdb6=0x0;_0x50cdb6<_0x21c8f3[_0x146cd9(0x17b)];_0x50cdb6++){let _0x288e91=_0x21c8f3[_0x50cdb6];if(_0x15ab5a['includes'](_0x288e91[_0x146cd9(0x180)])){const [_0x2c177f,_0x330dad,_0x3ab921]=_0x288e91[_0x146cd9(0x161)][_0x146cd9(0x187)](':')[_0x146cd9(0x177)](Number);let _0x57e9de=new Date();_0x57e9de['setHours'](_0x2c177f,_0x330dad,_0x3ab921,0x0);let _0x4a282b=(_0x57e9de-_0x58eb6d)/(0x3e8*0x3c);console[_0x146cd9(0x18b)](_0x146cd9(0x179)+_0x288e91['className']+':\x20'+_0x4a282b+'\x20minutes');if(_0x4a282b<=0x0&&_0x4a282b>=-parseInt(_0x288e91['classDuration']))return console[_0x146cd9(0x18b)](_0x146cd9(0x182)+_0x288e91['className']),_0x288e91;if(_0x4a282b>0x0&&_0x4a282b<=0xa)return console[_0x146cd9(0x18b)](_0x146cd9(0x178)+_0x288e91[_0x146cd9(0x180)]),_0x288e91;_0x4a282b>0xa&&_0x4a282b<_0x531bf7&&(_0x531bf7=_0x4a282b,_0x8b9561=_0x288e91);}}return _0x8b9561?console[_0x146cd9(0x18b)](_0x146cd9(0x176)+_0x8b9561[_0x146cd9(0x180)]+_0x146cd9(0x172)+_0x531bf7+'\x20minutes'):console[_0x146cd9(0x18b)](_0x146cd9(0x18a)),_0x8b9561;}async function fetchAndDisplayAttendees(_0x27bc57,_0x411d16,_0x47c4af){const _0x207a26=a0_0x7fce32,_0x430590=_0x207a26(0x173),_0x58f8bb={'classScheduleId':_0x27bc57,'selectedDate':_0x411d16,'classTime':_0x47c4af};try{const _0x527c10=await makeApiRequest_noToken(_0x430590,_0x207a26(0x15f),_0x58f8bb),_0x31f588=_0x527c10[_0x207a26(0x152)];return _0x31f588;}catch(_0x36c944){console[_0x207a26(0x17e)](_0x207a26(0x151),_0x36c944);}}function a0_0x4a80(_0x3676f5,_0x214ba1){const _0x538626=a0_0x5386();return a0_0x4a80=function(_0x4a8039,_0x489317){_0x4a8039=_0x4a8039-0x14a;let _0x5c3758=_0x538626[_0x4a8039];return _0x5c3758;},a0_0x4a80(_0x3676f5,_0x214ba1);}function showAttendees(_0x28f352){const _0x323abf=a0_0x7fce32,_0x47cd71=document['querySelector']('.class-attendees');_0x47cd71[_0x323abf(0x16b)]='';let _0x57ffb1=0x0;_0x28f352['forEach'](_0x124da1=>{const _0x543db7=_0x323abf;console[_0x543db7(0x18b)]('todo:\x20re-add\x20filter\x20on\x20only\x20checked-in');if(_0x124da1['hasAttended']){_0x57ffb1++;const _0x289e18=document[_0x543db7(0x181)](_0x543db7(0x16a));_0x289e18['classList']['add'](_0x543db7(0x166));const _0x2a8da3=document[_0x543db7(0x181)](_0x543db7(0x185));_0x2a8da3[_0x543db7(0x14a)]=_0x124da1[_0x543db7(0x18f)]||_0x543db7(0x15e),_0x2a8da3[_0x543db7(0x160)]=_0x124da1[_0x543db7(0x154)],_0x2a8da3['classList'][_0x543db7(0x14b)]('attendee-picture');const _0x54844d=document[_0x543db7(0x181)]('div');_0x54844d[_0x543db7(0x14c)][_0x543db7(0x14b)]('name-attendee'),_0x54844d[_0x543db7(0x165)]=_0x124da1['fullName'],_0x289e18[_0x543db7(0x189)](_0x2a8da3),_0x289e18[_0x543db7(0x189)](_0x54844d),_0x47cd71[_0x543db7(0x189)](_0x289e18);}}),console['log'](_0x323abf(0x156)+_0x57ffb1);}async function makeApiRequest_noToken(_0x2bdbac,_0x4cf55a,_0x10c92a){const _0x47c05d=a0_0x7fce32,_0x459889={'Content-Type':_0x47c05d(0x174),'Accept':_0x47c05d(0x174),'Authorization':_0x47c05d(0x184)},_0x49fd04={'method':_0x4cf55a,'headers':_0x459889,'body':JSON['stringify'](_0x10c92a)},_0x391161=await fetch(_0x2bdbac,_0x49fd04);if(!_0x391161['ok'])throw new Error('HTTP\x20error!\x20status:\x20'+_0x391161[_0x47c05d(0x163)]);return await _0x391161[_0x47c05d(0x14d)]();}function getLocalDate(){const _0x5b6ea8=a0_0x7fce32,_0x43fb4e=new Date(),_0x17d3dd=_0x43fb4e[_0x5b6ea8(0x155)]()*0xea60,_0x435a30=new Date(_0x43fb4e-_0x17d3dd)[_0x5b6ea8(0x167)]()[_0x5b6ea8(0x18e)](0x0,0xa);return _0x435a30;}function updateTitle(_0x72c74c,_0x35e7c9,_0xb527d8,_0x1a1212){const _0x33801c=a0_0x7fce32,_0x39fd09=document[_0x33801c(0x17d)]('title-coachview'),_0x1449f6=new Date(_0xb527d8),_0x1bb6fa=_0x1449f6['toLocaleDateString'](_0x33801c(0x17f),{'weekday':_0x33801c(0x188)}),_0x19ac12=_0x1bb6fa+'\x20'+_0x1449f6[_0x33801c(0x158)]()+'/'+(_0x1449f6[_0x33801c(0x164)]()+0x1),_0x1e4196=_0x72c74c+'\x20'+_0x35e7c9+_0x33801c(0x15a)+_0x19ac12+_0x33801c(0x15a)+_0x1a1212;_0x39fd09[_0x33801c(0x165)]=_0x1e4196;}