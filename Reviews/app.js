const reviews = [
    {
      id: 1,
      name: "Aldous Huxley",
      job: "Escritor",
      img:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.levelesyeux.com%2Fwp-content%2Fuploads%2F2018%2F09%2FAVT_Aldous-Huxley_963.jpeg%3Ffit%3D736%252C948%26ssl%3D1&f=1&nofb=1",
      text:
        "La civilización es, entre otras cosas, el proceso por el que las primitivas manadas se transforman en una analogía, tosca y mecánica, de las comunidades orgánicas de los insectos sociales.",
    },
    {
      id: 2,
      name: "George Orwell",
      job: "Escritor",
      img:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F7e%2FGeorge_Orwell_press_photo.jpg&f=1&nofb=1",
      text:
        "Hasta que no tengan conciencia de su fuerza, no se rebelarán, y hasta después de haberse revelado, no serán conscientes. Ese es el problema.",
    },
    {
      id: 3,
      name: "Alan Moore",
      job: "Escritor de comics",
      img:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmlpnk72yciwc.i.optimole.com%2Fw%3A600%2Fh%3A599%2Fq%3Aauto%2Fhttps%3A%2F%2Fwww.bleedingcool.com%2Fwp-content%2Fuploads%2F2018%2F03%2FAM-Squared.jpg&f=1&nofb=1",
      text:
        "Aquel que lucha contra monstruos debe temer convertirse en uno.",
    },
    {
      id: 4,
      name: "Gerard Way",
      job: "Músico, escritor y dibujante",
      img:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F_gEQqGw363eQ%2FTNbkSnYFq8I%2FAAAAAAAAH7M%2Ffyi1h47-GdU%2Fs1600%2Fgerard-way.jpg&f=1&nofb=1",
      text:
        "Algún día tu vida pasará frente a tus ojos, asegúrate de que valga la pena mirar."
    },
  ];

  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");

  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");

  let currentItem = 2;

  window.addEventListener('DOMContentLoaded', function(){

    showPerson();

  });

  function showPerson() {

    const item = reviews[currentItem];
    
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;

  }

  nextBtn.addEventListener("click", function() {

    currentItem++;

    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }

    showPerson();

  })

  prevBtn.addEventListener("click", function() {

    currentItem--;

    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }

    showPerson();

  })

  randomBtn.addEventListener('click', function(){

    currentItem = Math.floor (Math.random() * reviews.length)
    showPerson();

  })