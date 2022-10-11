const allElements = document.getElementById("wrapper-all").children;
const boxes = Array.from(allElements);
let width=window.innerWidth
window.addEventListener("resize",()=>{
width=window.innerWidth
})

//console.log(width)

boxes.forEach((el) => {
	const buttonFill = el.querySelector(".button-fill");
	const colorTxt = getComputedStyle(el).getPropertyValue("background-color");
	const buttonText = el.querySelector(".button-txt");
    const buttonBody = el.querySelector(".button");
	
	console.log( "width",el.getBoundingClientRect().width )


	el.addEventListener("mouseenter", () => {
		if(width>700){
			console.log("YESS")
		buttonFill.classList.add("fill-full");
		buttonText.style.color = colorTxt;
        gsap.to(buttonBody,.3,{y:-15})
		}
	});

	el.addEventListener("mouseleave", () => {
		if(width>700){
		buttonFill.classList.remove("fill-full");
		buttonText.style.color = "#eff6ef";
        gsap.to(buttonBody,.3,{y:0})
		}
	});

});



window.addEventListener('load',()=>{

	let promise = new Promise ((res)=>{
		boxes.forEach((el,i)=>{
			gsap.set(el,{opacity:0})
			el.style.zIndex=boxes.length-i
			res()
		})
	})

	promise.then(()=>{
		const tl = gsap.timeline({})
		tl.to(boxes[0],.3,{opacity:1,x:0,delay:1})
		    .to(boxes[1],.3,{opacity:1,x:0},">.1")
			.to(boxes[2],.3,{opacity:1,x:0},">.1")

		tl.play()
	})

} )