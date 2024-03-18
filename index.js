const canvas = document.querySelector('canvas')
const d = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const imgPLAY = document.getElementById("playerrah")
imgPLAY.style.width = '80px'
imgPLAY.style.height = '80px'
console.log(imgPLAY)

const bullet1 = document.getElementById("bullet1")
const bullet2 = document.getElementById("bullet2")
const bullet3 = document.getElementById("bullet3")
const bullet4 = document.getElementById("bullet4")

const fastbullet1 = document.getElementById("fastbullet1")
const fastbullet2 = document.getElementById("fastbullet2")
const fastbullet3 = document.getElementById("fastbullet3")
const fastbullet4 = document.getElementById("fastbullet4")

let gameOver = false

class player {
    constructor({position, velocity}){
        this.position = position;
        this.velocity = velocity;
    }
    
    draw(){
        d.clearRect(550, 150, 800, 800)
        d.drawImage(imgPLAY,this.position.x-40,this.position.y-40)
        d.beginPath

        d.closePath
        d.strokeStyle = 'black'
        d.stroke();
        

        d.beginPath();
        d.rect(550, 150, 800, 800);
        d.closePath
        d.strokeStyle = 'red'
        d.stroke();
    } 

    update(){
        d.strokeStyle = 'WHITE'; 
        this.draw()
        
    }
}

const you = new player({
    position: { x: 950, y: 550},
    velocity: { x: 0, y: 0 },
  })
  
you.draw()

class straightbullet{
    constructor({position,speed,facing,orientation}){
        this.position = position
        this.speed = speed
        this.facing = facing
        this.orientation = orientation
    }
    
    draw(){
        if(this.facing == "west"){
            d.beginPath
            d.drawImage(bullet2,this.position.x-40,this.position.y-40)
            d.closePath
            d.strokeStyle = 'red'
            d.stroke();
        }else if(this.facing == "east"){
            d.beginPath
            d.drawImage(bullet1,this.position.x-40,this.position.y-40)
            d.closePath
            d.strokeStyle = 'red'
            d.stroke();
        }
        else if(this.facing == "north"){
            d.beginPath
            d.drawImage(bullet3,this.position.x-40,this.position.y-40)
            d.closePath
            d.strokeStyle = 'red'
            d.stroke();
        }else if(this.facing == "south"){
            d.beginPath
            d.drawImage(bullet4,this.position.x-40,this.position.y-40)
            d.closePath
            d.strokeStyle = 'red'
            d.stroke();
        }
        
    }
    update(){
        this.draw()
        
            
        
        var attack = "bullets" + this.attacknumber
        if (this.orientation == "horizontal" && this.position.x>=590 && this.position.x<=((1300/this.speed)*this.speed)){
            this.position.x += this.speed 
        } else if (this.orientation == "vertical" && this.position.y>=190 && this.position.y<=((910/this.speed)*this.speed)){
            this.position.y += this.speed
        }else if (this.orientation == "horizontal" && this.position.x>=((1300/this.speed)*this.speed)){
            this.position.x = 590
        }else if (this.orientation == "horizontal" && this.position.x<=((590/this.speed)*this.speed)){
            this.position.x = 1300
        } else if (this.orientation == "vertical" && this.position.y>=((910/this.speed)*this.speed)){
            this.position.y = 190
        }

        if (detectcollision(you,this.position)==true){
            gameOver = true
            }else{
                
            }
    }
}
var fastcount = 0
class fastbullet{
    constructor({position,speed,facing,orientation,atkspd}){
        this.position = position
        this.speed = speed
        this.facing = facing
        this.orientation = orientation
        this.atkspd = atkspd
    }
    
    draw(){
        if (fastcount>=this.atkspd){
            if(this.facing == "west"){
                d.beginPath
                d.drawImage(fastbullet2 ,this.position.x-40,this.position.y-40)
                d.closePath
                d.strokeStyle = 'red'
                d.stroke();
            }else if(this.facing == "east"){
                d.beginPath
                d.drawImage(fastbullet1,this.position.x-40,this.position.y-40)
                d.closePath
                d.strokeStyle = 'red'
                d.stroke();
            }
            else if(this.facing == "north"){
                d.beginPath
                d.drawImage(fastbullet3,this.position.x-40,this.position.y-40)
                d.closePath
                d.strokeStyle = 'red'
                d.stroke();
            }else if(this.facing == "south"){
                d.beginPath
                d.drawImage(fastbullet4,this.position.x-40,this.position.y-40)
                d.closePath
                d.strokeStyle = 'red'
                d.stroke();
            }}else{
                if (this.facing == 'east'){
                    d.beginPath
                    d.rect(this.position.x-50,this.position.y+10,800,1)
                    d.closePath
                    d.strokeStyle = 'red'
                    d.stroke();
                }else if (this.facing == 'west'){
                    d.beginPath
                    d.rect(this.position.x-750,this.position.y+10,800,1)
                    d.closePath
                    d.strokeStyle = 'red'
                    d.stroke();
                }else if (this.facing == 'north'){
                    d.beginPath
                    d.rect(this.position.x+10,this.position.y-750,1,800)
                    d.closePath
                    d.strokeStyle = 'red'
                    d.stroke();
                }else if (this.facing == 'south'){
                    d.beginPath
                    d.rect(this.position.x+10,this.position.y-50,1,800)
                    d.closePath
                    d.strokeStyle = 'red'
                    d.stroke();
                }
            }
        }
        
        
   
    update(){
        this.draw()
        fastcount++
        if (fastcount>=this.atkspd){
            if (this.orientation == "horizontal" && this.position.x>=590 && this.position.x<=((1300/this.speed)*this.speed)){
                this.position.x += this.speed 
            } else if (this.orientation == "vertical" && this.position.y>=190 && this.position.y<=((910/this.speed)*this.speed)){
                this.position.y += this.speed
            }else if (this.orientation == "horizontal" && this.position.x>=((1300/this.speed)*this.speed)){
                this.position.x = 590
            }else if (this.orientation == "horizontal" && this.position.x<=((590/this.speed)*this.speed)){
                this.position.x = 1300
            } else if (this.orientation == "vertical" && this.position.y>=((910/this.speed)*this.speed)){
                this.position.y = 190
            }else if (this.orientation == "vertical" && this.position.y<=((190/this.speed)*this.speed)){
                this.position.y = 910
            }
    
            if (detectcollision(you,this.position)==true){
                gameOver = true
                }else{
    
                }
        }
       
    }
}

var longcount = 0
class longbullet{
    constructor({position,facing,orientation,atkspd}){
        this.position = position
        this.facing = facing
        this.orientation = orientation
        this.atkspd = atkspd
    }
    
    draw(){
         if (longcount >= this.atkspd){
            if(this.facing == "east"){
                d.beginPath
                d.drawImage(longbullet1,this.position.x-40,this.position.y-40)
                d.closePath
                d.strokeStyle = 'red'
                d.stroke();
            }else if(this.facing == "north"){
                d.beginPath
                d.drawImage(longbullet2,this.position.x-40,this.position.y-40)
                d.closePath
                d.strokeStyle = 'red'
                d.stroke();
            }
         }else{
            if(this.facing == "east"){
                d.beginPath
                d.rect(this.position.x,this.position.y+70,770,1)
                d.closePath
                d.strokeStyle = 'red'
                d.stroke();
            }else if(this.facing == "north"){
                d.beginPath
                d.rect(this.position.x+67,this.position.y,1,770)
                d.closePath
                d.strokeStyle = 'red'
                d.stroke();
            }
         }
        
    }
    update(){
        this.draw()
        longcount++
        
        if (this.facing == 'north' && longcount >= this.atkspd){
            if (detectcollisionlongver(you,this.position)==true){
                gameOver = true
             }else{
                
             }
        }else if (this.facing == 'east' && longcount >= this.atkspd){
            if (detectcollisionlonghor(you,this.position)==true){
                gameOver = true
             }else{
                
             }
        }
    }
}


const bullets1 = [
    new longbullet({
        position: { x:566, y: 200},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 500
      }),
      new longbullet({
        position: { x:566, y: 350},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 500
      }),
      new longbullet({
        position: { x:566, y: 500},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 500
      }),
      new longbullet({
        position: { x:566, y: 650},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 500
      }),
      new longbullet({
        position: { x:566, y: 800},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 500
      })
]

const bullets2 = [
    new longbullet({
        position: { x:600, y: 160},
        facing: 'north',
        orientation: 'vertical',
        atkspd: 500
      }),
      new longbullet({
        position: { x:750, y: 160},
        facing: 'north',
        orientation: 'vertical',
        atkspd: 500
      }),
      new longbullet({
        position: { x:900, y: 160},
        facing: 'north',
        orientation: 'vertical',
        atkspd: 500
      }),
      new longbullet({
        position: { x:1050, y: 160},
        facing: 'north',
        orientation: 'vertical',
        atkspd: 500
      }),
      new longbullet({
        position: { x:1200, y: 160},
        facing: 'north',
        orientation: 'vertical',
        atkspd: 500
      })
]

const bullets3 = [
    new longbullet({
        position: { x:566, y: 150},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 700
      }),
      new longbullet({
        position: { x:566, y: 300},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 700
      }),
      new longbullet({
        position: { x:566, y: 450},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 700
      }),
      new longbullet({
        position: { x:566, y: 600},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 700
      }),
      new longbullet({
        position: { x:566, y: 750},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 700
      }),new longbullet({
        position: { x:550, y: 160},
        facing: 'north',
        orientation: 'vertical',
        atkspd: 700
      }),
      new longbullet({
        position: { x:700, y: 160},
        facing: 'north',
        orientation: 'vertical',
        atkspd: 700
      }),
      new longbullet({
        position: { x:850, y: 160},
        facing: 'north',
        orientation: 'vertical',
        atkspd: 700
      }),
      new longbullet({
        position: { x:1000, y: 160},
        facing: 'north',
        orientation: 'vertical',
        atkspd: 700
      }),
      new longbullet({
        position: { x:1150, y: 160},
        facing: 'north',
        orientation: 'vertical',
        atkspd: 700
      })
]
const bullets4 =[
    new straightbullet({
    position: { x: 1300, y: 170},
    speed: 5,
    facing: "east",
    orientation: "horizontal"
  }),new straightbullet({
        position: { x: 600, y: 320},
        speed: 5,
        facing: "east",
        orientation: "horizontal"
      }),
      new straightbullet({
        position: { x: 600, y: 470},
        speed: 5,
        facing: "east",
        orientation: "horizontal"
      }),
      new straightbullet({
        position: { x: 600, y: 620},
        speed: 5,
        facing: "east",
        orientation: "horizontal"
      }),
      new straightbullet({
        position: { x: 600, y: 770},
        speed: 5,
        facing: "east",
        orientation: "horizontal"
      }),
      new straightbullet({
        position: { x: 600, y: 920},
        speed: 5,
        facing: "east",
        orientation: "horizontal"
      }),new straightbullet({
        position: { x: 1300, y: 170},
        speed: -5,
        facing: "west",
        orientation: "horizontal"
      }),
      new straightbullet({
        position: { x: 1300, y: 320},
        speed: -5,
        facing: "west",
        orientation: "horizontal"
      }),
      new straightbullet({
        position: { x: 1300, y: 470},
        speed: -5,
        facing: "west",
        orientation: "horizontal"
      }),
      new straightbullet({
        position: { x: 1300, y: 620},
        speed: -5,
        facing: "west",
        orientation: "horizontal"
      }),
      new straightbullet({
        position: { x: 1300, y: 770},
        speed: -5,
        facing: "west",
        orientation: "horizontal"
      }),
      new straightbullet({
        position: { x: 1300, y: 920},
        speed: -5,
        facing: "west",
        orientation: "horizontal"
      })
]
const bullets5 =[
    new fastbullet({
        position: { x:600, y: 200},
        speed: 10,
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 200
    }),
    new fastbullet({
        position: { x:1300, y: 350},
        speed: -10,
        facing: 'west',
        orientation: 'horizontal',
        atkspd: 200
    }),
    new fastbullet({
        position: { x:600, y: 500},
        speed: 10,
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 200
    }),
    new fastbullet({
        position: { x:1300, y: 650},
        speed: -10,
        facing: 'west',
        orientation: 'horizontal',
        atkspd: 200
    }),
    new fastbullet({
        position: { x:600, y: 800},
        speed: 10,
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 200
    })
]
const bullets6 =[
    new fastbullet({
        position: { x:1300, y: 250},
        speed: -10,
        facing: 'west',
        orientation: 'horizontal',
        atkspd: 200
    }),
    new fastbullet({
        position: { x:600, y: 400},
        speed: 10,
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 200
    }),
    new fastbullet({
        position: { x:1300, y: 550},
        speed: -10,
        facing: 'west',
        orientation: 'horizontal',
        atkspd: 200
    }),
    new fastbullet({
        position: { x:600, y: 700},
        speed: 10,
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 200
    }),
    new fastbullet({
        position: { x:1300, y: 850},
        speed: -10,
        facing: 'west',
        orientation: 'horizontal',
        atkspd: 200
    })
]
const bullets7 = [
    new fastbullet({
        position: { x:600, y: 900},
        speed: -10,
        facing: 'north',
        orientation: 'vertical',
        atkspd: 200
    }),
    new fastbullet({
        position: { x:750, y: 200},
        speed: 10,
        facing: 'south',
        orientation: 'vertical',
        atkspd: 200
    }),
    new fastbullet({
        position: { x:900, y: 900},
        speed: -10,
        facing: 'north',
        orientation: 'vertical',
        atkspd: 200
    }),
    new fastbullet({
        position: { x:1050, y: 200},
        speed: 10,
        facing: 'south',
        orientation: 'vertical',
        atkspd: 200
    }),
    new fastbullet({
        position: { x:1200, y: 900},
        speed: -10,
        facing: 'north',
        orientation: 'vertical',
        atkspd: 200
    })
]
const bullets8 = [
    new fastbullet({
        position: { x:650, y: 200},
        speed: 10,
        facing: 'south',
        orientation: 'vertical',
        atkspd: 200
    }),
    new fastbullet({
        position: { x:800, y: 900},
        speed: -10,
        facing: 'north',
        orientation: 'vertical',
        atkspd: 200
    }),
    new fastbullet({
        position: { x:950, y: 200},
        speed: 10,
        facing: 'south',
        orientation: 'vertical',
        atkspd: 200
    }),
    new fastbullet({
        position: { x:1100, y: 900},
        speed: -10,
        facing: 'north',
        orientation: 'vertical',
        atkspd: 200
    }),
    new fastbullet({
        position: { x:1250, y: 200},
        speed: 10,
        facing: 'south',
        orientation: 'vertical',
        atkspd: 200
    })
]
const bullets9 = [
    new longbullet({
        position: { x:566, y: 800},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 20
      }),
]

const bullets10 = [
    new longbullet({
        position: { x:566, y: 700},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 20
      }),
]

const bullets11 = [
    new longbullet({
        position: { x:566, y:600},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 20
      }),
]
const bullets12 = [
    new longbullet({
        position: { x:566, y:500},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 20
      }),
]
const bullets13 = [
    new longbullet({
        position: { x:566, y:400},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 20
      }),
]
const bullets14 = [
    new longbullet({
        position: { x:566, y:300},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 20
      }),
]
const bullets15 = [
    new longbullet({
        position: { x:566, y:200},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 20
      }),
]
const bullets16 = [
    new longbullet({
        position: { x:566, y:150},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 40
      })
]
const bullets17 = [
    new longbullet({
        position: { x:566, y:200},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 20
      })
]
const bullets18 = [
    new longbullet({
        position: { x:566, y:300},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 20
      })
]
const bullets19 = [
    new longbullet({
        position: { x:566, y:400},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 20
      })
]
const bullets20 = [
    new longbullet({
        position: { x:566, y:500},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 20
      })
]
const bullets21 = [
    new longbullet({
        position: { x:566, y:600},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 20
      })
]
const bullets22 = [
    new longbullet({
        position: { x:566, y:700},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 20
      })
]
const bullets23 = [
    new longbullet({
        position: { x:566, y:200},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 700
      }),
    new longbullet({
        position: { x:566, y:300},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 700
      }),
      new longbullet({
        position: { x:566, y:400},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 700
      }),
      new longbullet({
        position: { x:566, y:600},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 700
      }), new longbullet({
        position: { x:566, y:700},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 700
      }),
      new longbullet({
        position: { x:566, y:800},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 700
      })
]
const bullets24 = [
    new straightbullet({
        position: { x: 1300, y: 200},
        speed: -5,
        facing: "west",
        orientation: "horizontal"
      }),
      new straightbullet({
        position: { x: 1300, y: 330},
        speed: -5,
        facing: "west",
        orientation: "horizontal"
      }),
      new straightbullet({
        position: { x: 1300, y: 460},
        speed: -5,
        facing: "west",
        orientation: "horizontal"
      }),
      new straightbullet({
        position: { x: 1300, y: 590},
        speed: -5,
        facing: "west",
        orientation: "horizontal"
      }),
      new straightbullet({
        position: { x: 1300, y: 720},
        speed: -5,
        facing: "west",
        orientation: "horizontal"
      }),
      new straightbullet({
        position: { x: 1300, y: 850},
        speed: -5,
        facing: "west",
        orientation: "horizontal"
      })
]
const bullets25 = [
    new longbullet({
        position: { x:566, y:500},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 1000
      }),
    new longbullet({
        position: { x:566, y:300},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 1000
      }),
      new longbullet({
        position: { x:566, y:400},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 1000
      }),
      new longbullet({
        position: { x:566, y:600},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 1000
      }), new longbullet({
        position: { x:566, y:700},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 1000
      }), 
        new longbullet({
        position: { x:550, y:160},
        facing: 'north',
        orientation: 'vertical',
        atkspd: 1000
      }),
      new longbullet({
        position: { x:650, y:160},
        facing: 'north',
        orientation: 'vertical',
        atkspd: 1000
      }),
      new longbullet({
        position: { x:750, y:160},
        facing: 'north',
        orientation: 'vertical',
        atkspd: 1000
      }),
      new longbullet({
        position: { x:850, y:160},
        facing: 'north',
        orientation: 'vertical',
        atkspd: 1000
      }),
      new longbullet({
        position: { x:950, y:160},
        facing: 'north',
        orientation: 'vertical',
        atkspd: 1000
      }),
      new longbullet({
        position: { x:1050, y:160},
        facing: 'north',
        orientation: 'vertical',
        atkspd: 1000
      }),
      new longbullet({
        position: { x:1150, y:160},
        facing: 'north',
        orientation: 'vertical',
        atkspd: 1000
      })
]
const bullets26 = [
    new longbullet({
        position: { x:566, y:200},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 1500
      }),
    new longbullet({
        position: { x:566, y:300},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 1500
      }),
      new longbullet({
        position: { x:566, y:400},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 1500
      }),
      new longbullet({
        position: { x:566, y:600},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 1500
      }), new longbullet({
        position: { x:566, y:700},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 1500
      }), 
      new longbullet({
        position: { x:566, y:800},
        facing: 'east',
        orientation: 'horizontal',
        atkspd: 1500
      }),
      new longbullet({
        position: { x:550, y:160},
        facing: 'north',
        orientation: 'vertical',
        atkspd: 1500
      }),
      new longbullet({
        position: { x:650, y:160},
        facing: 'north',
        orientation: 'vertical',
        atkspd: 1500
      }),
      new longbullet({
        position: { x:750, y:160},
        facing: 'north',
        orientation: 'vertical',
        atkspd: 1500
      }),
      new longbullet({
        position: { x:1000, y:160},
        facing: 'north',
        orientation: 'vertical',
        atkspd: 1500
      }),
      new longbullet({
        position: { x:1050, y:160},
        facing: 'north',
        orientation: 'vertical',
        atkspd: 1500
      }),
      new longbullet({
        position: { x:1150, y:160},
        facing: 'north',
        orientation: 'vertical',
        atkspd: 1500
      }),
      new longbullet({
        position: { x:1200, y:160},
        facing: 'north',
        orientation: 'vertical',
        atkspd: 1500
      })
]
const keys ={
    w:{
        pressed:false
    },
    a:{
        pressed:false
    },
    s:{
        pressed:false
    },
    d:{
        pressed:false
    }
}
function wait(time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, time);
    });
  }
  

function detectcollision(you,straightbullet){
    testX = you.position.x
    testY = you.position.y

    if (you.position.x < (straightbullet.x-15)){
        testX = (straightbullet.x-15)
    }else if (you.position.x > (straightbullet.x+35)){
        testX = straightbullet.x+35
    }

    if (you.position.y < (straightbullet.y-5)){
        testY = (straightbullet.y-5)
    }else if (you.position.x > (straightbullet.y+25)){
        testY = (straightbullet.y+25)
    }
    distanceX = you.position.x - testX
    distanceY = you.position.y - testY

    distance = Math.sqrt(distanceX*distanceX+distanceY*distanceY)
    if (distance < 36){
        return true
    }else{
        return false
    }
    }


function detectcollisionlonghor(you,longbullet){
    testX = you.position.x
    testY = you.position.y

        if (you.position.x < (longbullet.x)){
            testX = (longbullet.x)
        }else if (you.position.x > (longbullet.x+770)){
            testX = longbullet.x+30
        }

        if (you.position.y < (longbullet.y+40)){
            testY = (longbullet.y+40)
        }else if (you.position.x > (longbullet.y+100)){
            testY = (longbullet.y+100)
        }
        distanceX = you.position.x - testX
        distanceY = you.position.y - testY

        distance = Math.sqrt(distanceX*distanceX+distanceY*distanceY)
        if (distance < 36){
            return true
        }else{
            return false
        }
    }


function detectcollisionlongver(you,longbullet){
    testX = you.position.x
    testY = you.position.y

        if (you.position.x < (longbullet.x+37)){
            testX = (longbullet.x+37)
        }else if (you.position.x > (longbullet.x+97)){
            testX = (longbullet.x+97)
        }

        if (you.position.y < (longbullet.y)){
            testY = (longbullet.y)
        }else if (you.position.x > (longbullet.y+770)){
            testY = (longbullet.y+770)
        }
        distanceX = you.position.x - testX
        distanceY = you.position.y - testY

        distance = Math.sqrt(distanceX*distanceX+distanceY*distanceY)
        if (distance < 36){
            return true
        }else{
            return false
        }
    }

    function playbullet(){
        let audio = new Audio("enemy-encounter-undertale.mp3")
         audio.play()
}
function playgaster(){
    let audio = new Audio("gasterblaster.mp3")
     audio.play()
}
function playdead(){
    let audio = new Audio("soulshatter.mp3")
     audio.play()
}
function playdeter(){
    let audio = new Audio("dertermined.mp3")
     audio.play()
}
function playwin(){
    let audio = new Audio("win.mp3")
     audio.play()
}

var count = 0
var attack = 0
var audiocount = 0
var audiocount2 = 0
var audiocount3 = 0
var audiocount4 = 0
function animate(){
    window.requestAnimationFrame(animate)
    
    if(gameOver == true){
        d.drawImage(gameover,550,150)
        if (audiocount == 0){
            playdead()
            
            audiocount =1
        }if (audiocount == 1){
            playdeter()
            
            audiocount =2
        }
    }
    if(gameOver == false){
        you.update()
        
    }
    if (count == 200){
        longcount = 0
        playgaster()
    }else if (count == 1){
        longcount = 0
        playgaster()
    }else if (count == 400){
        longcount = 0
        playgaster()
    }else if (count == 600){
        longcount = 0
    }else if (count == 701){
        playbullet()
    }else if (count == 851){
        playbullet()
    }else if (count == 951){
        playbullet()
        fastcount = 0
    }else if (count == 1051){
        playbullet()
        fastcount = 0
    }else if (count == 1151){
        playbullet()
        fastcount = 0
    }else if (count == 1251){
        longcount = 0
        playgaster()
    }else if (count == 1301){
        longcount = 0
        playgaster()
    }else if (count == 1351){
        longcount = 0
        playgaster()
    }else if (count == 1401){
        longcount = 0
        playgaster()
    }else if (count == 1451){
        longcount = 0
        playgaster()
    }else if (count == 1501){
        longcount = 0
        playgaster()
    }else if (count == 1551){
        longcount = 0
        playgaster()
    }else if (count == 1601){
        longcount = 0
        playgaster()
    }else if (count == 1651){
        longcount = 0
        playgaster()
    }else if (count == 1701){
        longcount = 0
        playgaster()
    }else if (count == 1751){
        longcount = 0
        playgaster()
    }else if (count == 1801){
        longcount = 0
        playgaster()
    }else if (count == 1851){
        longcount = 0
        playgaster()
    }else if (count == 1901){
        longcount = 0
        playgaster()
    }else if (count == 1951){
        longcount = 0
        playgaster()
    }else if (count == 1951){
        longcount = 0
        playgaster()
    }else if (count == 2201){
        longcount = 0
        playbullet()
    }else if (count == 2301){
        longcount = 0
        playbullet()
    }else if (count == 2501){
        longcount = 0
        playgaster()
    }
    if (count<= 200 && gameOver==false){
        attack = 1
        bullets1.forEach(longbullet => {
            longbullet.update()})
        count+=1
        console.log(count)
    }else if (count>= 201 && count<=400 && gameOver==false){
        attack = 2
        bullets2.forEach(longbullet => {
            longbullet.update()})
        count+=1
        console.log(count)
    }else if (count>= 401 && count<=600 && gameOver==false){
        attack= 3
        bullets3.forEach(longbullet => {
            longbullet.update()})
        count+=1
        console.log(count)
    }else if (count>= 601 && count<=700 && gameOver==false){
        count+=1
        console.log(count)
    }else if (count>= 701 && count<=850 && gameOver==false){
        attack= 4
        bullets4.forEach(straightbullet => {
            straightbullet.update()})
        count+=1
        console.log(count)
    }else if (count>= 851 && count<=950 && gameOver==false){
        attack= 5
        bullets5.forEach(fastbullet => {
            fastbullet.update()})
        count+=1
        console.log(count)
    }else if (count>= 951 && count<=1050 && gameOver==false){
        attack= 6
        bullets6.forEach(fastbullet => {
            fastbullet.update()})
        count+=1
        console.log(count)
    }else if (count>= 1051 && count<=1150 && gameOver==false){
        attack= 7
        bullets7.forEach(fastbullet => {
            fastbullet.update()})
        count+=1
        console.log(count)
    }else if (count>= 1151 && count<=1250 && gameOver==false){
        attack= 8
        bullets8.forEach(fastbullet => {
            fastbullet.update()})
        count+=1
        console.log(count)
    }else if (count>= 1251 && count<=1300 && gameOver==false){
        attack= 9
        bullets9.forEach(longbullet => {
            longbullet.update()})
        count+=1
        console.log(count)
    }else if (count>= 1301 && count<=1350 && gameOver==false){
        attack= 10
        bullets10.forEach(longbullet => {
            longbullet.update()})
        count+=1
        console.log(count)
    }else if (count>= 1351 && count<=1400 && gameOver==false){
        attack= 11
        bullets11.forEach(longbullet => {
            longbullet.update()})
        count+=1
        console.log(count)
    }else if (count>= 1401 && count<=1450 && gameOver==false){
        attack= 12
        bullets12.forEach(longbullet => {
            longbullet.update()})
        count+=1
        console.log(count)
    }else if (count>= 1451 && count<=1500 && gameOver==false){
        attack= 13
        bullets13.forEach(longbullet => {
            longbullet.update()})
        count+=1
        console.log(count)
    }else if (count>= 1501 && count<=1550 && gameOver==false){
        attack= 14
        bullets14.forEach(longbullet => {
            longbullet.update()})
        count+=1
        console.log(count)
    }else if (count>= 1551 && count<=1600 && gameOver==false){
        attack= 15
        bullets15.forEach(longbullet => {
            longbullet.update()})
        count+=1
        console.log(count)
    }else if (count>= 1601 && count<=1650 && gameOver==false){
        attack= 16
        bullets16.forEach(longbullet => {
            longbullet.update()})
        count+=1
        console.log(count)
    }else if (count>= 1651 && count<=1700 && gameOver==false){
        attack= 17
        bullets17.forEach(longbullet => {
            longbullet.update()})
        count+=1
        console.log(count)
    }else if (count>= 1701 && count<=1750 && gameOver==false){
        attack= 18
        bullets18.forEach(longbullet => {
            longbullet.update()})
        count+=1
        console.log(count)
    }else if (count>= 1751 && count<=1800 && gameOver==false){
        attack= 19
        bullets19.forEach(longbullet => {
            longbullet.update()})
        count+=1
        console.log(count)
    }else if (count>= 1801 && count<=1850 && gameOver==false){
        attack= 20
        bullets20.forEach(longbullet => {
            longbullet.update()})
        count+=1
        console.log(count)
    }else if (count>= 1851 && count<=1900 && gameOver==false){
        attack= 21
        bullets21.forEach(longbullet => {
            longbullet.update()})
        count+=1
        console.log(count)
    }else if (count>= 1901 && count<=1950 && gameOver==false){
        attack= 22
        bullets22.forEach(longbullet => {
            longbullet.update()})
        count+=1
        console.log(count)
    }else if (count>= 1951 && count<=2200 && gameOver==false){
        attack= 23
        bullets23.forEach(longbullet => {
            longbullet.update()})
        count+=1
        console.log(count)
    }else if (count>= 2201 && count<=2300 && gameOver==false){
        attack= 24
        bullets24.forEach(straightbullet => {
            straightbullet.update()})
        count+=1
        console.log(count)
    }else if (count>= 2301 && count<=2500 && gameOver==false){
        attack= 25
        bullets25.forEach(longbullet => {
            longbullet.update()})
        count+=1
        console.log(count)
    }else if (count>= 2501 && count<=2800 && gameOver==false){
        attack= 26
        bullets26.forEach(longbullet => {
            longbullet.update()})
        count+=1
        console.log(count)
    }else if (count>=2801){
        d.drawImage(win,550,150)
        if (audiocount4 == 0){
            playwin()
            audiocount4++
        }
    }
    


   if(gameOver==false){
    if (keys.w.pressed && you.position.y>= 190) you.position.y += -4
    if (keys.a.pressed && you.position.x>= 590) you.position.x += -4
    if (keys.s.pressed && you.position.y<= 910) you.position.y += 4
    if (keys.d.pressed && you.position.x<= 1310) you.position.x += 4
   }

}

    

window.addEventListener("keydown", event => { 
    if (event.code === "KeyW") { 
      keys.w.pressed = true
    } else if (event.code === "KeyA") { 
        keys.a.pressed = true
    } else if (event.code === "KeyS") { 
        keys.s.pressed = true
    } else if (event.code === "KeyD") { 
        keys.d.pressed = true
    } else if (event.code === "KeyE") { 
        animate()
    } 
  })
  window.addEventListener("keyup", event => { 
    if (event.code === "KeyW") { 
      keys.w.pressed = false
    } else if (event.code === "KeyA") { 
        keys.a.pressed = false
    } else if (event.code === "KeyS") { 
        keys.s.pressed = false
    } else if (event.code === "KeyD") { 
        keys.d.pressed = false
    } 
  })