import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { createEmptyWorkspace } from '@nrwl/workspace/testing';
import { join } from 'path'
import { readJsonInTree } from '@nrwl/workspace';

import { InitSchematicSchema } from './schema';
import { runSchematic } from '../../utils/testing';

describe('init schematic', () => {
  let appTree: Tree;
  const options: InitSchematicSchema = { name: 'test',  };

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty());
  });

});
