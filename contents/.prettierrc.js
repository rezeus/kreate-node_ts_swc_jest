module.exports = {
  semi: true,
  trailingComma: "all",
  singleQuote: false,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  // https://github.com/trivago/prettier-plugin-sort-imports#apis
  importOrder: ["<THIRD_PARTY_MODULES>", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
