let songs = [
   {
      songName: 'Aararaari Raaro',
      url: '../songs/JAWAN_ Aararaari Raaro.m4a',
      img: "../img/jawan.png",
      duration: "4:39",
      artist: "Deepali"
   },
   {
      songName: 'Khuda Aur Mohabbat',
      url: '../songs/Khuda Aur Mohabbat.mp3',
      img: "../img/khuda-aur-mohabbat.png",
      duration: "06:09",
      artist: "Rahat Fateh Ali Khan"

   },
   {
      songName: 'Rihaee',
      url: '../songs/Rihaee.mp3',
      img: "../img/rihaee.png",
      duration: "03:43",
      artist: "Yasser Desai"
   },
   {
      songName: 'Rangreza',
      url: '../songs/Rangreza.mp3',
      img: "../img/rangreza.png",
      duration: "03:02",
      artist: "Atif Aslam"

   },
   {
      songName: 'Ruaan',
      url: '../songs/Ruaan Song.mp3',
      img: "../img/tiger-3.png",
      duration: "04:17",
      artist: "Arijit Singh"

   },
];

let footerContent = [
   {
      title: 'Top Hindi Artists',
      content: [
         'Md. Aziz', 'Udit narayn', 'kumar sanu', 'sonu nigam', 'Atif Aslam', 'arijit singh', 'Rood kumar rathod'
      ]
   },

   {
      title: 'Top Hindi Actor',
      content: [
         'Shreeradhe Khanduja', 'Simran Kaur Suri', 'Trishaan Singh Maini', 'Meisha Sakshi Iyer', 'Raghubir R Yadav'
      ]
   },
   {
      title: 'Top Hindi Albums',
      content: [
         'Bhoot - Part One: The Haunted Ship', 'Zihaal e Miskin', 'TTeri Baaton Mein Aisa Uljha Jiya', 'Malang Sajna', 'Heeriye (feat. Arijit Singh)', 'Tu hai kahan'
      ]
   },
   {
      title: 'Top Hindi Playlist',
      content: [
         'Hindi 1990s', 'Hindi 2000s', '90s Romance - Hindi', 'Hindi: India Superhits Top 50', 'Best Of 90s - Hindi', 'Hindi Hit Songs'
      ]
   },
   {
      title: 'Top Hindi Actor',
      content: [
         'Shreeradhe Khanduja', 'Simran Kaur Suri', 'Trishaan Singh Maini', 'Meisha Sakshi Iyer', 'Raghubir R Yadav'
      ]
   },
   {
      title: 'Top Hindi Albums',
      content: [
         'Bhoot - Part One: The Haunted Ship', 'Zihaal e Miskin', 'TTeri Baaton Mein Aisa Uljha Jiya', 'Malang Sajna', 'Heeriye (feat. Arijit Singh)', 'Tu hai kahan'
      ]
   },

]


let section_1_cards = document.querySelector(".section_1 .cards");
let section_2_cards = document.querySelector(".section_2 .cards");
let section_1_cards_card = document.querySelector(".section_1 .cards");
let time = document.querySelector(".time p")


let leftBoxPoster = document.querySelector("#left");
let backward = document.querySelector("#backward");
let playIcon = document.querySelector("#play");
let forward = document.querySelector("#forward");

// audio create
let audio = new Audio();
let selectedSong = 0;

function songsDisplay() {
   clutter = "";
   songs.forEach((song, ind) => {
      clutter += `<section class="card" onclick="openCard('${ind}')" data-index="${ind}" >
      <img src="${song.img}" alt="">
      <h4>${song.songName}</h4>
      <p>${song.artist}</p>
      <section class="overlay">
         <i class="fa-solid fa-play"></i>
      </section>
   </section>`;
   });
   // audio.src = songs[selectedSong].url; agar dusri box me play karna chahte hai toh yeha yeh line naa likhe bhi toh koi issue nahi but backward aur forward ka kam karna hai toh use karna padega.
   audio.src = songs[selectedSong].url;
   section_1_cards.innerHTML = clutter;
}

let music_play = document.querySelector(".music_play");
let section_1 = document.querySelector("#right .section_1");
let section_2 = document.querySelector("#right .section_2");
let top_section = document.querySelector(".top_section");
let bottom_section = document.querySelector(".bottom_section");


function openCard(songId) {
   // Retrieve the song details based on the songId
   let song = songs[songId];
   clutter = `<section>
   <img src="${song.img}" alt="">
</section>
<section>
   <h1>${song.songName}</h1>
   <p>21K Followers . 26 songs</p>
   <aside>
      <button class="btn" id="playBtn">Play</button>
      <i class="fa-regular fa-heart"></i>
      <i class="fa-solid fa-ellipsis"></i>
   </aside>`;
   music_play.style.display = "block";
   section_1.style.display = "none"
   section_2.style.display = "none";

   // Update selectedSong to the clicked songId
   selectedSong = songId;
   audio.src = song.url;
   top_section.innerHTML = clutter;
   // bottom section
   bottom_section.innerHTML = bottomDisplaySong();

   let playBtn = document.querySelector("#playBtn");

   playBtn.addEventListener("click", function () {
      togglePlayPause();
   });
}

function bottomDisplaySong() {
   let bottomClutter = "";

   songs.forEach((song, ind) => {
      bottomClutter += `<section class="bottom_box" data-index ="${ind}" >
      <section class="small_box">
         <img src="${song.img}" alt="">
         <h5>${song.songName}</h5>
         <section class="overlay2">
         <i id="playSmallBox" class="fa-solid fa-play"></i>
         </section>
      </section>
      <section class="artist"> <h6>${song.artist}</h6>
      <h6 class="duration">${song.duration}</h6></section>
   </section>`
   })
   return bottomClutter;
}


// Function to toggle play/pause
function togglePlayPause(e) {
   if (audio.paused) {
      songsDisplay();

      audio.play();
      playIcon.innerHTML = `<i class="fa-solid fa-pause"></i>`;
      playBtn.innerHTML = "Play"
   } else {
      songsDisplay();
      playIcon.innerHTML = `<i class="fa-solid fa-play"></i>`;
      playBtn.innerHTML = "Pause"
      audio.pause();
   }
}

// go back func

let back = document.querySelector(".fa-arrow-left");

back.addEventListener("click", () => {
   music_play.style.display = "none";
   section_1.style.display = "block"
   section_2.style.display = "block"
})

// bottom footer content
let footer = document.querySelector("#footer");

function bottomFooter() {
   let clutter = "";
   footerContent.forEach((items) => {
      clutter += `<section>
      <h6>${items.title}</h6>`;
      // Iterate over the items.content array and generate <p> tags for each item
      items.content.forEach((contentItem) => {
         clutter += `<p>${contentItem}</p>`;
      });

      clutter += `</section>`;
   });
   footer.innerHTML = clutter;
}

forward.addEventListener("click", function () {
   if (songs.length - 1 > selectedSong) {
      selectedSong++;
      songsDisplay();
      audio.play();
      playIcon.innerHTML = `<i class="fa-solid fa-pause"></i>`;
      backward.style.opacity = "1";
      time.textContent = songs.duration;
      updatePlayerContainer(); // Update player container
   } else {
      forward.style.opacity = "0.3"
   }
})

backward.addEventListener("click", function (e) {
   if (selectedSong > 0) {
      selectedSong--;
      songsDisplay();
      audio.play();
      playIcon.innerHTML = `<i class="fa-solid fa-pause"></i>`;
      forward.style.opacity = "1"
      time.textContent = songs.duration;
      updatePlayerContainer(); // Update player container
   } else if (selectedSong === 0) {
      songsDisplay();
      audio.play();
      playIcon.innerHTML = `<i class="fa-solid fa-pause"></i>`;
      backward.style.opacity = "0.3"
      time.textContent = songs.duration;
      updatePlayerContainer(); // Update player container

   }
   else {
      songsDisplay();
      audio.pause();
      time.textContent = songs.duration;

   }
})

playIcon.addEventListener("click", function () {
   togglePlayPause();
});


// top chart

function topChart(limit = Infinity) {
   let clutter = "";
   // onclick="openCard('${ind}')
   for (let i = 0; i < limit && i < songs.length; i++) {
      const song = songs[i];
      clutter += `<section class="cards" onclick="openCardTwo(${i})">
      <section class="card">
         <img src="${song.img}" alt="">
         <h4>${song.songName}</h4>
         <p>${song.artist}</p>
         <section class="overlay">
            <i class="fa-solid fa-play"></i>
         </section>
      </section>
   </section>`;
   }

   section_2_cards.innerHTML = clutter;
}

function openCardTwo(songId) {
   let song = songs[songId];
   let clutter = "";
   clutter = `<section>
   <img src="${song.img}" alt="">
</section>
<section>
   <h1>${song.songName}</h1>
   <p>21K Followers . 26 songs</p>
   <aside>
      <button class="btn" id="playBtn">Play</button>
      <i class="fa-regular fa-heart"></i>
      <i class="fa-solid fa-ellipsis"></i>
   </aside>`;
   music_play.style.display = "block";
   section_1.style.display = "none"
   section_2.style.display = "none";

   selectedSong = songId;
   audio.src = song.url;
   top_section.innerHTML = clutter;
   bottom_section.innerHTML = bottomDisplaySong();
   let playBtn = document.querySelector("#playBtn");

   playBtn.addEventListener("click", function () {
      togglePlayPause();
   })
}




// playSmallBox songs
let bottomSection = document.querySelector(".bottom_section");

let isPlaying = false;

bottomSection.addEventListener("click", function (e) {
   // Check if the clicked element is the play icon
   if (e.target.classList.contains("fa-play")) {
      // paranet element which contains the data-index attribute
      let parentElement = e.target.closest(".bottom_box");
      if (parentElement) {
         let dataIndex = parentElement.getAttribute("data-index");
         // convert dataIndex to a number
         let selectedIndex = parseInt(dataIndex);
         if (!isPlaying) {
            audio.src = songs[selectedIndex].url;
            bottomDisplaySong();
            audio.play();
            isPlaying = true;
            playIcon.innerHTML = `<i class="fa-solid fa-pause"></i>`;
         } else {
            audio.pause();
            isPlaying = false;
            playIcon.innerHTML = `<i class="fa-solid fa-play"></i>`;
         }
         e.stopPropagation();
      }
   }
});

// update player container items based on selected id

function updatePlayerContainer() {
   // Update image
   let playerImage = document.querySelector('#player .left img');
   playerImage.src = songs[selectedSong].img;

   // Update title and artist
   let playerTitle = document.querySelector('#player h6');
   playerTitle.textContent = songs[selectedSong].title;

   let playerArtist = document.querySelector('#player p');
   playerArtist.textContent = songs[selectedSong].artist;
   time.textContent = songs[selectedSong].duration
}


updatePlayerContainer();
bottomFooter();
songsDisplay();
topChart(3);

// header language

let music_laguage = document.querySelector(".options .music_lag");
let downArrow = document.querySelector(".music_lag i");
let language = document.querySelector(".language");
let isOpen = false;

music_laguage.addEventListener("click", function () {
   if (!isOpen) {
      language.style.display = "block";
      downArrow.classList.remove("fa-angle-down");
      downArrow.classList.add("fa-angle-up");
      isOpen = true;
   } else {
      language.style.display = "none";
      downArrow.classList.remove("fa-angle-up");
      downArrow.classList.add("fa-angle-down");
      isOpen = false;
   }
})

let search = document.querySelector("#header .search")
let searchIcon = document.querySelector(".search span");
let searchInput = document.querySelector(".input-field");
let searcch_result = document.querySelector('#searcch_result')


search.addEventListener("click", function (e) {
   searcch_result.style.display = "block";
   search.classList.add("focus_search");

})


let searcch_result_h2 = document.querySelector("#searcch_result h2")
searcch_result_h2.addEventListener("click", function (e) {
   
   console.log(e.target.value);
   search.classList.remove("focus_search", "focus_search_2");
   searcch_result.style.display = "none";
   searchInput.value = ""
   searchIcon.style.display = "block";

})

search.addEventListener("input", (e) => {
   // console.log(e.target.value);

   searchIcon.style.display = "none";
   search.classList.add("focus_search_2");

})