// import '@mdi/font/css/materialdesignicons.css';
// import 'vuetify/styles';

// import { App } from 'vue';
// import { createVuetify } from 'vuetify';

// export function setupVuetify(app: App<Element>) {
//   app.use(createVuetify());
// }

// export function resetVuetifyStyle() {
//   const sheets = document.styleSheets;
//   for (let thisSheet = 0; thisSheet < sheets.length; thisSheet++) {
//     const removeText = `button, [type="button"], [type="reset"], [type="submit"], [role="button"]`;
//     const sheet = sheets[thisSheet];
//     try {
//       if (sheet.cssRules) {
//         // all browsers, except IE before version 9
//         for (let i = 0; i < sheet.cssRules.length; i++) {
//           if (sheet.cssRules[i].selectorText === removeText) {
//             sheet.deleteRule(i);
//           }
//         }
//       } else {
//         // Internet Explorer before version 9
//         for (let i = 0; i < sheet.rules.length; i++) {
//           if (sheet.rules[i].selectorText === removeText) {
//             sheet.removeRule(i);
//           }
//         }
//       }
//     } catch (e) {}
//   }
// }
