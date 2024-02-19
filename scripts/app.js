//Buy-Ticket Button
const paribahanSection = document.getElementById("paribahan");

function getTicketElement(){
    paribahanSection.scrollIntoView({behavior: "smooth"});
}

//Seat Select and increase seat number

const allSeat = document.querySelectorAll(".seat");
    let count = 0;
    let totalSeat = 40;
    // console.log(price,busClass)
for(const seats of allSeat){
    seats.addEventListener("click",function(e){
        seats.style.backgroundColor = "#1dd100";

        count += 1;
        totalSeat -= 1;
        setInnerText('seat-number',count);
        setInnerText('total-seat',totalSeat);
        const seatName = e.target.innerText;
        // console.log(e.target.innerText)
        const price = 550;
        const busClass = "Economy";
        

        const selectedTicket = document.getElementById("selected-ticket-container");
        const li = document.createElement("li");
        const t = document.createElement("p");
        t.innerText = seatName;
        const c = document.createElement("p");
        c.innerText = busClass;
        const p = document.createElement("p");
        p.innerText = price;

        li.appendChild(t);
        li.appendChild(c);
        li.appendChild(p);

        selectedTicket.appendChild(li);
        totalCost("total-cost",parseInt(price));
        grandTotalCost("grand-total",parseInt(price));
    })
}

//Set Inner Text
function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}

//Total Cost Function
function totalCost(id,value){
    const totalCost = document.getElementById(id).innerText;
    const convertedTotalCost = parseInt(totalCost);
    const sum = convertedTotalCost + parseInt(value);
    setInnerText(id,sum);
}
//Grand Tota Cost
function grandTotalCost(){
    const totalCost = document.getElementById("total-cost").innerText;
    const convertedTotalCost = parseInt(totalCost);

    const inputValue = document.getElementById("input-value").value

    if (inputValue === 'NEW15'){
        const offerGrandTotal = convertedTotalCost - convertedTotalCost*15/100;
        setInnerText("grand-total",offerGrandTotal);
    }
    else if (inputValue === 'Couple 20'){
        const offerGrandTotal = convertedTotalCost - convertedTotalCost*20/100;
        setInnerText("grand-total",offerGrandTotal);
    }
    else{

        setInnerText("grand-total",convertedTotalCost);
    }

}