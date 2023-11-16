// /Users/ozan/Code/tmp/node_ts_swc_jest_fixproj/script.js
// FIXME This is the kreate script and is going to be extracted from this projet (along with "contents")

setDefaultPackageManager("pnpm");

initProject((name) => ({
  name,
  version: "0.1.0",
  license: "MIT",
  scripts: (add) => {
    add("test", "jest");
    add("test:watch", "jest --watch");
    add("test:cover", "jest --silent --coverage");
    add("lint", "eslint '*/**/*.{js,ts,md}'");
    add("lint:fix", "eslint '*/**/*.{js,ts}' --quiet --fix");
    add("prettier:doc", "prettier *.md --write");
    add("type_check", "tsc --noEmit");
  },
}));

dependencies(({ addDev }) => {
  addDev("@swc-node/register", "^1.6.8");
  addDev("@swc-node/sourcemap-support", "^0.3.0");
  addDev("@swc/core", "^1.3.96");
  addDev("@swc/jest", "^0.2.29");
  addDev("@trivago/prettier-plugin-sort-imports", "^4.2.1");
  addDev("@tsconfig/node20", "^20.1.2");
  addDev("@types/jest", "^29.5.7");
  addDev("@types/node", "^20.8.10");
  addDev("@typescript-eslint/eslint-plugin", "^6.9.1");
  addDev("@typescript-eslint/parser", "^6.9.1");
  addDev("eslint", "^8.53.0");
  addDev("eslint-config-prettier", "^9.0.0");
  addDev("eslint-plugin-jest", "^27.6.0");
  addDev("eslint-plugin-prettier", "^5.0.1");
  addDev("jest", "^29.7.0");
  addDev("prettier", "^3.0.3");
  addDev("typescript", "^5.2.2");
});

gitInit();

copyContentsToProjectRoot(true);

// FIXME TR copyContentsToProjectRoot'tan sonra .code-workspace dosyasının ismini değiştir
