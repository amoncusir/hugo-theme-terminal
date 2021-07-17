'use strict';


(function (document, window) {

  // Constants :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  const HIDDEN_CLASS = 'hidden';

  const container = document.querySelector(".container");

  const menu = document.querySelector(".menu");
  const mobileMenuTrigger = document.querySelector(".menu-trigger");

  const desktopSubMenus = document.querySelectorAll('.menu__sub-inner')
  const menuMore = document.querySelectorAll(".menu__sub-inner-more");

  const mobileQuery = getComputedStyle(document.body).getPropertyValue("--phoneWidth");

  // Functions :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  const isMobile = () => window.matchMedia(mobileQuery).matches;

  const handleMenuClasses = () => {
    mobileMenuTrigger && mobileMenuTrigger.classList.toggle(HIDDEN_CLASS, !isMobile());
    menu && menu.classList.toggle(HIDDEN_CLASS, isMobile());

    applyIterations(menuMore, i => i.classList.toggle(HIDDEN_CLASS, !isMobile()));
  };

  function isIterable(obj)
  {
    // checks for null and undefined
    if (obj == null)
    {
      return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
  }

  function applyIterations(iterable, fn)
  {
    if (isIterable(iterable)) {
      for (let item of iterable) {
        fn(item);
      }
    } else if (iterable === null) {
      fn(iterable);
    }
  }

  function setUpMenuTrigger(menuNode)
  {
    const trigger = menuNode.querySelector('.menu__sub-inner-more-trigger');
    const menuContainer = menuNode.querySelector('.menu__sub-inner-more');

    trigger.addEventListener('click', () => {

      const isMenuHidden = menuContainer.classList.contains(HIDDEN_CLASS);

      applyIterations(menuMore, i => i.classList.add(HIDDEN_CLASS));

      if (isMenuHidden)
      {
        menuContainer.classList.remove(HIDDEN_CLASS);
      }
    });
  }

  // Set Up ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  // console.log(desktopSubMenus);

  applyIterations(desktopSubMenus, i => setUpMenuTrigger(i));

  // for (let desktopSubMenuNode of desktopSubMenus)
  // {
  //   // console.log(desktopSubMenuNode);
  //   setUpMenuTrigger(desktopSubMenuNode);
  // }

  menu && menu.addEventListener("click", e => e.stopPropagation());
  applyIterations(menuMore, i => i.addEventListener("click", e => e.stopPropagation()));
  // menuMore && menuMore

  handleMenuClasses();

  document.body.addEventListener("click", () => {
    if (!isMobile()) {
      applyIterations(menuMore, i => i.classList.add(HIDDEN_CLASS));
    } else if (menu && !menu.classList.contains(HIDDEN_CLASS)) {
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

  // desktopMenuTrigger &&
  // desktopMenuTrigger.addEventListener("click", e => {
  //   e.stopPropagation();
  //   menuMore && menuMore.classList.toggle(HIDDEN_CLASS);
  //
  //   if (menuMore.getBoundingClientRect().right > container.getBoundingClientRect().right) {
  //     menuMore.style.left = "auto";
  //     menuMore.style.right = 0;
  //   }
  // });

})(document, window);
