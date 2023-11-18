module.exports = {
    hooks: {
      'pre-commit': 'lint-staged && pnpm run build',
      'pre-push': 'pnpm run lint',
      // Add more hooks as needed
    },
  };
  