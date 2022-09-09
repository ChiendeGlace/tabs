const tabs = document.getElementsByClassName('tab');
const tabsArray = Array.from(tabs);
const tabContents = document.getElementsByClassName('tab-content');
const tabContentsArray = Array.from(tabContents);
tabsArray.forEach(tab => tab.addEventListener('click', e => {
  let thisTab = e.target;
  let myNum = thisTab.dataset.tab;
  
  tabsArray.forEach(tab => tab.classList.remove('on'));
  tabContentsArray.forEach(tab => tab.classList.remove('shown'));

  thisTab.classList.add('on');
  document.querySelector(`.tab-content[data-target='${myNum}'`).classList.add('shown');
}));



