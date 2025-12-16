const languages = [
  "C#", "Html", "CSS", "JavaScript", "Angular", "Node.js", 
  "React.js", "Asp.Net", "Dart", "Flutter", "Backend", "Frontend",
  "Go", "Rust", "C++", "C", "Java", "OOP", "AI", "Algorithms"
];

const container = document.getElementById('chipFilter');

languages.forEach(lang => {
  const p = document.createElement('p');
  p.className = 'language';
  p.textContent = lang;
  container.appendChild(p);
});
