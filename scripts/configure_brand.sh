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
    echo -e "Configuring Android project..."
    cp -rf android_template android
fi

if [[ true == "$configureIOS" ]]; then
    echo -e "Configuring iOS project..."
    cp -rf ios_template ios
fi