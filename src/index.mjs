import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompletelist = (target) => {
  // 押された削除ボタンの親タグ(div)を未完了リストから削除
  document.getElementById("incomplete-list").removeChild(target);
}

// 未完了リストに追加する関数
const createIncompleteList = (text) =>{
    // div生成
    const div = document.createElement("div");
    div.className = "list-row";
  
    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;
  
    // button（完了）タグ生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
      // 押された完了ボタンの親タグ(div)を未完了リストから削除。
      const completeTarget = completeButton.parentNode;
      deleteFromIncompletelist(completeButton.parentNode);
      
      // button(戻す)タグ生成
      const returnButton = document.createElement("button");
      returnButton.innerText = "戻す";
      returnButton.addEventListener("click", () => {
        // 押された戻すボタンの親タグ(div)を完了リストから削除。
        const returnTarget = returnButton.parentNode;
        document.getElementById("complete-list").removeChild(returnTarget);

        const text = returnButton.parentNode.firstElementChild.innerText;
        createIncompleteList(text);
      });
  
      // 完了リストに追加するdivを生成
      completeTarget.removeChild(completeButton);
      completeTarget.removeChild(deleteButton);
      completeTarget.appendChild(returnButton);
      document.getElementById("complete-list").appendChild(completeTarget);
    });
  
    // button（削除）タグ生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
      // 押された削除ボタンの親タグ(div)を未完了リストから削除
      deleteFromIncompletelist(deleteButton.parentNode);
    });
  
    // divタグの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
  
    // 未完了リストに追加
    document.getElementById("incomplete-list").appendChild(div);
};

document.getElementById("add-button").addEventListener("click",() => onClickAdd());