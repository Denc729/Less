const numDivs = 36;
const maxHits = 10;

let hits = 0;
let firstHitTime = 0;

let stHit = false;

function round() {


  let divSelector = randomDivId();
  $('.game-field').removeClass("target miss");
  $(divSelector).addClass("target");
  $(divSelector).text(hits+1);



if(firstHitTime==0){
 firstHitTime=getTimestamp();
}
  if (hits === maxHits) {
    endGame();
  }
}

function endGame() {
 
$('.window').hide();
  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);

  $("#win-message").removeClass("d-none");
}

function handleClick(event) {

 
  if ($(event.target).hasClass("target")) {
     $('.game-field').text("");
    hits = hits + 1;
    round();
  }
  else{
if(stHit){
   $("#"+this.id).addClass("miss");
}
  }
}

function init() {



  $(".game-field").click(handleClick);
  $("#button-reload").click(function() {
      if(stHit) {
        location.reload();
      }
      else{
        round();
        stHit=true;
         $("#button-reload").text("Заново");
      }

    
  });
}

$(document).ready(init);
