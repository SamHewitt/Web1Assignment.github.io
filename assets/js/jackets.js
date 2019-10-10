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
      const nameVal = document.getElementById('name').value
      document.getElementById(
        'name'
      ).innerHTML = `<b>Name:</b> ${nameVal}`
      const commentVal = document.getElementById('comment-input').value
      document.getElementById(
        'comment-output'
      ).innerHTML = `<b>Review:</b> ${commentVal}`
      document.getElementById(
        'datetime'
      ).innerHTML = `<b>Time:</b> ${document.lastModified}`
      document.getElementById(
       'postbuttonid'
      ).innerHTML = `<b>Post Button ID:</b>${document.getElementById('name')}<br>${document.getElementById('jacketname')}<br> ${document.getElementById('comment-data').id}`
    }
    document.getElementById('comment-data').addEventListener('click', showComment)
    document.getElementById('comment-data').addEventListener('click', showComment)