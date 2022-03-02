#!/bin/bash
set -e

# This script is meant to be run from the rrot of the project. Use `yarn configure-brand` convenience commands to trigger it.

# Use "configure_brand.sh android" or "configure_brand.sh ios" to configure respective platforms, or pass in all platforms
for OPTION in "$@"; do
    if [[ "$OPTION" == "android" ]]; then
        configureAndroid=true
    elif [[ "$OPTION" == "ios" ]]; then
        configureIOS=true
    fi
done

if [[ true == "$configureAndroid" ]]; then
    echo -e "\n=> Configuring Android project..."
    cp -rf android_template android

    # Apply app icon
    sourceDir="App/brands/$APP_BRAND/nativeAssets/appIcon/android"
    echo -e "\n=> Copying brand app icon from: $sourceDir..."
    [[ ! -d "$sourceDir" ]] && echo "Couldn't copy from $sourceDir. Directory doesn't exist" && exit 1
    cp -rf $sourceDir/* "android/app/src/main/res/"
fi

if [[ true == "$configureIOS" ]]; then
    echo -e "\n=> Configuring iOS project..."
    cp -rf ios_template ios

    # Apply app icon
    sourceDir="App/brands/$APP_BRAND/nativeAssets/appIcon/ios"
    echo -e "\n=> Copying brand app icon from: $sourceDir..."
    [[ ! -d "$sourceDir" ]] && echo "Couldn't copy from $sourceDir. Directory doesn't exist" && exit 1
    cp -rf $sourceDir/* "ios/ReactNativeWLA/Images.xcassets/"
fi