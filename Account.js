var a0_0x1bda66=a0_0x13d9;(function(_0x33a0c3,_0x4ce90b){var _0x5d2917=a0_0x13d9,_0x17bc20=_0x33a0c3();while(!![]){try{var _0x2ec92b=-parseInt(_0x5d2917(0x112))/0x1*(parseInt(_0x5d2917(0x117))/0x2)+parseInt(_0x5d2917(0x102))/0x3+parseInt(_0x5d2917(0x13e))/0x4*(-parseInt(_0x5d2917(0x127))/0x5)+-parseInt(_0x5d2917(0x131))/0x6*(-parseInt(_0x5d2917(0x151))/0x7)+parseInt(_0x5d2917(0x143))/0x8+parseInt(_0x5d2917(0x115))/0x9*(-parseInt(_0x5d2917(0x106))/0xa)+-parseInt(_0x5d2917(0x139))/0xb*(-parseInt(_0x5d2917(0x126))/0xc);if(_0x2ec92b===_0x4ce90b)break;else _0x17bc20['push'](_0x17bc20['shift']());}catch(_0x1bedd7){_0x17bc20['push'](_0x17bc20['shift']());}}}(a0_0x5211,0x700e9));function makeApiRequest(_0xdf0ba7,_0x1abe80,_0x570422,_0xf21430,_0x36e2b9=0x0){var _0x57f8cc=a0_0x13d9,_0x427151=localStorage[_0x57f8cc(0x12a)](_0x57f8cc(0x141)),_0x26ab48=new XMLHttpRequest();_0x26ab48['open'](_0x1abe80,_0xdf0ba7,!![]),_0x26ab48['setRequestHeader']('Content-Type','application/json'),_0x26ab48[_0x57f8cc(0x129)](_0x57f8cc(0x123),_0x57f8cc(0x108)),_0x26ab48[_0x57f8cc(0x129)](_0x57f8cc(0x132),_0x57f8cc(0x153)+_0x427151),_0x26ab48[_0x57f8cc(0x14a)]=function(){var _0x22c39a=_0x57f8cc;_0x26ab48[_0x22c39a(0x128)]===0xc8?_0xf21430(JSON['parse'](_0x26ab48[_0x22c39a(0x113)])):_0x36e2b9<0x1?errorAPICheckLogin(function(_0x482129){_0x482129&&makeApiRequest(_0xdf0ba7,_0x1abe80,_0x570422,_0xf21430,_0x36e2b9+0x1);}):console[_0x22c39a(0x13f)](_0x22c39a(0x124),_0x26ab48[_0x22c39a(0x128)]);},_0x26ab48[_0x57f8cc(0x134)]=function(){var _0x36324f=_0x57f8cc;console['error'](_0x36324f(0x14c),_0x26ab48[_0x36324f(0x134)]),_0x36e2b9<0x1?errorAPICheckLogin(function(_0x2ef7ea){_0x2ef7ea&&makeApiRequest(_0xdf0ba7,_0x1abe80,_0x570422,_0xf21430,_0x36e2b9+0x1);}):console[_0x36324f(0x13f)]('makeApiRequest\x20-\x20Retried\x20request\x20failed:',_0x26ab48[_0x36324f(0x128)]);},_0x570422?_0x26ab48[_0x57f8cc(0x122)](JSON['stringify'](_0x570422)):_0x26ab48[_0x57f8cc(0x122)]();}function errorAPICheckLogin(_0x29adba){var _0x369483=a0_0x13d9;console['log'](_0x369483(0x11c)),validateLogin(function(_0x1fae30){var _0x400c3e=_0x369483;_0x1fae30?(console['log'](_0x400c3e(0x147)),_0x29adba(!![])):(console[_0x400c3e(0x103)](_0x400c3e(0x140)),window['location'][_0x400c3e(0x107)]='/');});}function validateLogin(_0x4c5744){var _0x1ea7ac=a0_0x13d9;if(!localStorage[_0x1ea7ac(0x12a)]('access_token')||!localStorage[_0x1ea7ac(0x12a)]('userId')||!localStorage[_0x1ea7ac(0x12a)](_0x1ea7ac(0x14b))){console[_0x1ea7ac(0x13f)]('validateLogin\x20-\x20Required\x20session\x20storage\x20items\x20are\x20missing'),_0x4c5744(![]);return;}const _0x3a3121=_0x1ea7ac(0x12c),_0x461c89=_0x1ea7ac(0x145),_0x58dd30={'xoken':localStorage[_0x1ea7ac(0x12a)]('refresh_token'),'userId':localStorage[_0x1ea7ac(0x12a)](_0x1ea7ac(0x125)),'userType':localStorage[_0x1ea7ac(0x12a)](_0x1ea7ac(0x14b))};makeApiRequest(_0x3a3121,_0x461c89,_0x58dd30,function(_0x3fee36){var _0x38853d=_0x1ea7ac;Object[_0x38853d(0x133)](_0x3fee36[_0x38853d(0x12b)])['forEach'](function(_0x511275){var _0xd710d1=_0x38853d;localStorage[_0xd710d1(0x120)](_0x511275,_0x3fee36[_0xd710d1(0x12b)][_0x511275]);}),_0x4c5744(!![]);},function(_0x22d437){var _0x54744a=_0x1ea7ac;console[_0x54744a(0x13f)](_0x54744a(0x109),_0x22d437),_0x4c5744(![]);});}function fetchMembershipInfo(){var _0x410e3a=a0_0x13d9,_0x4be447=localStorage['getItem'](_0x410e3a(0x14f)),_0x5ca5e5=_0x410e3a(0x130)+_0x4be447;makeApiRequest(_0x5ca5e5,'GET',null,function(_0x5bc391){var _0x32f6cd=_0x410e3a,_0x559580=_0x5bc391[_0x32f6cd(0x12b)];displayMembershipData(_0x559580);});}function displayMembershipData(_0x1cdd6d){var _0x357ef7=a0_0x13d9,_0x101c14=_0x1cdd6d[_0x357ef7(0x104)][_0x357ef7(0x150)],_0x3d6727=_0x1cdd6d['membershipName'],_0x4bc400=_0x1cdd6d[_0x357ef7(0x104)]['nextPaymentDate'],_0x5947f0=_0x1cdd6d['contractTypeDetails'][_0x357ef7(0x13b)]!==undefined?_0x1cdd6d[_0x357ef7(0x104)][_0x357ef7(0x13b)]:0x0,_0x1409d4=document[_0x357ef7(0x136)](_0x357ef7(0x11d));if(_0x1409d4){var _0x196b03=_0x357ef7(0x152)+_0x101c14+'</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>My\x20membership:</strong>&nbsp;'+_0x3d6727+_0x357ef7(0x110)+_0x4bc400+_0x357ef7(0x13a)+_0x5947f0[_0x357ef7(0x13d)](0x2)+_0x357ef7(0x137);if(_0x3d6727[_0x357ef7(0x149)]()['includes'](_0x357ef7(0x14d))){var _0x3a79ee=_0x1cdd6d[_0x357ef7(0x142)],_0x3c4686=_0x1cdd6d['costPerSession']!==undefined?_0x1cdd6d[_0x357ef7(0x11f)]:0x0;_0x196b03+=_0x357ef7(0x111)+_0x3a79ee+_0x357ef7(0x146);}_0x196b03+=_0x357ef7(0x10c),_0x1409d4[_0x357ef7(0x144)]=_0x196b03;}else console[_0x357ef7(0x13f)](_0x357ef7(0x105));}function fetchUserProfile(){var _0x1405c2=a0_0x13d9,_0x4decca=localStorage['getItem'](_0x1405c2(0x14f)),_0x42a86f=_0x1405c2(0x116)+_0x4decca+_0x1405c2(0x12f);makeApiRequest(_0x42a86f,_0x1405c2(0x12d),null,function(_0x3f9067){var _0x228b4c=_0x3f9067['payload'];updateProfileData(_0x228b4c);});}function updateProfileData(_0x162bad){var _0x448041=a0_0x13d9,_0xb217f1=_0x162bad[_0x448041(0x10e)],_0x369ee2=_0x162bad[_0x448041(0x114)],_0x4755bc=_0x162bad['lastName'];updateProfilePicture(_0xb217f1),updateUserName(_0x369ee2,_0x4755bc);}function updateProfilePicture(_0x350951){var _0x362dea=a0_0x13d9;if(_0x350951){var _0x36d97a=document[_0x362dea(0x136)](_0x362dea(0x138));_0x36d97a?_0x36d97a[_0x362dea(0x119)]=_0x362dea(0x13c)+_0x350951:console[_0x362dea(0x13f)](_0x362dea(0x11e));}else console[_0x362dea(0x13f)]('Avatar\x20not\x20found\x20in\x20response.');}function updateUserName(_0x26e4b6,_0x276a4e){var _0x517fc9=a0_0x13d9,_0xcdf1f=document[_0x517fc9(0x136)](_0x517fc9(0x10b));_0xcdf1f?_0xcdf1f[_0x517fc9(0x11a)]=_0x26e4b6+'\x20'+_0x276a4e:console[_0x517fc9(0x13f)]('Element\x20with\x20ID\x20\x22name-user\x22\x20not\x20found.');}function fetchWorkoutImage(){var _0x5e3072=a0_0x13d9,_0x31bb83=localStorage[_0x5e3072(0x12a)](_0x5e3072(0x14f)),_0x387089=new Date(),_0x13f526=_0x387089[_0x5e3072(0x135)](),_0x11fa1=String(_0x387089['getMonth']()+0x1)[_0x5e3072(0x10d)](0x2,'0'),_0xb2a194=String(_0x387089['getDate']())[_0x5e3072(0x10d)](0x2,'0'),_0xafd7d2=_0x13f526+'-'+_0x11fa1+'-'+_0xb2a194,_0x23f812='https://crossfit168.clubfit.net.au/api/v1/workout/myworkout',_0x41abd3={'userId':_0x31bb83,'clubId':0x2,'selectedDate':_0xafd7d2,'department':'','imageHeight':0x0,'imageWidth':0x0};makeApiRequest(_0x23f812,'POST',_0x41abd3,function(_0xed0c0){var _0x4c461e=_0x5e3072;if(_0xed0c0&&_0xed0c0[_0x4c461e(0x12b)]&&_0xed0c0[_0x4c461e(0x12b)]['imageUrl']){var _0x5891f1=_0xed0c0[_0x4c461e(0x12b)][_0x4c461e(0x155)],_0x106195=document['getElementById']('day-picture');_0x106195?_0x106195[_0x4c461e(0x119)]=_0x5891f1:console[_0x4c461e(0x13f)](_0x4c461e(0x14e));}else{console[_0x4c461e(0x103)]('Image\x20URL\x20not\x20found\x20in\x20the\x20response.\x20Defaulting\x20to\x20Static\x20Photo\x20of\x20Day');var _0x5891f1=_0x4c461e(0x118),_0x106195=document[_0x4c461e(0x136)](_0x4c461e(0x121));_0x106195[_0x4c461e(0x119)]=_0x5891f1;}});}function setupSignoutButton(){var _0x2fe376=a0_0x13d9,_0x51eb53=document[_0x2fe376(0x136)](_0x2fe376(0x148));_0x51eb53[_0x2fe376(0x12e)](_0x2fe376(0x154),function(){var _0x12cdfe=_0x2fe376;localStorage['clear'](),window[_0x12cdfe(0x10f)][_0x12cdfe(0x107)]=_0x12cdfe(0x11b);});}function a0_0x13d9(_0x1da2a3,_0x2ae4e3){var _0x521153=a0_0x5211();return a0_0x13d9=function(_0x13d9e7,_0x39454f){_0x13d9e7=_0x13d9e7-0x102;var _0x367349=_0x521153[_0x13d9e7];return _0x367349;},a0_0x13d9(_0x1da2a3,_0x2ae4e3);}document[a0_0x1bda66(0x12e)](a0_0x1bda66(0x10a),function(){fetchMembershipInfo(),fetchUserProfile(),fetchWorkoutImage(),setupSignoutButton();});function a0_0x5211(){var _0x5e791a=['makeApiRequest\x20-\x20Retried\x20request\x20failed:','portalUserId','45732MlaxCJ','130WGwroR','status','setRequestHeader','getItem','payload','https://admin.clubfit.net.au/api/v1/account/validate','GET','addEventListener','/150/150','https://crossfit168.clubfit.net.au/api/v1/user/my-membership/','4332Wpmsgu','Authorization','keys','onerror','getFullYear','getElementById','</p>\x0a\x20\x20\x20\x20','profile-picture','3058Fwvtuf','</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Amount:</strong>&nbsp;$','nextPaymentAmount','data:image/png;base64,','toFixed','124556CQjgGE','error','errorAPICheckLogin\x20-\x20login\x20not\x20validated','access_token','sessionRemaining','5787808iRgzKU','innerHTML','POST','</p>\x0a\x20\x20\x20\x20\x20\x20','errorAPICheckLogin\x20-\x20login\x20validated','signout-button','toLowerCase','onload','userType','makeApiRequest\x20-\x20Network\x20error','pass','Element\x20with\x20ID\x20\x22day-picture\x22\x20not\x20found.','userId','membershipStartDate','2023TtoFrg','\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22w-richtext\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Member\x20since:</strong>&nbsp;','Bearer\x20','click','imageUrl','2569479dqbvKJ','log','contractTypeDetails','Element\x20with\x20ID\x20\x22membership-info\x22\x20not\x20found.','10VrpiBL','href','application/json','validateLogin\x20-\x20Validation\x20failed:','DOMContentLoaded','name-user','</div>','padStart','avatar','location','</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Next\x20payment:</strong>&nbsp;','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>Sessions\x20remaining:</strong>&nbsp;','722717TKGzyn','responseText','firstName','7710921iOGlZS','https://crossfit168.clubfit.net.au/api/v1/user/profile/','2gDxcOh','https://uploads-ssl.webflow.com/65da9849ba41bda7158b1f88/6652813be776f263fe3744df_DefaultPhotoDay.jpg','src','textContent','https://16elevat8.webflow.io/','errorAPICheckLogin\x20-\x20function\x20called','membership-info','Element\x20with\x20ID\x20\x22profile-picture\x22\x20not\x20found.','costPerSession','setItem','day-picture','send','Accept'];a0_0x5211=function(){return _0x5e791a;};return a0_0x5211();}