const app = new PIXI.Application({
  antialias: true,
  transparent: true,
  resizeTo: window
});

document.body.appendChild(app.view);
app.view.id = 'canvas';
app.stage.interactive = true;

const container = new PIXI.Container();
container.x = app.screen.width / 2;
container.y = app.screen.height / 2;

container.width = app.screen.width;
container.height = app.screen.height;

function start() {
  const startBlock = document.querySelector('.start')

  if(!startBlock) return

  startBlock.classList.add('active')
  startBlock.classList.add('animation')

  setTimeout(() => {
    startBlock.classList.remove('animation')
    startBlock.classList.add('hidden')
  }, 3000)

  setTimeout(() => {
    startBlock.classList.remove('active')
    startBlock.classList.remove('hidden')
  }, 3500)
}

function game() {
  const bgFront = PIXI.Sprite.from('src/assets/img/back_five_dogs.jpg');
  bgFront.anchor.set(0.5);

  const dog1 = PIXI.Sprite.from('src/assets/img/doggy.png');
  const dog2 = PIXI.Sprite.from('src/assets/img/doggy.png');
  const dog3 = PIXI.Sprite.from('src/assets/img/doggy.png');
  const dog4 = PIXI.Sprite.from('src/assets/img/doggy.png');
  const dog5 = PIXI.Sprite.from('src/assets/img/doggy.png');

  let count = 0

  function counter() {
    count++
    if( count === 5 ) {
      finish()
    }
  }

  function circleRender(x, y) {
    const circleOne = PIXI.Sprite.from('src/assets/img/circle_1.png');
    const circleTwo = PIXI.Sprite.from('src/assets/img/circle_2.png');
    const circleThree = PIXI.Sprite.from('src/assets/img/circle_3.png');
    const circleFour = PIXI.Sprite.from('src/assets/img/circle_4.png');
    const circleFive = PIXI.Sprite.from('src/assets/img/circle_5.png');
    const circleSix = PIXI.Sprite.from('src/assets/img/circle_6.png');
    const circleSeven = PIXI.Sprite.from('src/assets/img/circle_7.png');
    const circleEight = PIXI.Sprite.from('src/assets/img/circle_8.png');
    const circleNine = PIXI.Sprite.from('src/assets/img/circle_9.png');

    let arrCircle = [circleOne, circleTwo, circleThree, circleFour, circleFive, circleSix, circleSeven, circleEight, circleNine];

    for(let i = 0; i < arrCircle.length; i++) {
      arrCircle[i].anchor.set(0.5);
      arrCircle[i].x = x;
      arrCircle[i].y = y;
      setTimeout(() => {
        container.addChild(arrCircle[i]);
        app.stage.addChild(container);
      }, 50 * i)
    }
  }

  let arrDogs = [dog1, dog2, dog3, dog4, dog5];

  for (let i = 0; i < arrDogs.length; i++) {
    arrDogs[i].interactive = true;
  }

  function doggy(x, y, mirror, size, dogNum) {
    dogNum.anchor.set(0.5);
    dogNum.scale.x = size;
    dogNum.scale.y = dogNum.scale.x;
    dogNum.x = x;
    dogNum.y = y;
    if (mirror) {
      dogNum.scale.x *= -1;
    }
    dogNum.once('pointertap', (event) => {
      circleRender(x, y)
      counter()
    });
  }

  doggy(100, 200, 1, 0.8, dog1)
  doggy(-100, 200, 0, 0.8, dog2)
  doggy(100, -200, 1, 0.8, dog3)
  doggy(300, 200, 0, 0.8, dog4)
  doggy(-310, -200, 0, 0.8, dog5)

  container.addChild(bgFront, dog1, dog2, dog3, dog4, dog5);
  app.stage.addChild(container);
}

function finish() {
  const finishBlock = document.querySelector('.finish')

  if(!finishBlock) return

  finishBlock.classList.add('active')

  setTimeout(() => {
    finishBlock.classList.add('animation')
  }, 1000)
}

start()
game()
