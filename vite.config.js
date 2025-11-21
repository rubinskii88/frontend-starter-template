export default {
  root: "assets/js",
  build: {
    outDir: "../../public/js",
    emptyOutDir: false,
    rollupOptions: {
      input: {
        script: "assets/js/main.js",
      },
      output: {
        entryFileNames: "script.js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
};
