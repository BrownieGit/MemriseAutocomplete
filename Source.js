console.log("Memrise Autocomplete By Brownie");

//Function definitions

function gElemsByClass(a, b) /*Can take 1 or 2 args, if 2, arg 1 is the iframe*/ { return (b == undefined ? document.getElementsByClassName(a) : document.getElementsByClassName(a)[0].contentDocument.getElementsByClassName(b)); };

function gElemsBySelector(a, b) { return (b == undefined ? document.querySelectorAll(a) : document.getElementsByClassName(a)[0].contentDocument.querySelectorAll(b)); }

function tryF(func) { try { func() } catch (e) {} };

var waitTilTrue = function(condition, onTrue) {
    wait = setInterval(function() {
        if (condition()) {
            setTimeout(onTrue, 100);
        }
    }, 10);
};
infoBox = function(content) {
    document.body.innerHTML += `<div class="acpopup infobox"><div style="right:1vw;bottom:-3vw;" class="acpopup closebutt" onclick="this.parentElement.remove()">Close</div><div>${content}</div></div>`;
}

//Inject stylesheet 
document.body.innerHTML += `<style>.infobox{width:50vw;height:min-content;top:50%;left:50%;transform:translate(-50%,-50%);}.prog{font-size:100px;margin-top:50px;}
    .frame{border:0;z-index:99999;position:fixed;top:35vh;left:5vw;width:45vw;height:60vh;}.acpopup {z-index:9999;background-color:white;font-size:17px;position:fixed;
    font-family:Monospace;border:solid lightgray 5px;padding:10px;}.closebutt{color:white;background-color:red;border-color:darkred;z-index:99999;cursor:pointer;opacity:1;}
    .closebutt:hover{color:white;background-color:#FFA0A0;}</style></style><style class="levelhighlight">body.levels .levels .level:hover{background-color:lightblue;}</style>`;

//Checking version
dontCheckVer = false; //If enabled, it will skip checking for a new version every time the script is run. - Useful for hiding if it gets detected.
ver = "v1.4"

//Get https://raw.githubusercontent.com/BrownieGit/MemriseAutocomplete/main/ver.txt and check if it's newer than the current version.
req = new XMLHttpRequest();
req.open("GET", "https://raw.githubusercontent.com/BrownieGit/MemriseAutocomplete/main/ver.txt", true);
req.onreadystatechange = function() {
    if (req.readyState != 4) return;
    if (req.status != 200) return;
    recVer = req.responseText.trim();
    console.log("Version check: '" + recVer + "' (Current version: '" + ver + "')");
    if (recVer != ver) {
        infoBox("A new version of Memrise Autocomplete is available!\n\nCurrent version: " + ver +
            "\nNew version: " + req.responseText + "\n\nPlease visit the script's GitHub page (https://github.com/BrownieGit/MemriseAutocomplete) to download the new version.");
    }
};
if (!dontCheckVer) req.send();

//Elem Definitions - Done here to save size of script after minification and easier to change

progBar = "[data-testid=progressBar-0]";

typingTest = "[data-testid=typing-response-input]";

testRootElem = "[data-testid=testLearnableCard]";

nextIcon = "[data-testid=chevronRight]";
completedNextIcon = "[data-testid=tick]";
questionIcon = "[data-testid=question]";

endOfSession = "[data-testid=endOfSession]";

//Frame Definitions

apriframe = "apriframe";
ansiframe = "ansiframe";

//Misc Class names

text = "text-text";
prog = "prog";

//Properties

len = "length";
ch = "children";

//Inject select box
document.body.innerHTML += `<div class='acpopup selectp' 
style='top:10px;left:10px;'>Select set to complete (click):</div>`;

lvs = gElemsByClass("level");
for (e in lvs) {
    try {
        lvs[e].removeAttribute("href");
        lvs[e].setAttribute("onclick", "init(" + (parseInt(e) + 1) + ")");
    } catch {}
}

window.init = function(levelnum) {

    for (e in lvs) { //Stops all levels from being highlighted and clickable
        try {
            lvs[e].removeAttribute("onclick");
            gElemsByClass("levelhighlight").remove();
        } catch {}
    }

    gElemsByClass("selectp")[0].remove();
    document.body.innerHTML += `<div class='acpopup' style='box-sizing:border-box;top:5vh;left:5vw;width:90vw;height:90vh;padding:5vh;'>
    Level progress: <div class='prog'>0%</div></div><div class='acpopup closebutt' style='top:4vh;right:5vw;' onclick='window.location=window.location'>Close</div><div class='progress' style='
    position:fixed;z-index:99999;top:10vh;left:30vw;width:60vw;height:15vh;padding:20px;padding-top:10px;text-align:center;'>Memrise automation (` + ver + `) by Brownie<br>
    Dont click any buttons on the window because it may induce a stroke for the automation <br>
    Click close and reopen bookmarklet to full flower session! <br><b>
    For this to work best you need to Click Your Profile Picture > Click Settings > Click Learing and set Words per Session to 20 and turn OFF Audio Tests and Tapping Tests</b><br>
    If the automation cant complete a test, please mannualy do it and it should continue as normal for other words. <br>
    Uncompressed source code at https://github.com/BrownieGit/MemriseAutocomplete </div>
    <iframe class='frame ansiframe' src='` + window.location + levelnum + `/'></iframe><iframe class='frame apriframe' style='left:50vw;' src='https://app.memrise.com/aprender/learn?course_id=` + (window.location + "").slice(31, 38) + "&level_index=" +
        levelnum + "&source_element=level_details_session&source_screen=level_details'></iframe>";

    setInterval(function() { //Updating progress bar
        progElem = gElemsBySelector(apriframe, progBar);
        if (progElem[len] > 0) {
            gElemsByClass(prog)[0].innerHTML = Math.round(parseInt(progElem[0].style.width.slice(0, -1))) + "%";
        } else if (gElemsBySelector(apriframe, endOfSession)[len] > 0) { //If the test is done
            gElemsByClass(prog)[0].innerHTML = "100%";
        }
    }, 50);

    ansloaded = false;

    waitTilTrue(function() {
        return (gElemsByClass(ansiframe, text)[len] > 0 && !ansloaded); //Waits until the answer page is loaded
    }, function() {
        ansJson = {};

        ansElems = gElemsByClass(ansiframe, text);
        for (e in ansElems) { //Parsing into two way json array
            a = [];
            for (c in ansElems[e][ch]) {
                tryF(() => {
                    if (ansElems[e][ch][c].classList.contains("col")) {
                        a.push(ansElems[e][ch][c].innerText);
                    }
                });
            }

            if (a[len] == 2) {
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
        console.log("Loaded answers:"); //Logging answers
        console.log(ansJson);
        ansloaded = true;
    });


    waitTilTrue(function() {
        tryF(() => gElemsBySelector(apriframe, nextIcon)[0].parentElement.click()); //Auto click if it has the "Next" button - Only auto-appears when it gives definition
        tryF(() => gElemsBySelector(apriframe, completedNextIcon)[0].parentElement.click()); //Auto click the green "Next" button - Speeds up the process dramatically
        return (gElemsBySelector(apriframe, questionIcon)[len] > 0 && ansloaded); //If it has a "I don't know button" (means there is a test) and the answer page is loaded
    }, function() {
        que = gElemsBySelector(apriframe, testRootElem)[0][ch][1][ch][0][ch][0].innerText; //Term 
        if (gElemsBySelector(apriframe, typingTest)[len] > 0) {
            gElemsBySelector(apriframe, typingTest)[0].value = ansJson[que][0].slice(0, -1);

            buttons = gElemsBySelector(apriframe, testRootElem)[0][ch][1][ch][0][ch][1][ch][2]; //Individual letter buttons

            ans = buttons.innerText.split("\n");
            buttons[ch][
                ans.findIndex(function(e) { return e == ansJson[que][0].slice(-1); })
            ].click();
        } else { //Must be multiple choice test (If configured correctly)
            givenAnsElem = gElemsBySelector(apriframe, testRootElem)[0][ch][1][ch][0][ch][1]

            ans = givenAnsElem.innerText.split("\n"); //lazy way to get the answers

            if (ans[len] == 8) {
                ans = [ans[1], ans[3], ans[5], ans[7], ]; //Gets the odd ones which are the answers if it included numbers
            }

            correctarr = ansJson[que];

            givenAnsElem[ch][
                ans.findIndex(function(e) {
                    for (i in correctarr) {
                        if (e == correctarr[i]) { return true; }
                    }
                    return false;
                })
            ][ch][0].click();
        }
        /* else if (gElemsByClass(apriframe, "bDRJye")[len] > 0) { //(old) Tapping test but probs wont fix it because it is a pain to fix these (and its not even needed)
                    q = gElemsByClass(apriframe, "gaPucC")[0].innerText;
                    ans = gElemsByClass(apriframe, "jyOuMz")[0].innerText.split("\n");
                    asl = ansJson[q][0].split(" ");
                    console.log(asl);
                    for (i in asl) {
                        gElemsByClass(apriframe, "jyOuMz")[0][ch][
                            ans.findIndex(function(e) { return e == asl[i]; })
                        ].click();
                    }
                }*/

    });
};