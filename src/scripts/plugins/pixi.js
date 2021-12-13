import doggyImg from '/assets/img/doggy.png'
import bgImg from '/assets/img/back_five_dogs.jpg'
import circleImgOne from '/assets/img/circle_1.png'
import circleImgTwo from '/assets/img/circle_2.png'
import circleImgThree from '/assets/img/circle_3.png'
import circleImgFour from '/assets/img/circle_4.png'
import circleImgFive from '/assets/img/circle_5.png'
import circleImgSix from '/assets/img/circle_6.png'
import circleImgSeven from '/assets/img/circle_7.png'
import circleImgEight from '/assets/img/circle_8.png'
import circleImgNine from '/assets/img/circle_9.png'

window.addEventListener('load', () => {
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

    if (!startBlock) return

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
    const bgFront = PIXI.Sprite.from(bgImg);
    bgFront.anchor.set(0.5);

    const dog1 = PIXI.Sprite.from(doggyImg);
    const dog2 = PIXI.Sprite.from(doggyImg);
    const dog3 = PIXI.Sprite.from(doggyImg);
    const dog4 = PIXI.Sprite.from(doggyImg);
    const dog5 = PIXI.Sprite.from(doggyImg);

    let count = 0

    function counter() {
      count++
      if (count === 5) {
        finish()
      }
    }

    function circleRender(x, y) {
      const circleOne = PIXI.Sprite.from(circleImgOne);
      const circleTwo = PIXI.Sprite.from(circleImgTwo);
      const circleThree = PIXI.Sprite.from(circleImgThree);
      const circleFour = PIXI.Sprite.from(circleImgFour);
      const circleFive = PIXI.Sprite.from(circleImgFive);
      const circleSix = PIXI.Sprite.from(circleImgSix);
      const circleSeven = PIXI.Sprite.from(circleImgSeven);
      const circleEight = PIXI.Sprite.from(circleImgEight);
      const circleNine = PIXI.Sprite.from(circleImgNine);

      let arrCircle = [circleOne, circleTwo, circleThree, circleFour, circleFive, circleSix, circleSeven, circleEight, circleNine];

      for (let i = 0; i < arrCircle.length; i++) {
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

    function dogRender(x, y, mirror, size, dogNum) {
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

    if (window.innerHeight > window.innerWidth) {
      dogRender(70, 0, 1, 0.8, dog1)
      dogRender(-100, 100, 0, 0.8, dog2)
      dogRender(150, -110, 1, 0.8, dog3)
      dogRender(50, 200, 0, 0.8, dog4)
      dogRender(-170, -200, 0, 0.8, dog5)
    } else {
      dogRender(0, 0, 1, 0.8, dog1)
      dogRender(-300, 40, 0, 0.8, dog2)
      dogRender(90, -110, 1, 0.8, dog3)
      dogRender(250, 100, 0, 0.8, dog4)
      dogRender(-190, -90, 0, 0.8, dog5)
    }

    container.addChild(bgFront, dog1, dog2, dog3, dog4, dog5);
    app.stage.addChild(container);
  }

  function finish() {
    const finishBlock = document.querySelector('.finish')

    if (!finishBlock) return

    finishBlock.classList.add('active')

    setTimeout(() => {
      finishBlock.classList.add('animation')
    }, 1000)
  }

  start()
  game()
})
