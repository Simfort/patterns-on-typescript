"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = exports.Screen = exports.Lights = exports.Popper = void 0;
class Popper {
    on() {
        console.log("Popper is on");
    }
    pop() {
        console.log("Popper is pop");
    }
    off() {
        console.log("Popper is off");
    }
}
exports.Popper = Popper;
class Lights {
    dim(num) {
        console.log("Lights " + num);
    }
    on() {
        console.log("Lights is on");
    }
}
exports.Lights = Lights;
class Screen {
    down() {
        console.log("Screen is down");
    }
    up() {
        console.log("Screen is up");
    }
}
exports.Screen = Screen;
class Player {
    on() {
        console.log("Player is on");
    }
    play(movie) {
        console.log(movie + " is playing");
    }
    stop() {
        console.log("Player is stop");
    }
    off() {
        console.log("Player is off");
    }
}
exports.Player = Player;
