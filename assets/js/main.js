const lb=document.querySelector('.lightbox'),img=lb.querySelector('img');
document.addEventListener('click',e=>{const t=e.target;if(t.matches('.grid img')){img.src=t.src;lb.classList.add('open')}});
document.querySelector('.close').addEventListener('click',()=>lb.classList.remove('open'));
lb.addEventListener('click',e=>{if(e.target===lb) lb.classList.remove('open')});