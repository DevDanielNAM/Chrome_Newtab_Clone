(function () {
  const dateElement = document.getElementById("date");
  const timeElement = document.getElementById("time");

  const modifyNumber = (number) => {
    return number < 10 ? "0" + number : number;
  };

  const getNowDate = () => {
    const nowDate = new Date();
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    let month = modifyNumber(nowDate.getMonth() + 1);
    let date = modifyNumber(nowDate.getDate());
    let day = week[nowDate.getDay()];
    setNowDate(month, date, day);
  };

  const setNowDate = (month, date, day) => {
    return (dateElement.textContent = `${month}월 ${date}일 ${day}요일`);
  };

  const getNowTime = () => {
    const nowDate = new Date();
    let hour = modifyNumber(nowDate.getHours());
    let minute = modifyNumber(nowDate.getMinutes());
    let second = modifyNumber(nowDate.getSeconds());
    setNowTime(hour, minute, second);
  };

  const setNowTime = (hour, minute, second) => {
    return (timeElement.textContent = `${hour}:${minute}:${second}`);
  };

  getNowDate();
  getNowTime();
  setInterval(getNowTime, 1000);
})();
