//导航栏互动
class Nav{
  constructor(className){
    this.className=className
  }
  Move(){
    d3.select("."+this.className)//选择对应a标签
      .on("mouseover",function(){
        d3.select("."+this.className+" img")
          .attr("src","./lib/images/Nav/nav_"+this.className+"_color.png")
    
        d3.select("."+this.className+"_P")
          .attr("style",()=>{
            if(this.className=="Home"){
              return "color:red"
            }else if(this.className=="Mine"){
              return "color:rgb(9 126 194)"
            }else{
              return "color:rgb(6 163 61)"
            }
          })
      })
      .on("mouseout",function(){
        d3.select("."+this.className+" img")
          .attr("src","./lib/images/Nav/nav_"+this.className+".png")
        
          d3.select("."+this.className+"_P")
          .attr("style","#FFF")
      })
  }
}

//图标元素互动
class Action{
  constructor(className){
    this.className = className
  }
  Move(){
    d3.select("."+this.className)
      .on("mouseover",()=>{
        d3.select("."+this.className)
          .attr("src","./lib/images/Items/"+this.className+"_Animation.webp")
      })
      .on("mouseout",()=>{
        d3.select("."+this.className)
          .attr("src","./lib/images/Items/"+this.className+".png")
      })
  }
}

//导航栏互动
//Main
//首页
var Home = new Nav("Home").Move()
//介绍
var Menu = new Nav("Mine").Move()
//照片
var Picture = new Nav("Picture").Move()

//图标元素互动
//不死图腾
var Totem_of_Undying = new Action("Totem_of_Undying").Move()
//末影之眼
var Eye_of_Ender = new Action("Eye_of_Ender").Move()
//悦灵
var Allay = new Action("Allay").Move()
//鹦鹉
var Cyan_Parrot = new Action("Cyan_Parrot").Move()
//发光鱿鱼
var Glow_Squid = new Action("Glow_Squid").Move()
//美西螈
var Panda = new Action("Panda").Move()

//导航栏样式
window.onscroll= function(){

  var t = document.documentElement.scrollTop||document.body.scrollTop;

  if(t>=92){
    document.getElementById("Nav")
            .style
            .backgroundImage="url('./lib/images/top_bg_b.png')"
  }


  if(t<=0){
    document.getElementById("Nav")
            .style
            .backgroundImage="url('./lib/images/nav_bg_a.jpg')"
  }
}