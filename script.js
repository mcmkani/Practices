
  let readDataFromHTMLElements=document.querySelector("#submit");
  readDataFromHTMLElements.addEventListener("click", function(){

    let dataFirstName = document.querySelector("#first-name").value;
    let dataLastName = document.querySelector("#last-name").value;
    let dataFAddress = document.querySelector("#address").value;
    let dataPincode = document.querySelector("#pincode").value;

    let selectedGender = '';

    if(document.querySelector("#genderradiomale").checked)    {
        selectedGender = document.querySelector("#genderradiomale").value;
    }
    else if(document.querySelector("#genderradiofemale").checked)    {
        selectedGender = document.querySelector("#genderradiofemale").value;
    }
    else if (document.querySelector("#genderradioother").checked){
        selectedGender = document.querySelector("#genderradioother").value;
    }

    let selectedFoodChoices = '';

    if(document.querySelector("#chkVeg").checked)    {
        selectedFoodChoices = document.querySelector("#chkVeg").value;
    }
    if(document.querySelector("#chkNonVeg").checked)    {
        selectedFoodChoices = selectedFoodChoices + '|' + document.querySelector("#chkNonVeg").value;
    }
    if (document.querySelector("#chkChinese").checked){
        selectedFoodChoices = selectedFoodChoices + '|' + document.querySelector("#chkChinese").value;
    }
    if (document.querySelector("#chkContinental").checked){
        selectedFoodChoices = selectedFoodChoices + '|' + document.querySelector("#chkContinental").value;
    }
    if (document.querySelector("#chkVegan").checked){
        selectedFoodChoices = selectedFoodChoices + '|' + document.querySelector("#chkVegan").value;
    }        

    let dataState = document.querySelector("#txtstate").value;
    let dataCountry = document.querySelector("#txtcountry").value;
    
    //console.log("before - " + document.querySelector("#tblSummary").rows.length);

    //console.log(dataFirstName , dataLastName, dataFAddress, dataPincode, selectedGender, selectedFoodChoices,dataState,dataCountry);

      addFoodMemberChoice(dataFirstName , dataLastName, dataFAddress, dataPincode, selectedGender, selectedFoodChoices,dataState,dataCountry);

      resetValues();
  })



let addFoodMemberChoice=(dataFirstName , dataLastName, dataFAddress, dataPincode, selectedGender, selectedFoodChoices,dataState,dataCountry)=>{
    var foodChoices = selectedFoodChoices.split('|');
    let prefixChoices = '<ul style="line-style-type:disc;">';
    let mainChoices = '';    
    let suffixChoices = '</ul>';
    for(let i=0;i<foodChoices.length;i++){{
        if(foodChoices[i]!='')
        {
            mainChoices = mainChoices + '<li>' + foodChoices[i] + '</li>';
        }
    }}
    //debugger;
    let appenedfoodChoices = prefixChoices + mainChoices + suffixChoices;
    //console.log(appenedfoodChoices);
    let tableBody=document.querySelector("#tblBody");    
    let table=document.querySelector("#tblSummary");          

    let tableRow="";
    tableRow+=`<tr>
    <td>${dataFirstName}</td>
    <td>${dataLastName}</td>
    <td>${dataFAddress}</td>
    <td>${dataPincode}</td>
    <td>${selectedGender}</td>              
    <td>${appenedfoodChoices}</td>
    <td>${dataState}</td>          
    <td>${dataCountry}</td>    
    </tr>`;
    
    var rowCount = table.rows.length - 1;    
    var row = table.insertRow(rowCount);
    row = tableRow;
    tableBody.innerHTML+= row;
    //tableBody.appendChild(row);
    //console.log("after - "+ table.rows.length);
}

let resetValues=()=>{
    document.querySelector("#first-name").value = "";
    document.querySelector("#last-name").value = "";
    document.querySelector("#address").value = "";
    document.querySelector("#pincode").value = "";

    document.querySelector("#genderradiomale").checked = false;
    document.querySelector("#genderradiofemale").checked = false;
    document.querySelector("#genderradioother").checked = false;

    document.querySelector("#chkVeg").checked = false;
    document.querySelector("#chkNonVeg").checked = false;
    document.querySelector("#chkChinese").checked = false;
    document.querySelector("#chkContinental").checked = false;
    document.querySelector("#chkVegan").checked = false;

    document.querySelector("#txtstate").value = "";
    document.querySelector("#txtcountry").value = "";
}