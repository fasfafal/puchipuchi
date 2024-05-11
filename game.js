let original = true;
 

  function changeWords() {
    let buttons = document.querySelectorAll(".changeable");
    let cleckCount = '';
        clickCount +='ごめんなさい';
        document.getElementById("clickCount").innerText = ` ${clickCount}`;
        
      if (original) {
        buttons.forEach(function(button) {
        button.innerText = "こどもごころ";
        });
      } else {
        buttons.forEach(function(button, index) {
          // 元のテキストに戻す
          if (index === 0) button.innerText = "なん";
          if (index === 1) button.innerText = "で";
          if (index === 2) button.innerText = "すぅ";
        });
      }
      let h3Text = document.querySelector("h3"); // h3タグを取得
      if (original) {
        // テキストを変更
         h3Text.innerHTML = h3Text.innerHTML.replace('〜プレストの素早い連打で気づく爽快感〜', 'ープレストの素早い連打で気づく爽快感ー');
      } else {
        // テキストを元に戻す
         h3Text.innerHTML = h3Text.innerHTML.replace('ープレストの素早い連打で気づく爽快感ー', '〜プレストの素早い連打で気づく爽快感〜');
      }
      setTimeout(function() {
           let buttons = document.querySelectorAll(".changeable");
           buttons.forEach(function(button){
            button.disabled = true ;
            document.querySelector("a.no-click").classList.remove("no-click");
           });//ボタンを無効にする
           
        }, 10000); // 10000ミリ秒後に実行
     
        setTimeout(function(){
          document.getElementById("finish").innerText = "忙しいと思うので、もうそろそろ終わったほうがいいですよ";
         },20000);
       
    original = !original; // 状態を反転させる
  }
  