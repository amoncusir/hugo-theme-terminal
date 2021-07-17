'use strict';


(function (document, window) {

  // Constants :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  const HIDDEN_CLASS = 'hidden';

  const container = document.querySelector(".container");

  const menu = document.querySelector(".menu");
  const mobileMenuTrigger = document.querySelector(".menu-trigger");

  // const desktopMenuTrigger = document.querySelector(".menu__sub-inner-more-trigger");

  const desktopSubMenus = document.querySelector('.menu__sub-inner')

  const menuMore = document.querySelector(".menu__sub-inner-more");

  const mobileQuery = getComputedStyle(document.body).getPropertyValue("--phoneWidth");

  // Functions :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  const isMobile = () => window.matchMedia(mobileQuery).matches;

  const handleMenuClasses = () => {
    mobileMenuTrigger && mobileMenuTrigger.classList.toggle(HIDDEN_CLASS, !isMobile());
    menu && menu.classList.toggle(HIDDEN_CLASS, isMobile());
    menuMore && menuMore.classList.toggle(HIDDEN_CLASS, !isMobile());
  };

  function setUpMenuTrigger(menuNode)
  {
    const trigger = menuNode.querySelector('.menu__sub-inner-more-trigger');
    const menuContainer = menuNode.querySelector('.menu__sub-inner-more');

    trigger.addEventListener('click', () => {

      const isMenuHidden = menuContainer.classList.contains(HIDDEN_CLASS);

      menuMore.classList.add(HIDDEN_CLASS);

      if (isMenuHidden)
      {
        menuContainer.classList.remove(HIDDEN_CLASS);
      }
    });
  }

  // Set Up ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  for (let desktopSubMenuNode of desktopSubMenus)
  {
    console.log(desktopSubMenuNode);
    setUpMenuTrigger(desktopSubMenuNode);
  }

  menu && menu.addEventListener("click", e => e.stopPropagation());
  menuMore && menuMore.addEventListener("click", e => e.stopPropagation());

  handleMenuClasses();

  document.body.addEventListener("click", () => {
    if (!isMobile() && menuMore && !menuMore.classList.contains(HIDDEN_CLASS)) {
      menuMore.classList.add(HIDDEN_CLASS);
    } else if (isMobile() && menu && !menu.classList.contains(HIDDEN_CLASS)) {
      menu.classList.add(HIDDEN_CLASS);
    }
  });

  window.addEventListener("resize", handleMenuClasses);

// Mobile menu

  mobileMenuTrigger &&
  mobileMenuTrigger.addEventListener("click", e => {
    e.stopPropagation();
    menu && menu.classList.toggle(HIDDEN_CLASS);
  });

// Desktop menu

  desktopMenuTrigger &&
  desktopMenuTrigger.addEventListener("click", e => {
    e.stopPropagation();
    menuMore && menuMore.classList.toggle(HIDDEN_CLASS);

    if (menuMore.getBoundingClientRect().right > container.getBoundingClientRect().right) {
      menuMore.style.left = "auto";
      menuMore.style.right = 0;
    }
  });

})(document, window);
