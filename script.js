'use strict';

let idCnt = 0;

const tdAdd = (content, tr) => {
    const td = document.createElement('td');
    td.innerHTML = content;
    tr.appendChild(td);
    return tr;
};

document.getElementById('addBtn').addEventListener('click',(event)=>{
    event.preventDefault();
    const id = idCnt;
    const comment = document.getElementById('form').comment.value;

    let tr = document.createElement('tr');
    tr = tdAdd(id,tr);
    tr = tdAdd(comment,tr);
    tr = tdAdd('<button>作業中</button>',tr);
    tr = tdAdd('<button>削除</button>',tr);
    document.getElementById('addData').appendChild(tr);

    document.getElementById('form').comment.value = "";
    idCnt++;
});