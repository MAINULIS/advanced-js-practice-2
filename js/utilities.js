// function-3 get text element value
function getTextElementValueById (elementId){
    //    calculate price
const phoneTotalElement = document.getElementById(elementId) ;
const CurrentPhoneTotalPriceString = phoneTotalElement.innerText;
const CurrentPhoneTotalPrice = parseInt(CurrentPhoneTotalPriceString);
 
return CurrentPhoneTotalPrice;
};
// function -* set value
function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}
// function-4 calculate subTotal price
function calculateSubTotal(){
    const CurrentPhoneTotalPrice = getTextElementValueById('phone-total');
    const CurrentCaseTotalPrice = getTextElementValueById('case-total');
    const currentSubTotal = CurrentCaseTotalPrice + CurrentPhoneTotalPrice;
    setTextElementValueById('sub-total', currentSubTotal);

    // calculate tax amount
    const taxAmount = (currentSubTotal * 0.1).toFixed(2);
    setTextElementValueById('tax-amount', taxAmount);

    // calculate final total amount 
     const finalTotalAmount = currentSubTotal + taxAmount ;
     setTextElementValueById ('final-total',finalTotalAmount);
}