let listLength = 30;

let nowDay = new Date(new Date().setHours(0, 0, 0, 0)) / 1000;

let reviseInterval = [0, 2, 4, 7, 15, 30];

let listObj = {};

let fs = require('fs');

function listDayArray() {
    let listDayArray = [];
    for (let i = 0; i <= 29; i += 1) {
        listDayArray.push(nowDay + 86400 * i)
    }
    listDayArray.forEach((nowDay, index) => {
        let someList = 'list' + (index + 1);
        reviseDay(nowDay, index, someList);
    });
}

function reviseDay(nowDay, index, someList) {
    let reviseDays = [];
    reviseInterval.forEach(element => {
        let list1 = transformDate(new Date((86400 * element + nowDay) * 1000));
        reviseDays.push(list1);
    });
    if (reviseDays.length === 6) {
        console.log('"' + someList + '"', ':', reviseDays, ',');

    }
}

function transformDate(params) {
    let list1;
    let year = params.getFullYear();
    let month = params.getMonth() + 1;
    let date = params.getDate();
    let week = params.getDay();

    let weekArray = ['日', '一', '二', '三', '四', '五', '六'];
    weekArray.forEach((e, index) => {
        if (index === week) {
            week = '星期' + e;
        }
    });
    return list1 = year + '-' + month + '-' + date;
}

listDayArray();