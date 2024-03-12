const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// Get the default Metro configuration for the current project directory.
const defaultConfigPromise = getDefaultConfig(__dirname);

module.exports = (async () => {
  const defaultConfig = await defaultConfigPromise;

  // Extract the default source extensions.
  const defaultSourceExts = defaultConfig.resolver.sourceExts;

  // Define your custom configuration.
  const customConfig = {
    resolver: {
      sourceExts:
        process.env.MY_APP_MODE === 'mocked'
          ? ['e2e.js', 'e2e.ts', 'e2e.tsx', ...defaultSourceExts]
          : defaultSourceExts,
    },
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
  };

  // Merge the custom configuration with the default configuration.
  return mergeConfig(defaultConfig, customConfig);
})();
