var a0_0x12dd8c=a0_0x42b6;(function(_0x466beb,_0x4ce577){var _0x497d7d=a0_0x42b6,_0x3421cb=_0x466beb();while(!![]){try{var _0x36a14f=-parseInt(_0x497d7d(0xcd))/0x1+parseInt(_0x497d7d(0xfb))/0x2+-parseInt(_0x497d7d(0xec))/0x3+-parseInt(_0x497d7d(0xd5))/0x4+-parseInt(_0x497d7d(0x111))/0x5+parseInt(_0x497d7d(0xf4))/0x6*(-parseInt(_0x497d7d(0xe3))/0x7)+parseInt(_0x497d7d(0xe1))/0x8*(parseInt(_0x497d7d(0xd9))/0x9);if(_0x36a14f===_0x4ce577)break;else _0x3421cb['push'](_0x3421cb['shift']());}catch(_0x2c7b1b){_0x3421cb['push'](_0x3421cb['shift']());}}}(a0_0x108e,0x26a3e));function addLetter(_0x197ee2,_0x971bd8,_0x5e31cb,_0x447645,_0x4832a6){var _0x242e2f=a0_0x42b6;_0x447645<_0x5e31cb[_0x242e2f(0xf9)]?(_0x197ee2[_0x242e2f(0xfe)]+=_0x5e31cb[_0x447645],_0x447645++,setTimeout(()=>addLetter(_0x197ee2,_0x971bd8,_0x5e31cb,_0x447645,_0x4832a6),0x1e)):(_0x971bd8[_0x242e2f(0xfe)]='\x208',setTimeout(()=>_0x4832a6(_0x197ee2,_0x971bd8,_0x5e31cb,_0x447645),0x7d0));}function removeLetter(_0x50ee2d,_0x48d379,_0x1082cb,_0x5a68d4){var _0x48c5e5=a0_0x42b6;let _0x476fd1=_0x50ee2d[_0x48c5e5(0xfe)];_0x476fd1[_0x48c5e5(0xf9)]>0x0?(_0x50ee2d[_0x48c5e5(0xfe)]=_0x476fd1['substring'](0x0,_0x476fd1['length']-0x1),setTimeout(()=>removeLetter(_0x50ee2d,_0x48d379,_0x1082cb,_0x5a68d4),0x1e)):(_0x48d379[_0x48c5e5(0xfe)]='\x208',_0x5a68d4=0x0,setTimeout(()=>addLetter(_0x50ee2d,_0x48d379,_0x1082cb,_0x5a68d4,removeLetter),0x3e8));}function startAnimationLogo(){var _0x5159d8=a0_0x42b6;const _0x1bf44d=document[_0x5159d8(0xef)](_0x5159d8(0xf6)),_0x31dd68=document[_0x5159d8(0xef)](_0x5159d8(0xfd)),_0x480b05=_0x5159d8(0xf5);let _0xfedb54=0x0;setTimeout(()=>addLetter(_0x1bf44d,_0x31dd68,_0x480b05,_0xfedb54,removeLetter),0x64);}function performLogin(_0x10ee65=null,_0x220dc4=null){var _0xa77875=a0_0x42b6;(!_0x10ee65||!_0x220dc4)&&(_0x10ee65=document[_0xa77875(0xef)](_0xa77875(0x10d))['value'],_0x220dc4=document[_0xa77875(0xef)](_0xa77875(0x10c))['value']);var _0x4a8f6a=new XMLHttpRequest();_0x4a8f6a[_0xa77875(0xe5)](_0xa77875(0x10b),_0xa77875(0x104)),_0x4a8f6a['setRequestHeader'](_0xa77875(0xcf),_0xa77875(0xca)),_0x4a8f6a[_0xa77875(0xf2)]('Accept',_0xa77875(0xca)),_0x4a8f6a['onload']=function(){var _0x58f583=_0xa77875;if(_0x4a8f6a[_0x58f583(0xd6)]===0xc8){var _0x5544e1=JSON[_0x58f583(0x117)](_0x4a8f6a[_0x58f583(0xe9)]);_0x5544e1['statusCode']===0xc8?_0x5544e1['payload'][_0x58f583(0x113)]?(isResetPasswordFlowActive=!![],document[_0x58f583(0xef)](_0x58f583(0x11b))[_0x58f583(0x100)][_0x58f583(0xea)]='block',localStorage[_0x58f583(0xee)]('portalUserId',_0x5544e1['payload']['portalUserId'])):(Object[_0x58f583(0xdf)](_0x5544e1[_0x58f583(0xde)])[_0x58f583(0xce)](function(_0x14d5a6){var _0x16ac54=_0x58f583;localStorage[_0x16ac54(0xee)](_0x14d5a6,_0x5544e1[_0x16ac54(0xde)][_0x14d5a6]);}),window[_0x58f583(0xf7)]['href']=_0x58f583(0xed)):alert(_0x58f583(0x11d));}else alert('Error:\x20'+_0x4a8f6a[_0x58f583(0xd6)]);},_0x4a8f6a[_0xa77875(0xd4)](JSON[_0xa77875(0xd7)]({'userName':_0x10ee65,'password':_0x220dc4,'platform':_0xa77875(0xe8)}));}function sendPasswordResetRequest(_0x22e7d8){var _0x94c64a=a0_0x42b6;const _0x4dcb69=_0x94c64a(0xe0),_0x3ab635=new Headers({'Host':'admin.clubfit.net.au','Accept':_0x94c64a(0xca),'Content-Type':_0x94c64a(0xca),'User-Agent':_0x94c64a(0xd8),'Accept-Language':'en-AU,en;q=0.9'}),_0x4b622c=JSON[_0x94c64a(0xd7)]({'Email':_0x22e7d8});var _0x423be6=document['getElementById'](_0x94c64a(0xe4));fetch(_0x4dcb69,{'method':_0x94c64a(0x10b),'headers':_0x3ab635,'body':_0x4b622c})[_0x94c64a(0x103)](_0x5dcd2a=>_0x5dcd2a['json']())[_0x94c64a(0x103)](_0x4f3bca=>{var _0x4a19df=_0x94c64a;_0x4f3bca[_0x4a19df(0xdd)]&&_0x4f3bca[_0x4a19df(0xdd)]!==0xc8?console[_0x4a19df(0xda)](_0x4f3bca['errors'][_0x4a19df(0xcc)]):alert(_0x4a19df(0x11a)),closePopup(_0x423be6);})['catch'](_0x4dc3c7=>{var _0x502124=_0x94c64a;console[_0x502124(0x118)](_0x502124(0xe7),_0x4dc3c7),alert('There\x20was\x20an\x20issue\x20processing\x20your\x20request.\x20Please\x20try\x20again.'),closePopup(_0x423be6);});}function resetPasswordRequest(){var _0x5b6aec=a0_0x42b6,_0x236a63=document[_0x5b6aec(0xef)]('new-password')['value'],_0x341aed=document[_0x5b6aec(0xef)]('password')[_0x5b6aec(0x116)],_0x1f07bf=localStorage['getItem'](_0x5b6aec(0x11c)),_0x1d292b=document[_0x5b6aec(0xef)](_0x5b6aec(0x10d))['value'],_0x5832da=new XMLHttpRequest();_0x5832da[_0x5b6aec(0xe5)](_0x5b6aec(0x10b),_0x5b6aec(0xc9)),_0x5832da[_0x5b6aec(0xf2)](_0x5b6aec(0xcf),_0x5b6aec(0xca)),_0x5832da[_0x5b6aec(0xf2)]('Accept',_0x5b6aec(0xca)),_0x5832da[_0x5b6aec(0xd4)](JSON[_0x5b6aec(0xd7)]({'userId':_0x1f07bf,'OldPassword':_0x341aed,'NewPassword':_0x236a63})),_0x5832da[_0x5b6aec(0x102)]=function(){var _0x3897b2=_0x5b6aec;if(_0x5832da['status']===0xc8){var _0x5ef6e5=JSON[_0x3897b2(0x117)](_0x5832da[_0x3897b2(0xe9)]);_0x5ef6e5[_0x3897b2(0xdd)]===0xc8&&_0x5ef6e5[_0x3897b2(0xde)]===_0x3897b2(0xe6)?(alert(_0x3897b2(0x115)),document['getElementById']('password-reset-required-popup')[_0x3897b2(0x100)][_0x3897b2(0xea)]='none',isResetPasswordFlowActive=![],performLogin(_0x1d292b,_0x236a63)):alert('Failed\x20to\x20reset\x20the\x20password.\x20Please\x20try\x20again.');}else alert(_0x3897b2(0xe2)+_0x5832da[_0x3897b2(0xd6)]);};}function validateLogin(_0x4a1134){var _0x557e5f=a0_0x42b6;if(!localStorage[_0x557e5f(0xfa)](_0x557e5f(0xd2))||!localStorage[_0x557e5f(0xfa)]('userId')||!localStorage[_0x557e5f(0xfa)]('userType')){console[_0x557e5f(0x118)]('validateLogin\x20-\x20Required\x20session\x20storage\x20items\x20are\x20missing'),_0x4a1134(![]);return;}var _0xa95bc4=new XMLHttpRequest();_0xa95bc4[_0x557e5f(0xe5)](_0x557e5f(0x10b),'https://admin.clubfit.net.au/api/v1/account/validate'),_0xa95bc4['setRequestHeader']('Content-Type','application/json'),_0xa95bc4[_0x557e5f(0xf2)](_0x557e5f(0x108),_0x557e5f(0xca)),_0xa95bc4[_0x557e5f(0xf2)](_0x557e5f(0xd0),'myclub/3\x20CFNetwork/1492.0.1\x20Darwin/23.3.0'),_0xa95bc4[_0x557e5f(0xf2)](_0x557e5f(0xcb),_0x557e5f(0xdc)),_0xa95bc4[_0x557e5f(0x102)]=function(){var _0x3a207a=_0x557e5f;if(_0xa95bc4[_0x3a207a(0xd6)]===0xc8){var _0x27b70f=JSON[_0x3a207a(0x117)](_0xa95bc4['responseText']);_0x27b70f['statusCode']===0xc8?(Object[_0x3a207a(0xdf)](_0x27b70f[_0x3a207a(0xde)])[_0x3a207a(0xce)](function(_0x5ab26e){var _0x1dc498=_0x3a207a;localStorage[_0x1dc498(0xee)](_0x5ab26e,_0x27b70f['payload'][_0x5ab26e]);}),_0x4a1134(!![])):(console['error'](_0x3a207a(0x110),_0x27b70f),_0x4a1134(![]));}else console[_0x3a207a(0x118)]('validateLogin\x20-\x20Error\x20during\x20validation:',_0xa95bc4[_0x3a207a(0xd6)]),_0x4a1134(![]);};var _0x549eeb={'xoken':localStorage[_0x557e5f(0xfa)]('refresh_token'),'userId':localStorage[_0x557e5f(0xfa)](_0x557e5f(0x11c)),'userType':localStorage[_0x557e5f(0xfa)](_0x557e5f(0xf1))};_0xa95bc4[_0x557e5f(0xd4)](JSON[_0x557e5f(0xd7)](_0x549eeb));}function a0_0x42b6(_0x37090c,_0x588fe9){var _0x108e87=a0_0x108e();return a0_0x42b6=function(_0x42b620,_0x3de8c8){_0x42b620=_0x42b620-0xc9;var _0x3b74dd=_0x108e87[_0x42b620];return _0x3b74dd;},a0_0x42b6(_0x37090c,_0x588fe9);}function a0_0x108e(){var _0xd3c88a=['preventDefault','Check\x20your\x20email\x20for\x20the\x20temporary\x20password','password-reset-required-popup','portalUserId','Login\x20failed.\x20Please\x20check\x20your\x20credentials.','Escape','https://admin.clubfit.net.au/api/v1/account/reset-password','application/json','Accept-Language','message','94270LrhUYl','forEach','Content-Type','User-Agent','click','access_token','remove','send','122468THxnvw','status','stringify','myclub/3\x20CFNetwork/1492.0.1\x20Darwin/23.3.0','2943UCoBcx','log','DOMContentLoaded','en-AU,en;q=0.9','statusCode','payload','keys','https://admin.clubfit.net.au/api/v1/account/forgot-password','18856wDgluM','Error:\x20','399aUeKGL','password-reset-popup','open','Success','There\x20was\x20a\x20problem\x20with\x20your\x20fetch\x20operation:','web','responseText','display','querySelector','392889CfyJFw','/booking','setItem','getElementById','.backdrop','userType','setRequestHeader','password-required-reset-form','25554TCBKSR','Elevat','dynamic','location','keydown','length','getItem','41358wCeIlD','<div\x20class=\x22backdrop\x22></div>','suffix','textContent','addEventListener','style','block','onload','then','https://admin.clubfit.net.au/api/v1/account/login-v2','insertAdjacentHTML','none','reset-email','Accept','password-reset-form','submit','POST','password','email','.popup','forgot-password-link','validateLogin\x20-\x20Validation\x20failed','672675yVirne','href','isResetPassword','beforeend','Your\x20password\x20has\x20been\x20successfully\x20reset.','value','parse','error'];a0_0x108e=function(){return _0xd3c88a;};return a0_0x108e();}function closePopup(_0x13d5fe){var _0x115b83=a0_0x42b6;_0x13d5fe&&(_0x13d5fe[_0x115b83(0x100)][_0x115b83(0xea)]=_0x115b83(0x106));var _0x1de495=document[_0x115b83(0xeb)](_0x115b83(0xf0));_0x1de495&&_0x1de495[_0x115b83(0xd3)]();}document['addEventListener'](a0_0x12dd8c(0xdb),function(){var _0x16ae02=a0_0x12dd8c;startAnimationLogo(),validateLogin(function(_0x52b751){var _0x40db2e=a0_0x42b6;_0x52b751&&(window[_0x40db2e(0xf7)][_0x40db2e(0x112)]=_0x40db2e(0xed));});let _0x19400a=![];document[_0x16ae02(0xef)]('login-form')[_0x16ae02(0xff)]('submit',function(_0x47e238){var _0x461c07=_0x16ae02;_0x47e238[_0x461c07(0x119)](),!_0x19400a&&performLogin();});var _0x17e6d7=document[_0x16ae02(0xef)](_0x16ae02(0x10d)),_0x37a9c1=document[_0x16ae02(0xef)](_0x16ae02(0x107)),_0x37146e=document[_0x16ae02(0xef)]('password-reset-popup'),_0x688a04=document[_0x16ae02(0xef)](_0x16ae02(0x11b));document[_0x16ae02(0xef)](_0x16ae02(0x10f))[_0x16ae02(0xff)](_0x16ae02(0xd1),function(_0x525670){var _0x46649f=_0x16ae02;_0x525670[_0x46649f(0x119)](),_0x3cc609(_0x37146e);}),document['getElementById'](_0x16ae02(0x109))[_0x16ae02(0xff)](_0x16ae02(0x10a),function(_0x4c6f2c){var _0x36b5f2=_0x16ae02;_0x4c6f2c[_0x36b5f2(0x119)]();var _0x542300=document[_0x36b5f2(0xef)](_0x36b5f2(0x107))[_0x36b5f2(0x116)];sendPasswordResetRequest(_0x542300);}),document['querySelectorAll']('.close-window')[_0x16ae02(0xce)](function(_0x47e9a9){var _0xf1bd98=_0x16ae02;_0x47e9a9[_0xf1bd98(0xff)](_0xf1bd98(0xd1),function(){var _0x35be0b=_0xf1bd98;closePopup(_0x47e9a9['closest'](_0x35be0b(0x10e)));});}),document[_0x16ae02(0xff)](_0x16ae02(0xf8),function(_0x283986){var _0xc34142=_0x16ae02;_0x283986['key']===_0xc34142(0x11e)&&(closePopup(_0x37146e),closePopup(_0x688a04));});function _0x3cc609(_0x54b2b3){var _0x17755e=_0x16ae02;_0x17e6d7[_0x17755e(0x116)]&&(_0x37a9c1['value']=_0x17e6d7['value']),_0x54b2b3[_0x17755e(0x100)][_0x17755e(0xea)]=_0x17755e(0x101),document['body'][_0x17755e(0x105)](_0x17755e(0x114),_0x17755e(0xfc)),document['querySelector'](_0x17755e(0xf0))['addEventListener'](_0x17755e(0xd1),function(){closePopup(_0x54b2b3);});}document['getElementById'](_0x16ae02(0xf3))['addEventListener']('submit',function(_0x344efb){_0x344efb['preventDefault'](),resetPasswordRequest();});});