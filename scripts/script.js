const play = document.querySelector('input#submit')

play.addEventListener('click', function start() {
    check_pressed_button()
}) 

const first_user = document.getElementsByName('first_user')
const second_user = document.getElementsByName('second_user')

function check_pressed_button() {
    if (first_user[0].checked) {
        stone_possibilities()
    } else if (first_user[1].checked) {
        paper_possibilities()
    } else if (first_user[2].checked) {
        scissors_possibilities()
    }
}

let situation = document.querySelector('h1#title_situation')

function stone_possibilities() {
    if (second_user[0].checked) {

        situation.innerHTML = 'empate!'
        tie_case()

    } else if (second_user[1].checked) {
        
        situation.innerHTML = 'player 2 ganhou!'
        player_two_win()

    } else if (second_user[2].checked) {
        
        situation.innerHTML = 'player 1 ganhou!'
        player_one_win()

    }
}

function paper_possibilities() {
    if (second_user[1].checked) {

        situation.innerHTML = 'empate!'
        tie_case()

    } else if (second_user[2].checked) {

        situation.innerHTML = 'player 2 ganhou!'
        player_two_win()

    } else if (second_user[0].checked) {

       situation.innerHTML = 'player 1 ganhou!'
       player_one_win()

    }
}

function scissors_possibilities() {
    if (second_user[2].checked) {

        situation.innerHTML = 'empate!'
        tie_case()

    } else if (second_user[0].checked) {

        situation.innerHTML = 'player 2 ganhou!'
        player_two_win()

    } else if (second_user[1].checked) {

        situation.innerHTML = 'player 1 ganhou!'
        player_one_win()

    }
}

let round = 0
const area_round = document.querySelector('p#total_round')

let first_user_defeat = 0
const area_first_user_defeat = document.querySelector('p#defeats_first_user')

let first_user_victory = 0
const area_first_user_victory = document.querySelector('p#victory_first_user')

let second_user_defeat = 0
const area_second_user_defeat = document.querySelector('p#defeats_second_user')

let second_user_victory = 0
const area_second_user_victory = document.querySelector('p#victory_second_user')

function tie_case() {
    area_round.innerHTML = `Total = ${round += 1}`
}

function player_two_win() {
    area_round.innerHTML = `Total = ${round += 1}`

    area_first_user_defeat.innerHTML = `Derrotas do player 1 = ${first_user_defeat += 1}`

    area_second_user_victory.innerHTML = `Vitórias do player 2 = ${second_user_victory += 1}`
}

function player_one_win() {
    area_round.innerHTML = `Total = ${round += 1}`

    area_first_user_victory.innerHTML = `Vitórias do player 1 = ${first_user_victory += 1}`

    area_second_user_defeat.innerHTML = `Derrotas do player 2 = ${second_user_defeat += 1}`
}

const restart = document.querySelector('input#restart')

restart.addEventListener('click', function restart() {
    round = 0
    area_round.innerHTML = 'Total ='

    first_user_defeat = 0
    area_first_user_defeat.innerHTML = 'Derrotas do player 1 ='

    first_user_victory = 0
    area_first_user_victory.innerHTML = 'Vitórias do player 1 = '

    second_user_defeat = 0
    area_second_user_defeat.innerHTML = 'Derrotas do player 2 ='

    second_user_victory = 0
    area_second_user_victory.innerHTML = 'Vitórias do player 2 ='
})