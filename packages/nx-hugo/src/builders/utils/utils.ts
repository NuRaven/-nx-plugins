import { ServeBuilderSchema } from '../serve/schema';
import { BuildBuilderSchema } from '../build/schema';

export function parseHugoParameters(
  options: BuildBuilderSchema | ServeBuilderSchema
): string[] {
  const params: string[] = Object.keys(options).reduce((acc, key) => {
    const value = options[key];
    if (typeof value === 'undefined' || (Array.isArray(value) && !value.length))
      return acc;
    if (Array.isArray(value) && value.length) {
      value.forEach(() => {
        acc.concat(`--${key}=${value}`);
      });
    }
    if (typeof options[key] === 'boolean' && options[key]) {
      acc.concat(`--${key}`);
    }
    return value ? acc.concat(`--${key}=${value}`) : acc;
  }, []);

  return params;
}
