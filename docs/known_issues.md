# Known issues

## Building inside Android Studio
Whenever you build the android project in Android Studio, it will break due to lack of required environmental variables.
See [the mechanics](./mechanics.md#Android) "Android" section for detailed explanation on why that happens.

The fix is on its way.

The workaround is to not use Android Studio :D and just run `yarn android` from the command line.