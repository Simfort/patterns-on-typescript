import { Lights, Player, Popper, Screen } from "./Needs";

class HomeTheaterFacade {
  screen: Screen;
  popper: Popper;
  lights: Lights;
  player: Player;
  constructor(screen: Screen, popper: Popper, lights: Lights, player: Player) {
    this.screen = screen;
    this.popper = popper;
    this.lights = lights;
    this.player = player;
  }
  watchMovie(movie: string) {
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

const screen = new Screen();
const lights = new Lights();
const popper = new Popper();
const player = new Player();

const homeTheaterFacade = new HomeTheaterFacade(screen, popper, lights, player);

homeTheaterFacade.watchMovie("The Last Of Us");
homeTheaterFacade.endMovie();
