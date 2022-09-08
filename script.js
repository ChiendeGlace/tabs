const tabs = document.getElementsByClassName('tab');
const tabContents = document.getElementsByClassName('tab-content');
const tabsArray = Array.from(tabs);
const tabContentsArray = Array.from(tabContents);
const currentOn = document.querySelector('.on');
const currentShown = document.querySelector('.shown');
const showTabs = (e, i) => {
  currentOn.classList.remove('on');
  console.log(currentOn);
  tabsArray[i].classList.add('on');
  currentShown.classList.remove('shown');
  tabContentsArray[i].classList.add('shown');
};
tabsArray[1].addEventListener('click', showTabs(i));


