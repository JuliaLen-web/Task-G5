// const app = new PIXI.Application({
//   antialias: true,
//   transparent: true,
// });
//
// document.body.appendChild(app.view);
// app.view.id = 'pixi-canvas';
// app.stage.interactive = true;
//
// const container = new PIXI.Container();
// container.x = app.screen.width / 2;
// container.y = app.screen.height / 2;
//
// let count = 0;
//
// const dogs = {
//   dogOne: {
//     name: 'dog1',
//     x: 0.5,
//     y: 1.9,
//     circle: { one: "one", two: "two", three: "four", four: "four", five: "five", six: "six", seven: "seven", eight:"eight", nine: "nine" }
//   },
//   dogTwo: {
//     name: 'dog2',
//     x: -1.45,
//     y: -0.7,
//     circle: { one: "one", two: "two", three: "four", four: "four", five: "five", six: "six", seven: "seven", eight:"eight", nine: "nine" }
//   },
//   dogThree: {
//     name: 'dog3',
//     x: 2,
//     y: 1.5,
//     circle: { one: 1, two: 2, three: 3, four: "four", five: "five", six: "six", seven: "seven", eight:"eight", nine: "nine" }
//   }
// }
//
// function start() {
//
// }
//
// function game() {
//   for( let elem in dogs ) {
//     let dog = dogs[elem]
//
//     for( let a in dog ) {
//       let x = dog[a];
//
//       x = new PIXI.Sprite.from('src/assets/img/doggy.png');
//       dog.anchor.set(x)
//     }
//
//     container.addChild(dog);
//     app.stage.addChild(container);
//
//     dog.circle.two = PIXI.Sprite.from('src/assets/img/circle_2.png');
//     dog.circle.three = PIXI.Sprite.from('src/assets/img/circle_3.png');
//     dog.circle.four = PIXI.Sprite.from('src/assets/img/circle_4.png');
//     dog.circle.five = PIXI.Sprite.from('src/assets/img/circle_5.png');
//     dog.circle.six = PIXI.Sprite.from('src/assets/img/circle_6.png');
//     dog.circle.seven = PIXI.Sprite.from('src/assets/img/circle_7.png');
//     dog.circle.eight = PIXI.Sprite.from('src/assets/img/circle_8.png');
//     dog.circle.nine = PIXI.Sprite.from('src/assets/img/circle_9.png');
//
//     container.addChild(dog.circle.one);
//     app.stage.addChild(container);
//
//     dog.interactive = true;
//     dog.once('pointertap', () => {
//       count++
//       if (count === 5) {
//         finish()
//       }
//     })
//
//     setTimeout(() => {
//       container.addChild(dog.circle.two);
//       app.stage.addChild(container);
//     }, 50)
//     setTimeout(() => {
//       container.addChild(dog.circle.three);
//       app.stage.addChild(container);
//     }, 100)
//     setTimeout(() => {
//       container.addChild(dog.circle.four);
//       app.stage.addChild(container);
//     }, 150)
//     setTimeout(() => {
//       container.addChild(dog.circle.five);
//       app.stage.addChild(container);
//     }, 200)
//     setTimeout(() => {
//       container.addChild(dog.circle.six);
//       app.stage.addChild(container);
//     }, 250)
//     setTimeout(() => {
//       container.addChild(dog.circle.seven);
//       app.stage.addChild(container);
//     }, 300)
//     setTimeout(() => {
//       container.addChild(dog.circle.eight);
//       app.stage.addChild(container);
//     }, 350)
//     setTimeout(() => {
//       container.addChild(dog.circle.nine);
//       app.stage.addChild(container);
//     }, 400)
//   }
// }
//
// function finish() {
//   setTimeout(() => {
//     alert('CONGRATULATIONS!')
//   }, 400)
// }
//
// start()
//
// setTimeout(() => {
//   game()
// }, 500)
