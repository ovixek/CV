// small helper: open resume (replace path if you put resume in repo)
const resumePath = 'Abhishek_Pujari_Resume.pdf'; // put your PDF in repo root or change path
document.getElementById('downloadResume').addEventListener('click', () => {
  window.open(resumePath, '_blank');
});
document.getElementById('resumeLink').addEventListener('click', (e) => {
  e.preventDefault();
  window.open(resumePath, '_blank');
});

// theme toggle (light/dark toggle simple)
const toggle = document.getElementById('toggleTheme');
toggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  if(document.documentElement.classList.contains('dark')){
    document.documentElement.style.setProperty('--bg','#0b1220');
    document.documentElement.style.setProperty('--fg','#e6eef6');
    document.documentElement.style.setProperty('--card','#071022');
    document.documentElement.style.setProperty('--muted','#9fb0bf');
    document.documentElement.style.setProperty('--accent','#3dd6ff');
  } else {
    document.documentElement.style.removeProperty('--bg');
    document.documentElement.style.removeProperty('--fg');
    document.documentElement.style.removeProperty('--card');
    document.documentElement.style.removeProperty('--muted');
    document.documentElement.style.removeProperty('--accent');
  }
});
