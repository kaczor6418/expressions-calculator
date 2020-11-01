module.exports = {
    '**/*.ts': () => `eslint . --ext .ts --quiet --fix`,
    '**/*.scss': () => `stylelint **/*.scss --fix`
};
