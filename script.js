'use strict';

// ステータスボタンの作成
const createStatusBtn = () => {
    const statusBtn = document.createElement('button');
    statusBtn.textContent = '作業中';
    statusBtn.addEventListener('click', ()=>{
        const statusText = event.target.textContent;
        const taskElem = statusBtn.parentNode.parentNode;
        if(statusText === '作業中'){
            statusBtn.textContent = '完了';
            taskElem.removeAttribute('id');
            taskElem.setAttribute('id', 'complete');
        } else {
            statusBtn.textContent = '作業中';
            taskElem.removeAttribute('id');
            taskElem.setAttribute('id', 'working');
        }   
    });
    return statusBtn;
};

// 削除ボタンの作成
const createDeleteBtn = () => {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '削除';
    deleteBtn.addEventListener('click', ()=>{
        event.target.parentNode.parentNode.remove();
    });
    return deleteBtn;
};

// タスクデータの作成・追加
const addData = (task) => {
    const tr = document.createElement('tr')
    tr.setAttribute('id', 'working');       //デフォルトは「作業中」
    task.forEach((item,index) => {
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

// タスクデータの追加メイン処理
let idCnt = 0;
document.getElementById('addBtn').addEventListener('click',(event)=>{
    event.preventDefault();
    const task = [];

    task[0] = idCnt;                                            //ID
    task[1] = document.getElementById('form').comment.value;    //コメント
    task[2] = createStatusBtn();                                //ステータスボタン
    task[3] = createDeleteBtn(idCnt);                           //削除ボタン
    
    addData(task);

    document.getElementById('form').comment.value = "";
    idCnt++;
});

// ステータスフィルターの処理
document.getElementById('type').addEventListener('change', ()=>{
    const statusFilter = document.getElementsByName('statusFilter');
    for(let i = 0; i < statusFilter.length; i++){
        if(statusFilter[i].checked){
            let status = statusFilter[i].value;
            let taskList = document.getElementById('addData').children;
            if(status === "all"){
                for(let j = 0; j < taskList.length; j++){
                    taskList[j].classList.remove('hidden');
                };
            } else {
                for(let j = 0; j < taskList.length; j++){
                    if(taskList[j].getAttribute('id') !== status){
                        taskList[j].classList.add('hidden');
                    } else {
                        taskList[j].classList.remove('hidden');
                    }
                };
            }
        };
    };
});