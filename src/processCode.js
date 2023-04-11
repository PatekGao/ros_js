export function processCode(code) {
  const parts = code.split('/');
  const classNumber = parts[0].substring(1);
  const name = parts[1];
  const units = parts[2].substring(0, parts[2].length - 1);

  let str = units;
  let Unit1 = [],
    Unit2 = [],
    Unit3 = [],
    Unit4 = [];
  let i = 0;

  while (i < str.length) {
    let unit = '';
    if (str[i] === '1') {
      i++;
      while (
        i < str.length &&
        str[i] !== '1' &&
        str[i] !== '2' &&
        str[i] !== '3' &&
        str[i] !== '4' &&
        i < str.length - 1
      ) {
        unit += str[i];
        i++;
      }
      if (i === str.length - 1) {
        unit += str[str.length - 1];
      }
      Unit1.push(unit);
    } else if (str[i] === '2') {
      i++;
      while (
        i < str.length &&
        str[i] !== '1' &&
        str[i] !== '2' &&
        str[i] !== '3' &&
        str[i] !== '4' &&
        i < str.length - 1
      ) {
        unit += str[i];
        i++;
      }
      if (i === str.length - 1) {
        unit += str[str.length - 1];
      }
      Unit2.push(unit);
    } else if (str[i] === '3') {
      i++;
      while (
        i < str.length &&
        str[i] !== '1' &&
        str[i] !== '2' &&
        str[i] !== '3' &&
        str[i] !== '4' &&
        i < str.length - 1
      ) {
        unit += str[i];
        i++;
      }
      if (i === str.length - 1) {
        unit += str[str.length - 1];
      }
      Unit3.push(unit);
    } else if (str[i] === '4') {
      i++;
      while (
        i < str.length &&
        str[i] !== '1' &&
        str[i] !== '2' &&
        str[i] !== '3' &&
        str[i] !== '4' &&
        i < str.length - 1
      ) {
        unit += str[i];
        i++;
      }
      if (i === str.length - 1) {
        unit += str[str.length - 1];
      }
      Unit4.push(unit);
    } else {
      i++;
    }
  }
  console.log(
    `class = ${classNumber}, name = ${name}, Unit1 = ${Unit1}, Unit2 = ${Unit2}, Unit3 = ${Unit3}, Unit4 = ${Unit4}`,
  );
}
