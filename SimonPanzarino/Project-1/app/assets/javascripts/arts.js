var startPuzzle = function() {

    if (gon.artwork) {
        console.log(gon.artwork.cells)
        var newHorizontal = [];
        var newVertical = [];
        var vertical = [];
        var horizontal = [];
        var lives = 5;
        var fill = true;
        var winCheck = 0;

        var checkForWin = function() {
          for (var i = 0; i < gon.artwork.cells.length; i++) {
            for (var j = 0; j < gon.artwork.cells[i].length; j++) {
              if (gon.artwork.cells[i][j][0] === "t" && gon.artwork.cells[i][j][2] !== "t") {
                winCheck++;
                console.log(winCheck);
              }
            }
          }
          if (winCheck === 0) {
            console.log("Finished!");
            $('.cell').unbind();
            $.ajax({
                url: "/art/" + id + "/win",
                method: "PUT",
                data: {
                    data_value: JSON.stringify(true)
                }
            }).done(function(data) {});
          }
          winCheck = 0;
        }

        $('#fill').on("click", function() {
            fill = true;
            console.log(fill);
        })

        $('#break').on("click", function() {
            fill = false;
            console.log(fill);
        })

        var gameBoardSize = gon.artwork.cells.length * 20;
        var gameBoardLeft = window.innerWidth / 2 - gameBoardSize;

        $('#gameBoard').css({
            "width": gameBoardSize,
            "height": gameBoardSize,
            "left": gameBoardLeft
        });

        $('.menu h3').append("x" + lives)

        // Dynamincally create 2d array for horizontal cells
        for (var i = 0; i < gon.artwork.cells.length; i++) {
            var data = [];
            for (var j = 0; j < gon.artwork.cells[i].length; j++) {
                data.push(gon.artwork.cells[i][j][0]);
            }
            newHorizontal.push(data);
        }

        // Dynamically create 2d array for vertical cells
        for (var i = 0; i < gon.artwork.cells.length; i++) {
            var data = [];
            for (var j = 0; j < gon.artwork.cells[i].length; j++) {
                data.push(gon.artwork.cells[j][i][0]);
            }
            newVertical.push(data);
        }

        for (var i = 0; i < gon.artwork.cells.length; i++) {
            $('#cells').append('<tr id="' + i + '"></tr>');

            for (var j = 0; j < gon.artwork.cells[i].length; j++) {
                var createCell = "<td class='cell' id='x" + i + "y" + j + "'></li>";
                $('#' + i).append(createCell);
            }
            var arr = newHorizontal[i]
                // hints = arr.join('').match(/t+/gi).map(function(str) {
                //     return str.length;
                // });
                // horizontal.push(hints)
            var res = arr.reduce(function(result, e) {
                if (e == 't') { // check value is `t` and increment the last element in array
                    result[result.length - 1]++;
                } else if (result[result.length - 1] != 0) { // if element is `f` and last eleemnt is not zero then push 0 to the array
                    result.push("");
                }
                return result;
            }, [0])
            horizontal.push(res)
        }
        for (var i = 0; i < newVertical.length; i++) {
            var arr2 = newVertical[i]
            var res2 = arr2.reduce(function(result2, e) {
                if (e == 't') { // check value is `t` and increment the last element in array
                    result2[result2.length - 1]++;
                } else if (result2[result2.length - 1] != 0) { // if element is `f` and last eleemnt is not zero then push 0 to the array
                    result2.push("");
                }
                return result2;
            }, [0])
            vertical.push(res2)
        }

        for (var i = 0; i < gon.artwork.cells.length; i++) {
            for (var j = 0; j < gon.artwork.cells[i].length; j++) {
                if (gon.artwork.cells[i][j][2] === "t") {
                    var color;
                    if (gon.artwork.cells[i][j][1] === "f") {
                        color = "#c7c7c7"
                    } else {
                        color = "#" + gon.artwork.cells[i][j][1];
                    }
                    $('#x' + i + 'y' + j).css({
                        "background-color": color
                    })
                }
            }
        }

        var reset = function() {
            lives = 5;
            console.log(lives)
            for (var i = 0; i < gon.artwork.cells.length; i++) {
                for (var j = 0; j < gon.artwork.cells[i].length; j++) {
                    gon.artwork.cells[i][j][2] = "f";
                    $('#x' + i + 'y' + j).css({
                        "background-color": "white"
                    })
                }
            }
            for (var i = 0; i < gon.artwork.cells.length; i++) {
                for (var j = 0; j < gon.artwork.cells[i].length; j++) {
                    if (gon.artwork.cells[i][j][2] === "t") {
                        var color;
                        if (gon.artwork.cells[i][j][1] === "f") {
                            color = "#c7c7c7"
                        } else {
                            color = "#" + gon.artwork.cells[i][j][1];
                        }
                        $('#x' + i + 'y' + j).css({
                            "background-color": color
                        })
                    }
                }
            }

            $.ajax({
                url: "/art/" + id + "/save",
                method: "PUT",
                data: {
                    data_value: JSON.stringify(gon.artwork.cells)
                }
            }).done(function(data) {});

            $('#gameOver').fadeOut();

        }

        var reveal = function(e) {
            if (lives > 1) {
                for (var i = 0; i < gon.artwork.cells.length; i++) {
                    for (var j = 0; j < gon.artwork.cells[i].length; j++) {
                        if (this.id === "x" + i + "y" + j && gon.artwork.cells[i][j][0] === "t" && fill === true) {
                            var colors = "#" + gon.artwork.cells[i][j][1]
                            $('#x' + i + 'y' + j).css({
                                "background-color": colors
                            })
                            gon.artwork.cells[i][j][2] = "t"
                        } else if (this.id === "x" + i + "y" + j && gon.artwork.cells[i][j][0] === "f" && fill === true) {
                            $('#x' + i + 'y' + j).css({
                                "background-color": "#c7c7c7"
                            })
                            lives -= 1;
                            $('.menu h3').html("<img class='marioLives' src='/assets/lives-c9c0dab7322351615e5ed275d2af741e6a9744b8e3bb91e2517edfe200bf7bad.png'>x" + lives)
                            gon.artwork.cells[i][j][2] = "t";
                        } else if (this.id === "x" + i + "y" + j && fill === false) {
                            $('#x' + i + 'y' + j).css({
                                "background-color": "pink"
                            })
                        }
                    }
                }
                checkForWin();
                $.ajax({
                    url: "/art/" + id + "/save",
                    method: "PUT",
                    data: {
                        data_value: JSON.stringify(gon.artwork.cells)
                    }
                }).done(function(data) {});
            } else {
                $('#gameOver').css({
                    "display": "flex"
                }).hide().fadeIn();
            }

        }


        for (var i = 0; i < horizontal.length; i++) {
            $('#leftHints').append('<ul><li><ul id="t' + i + '"></ul></li></ul>')
            for (var j = 0; j < horizontal[i].length; j++) {
                if (horizontal[i][j] !== "") {
                    $('#t' + i).append('<li>' + horizontal[i][j] + '</li>')
                }
            }
        }
        for (var i = 0; i < vertical.length; i++) {
            $('#top').append('<ul><li><ul id="' + i + '"></ul></li></ul>')
            for (var j = 0; j < vertical[i].length; j++) {
                if (vertical[i][j] !== "") {
                    $('#' + i).append('<li>' + vertical[i][j] + '</li>')
                }
            }
        }

        $('.cell').on("click", reveal);
        $('#reset').on("click", reset);
        $('#hardReset').on("click", reset);


        // console.log(newVertical)
        // console.log(vertical)

    }
}

var editPuzzle = function() {

    if (gon.artwork) {
        var newHorizontal = [];
        var newVertical = [];
        var vertical = [];
        var horizontal = [];

        var gameBoardSize = gon.artwork.cells.length * 20;
        var gameBoardLeft = window.innerWidth / 2 - gameBoardSize;

        $('#gameBoard').css({
            "width": gameBoardSize,
            "height": gameBoardSize,
            "left": gameBoardLeft
        });

        // Dynamincally create 2d array for horizontal cells
        for (var i = 0; i < gon.artwork.cells.length; i++) {
            var data = [];
            for (var j = 0; j < gon.artwork.cells[i].length; j++) {
                data.push(gon.artwork.cells[i][j][0]);
            }
            newHorizontal.push(data);
        }

        // Dynamically create 2d array for vertical cells
        for (var i = 0; i < gon.artwork.cells.length; i++) {
            var data = [];
            for (var j = 0; j < gon.artwork.cells[i].length; j++) {
                data.push(gon.artwork.cells[j][i][0]);
            }
            newVertical.push(data);
        }

        for (var i = 0; i < gon.artwork.cells.length; i++) {
            $('#cells').append('<tr id="' + i + '"></tr>');

            for (var j = 0; j < gon.artwork.cells[i].length; j++) {
                var createCell = "<td class='cell' id='x" + i + "y" + j + "'></li>";
                $('#' + i).append(createCell);
                if (gon.artwork.cells[i][j][0] === 't') {
                    var color = "#" + gon.artwork.cells[i][j][1];
                    $('#x' + i + 'y' + j).css({
                        "background-color": color
                    })
                }
            }
        }

        for (var i = 0; i < gon.artwork.cells.length; i++) {
            for (var j = 0; j < gon.artwork.cells[i].length; j++) {
                if (this.id === "x" + i + "y" + j && gon.artwork.cells[i][j][0] === "t") {
                    var colors = "#" + gon.artwork.cells[i][j][1]
                    $('#x' + i + 'y' + j).css({
                        "background-color": colors
                    })
                } else if (this.id === "x" + i + "y" + j && gon.artwork.cells[i][j][0] === "f") {
                    $('#x' + i + 'y' + j).css({
                        "background-color": "#c7c7c7"
                    })
                }
            }
        }

        var toggle = function(e) {
            for (var i = 0; i < gon.artwork.cells.length; i++) {
                for (var j = 0; j < gon.artwork.cells[i].length; j++) {
                    if (this.id === "x" + i + "y" + j && gon.artwork.cells[i][j][0] === "t") {
                        console.log(this)
                        $('#x' + i + 'y' + j).css({
                            "background-color": "white"
                        })
                        gon.artwork.cells[i][j][0] = "f";
                    } else if (this.id === "x" + i + "y" + j && gon.artwork.cells[i][j][0] === "f") {
                        console.log(this);

                        console.log(chosenColor);
                        var colorCode = "#" + chosenColor;
                        console.log(colorCode);
                        $('#x' + i + 'y' + j).css({
                            "background-color": "#" + chosenColor
                        })
                        gon.artwork.cells[i][j][0] = "t";
                        gon.artwork.cells[i][j][1] = chosenColor;
                        gon.artwork.cells[i][j][2] = "f";
                    }
                }
            }

            $.ajax({
                url: "/arts/" + id,
                method: "PUT",
                data: {
                    data_value: JSON.stringify(gon.artwork.cells)
                }
            }).done(function(data) {});

        }

        $('.cell').on("click", toggle);

    }
}
