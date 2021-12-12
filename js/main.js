'use strict'; {
  const display = document.getElementById('display');
  const btn = document.getElementById('btn');
  const hobbys = ['どんな運動が好き？','1日休みができたら何をする？','最近あった楽しかったことは？'];
  const loves = ['あなたにとって恋と愛の違いは？','どんな恋愛がしたい？','いつから恋心は芽生えた？'];
  const others = ['今年1の良い買い物は？','10年前に戻るとしたら何をやる？','あなたの夢は？'];
  

  btn.addEventListener('click',() => {
    const n = Math.floor(Math.random() * hobbys.length);
    if(kinds.value == 'nothing') {
      return;
    } else if(kinds.value == 'hobby'){
        
    switch(n){
      case 0:
        display.textContent = hobbys[0];
        break;
      case 1:
        display.textContent = hobbys[1];
        break;
      case 2:
        display.textContent = hobbys[2];
        break;
      }
    } else if (kinds.value == 'love') {
      switch(n){
        case 0:
          display.textContent = loves[0];
          break;
        case 1:
          display.textContent = loves[1];
          break;
        case 2:
          display.textContent = loves[2];
          break;
        }} else {
      switch(n){
        case 0:
          display.textContent = others[0];
          break;
        case 1:
          display.textContent = others[1];
          break;
        case 2:
          display.textContent = others[2];
          break;

    }}
  })

  const kinds = document.querySelector('select');
  const display_h = document.getElementById('display_h');
  const display_l = document.getElementById('display_l');
  const display_o = document.getElementById('display_o');
  const option = document.querySelector('option');




   
  }

