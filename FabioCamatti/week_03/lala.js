swal({
      title: "Player " + player.toUpperCase() + " won the game!",
      showCancelButton: true,
      cancelButtonText: "GAME OVER!",
      confirmButtonText: "PLAY AGAIN?",
      confirmButtonColor: '#5d9634',
      closeOnConfirm: false,
      closeOnCancel: false },
        function(isConfirm){
              if (isConfirm) {
                    location.reload();
              } else {
                swal({
                                  title: "RESET SCORE?",
                                  text: $(".score p").text(),
                                  showCancelButton: true,
                                  cancelButtonText: "NO!",
                                  cancelButtonColor: '#5d9634',
                                  confirmButtonText: "YES!",
                                  confirmButtonColor: "#DD6B55" },
                                  function(isConfirm){

                                      if (isConfirm) {

                                              resetScore();
                                              location.reload();

                                      } else {

                                        location.reload();

                                      }


                                  }
                    );
                    }
});


swal({
    title: "Player " + player.toUpperCase() + " won the game!",
    showCancelButton: true,
    cancelButtonText: "GAME OVER!",
    confirmButtonText: "PLAY AGAIN?",
    confirmButtonColor: '#5d9634',
    closeOnConfirm: true,
    closeOnCancel:
  },function(isCancel){
          if(isCancel)
  }


swal({
    title: "Player " + player.toUpperCase() + " won the game!",
    showCancelButton: true,
    cancelButtonText: "GAME OVER!",
    confirmButtonText: "PLAY AGAIN?",
    confirmButtonColor: '#5d9634'
  },function(){location.reload()});





  swal({
    title: "Hmm, it's a draw!",
    showCancelButton: true,
    cancelButtonText: "GAME OVER!",
    confirmButtonText: "PLAY IT AGAIN?",
    confirmButtonColor: '#5d9634'
  }, function(){location.reload()});









  swal({
    title: "Hmm, it's a draw!",
    showCancelButton: true,
    cancelButtonText: "GAME OVER!",
    confirmButtonText: "PLAY IT AGAIN?",
    confirmButtonColor: '#5d9634',
    closeOnConfirm: false,
    closeOnCancel: false
  }, function(isConfirm){
        if (isConfirm) {
              location.reload();
        } else {
          swal({
                            title: "RESET SCORE?",
                            text: $(".score p").text(),
                            showCancelButton: true,
                            cancelButtonText: "NO!",
                            cancelButtonColor: '#5d9634',
                            confirmButtonText: "YES!",
                            confirmButtonColor: "#DD6B55" },
                            function(isConfirm){

                                if (isConfirm) {

                                        resetScore();
                                        location.reload();

                                } else {

                                  location.reload();

                                }


                            }
              );
              }
});


swal({
  title: "Hmm, it's a draw!",
  showCancelButton: true,
  cancelButtonText: "GAME OVER!",
  confirmButtonText: "PLAY IT AGAIN?",
  confirmButtonColor: '#5d9634',
  closeOnConfirm: false,
  closeOnCancel: false
}, function(isConfirm){
      if (isConfirm) {
            location.reload();
      } else {
        swal({
                          title: "RESET SCORE?",
                          text: $(".score p").text(),
                          showCancelButton: true,
                          cancelButtonText: "NO!",
                          cancelButtonColor: '#5d9634',
                          confirmButtonText: "YES!",
                          confirmButtonColor: "#DD6B55" },
                          function(isConfirm){

                              if (isConfirm) {

                                      resetScore();
                                      location.reload();

                              } else {

                                location.reload();

                              }


                          }
            );
            }
});

swal({   title: "Are you sure?",
          text: "You will not be able to recover this imaginary file!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "MU",
          closeOnConfirm: false }, function(){
          swal("Deleted!", "Your imaginary file has been deleted.", "success"); });

swal({  title: "LET'S PLAY TIC TAC TOE?",
        text: "CHOOSE YOUR GAME!",
        html: true,
        showCancelButton: true,
        cancelButtonText: "Single Player Mode",
        confirmButtonColor: "#5d9634",
        confirmButtonText: "Multiplayer Mode",
        closeOnConfirm: false,
        closeOnCancel: false },function(isConfirm){
                                          if (isConfirm) {
                                                var autoPlay = false;
                                                init();
                                          } else {
                                                var autoPlay = true;
                                                init();
                                          }
                                        });




                                        var start = function () {

                                        swal({  title: "LET'S PLAY TIC TAC TOE?",
                                                text: "CHOOSE A MODE!",
                                                html: true,
                                                showCancelButton: true,
                                                cancelButtonText: "Single Player Mode",
                                                confirmButtonColor: "#5d9634",
                                                confirmButtonText: "Multiplayer Mode",
                                                closeOnConfirm: false,
                                                closeOnCancel: false },function(isConfirm){
                                                                                  if (isConfirm) {
                                                                                      //sessionStorage.setItem('autoPlay', autoPlay =  false);
                                                                                      init();
                                                                                  } else {
                                                                                        //sessionStorage.setItem('aut`oPlay', autoPlay =  true);
                                                                                        init();
                                                                                  }
                                                                                });
                                        }
swal({   title: "Auto close alert!",   text: "I will close in 2 seconds.",   timer: 2000,   showConfirmButton: false });

if((winCountX === undefined || winCountX === null || isNaN(winCountX)) && (winCountO === undefined || winCountO === null || isNaN(winCountO))){
      start();
}else {
      //autoPlay = sessionStorage.getItem('autoPlay', autoPlay);
      init();
