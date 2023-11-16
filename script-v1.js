/**
 * Working (Barebone)
 *
 * ❯ shasum -a 256 /Users/ozan/Code/kreate-scripts/node_ts_swc_jest/script.js
 * 09fada27aca4e4688c44c38283c5dd9c39a6083f3d6533d91b9d88f0e2d292c1  /Users/ozan/Code/kreate-scripts/node_ts_swc_jest/script.js
 */

setDefaultPackageManager("yarn");

initProject((name) => ({
  name,
  version: '0.1.0',
  scripts: (add) => {
    add('test', 'jest');
    add('test:watch', 'jest --watch');
    add('coverage', 'jest --silent --coverage');
    add('lint', "eslint '*/**/*.{js,ts,md}'");
    add('lint:fix', "eslint '*/**/*.{js,ts}' --quiet --fix");
    add('prettier:doc', 'prettier *.md --write');
    add('build', 'rimraf dist && tsc');
  },
  license: 'MIT',
}));

dependencies(({ addDev }) => {
  addDev("@swc-node/jest", "^1.4.3");
  addDev("@swc-node/register", "^1.4.2");
  addDev("@swc-node/sourcemap-support", "^0.1.11");
  addDev("@swc/cli", "^0.1.55");
  addDev("@swc/core", "^1.3.35");
  addDev("@trivago/prettier-plugin-sort-imports", "^3.1.1");
  addDev("@tsconfig/node16", "^1.0.2");
  addDev("@types/jest", "^27.0.2");
  addDev("@types/node", "^16.11.22");
  addDev("@typescript-eslint/eslint-plugin", "^4.33.0");
  addDev("@typescript-eslint/parser", "^4.33.0");
  addDev("eslint", "^7.32.0");
  addDev("eslint-config-prettier", "^8.3.0");
  addDev("eslint-plugin-jest", "^25.0.1");
  addDev("eslint-plugin-prettier", "^4.0.0");
  addDev("jest", "^27.2.5");
  addDev("prettier", "^2.4.1");
  addDev("rimraf", "^3.0.2");
  addDev("typescript", "^4.5.5");
});

gitInit();

copyContentsToProjectRoot(true);
