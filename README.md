# What is it?

It's a simple React Native application, based on [this calculator](https://github.com/ReactNativeSchool/react-native-calculator), showcasing how a white label app could be implemented with React Native and Babel.

Have a look at [this blog post](https://medium.com/@jaroslaw.marek/white-label-mobile-app-with-react-native-and-babel-490363ec59) for a detailed explanation of how it works.

# Building

You can build three different versions of this app. One for each "brand": `calc_co`, `acme` and the default.

Obviously, before building it you need to run `yarn install`.

## Default brand

`yarn run android` or `yarn run ios` will produce the following app.

![Default branded app screenshot](docs/img/default.png)

## Acme brand

`APP_BRAND=acme yarn run android` or `APP_BRAND=acme yarn run ios` will produce the following app.

![Acme branded app screenshot](docs/img/acme.png)

## Calc Co brand

`APP_BRAND=calc_co yarn run android` or `APP_BRAND=calc_co yarn run ios` will produce the following app.

![Calc_co branded app screenshot](docs/img/calc_co.png)

# Switching between the brands in emulator

In order to be able to switch between various branded versions of this app in an emulator you may need to run it with `--clear` option (e.g. `yarn run android --clear`) and reload the app within Expo (press Ctrl+M or Cmd+M and tap "Reload").