const a0_0x2450ae=a0_0x4408;(function(_0x319415,_0xb124ab){const _0x17a494=a0_0x4408,_0xced19f=_0x319415();while(!![]){try{const _0x20943b=parseInt(_0x17a494(0x19e))/0x1+parseInt(_0x17a494(0x222))/0x2*(-parseInt(_0x17a494(0x1b2))/0x3)+-parseInt(_0x17a494(0x1ab))/0x4+parseInt(_0x17a494(0x1f1))/0x5+-parseInt(_0x17a494(0x201))/0x6*(parseInt(_0x17a494(0x226))/0x7)+-parseInt(_0x17a494(0x199))/0x8+parseInt(_0x17a494(0x1c8))/0x9*(parseInt(_0x17a494(0x1a0))/0xa);if(_0x20943b===_0xb124ab)break;else _0xced19f['push'](_0xced19f['shift']());}catch(_0x51b2a9){_0xced19f['push'](_0xced19f['shift']());}}}(a0_0x212c,0x6969f),document[a0_0x2450ae(0x212)](a0_0x2450ae(0x21d),()=>{initializePage(),setupEventListeners(),initializeSidebar();}));function initializeSidebar(){const _0xbf8581=a0_0x2450ae,_0xf92d93=document[_0xbf8581(0x1f8)](_0xbf8581(0x1f7)),_0x55d29a=document[_0xbf8581(0x1f8)]('.toggle-button'),_0x367021=document['querySelector'](_0xbf8581(0x1bf));_0xf92d93[_0xbf8581(0x1d2)][_0xbf8581(0x1de)]='true',_0x55d29a[_0xbf8581(0x212)](_0xbf8581(0x1db),()=>toggleSidebar(_0xf92d93,_0x367021));}function toggleSidebar(_0x18bad1,_0x5e4389){const _0x2aae1b=a0_0x2450ae;_0x18bad1[_0x2aae1b(0x1d2)]['visible']===_0x2aae1b(0x1b3)?(_0x18bad1[_0x2aae1b(0x1a2)][_0x2aae1b(0x1a5)]=_0x2aae1b(0x1cd),_0x5e4389['style'][_0x2aae1b(0x1be)]='0',_0x18bad1[_0x2aae1b(0x1d2)][_0x2aae1b(0x1de)]=_0x2aae1b(0x1dd)):(_0x18bad1[_0x2aae1b(0x1a2)]['transform']='',_0x5e4389['style']['marginLeft']='15rem',_0x18bad1[_0x2aae1b(0x1d2)]['visible']=_0x2aae1b(0x1b3));}async function initializePage(){initDatePicker(),await fetchAndDisplayClassesAvailable_API(!![]),fetchAndDisplayAttendees();}function setupEventListeners(){const _0xd9fa74=a0_0x2450ae,_0x3bffd0=document['getElementById'](_0xd9fa74(0x231)),_0x23670f=document[_0xd9fa74(0x22b)](_0xd9fa74(0x1f5)),_0x8b22b7=document[_0xd9fa74(0x22b)](_0xd9fa74(0x1b1)),_0x40a1b0=document[_0xd9fa74(0x22b)]('location-chosen'),_0x554e44=document['getElementById'](_0xd9fa74(0x208)),_0x32bc55=document['getElementById'](_0xd9fa74(0x1b4));_0x23670f[_0xd9fa74(0x212)](_0xd9fa74(0x1db),handlePrevDayClick),_0x8b22b7[_0xd9fa74(0x212)](_0xd9fa74(0x1db),handleNextDayClick),_0x3bffd0[_0xd9fa74(0x212)](_0xd9fa74(0x200),handleDateChange),_0x40a1b0[_0xd9fa74(0x212)](_0xd9fa74(0x200),handleLocationChange),_0x554e44[_0xd9fa74(0x212)]('change',handleClassChange),_0x32bc55&&_0x32bc55[_0xd9fa74(0x212)]('click',handleRefreshButtonClick),document[_0xd9fa74(0x212)]('click',handleButtonClicks);}async function handlePrevDayClick(){const _0xc4c630=a0_0x2450ae;adjustOneDayDate(-0x1);const _0x1af9c8=document[_0xc4c630(0x22b)](_0xc4c630(0x231))[_0xc4c630(0x1c9)];saveDatePickerSessionStorage(_0x1af9c8),await fetchAndDisplayClassesAvailable_Choose(),fetchAndDisplayAttendees();}async function handleNextDayClick(){const _0x2d55d0=a0_0x2450ae;adjustOneDayDate(0x1);const _0xd926c3=document[_0x2d55d0(0x22b)](_0x2d55d0(0x231))[_0x2d55d0(0x1c9)];saveDatePickerSessionStorage(_0xd926c3),await fetchAndDisplayClassesAvailable_Choose(),fetchAndDisplayAttendees();}async function handleDateChange(){const _0x35b00d=a0_0x2450ae,_0x2d3910=document['getElementById'](_0x35b00d(0x231))['value'];saveDatePickerSessionStorage(_0x2d3910),await fetchAndDisplayClassesAvailable_Choose(),fetchAndDisplayAttendees();}async function handleLocationChange(){await fetchAndDisplayClassesAvailable_Choose(),fetchAndDisplayAttendees();}function handleClassChange(){fetchAndDisplayAttendees();}function handleRefreshButtonClick(){fetchAndDisplayAttendees();}function handleButtonClicks(_0x2609d1){const _0x2f7e57=a0_0x2450ae;if(_0x2609d1['target'][_0x2f7e57(0x1b0)][_0x2f7e57(0x213)]('checkin-button')){_0x2609d1[_0x2f7e57(0x1e3)]();const _0x542504=_0x2609d1[_0x2f7e57(0x1b6)],_0x514908=_0x542504['dataset'][_0x2f7e57(0x1f9)],_0x4ae16d=_0x542504[_0x2f7e57(0x1d2)][_0x2f7e57(0x1cf)],_0x217383=_0x542504[_0x2f7e57(0x1d2)]['classDateTime'];checkInParticipant(_0x514908,_0x4ae16d,_0x217383,_0x542504);}else{if(_0x2609d1[_0x2f7e57(0x1b6)][_0x2f7e57(0x1b0)][_0x2f7e57(0x213)](_0x2f7e57(0x1c4))){_0x2609d1['preventDefault']();const _0x3adf33=_0x2609d1[_0x2f7e57(0x1b6)],_0x4da544=_0x3adf33[_0x2f7e57(0x1d2)][_0x2f7e57(0x21f)];cancelBooking_resolve(_0x4da544)[_0x2f7e57(0x1cb)](_0x336006=>{const _0x24294b=_0x2f7e57,_0x3bfce5=_0x3adf33[_0x24294b(0x209)];_0x3bfce5['innerHTML']='';const _0x386345=document[_0x24294b(0x1e9)](_0x24294b(0x1e7));_0x386345['textContent']=_0x24294b(0x20d),_0x3bfce5[_0x24294b(0x21a)](_0x386345);})[_0x2f7e57(0x1bd)](_0xc51754=>{const _0x12e73a=_0x2f7e57;console[_0x12e73a(0x1f0)](_0x12e73a(0x218),_0xc51754);});}}}function fetchAndDisplayAttendees(){const _0x15319d=a0_0x2450ae,_0x57d8b5=document[_0x15319d(0x22b)]('class-chosen'),_0x572465=document[_0x15319d(0x22b)]('datePicker'),_0x5c9a83=_0x57d8b5[_0x15319d(0x1e5)][_0x57d8b5[_0x15319d(0x1fb)]],_0x561b2d=_0x5c9a83['value'],_0x2bfab2=_0x5c9a83[_0x15319d(0x1ca)]['split']('\x20'),_0x1558d7=_0x2bfab2[0x0],_0xcec4aa=_0x2bfab2[_0x15319d(0x229)](0x1)[_0x15319d(0x1af)]('\x20'),_0x268ad4=_0x572465[_0x15319d(0x1c9)],_0x15b4db=document['getElementById'](_0x15319d(0x1e4)),_0x149d57=_0x15b4db[_0x15319d(0x1e5)][_0x15b4db[_0x15319d(0x1fb)]][_0x15319d(0x1ee)];if(_0x5c9a83['textContent']===_0x15319d(0x1fd)){const _0x5a3d11=document[_0x15319d(0x1f8)](_0x15319d(0x1a8));_0x5a3d11[_0x15319d(0x1ce)]='';const _0x8cc9f9=document[_0x15319d(0x22b)](_0x15319d(0x1c3));_0x8cc9f9['textContent']=_0x5c9a83[_0x15319d(0x1ca)];}else checkAttendees(_0x561b2d,_0x268ad4,_0xcec4aa),updateTitle(_0x1558d7,_0xcec4aa,_0x268ad4,_0x149d57);}function initDatePicker(){const _0x244579=a0_0x2450ae,_0x119106=document['getElementById'](_0x244579(0x231));let _0xa3008f=sessionStorage['getItem'](_0x244579(0x1a3)),_0x235ef4=sessionStorage[_0x244579(0x205)](_0x244579(0x1dc));if(_0xa3008f&&_0x235ef4&&isWithinValidityPeriod(_0x235ef4,0.5))_0x119106[_0x244579(0x1c9)]=_0xa3008f;else{const _0x1d738d=getLocalDate();_0x119106[_0x244579(0x1c9)]=_0x1d738d,saveDatePickerSessionStorage(_0x1d738d);}}function a0_0x4408(_0x11c7ca,_0x4cc5fa){const _0x212ca5=a0_0x212c();return a0_0x4408=function(_0x4408fb,_0xa3f89e){_0x4408fb=_0x4408fb-0x199;let _0x4986af=_0x212ca5[_0x4408fb];return _0x4986af;},a0_0x4408(_0x11c7ca,_0x4cc5fa);}function saveDatePickerSessionStorage(_0x536ac1){const _0xd9a2c3=a0_0x2450ae;sessionStorage[_0xd9a2c3(0x1cc)]('selectedDate',_0x536ac1);const _0x3224d8=new Date()[_0xd9a2c3(0x20a)]();sessionStorage['setItem']('timestampLastChanged',_0x3224d8);}function adjustOneDayDate(_0x381058){const _0x33d2c5=a0_0x2450ae,_0x4738e3=document[_0x33d2c5(0x22b)]('datePicker'),_0x2346ab=new Date(_0x4738e3[_0x33d2c5(0x1c9)]+_0x33d2c5(0x202));_0x2346ab[_0x33d2c5(0x22c)](_0x2346ab[_0x33d2c5(0x20b)]()+_0x381058),_0x4738e3[_0x33d2c5(0x1c9)]=formatDate(_0x2346ab);}function isWithinValidityPeriod(_0x30a553,_0xdd8a7){const _0x6d4994=a0_0x2450ae,_0x130d6c=new Date()[_0x6d4994(0x20a)](),_0xf9039=(_0x130d6c-_0x30a553)/(0x3e8*0x3c*0x3c);return _0xf9039<=_0xdd8a7;}function formatDate(_0x1d7b31){const _0x31d067=a0_0x2450ae;let _0x5f094f=new Date(_0x1d7b31),_0xf659f4=''+(_0x5f094f[_0x31d067(0x1aa)]()+0x1),_0x54645b=''+_0x5f094f['getDate'](),_0x22b9b6=_0x5f094f[_0x31d067(0x20e)]();if(_0xf659f4[_0x31d067(0x1ad)]<0x2)_0xf659f4='0'+_0xf659f4;if(_0x54645b[_0x31d067(0x1ad)]<0x2)_0x54645b='0'+_0x54645b;return[_0x22b9b6,_0xf659f4,_0x54645b][_0x31d067(0x1af)]('-');}async function fetchAndDisplayClassesAvailable_Choose(){const _0x55e6cf=a0_0x2450ae,_0x290497=new Date(document[_0x55e6cf(0x22b)](_0x55e6cf(0x231))[_0x55e6cf(0x1c9)]);_0x290497[_0x55e6cf(0x1ef)](0x0,0x0,0x0,0x0);const _0x111c64=new Date();_0x111c64[_0x55e6cf(0x1ef)](0x0,0x0,0x0,0x0),_0x290497[_0x55e6cf(0x20a)]()===_0x111c64['getTime']()?await fetchAndDisplayClassesAvailable_API(!![]):await fetchAndDisplayClassesAvailable_API(![]);}async function fetchAndDisplayClassesAvailable_API(_0xf27816){const _0x1f27bf=a0_0x2450ae,_0x13f188=document['getElementById'](_0x1f27bf(0x1e4)),_0xbc0f15=document[_0x1f27bf(0x22b)](_0x1f27bf(0x231)),_0x1a0a7e=document[_0x1f27bf(0x22b)](_0x1f27bf(0x208));if(!_0x13f188||!_0xbc0f15||!_0x1a0a7e){console[_0x1f27bf(0x1f0)](_0x1f27bf(0x19f));return;}const _0x5eeee1=_0x13f188[_0x1f27bf(0x1c9)],_0x3d5186=_0xbc0f15[_0x1f27bf(0x1c9)][_0x1f27bf(0x225)](/-/g,'/');if(!_0x5eeee1){console[_0x1f27bf(0x22f)]('No\x20location\x20selected.');return;}const _0x50fc62={'ALX':0x2,'CBD':0x1,'MVL':0x4},_0xb94e76=_0x50fc62[_0x5eeee1],_0x3dce4b=localStorage[_0x1f27bf(0x205)](_0x1f27bf(0x1f9));if(!_0x3dce4b||!_0xb94e76){console['error']('Required\x20information\x20is\x20missing\x20from\x20local\x20storage\x20or\x20location\x20ID\x20map.');return;}const _0xaf1248=getLocalDate();let _0x511197,_0x51a708;_0xf27816?(_0x511197={'UserId':'','clubId':_0xb94e76,'selectedDate':_0x3d5186,'department':_0x1f27bf(0x206),'imageHeight':0x12c,'imageWidth':0x1f4},_0x51a708=_0x1f27bf(0x1b9)):(_0x511197={'UserId':_0x3dce4b,'clubId':_0xb94e76,'selectedDate':_0x3d5186,'classType':0x0,'accountId':_0xb94e76},_0x51a708='https://crossfit168.clubfit.net.au/api/v1/booking/search-classes');if(_0x3d5186<_0xaf1248)displayClassAvailable([]);else try{const _0x2d7b94=await makeApiRequest(_0x51a708,_0x1f27bf(0x214),_0x511197);displayClassAvailable(_0x2d7b94['payload']);}catch(_0x5161c9){console[_0x1f27bf(0x1f0)](_0x1f27bf(0x1e2),_0x5161c9);}}async function makeApiRequest(_0x976b8e,_0x55e923,_0x19b392){const _0x247f49=a0_0x2450ae,_0x9afe1f=localStorage['getItem']('access_token'),_0x1e61a9={'Content-Type':_0x247f49(0x1b7),'Accept':_0x247f49(0x1b7),'Authorization':'Bearer\x20'+_0x9afe1f},_0x74afc2={'method':_0x55e923,'headers':_0x1e61a9,'body':JSON[_0x247f49(0x203)](_0x19b392)},_0x30eee1=await fetch(_0x976b8e,_0x74afc2);if(!_0x30eee1['ok'])throw new Error(_0x247f49(0x1ec)+_0x30eee1[_0x247f49(0x217)]);return await _0x30eee1[_0x247f49(0x1f3)]();}function displayClassAvailable(_0x1c745f){const _0x4b2b20=a0_0x2450ae,_0x489590=document[_0x4b2b20(0x22b)](_0x4b2b20(0x208));_0x489590[_0x4b2b20(0x1ce)]='';if(_0x1c745f['length']===0x0){const _0x4c9efc=document[_0x4b2b20(0x1e9)](_0x4b2b20(0x1a7));_0x4c9efc[_0x4b2b20(0x1c9)]='',_0x4c9efc[_0x4b2b20(0x1ca)]=_0x4b2b20(0x1fd),_0x489590[_0x4b2b20(0x21a)](_0x4c9efc);return;}_0x1c745f[_0x4b2b20(0x22a)](_0x416c38=>{const _0x36c1b1=_0x4b2b20,_0x2f323e=document['createElement'](_0x36c1b1(0x1a7));_0x2f323e[_0x36c1b1(0x1c9)]=_0x416c38[_0x36c1b1(0x1cf)],_0x2f323e[_0x36c1b1(0x1ca)]=_0x416c38[_0x36c1b1(0x19c)]+'\x20'+_0x416c38['classTime'],_0x489590[_0x36c1b1(0x21a)](_0x2f323e);});}function updateTitle(_0x15778c,_0x2bc997,_0x416ddc,_0x5172a0){const _0x3076af=a0_0x2450ae,_0x7f50e2=document['getElementById'](_0x3076af(0x1c3)),_0x4c99a1=new Date(_0x416ddc),_0x284f99=_0x4c99a1[_0x3076af(0x232)](_0x3076af(0x1a4),{'weekday':'long'}),_0x1c43dc=_0x284f99+'\x20'+_0x4c99a1[_0x3076af(0x20b)]()+'/'+(_0x4c99a1['getMonth']()+0x1),_0x1f8590=_0x15778c+'\x20'+_0x2bc997+_0x3076af(0x1ff)+_0x1c43dc+_0x3076af(0x1ff)+_0x5172a0;_0x7f50e2[_0x3076af(0x1ca)]=_0x1f8590;}async function checkAttendees(_0x122fe8,_0x567078,_0x38e484){const _0x1ab7c7=a0_0x2450ae,_0x314fdf=_0x1ab7c7(0x216),_0x53d96f={'classScheduleId':_0x122fe8,'selectedDate':_0x567078,'classTime':_0x38e484},_0x5e898c=localStorage[_0x1ab7c7(0x205)](_0x1ab7c7(0x1c1)),_0x42533c={'Content-Type':_0x1ab7c7(0x1b7),'Accept':_0x1ab7c7(0x1b7),'Authorization':_0x1ab7c7(0x1ed)+_0x5e898c};try{const _0x3436ca=await fetch(_0x314fdf,{'method':_0x1ab7c7(0x214),'headers':_0x42533c,'body':JSON[_0x1ab7c7(0x203)](_0x53d96f)});if(!_0x3436ca['ok'])throw new Error(_0x1ab7c7(0x1ec)+_0x3436ca[_0x1ab7c7(0x217)]);const _0x2e5c66=await _0x3436ca[_0x1ab7c7(0x1f3)](),_0x1ffdb4=_0x2e5c66[_0x1ab7c7(0x20c)];showAttendees(_0x1ffdb4);}catch(_0x2d6ff3){console[_0x1ab7c7(0x1f0)](_0x1ab7c7(0x221),_0x2d6ff3),errorAPICheckLogin();}}function showAttendees(_0x652986){const _0x49fe35=a0_0x2450ae,_0xa73f2e=document[_0x49fe35(0x1f8)](_0x49fe35(0x1a8));_0xa73f2e[_0x49fe35(0x1ce)]='',_0x652986[_0x49fe35(0x22a)](_0x10a520=>{const _0x3f8c67=_0x49fe35,_0x2aadba=document[_0x3f8c67(0x1e9)](_0x3f8c67(0x1e7));_0x2aadba[_0x3f8c67(0x1b0)]['add'](_0x3f8c67(0x1d0));const _0x37edf7=document[_0x3f8c67(0x1e9)]('img');_0x37edf7[_0x3f8c67(0x204)]=_0x10a520[_0x3f8c67(0x1d7)]||_0x3f8c67(0x1f2),_0x37edf7['alt']=_0x10a520['fullName'],_0x37edf7[_0x3f8c67(0x1b0)][_0x3f8c67(0x1d4)](_0x3f8c67(0x211));const _0x5ada12=document[_0x3f8c67(0x1e9)]('div');_0x5ada12[_0x3f8c67(0x1b0)][_0x3f8c67(0x1d4)](_0x3f8c67(0x20f)),_0x5ada12[_0x3f8c67(0x1ca)]=_0x10a520[_0x3f8c67(0x1d6)];const _0x3c15e3=document[_0x3f8c67(0x1e9)](_0x3f8c67(0x1e7));_0x3c15e3[_0x3f8c67(0x1b0)][_0x3f8c67(0x1d4)](_0x3f8c67(0x1fc));if(_0x10a520[_0x3f8c67(0x1c0)]){const _0x370b35=document[_0x3f8c67(0x1e9)](_0x3f8c67(0x1e7));_0x370b35[_0x3f8c67(0x1ca)]='Confirmed',_0x3c15e3[_0x3f8c67(0x21a)](_0x370b35);}else{const _0x11d56c=document['createElement']('a');_0x11d56c[_0x3f8c67(0x230)]='#',_0x11d56c[_0x3f8c67(0x1b0)][_0x3f8c67(0x1d4)](_0x3f8c67(0x223),_0x3f8c67(0x228)),_0x11d56c[_0x3f8c67(0x1ca)]=_0x3f8c67(0x1a6),_0x11d56c[_0x3f8c67(0x1d2)][_0x3f8c67(0x1f9)]=_0x10a520[_0x3f8c67(0x1f4)],_0x11d56c[_0x3f8c67(0x1d2)][_0x3f8c67(0x19c)]=_0x10a520['classSchedule'][_0x3f8c67(0x1bb)]['className'],_0x11d56c[_0x3f8c67(0x1d2)][_0x3f8c67(0x1c6)]=_0x10a520[_0x3f8c67(0x1b5)][_0x3f8c67(0x1c6)],_0x11d56c[_0x3f8c67(0x1d2)][_0x3f8c67(0x1cf)]=_0x10a520['classSchedule'][_0x3f8c67(0x1cf)],_0x11d56c['dataset'][_0x3f8c67(0x1c2)]=_0x10a520[_0x3f8c67(0x1c2)];const _0x5df428=document[_0x3f8c67(0x1e9)]('a');_0x5df428[_0x3f8c67(0x230)]='#',_0x5df428['classList']['add'](_0x3f8c67(0x1c4),_0x3f8c67(0x228)),_0x5df428[_0x3f8c67(0x1ca)]=_0x3f8c67(0x20d),_0x5df428[_0x3f8c67(0x1d2)][_0x3f8c67(0x1f9)]=_0x10a520[_0x3f8c67(0x1f4)],_0x5df428[_0x3f8c67(0x1d2)]['className']=_0x10a520[_0x3f8c67(0x1b5)][_0x3f8c67(0x1bb)][_0x3f8c67(0x19c)],_0x5df428[_0x3f8c67(0x1d2)][_0x3f8c67(0x1c6)]=_0x10a520[_0x3f8c67(0x1b5)][_0x3f8c67(0x1c6)],_0x5df428['dataset'][_0x3f8c67(0x1cf)]=_0x10a520['classSchedule'][_0x3f8c67(0x1cf)],_0x5df428[_0x3f8c67(0x1d2)][_0x3f8c67(0x21f)]=_0x10a520['id'],_0x3c15e3[_0x3f8c67(0x21a)](_0x11d56c),_0x3c15e3[_0x3f8c67(0x21a)](_0x5df428);}_0x2aadba[_0x3f8c67(0x21a)](_0x37edf7),_0x2aadba[_0x3f8c67(0x21a)](_0x5ada12),_0x2aadba['appendChild'](_0x3c15e3),_0xa73f2e[_0x3f8c67(0x21a)](_0x2aadba);});}async function checkInParticipant(_0x15f889,_0x30e36c,_0x280d57,_0xf1e669){const _0x20de4f=a0_0x2450ae,_0x297408=_0x20de4f(0x1d1),_0x2c073c={'memberNumber':_0x15f889,'classScheduleId':_0x30e36c,'classDateTime':_0x280d57},_0x42d02b=localStorage[_0x20de4f(0x205)](_0x20de4f(0x1c1)),_0x32dff3={'Accept':'application/json','Accept-Language':_0x20de4f(0x220),'Accept-Encoding':_0x20de4f(0x21c),'Authorization':_0x20de4f(0x1ed)+_0x42d02b,'Content-Type':_0x20de4f(0x1b7),'Origin':_0x20de4f(0x215),'Connection':'keep-alive','Referer':'https://myaccount.clubfit.net.au/','Sec-Fetch-Dest':_0x20de4f(0x1a9),'Sec-Fetch-Mode':'cors','Sec-Fetch-Site':_0x20de4f(0x1e6),'Priority':'u=1','TE':_0x20de4f(0x1e1)};try{const _0x51ffa1=await fetch(_0x297408,{'method':'POST','headers':_0x32dff3,'body':JSON['stringify'](_0x2c073c)});if(!_0x51ffa1['ok'])throw new Error(_0x20de4f(0x1ec)+_0x51ffa1[_0x20de4f(0x217)]);const _0x17c1f8=await _0x51ffa1[_0x20de4f(0x1f3)]();if(_0x17c1f8[_0x20de4f(0x20c)]===_0x20de4f(0x1b8)){const _0x433097=_0xf1e669['parentElement'];_0x433097[_0x20de4f(0x1ce)]='';const _0x508f1a=document['createElement'](_0x20de4f(0x1e7));_0x508f1a[_0x20de4f(0x1ca)]=_0x20de4f(0x21b),_0x433097[_0x20de4f(0x21a)](_0x508f1a);}else console['error']('Check-in\x20failed:',_0x17c1f8[_0x20de4f(0x1c7)]);}catch(_0x1eb309){console[_0x20de4f(0x1f0)](_0x20de4f(0x1d5),_0x1eb309);}}function cancelBooking_resolve(_0x16b344,_0x21e990=0x0){return new Promise((_0x1b00c3,_0x35f725)=>{const _0x3dd25d=a0_0x4408;var _0x45d1b2=localStorage[_0x3dd25d(0x205)](_0x3dd25d(0x1c1)),_0x301528=_0x3dd25d(0x1df)+_0x16b344,_0x1a34d1=new XMLHttpRequest();_0x1a34d1['open'](_0x3dd25d(0x214),_0x301528,!![]),_0x1a34d1[_0x3dd25d(0x1eb)](_0x3dd25d(0x207),'application/json'),_0x1a34d1[_0x3dd25d(0x1eb)](_0x3dd25d(0x1ac),_0x3dd25d(0x1b7)),_0x1a34d1[_0x3dd25d(0x1eb)](_0x3dd25d(0x1e8),'Bearer\x20'+_0x45d1b2),_0x1a34d1[_0x3dd25d(0x227)]=function(){const _0x51054f=_0x3dd25d,_0x170c5a=JSON[_0x51054f(0x22e)](_0x1a34d1[_0x51054f(0x22d)]);_0x1a34d1[_0x51054f(0x217)]>=0xc8&&_0x1a34d1['status']<0x12c?(_0x170c5a[_0x51054f(0x1da)]!==0xc8&&console[_0x51054f(0x22f)](_0x51054f(0x21e),_0x1a34d1[_0x51054f(0x22d)]),_0x1b00c3(_0x1a34d1[_0x51054f(0x22d)])):(console[_0x51054f(0x1f0)](_0x51054f(0x224),_0x1a34d1[_0x51054f(0x217)]),console[_0x51054f(0x1f0)](_0x51054f(0x1fa),_0x1a34d1['responseText']),_0x21e990<0x1?errorAPICheckLogin(function(_0x32ca30){const _0x17f8db=_0x51054f;_0x32ca30?cancelBooking_resolve(_0x16b344,_0x21e990+0x1)[_0x17f8db(0x1cb)](_0x1b00c3)[_0x17f8db(0x1bd)](_0x35f725):_0x35f725(new Error(_0x17f8db(0x1fe)));}):_0x35f725(new Error('cancelBooking_resolve\x20-\x20Cancellation\x20failed')));},_0x1a34d1[_0x3dd25d(0x1d3)]=function(){const _0x1f5cf5=_0x3dd25d;console[_0x1f5cf5(0x1f0)](_0x1f5cf5(0x1ea)),_0x21e990<0x1?errorAPICheckLogin(function(_0x2400ef){const _0x2773bb=_0x1f5cf5;_0x2400ef?cancelBooking_resolve(_0x16b344,_0x21e990+0x1)['then'](_0x1b00c3)['catch'](_0x35f725):_0x35f725(new Error(_0x2773bb(0x19b)));}):_0x35f725(new Error(_0x1f5cf5(0x1e0)));},_0x1a34d1['send']();});}function a0_0x212c(){const _0x292c5a=['refresh-attendees','classSchedule','target','application/json','success','https://crossfit168.clubfit.net.au/api/v1/booking/search-classes-current-date','validateLogin\x20-\x20Validation\x20failed:','class','errorAPICheckLogin\x20-\x20function\x20called','catch','marginLeft','.outside-sidebar','hasAttended','access_token','classDateTime','title-coachview','noshow-button','https://admin.clubfit.net.au/api/v1/account/validate','classTime','errors','3123aHMAlh','value','textContent','then','setItem','translateX(-100%)','innerHTML','classScheduleId','attendee-class','https://crossfit168.clubfit.net.au/api/v1/booking/book-class-participant-checkin','dataset','onerror','add','Error\x20during\x20API\x20call:','fullName','memberPhotoLocation','errorAPICheckLogin\x20-\x20login\x20validated','location','statusCode','click','timestampLastChanged','false','visible','https://crossfit168.clubfit.net.au/api/v1/booking/cancel/','cancelBooking_resolve\x20-\x20Network\x20error','trailers','Error\x20fetching\x20classes:','preventDefault','location-chosen','options','same-site','div','Authorization','createElement','cancelBooking_resolve\x20-\x20Network\x20error\x20while\x20cancelling\x20booking','setRequestHeader','HTTP\x20error!\x20status:\x20','Bearer\x20','text','setHours','error','3525060udAxBv','https://clubfitassets.s3.ap-southeast-2.amazonaws.com/common/avatar_default.png','json','number','prevDay','userType','.sidebar','querySelector','userId','Error\x20details:','selectedIndex','buttons-checkin-noshow','No\x20class\x20found','cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20retry','\x20-\x20','change','1452LQDVUU','T00:00:00','stringify','src','getItem','Member','Content-Type','class-chosen','parentElement','getTime','getDate','payload','No\x20Show','getFullYear','name-attendee','getTimezoneOffset','attendee-picture','addEventListener','contains','POST','https://myaccount.clubfit.net.au','https://crossfit168.clubfit.net.au/api/v1/booking/class-participants','status','Error\x20during\x20No\x20Show\x20API\x20call:','refresh_token','appendChild','Confirmed','gzip,\x20deflate,\x20br,\x20zstd','DOMContentLoaded','Response\x20received:','memberBookingId','en-US,en;q=0.5','checkAttendees\x20-\x20Error\x20while\x20checking\x20attendees:','62210thYYpZ','checkin-button','Error\x20while\x20cancelling\x20booking,\x20xhr.status:\x20','replace','23394htLNXw','onload','w-button','slice','forEach','getElementById','setDate','responseText','parse','log','href','datePicker','toLocaleDateString','3003784iaKUMs','keys','cancelBooking_resolve\x20-\x20Cancellation\x20failed\x20after\x20network\x20error\x20and\x20retry','className','toISOString','439251RnTmbE','Required\x20elements\x20not\x20found\x20in\x20the\x20DOM.','26900CeZNnT','validateLogin\x20-\x20Required\x20session\x20storage\x20items\x20are\x20missing','style','selectedDate','en-AU','transform','Check-in','option','.class-attendees','empty','getMonth','851364EDDRha','Accept','length','errorAPICheckLogin\x20-\x20login\x20not\x20validated','join','classList','nextDay','24WTwnvf','true'];a0_0x212c=function(){return _0x292c5a;};return a0_0x212c();}function errorAPICheckLogin(_0x277aa2){const _0x406c56=a0_0x2450ae;console[_0x406c56(0x22f)](_0x406c56(0x1bc)),validateLogin(function(_0x3e016f){const _0x14fb43=_0x406c56;_0x3e016f?(console[_0x14fb43(0x22f)](_0x14fb43(0x1d8)),_0x277aa2(!![])):(console[_0x14fb43(0x22f)](_0x14fb43(0x1ae)),window[_0x14fb43(0x1d9)][_0x14fb43(0x230)]='/');});}function validateLogin(_0x834808){const _0x4c374f=a0_0x2450ae;if(!localStorage['getItem'](_0x4c374f(0x1c1))||!localStorage['getItem'](_0x4c374f(0x1f9))||!localStorage[_0x4c374f(0x205)](_0x4c374f(0x1f6))){console[_0x4c374f(0x1f0)](_0x4c374f(0x1a1)),_0x834808(![]);return;}const _0x522a5f=_0x4c374f(0x1c5),_0x14309b=_0x4c374f(0x214),_0x833312={'xoken':localStorage[_0x4c374f(0x205)](_0x4c374f(0x219)),'userId':localStorage['getItem']('portalUserId'),'userType':localStorage[_0x4c374f(0x205)](_0x4c374f(0x1f6))};makeApiRequest(_0x522a5f,_0x14309b,_0x833312,function(_0x19c26){const _0x1d570f=_0x4c374f;Object[_0x1d570f(0x19a)](_0x19c26[_0x1d570f(0x20c)])[_0x1d570f(0x22a)](function(_0x347f49){const _0x3fda2f=_0x1d570f;localStorage[_0x3fda2f(0x1cc)](_0x347f49,_0x19c26[_0x3fda2f(0x20c)][_0x347f49]);}),_0x834808(!![]);},function(_0x52872e){const _0xae741c=_0x4c374f;console[_0xae741c(0x1f0)](_0xae741c(0x1ba),_0x52872e),_0x834808(![]);});}function getLocalDate(){const _0x56af12=a0_0x2450ae,_0x3a583e=new Date(),_0x40c66e=_0x3a583e[_0x56af12(0x210)]()*0xea60,_0x106217=new Date(_0x3a583e-_0x40c66e)[_0x56af12(0x19d)]()[_0x56af12(0x229)](0x0,0xa);return _0x106217;}