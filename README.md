# MemriseAutocomplete FIXED V1.4! (16/05/2022)
does your memrise when you dont have the bother

run as a bookmarklet or in console - Paste this as a Bookmark into chrome and run on the memrise course you are using it on

```javascript:(function()%7Bfunction%20gElemsByClass(e%2Ct)%7Breturn%20null%3D%3Dt%3Fdocument.getElementsByClassName(e)%3Adocument.getElementsByClassName(e)%5B0%5D.contentDocument.getElementsByClassName(t)%7Dfunction%20gElemsBySelector(e%2Ct)%7Breturn%20null%3D%3Dt%3Fdocument.querySelectorAll(e)%3Adocument.getElementsByClassName(e)%5B0%5D.contentDocument.querySelectorAll(t)%7Dfunction%20tryF(e)%7Btry%7Be()%7Dcatch(e)%7B%7D%7Dconsole.log(%22Memrise%20Autocomplete%20By%20Brownie%22)%3Bvar%20waitTilTrue%3Dfunction(e%2Ct)%7Bwait%3DsetInterval((function()%7Be()%26%26setTimeout(t%2C100)%7D)%2C10)%7D%3Bfor(e%20in%20infoBox%3Dfunction(e)%7Bdocument.body.innerHTML%2B%3D%60%3Cdiv%20class%3D%22acpopup%20infobox%22%3E%3Cdiv%20style%3D%22right%3A1vw%3Bbottom%3A-3vw%3B%22%20class%3D%22acpopup%20closebutt%22%20onclick%3D%22this.parentElement.remove()%22%3EClose%3C%2Fdiv%3E%3Cdiv%3E%24%7Be%7D%3C%2Fdiv%3E%3C%2Fdiv%3E%60%7D%2Cdocument.body.innerHTML%2B%3D'%3Cstyle%3E.infobox%7Bwidth%3A50vw%3Bheight%3Amin-content%3Btop%3A50%25%3Bleft%3A50%25%3Btransform%3Atranslate(-50%25%2C-50%25)%3B%7D.prog%7Bfont-size%3A100px%3Bmargin-top%3A50px%3B%7D%5Cn%20%20%20%20.frame%7Bborder%3A0%3Bz-index%3A99999%3Bposition%3Afixed%3Btop%3A35vh%3Bleft%3A5vw%3Bwidth%3A45vw%3Bheight%3A60vh%3B%7D.acpopup%20%7Bz-index%3A9999%3Bbackground-color%3Awhite%3Bfont-size%3A17px%3Bposition%3Afixed%3B%5Cn%20%20%20%20font-family%3AMonospace%3Bborder%3Asolid%20lightgray%205px%3Bpadding%3A10px%3B%7D.closebutt%7Bcolor%3Awhite%3Bbackground-color%3Ared%3Bborder-color%3Adarkred%3Bz-index%3A99999%3Bcursor%3Apointer%3Bopacity%3A1%3B%7D%5Cn%20%20%20%20.closebutt%3Ahover%7Bcolor%3Awhite%3Bbackground-color%3A%23FFA0A0%3B%7D%3C%2Fstyle%3E%3C%2Fstyle%3E%3Cstyle%20class%3D%22levelhighlight%22%3Ebody.levels%20.levels%20.level%3Ahover%7Bbackground-color%3Alightblue%3B%7D%3C%2Fstyle%3E'%2CdontCheckVer%3D!1%2Cver%3D%22v1.4%22%2Creq%3Dnew%20XMLHttpRequest%2Creq.open(%22GET%22%2C%22https%3A%2F%2Fraw.githubusercontent.com%2FBrownieGit%2FMemriseAutocomplete%2Fmain%2Fver.txt%22%2C!0)%2Creq.onreadystatechange%3Dfunction()%7B4%3D%3Dreq.readyState%26%26200%3D%3Dreq.status%26%26(recVer%3Dreq.responseText.trim()%2Cconsole.log(%22Version%20check%3A%20'%22%2BrecVer%2B%22'%20(Current%20version%3A%20'%22%2Bver%2B%22')%22)%2CrecVer!%3Dver%26%26infoBox(%22A%20new%20version%20of%20Memrise%20Autocomplete%20is%20available!%5Cn%5CnCurrent%20version%3A%20%22%2Bver%2B%22%5CnNew%20version%3A%20%22%2Breq.responseText%2B%22%5Cn%5CnPlease%20visit%20the%20script's%20GitHub%20page%20(https%3A%2F%2Fgithub.com%2FBrownieGit%2FMemriseAutocomplete)%20to%20download%20the%20new%20version.%22))%7D%2CdontCheckVer%7C%7Creq.send()%2CprogBar%3D%22%5Bdata-testid%3DprogressBar-0%5D%22%2CtypingTest%3D%22%5Bdata-testid%3Dtyping-response-input%5D%22%2CtestRootElem%3D%22%5Bdata-testid%3DtestLearnableCard%5D%22%2CnextIcon%3D%22%5Bdata-testid%3DchevronRight%5D%22%2CcompletedNextIcon%3D%22%5Bdata-testid%3Dtick%5D%22%2CquestionIcon%3D%22%5Bdata-testid%3Dquestion%5D%22%2CendOfSession%3D%22%5Bdata-testid%3DendOfSession%5D%22%2Capriframe%3D%22apriframe%22%2Cansiframe%3D%22ansiframe%22%2Ctext%3D%22text-text%22%2Cprog%3D%22prog%22%2Clen%3D%22length%22%2Cch%3D%22children%22%2Cdocument.body.innerHTML%2B%3D%22%3Cdiv%20class%3D'acpopup%20selectp'%20%5Cnstyle%3D'top%3A10px%3Bleft%3A10px%3B'%3ESelect%20set%20to%20complete%20(click)%3A%3C%2Fdiv%3E%22%2Clvs%3DgElemsByClass(%22level%22)%2Clvs)try%7Blvs%5Be%5D.removeAttribute(%22href%22)%2Clvs%5Be%5D.setAttribute(%22onclick%22%2C%22init(%22%2B(parseInt(e)%2B1)%2B%22)%22)%7Dcatch%7B%7Dwindow.init%3Dfunction(t)%7Bfor(e%20in%20lvs)try%7Blvs%5Be%5D.removeAttribute(%22onclick%22)%2CgElemsByClass(%22levelhighlight%22).remove()%7Dcatch%7B%7DgElemsByClass(%22selectp%22)%5B0%5D.remove()%2Cdocument.body.innerHTML%2B%3D%22%3Cdiv%20class%3D'acpopup'%20style%3D'box-sizing%3Aborder-box%3Btop%3A5vh%3Bleft%3A5vw%3Bwidth%3A90vw%3Bheight%3A90vh%3Bpadding%3A5vh%3B'%3E%5Cn%20%20%20%20Level%20progress%3A%20%3Cdiv%20class%3D'prog'%3E0%25%3C%2Fdiv%3E%3C%2Fdiv%3E%3Cdiv%20class%3D'acpopup%20closebutt'%20style%3D'top%3A4vh%3Bright%3A5vw%3B'%20onclick%3D'window.location%3Dwindow.location'%3EClose%3C%2Fdiv%3E%3Cdiv%20class%3D'progress'%20style%3D'%5Cn%20%20%20%20position%3Afixed%3Bz-index%3A99999%3Btop%3A10vh%3Bleft%3A30vw%3Bwidth%3A60vw%3Bheight%3A15vh%3Bpadding%3A20px%3Bpadding-top%3A10px%3Btext-align%3Acenter%3B'%3EMemrise%20automation%20(%22%2Bver%2B%22)%20by%20Brownie%3Cbr%3E%5Cn%20%20%20%20Dont%20click%20any%20buttons%20on%20the%20window%20because%20it%20may%20induce%20a%20stroke%20for%20the%20automation%20%3Cbr%3E%5Cn%20%20%20%20Click%20close%20and%20reopen%20bookmarklet%20to%20full%20flower%20session!%20%3Cbr%3E%3Cb%3E%5Cn%20%20%20%20For%20this%20to%20work%20best%20you%20need%20to%20Click%20Your%20Profile%20Picture%20%3E%20Click%20Settings%20%3E%20Click%20Learing%20and%20set%20Words%20per%20Session%20to%2020%20and%20turn%20OFF%20Audio%20Tests%20and%20Tapping%20Tests%3C%2Fb%3E%3Cbr%3E%5Cn%20%20%20%20If%20the%20automation%20cant%20complete%20a%20test%2C%20please%20mannualy%20do%20it%20and%20it%20should%20continue%20as%20normal%20for%20other%20words.%20%3Cbr%3E%5Cn%20%20%20%20Uncompressed%20source%20code%20at%20https%3A%2F%2Fgithub.com%2FBrownieGit%2FMemriseAutocomplete%20%3C%2Fdiv%3E%5Cn%20%20%20%20%3Ciframe%20class%3D'frame%20ansiframe'%20src%3D'%22%2Bwindow.location%2Bt%2B%22%2F'%3E%3C%2Fiframe%3E%3Ciframe%20class%3D'frame%20apriframe'%20style%3D'left%3A50vw%3B'%20src%3D'https%3A%2F%2Fapp.memrise.com%2Faprender%2Flearn%3Fcourse_id%3D%22%2B(window.location%2B%22%22).slice(31%2C38)%2B%22%26level_index%3D%22%2Bt%2B%22%26source_element%3Dlevel_details_session%26source_screen%3Dlevel_details'%3E%3C%2Fiframe%3E%22%2CsetInterval((function()%7BprogElem%3DgElemsBySelector(apriframe%2CprogBar)%2CprogElem%5Blen%5D%3E0%3FgElemsByClass(prog)%5B0%5D.innerHTML%3DMath.round(parseInt(progElem%5B0%5D.style.width.slice(0%2C-1)))%2B%22%25%22%3AgElemsBySelector(apriframe%2CendOfSession)%5Blen%5D%3E0%26%26(gElemsByClass(prog)%5B0%5D.innerHTML%3D%22100%25%22)%7D)%2C50)%2Cansloaded%3D!1%2CwaitTilTrue((function()%7Breturn%20gElemsByClass(ansiframe%2Ctext)%5Blen%5D%3E0%26%26!ansloaded%7D)%2C(function()%7Bfor(e%20in%20ansJson%3D%7B%7D%2CansElems%3DgElemsByClass(ansiframe%2Ctext)%2CansElems)%7Bfor(c%20in%20a%3D%5B%5D%2CansElems%5Be%5D%5Bch%5D)tryF((()%3D%3E%7BansElems%5Be%5D%5Bch%5D%5Bc%5D.classList.contains(%22col%22)%26%26a.push(ansElems%5Be%5D%5Bch%5D%5Bc%5D.innerText)%7D))%3B2%3D%3Da%5Blen%5D%26%26(null%3D%3DansJson%5Ba%5B0%5D%5D%3FansJson%5Ba%5B0%5D%5D%3D%5Ba%5B1%5D%5D%3AansJson%5Ba%5B0%5D%5D.push(a%5B1%5D)%2Cnull%3D%3DansJson%5Ba%5B1%5D%5D%3FansJson%5Ba%5B1%5D%5D%3D%5Ba%5B0%5D%5D%3AansJson%5Ba%5B1%5D%5D.push(a%5B0%5D))%7Dconsole.log(%22Loaded%20answers%3A%22)%2Cconsole.log(ansJson)%2Cansloaded%3D!0%7D))%2CwaitTilTrue((function()%7Breturn%20tryF((()%3D%3EgElemsBySelector(apriframe%2CnextIcon)%5B0%5D.parentElement.click()))%2CtryF((()%3D%3EgElemsBySelector(apriframe%2CcompletedNextIcon)%5B0%5D.parentElement.click()))%2CgElemsBySelector(apriframe%2CquestionIcon)%5Blen%5D%3E0%26%26ansloaded%7D)%2C(function()%7Bque%3DgElemsBySelector(apriframe%2CtestRootElem)%5B0%5D%5Bch%5D%5B1%5D%5Bch%5D%5B0%5D%5Bch%5D%5B0%5D.innerText%2CgElemsBySelector(apriframe%2CtypingTest)%5Blen%5D%3E0%3F(gElemsBySelector(apriframe%2CtypingTest)%5B0%5D.value%3DansJson%5Bque%5D%5B0%5D.slice(0%2C-1)%2Cbuttons%3DgElemsBySelector(apriframe%2CtestRootElem)%5B0%5D%5Bch%5D%5B1%5D%5Bch%5D%5B0%5D%5Bch%5D%5B1%5D%5Bch%5D%5B2%5D%2Cans%3Dbuttons.innerText.split(%22%5Cn%22)%2Cbuttons%5Bch%5D%5Bans.findIndex((function(e)%7Breturn%20e%3D%3DansJson%5Bque%5D%5B0%5D.slice(-1)%7D))%5D.click())%3A(givenAnsElem%3DgElemsBySelector(apriframe%2CtestRootElem)%5B0%5D%5Bch%5D%5B1%5D%5Bch%5D%5B0%5D%5Bch%5D%5B1%5D%2Cans%3DgivenAnsElem.innerText.split(%22%5Cn%22)%2C8%3D%3Dans%5Blen%5D%26%26(ans%3D%5Bans%5B1%5D%2Cans%5B3%5D%2Cans%5B5%5D%2Cans%5B7%5D%5D)%2Ccorrectarr%3DansJson%5Bque%5D%2CgivenAnsElem%5Bch%5D%5Bans.findIndex((function(e)%7Bfor(i%20in%20correctarr)if(e%3D%3Dcorrectarr%5Bi%5D)return!0%3Breturn!1%7D))%5D%5Bch%5D%5B0%5D.click())%7D))%7D%7D)()```

https://mrcoles.com/bookmarklet/ <- used to turn into bookmark

Changelog:
  V1.0: works
  V1.1: Added Ui
  V1.2: Tiny text change
  V1.3: Fixed after break and now super fast
  V1.4: Ultimate Fix - Should now no longer break (at least as often as it did) - Can check for updates automatically
