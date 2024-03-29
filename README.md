# What is it?

It's a simple React Native application, based on [this calculator](https://github.com/ReactNativeSchool/react-native-calculator), showcasing how a white label app could be implemented with React Native and Babel.

Have a look at [this blog post](https://medium.com/@jaroslaw.marek/white-label-mobile-app-with-react-native-and-babel-490363ec59) for a detailed explanation of how it works.

# Local setup
## EnvKey
This project uses [EnvKey](https://envkey.com/) for configuration management. You need to install [`envkey-source`](https://docs-v2.envkey.com/docs/install#install-envkey-source-standalone) to be able to run it locally:
```
VERSION=$(curl https://envkey-releases.s3.amazonaws.com/latest/envkeysource-version.txt) && curl -s https://envkey-releases.s3.amazonaws.com/envkeysource/release_artifacts/$VERSION/install.sh | bash
```

## Select which product brand you work on
In your .env file, ensure the value of ENVKEY is set and points to the desired brand configuration from EnvKey.
Then run the following command to configure the given brand:
```
yarn configure-brand
```

Note: for Mac, it is necessary to have XCode installed and on the path prior to running `yarn configure-brand`.

Note: if you're not on Mac, you can use the `yarn configure-brand:android` instead.

# Building

You can build three different versions of this app. One for each "brand": `calc_co`, `acme` and the default.

Obviously, before building it you need to run `yarn install`.

# Running

Ensure you start the Metro bundler manually (with `yarn start`) before running the app in Debug mode.
When Metro is started automatically via react-native scripts, it does not contain the required environmental variables.

`yarn android` or `yarn ios` will produce one of the following apps (depending on which ENVKEY is defined in the `.env` file).

![Default branded app screenshot](docs/img/default.png)

![Acme branded app screenshot](docs/img/acme.png)

![Calc_co branded app screenshot](docs/img/calc_co.png)

## Switching between the brands

1. Stop the Metro bundler.
1. Change  value of `ENVKEY` in the `.env` file.
1. Run `yarn configure-brand`.
1. Start the Metro bundler with `yarn start --reset-cache` (resetting the bundler cache is important here)
1. Start the app with `yarn android` or `yarn ios`

# More detailed docs
- Usage of the Whitelabelling mechanism: [docs/usage.md](docs/usage.md)
- Intricacies and mechanics of the Whitelabelling mechanism: [docs/mechanics.md](docs/mechanics.md)
- Known issues: [docs/known_issues.md](docs/known_issues.md)

# Funding

If you like my work and thinking about using it in a commercial project, please consider [buying me a coffee](https://www.buymeacoffee.com/jar0s).
Thank you.