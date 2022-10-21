const Vwidth = 1280, Vheight = 720

var cont = document.querySelector(".cont")
var elstr = [].slice.call(document.querySelectorAll(".el"));
var closeBtnsArr = [].slice.call(document.querySelectorAll(".el_close-btn"));

setTimeout(function(){
	cont.classList.remove("s-inactive")
},200)

elstr.forEach(function ($el) {
	$el.addEventListener("click", function () {
		if (this.classList.contains("s-active")) return;
		cont.classList.add("s-el-active")
		this.classList.add("s-active");
	})
})

closeBtnsArr.forEach(function ($el) {
	$el.addEventListener("click", function (e) {
		// document.querySelector(".Video").pause() 
		e.stopPropagation()
		cont.classList.remove("s-el-active")
		document.querySelector(".el.s-active").classList.remove("s-active");
	})
})


// class Video{
// 	constructor(classname){
// 		this.classname = classname
// 	}
// 	Player(){
// 		d3.select("."+this.classname)
// 			.append("video")
// 			.attr("class","Video_"+this.classname)
// 			.attr("width",Vwidth)
// 			.attr("height",Vheight)
// 			.attr("src","./lib/video/"+this.classname+".mp4")
// 			.attr("controls","controls")
// 	}
// 	Play(){
// 		d3.select(".el")
// 			.on("click",()=>{
// 				this.Player()
// 			})
// 		d3.select("#"+this.classname)
// 			.on("click",()=>{
// 				d3.select(".Video_"+this.classname)
// 					.remove()
// 			})
// 	}
// }

// var The_wild = new Video("The_Wild").Play()
// var Caves_and_Cliffs = new Video("Caves_and_Cliffs").Play()
// var Nether = new Video("Nether").Play()
// var Buzzy_Bees = new Video("Buzzy_Bees").Play()