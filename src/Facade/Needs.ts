export class Popper {
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

export class Lights {
  dim(num: number) {
    console.log("Lights " + num);
  }
  on() {
    console.log("Lights is on");
  }
}
export class Screen {
  down() {
    console.log("Screen is down");
  }
  up() {
    console.log("Screen is up");
  }
}

export class Player {
  on() {
    console.log("Player is on");
  }
  play(movie: string) {
    console.log(movie + " is playing");
  }
  stop() {
    console.log("Player is stop");
  }
  off() {
    console.log("Player is off");
  }
}
