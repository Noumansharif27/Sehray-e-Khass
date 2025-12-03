const menuCollapseAnimation = () => {
  const menuCrossBtn = document.querySelector(".cross-btn");
  const collapseMenuOpenBtn = document.querySelector(".collapse-menu-open-btn");
  const collapseMenuBar = document.querySelector(".collapse-menu");

  collapseMenuOpenBtn.addEventListener("click", () => {
    collapseMenuBar.style.left = "0%";
  });

  menuCrossBtn.addEventListener("click", () => {
    collapseMenuBar.style.left = "-100%";
  });
};

menuCollapseAnimation();
