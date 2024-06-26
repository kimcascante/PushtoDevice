// ==UserScript==
// @name         Push to my device PTMD
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  This script will help in unpin other devices and push the creative to devices according to the type of ad we need to test on
// @author       Kimberly Cascante Mora
// @match        https://prod.on-device-preview.advertising.amazon.dev/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let btnUnpin = document.createElement("BUTTON");
    btnUnpin.textContent = "Unpin!";

    let btnFireTV = document.createElement("BUTTON");
    btnFireTV.textContent = "Fire TV";

    let btnAlexa = document.createElement("BUTTON");
    btnAlexa.textContent = "Alexa";

    let btnPV = document.createElement("BUTTON");
    btnPV.textContent = "Prime Video";

    let red = 'Red';
    btnUnpin.style.color = red;

    let blue = 'Blue';
    btnPV.style.color = blue;
    btnFireTV.style.color = blue;
    btnAlexa.style.color = blue;

    //Declaration of my devices
    let myFTV = "G070VM201125193P";
    let myAlexa = "G6G1GG101477013G";
    let mPViOs = "EF0571873C4049B18A02174805A2806B";
    let myPViPad = "33745113A0F2430199CD8A3B0C49F793";
    let myPVFiretablet = "G0011J0593860CBP";
    let myPVAndroidPhone = "20b06104f92c47ccaaf00cd28e90a3e8";
    let myPVAndroidTablet = "9031f77e06ce49d4910c2b25694e7937";


    let tabla = document.querySelector("#deviceTable");

    let position = 2
    let secondPosition = 2

    btnUnpin.onclick = () => {
        //if there are pinned devices this will remove them

        if(document.querySelector("#deviceTable > tbody > tr:nth-child(2) > td:nth-child(4) > div").innerText.includes("Unpin") == true){
            //Deselect pinned devices

            for(let k=0; document.querySelector("#deviceTable > tbody > tr:nth-child("+position+") > td:nth-child(4) > div").innerText.includes("Unpin") == true; k++){
                if(document.querySelector("#deviceTable > tbody > tr:nth-child(2) > td:nth-child(4) > div").innerText.includes("Unpin") == true){
                    document.querySelector("#deviceTable > tbody > tr:nth-child("+position+") > td:nth-child(4) > div").click();
                    position++
                }
            }

        } else {

            window.alert("There are none to unpin");
        }
    };//Fin de la funcion del boton de Unpin

                        //Pushear ad al Fire TV
    btnFireTV.onclick = () => {

            for(let j=0; document.querySelector("#deviceTable > tbody > tr:nth-child("+secondPosition+") > td:nth-child(2)").innerText.includes(myFTV) == false; j++){
                secondPosition++
            }

            if(document.querySelector("#deviceTable > tbody > tr:nth-child("+secondPosition+") > td:nth-child(2)").innerText.includes(myFTV) == true && document.querySelector("#deviceTable > tbody > tr:nth-child("+secondPosition+") > td:nth-child(4) > div").innerText.includes("Pin") == true){
                document.querySelector("#deviceTable > tbody > tr:nth-child("+secondPosition+") > td:nth-child(4) > :nth-child(1)").click();

            } else {
                window.alert("Already selected");

            }

        //Push ad to my device
        document.getElementById("pushToDevice").click();

    };//Fin de la funcion del boton de Fire TV

                        //Pushear ad al device de Alexa
    btnAlexa.onclick = () => {
        for(let j=0; document.querySelector("#deviceTable > tbody > tr:nth-child("+secondPosition+") > td:nth-child(2)").innerText.includes(myAlexa) == false; j++){
            secondPosition++
        }

        if(document.querySelector("#deviceTable > tbody > tr:nth-child("+secondPosition+") > td:nth-child(2)").innerText.includes(myAlexa) == true && document.querySelector("#deviceTable > tbody > tr:nth-child("+secondPosition+") > td:nth-child(4) > div").innerText.includes("Pin") == true){
            document.querySelector("#deviceTable > tbody > tr:nth-child("+secondPosition+") > td:nth-child(4) > div:nth-child(1)").click();

        }else {
                window.alert("Already selected");

            }

        //Push ad to my device
        document.getElementById("pushToDevice").click();
    };//Fin de la funcion del boton de Alexa

                            //Pushear ad a los devices de Prime video
    btnPV.onclick = () => {

        for(let j=0; j<=document.querySelector("#deviceTable").rows.length; j++){

                    //Pushear al Prime video App on Fire TV
            if(document.querySelector("#deviceTable > tbody > tr:nth-child("+secondPosition+") > td:nth-child(2)").innerText.includes(myFTV) == true && document.querySelector("#deviceTable > tbody > tr:nth-child("+secondPosition+") > td:nth-child(4) > div").innerText.includes("Pin") == true){
                document.querySelector("#deviceTable > tbody > tr:nth-child("+secondPosition+") > td:nth-child(4) > div:nth-child(1)").click();
            }

                    //Pushear al Prime video App on iPhone
            if(document.querySelector("#deviceTable > tbody > tr:nth-child("+secondPosition+") > td:nth-child(2)").innerText.includes(mPViOs) == true && document.querySelector("#deviceTable > tbody > tr:nth-child("+secondPosition+") > td:nth-child(4) > div").innerText.includes("Pin") == true){
                document.querySelector("#deviceTable > tbody > tr:nth-child("+secondPosition+") > td:nth-child(4) > div:nth-child(1)").click();
            }

                    //Pushear al Prime video App on iPad
            if(document.querySelector("#deviceTable > tbody > tr:nth-child("+secondPosition+") > td:nth-child(2)").innerText.includes(myPViPad) == true && document.querySelector("#deviceTable > tbody > tr:nth-child("+secondPosition+") > td:nth-child(4) > div").innerText.includes("Pin") == true){
                document.querySelector("#deviceTable > tbody > tr:nth-child("+secondPosition+") > td:nth-child(4) > div:nth-child(1)").click();
            }

                    //Pushear al Prime video App on Fire Tablet
            if(document.querySelector("#deviceTable > tbody > tr:nth-child("+secondPosition+") > td:nth-child(2)").innerText.includes(myPVFiretablet) == true && document.querySelector("#deviceTable > tbody > tr:nth-child("+secondPosition+") > td:nth-child(4) > div").innerText.includes("Pin") == true){
                document.querySelector("#deviceTable > tbody > tr:nth-child("+secondPosition+") > td:nth-child(4) > div:nth-child(1)").click();
            }

                    //Pushear al Prime video App on Android Phone
            if(document.querySelector("#deviceTable > tbody > tr:nth-child("+secondPosition+") > td:nth-child(2)").innerText.includes(myPVAndroidPhone) == true && document.querySelector("#deviceTable > tbody > tr:nth-child("+secondPosition+") > td:nth-child(4) > div").innerText.includes("Pin") == true){
                document.querySelector("#deviceTable > tbody > tr:nth-child("+secondPosition+") > td:nth-child(4) > div:nth-child(1)").click();
            }

                    //Pushear al Prime video App on Android Tablet
            if(document.querySelector("#deviceTable > tbody > tr:nth-child("+secondPosition+") > td:nth-child(2)").innerText.includes(myPVAndroidTablet) == true && document.querySelector("#deviceTable > tbody > tr:nth-child("+secondPosition+") > td:nth-child(4) > div").innerText.includes("Pin") == true){
                document.querySelector("#deviceTable > tbody > tr:nth-child("+secondPosition+") > td:nth-child(4) > div:nth-child(1)").click();
            }

            secondPosition++

        //Push ad to my device
        document.getElementById("pushToDevice").click();
        }//Fin del for para la tabla

    };//Fin de la funcion del boton de Prime video

    //Botones
    let div = document.querySelector("#head-title");
    let spacebutton = document.createTextNode(" ");
    let textForButton = document.createTextNode(" ");
    let spaceText = document.createTextNode(" ");

    div.appendChild(btnUnpin);
    div.appendChild(spacebutton);

    div.appendChild(btnFireTV);
    div.appendChild(spaceText);

    div.appendChild(btnAlexa);
    div.appendChild(textForButton);

    div.appendChild(btnPV);



})();

