import {
  itemsFromBackend1,
  itemsFromBackend2,
  itemsFromBackend3,
  itemsFromBackend4,
  itemsFromBackend5,
  answer1,
  answer2,
  answer3,
  answer4,
} from './itemsTotal';

export function processCode(code) {
  const answerSheet = [];
  let Unit1 = [],
    Unit2 = [],
    Unit3 = [],
    Unit4 = [];

  function check(item) {
    // if (answerSheet.length < 40) {
    if (answer1.includes(item.id)) {
      if (Unit1.includes(item.id)) {
        answerSheet.push({
          id: item.id,
          status: true,
        });
      } else {
        answerSheet.push({
          id: item.id,
          status: false,
        });
      }
    } else if (answer2.includes(item.id)) {
      if (Unit2.includes(item.id)) {
        answerSheet.push({
          id: item.id,
          status: true,
        });
      } else {
        answerSheet.push({
          id: item.id,
          status: false,
        });
      }
    } else if (answer3.includes(item.id)) {
      if (Unit3.includes(item.id)) {
        answerSheet.push({
          id: item.id,
          status: true,
        });
      } else {
        answerSheet.push({
          id: item.id,
          status: false,
        });
      }
    } else if (answer4.includes(item.id)) {
      if (Unit4.includes(item.id)) {
        answerSheet.push({
          id: item.id,
          status: true,
        });
      } else {
        answerSheet.push({
          id: item.id,
          status: false,
        });
      }
    }
    // }
  }

  const parts = code.split('/');
  const classNumber = parts[0].substring(1);
  const name = parts[1];
  let str = parts[2].substring(0, parts[2].length - 1);
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

  itemsFromBackend1.forEach((item) => {
    check(item);
  });
  itemsFromBackend2.forEach((item) => {
    check(item);
  });
  itemsFromBackend3.forEach((item) => {
    check(item);
  });
  itemsFromBackend4.forEach((item) => {
    check(item);
  });
  itemsFromBackend5.forEach((item) => {
    check(item);
  });

  console.log(
    `class = ${classNumber}, name = ${name}, Unit1 = ${Unit1}, Unit2 = ${Unit2}, Unit3 = ${Unit3}, Unit4 = ${Unit4}`,
  );
  return { classNumber, name, answerSheet };
}
