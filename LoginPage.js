var a0_0x3e07c6=a0_0x130a;(function(_0x49f5b7,_0x146d0e){var _0x23238e=a0_0x130a,_0x2d40cd=_0x49f5b7();while(!![]){try{var _0x1a215d=parseInt(_0x23238e(0x1b9))/0x1*(-parseInt(_0x23238e(0x1ca))/0x2)+-parseInt(_0x23238e(0x1b7))/0x3+-parseInt(_0x23238e(0x1c2))/0x4*(-parseInt(_0x23238e(0x1c6))/0x5)+-parseInt(_0x23238e(0x1ce))/0x6+parseInt(_0x23238e(0x1be))/0x7*(-parseInt(_0x23238e(0x1d2))/0x8)+-parseInt(_0x23238e(0x1ac))/0x9*(parseInt(_0x23238e(0x1a1))/0xa)+parseInt(_0x23238e(0x195))/0xb;if(_0x1a215d===_0x146d0e)break;else _0x2d40cd['push'](_0x2d40cd['shift']());}catch(_0x41a31c){_0x2d40cd['push'](_0x2d40cd['shift']());}}}(a0_0x4be0,0x6123d));function addLetter(_0x3fc6cd,_0x213e84,_0x315f29,_0x3395bf,_0x254771){var _0x3359e3=a0_0x130a;_0x3395bf<_0x315f29[_0x3359e3(0x1b0)]?(_0x3fc6cd[_0x3359e3(0x183)]+=_0x315f29[_0x3395bf],_0x3395bf++,setTimeout(()=>addLetter(_0x3fc6cd,_0x213e84,_0x315f29,_0x3395bf,_0x254771),0x1e)):(_0x213e84[_0x3359e3(0x183)]='\x208',setTimeout(()=>_0x254771(_0x3fc6cd,_0x213e84,_0x315f29,_0x3395bf),0x7d0));}function removeLetter(_0x1905c9,_0x84ab8,_0x387100,_0x96b630){var _0x577f75=a0_0x130a;let _0x43b801=_0x1905c9[_0x577f75(0x183)];_0x43b801[_0x577f75(0x1b0)]>0x0?(_0x1905c9[_0x577f75(0x183)]=_0x43b801['substring'](0x0,_0x43b801['length']-0x1),setTimeout(()=>removeLetter(_0x1905c9,_0x84ab8,_0x387100,_0x96b630),0x1e)):(_0x84ab8[_0x577f75(0x183)]='\x208',_0x96b630=0x0,setTimeout(()=>addLetter(_0x1905c9,_0x84ab8,_0x387100,_0x96b630,removeLetter),0x3e8));}function startAnimationLogo(){var _0x3566e2=a0_0x130a;const _0x1e0c3a=document[_0x3566e2(0x193)](_0x3566e2(0x1c5)),_0x19edd3=document[_0x3566e2(0x193)](_0x3566e2(0x1b2)),_0x440a64=_0x3566e2(0x1ad);let _0x3ba474=0x0;setTimeout(()=>addLetter(_0x1e0c3a,_0x19edd3,_0x440a64,_0x3ba474,removeLetter),0x64);}function performLogin(_0x4856df=null,_0x3a72b9=null){var _0x4aafdc=a0_0x130a;(!_0x4856df||!_0x3a72b9)&&(_0x4856df=document[_0x4aafdc(0x193)](_0x4aafdc(0x19e))[_0x4aafdc(0x1c4)],_0x3a72b9=document['getElementById'](_0x4aafdc(0x1a8))[_0x4aafdc(0x1c4)]);var _0x1aa32a=new XMLHttpRequest();_0x1aa32a[_0x4aafdc(0x19f)](_0x4aafdc(0x191),_0x4aafdc(0x1b5)),_0x1aa32a['setRequestHeader'](_0x4aafdc(0x19c),_0x4aafdc(0x1c3)),_0x1aa32a[_0x4aafdc(0x1b3)]('Accept',_0x4aafdc(0x1c3)),_0x1aa32a[_0x4aafdc(0x190)]=function(){var _0x1056d0=_0x4aafdc;if(_0x1aa32a['status']===0xc8){var _0x5e746a=JSON[_0x1056d0(0x1ae)](_0x1aa32a['responseText']);_0x5e746a['statusCode']===0xc8?_0x5e746a[_0x1056d0(0x1d0)]['isResetPassword']?(isResetPasswordFlowActive=!![],document[_0x1056d0(0x193)](_0x1056d0(0x1c1))[_0x1056d0(0x186)]['display']=_0x1056d0(0x1af),localStorage[_0x1056d0(0x1b4)](_0x1056d0(0x19d),_0x5e746a[_0x1056d0(0x1d0)][_0x1056d0(0x19d)])):(Object[_0x1056d0(0x1c0)](_0x5e746a[_0x1056d0(0x1d0)])[_0x1056d0(0x1c7)](function(_0x3d47fe){localStorage['setItem'](_0x3d47fe,_0x5e746a['payload'][_0x3d47fe]);}),window[_0x1056d0(0x1aa)][_0x1056d0(0x18f)]=_0x1056d0(0x1dd)):alert(_0x1056d0(0x199));}else alert('Error:\x20'+_0x1aa32a['status']);},_0x1aa32a[_0x4aafdc(0x1a5)](JSON[_0x4aafdc(0x1bd)]({'userName':_0x4856df,'password':_0x3a72b9,'platform':_0x4aafdc(0x1a7)}));}function sendPasswordResetRequest(_0x5e1de7){var _0x53426d=a0_0x130a;const _0x36b889=_0x53426d(0x1ba),_0x2537aa=new Headers({'Host':_0x53426d(0x181),'Accept':_0x53426d(0x1c3),'Content-Type':_0x53426d(0x1c3),'User-Agent':_0x53426d(0x1db),'Accept-Language':_0x53426d(0x1dc)}),_0xb9693d=JSON[_0x53426d(0x1bd)]({'Email':_0x5e1de7});var _0x9ee763=document[_0x53426d(0x193)]('password-reset-popup');fetch(_0x36b889,{'method':_0x53426d(0x191),'headers':_0x2537aa,'body':_0xb9693d})[_0x53426d(0x180)](_0x55760f=>_0x55760f[_0x53426d(0x184)]())[_0x53426d(0x180)](_0x13a298=>{var _0x50dc41=_0x53426d;_0x13a298[_0x50dc41(0x1d7)]&&_0x13a298[_0x50dc41(0x1d7)]!==0xc8?console[_0x50dc41(0x194)](_0x13a298[_0x50dc41(0x1b8)][_0x50dc41(0x1d1)]):alert(_0x50dc41(0x1e0)),closePopup(_0x9ee763);})[_0x53426d(0x1d8)](_0x218aa9=>{var _0x2f1cab=_0x53426d;console[_0x2f1cab(0x182)](_0x2f1cab(0x185),_0x218aa9),alert(_0x2f1cab(0x1d5)),closePopup(_0x9ee763);});}function resetPasswordRequest(){var _0x475977=a0_0x130a,_0x185ecf=document[_0x475977(0x193)](_0x475977(0x1e2))[_0x475977(0x1c4)],_0x483a2d=document[_0x475977(0x193)](_0x475977(0x1a8))['value'],_0x1acc9a=localStorage[_0x475977(0x1d4)]('portalUserId'),_0x3ba555=document[_0x475977(0x193)](_0x475977(0x19e))['value'],_0x494b87=new XMLHttpRequest();_0x494b87['open'](_0x475977(0x191),_0x475977(0x1b6)),_0x494b87['setRequestHeader']('Content-Type',_0x475977(0x1c3)),_0x494b87[_0x475977(0x1b3)](_0x475977(0x1a3),_0x475977(0x1c3)),_0x494b87[_0x475977(0x1a5)](JSON[_0x475977(0x1bd)]({'userId':_0x1acc9a,'OldPassword':_0x483a2d,'NewPassword':_0x185ecf})),_0x494b87[_0x475977(0x190)]=function(){var _0x127e06=_0x475977;if(_0x494b87['status']===0xc8){var _0x1b9c8c=JSON[_0x127e06(0x1ae)](_0x494b87[_0x127e06(0x18e)]);_0x1b9c8c[_0x127e06(0x1d7)]===0xc8&&_0x1b9c8c[_0x127e06(0x1d0)]==='Success'?(alert('Your\x20password\x20has\x20been\x20successfully\x20reset.'),document[_0x127e06(0x193)](_0x127e06(0x1c1))[_0x127e06(0x186)][_0x127e06(0x18b)]=_0x127e06(0x18d),isResetPasswordFlowActive=![],performLogin(_0x3ba555,_0x185ecf)):alert(_0x127e06(0x1cb));}else alert(_0x127e06(0x1de)+_0x494b87[_0x127e06(0x1e1)]);};}function validateLogin(_0x132d40){var _0x3786e7=a0_0x130a;if(!localStorage[_0x3786e7(0x1d4)](_0x3786e7(0x1ab))||!localStorage[_0x3786e7(0x1d4)](_0x3786e7(0x1a4))||!localStorage['getItem'](_0x3786e7(0x197))){console['error'](_0x3786e7(0x1d3)),_0x132d40(![]);return;}var _0x2a345e=new XMLHttpRequest();_0x2a345e[_0x3786e7(0x19f)](_0x3786e7(0x191),_0x3786e7(0x1cd)),_0x2a345e[_0x3786e7(0x1b3)](_0x3786e7(0x19c),_0x3786e7(0x1c3)),_0x2a345e['setRequestHeader'](_0x3786e7(0x1a3),'application/json'),_0x2a345e['setRequestHeader'](_0x3786e7(0x1a6),'myclub/3\x20CFNetwork/1492.0.1\x20Darwin/23.3.0'),_0x2a345e[_0x3786e7(0x1b3)](_0x3786e7(0x18a),_0x3786e7(0x1dc)),_0x2a345e['onload']=function(){var _0x2b4848=_0x3786e7;if(_0x2a345e[_0x2b4848(0x1e1)]===0xc8){var _0x1112e9=JSON[_0x2b4848(0x1ae)](_0x2a345e[_0x2b4848(0x18e)]);_0x1112e9[_0x2b4848(0x1d7)]===0xc8?(Object[_0x2b4848(0x1c0)](_0x1112e9[_0x2b4848(0x1d0)])[_0x2b4848(0x1c7)](function(_0x72ca8c){var _0x568973=_0x2b4848;localStorage[_0x568973(0x1b4)](_0x72ca8c,_0x1112e9[_0x568973(0x1d0)][_0x72ca8c]);}),_0x132d40(!![])):(console[_0x2b4848(0x182)](_0x2b4848(0x196),_0x1112e9),_0x132d40(![]));}else console['error'](_0x2b4848(0x1a2),_0x2a345e[_0x2b4848(0x1e1)]),_0x132d40(![]);};var _0x429089={'xoken':localStorage['getItem'](_0x3786e7(0x1a9)),'userId':localStorage[_0x3786e7(0x1d4)](_0x3786e7(0x19d)),'userType':localStorage[_0x3786e7(0x1d4)](_0x3786e7(0x197))};_0x2a345e[_0x3786e7(0x1a5)](JSON[_0x3786e7(0x1bd)](_0x429089));}function a0_0x130a(_0x15a281,_0xcef755){var _0x4be0cb=a0_0x4be0();return a0_0x130a=function(_0x130a7b,_0x15c44c){_0x130a7b=_0x130a7b-0x180;var _0xed88e6=_0x4be0cb[_0x130a7b];return _0xed88e6;},a0_0x130a(_0x15a281,_0xcef755);}function a0_0x4be0(){var _0x13567a=['none','responseText','href','onload','POST','login-form','getElementById','log','27451017bkqLuf','validateLogin\x20-\x20Validation\x20failed','userType','reset-email','Login\x20failed.\x20Please\x20check\x20your\x20credentials.','querySelector','preventDefault','Content-Type','portalUserId','email','open','.popup','6387790FKCjuE','validateLogin\x20-\x20Error\x20during\x20validation:','Accept','userId','send','User-Agent','web','password','refresh_token','location','access_token','9WNEFQo','Elevat','parse','block','length','body','suffix','setRequestHeader','setItem','https://admin.clubfit.net.au/api/v1/account/login-v2','https://admin.clubfit.net.au/api/v1/account/reset-password','721371RBcNmp','errors','8171hmevCU','https://admin.clubfit.net.au/api/v1/account/forgot-password','beforeend','DOMContentLoaded','stringify','358407OIGyvd','keydown','keys','password-reset-required-popup','5164nOtGBD','application/json','value','dynamic','1535CIvKxc','forEach','querySelectorAll','forgot-password-link','186ZNVbvV','Failed\x20to\x20reset\x20the\x20password.\x20Please\x20try\x20again.','password-required-reset-form','https://admin.clubfit.net.au/api/v1/account/validate','4514748hOGohK','submit','payload','message','16xZUNNP','validateLogin\x20-\x20Required\x20session\x20storage\x20items\x20are\x20missing','getItem','There\x20was\x20an\x20issue\x20processing\x20your\x20request.\x20Please\x20try\x20again.','password-reset-popup','statusCode','catch','addEventListener','Escape','myclub/3\x20CFNetwork/1492.0.1\x20Darwin/23.3.0','en-AU,en;q=0.9','/booking','Error:\x20','remove','Check\x20your\x20email\x20for\x20the\x20temporary\x20password','status','new-password','then','admin.clubfit.net.au','error','textContent','json','There\x20was\x20a\x20problem\x20with\x20your\x20fetch\x20operation:','style','click','<div\x20class=\x22backdrop\x22></div>','key','Accept-Language','display','closest'];a0_0x4be0=function(){return _0x13567a;};return a0_0x4be0();}function closePopup(_0x5f1f74){var _0x20834c=a0_0x130a;_0x5f1f74&&(_0x5f1f74[_0x20834c(0x186)][_0x20834c(0x18b)]=_0x20834c(0x18d));var _0x1e5f7c=document[_0x20834c(0x19a)]('.backdrop');_0x1e5f7c&&_0x1e5f7c[_0x20834c(0x1df)]();}document['addEventListener'](a0_0x3e07c6(0x1bc),function(){var _0x37e103=a0_0x3e07c6;startAnimationLogo(),validateLogin(function(_0xff774f){var _0x77c6d0=a0_0x130a;_0xff774f&&(window[_0x77c6d0(0x1aa)][_0x77c6d0(0x18f)]=_0x77c6d0(0x1dd));});let _0x59acfe=![];document['getElementById'](_0x37e103(0x192))[_0x37e103(0x1d9)](_0x37e103(0x1cf),function(_0x50420a){var _0x591d63=_0x37e103;_0x50420a[_0x591d63(0x19b)](),!_0x59acfe&&performLogin();});var _0x472a4c=document['getElementById'](_0x37e103(0x19e)),_0x387b07=document[_0x37e103(0x193)](_0x37e103(0x198)),_0x3dd057=document['getElementById'](_0x37e103(0x1d6)),_0x2278c9=document['getElementById'](_0x37e103(0x1c1));document[_0x37e103(0x193)](_0x37e103(0x1c9))[_0x37e103(0x1d9)](_0x37e103(0x187),function(_0x2fd5c0){var _0x1b4ae9=_0x37e103;_0x2fd5c0[_0x1b4ae9(0x19b)](),_0x148987(_0x3dd057);}),document['getElementById']('password-reset-form')['addEventListener'](_0x37e103(0x1cf),function(_0x102499){var _0x473649=_0x37e103;_0x102499[_0x473649(0x19b)]();var _0x4be982=document['getElementById'](_0x473649(0x198))[_0x473649(0x1c4)];sendPasswordResetRequest(_0x4be982);}),document[_0x37e103(0x1c8)]('.close-window')[_0x37e103(0x1c7)](function(_0x1ffdee){var _0x12bed2=_0x37e103;_0x1ffdee[_0x12bed2(0x1d9)](_0x12bed2(0x187),function(){var _0x2cb154=_0x12bed2;closePopup(_0x1ffdee[_0x2cb154(0x18c)](_0x2cb154(0x1a0)));});}),document[_0x37e103(0x1d9)](_0x37e103(0x1bf),function(_0xa62fd3){var _0x117b73=_0x37e103;_0xa62fd3[_0x117b73(0x189)]===_0x117b73(0x1da)&&(closePopup(_0x3dd057),closePopup(_0x2278c9));});function _0x148987(_0x508efc){var _0x35bd90=_0x37e103;_0x472a4c['value']&&(_0x387b07[_0x35bd90(0x1c4)]=_0x472a4c[_0x35bd90(0x1c4)]),_0x508efc[_0x35bd90(0x186)][_0x35bd90(0x18b)]=_0x35bd90(0x1af),document[_0x35bd90(0x1b1)]['insertAdjacentHTML'](_0x35bd90(0x1bb),_0x35bd90(0x188)),document[_0x35bd90(0x19a)]('.backdrop')[_0x35bd90(0x1d9)]('click',function(){closePopup(_0x508efc);});}document[_0x37e103(0x193)](_0x37e103(0x1cc))[_0x37e103(0x1d9)](_0x37e103(0x1cf),function(_0x13a13c){var _0x26c271=_0x37e103;_0x13a13c[_0x26c271(0x19b)](),resetPasswordRequest();});});