const videos = [
    {
        img: "https://i.ytimg.com/vi/GhQdlIFylQ8/maxresdefault.jpg",
        title: "C# Tutorial - Full Course for Beginners by freeCodeCamp",
        channel: "freeCodeCamp.org",
        views: "8.8M Views",
        link: "https://www.youtube.com/watch?v=GhQdlIFylQ8",
        category: "C#"
    },

    {
        img: "https://i.ytimg.com/vi/FQdaUv95mR8/maxresdefault.jpg",
        title: "HTML Tutorial for Beginners by Kevin Stravert",
        channel: "Kevin Stravert",
        views: "1.1M Views",
        link: "https://www.youtube.com/watch?v=FQdaUv95mR8",
        category: "Html"
    },

    {
        img: "https://i.ytimg.com/vi/0W6qz0-aDaM/maxresdefault.jpg",
        title: "CSS Introduction and Tutorial for Beginners by Dave Gray",
        channel: "Dave Gray",
        views: "162k Views",
        link: "https://www.youtube.com/watch?v=0W6qz0-aDaM",
        category: "CSS"
    },

    {
        img: "https://i.ytimg.com/vi/Ihy0QziLDf0/maxresdefault.jpg",
        title: "JavaScript tutorial for Beginners by Bro Code",
        channel: "Bro Code",
        views: "683k Views",
        link: "https://www.youtube.com/watch?v=Ihy0QziLDf0",
        category: "JavaScript"
    },

    {
        img: "https://i.ytimg.com/vi/2OHbjep_WjQ/maxresdefault.jpg",
        title: "Learn Angular - Full Tutorial Course by freeCodeCamp",
        channel: "freeCodeCamp.org",
        views: "633k Views",
        link: "https://www.youtube.com/watch?v=2OHbjep_WjQ",
        category: "Angular"
    },

    {
        img: "https://i.ytimg.com/vi/RLtyhwFtXQA/maxresdefault.jpg",
        title: "Learn Node.js - Full Tutorial for Beginners by freeCodeCamp",
        channel: "freeCodeCamp.org",
        views: "1.2M Views",
        link: "https://www.youtube.com/watch?v=RLtyhwFtXQA",
        category: "Node.js"
    },

    {
        img: "https://i.ytimg.com/vi/Dorf8i6lCuk/maxresdefault.jpg",
        title: "React Crash Course for Beginners - Learn ReactJS from Scratch in this 100% Free Tutorial! by Academind",
        channel: "Academind",
        views: "683k Views",
        link: "https://www.youtube.com/watch?v=Dorf8i6lCuk",
        category: "React.js"
    },

    {
        img: "https://i.ytimg.com/vi/nelyq4LD-KY/maxresdefault.jpg",
        title: "Asp.net Tutorial for Beginners | Asp.net Full Course 2026|.NET for Beginners by Simplilearn",
        channel: "Simplilearn",
        views: "99k Views",
        link: "https://www.youtube.com/watch?v=nelyq4LD-KY",
        category: "Asp.Net"
    },

    {
        img: "https://i.ytimg.com/vi/8D1UK3hq8U8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCzavTpLnmij5Ar2gyo92tsHJLBLA",
        title: "Dart Programming Language Tutorial for Beginners | Full Course in 3 hours by Fullstack School",
        channel: "Fullstack School",
        views: "7.1k Views",
        link: "https://www.youtube.com/watch?v=8D1UK3hq8U8",
        category: "Dart"
    },

    {
        img: "https://i.ytimg.com/vi/CD1Y2DmL5JM/maxresdefault.jpg",
        title: "Flutter Tutorial For Beginners in 3 Hours by Flutter Mapp",
        channel: "Flutter Mapp",
        views: "730K Views",
        link: "https://www.youtube.com/watch?v=CD1Y2DmL5JM",
        category: "Flutter"
    },

    {
        img: "https://i.ytimg.com/vi/KOutPbKc9UM/maxresdefault.jpg",
        title: "Intro to Backend Web Development - Node.js & Express Tutorial for Beginners by freeCodeCamp",
        channel: "freeCodeCamp.org",
        views: "84k Views",
        link: "https://www.youtube.com/watch?v=KOutPbKc9UM",
        category: "Backend"
    },

    {
        img: "https://i.ytimg.com/vi/MsnQ5uepIaE/maxresdefault.jpg",
        title: "Frontend Web Development: In-Depth Project Tutorial (HTML, CSS, JavaScript, TypeScript, React) by freeCodeCamp",
        channel: "freeCodeCamp.org",
        views: "359k Views",
        link: "https://www.youtube.com/watch?v=MsnQ5uepIaE",
        category: "Frontend"
    },

    {
        img: "https://i.ytimg.com/vi/YS4e4q9oBaU/maxresdefault.jpg",
        title: "Learn Go Programming - Golang Tutorial for Beginners by freeCodeCamp",
        channel: "freeCodeCamp.org",
        views: "2.5M Views",
        link: "https://www.youtube.com/watch?v=YS4e4q9oBaU",
        category: "Go"
    },

    {
        img: "https://i.ytimg.com/vi/qP7LzZqGh30/maxresdefault.jpg",
        title: "Rust Tutorial for Beginners - Full Course (With Notes and Project Ideas) by Harkirat Singh",
        channel: "Harkirat Singh",
        views: "279k Views",
        link: "https://www.youtube.com/watch?v=qP7LzZqGh30",
        category: "Rust"
    },

    {
        img: "https://i.ytimg.com/vi/vLnPwxZdW4Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD39-LvwcIWF88Nsnuqlj-SZE5Ohg",
        title: "C++ Tutorial for Beginners - Full Course by freeCodeCamp",
        channel: "freeCodeCamp.org",
        views: "13M Views",
        link: "https://www.youtube.com/watch?v=vLnPwxZdW4Y",
        category: "C++"
    },

    {
        img: "https://i.ytimg.com/vi/KJgsSFOSQv0/maxresdefault.jpg",
        title: "C Tutorial for Beginners - Full Course by freeCodeCamp",
        channel: "freeCodeCamp.org",
        views: "18M Views",
        link: "https://www.youtube.com/watch?v=KJgsSFOSQv0",
        category: "C"
    },

    {
        img: "https://i.ytimg.com/vi/eIrMbAQSU34/maxresdefault.jpg",
        title: "Java Full Course for Beginners by Programming with Mosh",
        channel: "Programming with Mosh",
        views: "13M Views",
        link: "https://www.youtube.com/watch?v=eIrMbAQSU34",
        category: "Java"
    },

    {
        img: "https://i.ytimg.com/vi/kWmX3pd1f10/maxresdefault.jpg",
        title: "What is Artificial Intelligence Exactly? by ColdFusion",
        channel: "ColdFusion",
        views: "2.1M Views",
        link: "https://www.youtube.com/watch?v=kWmX3pd1f10",
        category: "AI"
    },

    {
        img: "https://i.ytimg.com/vi/sk0yrh3DNXo/sddefault.jpg",
        title: "What is an Algorithm ? | Data Structures and Algorithms by Simple Snippets",
        channel: "Simple Snippets",
        views: "122k Views",
        link: "https://www.youtube.com/watch?v=sk0yrh3DNXo",
        category: "Algorithms"
    },
]

const videosContainer = document.getElementById("videos");

videos.forEach(video => {
    const button = document.createElement("button");
    button.className="video-card";

    const link = document.createElement("a");
    link.href = video.link;
    link.target ="_blank";

    link.innerHTML = `
        <img src="${video.img}" alt="${video.title}">
        <h3>${video.title}</h3>
        <p class="channel">${video.channel}</p>
        <p class="views">${video.views}</p>
    `;

    button.appendChild(link);

    videosContainer.appendChild(button);
});
