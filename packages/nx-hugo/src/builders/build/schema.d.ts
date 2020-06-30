import { JsonObject } from '@angular-devkit/core';

export interface BuildBuilderSchema extends JsonObject {
  /**
   * Hostname (and path) to the root, e.g. http://spf13.com/
   */
  baseURL?: string;
  /**
   * Include content marked as draft
   */
  buildDrafts?: boolean;
  /**
   * Include expired content
   */
  buildExpired?: boolean;
  /**
   * Include content with publishdate in the future
   */
  buildFuture?: boolean;
  /**
   * Filesystem path to cache directory. Defaults: $TMPDIR/hugo_cache/
   */
  cacheDir?: string;
  /**
   * Remove files from destination not found in static directories
   */
  cleanDestinationDir?: boolean;
  /**
   * Config file (default is path/config.yaml|json|toml)
   */
  config?: string;
  /**
   * Config dir (default "config")
   */
  configDir?: string;
  /**
   * Filesystem path to content directory
   */
  contentDir?: string;
  /**
   * Debug output
   */
  debug?: boolean;
  /**
   * Filesystem path to write files to
   */
  destination?: string;
  /**
   * Disable different kind of pages (home, RSS etc.)
   */
  disableKinds?: string[];
  /**
   * Add Git revision, date and author info to the pages
   */
  enableGitInfo?: boolean;
  /**
   * Build environment
   */
  environment?: string;
  /**
   * Copy all files when static is changed
   */
  forceSyncStatic?: boolean;
  /**
   * Enable to run some cleanup tasks (remove unused cache files) after the build
   */
  gc?: boolean;
  /**
   * Help for hugo
   */
  help?: boolean;
  /**
   * Print missing translations
   */
  'i18n-warnings'?: boolean;
  /**
   * Ignores the cache directory
   */
  ignoreCache?: boolean;
  /**
   * Ignores any _vendor directory
   */
  ignoreVendor?: boolean;
  /**
   * Filesystem path to layout directory
   */
  layoutDir?: string;
  /**
   * Enable Logging
   */
  log?: boolean;
  /**
   * Log File path (if set, logging enabled automatically)
   */
  logFile?: string;
  /**
   * Minify any supported output format (HTML, XML etc.)
   */
  minify?: boolean;
  /**
   * Don't sync permission mode of files
   */
  noChmod?: boolean;
  /**
   * Don't sync modification time of files
   */
  noTimes?: boolean;
  /**
   * Print warnings on duplicate target paths etc
   */
  'path-warnings'?: boolean;
  /**
   * Build in quiet mode
   */
  quiet?: boolean;
  /**
   * Render to memory (only useful for benchmark testing)
   */
  renderToMemory?: boolean;
  /**
   * Display memory and timing of different steps of the program
   */
  source?: string;
  /**
   * Display metrics about template executions
   */
  templateMetrics?: boolean;
  /**
   * Calculate some improvement hints when combined with --templateMetrics
   */
  templateMetricsHints?: boolean;
  /**
   * themes to use (located in /themes/THEMENAME/)
   */
  theme?: string[];
  /**
   * Filesystem path to themes directory
   */
  themesDir?: string;
  /**
   * write trace to file (not useful in general)
   */
  trace?: boolean;
  /**
   * Verbose logging
   */
  verbose?: boolean;
  /**
   * Display metrics about template executions
   */
  verboseLog?: boolean;
  /**
   * Watch filesystem for changes and recreate as needed (default true)
   */
  watch?: boolean;
}
