const items = document.getElementById("items");
const list = document.getElementById("item-list");

const xhr = new XMLHttpRequest();

xhr.open("GET", "featured.json", true);
xhr.onload = () => {
  if (xhr.status === 200) {
    const per = JSON.parse(xhr.responseText);

    per.forEach(p => {
      let list = document.getElementById("item-list");

      list.innerHTML =
        list.innerHTML +
        `<br>${p.id}<br><img src="${p.img}" height="300" width="430"></img><br>${p.bikeName}<br>${p.bikeType}<br>${p.bikeSummary}</br>`;
    });
  } else if (xhr.status === 404) {
    console.log("File Not Found");
  }
};

xhr.onerror = () => {
  console.log(`Current Load State ${xhr.readyState}`);
};

xhr.send();
