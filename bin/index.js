// 桜びらを生成する関数
function createSakura() {
  const sakura = document.createElement('div');
  sakura.classList.add('sakura');
  
  // 桜びらのサイズをランダムに設定
  const size = Math.random() * 5 + 5;
  sakura.style.width = `${size}px`;
  sakura.style.height = `${size}px`;
  
  // 画面内のランダムな位置に配置
  sakura.style.left = `${Math.random() * window.innerWidth}px`;
  
  // アニメーション設定
  sakura.style.transition = `transform 5s linear, bottom 5s linear`;
  sakura.style.transform = `rotate(${Math.random() * 360}deg)`;
  
  // アニメーション開始
  setTimeout(() => {
    sakura.style.bottom = `${window.innerHeight + 10}px`;
    sakura.style.transform = `rotate(${Math.random() * 360}deg)`;
  }, 0);
  
  // アニメーション終了後に要素を削除
  sakura.addEventListener('transitionend', () => {
    sakura.remove();
  });
  
  document.body.appendChild(sakura);
}
  