#!/bin/bash
set -e

# This script is meant to be run from the rrot of the project. Use `yarn configure-brand` convenience commands to trigger it.

# Ensure env vars from EnvKey are loaded
. ./scripts/load_env.sh

# (re)Generate tsconfig.json file with appropriate paths for the given brand (ignoring 'ios' folder explicitly due to https://github.com/rasenplanscher/tsconfig.js/issues/10)
echo -e "\n=> Generating tsconfig.json ..."
npx tsconfig.js --once -- ios ios_template node_modules

# Use "configure_brand.sh android" or "configure_brand.sh ios" to configure respective platforms, or pass in all platforms
for OPTION in "$@"; do
    if [[ "$OPTION" == "android" ]]; then
        configureAndroid=true
    elif [[ "$OPTION" == "ios" ]]; then
        configureIOS=true
    fi
done

if [[ -d "App/brands/$APP_BRAND/nativeAssets/fonts" ]]; then
    assetsDir="App/brands/$APP_BRAND/nativeAssets/fonts"
else
    assetsDir="App/brands/default/nativeAssets/fonts"
fi

if [[ true == "$configureAndroid" ]]; then
    echo -e "\n=> Cleaning up previous Android project..."
    rm -rf android

    echo -e "\n=> Configuring Android project..."
    cp -rf android_template android

    # Apply app icon
    sourceDir="App/brands/$APP_BRAND/nativeAssets/appIcon/android"
    echo -e "\n=> Copying brand app icon from: $sourceDir..."
    [[ ! -d "$sourceDir" ]] && echo "Couldn't copy from $sourceDir. Directory doesn't exist" && exit 1
    cp -rf $sourceDir/* "android/app/src/main/res/"

    # Ensure only the required fonts are added for the given brand
    echo -e "\n=> Linking native assets from: $assetsDir"
    npx react-native-asset --android-assets $assetsDir

    # Env vars for Android are handled directly via 'android_template/app/build.gradle'
fi

if [[ true == "$configureIOS" ]]; then
    echo -e "\n=> Cleaning up previous iOS project..."
    rm -rf ios

    echo -e "\n=> Configuring iOS project..."
    cp -rf ios_template ios

    # Apply app icon
    sourceDir="App/brands/$APP_BRAND/nativeAssets/appIcon/ios"
    echo -e "\n=> Copying brand app icon from: $sourceDir..."
    [[ ! -d "$sourceDir" ]] && echo "Couldn't copy from $sourceDir. Directory doesn't exist" && exit 1
    cp -rf $sourceDir/* "ios/ReactNativeWLA/Images.xcassets/"

    # Set bundle ID and app name for iOS
    /usr/libexec/PlistBuddy -c "Set :CFBundleIdentifier $BUNDLE_ID" ios/ReactNativeWLA/Info.plist
    /usr/libexec/PlistBuddy -c "Set :CFBundleDisplayName $DISPLAY_NAME" ios/ReactNativeWLA/Info.plist

    # Ensure only the required fonts are added for the given brand
    echo -e "\n=> Linking native assets from: $assetsDir"
    npx react-native-asset --ios-assets $assetsDir
fi