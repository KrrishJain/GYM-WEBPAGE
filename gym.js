var page1 = gsap.timeline();

page1
  .from("#main #img1",{
    opacity:0,
    scale:0,
    duration:1,
  })
  .from("#head",{
    opacity:0,
    y:-1000,
    duration:1,
  })
   .from("#para",{
    opacity:0,
    scale:0,
    duration:1,
   }),
   
  gsap.from("#btn #btn1",{
    x:-1000,
    delay:2.5,
    duration:1,
   }),
   gsap.from("#btn2",{
    x:1000,
    delay:2.5,
    duration:1,
   })


  gsap.from(["#pic1","#pic2","#pic3","#pic4"],{
    scrollTrigger:{
      trigger:["#pic1","#pic2","#pic3","#pic4"],
      scroller:"body",      
    },
    opacity:0,
    x:-500,
    duration:1,
  })
 gsap.from("#part2",{
    scrollTrigger:{
      trigger:"#part2",
      scroller:"body",      
      onToggle: self => console.log("toggled. active?", self.isActive)
    },
    opacity:0,
    x:500,
    duration:1,
 })
  gsap.from(["#start","#h3","#btn-start"],{
    scrollTrigger:{
      trigger:["h3","#btn-start"],
      scroller:"body",      
    },
    opacity:0,
    x:-500,
    duration:1,
 })
   gsap.from("#page4-head",{
      scrollTrigger:{
      trigger:"#page4-head",
      scroller:"body",      
    },
    opacity:0,
    x:-500,
    duration:1,
 })
   gsap.from(["#card1","#card2","#card3","#card4"],{
      scrollTrigger:{
      trigger:"#page4-head",
      scroller:"body",      
    },
    opacity:0,
    y:1000,
    duration:3,
 })
