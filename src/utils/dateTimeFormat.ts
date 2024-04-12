
const options = {
  weekday: 'long',
  year: 'numeric', // 연도를 숫자로 표시
  month: 'long',
  day: 'numeric', // 날짜를 숫자로 표시
  hour: 'numeric', // 시간을 숫자로 표시
  minute: 'numeric', // 분을 숫자로 표시
};

function dateTimeFormat(data : number ) {
  return (new Intl.DateTimeFormat('ko-KR', options).format(data));
}

export default dateTimeFormat;
