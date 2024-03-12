#!/bin/bash

chmod +x ./android/gradlew

export MY_APP_MODE=mocked

detox build --configuration android.emu.debug

react-native start --reset-cache

METRO_BUNDLER_PID=$!

detox test --configuration android.emu.debug 

DETOX_EXIT_CODE=$?

kill $METRO_BUNDLER_PID

exit $DETOX_EXIT_CODE