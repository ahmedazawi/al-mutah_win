let sup1;
let dem1;
async function fetchNum() {
  let response = await fetch("https://tough-cheetah-84.loca.lt/port");
  let data = await response.json();

  let myFunc = (sup) => Number(sup);
  let supply = Array.from(String(data.supply), myFunc);
  let demand = Array.from(String(data.demand), myFunc);

  sup1 = supply.slice(0, 3).join("") + "," + supply.slice(3, 6).join("");
  dem1 = demand.slice(0, 3).join("") + "," + demand.slice(3, 6).join("");

  document.getElementById("sup-coin").setAttribute("akhi", data.supply);
  document.getElementById("dem-coin").setAttribute("akhi", data.demand);

  animateNumbers();
  setTimeout(() => {
    document.getElementById("sup-coin").innerHTML = sup1;
    document.getElementById("dem-coin").innerHTML = dem1;
  }, 2000);
}
// fetchNum();

const animateNumbers = () => {
  const counters = document.querySelectorAll(".ex-num");
  const speed = 200;

  counters.forEach((counter) => {
    const animate = () => {
      const value = +counter.getAttribute("akhi");
      const data = +counter.innerText;

      const time = value / speed;
      if (data < value) {
        counter.innerText = Math.ceil(data + time);
        setTimeout(animate, 1);
      } else {
        counter.innerText = value;
      }
    };

    animate();
  });
};

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

const switchToEnglish = () => {
  setCookie("LANG", "EN", 7);
  // window.location.href = "/";
  window.location.reload();
};
const switchToArabic = () => {
  setCookie("LANG", "AR", 7);
  window.location.reload();
};

// active nav-link on navbar

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav-link");

window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 300) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};
