module.exports = {
  plugins: ['svelte3'],
  extends: ['caixiejs-ts'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ]
};
