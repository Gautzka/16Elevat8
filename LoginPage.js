var a0_0x25d67d=a0_0x575e;(function(_0xc1c8b0,_0x25537c){var _0x57422d=a0_0x575e,_0x173c4c=_0xc1c8b0();while(!![]){try{var _0x489694=parseInt(_0x57422d(0xc1))/0x1+-parseInt(_0x57422d(0x7c))/0x2*(parseInt(_0x57422d(0xc2))/0x3)+-parseInt(_0x57422d(0xa2))/0x4*(parseInt(_0x57422d(0xa0))/0x5)+parseInt(_0x57422d(0x8f))/0x6*(parseInt(_0x57422d(0xa7))/0x7)+-parseInt(_0x57422d(0x87))/0x8+-parseInt(_0x57422d(0x7a))/0x9*(parseInt(_0x57422d(0xa3))/0xa)+parseInt(_0x57422d(0xad))/0xb*(parseInt(_0x57422d(0xa5))/0xc);if(_0x489694===_0x25537c)break;else _0x173c4c['push'](_0x173c4c['shift']());}catch(_0x33c6bc){_0x173c4c['push'](_0x173c4c['shift']());}}}(a0_0x1a88,0x8d908));function addLetter(_0xf863af,_0x2ee26d,_0x30263a,_0x2bf7cc,_0x2417de){var _0x5c8474=a0_0x575e;_0x2bf7cc<_0x30263a['length']?(_0xf863af[_0x5c8474(0x97)]+=_0x30263a[_0x2bf7cc],_0x2bf7cc++,setTimeout(()=>addLetter(_0xf863af,_0x2ee26d,_0x30263a,_0x2bf7cc,_0x2417de),0x1e)):(_0x2ee26d[_0x5c8474(0x97)]='\x208',setTimeout(()=>_0x2417de(_0xf863af,_0x2ee26d,_0x30263a,_0x2bf7cc),0x7d0));}function removeLetter(_0x539c50,_0x1d4df8,_0x5a624c,_0x12ad54){var _0x322140=a0_0x575e;let _0x511de2=_0x539c50[_0x322140(0x97)];_0x511de2[_0x322140(0x77)]>0x0?(_0x539c50['textContent']=_0x511de2[_0x322140(0xc9)](0x0,_0x511de2['length']-0x1),setTimeout(()=>removeLetter(_0x539c50,_0x1d4df8,_0x5a624c,_0x12ad54),0x1e)):(_0x1d4df8[_0x322140(0x97)]='\x208',_0x12ad54=0x0,setTimeout(()=>addLetter(_0x539c50,_0x1d4df8,_0x5a624c,_0x12ad54,removeLetter),0x3e8));}function startAnimationLogo(){var _0x46898c=a0_0x575e;const _0x2b3603=document[_0x46898c(0x76)](_0x46898c(0x80)),_0x1f34e6=document[_0x46898c(0x76)](_0x46898c(0x9d)),_0x5cebed=_0x46898c(0x79);let _0x1b1bce=0x0;setTimeout(()=>addLetter(_0x2b3603,_0x1f34e6,_0x5cebed,_0x1b1bce,removeLetter),0x64);}function a0_0x575e(_0x1795ae,_0x2555b5){var _0x1a8805=a0_0x1a88();return a0_0x575e=function(_0x575e68,_0x4eb7f3){_0x575e68=_0x575e68-0x6a;var _0x3dd14a=_0x1a8805[_0x575e68];return _0x3dd14a;},a0_0x575e(_0x1795ae,_0x2555b5);}function performLogin(_0x20b32a=null,_0x43a9e1=null){var _0x56299f=a0_0x575e;(!_0x20b32a||!_0x43a9e1)&&(_0x20b32a=document[_0x56299f(0x76)](_0x56299f(0x88))[_0x56299f(0xb1)],_0x43a9e1=document['getElementById']('password')[_0x56299f(0xb1)]);var _0x4a5122=new XMLHttpRequest();_0x4a5122[_0x56299f(0xae)]('POST',_0x56299f(0x75)),_0x4a5122[_0x56299f(0x6e)](_0x56299f(0xc0),_0x56299f(0xac)),_0x4a5122[_0x56299f(0x6e)](_0x56299f(0x96),_0x56299f(0xac)),_0x4a5122[_0x56299f(0xb6)]=function(){var _0x47aad4=_0x56299f;if(_0x4a5122['status']===0xc8){var _0x5949a9=JSON[_0x47aad4(0x7e)](_0x4a5122['responseText']);_0x5949a9[_0x47aad4(0x6f)]===0xc8?_0x5949a9[_0x47aad4(0x99)][_0x47aad4(0xb7)]?(isResetPasswordFlowActive=!![],document['getElementById'](_0x47aad4(0xaf))[_0x47aad4(0x8d)]['display']=_0x47aad4(0x9c),localStorage[_0x47aad4(0x8e)](_0x47aad4(0xc7),_0x5949a9['payload'][_0x47aad4(0xc7)])):(Object[_0x47aad4(0xbc)](_0x5949a9[_0x47aad4(0x99)])['forEach'](function(_0x195cd8){var _0x1da876=_0x47aad4;localStorage[_0x1da876(0x8e)](_0x195cd8,_0x5949a9[_0x1da876(0x99)][_0x195cd8]);}),window[_0x47aad4(0x83)]['href']=_0x47aad4(0x98)):alert(_0x47aad4(0xc4));}else alert(_0x47aad4(0xaa)+_0x4a5122[_0x47aad4(0xb5)]);},_0x4a5122['send'](JSON['stringify']({'userName':_0x20b32a,'password':_0x43a9e1,'platform':'web'}));}function sendPasswordResetRequest(_0x52586b){var _0x4d45bf=a0_0x575e;const _0x2b5ffe=_0x4d45bf(0xbf),_0x149295=new Headers({'Host':_0x4d45bf(0x81),'Accept':_0x4d45bf(0xac),'Content-Type':_0x4d45bf(0xac),'User-Agent':_0x4d45bf(0xa6),'Accept-Language':_0x4d45bf(0x70)}),_0x268767=JSON[_0x4d45bf(0x9f)]({'Email':_0x52586b});var _0x222906=document['getElementById'](_0x4d45bf(0x6a));fetch(_0x2b5ffe,{'method':'POST','headers':_0x149295,'body':_0x268767})['then'](_0x25d729=>_0x25d729[_0x4d45bf(0x71)]())['then'](_0x2f15dd=>{var _0x4f7fa7=_0x4d45bf;_0x2f15dd['statusCode']&&_0x2f15dd['statusCode']!==0xc8?console[_0x4f7fa7(0x94)](_0x2f15dd['errors'][_0x4f7fa7(0x6d)]):alert(_0x4f7fa7(0x91)),closePopup(_0x222906);})['catch'](_0x127db7=>{var _0x26d07f=_0x4d45bf;console[_0x26d07f(0x93)](_0x26d07f(0xa4),_0x127db7),alert('There\x20was\x20an\x20issue\x20processing\x20your\x20request.\x20Please\x20try\x20again.'),closePopup(_0x222906);});}function resetPasswordRequest(){var _0x1272c3=a0_0x575e,_0x270550=document[_0x1272c3(0x76)](_0x1272c3(0xbd))['value'],_0x52ef0e=document['getElementById']('password')[_0x1272c3(0xb1)],_0x250cb0=localStorage[_0x1272c3(0x8c)](_0x1272c3(0xc7)),_0x1f1ac6=document['getElementById']('email')[_0x1272c3(0xb1)],_0x4dcae6=new XMLHttpRequest();_0x4dcae6[_0x1272c3(0xae)](_0x1272c3(0xc8),'https://admin.clubfit.net.au/api/v1/account/reset-password'),_0x4dcae6[_0x1272c3(0x6e)]('Content-Type',_0x1272c3(0xac)),_0x4dcae6[_0x1272c3(0x6e)]('Accept',_0x1272c3(0xac)),_0x4dcae6[_0x1272c3(0xa1)](JSON[_0x1272c3(0x9f)]({'userId':_0x250cb0,'OldPassword':_0x52ef0e,'NewPassword':_0x270550})),_0x4dcae6['onload']=function(){var _0x2f3bce=_0x1272c3;if(_0x4dcae6[_0x2f3bce(0xb5)]===0xc8){var _0x13fd6b=JSON[_0x2f3bce(0x7e)](_0x4dcae6['responseText']);_0x13fd6b[_0x2f3bce(0x6f)]===0xc8&&_0x13fd6b[_0x2f3bce(0x99)]===_0x2f3bce(0xbe)?(alert(_0x2f3bce(0x7d)),document[_0x2f3bce(0x76)](_0x2f3bce(0xaf))[_0x2f3bce(0x8d)][_0x2f3bce(0xb3)]=_0x2f3bce(0xb8),isResetPasswordFlowActive=![],performLogin(_0x1f1ac6,_0x270550)):alert('Failed\x20to\x20reset\x20the\x20password.\x20Please\x20try\x20again.');}else alert(_0x2f3bce(0xaa)+_0x4dcae6[_0x2f3bce(0xb5)]);};}function validateLogin(_0x249cd4){var _0x56335b=a0_0x575e;if(!localStorage[_0x56335b(0x8c)](_0x56335b(0xba))||!localStorage[_0x56335b(0x8c)](_0x56335b(0x92))||!localStorage[_0x56335b(0x8c)]('userType')){console[_0x56335b(0x93)](_0x56335b(0x9e)),_0x249cd4(![]);return;}var _0x215449=new XMLHttpRequest();_0x215449['open'](_0x56335b(0xc8),'https://admin.clubfit.net.au/api/v1/account/validate'),_0x215449[_0x56335b(0x6e)](_0x56335b(0xc0),_0x56335b(0xac)),_0x215449['setRequestHeader'](_0x56335b(0x96),_0x56335b(0xac)),_0x215449[_0x56335b(0x6e)](_0x56335b(0xc6),_0x56335b(0xa6)),_0x215449['setRequestHeader'](_0x56335b(0x86),_0x56335b(0x70)),_0x215449[_0x56335b(0xb6)]=function(){var _0xbb2e52=_0x56335b;if(_0x215449['status']===0xc8){var _0x4d7215=JSON['parse'](_0x215449['responseText']);_0x4d7215[_0xbb2e52(0x6f)]===0xc8?(Object[_0xbb2e52(0xbc)](_0x4d7215[_0xbb2e52(0x99)])[_0xbb2e52(0x78)](function(_0x246b14){var _0x49164a=_0xbb2e52;localStorage['setItem'](_0x246b14,_0x4d7215[_0x49164a(0x99)][_0x246b14]);}),_0x249cd4(!![])):(console[_0xbb2e52(0x93)](_0xbb2e52(0xb9),_0x4d7215),_0x249cd4(![]));}else console[_0xbb2e52(0x93)](_0xbb2e52(0x9a),_0x215449[_0xbb2e52(0xb5)]),_0x249cd4(![]);};var _0x3d2f6e={'xoken':localStorage[_0x56335b(0x8c)](_0x56335b(0xb0)),'userId':localStorage['getItem'](_0x56335b(0xc7)),'userType':localStorage[_0x56335b(0x8c)](_0x56335b(0x8a))};_0x215449[_0x56335b(0xa1)](JSON[_0x56335b(0x9f)](_0x3d2f6e));}function a0_0x1a88(){var _0x3fac8a=['display','querySelector','status','onload','isResetPassword','none','validateLogin\x20-\x20Validation\x20failed','access_token','.close-window','keys','new-password','Success','https://admin.clubfit.net.au/api/v1/account/forgot-password','Content-Type','852591jCCvRU','3VGeavs','body','Login\x20failed.\x20Please\x20check\x20your\x20credentials.','DOMContentLoaded','User-Agent','portalUserId','POST','substring','password-reset-popup','preventDefault','insertAdjacentHTML','message','setRequestHeader','statusCode','en-AU,en;q=0.9','json','remove','beforeend','submit','https://admin.clubfit.net.au/api/v1/account/login-v2','getElementById','length','forEach','Elevat','202833CTCdnv','.popup','377496wSuKwD','Your\x20password\x20has\x20been\x20successfully\x20reset.','parse','<div\x20class=\x22backdrop\x22></div>','dynamic','admin.clubfit.net.au','keydown','location','href','.backdrop','Accept-Language','6864152UjqNCP','email','addEventListener','userType','password-reset-form','getItem','style','setItem','6WYVHmj','forgot-password-link','Check\x20your\x20email\x20for\x20the\x20temporary\x20password','userId','error','log','key','Accept','textContent','/booking','payload','validateLogin\x20-\x20Error\x20during\x20validation:','Escape','block','suffix','validateLogin\x20-\x20Required\x20session\x20storage\x20items\x20are\x20missing','stringify','608905nZWCWv','send','36SzHNTI','250HKzlMA','There\x20was\x20a\x20problem\x20with\x20your\x20fetch\x20operation:','444kwojIv','myclub/3\x20CFNetwork/1492.0.1\x20Darwin/23.3.0','4436845TpPiEY','querySelectorAll','login-form','Error:\x20','click','application/json','535029wGKvhp','open','password-reset-required-popup','refresh_token','value','reset-email'];a0_0x1a88=function(){return _0x3fac8a;};return a0_0x1a88();}function closePopup(_0x3c4167){var _0x2e1a88=a0_0x575e;_0x3c4167&&(_0x3c4167[_0x2e1a88(0x8d)]['display']=_0x2e1a88(0xb8));var _0xf6128d=document[_0x2e1a88(0xb4)]('.backdrop');_0xf6128d&&_0xf6128d[_0x2e1a88(0x72)]();}document[a0_0x25d67d(0x89)](a0_0x25d67d(0xc5),function(){var _0x5b6d83=a0_0x25d67d;startAnimationLogo(),validateLogin(function(_0x4fdf7e){var _0x5064e6=a0_0x575e;_0x4fdf7e&&(window[_0x5064e6(0x83)][_0x5064e6(0x84)]='/booking');});let _0x5bc794=![];document[_0x5b6d83(0x76)](_0x5b6d83(0xa9))[_0x5b6d83(0x89)]('submit',function(_0x192698){_0x192698['preventDefault'](),!_0x5bc794&&performLogin();});var _0x14165c=document['getElementById'](_0x5b6d83(0x88)),_0x7262c0=document[_0x5b6d83(0x76)]('reset-email'),_0x11490c=document['getElementById'](_0x5b6d83(0x6a)),_0x4b0779=document['getElementById'](_0x5b6d83(0xaf));document[_0x5b6d83(0x76)](_0x5b6d83(0x90))[_0x5b6d83(0x89)]('click',function(_0x295a4f){var _0x2e1b3c=_0x5b6d83;_0x295a4f[_0x2e1b3c(0x6b)](),_0x5ef36b(_0x11490c);}),document[_0x5b6d83(0x76)](_0x5b6d83(0x8b))[_0x5b6d83(0x89)](_0x5b6d83(0x74),function(_0x3cdbcb){var _0xfa776d=_0x5b6d83;_0x3cdbcb[_0xfa776d(0x6b)]();var _0x44a749=document[_0xfa776d(0x76)](_0xfa776d(0xb2))['value'];sendPasswordResetRequest(_0x44a749);}),document[_0x5b6d83(0xa8)](_0x5b6d83(0xbb))[_0x5b6d83(0x78)](function(_0x261406){var _0x117530=_0x5b6d83;_0x261406[_0x117530(0x89)](_0x117530(0xab),function(){var _0x2ec13b=_0x117530;closePopup(_0x261406['closest'](_0x2ec13b(0x7b)));});}),document[_0x5b6d83(0x89)](_0x5b6d83(0x82),function(_0x140fe3){var _0x3411de=_0x5b6d83;_0x140fe3[_0x3411de(0x95)]===_0x3411de(0x9b)&&(closePopup(_0x11490c),closePopup(_0x4b0779));});function _0x5ef36b(_0x18fc08){var _0x65ded=_0x5b6d83;_0x14165c[_0x65ded(0xb1)]&&(_0x7262c0[_0x65ded(0xb1)]=_0x14165c[_0x65ded(0xb1)]),_0x18fc08[_0x65ded(0x8d)][_0x65ded(0xb3)]=_0x65ded(0x9c),document[_0x65ded(0xc3)][_0x65ded(0x6c)](_0x65ded(0x73),_0x65ded(0x7f)),document['querySelector'](_0x65ded(0x85))[_0x65ded(0x89)](_0x65ded(0xab),function(){closePopup(_0x18fc08);});}document['getElementById']('password-required-reset-form')[_0x5b6d83(0x89)](_0x5b6d83(0x74),function(_0x5d24a8){var _0x4089fa=_0x5b6d83;_0x5d24a8[_0x4089fa(0x6b)](),resetPasswordRequest();});});