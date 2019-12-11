'use strict';

const createStatusBtn = () => {
    const statusBtn = document.createElement('button');
    statusBtn.innerHTML = '作業中';
    return statusBtn;
};

const createDeleteBtn = () => {
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '削除';
    return deleteBtn;
};

const addData = (data) => {
    const tr = document.createElement('tr')
    data.forEach((item,index) => {
        const td = document.createElement('td');
        if(typeof item !== 'object') {
            td.innerHTML = item;
        } else {
            td.appendChild(item);
        } 
        tr.appendChild(td);
    });
    document.getElementById('addData').appendChild(tr);
};

let idCnt = 0;
document.getElementById('addBtn').addEventListener('click',(event)=>{
    event.preventDefault();
    let data = [];

    data[0] = idCnt;                                            //ID
    data[1] = document.getElementById('form').comment.value;    //コメント
    data[2] = createStatusBtn();                                //ステータスボタン
    data[3] = createDeleteBtn();                                //削除ボタン
    
    addData(data);

    document.getElementById('form').comment.value = "";
    idCnt++;
});