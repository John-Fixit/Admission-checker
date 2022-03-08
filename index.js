var music = new Audio('no admission.m4a')
var song = new Audio('Nigeria Anthem.m4a')
song.play()
var oauCutOff = 250;
var uiCutOff = 240;
var futaCutOff = 230;
var lautechCutOff = 180;
var lasuCutOff = 180;
var eksuCutOff = 170;
var IFE = 'OBAFEMI AWOLOWO UNIVERSITY'
var UI = 'UNIVERSITY OF IBADAN'
var FUTA = 'FEDERAL UNIVERSITY OF TECHNOLOGY AKURE'
var LAU = 'LADOKE AKINTOLA UNIVERSITY OF TECHNOLOGY'
var LASU = 'LAGOS STATE UNIVERSITY OF TECHNOLOGY'
var EKSU = 'EKITI STATE UNIVERSITY'

var ife = 'Congratulation!' + ' You have been offered admission into ' + IFE
var ibadan = 'Congratulation!' + ' You have been offered admission into ' + UI
var akure = 'Congratulation!' + ' You have been offered admission into ' + FUTA
var lagos = 'Congratulation!' + ' You have been offered admission into ' + LASU
var ogb = 'Congratulation!' + ' You have been offered admission into ' + LAU
var ekiti = 'Congratulation!' + ' You have been offered admission into ' + EKSU
var await = 'ADMISSION IS NOT YET OFFERED'
function check() {
    var done = document.getElementById('school')
    var insert = done.options[done.selectedIndex].value;
    song.pause()
    if ((studentId.value) == "") {
        alert('please Enter your Registration Number')
    }
    else if (userInput.value > 400) {
        alert(' Score is out of range')
    }
    else if ((yourName.value == "")) {
        alert('please Enter your Name')
    }
    else if (userInput.value == "") {
        alert('Kindly enter your score')
    }
    else if (userInput.value<0) {
        alert('The score is out of range')
    }
    else if ((insert == 1) && (userInput.value > oauCutOff)) {
        alert('Admission Successful')
        admission.innerHTML = ife
    }
    else if ((insert == 1) && (userInput.value == oauCutOff)) {
        alert('Admission on process')
        document.getElementById('admission').innerHTML = await

    }
    else if ((insert == 1) && (userInput.value < oauCutOff)) {
        alert('No Admission')
        admission.innerHTML = 'NO ADMISSION YET,YOUR SCORE IS NOT UP TO THE REQUIREMENT OF ' + IFE
        music.play()
    }
    else if ((insert == 2) && (userInput.value > uiCutOff)) {
        alert('Admission succeeded')
        admission.innerHTML = ibadan
    }
    else if ((insert == 2) && (userInput.value == uiCutOff)) {
        alert('Admission on process')
        document.getElementById('admission').innerHTML = await
    }
    else if ((insert == 2) && (userInput.value < uiCutOff)) {
        alert(' No Admission')
        admission.innerHTML = 'NO ADMISSION YET,YOUR SCORE IS NOT UP TO THE REQUIREMENT OF ' + UI
    }

    else if ((insert == 3) && (userInput.value > futaCutOff)) {
        alert('Admission succeeded')
        admission.innerHTML = akure
    }
    else if ((insert == 3) && (userInput.value == futaCutOff)) {
        alert('Admission on process')
        document.getElementById('admission').innerHTML = await
    }
    else if ((insert == 3) && (userInput.value < futaCutOff)) {
        alert(' No Admission')
        admission.innerHTML = 'NO ADMISSION YET,YOUR SCORE IS NOT UP TO THE REQUIREMENT OF THE SELECTED INSTITUTION' + FUTA
    }

    else if ((insert == 4) && (userInput.value > lasuCutOff)) {
        alert('Admission succeeded')
        admission.innerHTML = lagos
    }
    else if ((insert == 4) && (userInput.value == lasuCutOff)) {
        alert('Admission on process')
        document.getElementById('admission').innerHTML = await
    }
    else if ((insert == 4) && (userInput.value < lasuCutOff)) {
        alert(' No Admission')
        admission.innerHTML = 'NO ADMISSION YET,YOUR SCORE IS NOT UP TO THE REQUIREMENT OF ' + LASU
    }

    else if ((insert == 5) && (userInput.value > lautechCutOff)) {
        alert('Admission succeeded')
        admission.innerHTML = ogb
    }
    else if ((insert == 5) && (userInput.value == lautechCutOff)) {
        alert('Admission on process')
        document.getElementById('admission').innerHTML = await
    }
    else if ((insert == 5) && (userInput.value < lautechCutOff)) {
        alert(' No Admission')
        admission.innerHTML = 'NO ADMISSION YET,YOUR SCORE IS NOT UP TO THE REQUIREMENT OF ' + LAU
    }

    else if ((insert == 6) && (userInput.value > eksuCutOff)) {
        alert('Admission succeeded')
        admission.innerHTML = ekiti
    }
    else if ((insert == 6) && (userInput.value == eksuCutOff)) {
        alert('Admission on process')
        document.getElementById('admission').innerHTML = await
    }
    else if ((insert == 6) && (userInput.value < eksuCutOff)) {
        alert(' No Admission')
        admission.innerHTML = 'NO ADMISSION YET,YOUR SCORE IS NOT UP TO THE REQUIREMENT OF ' + EKSU
    }
   
    
    else { alert('kindly select your institution') }

}
function accept() {
    if (admission.innerHTML == '') {
        adm.innerHTML = 'NOTHING TO ACCEPT'
    }
    else if (admission.innerHTML == await) {
        adm.innerHTML = 'NO ADMISSION DECLARED YET'
        music.play()
    }
    else if (admission.innerHTML == 'NO ADMISSION YET,YOUR SCORE IS NOT UP TO THE REQUIREMENT OF ' + (IFE || UI || FUTA || LASU || LAU || EKSU)){
        adm.innerHTML = 'NOTHING TO ACCEPT'

    }
    else (adm.innerHTML = 'CONGRATULATION, YOU HAVE ACCEPTED THE ADMISSION')
}
function reject() {
    if (admission.innerHTML == '') {
        adm.innerHTML = 'NOTING TO REJECT';
    }
    else if (admission.innerHTML == await) {
        adm.innerHTML = 'NO ADMISSION DECLARED YET'
        music.play()
    }
    else if (admission.innerHTML == 'NO ADMISSION YET,YOUR SCORE IS NOT UP TO THE REQUIREMENT OF ' + (IFE || UI || FUTA || LASU || LAU || EKSU)) {
        adm.innerHTML = 'NOTHING TO REJECT'
    }
    else if (admission.innerHTML = ife || ibadan || akure || lagos || ogb || ekiti) {
        if (confirm('Are you sure, to REJECT the admission')) {
            adm.innerHTML = 'SORRY,YOU REJECTED THE ADMISSION, TRY AGAIN NEXT YEAR'
        }
    };
}
