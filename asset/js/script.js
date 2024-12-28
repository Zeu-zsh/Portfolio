let intro = document.querySelector("#intro");
let bvn = document.querySelector("#bvn");
let portFo = document.querySelector("#portfo");
let blurTheme = document.querySelector(".blur-theme");
let chooseTheme = document.querySelector("#choose-theme");
let enterDefault = document.querySelector("#enter-default");
let choosedChanger = document.querySelector(".choosed-changer");
let imgPrevIsland = document.querySelector(".img-prev-island");
let imgPrevCity = document.querySelector(".img-prev-city");
let selectedTheme = document.querySelector(".selected-theme");
let navCreationMenu = document.querySelector(".licreations");
let btnChangIsland = document.querySelector(".choosed-changer button:nth-child(2)");
let btnChang = document.querySelector(".choosed-changer button");
let mainSite = document.querySelector("#mainSite");
let loader = document.querySelector(".loader");
let defaultTheme = document.querySelector(".choosed-changer button:nth-child(3)")
let themeSwitchChek = document.querySelector(".theme-switch__checkbox");
let themeSwitch = document.querySelector(".theme-switch");
let refresh = document.querySelector(".refresh")

function changeTheme(theme) {
  const root = document.documentElement;

  if (theme === 'playa') {
    root.style.setProperty('--main-color', 'var(--playa-main)');
    root.style.setProperty('--second-color', 'var(--playa-second)');
  } else if (theme === 'city') {
    root.style.setProperty('--main-color', 'var(--city-main)');
    root.style.setProperty('--second-color', 'var(--city-second)');
  } else if (theme === 'dark') {
    root.style.setProperty('--main-color', 'var(--dark-main)');
    root.style.setProperty('--second-color', 'var(--dark-second)');
  } else if (theme === 'default') {
    root.style.setProperty('--main-color', 'var(--main-color)');
    root.style.setProperty('--second-color', 'var(--second-color)');
  }
}

refresh.addEventListener("click", reloadPage);
defaultTheme.addEventListener("click", reloadPage);
function reloadPage() {
  location.reload();
}

function defaultSetUp() {
  selectedTheme.textContent = "Thème : Mode clair";
  choosedChanger.classList.add("img-prev-island");
  mainSite.style.display = "none";
  loader.style.display = "none";
  defaultTheme.style.display = "none";  
  btnChangIsland.addEventListener("mouseover", choosedHover);
  btnChangIsland.addEventListener("mouseout", () => {
  choosedChanger.style.width = "200px"
  choosedChanger.style.height = "200px"
  });
}

function choosedHover() {
  choosedChanger.style.width = "250px"
  choosedChanger.style.height = "210px"
}

themeSwitchChek.addEventListener("click", () => {
  if (!themeSwitchChek.classList.contains("switch-check")) {
    themeSwitchChek.classList.add("switch-check");
    selectedTheme.textContent = "Thème : Mode sombre";
    changeTheme('dark')
  } else {
    themeSwitchChek.classList.remove("switch-check");
    selectedTheme.textContent = "Thème : Mode clair";
    changeTheme('default')
  }
});

choosedChanger.addEventListener("click", chooseIsland);
function chooseIsland() {
  changeTheme('playa')
  chooseTheme.classList.remove("bg-city");
  btnChangIsland.classList.remove("backIsland")
  themeSwitch.style.display = "none";
  chooseTheme.classList.add("choosed-bg-island");
  selectedTheme.textContent = "Thème : Île sélectionnée";
  chooseTheme.classList.add("bg-island");
  btnChangIsland.style.display = "none";
  themeSwitch.style.display = "none";
  setupDefault()
  setupCity()
} 
function setupCity() {
  choosedChanger.classList.remove("img-prev-island");
  choosedChanger.classList.add("img-prev-city");
  loader.style.display = "block";
  loader.addEventListener("mouseover", choosedHover);
  loader.addEventListener("mouseout", () => {
  choosedChanger.style.width = "200px"
  choosedChanger.style.height = "200px"
  });
  if (choosedChanger.classList.contains("img-prev-city")) {
    choosedChanger.addEventListener("click", chooseCity);
  }
}
function setupDefault() {
  defaultTheme.style.display = "block";
  defaultTheme.classList.add("choose-reverse");
}

function chooseCity() {
  changeTheme('city')
  themeSwitch.style.display = "none";
  defaultTheme.style.display = "none";
  blurTheme.style.flexDirection = "row-reverse";
  loader.style.display = "none";
  btnChangIsland.style.display = "block";
  choosedChanger.classList.add("img-prev-island");
  choosedChanger.classList.remove("img-prev-city");
  choosedChanger.classList.add("choose-reverse");
  chooseTheme.classList.add("bg-city");
  selectedTheme.textContent = "Thème : Ville sélectionnée";
  setupIsland()
}
function setupIsland() {
  btnChangIsland.style.width = "75%"
  btnChangIsland.style.left = "-20%"
  btnChangIsland.style.top = "40%"
  btnChangIsland.addEventListener("mouseover", () => {
  btnChangIsland.style.width = "60%"
  })
  choosedChanger.addEventListener("click", chooseIsland);
}

enterDefault.addEventListener("click", lunchIntro);

function lunchIntro() {
  chooseTheme.style.display = "none";
  intro.style.display = "flex";

  setTimeout(() => {
    mainSite.style.display = "block"; 
  }, 3000); 

}

navCreationMenu.addEventListener("mouseover", navMenuCreation);

function navMenuCreation() {
  navCreationMenu.classList.add("nav-menu");
}

navCreationMenu.addEventListener("mouseout", navCancelCreation);

function navCancelCreation() {
  navCreationMenu.classList.remove("nav-menu");
}

defaultSetUp()