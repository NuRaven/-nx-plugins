import { JsonObject } from '@angular-devkit/core';

export interface ServeBuilderSchema extends JsonObject {
  /**
   * Append port to baseURL (default true)
   */
  appendPort?: boolean;
  /**
   * Hostname (and path) to the root, e.g. http://spf13.com/
   */
  baseURL?: string;
  /**
   * Interface to which the server will bind (default "127.0.0.1")
   */
  bind?: string;
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
   * Filesystem path to write files to
   */
  destination?: string;
  /**
   * Do not show build errors in the browser
   */
  disableBrowserError?: boolean;
  /**
   * Enables full re-renders on changes
   */
  disableFastRender?: boolean;
  /**
   * Disable different kind of pages (home, RSS etc.)
   */
  disableKinds?: string[];
  /**
   * Watch without enabling live browser reload on rebuild
   */
  disableLiveReload?: boolean;
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
   * Help for server
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
   * Port for live reloading (i.e. 443 in HTTPS proxy situations) (default -1)
   */
  liveReloadPort?: number;
  /**
   * Enable Logging
   */
  log?: boolean;
  /**
   * Log File path (if set, logging enabled automatically)
   */
  logFile?: string;
  /**
   * Interval to poll memory usage (requires --memstats), valid time units are "ns", "us" (or
   * "µs"), "ms", "s", "m", "h". (default "100ms")
   */
  meminterval?: string;
  /**
   * Log memory usage to this file
   */
  memstats?: string;
  /**
   * Minify any supported output format (HTML, XML etc.)
   */
  minify?: boolean;
  /**
   * Navigate to changed content file on live browser reload
   */
  navigateToChanged?: boolean;
  /**
   * Don't sync permission mode of files
   */
  noChmod?: boolean;
  /**
   * Prevent HTTP caching
   */
  noHTTPCache?: boolean;
  /**
   * Don't sync modification time of files
   */
  noTimes?: boolean;
  /**
   * Print warnings on duplicate target paths etc
   */
  'path-warnings'?: boolean;
  /**
   * Port on which the server will listen (default 1313)
   */
  port?: number;
  /**
   * Build in quiet mode
   */
  quiet?: boolean;
  /**
   * Render to Destination path (default is render to memory & serve from there)
   */
  renderToDisk?: boolean;
  /**
   * Filesystem path to read files relative from
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
