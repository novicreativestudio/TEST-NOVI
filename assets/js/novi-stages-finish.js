/* Lightweight, one-time enhancement. Content stays visible without JS. */
(()=>{const section=document.getElementById('growth-stages');if(!section)return;
const play=()=>{if(section.classList.contains('novi-stages-play'))return;section.classList.add('novi-stages-play');};
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){return;}
if('IntersectionObserver' in window){const observer=new IntersectionObserver((entries)=>{for(const e of entries){if(e.isIntersecting){play();observer.disconnect();break;}}},{threshold:.08,rootMargin:'0px 0px -12% 0px'});observer.observe(section.querySelector('.novi-stages-track')||section);}else{play();}
})();
