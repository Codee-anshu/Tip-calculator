
// get the bill amount input by the user
const billAmount = document.getElementById("billAmountInput")
// get the tip amount input by the user
const tipAmount = document.getElementById("tipAmountInput")

// get the plus button
const increase = document.querySelector(".increasePeople")

// get the minus button
const decrease = document.querySelector(".decreasePeople")

// get number of people 
const peopleCount = document.querySelector(".numberOfPeople")
let numberOfPeople = Number(peopleCount.innerText)

// get the totalBill 
const totalBillAmountDiv= document.querySelector(".totalAmountDisplay")


// ================ Functions ====================

// calulate total bill
let calculateBill= ()=>{
    // get the value from input bill input
    let bill= Number(billAmount.value)

    // get the tip amount and convert it to percentage
    let tip= Number(tipAmount.value)/ 100

    // calculate the tip amount
    let totalTip= bill* tip

    // calculate total bill amount
    let TotalbillAmount= bill + totalTip
    

    // calculate bill per person
    let perPerson= TotalbillAmount/ numberOfPeople

    // update the total bill in the DOM
    totalBillAmountDiv.innerText= `$${perPerson.toFixed(2)}`
}

// increase people functionality
increase.addEventListener("click", () => {
    // increament the number of people and update in DOM
    peopleCount.innerText = numberOfPeople+=1

    // calculate the bill amount per person
    calculateBill()
})

// decrease people functionality
decrease.addEventListener("click",()=>{
    if(numberOfPeople>1){
      // decreament the number of people and update in DOM
    peopleCount.innerText = numberOfPeople-=1

    // calculate the bill amount per person
    calculateBill()
      
    }  
})






