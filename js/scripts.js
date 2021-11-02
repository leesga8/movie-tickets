function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Ticket.prototype.cost = function() {
  let htmlTicketInfo = $("p#cost");
  let releasePrice = 0;
  let timePrice = 0;
  let agePrice = 0;
  let total = 0;
  
  if(this.movie==="new"){
    releasePrice=10;
  } 
  else if(this.movie==="old"){ 
    releasePrice=5;
  }
  if(this.time==="afternoon"){
    timePrice=5;
  } 
  else if(this.time==="evening"){ 
    timePrice=10;
  }
  if (this.age==="seniors"){
    agePrice=5;
  } 
  else if(this.age=="regular"){ 
    agePrice=10;
  }
  total = (releasePrice + timePrice + agePrice);
  return total;
}

// UI LOGIC
$(document).ready(function(){
  $("#ticket-info").submit(function(event){
    event.preventDefault();
    const movie = $("#movie").val();
    const time = $("#time").val();
    const age = $("#age").val();
    let newTicket = new Ticket(movie, time, age);
    $('.output').html(newTicket.cost());
    $('#cost').show();
  })
})