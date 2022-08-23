export const ConvertDate = (date) => {
    const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

    let year = date.getFullYear();
    let month = (String(date.getMonth()+1)).padStart(2,'0');
    let day = (String(date.getDate())).padStart(2,'0');
    let dayOfWeek = week[date.getDay()];

    return `${year}년 ${month}월 ${day}일 ${dayOfWeek}`;

} 