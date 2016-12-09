

(function() {
'use strict' ;
var todoList = document.getElementById('todo-list-js');
var todoForm = document.getElementById('todo-form-js');
var todoInput = document.querySelector('#todo-form-js input');

var addItem = function(event) {
event.preventDefault();
//テキストが空なら処理を実行しない
if (!todoInput.value) {
return;
};
//テキストボックスの内容を追加
var listItem = document.createElement('li');
listItem.textContent = todoInput.value;
todoList.appendChild(listItem);
//入力後、テキストボックスの中身を空にする
todoInput.value = '';
};

todoForm.addEventListener('submit' , addItem);
}());
