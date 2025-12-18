const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase().trim();

    if (!query) {
        displayVideo();
        return;
    }

    const filteredVideos = videos.filter(video =>
        video.title.toLowerCase().includes(query) ||
        video.channel.toLowerCase().includes(query) ||
        video.category?.toLowerCase().includes(query)
    );

    displayVideo(filteredVideos);

});


searchInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        searchBtn.click();
    }
});

function displayVideo(videoList = videos){
    videosContainer.innerHTML = '';

    videoList.forEach(video => {
        const button = document.createElement("button");
        button.className="video-card";

        const link = document.createElement("a");
        link.href = video.link;
        link.target ="_blank";

        link.innerHTML = `
          <img src="${video.img}" alt="${video.title}" />
          <h3>${video.title}</h3>
          <p class="channel">${video.channel}</p>
          <p class="views">${video.views}</p>
        `;
        button.appendChild(link);
        videosContainer.appendChild(button);
    });
}