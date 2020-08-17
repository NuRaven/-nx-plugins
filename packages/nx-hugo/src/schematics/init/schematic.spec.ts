import { Tree } from '@angular-devkit/schematics';
import { createEmptyWorkspace } from '@nrwl/workspace/testing';
import { readJsonInTree } from '@nrwl/workspace';

import { runSchematic } from '../../utils/testing';

describe('init schematic', () => {
  let appTree: Tree;
  const prettierOverrides = [
    {
      files: ['*.html'],
      options: {
        parser: 'go-template',
      },
    },
  ]

  beforeEach(() => {	
    appTree = createEmptyWorkspace(Tree.empty());	    
  });	  

  it('should run successfully', async () => {	
    await expect(runSchematic(
      'init', { name: 'test' }, appTree)
      ).resolves.not.toThrowError();
  });

  it('should add dependencies', async () => {	
    const result = await runSchematic('init', { name: 'test' }, appTree);
    const packageJson = readJsonInTree(result, 'package.json');

    expect(packageJson.devDependencies['hugo-bin']).toBeDefined();
    expect(packageJson.devDependencies['@nrwl/workspace']).toBeDefined();
    expect(packageJson.devDependencies['prettier-plugin-go-template']).toBeDefined();
    expect(packageJson.devDependencies['postcss-cli']).toBeDefined();
    expect(packageJson.devDependencies['autoprefixer']).toBeDefined();
  });

  it('should add hugo etended', async () => {	
    const result = await runSchematic('init', { name: 'test', extended: true }, appTree);
    const packageJson = readJsonInTree(result, 'package.json');

    expect(packageJson['hugo-bin'].buildTags).toEqual('extended');
  });

  it('should upadte prettierrc', async () => {	
    const result = await runSchematic('init', { name: 'test' }, appTree);
    const prettierrc = readJsonInTree(result, '.prettierrc');

    expect(prettierrc.overrides).toEqual(prettierOverrides);
  });

});
