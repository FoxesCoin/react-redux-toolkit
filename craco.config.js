module.exports = {
  babel: {
    loaderOptions: (babelLoaderOptions) => {
      const origBabelPresetCRAIndex = babelLoaderOptions.presets.findIndex(
        (preset) => preset[0].includes('babel-preset-react-app')
      );

      const origBabelPresetCRA =
        babelLoaderOptions.presets[origBabelPresetCRAIndex];

      babelLoaderOptions.presets[origBabelPresetCRAIndex] = (api, _, env) => {
        const [id, opts] = origBabelPresetCRA;
        const babelPresetCRAResult = require(id)(api, opts, env);

        babelPresetCRAResult.presets.forEach((preset) => {
          // detect @babel/preset-react with {development: true, runtime: 'automatic'}
          const presetElement = preset?.[1];
          const isReactPreset =
            presetElement.runtime === 'automatic' &&
            presetElement.development === true;
          if (isReactPreset) {
            presetElement.importSource =
              '@welldone-software/why-did-you-render';
          }
        });

        return babelPresetCRAResult;
      };

      return babelLoaderOptions;
    },
  },
};
