/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

const menu = (arr) => {
  // Create element
  const create = (
    e,
    selector = undefined
  ) => {
    let element;

    // Check if params exist, then do following
    if (typeof e === 'string' && selector) {

      // Create element
      element = document.createElement(e);

      // Add class
      element.classList.toggle(selector);

      return element;
    } else {
      return document.createElement(e);
    }
  }

  // Nodes
  let nodes;

  // New Elements
  const menu = create('div', 'menu');
  const ul = menu.append(create('ul'));

  // Create li and append
  arr.forEach(index => {
    // Create li's
    const li = create('li');

    // Text content
    li.textContent = index

    // Append li's
    return menu.children[0].appendChild(li);
  })

  // Return component
  return document.querySelector('.header').append(menu);
}

// Invocation
menu(menuItems)

// Select menu and menu list
const menuImg = document.querySelector('.menu-button');

// Event Listener
menuImg.addEventListener('click', () => {
  const menuList = document.querySelector('.menu');
  return menuList.classList.toggle('menu--open');
})