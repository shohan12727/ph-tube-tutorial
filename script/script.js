// alert('fuck cse ');


function loadCategories (){
    fetch ('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then ((res) => res.json())
    .then ((data) => displayCategories (data.categories));
}

function displayCategories (categories){
    const categoryContainer = document.getElementById("catagory-container");

    // loop
    for (let cat of categories){
        console.log(cat);
    

    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
    <button onclick="loadCategoryVideos(${cat.category_id})" class = "btn btn-sm hover:bg-red-600 " > ${cat.category} </button>
    ` ;
    categoryContainer.appendChild(categoryDiv);
    }
}
function loadVideo (){
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(response => response.json())
    .then(data => displayVideos(data.videos));
}

// {/* <section id="video-container"></section> */}
const displayVideos = (videos)  => {
    const videoContainer = document.getElementById ('video-container');
    videoContainer.innerHTML = "";
    if(videos.length==0){
        videoContainer.innerHTML = `
        <div class="flex text-center flex-col col-span-full justify-center items-center">
        <img src="./assets/Icon.png" alt="" class="">
            <h2 class="text-2xl font-bold">Oops!! Sorry, There is no content here</h2>
        </img>
    </div>
        `
      return ;
    }
    for (let video of videos ){
        console.log(video);
        const videoCard = document.createElement('div')
        videoCard.innerHTML=`
  <div class="card bg-base-100 ">
        <figure class="relative">
          <img
          class = "w-full h-[150px] object-cover"
            src="${video.thumbnail}"
            alt="Shoes" />
            <span class="absolute bottom-2 right-2 bg-[#171717] px-1 text-sm rounded text-white">3hrs 56 min ago</span>
        </figure>
        <div class=" flex gap-3 px-0 py-5">
          
         <div class="profile   ">
            <div class="avatar w-6">
                <div class="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                  <img src="${video.authors[0].profile_picture}" />
                </div>
              </div>

         </div>
         <div class="intro">
            <h2 class=" text-sm font-semibold">${video.title} </h2>
            
            <p class="text-sm text-gray-400 flex gap-1  ">${video.authors[0].profile_name}
                <img class="h-5 w-5" src="https://img.icons8.com/fluency/48/verified-badge.png" alt="Verified">
            </p>
            
            <p class="text-sm text-gray-400">${video.others.views} views</p>
         </div> 
        </div>
      </div>
        `;
        videoContainer.append(videoCard)

    }
        
    };




const loadCategoryVideos = (id) => {
    const url = ` https://openapi.programming-hero.com/api/phero-tube/category/${id}
    `
    console.log(url);
    
    fetch (url)
    .then (res => res.json())
    .then (data => displayVideos(data.category));
}







// loadVideo();
loadCategories();
