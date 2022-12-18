function countHours(year, holidays) {
  let count = 0;

  function isWeekend (date) {
    return (date.getDay() === 0 || date.getDay() === 6);
  }

  holidays.forEach(bankHoliday => {
    const date = new Date(year+'/'+bankHoliday);
    if(!isWeekend(date)) count++;

  });
  return count*2;
}
