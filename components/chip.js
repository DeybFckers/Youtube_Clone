const languages = [
  "C#", "Html", "CSS", "JavaScript", "Angular", "Node.js", 
  "React.js", "Asp.Net", "Dart", "Flutter", "Backend", "Frontend",
  "Go", "Rust", "C++", "C", "Java", "AI", "Algorithms"
];

const container = document.getElementById('chipFilter');

languages.forEach(lang => {
  const button = document.createElement('button');
  button.className = 'language';
  button.textContent = lang;
  button.addEventListener('click', () => {
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
  });

  container.appendChild(button);
});
