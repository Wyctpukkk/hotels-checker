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
