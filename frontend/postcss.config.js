module.exports = {
  plugins: [
    require("autoprefixer"),
    require("postcss-preset-env")({
      stage: 3,
      features: {
        "color-adjust": {
          replacement: "print-color-adjust",
        },
      },
    }),
  ],
};
