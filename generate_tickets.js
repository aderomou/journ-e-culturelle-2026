// generate_tickets.js
function generateTickets(numTickets){
    let tickets = [];
    for(let i=1;i<=numTickets;i++){
        let j1 = "JC"+Math.floor(1000+Math.random()*9000);
        let j2 = "JC"+Math.floor(1000+Math.random()*9000);
        let j3 = "JC"+Math.floor(1000+Math.random()*9000);
        tickets.push({
            id: "ticket"+i,
            codes: { J1: j1, J2: j2, J3: j3 },
            used: { J1:false, J2:false, J3:false }
        });
    }
    return tickets;
}

// Générer 500 tickets
let tickets = generateTickets(500);
