/* NOVI: defer all video requests until an explicit user click. Native controls after playback starts. */
(()=>{
 const frame=document.querySelector('[data-novi-film]'); if(!frame)return;
 const btn=frame.querySelector('[data-film-play]');
 const video=frame.querySelector('[data-film-video]');
 const path=frame.getAttribute('data-video-src');
 if(!btn||!video||!path)return;
 const cover=frame.querySelector('[data-film-cover]');
 btn.addEventListener('click',async()=>{
   btn.disabled=true; btn.setAttribute('aria-label','Loading NOVI film');
   if(!video.getAttribute('src')) video.setAttribute('src',path);
   video.hidden=false; frame.classList.add('novi-film-is-playing');
   video.load();
   try { await video.play(); } catch(error) {video.controls=true; video.hidden=false;}
 });
 video.addEventListener('ended',()=>{
   video.pause();video.currentTime=0;video.hidden=true;frame.classList.remove('novi-film-is-playing');
   if(cover)cover.hidden=false;btn.disabled=false;btn.setAttribute('aria-label','Replay NOVI 15-second brand film');
 });
 video.addEventListener('error',()=>{
   frame.classList.remove('novi-film-is-playing');video.hidden=true;btn.disabled=false;btn.setAttribute('aria-label','Try playing NOVI brand film again');
 });
})();
