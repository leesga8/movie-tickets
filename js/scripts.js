function TicketBook() {
  this.tickets = {};
  this.currentId = 0;
}

TicketBook.prototype.addTicket = function(ticket) {
  ticket.id = this.assignId();
  this.tickets[ticket.id] = ticket;
};

TicketBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

TicketBook.prototype.findTicket = function(id) {
  if (this.ticket[id] !=undefined) {
    return this.tickets[id];
  }
  return false;
}
  
TicketBook.prototype.deleteTicket = function(id) {
  if (this.tickets[id] === undefined) {
    return false;
  }
  delete this.tickets[id];
  return true;
};


function Ticket(release, time, age) {
  this.release = release;
  this.time = time;
  this.age = age;
}

/*

need of release, time, age

if release > 2 weeks 25% off
if time < 4pm tickets 25%off
if age > 65 ticket25%off

let cost = $0
if release is new +$5 if release is old +3
if time < 4pm +$5 if time > 4pm +$8 
if age > 65 ticket25%off
}

display the cost in our ticket 

*/

/*



*/