import {
  BuilderContext,
  BuilderOutput,
  createBuilder,
  BuilderRun,
} from '@angular-devkit/architect';
import { Observable, from } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { BuildBuilderSchema } from './schema';
import { parseHugoParameters } from '../utils/utils';

function runHugo(
  options: BuildBuilderSchema,
  context: BuilderContext
): Observable<BuilderRun> {
  const commands: string[] = [];
  const params: string[] = parseHugoParameters(options);
  const cwd = context.workspaceRoot + `/apps/${context.target.project}`;

  commands.push(
    `npx webpack --config webpack.config.js`,
    `cd site && npx hugo ${params.join(' ')}`
  );

  return from(
    context.scheduleBuilder('@nrwl/workspace:run-commands', {
      commands: commands,
      cwd: cwd,
      color: true,
      parallel: false,
    })
  );
}

export function runBuilder(
  options: BuildBuilderSchema,
  context: BuilderContext
): Observable<BuilderOutput> {
  return runHugo(options, context).pipe(
    concatMap((result) => {
      return result.output;
    })
  );
}

export default createBuilder(runBuilder);
