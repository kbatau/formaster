
function animateText(){
  var textWrapper1 = document.querySelector('.animate .letters');
  textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  var textWrapper2 = document.querySelector('.animate .letters2');
  textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter2'>$&</span>");
  
  var textWrapper3 = document.querySelector('.animate .letters3');
  textWrapper3.innerHTML = textWrapper3.textContent.replace(/\S/g, "<span class='letter3'>$&</span>");

  var textWrapper4 = document.querySelector('.animate .letters4');
  textWrapper4.innerHTML = textWrapper4.textContent.replace(/\S/g, "<span class='letter4'>$&</span>");

  var textWrapper5 = document.querySelector('.animate .letters5');
  textWrapper5.innerHTML = textWrapper5.textContent.replace(/\S/g, "<span class='letter5'>$&</span>");

  
  anime.timeline({loop: false})
  .add({
    targets:'.animate',
    delay:2000
  })
  .add({
    targets: '.animate .letter',
    opacity:1,
    scale: [0, 1],
    duration: 2250,
    elasticity: 600,
    delay: function(el, i, l) {
      return i * 50;
    }
  })
  .add({
    targets: '.animate .letter2',
    opacity:1,
    scale: [0, 1],
    duration: 2000,
    elasticity: 600,
    delay: function(el, i, l) {
      return i * 50;
    }
  })
  .add({
    targets: '.animate .letter3',
    opacity:1,
    scale: [0, 1],
    duration: 2000,
    elasticity: 600,
    delay: function(el, i, l) {
      return i * 50;
    }
  })

  .add({
    targets: '.animate .letter4',
    opacity:1,
    scale: [0, 1],
    duration: 2000,
    elasticity: 600,
    delay: function(el, i, l) {
      return i * 50;
    }
  })
  .add({
    targets: '.animate .letter5',
    opacity:1,
    scale: [0, 1],
    duration: 2000,
    elasticity: 600,
    delay: function(el, i, l) {
      return i * 50;
    }
  })
  .add({
    targets: '#kirbyButton',
    opacity:1,
    easing:'easeInExpo'
  })
}

 
  window.onload = function() {
    const flowers = document.querySelector('canvas')
flowers.width = window.innerWidth
flowers.height = window.innerHeight
const ctx = flowers.getContext('2d')

const TOTAL = 100
const petalArray = []

const petalImg = new Image()
petalImg.src = 'https://djjjk9bjm164h.cloudfront.net/petal.png'
petalImg.addEventListener('load', () => {
  for (let i = 0; i < TOTAL; i++) {
    petalArray.push(new Petal())
  }
  render()
})

function render() {
  ctx.clearRect(0, 0, flowers.width, flowers.height)
  petalArray.forEach(petal => petal.animate())
  window.requestAnimationFrame(render)
}

window.addEventListener('resize', () => {
  flowers.width = window.innerWidth
  flowers.height = window.innerHeight
})

let mouseX = 0
function touchHandler(e) {ccccc
  mouseX = (e.clientX || e.touches[0].clientX) / window.innerWidth
}


// Petal class
class Petal {
  constructor() {
    this.x = Math.random() * flowers.width
    this.y = (Math.random() * flowers.height * 2) - flowers.height
    this.w = 25 + Math.random() * 15
    this.h = 20 + Math.random() * 10
    this.opacity = this.w / 40
    this.flip = Math.random()

    this.xSpeed = 1.5 + Math.random() * 1
    this.ySpeed = 1 + Math.random() * 1
    this.flipSpeed = Math.random() * 0.03
  }

  draw() {
    if (this.y > flowers.height || this.x > flowers.width) {
      this.x = -petalImg.width
      this.y = (Math.random() * flowers.height * 2) - flowers.height
      this.xSpeed = 1.5 + Math.random() * 2
      this.ySpeed = 1 + Math.random() * 1
      this.flip = Math.random()
    }
    ctx.globalAlpha = this.opacity
    ctx.drawImage(
      petalImg, 
      this.x, 
      this.y, 
      this.w * (0.6 + (Math.abs(Math.cos(this.flip)) / 3)), 
      this.h * (0.8 + (Math.abs(Math.sin(this.flip)) / 5))
    )
  }

  animate() {
    this.x += this.xSpeed + mouseX * 5
    this.y += this.ySpeed + mouseX * 2
    this.flip += this.flipSpeed
    this.draw()
  }
}
    animateText();
  
  }