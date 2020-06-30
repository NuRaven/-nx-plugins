import {
  BuilderContext,
  BuilderOutput,
  createBuilder,
  BuilderRun,
} from '@angular-devkit/architect';
import { Observable, from } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { ServeBuilderSchema } from './schema';
import { parseHugoParameters } from '../utils/utils';

export function runBuilder(
  options: ServeBuilderSchema,
  context: BuilderContext
): Observable<BuilderOutput> {
  return runHugo(options, context).pipe(
    concatMap((result) => {
      return result.output;
    })
  );
}

function runHugo(
  options: ServeBuilderSchema,
  context: BuilderContext
): Observable<BuilderRun> {
  const commands: { command: string }[] = [];
  const params = parseHugoParameters(options);
  const cwd = context.workspaceRoot + `/apps/${context.target.project}/src`;

  commands.push({
    command: `hugo server ${params.join(' ')}`,
  });

  return from(
    context.scheduleBuilder('@nrwl/workspace:run-commands', {
      commands: commands,
      cwd: cwd,
      color: true,
      parallel: false,
    })
  );
}

export default createBuilder(runBuilder);
