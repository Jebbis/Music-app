var input = document.querySelector(".input_text");

var button = document.querySelector(".submit");

button.addEventListener("click", function (name) {
  const api_url =
    "https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=" +
    input.value +
    "&format=json&api_key=f44e35abb47498a46327f65e1136bb80";

  // api url

  // Defining async function
  async function getapi(url) {
    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);

    show(data);
  }
  // Calling that async function
  getapi(api_url);

  // Function to hide the loader

  // Function to define innerHTML for HTML table
  function show(data) {
    let tab = `<thead>
          <tr>
          <th>Name</th>
          <th>Playcount</th>
          <th>Artist Name</th>
          <th>Image</th>
          </tr>
         </thead>`;

    // Loop to access all rows
    let i = 0;

    for (let r of data.topalbums.album) {
      i++;
      if (i < 6) {
        tab += `<tr> 
        <td>${r.name} </td>
        <td>${r.playcount}</td>
        <td>${r.artist.name}</td> 
        <td><img src="${r["image"][0]["#text"]}"</td>          
      </tr>`;
      }
    }
    // Setting innerHTML as tab variable
    document.getElementById("top-albums").innerHTML = "Top albums by artist";
    document.getElementById("artists").innerHTML = tab;
  }
});

button.addEventListener("click", function (name) {
  const api_url =
    "https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" +
    input.value +
    "&format=json&api_key=f44e35abb47498a46327f65e1136bb80";

  // api url

  // Defining async function
  async function getapi(url) {
    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);

    show(data);
  }
  // Calling that async function
  getapi(api_url);

  // Function to hide the loader

  // Function to define innerHTML for HTML table
  function show(data) {
    let tab = `<thead>
          <tr>
          <th>Name</th>
          <th>Playcount</th>
          <th>Listeners</th>
          <th>Artist Name</th>
          </tr>
         </thead>`;

    // Loop to access all rows
    let i = 0;

    for (let r of data.toptracks.track) {
      i++;
      if (i < 6) {
        tab += `<tr> 
        <td>${r.name} </td>
        <td>${r.playcount}</td>
        <td>${r.listeners}</td>
        <td>${r.artist.name}</td>         
      </tr>`;
      }
    }

    // Setting innerHTML as tab variable
    document.getElementById("album").innerHTML = tab;
    document.getElementById("top-tracks").innerHTML = "Top tracks by artist";
  }
});
