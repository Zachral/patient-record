//Initiate the function produceText when the html-button is clicked.
document.getElementById("generate").addEventListener("click", produceText);

//The function to be initiated
function produceText(e) {

//Determine what the output for therapyText will be at the end of the functions
    let therapy = document.getElementById("therapy");
    let therapyText = therapy.options[therapy.selectedIndex].text;

//Determine what the output for ipgText will be
    let ipg = document.getElementById("ipg");
    let ipgText = ipg.options[ipg.selectedIndex].text;

//Determine what the output for ipgText will be at the end of the function
    let leads = document.getElementById("number-of-leads");
    let leadsText = leads.options[leads.selectedIndex].text;


//Determine what the output for extentionTextFunc will be at the end of the function
    let extention = document.getElementById("extention");
    let extentionText = extention.options[extention.selectedIndex].value;
        function selectExtentionText(){
            if (extentionText == "yes"){
                return("En förlägning används.");
            } else {
                return(""); 
    } 
    }

//Determine what the output for impedanceText will be at the end of the function
    let impedance = document.getElementById("impedance");
    let impedanceText = impedance.options[impedance.selectedIndex].text;

//Determine what the output for mriTextFunc will be at the end of the function
    let mri = document.getElementById("mri");
    let mriText = mri.options[mri.selectedIndex].value;
        function selectMriText() {
            if (mriText == "yes"){
                return("Systemet är MR-kompatibelt.");
            } else {
                return("Systemet är inte MR-kompatibelt."); 
    }
    }
//Creates new element with the output text and previously determined variables. 
    let para = document.createElement("p");
        para.innerText = ("Patienten har ett system för " + therapyText + ", implaterat. IPGn är " + ipgText + " med " 
            + leadsText + " elektrod(er). " + selectExtentionText() + " Impedanserna är " + impedanceText + ". " + selectMriText());
    document.body.appendChild(para);
    
//Makes the paragraph stay visiable on the html-page
e.preventDefault();
};





