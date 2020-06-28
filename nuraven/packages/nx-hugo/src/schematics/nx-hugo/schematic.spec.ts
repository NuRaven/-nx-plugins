import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { createEmptyWorkspace } from '@nrwl/workspace/testing';
import { join } from 'path';

import { NxHugoSchematicSchema } from './schema';

describe('nx-hugo schematic', () => {
  let appTree: Tree;
  const options: NxHugoSchematicSchema = { name: 'test' };

  const testRunner = new SchematicTestRunner(
    '@nuraven/nx-hugo',
    join(__dirname, '../../../collection.json')
  );

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty());
  });

  it('should run successfully', async () => {
    await expect(
      testRunner.runSchematicAsync('nx-hugo', options, appTree).toPromise()
    ).resolves.not.toThrowError();
  });
});
