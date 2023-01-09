module.exports = {
  extends: ["next", "turbo", "prettier"],
  rules: {
    "object-curly-spacing": ["error", "always"],
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
  },
};
