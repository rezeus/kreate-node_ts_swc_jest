/**
 * Working (Barebone)
 *
 * ❯ shasum -a 256 /Users/ozan/Code/kreate-scripts/node_ts_swc_jest/script.js
 * 09fada27aca4e4688c44c38283c5dd9c39a6083f3d6533d91b9d88f0e2d292c1  /Users/ozan/Code/kreate-scripts/node_ts_swc_jest/script.js
 */

// setDefaultPackageManager("yarn");
setDefaultPackageManager("pnpm");

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
    // add('build', 'rimraf dist && tsc');
  },
  license: 'MIT',
}));

dependencies(({ addDev }) => {
  // addDev("@swc-node/jest", "^1.6.7");
  addDev("@swc-node/register", "^1.6.7");
  addDev("@swc-node/sourcemap-support", "^0.3.0");
  // addDev("@swc/cli", "^0.1.62");
  addDev("@swc/core", "^1.3.89");
addDev("@swc/jest", "^0.2.29");
  // addDev("@swc/helpers", "^0.5.2");
  addDev("@trivago/prettier-plugin-sort-imports", "^4.2.0");
  addDev("@tsconfig/node18", "^18.2.2");
  addDev("@types/jest", "^29.5.5");
  addDev("@types/node", "^18.18.0");
  // addDev("@typescript-eslint/eslint-plugin", "^5.57.1");
addDev("@typescript-eslint/eslint-plugin", "^6.7.3");
  // addDev("@typescript-eslint/parser", "^5.57.1");
addDev("@typescript-eslint/parser", "^6.7.3");
  addDev("eslint", "^8.50.0");
  // addDev("eslint-config-prettier", "^8.8.0");
addDev("eslint-config-prettier", "^9.0.0");
  addDev("eslint-plugin-jest", "^27.4.0");
  // addDev("eslint-plugin-prettier", "^4.2.1");
addDev("eslint-plugin-prettier", "^5.0.0");
  addDev("jest", "^29.7.0");
  addDev("prettier", "^3.0.0");
  // addDev("rimraf", "^5.0.4");
  addDev("typescript", "^5.2.2");
});

gitInit();

copyContentsToProjectRoot(true);
