'use strict'; {
  const display = document.getElementById('display');
  const btn = document.getElementById('btn');

  // 質問ボックス
  const hobbys = ['どんな運動が好き？','1日休みができたら何をする？','最近あった楽しかったことは？','週末は何をよくする？','雨の日は何をしがち？','超晴天の日は何をしたい？','「1人〇〇」何ができる？','どんなゲームが好き？','どんな漫画が好き？','どんな映画をよく見る？','どんな本を読みがち？','どんな系統の服を着てみたい？'];
  const loves = ['あなたにとって恋とは？','どんな恋愛がしたい？','ファーストキスはいつ？','初恋はいつ？','理想の結婚相手はどんな人？','あなたにとって愛とは？','あなたの好きなタイプは？','初デートどこに行きたい？','結婚したらどんなルール作る？','どんなデートが好き？','インドア派？アウトドア派？','恋愛において何を重視する？','結婚において何を重視する？','一目惚れをしたことある？','好きな人には態度変わる？','「顔か性格」まずどっちから判断する？'];
  const others = ['今年1の良い買い物は？','10年前に戻るとしたら何をやる？','あなたの夢は？','めちゃうざかった出来事は？','あなたにとって最強のお菓子は？','人生で特に恥ずかしかった出来事は？','生まれ変わるなら何になりたい？','将来住むなら「田舎or都会」？','これからどんな人生を過ごしたい？','あなたにとって友達とは？'];


  // ボタンクリック
  btn.addEventListener('click',() => {
    if(kinds.value == 'nothing'){
      display.textContent = 'テーマをお選びください';
    } else if (kinds.value == 'hobby') {
      display.textContent = hobbys.splice(Math.floor(Math.random() * hobbys.length),1)[0];
      if(hobbys.length === 0){
        display.textContent = '質問なくなっちゃった';
      }
    } else if (kinds.value == 'love') {
      display.textContent = loves.splice(Math.floor(Math.random() * loves.length),1)[0]; 
      if(loves.length === 0){
        display.textContent = '質問なくなっちゃった';
      }
      
    } else {
      display.textContent = others.splice(Math.floor(Math.random() * others.length),1)[0]; 
      if(others.length === 0){
        display.textContent = '質問なくなっちゃった';
      }
    }}  );

  const kinds = document.querySelector('select');
  // const display_h = document.getElementById('display_h');
  // const display_l = document.getElementById('display_l');
  // const display_o = document.getElementById('display_o');
  // const option = document.querySelector('option');




   
  }

