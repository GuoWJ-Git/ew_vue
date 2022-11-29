module.exports = {
  'src/**/*.{js,jsx,vue,ts,tsx}': ['eslint --fix', 'prettier --write', 'git add'],
  'src/**/*.{html,vue,css,sass,scss}': ['stylelint --fix', 'prettier --write', 'git add'],
};
