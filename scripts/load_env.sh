#!/bin/bash

# This script is meant to be used with `source` command and not executed by itsef, so it doesn't have executable rights

echo "Loading env variables from EnvKey"
eval $(envkey-source -f)

varMissingMessage="variable not present! Ensure it exists in EnvKey for the selected brand/sub-environment."
[ -z "$APP_BRAND" ] && echo "ERROR: APP_BRAND $varMissingMessage" && return 1
[ -z "$BUNDLE_ID" ] && echo "ERROR: BUNDLE_ID $varMissingMessage" && return 1

echo "Loaded variables for brand: $APP_BRAND"