const themeStore = (() => {
  let current = $state('dark');

  return {
    get current() { return current; },
    init() {
      current = document.documentElement.dataset.theme ?? 'dark';
    },
    toggle() {
      current = current === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = current;
      localStorage.setItem('theme', current);
    }
  };
})();

export { themeStore };
