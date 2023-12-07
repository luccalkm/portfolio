module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /translate-x-/,
      variants: ["responsive", "hover", "focus"],
    },
    {
      pattern: /translate-y-/,
      variants: ["responsive", "hover", "focus"],
    },
    {
      pattern: /-translate-x-/,
      variants: ["responsive", "hover", "focus"],
    },
    {
      pattern: /-translate-y-/,
      variants: ["responsive", "hover", "focus"],
    },
    {
      pattern: /delay-/,
      variants: ["responsive", "hover", "focus"],
    },
  ],
};
