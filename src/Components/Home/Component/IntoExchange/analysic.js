$(document).ready(function () { 
    if(sessionStorage.forType == undefined){
        sessionStorage.forType = 1;
    }
    let lobbyid = $("#lobby-id").val();
    $.ajax({
        type: "get",
        url: `/api/services/app/Formula/GetFormulaByLobbyId?lobbyId=${lobbyid}`,
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                "content"
            ),
        },
        timeout: 30000,
        beforeSend: function () {   
        },
        success: function (response) {
            let data = response.result;
            var selectedFormula = data.filter(function (item) { return (item.type == sessionStorage.forType);})[0];
            var arrayData = selectedFormula.value.map(obj => {
                let rObj = {}
                rObj['data'] = obj                          
                return rObj
            });
               
            sessionStorage.setItem('formula', JSON.stringify(arrayData));
            initialize();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            swal.close();
            console.log("Error");
            Swal.fire({
                type: "error",
                title: "Cannot Fetch Data",
                text: "Error while fetching data for lobby. Contact support",
            });
        },
    });
 
});

function initialize() {
    var x = JSON.parse(sessionStorage.getItem('formula'));
    // console.log("session storage: ", x);
    // sessionStorage.setItem('formula', JSON.stringify(data['data']));

    //$('.navUser').html(`<img src="resource/images/new/user.png" style="height:30px;">&nbsp; ${sessionStorage.User} &nbsp; </span>`);
    //$('.navCredit').html(`<img src="resource/images/new/credit.png" style="height:30px;">&nbsp; ${$.number(sessionStorage.Credit)} &nbsp; </span>`);
    let head = document.getElementsByTagName('HEAD')[0];
    let link = document.createElement('link');
    // console.log(sessionStorage.forType)
    document.getElementById(`fomula${sessionStorage.forType}`).style.color = 'khaki';
    document.getElementById(`mb_fomula${sessionStorage.forType}`).classList.add('text-khali');
    var acc_interval = [];
    switch (sessionStorage.forType) {
        case "10":
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'css/lbtheme_pirate4.css';
            head.appendChild(link);
            // $('body').css('background-image', 'url("/images/BG.png")');
            $('.sidenav').css('background-image', 'url("/images/Sidebar_sahacker.png")');
            break;
        case "2":
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'css/lbtheme_racing4.css';
            head.appendChild(link);
            // $('body').css('background-image', 'url("/images/01_Racing_BG.png")');
            $('.sidenav').css('background-image', 'url("/images/Sidebar_sahacker.png")');
            break;
        case "3":
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'css/lbtheme_space4.css';
            head.appendChild(link);
            // $('body').css('background-image', 'url("/images/01_Space_BG.png")');
            $('.sidenav').css('background-image', 'url("/images/Sidebar_sahacker.png")');
            break;
        case "4":
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'css/lbtheme_winter4.css';
            head.appendChild(link);
            // $('body').css('background-image', 'url("/images/01_Winter_BG.png")');
            $('.sidenav').css('background-image', 'url("/images/Sidebar_sahacker.png")');
            break;
        case "5":
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'css/lbtheme_neon.css';
            head.appendChild(link);
            // $('body').css('background-image', 'url("/images/01_Neon_BG.png")');
            $('.sidenav').css('background-image', 'url("/images/02_Neon_Lobby_05_Sidebar.png")');
            break;
        case "6":
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'css/lbtheme_mayan4.css';
            head.appendChild(link);
            // $('body').css('background-image', 'url("/images/01__Mayan_BG.png")');
            $('.sidenav').css('background-image', 'url("/images/Sidebar_sahacker.png")');
            break;
        case "7":
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'css/lbtheme_china.css';
            head.appendChild(link);
            // $('body').css('background-image', 'url("/images/01_China_BG.png")');
            $('.sidenav').css('background-image', 'url("/images/Sidebar_sahacker.png")');
            break;
        case "8":
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'css/lbtheme_music.css';
            head.appendChild(link);
            // $('body').css('background-image', 'url("/images/01_Music_BG.png")');
            $('.sidenav').css('background-image', 'url("/images/Sidebar_sahacker.png")');
            break;
        case "9":
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'css/lbtheme_skull.css';
            head.appendChild(link);
            // $('body').css('background-image', 'url("/images/01_Skull_BG.png")');
            $('.sidenav').css('background-image', 'url("/images/Sidebar_sahacker.png")');
            break;
        case "1":
            var asset_path = "asset/" + 1;
            // $('body').css('background-image', 'url(' + "/images/new/" + asset_path + "/BG.png" + ')');
            $('.sidenav').css('background-image', 'url(' + "/images/new/" + asset_path + "/side_bar.png" + ')');
            $('.resroom').css('background-image', 'url(' + "/images/new/" + asset_path + "/Frame_Lobby.png" + ')');
    }

    function chkresult(s, room) {
        // console.log(predict);

        if (predict == s) {
            win++;
            rate = Math.round((win / active) * 100);
            winid = 'winrate' + room;
            winhtml = rate + '%';
            if (rate > 80) {
                getCase("num", rate, room)
            }
            else if (rate > 60) {
                getCase("num", rate, room)
            }
            else {
                getCase("num", rate, room)
            }
            stack = 1;
        }
        else if (predict != "") {
            let winid = 'winrate' + room;

            if (active > 0) {
                if (stack < 3) {
                    active--;
                    stack++;
                    // winhtml = 'Waiting for results';
                    // getCase("text", winhtml, room);
                }
                else {
                    rate = Math.round((win / active) * 100);
                    winhtml = rate + '%';
                    if (rate > 80) {
                        getCase("num", rate, room)
                    }
                    else if (rate > 60) {
                        getCase("num", rate, room)
                    }
                    else {
                        getCase("num", rate, room)
                    }
                    stack = 1;
                }
            }
            else {
                winhtml = 'Shuffling';
                getCase("text", winhtml, room);
            }
        }
        if (slot.length == x[0].data.length - 1) slot = slot.substring(1, x[0].data.length - 1);
        slot += s;
        for (let i = 0; i < x.length; i++) {
            if (slot == x[i].data.substring(0, x[i].data.length - 1)) {
                active++;
                predict = x[i].data.charAt(x[i].data.length - 1);
                break;
            }
            predict = "";
        }
    }

    function roomdata(table) {
        //  console.log('ROOMDATA');
        // sessionStorage.setItem('formula', JSON.stringify(formula));
        // console.log(formula);
        for (room = 0; room < table.length; room++) {

            res = table[room].resultsString.split("");
            //console.log(room +" : "+ res[0]);

            if (typeof res[0] == 'undefined') {
                let winhtml = 'Shuffling';
                getCase("text", winhtml, table[room].name);
            }
            else if (res[0] != '') {
                active = 0;
                win = 0;
                slot = "";
                stack = 1;
                predict = "";
                for (let i = 0; i < 72; i++) {

                    if (res[i] == 'B') {
                        chkresult('b', table[room].name);
                    }
                    else if (res[i] == 'P') {
                        chkresult('p', table[room].name);
                    }
                }

            }

        }
    }
    function getCase(result_type, result_value, result_id) {
        // console.log('get Case: ', result_type, result_value, result_id)
        if (result_type == "text") {
            document.getElementById(`winrate${result_id}`).style.color = 'khaki';
            document.getElementById(`winrate${result_id}`).innerHTML = result_value;
            switch (sessionStorage.forType) {
                case '10':
                    pirateEmtryBar(result_id);
                    break;
                case "2":
                    $(`#winrate${result_id}`).removeClass("te2_winrate_num").addClass("te2_winrate");
                    break;
                case "3":
                    $(`#winrate${result_id}`).removeClass("te2_winrate_num").addClass("te2_winrate");
                case "4":
                    $(`#winrate${result_id}`).removeClass("te4_winrate_num").addClass("te4_winrate");
                    $(`#progbar_${result_id}`).css('width', "0%");
                    break;
                case "5":
                    $(`#winrate${result_id}`).removeClass("te5_winrate_num").addClass("te5_winrate");
                    document.getElementById(`status_game${result_id}`).src = "resource/images/theme/neon/02_Neon_Lobby_06.png";
                    $(`#show_line${result_id}`).addClass("show_line_error");
                    break;
                case "6":
                    $(`#trophy_${result_id}`).attr('src', "resource/images/theme/mayan/02_Mayan_Lobby_05.png");
                    $(`#diamond_${result_id}`).attr('src', "resource/images/theme/mayan/02_Mayan_Lobby_10.png");
                    $(`#winrate${result_id}`).removeClass("te6_winrate_num").addClass("te6_winrate");
                    break;
                case "7":
                    $(`#winrate${result_id}`).removeClass("te2_winrate_num").addClass("te2_winrate");
                    document.getElementById(`status_game${result_id}`).src = "resource/images/theme/china/02_China_Lobby_06.png";
                    break;
                case "8":
                    clearInterval(acc_interval[result_id]);
                    $(`#winrate${result_id}`).removeClass("te8_winrate_num").addClass("te8_winrate");
                    $(`#bitrate${result_id}`).html("");
                    break;
                case "9":
                    $(`#winrate${result_id}`).removeClass("te2_winrate_num").addClass("te2_winrate");
                    document.getElementById(`status_game${result_id}`).src = "resource/images/theme/skull/02_Skull_Lobby_14.png";
                    break;
                default:
            }
        } else {
            if (result_value > 80) {
                document.getElementById(`winrate${result_id}`).style.color = 'lime';
            } else if (result_value > 60) {
                document.getElementById(`winrate${result_id}`).style.color = 'gold';
            } else {
                document.getElementById(`winrate${result_id}`).style.color = 'red';
            }
            switch (sessionStorage.forType) {
                default:
                    document.getElementById(`winrate${result_id}`).innerHTML = result_value + "%";
            }
        }
    }

    function showdata() {
        let lobbyid = $("#lobby-id").val();
        $.ajax({
            url: `/api/services/app/Table/GetTablesByLobbyId?lobbyId=${lobbyid}`, // my php file
            type: 'GET', // type of the HTTP request
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                    "content"
                ),
            },
            success: function (data) {
                console.log("result: ", data.result);
                var obj = data.result;
                var arr = [];

                $.each(obj, function (index, value) {
                    arr.push(value);
                });
                roomdata(arr);
                //console.log(arr);
            }
        });
    }
    showdata();
    setInterval(showdata, 5000);
}

function winterBar(bar_id, result_value) {
    $(`#progbar_${bar_id}`).removeClass("bar_fade");
    if (result_value > 80) {
        $(`#progbar_${bar_id}`).css('background-image', 'url("resource/images/theme/winter/02_Winter_Lobby_04.png")');
    } else if (result_value > 60) {
        $(`#progbar_${bar_id}`).css('background-image', 'url("resource/images/theme/winter/02_Winter_Lobby_05.png")');
    } else {
        $(`#progbar_${bar_id}`).css('background-image', 'url("resource/images/theme/winter/02_Winter_Lobby_06.png")');
    }
    let bar_widtd = 12 + (88 * (result_value / 100));
    document.getElementById(`progbar_${bar_id}`).animate([
        // keyframes
        {
            width: "12%"
        },
        {
            width: bar_widtd + "%"
        }
    ], {
        // timing options
        duration: 1000,
        fill: "forwards",
        iterations: 1
    });
    setTimeout(function () {
        $(`#progbar_${bar_id}`).addClass("bar_fade");
    }, 1500);
}

function racingAccel(bar_id, result_value) {
    let deg = 90 + ((result_value / 100) * 270);
    document.getElementById(`accel_${bar_id}`).animate([
        // keyframes
        {
            transform: `rotate(90deg)`
        },
        {
            transform: `rotate(${deg}deg)`
        }
    ], {
        // timing options
        duration: 2000,
        fill: "forwards",
        iterations: 1
    });
}

function pirateBar(bar_id, result_value) {
    pirateEmtryBar(bar_id);
    let tbl_left_bar = document.getElementById(`left_bar_${bar_id}`);
    let tbl_right_bar = document.getElementById(`right_bar_${bar_id}`);
    let range = Math.floor(result_value / 5);
    let bar_count = 0;
    let bar_interval = setInterval(function () {
        if (bar_count === range) {
            clearInterval(bar_interval);
            if (range != 0) {
                if (result_value > 80) {
                    $(`.bar_color_${bar_id}`).css("backgroundColor", "lime");
                } else if (result_value > 60) {
                    $(`.bar_color_${bar_id}`).css("backgroundColor", "gold");
                } else {
                    $(`.bar_color_${bar_id}`).css("backgroundColor", "red");
                }
                tbl_left_bar.rows[0].cells[bar_count - 1].classList.add(`bar_fade`);
                tbl_left_bar.rows[0].cells[bar_count - 2].classList.add(`bar_fade`);
                tbl_right_bar.rows[0].cells[19 - (bar_count - 1)].classList.add(`bar_fade`);
                tbl_right_bar.rows[0].cells[19 - (bar_count - 2)].classList.add(`bar_fade`);
            }
        } else {
            if (bar_count > 14) {
                tbl_left_bar.rows[0].cells[bar_count].classList.add(`bar_color_${bar_id}`);
                tbl_right_bar.rows[0].cells[19 - bar_count].classList.add(`bar_color_${bar_id}`);
                $(`.bar_color_${bar_id}`).css("backgroundColor", "lime");
            } else if (bar_count > 10) {
                tbl_left_bar.rows[0].cells[bar_count].classList.add(`bar_color_${bar_id}`);
                tbl_right_bar.rows[0].cells[19 - bar_count].classList.add(`bar_color_${bar_id}`);
                $(`.bar_color_${bar_id}`).css("backgroundColor", "gold");
            } else {
                tbl_left_bar.rows[0].cells[bar_count].classList.add(`bar_color_${bar_id}`);
                tbl_right_bar.rows[0].cells[19 - bar_count].classList.add(`bar_color_${bar_id}`);
                $(`.bar_color_${bar_id}`).css("backgroundColor", "red");
            }
            bar_count++;
        }
    }, 40);
}

function pirateEmtryBar(bar_id) {
    html = `<tr style="width:100%"><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
          <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>`;
    $(`#left_bar_${bar_id}`).html(html);
    $(`#right_bar_${bar_id}`).html(html);
}

function drawbitrate(bit_id, result_value) {
    let max_range = Math.floor(result_value / 5);
    let html = "";
    rand_num = [];
    for (let i = 0; i < 10; i++) {
        rand_num.push(Math.floor(Math.random() * max_range))
    }
    for (let row = 0; row < 20; row++) {
        html += "<tr>";
        for (let col = 0; col < 10; col++) {
            if (row < (19 - rand_num[col])) {
                html += "<td style='background-color: none;'></td>"
            } else {
                if (result_value > 80) {
                    td_color = "lime";
                } else if (result_value > 60) {
                    td_color = "gold";
                } else {
                    td_color = "red";
                }
                html += `<td style='background-color: ${td_color};'></td>`
            }
        }
        html += "</tr>";
    }
    $(`#bitrate${bit_id}`).html(html);
}


function changeForType(type) {
    sessionStorage.forType = type;
    window.location.reload();
}