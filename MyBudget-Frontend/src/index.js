let budgetLink = document.getElementById("navBudgets");
let numberOfBudgets = document.getElementById("navInfo");

budgetLink.addEventListener("click", function(e){
    returnToMe()
}, {once : true});

function allBudgets(){
    fetch("http://localhost:3000/budgets")
    .then(function(response){
        return response.json()
    }).then(function(json){
        json.data.forEach(function(budget){
            let obj = {...budget.attributes, id: budget.id};
            new Budget(obj);
        })
    })
}

allBudgets();

function returnToMe(){
    for (array of Budget.all){
    let h1 = document.createElement("h1");
    h1.textContent = `Budget for: ${array.title} - Balance: $${array.bank}`;
    document.body.appendChild(h1);

    let h3 = document.createElement("h3");
    h3.textContent = `Expense: Name: ${array.expenses[0].name} - $${array.expenses[0].cost} - Due: ${array.expenses[0].date}`;
    document.body.appendChild(h3);
    }
}


