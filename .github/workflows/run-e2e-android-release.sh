#!/bin/bash

chmod +x ./android/gradlew

detox build --configuration android.emu.release

react-native start --reset-cache

METRO_BUNDLER_PID=$!

detox test --configuration android.emu.release --headless 

DETOX_EXIT_CODE=$?

kill $METRO_BUNDLER_PID

exit $DETOX_EXIT_CODE