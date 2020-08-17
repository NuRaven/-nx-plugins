import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { createEmptyWorkspace } from '@nrwl/workspace/testing';
import { readJsonInTree } from '@nrwl/workspace';
import { join } from 'path'
import { runSchematic } from '../../utils/testing';

import { ApplicationSchematicSchema } from './schema';

describe('application schematic', () => {
  let appTree: Tree;

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty());
  });

  it('should run successfully', async () => {	
    await expect(runSchematic(
      'application', { name: 'my-app' }, appTree)
      ).resolves.not.toThrowError();
  });

});

