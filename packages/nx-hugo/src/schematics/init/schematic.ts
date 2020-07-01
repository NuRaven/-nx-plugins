import { chain, Rule } from '@angular-devkit/schematics';
import { addDepsToPackageJson, setDefaultCollection } from '@nrwl/workspace';
import { nxVersion, hugoBinVersion } from '../../utils/versions';

function addDependencies(): Rule {
  return addDepsToPackageJson(
    {
      'hugo-bin': hugoBinVersion,
    },
    {
      '@nrwl/workspace': nxVersion,
    }
  );
}

export default function (): Rule {
  return chain([setDefaultCollection('@nuraven/nx-hugo'), addDependencies()]);
}
