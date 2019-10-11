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

            list.innerHTML = list.innerHTML + `<br>${p.id}<br><img src="${p.img}" height="200" width = "200"></img> <br>${p.jacketName}<br> ${p.jacketType}<br> ${p.jacketSummary} </br>`;
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
      const datetime = document.lastModified
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
