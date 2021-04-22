function solution(time) {
  let split = time.split(':');
  let hour = split[0];
  let minutes = split[1];
  let seconds = split[2].substring(0, 2);
  let period = time.slice(-2);

  if (hour === '00' && period === 'AM') {
    return `00:${minutes}:${seconds}`;
  }
  if (hour === '00' && period === 'PM') {
    return `12:${minutes}:${seconds}`;
  }
  if (hour === '12' && period === 'AM') {
    return `00:${minutes}:${seconds}`;
  }
  if (hour === '12' && period === 'PM') {
    return `12:${minutes}:${seconds}`;
  }
  if (period === 'AM') {
    return `${hour}:${minutes}:${seconds}`;
  }
  if (period === 'PM') {
    return `${parseInt(hour, 10) + 12}:${minutes}:${seconds}`;
  }
}

console.log(solution('12:40:22AM'));
console.log(solution('12:55:45PM'));
console.log(solution('07:05:45PM'));
console.log(solution('00:00:45AM'));
console.log(solution('00:00:45PM'));
