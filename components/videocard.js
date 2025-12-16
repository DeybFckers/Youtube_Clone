const videos = [
    {
        img: "https://i.ytimg.com/vi/GhQdlIFylQ8/maxresdefault.jpg",
        title: "C# Tutorial - Full Course for Beginners by freeCodeCamp",
        channel: "freeCodeCamp.org",
        views: "8.8M Views"
    },

    {
        img: "https://i.ytimg.com/vi/FQdaUv95mR8/maxresdefault.jpg",
        title: "HTML Tutorial for Beginners by Kevin Stravert",
        channel: "Kevin Stravert",
        views: "1.1M Views"
    },

    {
        img: "https://i.ytimg.com/vi/0W6qz0-aDaM/maxresdefault.jpg",
        title: "CSS Introduction and Tutorial for Beginners by Dave Gray",
        channel: "Dave Gray",
        views: "162k Views"
    },

    {
        img: "https://i.ytimg.com/vi/Ihy0QziLDf0/maxresdefault.jpg",
        title: "JavaScript tutorial for Beginners by Bro Code",
        channel: "Bro Code",
        views: "683k Views"
    },
]

const videosContainer = document.getElementById("videos");

videos.forEach(video => {
    const button = document.createElement("button");
    button.className="video-card";

    button.innerHTML = `
        <img src="${video.img}" alt="${video.title}">
        <h3>${video.title}</h3>
        <p class="channel">${video.channel}</p>
        <p class="views">${video.views}</p>
    `;

    videosContainer.appendChild(button);
});
