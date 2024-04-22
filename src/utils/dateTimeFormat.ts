function dateTimeFormat(data : number ) {
  return (new Intl.DateTimeFormat('ko-KR', {
    weekday: 'long',
    year: 'numeric', 
    month: 'long',
    day: 'numeric', 
    hour: 'numeric', 
    minute: 'numeric',
  }).format(data));
}

export default dateTimeFormat;
