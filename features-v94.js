'use strict';
(()=>{
 const fade=element=>{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)element.animate([{opacity:.25},{opacity:1}],{duration:240,easing:'ease-out'})};
 function activate(button,buttonAttribute,panelAttribute){
  const value=button.getAttribute(buttonAttribute);
  document.querySelectorAll('['+buttonAttribute+']').forEach(option=>option.setAttribute('aria-pressed',String(option===button)));
  document.querySelectorAll('['+panelAttribute+']').forEach(panel=>{
   const active=panel.getAttribute(panelAttribute)===value;
   panel.setAttribute('aria-hidden',String(!active));panel.inert=!active;
   if(active)fade(panel);
  });
 }
 document.querySelectorAll('[data-profile-view]').forEach(button=>button.addEventListener('click',()=>{
  activate(button,'data-profile-view','data-pattern-state');
  document.getElementById('stage-kicker').textContent={baseline:'At your best',pressure:'When urgency rises',apply:'A useful next move'}[button.dataset.profileView];
 }));
 document.querySelectorAll('[data-coach-view]').forEach(button=>button.addEventListener('click',()=>activate(button,'data-coach-view','data-coach-state')));
 document.querySelectorAll('[data-reflection]').forEach(button=>button.addEventListener('click',()=>activate(button,'data-reflection','data-reflection-state')));
})();
