'use strict';
const menu=document.querySelector('.menu');
const navigation=document.querySelector('#navigation');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));navigation.classList.toggle('open',open)});
navigation.addEventListener('click',event=>{if(event.target.closest('a,button')){menu.setAttribute('aria-expanded','false');navigation.classList.remove('open')}});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&navigation.classList.contains('open')){navigation.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.focus()}});
const contact=document.querySelector('#contact-preview');
if(contact){if(new URLSearchParams(location.search).get('topic')==='team')document.querySelector('input[name=topic][value=team]').checked=true;contact.addEventListener('submit',async event=>{event.preventDefault();const result=document.querySelector('#contact-result'),title=document.querySelector('#contact-result-title'),text=document.querySelector('#contact-result-text'),send=contact.querySelector('button[type=submit]');const show=(heading,body)=>{title.textContent=heading;text.textContent=body;result.hidden=false;result.focus()};const name=contact.elements.name.value.trim(),email=contact.elements.email.value.trim(),label=send.textContent;send.disabled=true;send.textContent='Sending';result.hidden=true;try{const response=await fetch('https://api.superq.app/api/contact',{method:'POST',body:new URLSearchParams(new FormData(contact))});const answer=await response.json().catch(()=>({}));if(response.ok){contact.reset();show('Message sent','Thanks, '+name+'. We will reply to '+email+'.')}else show('Not sent',answer.detail||'Your message did not send. Please try again in a moment.')}catch{show('Not sent','We could not reach SuperQ. Check your connection and try again.')}finally{send.disabled=false;send.textContent=label}})}

const requestedPath=location.pathname.split('/').pop()||'index.html';
const currentPath=requestedPath==='product-grid-v53.html'?'index.html':requestedPath;
for(const link of document.querySelectorAll('.nav-links a'))if(link.getAttribute('href')===currentPath)link.setAttribute('aria-current','page');
const syncMenuLabel=()=>menu.setAttribute('aria-label',menu.getAttribute('aria-expanded')==='true'?'Close menu':'Open menu');
new MutationObserver(syncMenuLabel).observe(menu,{attributes:true,attributeFilter:['aria-expanded']});
