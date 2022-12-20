
const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const isVisible = 'is-visible';
const serviceClose = '[data-service]';

// this will store any element that has "[data-open]" in a node list 
const openModal = document.querySelectorAll(modalOpen);

// this will store any element that has "[data-close]" in a node list 
const closeModal = document.querySelectorAll(modalClose);

//
const closeService = document.querySelectorAll(serviceClose);


// for of loop to iterate through node list of queried elements above 
//  and adding eventlistener to each one 
for (const elm of openModal) { // open Modal buttons
   elm.addEventListener('click', function() {
      const modalId = this.dataset.open;  // "this" is referring to the parent Element
      document.getElementById(modalId).classList.add(isVisible)
   })
}

for (const elm of closeModal) { // close modal buttons 
   elm.addEventListener('click', function() {
      this.parentElement.parentElement.parentElement.classList.remove(isVisible)
   })
}




//// -------------------- SERVICES STUFF (portfolio) ------------------------ //////

   const dataFilter = '[data-filter]';
   const servicesData = "[data-item]";
   const searchBox = document.querySelector('#search');
   const filterLink = document.querySelectorAll(dataFilter); //  Node list of all HTML tags with data-filter
   const servicesItems = document.querySelectorAll(servicesData); //  Node list of all HTML tags with data-item

   // filtering loop
   for (const link of filterLink) {
      link.addEventListener('click', function() {
         setActive(link, '.filter-link');
         const filter = this.dataset.filter;
         servicesItems.forEach((card) => {
            if (filter === 'all') {
               card.style.display = 'block';
            } else if (card.dataset.item === filter) {
               card.style.display = 'block';
            } else {
               card.style.display = 'none';
            }
         })
      })
   }


// Modals 

document.addEventListener('click', (e) => {
   if (e.target === document.querySelector('.modal.is-visible')) {
      document.querySelector('.modal.is-visible').classList.remove(isVisible);
   }
})

document.addEventListener('keyup', (e) => {
   if(e.key === 'Escape') {
      document.querySelector('.modal.is-visible').classList.remove(isVisible);
   }
});

for (const elm of closeService) {
   elm.addEventListener("click", function() {
      console.log(elm)
      this.parentElement.parentElement.parentElement.classList.remove(isVisible)
   })
}