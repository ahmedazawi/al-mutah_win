async function fetchNum() {
  let response = await fetch(
    "https://ur-task.com/msmar/portal/template/almutah-exchange"
  );
  let data = await response.json();
  document.getElementById("sup-coin").innerHTML = data[0].data.Supply;
  document.getElementById("dem-coin").innerHTML = data[0].data.Demand;
}
fetchNum();

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
