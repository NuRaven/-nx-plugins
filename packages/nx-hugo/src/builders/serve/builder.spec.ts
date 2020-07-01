import { JsonObject } from '@angular-devkit/core';
import { ServeBuilderSchema } from './schema';
import { MockBuilderContext } from '@nrwl/workspace/testing';
import { of } from 'rxjs';
import { runBuilder, runHugo } from './builder';
import { getMockContext } from '../../utils/testing';
import * as builder from '../serve/builder';

describe('Command Runner Builder', () => {
  let context: MockBuilderContext;
  let scheduleBuilder: jest.SpyInstance;
  let startBuild: jest.SpyInstance;
  let testOptions: JsonObject & ServeBuilderSchema;

  beforeEach(async () => {
    context = await getMockContext();

    testOptions = {
      help: true,
    };

    startBuild = jest.fn().mockReturnValue(of({ success: true }));

    (builder as any).runBuilder = startBuild;

    scheduleBuilder = jest.spyOn(context, 'scheduleBuilder').mockReturnValue(
      Promise.resolve({
        id: 0,
        stop: Promise.resolve,
        info: null,
        progress: null,
        result: Promise.resolve({ success: true }),
        output: of({ success: true }),
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('run', () => {
    it('should call startBuild', async () => {
      const run = await runBuilder(testOptions, context).toPromise();
      expect(startBuild).toHaveBeenCalled();
      await run.stop;
    });

    // it('should call scheduleBuilder @nrwl/workspace:run-commands with correct options', async () => {
    //   await runBuilder(testOptions, context).toPromise();
    //   expect(scheduleBuilder).toHaveBeenCalled();
    //   expect(scheduleBuilder).toHaveBeenCalledWith(
    //     '@nrwl/workspace:run-commands',
    //     {
    //       commands: [
    //         {
    //           command: 'hugo server --help=true',
    //         },
    //       ],
    //       cwd: '/root/apps/null/src',
    //       color: true,
    //       parallel: false,
    //     }
    //   );
    // });

    it('should call scully run with success', async () => {
      const run = await runBuilder(testOptions, context).toPromise();
      await run.stop;
      expect(run.success).toEqual(true);
    });
  });
});
