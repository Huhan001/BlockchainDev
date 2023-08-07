//tennary conditins

function isUserValid(bool) {
    return bool;
}
var answer = isUserValid(false)? "yes you may enter": "no you may not enter";
var automatedAnswer = "your account number is " + (isUserValid(true)? "12345" : "not available");

//switch statementt

function moveCommand(direction) {
    var happenes;
    switch (direction) {
        case "forward":
            happenes = "you encounter a monster";
            break;
            case "back":
                happenes = "you have arrived";
                break;
                case "right":
                    happenes = "you found a river";
                    break;
                    case "left":
                        happenes = "you run into a troll";
                        break;
                        default:
                            happenes = " strange indentation over here";
    }
    return happenes
}

