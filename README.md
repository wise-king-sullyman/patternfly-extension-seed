# Patternfly extension seed

To create an extension:

1. create an **empty** repo for your new extension
1. clone that repo to your local machine
1. `cd` into the directory created by cloning
1. run `npx tmplr patternfly/patternfly-extension-seed`
1. enter your information when prompted
    - npm scope should start with an @ symbol, i.e. `@patternfly`
    - extension name should be in sentence case but without any punctuation, i.e. `Patternfly extension seed`
    - repo URL should be the plain URL of the repo not URL used to clone, i.e. `https://github.com/patternfly/patternfly-extension-seed`
1. run `yarn` to install dependencies

From there you can:

- run `yarn start` to build and start the development server
- run `yarn test` to run the tests for the demo component
- run `yarn lint` to run the linter
- run `yarn build:docs` followed by `yarn serve:docs`, then run `yarn test:a11y` in a new terminal window to run our accessibility tests for the demo component

Upon pushing to your remote repo GitHub Actions should run which ensure that the extension can properly build, pass all tests, pass the linter check, and pass all accessibility tests. 

If you add a token to the repo with the name `NPM_TOKEN` and automation permissions on NPM it should also automatically deploy the package to NPM once it has passed the above checks.