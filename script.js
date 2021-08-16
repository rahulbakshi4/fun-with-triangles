// Angle Sum Checker

const angleONe = document.querySelector('#angleOne')
const angleTwo = document.querySelector('#angleTwo')
const angleThree = document.querySelector('#angleThree')
const angleCheckbtn = document.querySelector('#angleCheck-btn')
const outputAngleSum = document.querySelector('#output-angleSum')

const angleSumCheck = (e) =>{

     let one = Number(angleONe.value)
     let two = Number(angleTwo.value)
     let three = Number(angleThree.value)
      
    let sum = Number(one+two+three)

    e.preventDefault()
    if (sum === 180){
outputAngleSum.innerText = "You Got a Triangle"
    }
    else{
        outputAngleSum.innerText='No triangle for you'
    }
}
angleCheckbtn.addEventListener('click',angleSumCheck)


// Find Hypotenuse

const base = document.querySelector('#base')
const height = document.querySelector('#height')
const findBtn = document.querySelector('#findHypotenuse-btn')
const hypotenuse = document.querySelector('#output-hypotenuse')

const findHypotenuse = (e) =>{
  e.preventDefault();
    let b = Number(base.value)
    let h = Number(height.value)
    let hyp = Math.sqrt(Math.pow(b,2)+Math.pow(h,2))
    console.log(hyp)
   hypotenuse.innerText = `Hypotenuse = ${hyp}`
    
}
findBtn.addEventListener('click',findHypotenuse)

// Find Area
// option1
const areaBase = document.querySelector('#baseForArea')
const areaHeight = document.querySelector('#heightForArea')
const findAreaBtn = document.querySelector('#findArea-btn')
const areaOuput = document.querySelector('#areaOuput')

const findArea = (e) => {
    e.preventDefault()
    areaOuput.innerText = `The area of triangle is ${0.5*areaBase.value*areaHeight.value} sq units.`
     
}
findAreaBtn.addEventListener('click',findArea)
// option2
const sideOne = document.querySelector('#side1')
const sideTwo = document.querySelector('#side2')
const sideThree = document.querySelector('#side3')
const AreaBtn = document.querySelector('#findAreaSide-btn')
const areaSideOutput = document.querySelector('#areaAllSideOuput')

const findAreaSide = (e) =>{
    e.preventDefault()
    let a = Number(sideOne.value);
    let b = Number(sideTwo.value);
    let c = Number(sideThree.value);
    
    let s = (a+b+c)/2;
    let area = Math.sqrt( s*(s - a)*(s - b)*(s - c))

    areaSideOutput.innerText = `the area of triangle is ${area} sq units.`
}
AreaBtn.addEventListener('click',findAreaSide)