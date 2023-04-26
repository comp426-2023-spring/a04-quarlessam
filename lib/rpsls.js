export function rps(input) {
  var player = 0
  if (input == null) {
    return ('{\"player\":\"' + int_to_str(Math.floor(Math.random() * 3)) + '\"}')
  } else {
    player = str_to_int(input, false)
    if (input == null || player == -1) {
      rules(false)
      return
    }
  }
  let opponent = Math.floor(Math.random() * 3)
  let result = compute_result(player, opponent)
  return ('{\"player\":\"' + int_to_str(player) + '\",\"opponent\":\"' + int_to_str(opponent) + '\",\"result\":\"' + result + '\"}')
}

export function rpsls(input) {
  var player = 0
  if (input == null) {
    return ('{\"player\":\"' + int_to_str(Math.floor(Math.random() * 5)) + '\"}')
  } else {
    player = str_to_int(input, true)
    if (input == null || player == -1) {
      rules(true)
      return
    }
  }
  let opponent = Math.floor(Math.random() * 5)
  let result = compute_result(player, opponent)
  return ('{\"player\":\"' + int_to_str(player) + '\",\"opponent\":\"' + int_to_str(opponent) + '\",\"result\":\"' + result + '\"}')
}

function str_to_int(input, ls_allowed) {
  switch(String(input).toUpperCase()) {
    case 'ROCK':
      return 0
    case "PAPER":
      return 1
    case "SCISSORS":
      return 2
    case "LIZARD":
      if(ls_allowed) {
        return 3
      } else {
        return -1
      }
    case "SPOCK":
      if(ls_allowed) {
        return 4
      } else {
        return -1
      }
    default:
      return -1
  }
}

function int_to_str(input) {
  switch(input) {
    case 0:
      return 'rock'
    case 1:
      return 'paper'
    case 2:
      return 'scissors'
    case 3:
      return 'lizard'
    case 4:
      return 'spock'
  }
}

function rules(is_rpsls) {
  if(is_rpsls) {
    console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock SMOOSHES Lizard
  - Lizard POISONS Spock
  - Spock SMASHES Scissors
  - Scissors DECAPITATES Lizard
  - Lizard EATS Paper
  - Paper DISPROVES Spock
  - Spock VAPORIZES Rock
  - Rock CRUSHES Scissors`)
  } else {
    console.log(`Rules for Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock CRUSHES Scissors`)
  }
}

function compute_result(p, o) {
  switch(true) {
    case ((p == 2) && (o == 1)):
    case ((p == 1) && (o == 0)):
    case ((p == 0) && (o == 2)):
    case ((p == 3) && (o == 4)):
    case ((p == 4) && (o == 2)):
    case ((p == 2) && (o == 3)):
    case ((p == 3) && (o == 1)):
    case ((p == 1) && (o == 4)):
    case ((p == 4) && (o == 0)):
    case ((p == 1) && (o == 0)):
      return 'win'
    case (p == o):
      return 'tie'
    default:
      return 'lose'
  }
}