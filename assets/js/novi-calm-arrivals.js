(() => {
 'use strict';
 const root = document.querySelector('#calm-build .novi-calm-inbox');
 if (!root) return;
 const messages = [...root.querySelectorAll('[data-arrival-index]')];
 const count = root.querySelector('.novi-calm-inbox__count');
 const replay = root.querySelector('.novi-calm-inbox__replay');
 const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
 if (!('IntersectionObserver' in window) || reduce.matches || messages.length !== 5) {
   count.textContent = String(messages.length);
   return;
 }
 // Do not hide anything until reliable animation support is established.
 root.classList.add('novi-calm--js');
 count.textContent='1';
 let timeouts = [];
 let hasPlayed = false;
 function clearSequence(){ timeouts.forEach(t => clearTimeout(t)); timeouts=[]; }
 function prepare(){
   clearSequence();
   messages.forEach((el,i)=>{el.classList.toggle('is-arrived',i===0);el.classList.remove('novi-calm-inbox__letter--fresh');});
   count.textContent='1';
 }
 function show(i){
   const row=messages[i];
   row.classList.add('is-arrived','novi-calm-inbox__letter--fresh');
   count.textContent=String(i+1);
   timeouts.push(setTimeout(()=>row.classList.remove('novi-calm-inbox__letter--fresh'),1050));
 }
 function play(){
   prepare();
   // Each arriving email expands the inbox. Pace creates the accumulating pressure.
   [1,2,3,4].forEach((idx,n)=>timeouts.push(setTimeout(()=>show(idx),690+n*760)));
   hasPlayed=true;
 }
 const observer=new IntersectionObserver(entries=>{
   for (const entry of entries) {
     if (entry.isIntersecting && !hasPlayed){play();observer.disconnect();break;}
   }
 },{threshold:0.18,rootMargin:'0px 0px -9% 0px'});
 observer.observe(root);
 replay.addEventListener('click',()=>{observer.disconnect();play();});
 reduce.addEventListener('change',event=>{
   if(event.matches){clearSequence();root.classList.remove('novi-calm--js');count.textContent=String(messages.length);observer.disconnect();}
 });
})();