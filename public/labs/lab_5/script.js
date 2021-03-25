function mapInit() {
  
  const mymap = L.map('mapid').setView([38.9897, -76.937759], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoiYWtoYW5hbDMzNyIsImEiOiJja200OTloaXIwMmUwMnVxYm9ldDVwbmY3In0.VeEH8SQ-i9XQ43-kLVDAjw'
  }).addTo(mymap);
  console.log('mymap', mymap);
  return mymap;
}


async function dataFilter(mapObjectFromFunction) {
// async function windowActions() {

  // const search = document.querySelector(".SearchBar");
  // const targetList = document.querySelector(".ListOfRestaurants");
  console.log('window loaded');
  const form = document.querySelector('#searchBar');
  const search = document.querySelector('#search');
  const suggestions = document.querySelector('.ListOfRestaurants');
  const replyMessage = document.querySelector('.reply-message');

  const request = await fetch('/api');
  const data = await request.json();

  // test

  form.addEventListener('submit', async (event) => {
    // targetList.innerText= '';
    suggestions.innerText= '';
    event.preventDefault();

    console.log('submit fired', search.value);
    const places_filtered = data.filter((record) =>  record.geocoded_column_1 && record.zip.includes(search.value));
  // )
    const topFive = places_filtered.slice(0,5);
    suggestions.innerText= '';
    console.table(topFive);
  

    if (topFive.length < 1) {
      suggestions.classList.add('box');
      suggestions.innerText= 'No matches found';
    } else {
      console.table(topFive);

      topFive.forEach((item) => {
        const longLat= item.geocoded_column_1.coordinates;
        // console.log('markerLongLat', longLat[0], longLat[1]);
        const marker= L.marker([longLat[1], longLat[0]]).addTo(mapObjectFromFunction);

        const appendItem = document.createElement('li');
        appendItem.classList.add('block');
        appendItem.classList.add('list-item');
        appendItem.classList.add('box');
        appendItem.classList.add('dark-background');
        appendItem.classList.add('light-text');
        appendItem.classList.add('mt-10');
        appendItem.innerHTML= `<div class="list-header is-size-5">${item.name}</div><div class="is-size-6 address">${item.address_line_1}</div>`;
        suggestions.append(appendItem);
    }) ;


  const {coordinates}= topFive[0]?.geocoded_column_1;
  console.log('viewSet coords', coordinates);
  mapObjectFromFunction.panTo([coordinates[1], coordinates[0]], 0);
  }
})};

search.addEventListener('input', (event) => {
  // console.log('input', event.target.value);
  if (search.value.length === 0) {
    suggestions.innerText = '';
    suggestions.classList.remove('box');
  }

});

async function windowActions() {
  
  // console.log('window loaded');
  const mapObject= mapInit();
  await dataFilter(mapObject);
}


window.onload= windowActions;

