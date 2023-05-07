// function-1 to increase or decrease phone quantity
function updatePhoneQuantity(isIncrease){
    const phoneQuantityField = document.getElementById('phone-number-field');
    const phoneQuantityString = phoneQuantityField.value ;
    const previousPhoneQuantity =parseInt(phoneQuantityString);

  let newPhoneQuantity;
  if(isIncrease === true){
    newPhoneQuantity = previousPhoneQuantity + 1;
  }
  else{
    newPhoneQuantity = previousPhoneQuantity - 1;
  }
    phoneQuantityField.value = newPhoneQuantity;
    return newPhoneQuantity;
};
// function-2 update phone price
function updatePhonePrice(newPhoneQuantity){
    const phoneTotalPrice = newPhoneQuantity * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
};
//
document.getElementById('phone-btn-plus').addEventListener('click',function(){
   const newPhoneQuantity = updatePhoneQuantity(true);
   
   updatePhonePrice(newPhoneQuantity);
//    calculate subTotal price
     calculateSubTotal ()
}); 

document.getElementById('phone-btn-minus').addEventListener('click', function(){
    const newPhoneQuantity = updatePhoneQuantity(false);

    updatePhonePrice(newPhoneQuantity);

    calculateSubTotal()

    
});