'use strict';

let idCnt = 0;

document.getElementById('addBtn').addEventListener('click',(event)=>{
    event.preventDefault();
    const id = idCnt;
    const comment = document.getElementById('form').comment.value;

    const addContent = 
    `<tr>
        <td>${idCnt}</td>
        <td>${comment}</td>
        <td><button>作業中</button></td>
        <td><button>削除</button></td>
    </tr>`;
    document.getElementById('data').insertAdjacentHTML('beforeend',addContent);
    document.getElementById('form').comment.value = "";
    idCnt++;
});