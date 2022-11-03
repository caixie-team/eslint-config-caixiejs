module.exports = {
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', 'caixiejs-ts'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/react-in-jsx-scope': 'off'
  }
};
