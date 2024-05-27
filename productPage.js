
const menu = document.getElementById("menu");
const actions = document.getElementById("actions");
const test = document.getElementById("test");
menu.addEventListener("click",()=>{
    hundleMenu();

})

function hundleMenu(){
menu.classList.toggle("is-active");
actions.classList.toggle("is-active");
test.classList.toggle("is-active");
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzm6TB78yDQl0TO8HYS4KXMNhdxcJSZiEUsESz_9Sy4YnLt1KR6Vo8i2P8pbgMdMJzG/exec'

const form = document.forms['contact-form']
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => window.open('index.html') )
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
  }
  )