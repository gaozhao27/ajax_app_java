const buildHTML = (XHR) => {
  const item = XHR.response;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.createdAt}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};

function post (){
  const submit = document.getElementById("submit"); //投稿ボタン要素取得id
  submit.addEventListener("click", (e) => { //クリックしてイベント発火
    e.preventDefault();
    const form = document.getElementById("form"); //フォーム要素取得
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest(); //和<input type="submit" value="投稿する" id="submit" />重复request导致投稿两次
    XHR.open("POST", "/posts", true); //エラーが出ると404notfound
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.response.error}`);
        return null;
      };
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      const item = XHR.response;
      const html = `
        <div class="post">
          <div class="post-date">
            投稿日時：${item.createdAt}
          </div>
          <div class="post-content">
            ${item.content}
          </div>
        </div>`;
        list.insertAdjacentHTML("afterend", buildHTML(XHR));
        formText.value = "";
    };
  });
};

window.addEventListener('load', post);