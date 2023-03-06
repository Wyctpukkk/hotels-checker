export function defaultChekIn() {
  let d = new Date();
  let year = d.getFullYear();
  let month =
    d.getMonth() + 1 < 10
      ? '0' + String(d.getMonth() + 1)
      : String(d.getMonth() + 1);
  let day = d.getDate() < 10 ? '0' + String(d.getDate()) : String(d.getDate());
  return year + '-' + month + '-' + day;
}

export function dayCount(count, checkIn) {
  let d = new Date(checkIn);
  d.setDate(d.getDate() + count);
  let year = d.getFullYear();
  let month =
    d.getMonth() + 1 < 10
      ? '0' + String(d.getMonth() + 1)
      : String(d.getMonth() + 1);
  let day = d.getDate() < 10 ? '0' + String(d.getDate()) : String(d.getDate());

  return year + '-' + month + '-' + day;
}

export function num_word(value, words) {
  value = Math.abs(value) % 100;
  let num = value % 10;
  if (value > 10 && value < 20) return `${value} ${words[2]} `;
  if (num > 1 && num < 5) return `${value} ${words[1]} `;
  if (num === 1) return `${value} ${words[0]} `;
  return `${value} ${words[2]} `;
}

export function name_month(value) {
  const arr = String(value).split('-');
  let year = arr[0];
  let day = arr[2];
  let month;
  switch (arr[1]) {
    case '01':
      month = 'января';
      break;
    case '02':
      month = 'февраля';
      break;
    case '03':
      month = 'марта';
      break;
    case '04':
      month = 'апреля';
      break;
    case '05':
      month = 'мая';
      break;
    case '06':
      month = 'июня';
      break;
    case '07':
      month = 'июля';
      break;
    case '08':
      month = 'августа';
      break;
    case '09':
      month = 'сентября';
      break;
    case '10':
      month = 'октября';
      break;
    case '11':
      month = 'ноября';
      break;
    case '12':
      month = 'декабря';
      break;

    default:
      month = arr[1];
  }
  return day + ' ' + month + ' ' + year;
}
