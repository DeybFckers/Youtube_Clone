const languages = [
  "C#", "Html", "CSS", "JavaScript", "Angular", "Node.js", 
  "React.js", "Asp.Net", "Dart", "Flutter", "Backend", "Frontend",
  "Go", "Rust", "C++", "C", "Java", "AI", "Algorithms"
];

const container = document.getElementById('chipFilter');
const videoContainer = document.getElementById('videos');

const displayVideos = (selectedCategory = null) => {
  videosContainer.innerHTML = '';

  const filteredVideos = selectedCategory
    ? videos.filter(video => video.category === selectedCategory)
    : videos;

  filteredVideos.forEach(video => {
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

languages.forEach(lang => {
  const button = document.createElement('button');
  button.className = 'language';
  button.textContent = lang;
  button.addEventListener('click', () => {
    document.querySelectorAll('.language').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    displayVideos(lang);
  });

  container.appendChild(button);
});

displayVideos(); 
