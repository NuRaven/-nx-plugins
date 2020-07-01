import { of } from 'rxjs';
import { BuildBuilderSchema } from './schema';
import { MockBuilderContext } from '@nrwl/workspace/testing';
import { getMockContext } from '../../utils/testing';

const options: BuildBuilderSchema = {
  help: true,
};

describe('Command Runner Builder', () => {
  let context: MockBuilderContext;
  let scheduleBuilder: jest.SpyInstance;

  beforeEach(async () => {
    context = await getMockContext();

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

  it('can run', async () => {
    const run = await context.scheduleBuilder(
      '@nuraven/nx-hugo:build',
      options
    );
    const output = await run.result;
    await run.stop;
    expect(output.success).toBe(true);
  });
});
