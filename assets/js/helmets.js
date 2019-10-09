const items = document.getElementById('items');
const list = document.getElementById('item-list');

const xhr = new XMLHttpRequest();


    xhr.open('GET', 'helmets.json', true);
    xhr.onload = () => {
        if (xhr.status === 200){
            const per = JSON.parse(xhr.responseText);
            //console.log(per);

            per.forEach(p => {
                 let list = document.getElementById('item-list');

            list.innerHTML = list.innerHTML + `<br>${p.id}<br><img src="${p.img}" height="200" width="200"></img> <li>${p.helmetName}<br> ${p.helmetType}<br> ${p.helmetSummary} </li>`;
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
  // php to page
  const sendPhp = e => {
    e.preventDefault();
  
    const Name = document.getElementById("Name").value;
    const Review = document.getElementById("Review").value;
    const params = `Name=${Name}&Review=${Review}`;
    xhr.open("POST", "http://kate.ict.op.ac.nz/~orrgl1/server.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
        let text = document.getElementById("ajax-php-text");
        text.innerHTML = `<p>${xhr.responseText}</p>`;
        text.style.color = "red"
        text.style.fontSize = "25px"
        text.style.border = "thick solid #fff"
        text.style.background = "#455"
      } else if (xhr.status === 500) {
        console.log("Internal Server Error.");
      }
    };
    xhr.send(params);
  };

document.getElementById("f1").addEventListener("submit", sendPhp);
document.getElementById("ajax-php-button").addEventListener("click", sendPhp);
