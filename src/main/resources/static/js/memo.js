function post (){
  const submit = document.getElementById("submit"); //投稿ボタン要素取得id
  submit.addEventListener("click", () => { //クリックしてイベント発火
    e.preventDefault();
    const form = document.getElementById("form"); //フォーム要素取得
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest(); //和<input type="submit" value="投稿する" id="submit" />重复request导致投稿两次
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
  });
};

window.addEventListener('load', post);