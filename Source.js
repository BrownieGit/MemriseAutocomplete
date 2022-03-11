var cl = function(a, b) { return (b == undefined ? document.getElementsByClassName(a) : document.getElementById(a).contentDocument.getElementsByClassName(b)); };
var w = function(condition, onTrue, loop) {
    var wait = setInterval(function() {
        if (condition()) {
            setTimeout(onTrue, 100);
            if (!loop) {
                clearInterval(wait);
            }
        }
    }, 10);
};

document.body.innerHTML += `<style>.prog{font-size:100px;margin-top:50px;}.frame{border:0;z-index:99999;position:fixed;top:35vh;left:5vw;width:45vw;height:60vh;} .acpopup {z-index:9999;background-color:white;font-size:17px;position:fixed;
    font-family:Monospace;border:solid lightgray 5px;padding:10px;}body.levels .levels .level:hover{background-color:lightblue;}</style><div class='acpopup selectp' 
    style='top:10px;left:10px;'>Select set to complete (click):</div>`;

var lvs = cl("level");
for (e in lvs) {
    try {
        lvs[e].removeAttribute("href");
        lvs[e].setAttribute("onclick", "be(" + (parseInt(e) + 1) + ")");
    } catch {}
}


console.log("Memrise Autocomplete By Brownie");

window.be = function(levelnum) {

    for (e in lvs) {
        try {
            lvs[e].removeAttribute("onclick");
        } catch {}
    }

    cl("selectp")[0].style.display="none";
    document.body.innerHTML += `<div class='acpopup' style='box-sizing:border-box;top:5vh;left:5vw;width:90vw;height:90vh;padding:5vh;'>
    Level progress: <div class='prog'>0%</div></div><div class='acpopup' style='top:4vh;right:5vw;color:white;background-color:red;
    border-color:darkred;z-index:99999;cursor:pointer;' onclick='window.location = window.location'>Close</div><div class='progress' style='
    position:fixed;z-index:99999;top:10vh;left:30vw;width:60vw;height:15vh;padding:20px;padding-top:10px;text-align:center;'>Memrise automation (v1.1) by Brownie<br>
    Dont click any buttons on the window because it may induce a stroke for the automation <br>
    Click close and reopen bookmarklet to full flower session! <br>
    For this to work best you need to Click Your Profile Picture > Click Settings > Click Learing and set Words per Session to 20 and turn OFF Audio Tests<br>
    If the automation cant complete a test, please mannualy do it and it shoudl continue as normal;
    Uncompressed source code at https://github.com/BrownieGit/MemriseAutocomplete </div>
    <iframe class='frame' id='ansiframe' src='` + window.location + levelnum + `/'></iframe><iframe class='frame' style='left:50vw;'
    id='apriframe' src='https://app.memrise.com/aprender/learn?course_id=` + (window.location + "").slice(31, 38) + "&level_index=" 
    + levelnum + "&source_element=level_details_session&source_screen=level_details'></iframe>";

    setInterval(function() {
        if(cl("apriframe", "hXwgbM").length > 0) {
            cl("prog")[0].innerHTML=Math.round(parseInt(cl("apriframe", "hXwgbM")[0].style.width.slice(0,-1)))+"%";
        } else if (cl("apriframe", "cIrUXA").length > 0) {
            cl("prog")[0].innerHTML="100%";
        }
    }, 50);

    ansloaded = false;

    w(function() {
        return (cl("ansiframe", "text-text").length > 0);
    }, function() {
        ansJson = {};

        ansElems = cl("ansiframe", "text-text");
        for (e in ansElems) {
            a = [];
            for (c in ansElems[e].children) {
                try {
                    if (ansElems[e].children[c].classList.contains("col")) {
                        a.push(ansElems[e].children[c].innerText);
                    }
                } catch {}
            }

            if (a.length == 2) {
                if (ansJson[a[0]] == undefined) {
                    ansJson[a[0]] = [a[1]];
                } else {
                    ansJson[a[0]].push(a[1]);
                }

                if (ansJson[a[1]] == undefined) {
                    ansJson[a[1]] = [a[0]];
                } else {
                    ansJson[a[1]].push(a[0]);
                }
            }
        }
        console.log("Loaded answers:");
        console.log(ansJson);
        ansloaded = true;
    }, false);


    w(function() {
        try {
            if (
                cl("apriframe", "cJTVkM").length == 0 &&
                cl("apriframe", "bcYkMR").length == 0
            ) {
                cl("apriframe", "iJeaEf")[0].click();
            }
        } catch {} finally {}
        return (cl("apriframe", "iUBGfj").length > 0 && ansloaded);
    }, function() {
        if (cl("apriframe", "cwPimx").length != 0) {

            u = cl("apriframe", "cwPimx")[0].innerText.split("\n");
            if (u.length == 8) {
                ans = [u[1], u[3], u[5], u[7], ];
            } else { ans = u; }
            q = cl("apriframe", "gaPucC")[0].innerText;

            cl("apriframe", "cwPimx")[0].children[
                ans.findIndex(function(e) {
                    correct = false;
                    correctarr = ansJson[q];
                    for (i in correctarr) {
                        if (e == correctarr[i]) { correct = true; }
                    }
                    return correct;
                })
            ].children[0].click();
        } else if (cl("apriframe", "cJTVkM").length > 0) {
            q = cl("apriframe", "gaPucC")[0].innerText;
            cl("apriframe", "cJTVkM")[0].value = ansJson[q][0].slice(0, -1);

            ans = cl("apriframe", "guQYfh")[0].innerText.split("\n");
            cl("apriframe", "guQYfh")[0].children[
                ans.findIndex(function(e) { return e == ansJson[q][0].slice(-1); })
            ].click();
        } else if (cl("apriframe", "bDRJye").length > 0) {
            q = cl("apriframe", "gaPucC")[0].innerText;
            ans = cl("apriframe", "jyOuMz")[0].innerText.split("\n");
            asl = ansJson[q][0].split(" ");
            console.log(asl);
            for (i in asl) {
                cl("apriframe", "jyOuMz")[0].children[
                    ans.findIndex(function(e) { return e == asl[i]; })
                ].click();
            }
        }

    }, true);
};