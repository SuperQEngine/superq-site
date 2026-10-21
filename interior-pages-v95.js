'use strict';
(()=>{
 const oldProductHashes=new Set(['#read','#product','#deep-read','#guide','#pairs','#super-coach','#practice','#approach']);
 if(location.pathname.endsWith('/about.html')&&oldProductHashes.has(location.hash))location.replace('features.html'+location.search+location.hash);
})();
