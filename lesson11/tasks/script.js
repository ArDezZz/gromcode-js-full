/* eslint-disable lines-around-directive */
/* eslint-disable strict */
/* eslint-disable spaced-comment */

//====================task1===================
// const splitText = (text, len = 10) => {
//   const strArr = [];
//   let startPosition = 0;
//   if (text !== String(text)) {
//     return null;
//   }
//   while (true) {
//     let chunk = text.substr(startPosition, len);
//     if (chunk.length === 0) {
//       break;
//     }
//     strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
//     startPosition += len;
//   }
//   return strArr.join('\n');
// };
// console.log(splitText('some message with the text'));
//========================task2=================
// const contacts = [
//   {
//     name: 'Tom',
//     phoneNumber: '666-66-66',
//   },
//   {
//     name: 'Sam',
//     phoneNumber: '555-55-55',
//   },
//   {
//     name: 'Ann',
//     phoneNumber: '444-44-44',
//   },
//   {
//     name: 'Max',
//     phoneNumber: '333-33-33',
//   },
//   {
//     name: 'Denis',
//     phoneNumber: '111-11-11',
//   },
// ];
// const sortContacts = (contacts, isAsc) => {
//   if (!Array.isArray(contacts)) {
//     return null;
//   }

//   if (isAsc === false) {
//     const result = contacts.sort((a, b) => {
//       return b.name.localeCompare(a.name);
//     });
//     return result;
//   }
//   const result = contacts.sort((a, b) => {
//     return a.name.localeCompare(b.name);
//   });
//   return result;
// };

// console.log(sortContacts(contacts, true));
//====================task3===============
const splitText = (text, len = 10) => {
  const strArr = [];
  let startPosition = 0;
  if (text !== String(text)) {
    return null;
  }
  while (true) {
    let chunk = text.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += len;
  }
  return strArr.join('\n');
};
console.log(splitText('some message with the text'));
