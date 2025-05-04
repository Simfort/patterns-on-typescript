"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Needs_1 = require("./Needs");
class HomeTheaterFacade {
    constructor(screen, popper, lights, player) {
        this.screen = screen;
        this.popper = popper;
        this.lights = lights;
        this.player = player;
    }
    watchMovie(movie) {
        this.popper.on();
        this.popper.pop();
        this.lights.dim(10);
        this.screen.down();
        this.player.on();
        this.player.play(movie);
    }
    endMovie() {
        this.popper.off();
        this.lights.on();
        this.screen.up();
        this.player.stop();
        this.player.off();
    }
}
const screen = new Needs_1.Screen();
const lights = new Needs_1.Lights();
const popper = new Needs_1.Popper();
const player = new Needs_1.Player();
const homeTheaterFacade = new HomeTheaterFacade(screen, popper, lights, player);
homeTheaterFacade.watchMovie("The Last Of Us");
homeTheaterFacade.endMovie();
