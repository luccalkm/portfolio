module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'contacts': "url(https://img.icons8.com/ios-filled/100/000000/contact-card.png)"
      }
    },
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
