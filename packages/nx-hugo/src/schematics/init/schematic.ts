import { chain, Rule, noop } from '@angular-devkit/schematics';
import {
  addDepsToPackageJson,
  setDefaultCollection,
  updateJsonInTree,
} from '@nrwl/workspace';
import {
  nxVersion,
  hugoBinVersion,
  prettierPluginGoTemplateVersion,
  postcssCliVersion,
  autoprefixerVersion,
  tsLoaderVersion,
  webpackVersion,
  webpackCliVersion,
  assetsWebpackPluginVersion,
} from '../../utils/versions';

function addDependencies(): Rule {
  return addDepsToPackageJson(
    {},
    {
      'hugo-bin': hugoBinVersion,
      '@nrwl/workspace': nxVersion,
      'prettier-plugin-go-template': prettierPluginGoTemplateVersion,
      'postcss-cli': postcssCliVersion,
      autoprefixer: autoprefixerVersion,
      'ts-loader': tsLoaderVersion,
      webpack: webpackVersion,
      'webpack-cli': webpackCliVersion,
      'assets-webpack-plugin': assetsWebpackPluginVersion,
    }
  );
}

function addHugoExtended(): Rule {
  return updateJsonInTree('package.json', (json) => {
    return {
      ...json,
      'hugo-bin': {
        buildTags: 'extended',
      },
    };
  });
}

function updatePrettierRc(): Rule {
  return updateJsonInTree('.prettierrc', (json) => {
    return {
      ...json,
      overrides: [
        {
          files: ['*.html'],
          options: {
            parser: 'go-template',
          },
        },
      ],
    };
  });
}

export default function (extended: boolean): Rule {
  return chain([
    setDefaultCollection('@nuraven/nx-hugo'),
    addDependencies(),
    extended ? addHugoExtended() : noop(),
    updatePrettierRc(),
  ]);
}
