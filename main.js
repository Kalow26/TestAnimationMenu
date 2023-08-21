const color = [
  {
    color: "black",
    code: "#191D1C"
  },
  {
    color: "camel",
    code: "#BDB8B4"
  },
  {
    color: "blackCamel",
    code: "#959185"
  },
  {
    color: "brown",
    code: "#534D40"
  },
  {
    color: "lightGrey",
    code: "#BEC5BD"
  },
]




const menuContainer = document.querySelector('.menu');
const menuBtn = document.querySelector(".btn");
const menuList = document.querySelectorAll(".menu-item-c");
const bodyColor = document.querySelector("[data-color]")
const body = document.querySelector("body");

menuBtn.addEventListener ("click", () => {

    if (menuBtn.dataset.name==="menu") {
      menuBtn.dataset.name="close"
      menuBtn.innerText = "- Close"
      gsap.to(menuContainer, { y: 0, duration: 1.2, ease: "back", display:"block" });
      menuList.forEach((item, index) => {
        item.addEventListener("mouseover", () => {
            body.style.backgroundColor = color[index].code
        })
        item.addEventListener("mouseout", () => {
          body.style.backgroundColor = "";
      });
      })
    } else {
      menuBtn.dataset.name="menu"
      menuBtn.innerText = "+ Menu"
      gsap.to(menuContainer, { y: '-100vw', ease: "circ.out", display:"none"  })
    }
    
})