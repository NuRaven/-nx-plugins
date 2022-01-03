import {
  addProjectConfiguration,
  formatFiles,
  getWorkspaceLayout,
  names,
  Tree
} from '@nrwl/devkit';
import * as generateStrapi from 'strapi-generate-new';
import { NxStrapiGeneratorSchema } from './schema';

interface NormalizedSchema extends NxStrapiGeneratorSchema {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  parsedTags: string[];
}

function normalizeOptions(tree: Tree, options: NxStrapiGeneratorSchema): NormalizedSchema {
  const name = names(options.name).fileName;
  const projectDirectory = options.directory
    ? `${names(options.directory).fileName}/${name}`
    : name;
  const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
  const projectRoot = `${getWorkspaceLayout(tree).libsDir}/${projectDirectory}`;
  const parsedTags = options.tags ? options.tags.split(',').map((s) => s.trim()) : [];

  return {
    ...options,
    projectName,
    projectRoot,
    projectDirectory,
    parsedTags
  };
}

export default async function (tree: Tree, options: NxStrapiGeneratorSchema) {
  const normalizedOptions = normalizeOptions(tree, options);
  addProjectConfiguration(tree, normalizedOptions.projectName, {
    root: normalizedOptions.projectRoot,
    projectType: 'library',
    sourceRoot: `${normalizedOptions.projectRoot}/src`,
    targets: {
      build: {
        executor: '@nuraven/nx-strapi:build'
      },
      serve: {
        executor: '@nuraven/nx-strapi:develop'
      }
    },
    tags: normalizedOptions.parsedTags
  });

  await generateStrapi(normalizedOptions.projectRoot, {
    quickstart: normalizedOptions.quickstart,
    run: false
  });

  await formatFiles(tree);
}
