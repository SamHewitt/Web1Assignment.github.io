const items = document.getElementById('items');
const list = document.getElementById('item-list');

const xhr = new XMLHttpRequest();

    // displays json file to html page
    xhr.open('GET', 'jackets.json', true);
    xhr.onload = () => {
        if (xhr.status === 200){
            const per = JSON.parse(xhr.responseText);
            //console.log(per);
            per.forEach(p => {
                 let list = document.getElementById('item-list');

            list.innerHTML = list.innerHTML + `<div class="item-listing"><br>${p.id}<br><img src="${p.img}" height="200" width = "200"></img> <br>${p.jacketName}<br> ${p.jacketType}<br> ${p.jacketSummary}</div></br>`;
            })
        }
            else if (xhr.status === 404){
            console.log("File Not Found");
        }
    }
    xhr.onerror = () =>{
        console.log(`Current Load State ${xhr.readyState}`);
    };

    xhr.send();

    // display comment to html page

    const showComment = () => {
  
      const nameVal = document.getElementById('name-input').value
      const itemVal = document.getElementById('item-input').value
      const commentVal = document.getElementById('comment-input').value
      const datetime = new Date();
      const form = document.getElementById('f1')
      if (nameVal.length <= 0){
        alert("please enter a name")
      } 
      if (itemVal.length <= 0){
        alert("please enter an Item")
      }   
      if (commentVal.length <= 0){
        alert("please enter a comment")
      }
      if (((nameVal.length >= 1)&&(itemVal.length >= 1) && (commentVal.length >= 1)))
      {
      form.innerHTML =
        `<div id = "p2">  
        <p>Name:${nameVal}</p><br>
        <p>Item:${itemVal}</p><br>
        <p>Review:${commentVal}</p><br>
        <p>Date:${datetime}</p><br>
        </div>` + form.innerHTML;
      }

     }
     document.getElementById('comment-data').addEventListener('click', showComment)


// Star Rating 
// Initial Ratings
const ratings = {
  revit: 0,
  falstaff: 0,
  leatherking: 0,
  thordirt: 0,
  thorsports: 0
}

// Total Stars
const starsTotal = 5;

// Run getRatings when DOM loads
document.addEventListener('DOMContentLoaded', getRatings);

// Form Elements
const productSelect = document.getElementById('product-select');
const ratingControl = document.getElementById('rating-control');

// Init product
let product;

// Product select change
productSelect.addEventListener('change', (e) => {
  product = e.target.value;
  // Enable rating control
  ratingControl.disabled = false;
  ratingControl.value = ratings[product];
});

// Rating control change
ratingControl.addEventListener('blur', (e) => {
  const rating = e.target.value;

  // Make sure 5 or under
  if (rating > 5) {
    alert('Please rate 1 - 5');
    return;
  }

  // Change rating
  ratings[product] = rating;

  getRatings();
});

// Get ratings
function getRatings() {
  for (let rating in ratings) {
    // Get percentage
    const starPercentage = (ratings[rating] / starsTotal) * 100;

    // Round to nearest 10
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

    // Set width of stars-inner to percentage
    document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;

    // Add number rating
    document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
  }
}