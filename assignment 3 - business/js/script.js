function scroll(){         
    var t = window.scrollY;        
    var para = document.getElementById("para");     
    var m =-0.25;           
    var b =0;           
    newY = m*t+b;      
    para.style.backgroundPositionY = newY +"px";  
}
function scroll2(){
    var t = window.scrollY;
    var soup = document.getElementById("soup");
    var soup2 = document.getElementById("soup2");
    if(t>700){
        soup.style.transform = "scale(2,2)";
    }else{
        soup.style.transform = "scale(1,1)";
    }
    if(t>50){
        soup2.style.transform = "scale(1,1)";
    }else{
        soup2.style.transform = "scale(0.5,0.5)";
    }
}
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
})
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)
var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    return new bootstrap.Dropdown(dropdownToggleEl)
})
$('.dropdown-toggle').dropdown()


function checkID(str){
    var itemID = ["NIKE-BLAZ-BLU", "CON-LOW-WHI", "ADID-SUPE-WHI", "ADID-ULTRA-BLK", "NIKE-RUN-BLK", "NIKE-AIRJ-BLU"]
    var IDbox = document.getElementById("ID");
    var n = itemID.includes(str);
    if(n){
        IDbox.style.borderColor = "green";
    } else {
        IDbox.style.borderColor = "red";
    }
}

function updateProvState() {
    var countryBox = document.getElementById("countryBox");

    var opts = countryBox.options;
    var si = countryBox.selectedIndex;
    var sel = opts[si];

    hideBoxes();
    if (sel.index == 3) {
        showPostalCode();
    }
}

function hideBoxes () {
    var pcodeLabel = document.getElementById("pcodeLabel");
    var pcode = document.getElementById("pcode");
    pcodeLabel.className = "hidden";
    pcode.className = "hidden";
}

function showPostalCode () {
    var pcodeLabel = document.getElementById("pcodeLabel");
    var pcode = document.getElementById("pcode");
    pcodeLabel.className = "visible";
    pcode.className = "visible";
}
function checkName() {
    var namebox = document.getElementById("name");
    var name = namebox.value;
    if (name.length >= 4) {
        // Valid.
        namebox.style.borderColor = "green";
    } else {
        // Invalid.
        namebox.style.borderColor = "red";
    }
}
function checkEmail(str){
    var emailbox = document.getElementById("email");
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(str)){
        emailbox.style.borderColor = "green";
    } else {
        emailbox.style.borderColor = "red";
    }
}
function checkText() {
    var msgbox = document.getElementById("message");
    var msg = msgbox.value;

    if ((msg.length > 10)&&(msg.length<30)) {
        // Valid.
        msgbox.style.borderColor = "green";
    } else {
        // Invalid.
        msgbox.style.borderColor = "red";
    }
}
