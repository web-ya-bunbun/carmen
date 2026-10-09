import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
  return {
    //ロリポップ用
    base: command === 'build' ? '/samples/carmen/' : '/',
    //GitHub Pages用
    // base: command === 'build' ? '/carmen/' : '/',
  };
});
