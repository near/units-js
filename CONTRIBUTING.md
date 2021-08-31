# Contributing

You want to help improve near-runner-js? Thank you!

# Yarn 2

This project uses [Yarn 2](https://yarnpkg.com/getting-started/migration) in [Zero-Install mode](https://yarnpkg.com/features/zero-installs) so you shouldn't have to run `yarn install` when you first clone this repository.

* Make sure you have [Node.js] and the latest [yarn] installed
* Clone the code
* `cd` into the repo

Now you should be able to run project scripts:

* `yarn test`
* `yarn lint`

Or run any other NPM package included in this project:

* `yarn xo`

  [Node.js]: https://nodejs.org/en/download/package-manager/
  [yarn]: https://yarnpkg.com/

# Recommendation: VS Code

We recommend using [Visual Studio Code](https://code.visualstudio.com/). We included a nice `.vscode` folder in this repository that will suggest some extensions for you so you'll be productive right away. This will mean things like:

* It will work with Yarn 2, even if this project switches [away from the `node_modules` linker](https://yarnpkg.com/getting-started/migration/#switching-to-plugnplay) in the future
* Our linter will work with you instead of against you
* TypeScript will be fully integrated, giving you help and hints
* Tests will run inline as you make changes, and highlight untested lines in the files you modify