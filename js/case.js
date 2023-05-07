// function-1 to increase or decrease  case number
function updateCaseNumber(isIncrease){
    const caseNumberField  = document.getElementById('case-number-field');
   const caseNumberString = caseNumberField.value ;
   const previousCaseNumber = parseInt(caseNumberString);
  let newCaseNumber;
  if(isIncrease === true){
    newCaseNumber = previousCaseNumber + 1;
  }
  else{
    newCaseNumber = previousCaseNumber -1;
  }
   caseNumberField.value = newCaseNumber
   return newCaseNumber
};
// function-2 update case price
function updateCasePrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalField = document.getElementById('case-total');
     caseTotalField.innerText = caseTotalPrice;
}

document.getElementById('case-btn-plus').addEventListener('click',function(){
  const newCaseNumber = updateCaseNumber( true);
  updateCasePrice(newCaseNumber);
   
  calculateSubTotal();

 
  
})

document.getElementById('case-btn-minus').addEventListener('click',function(){
 const newCaseNumber = updateCaseNumber(false);
 updateCasePrice(newCaseNumber);

 calculateSubTotal();
 
})