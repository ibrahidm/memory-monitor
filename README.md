# Memory Monitor
**Memory Monitor** is a simple, bare-bones package for monitoring NodeJS memory usage using the console. 

## Installation
**Memory Monitor** can be installed using the package manager of your choosing. The example command below uses [yarn](https://yarnpkg.com/).

```
$ yarn add memory-monitor
```

## Usage
Usage is extremely straightforward -- *1) import the package*, and *2) initialized the monitor*. **Memory Monitor** can be used without passing any arguments, however all arguments and their defaults are shown below: 

```javascript
// <app-entry-point>.ts
import memoryMonitor from 'memory-monitor';

memoryMonitor({
    interval: 10000,
    rss: true,
    heapTotal: true,
    heapUsed: false,
    external: false,
    arrayBuffers: false
});
```

With this default setup, the following will be output to the console at 10 second intervals (numbers shown are arbitrary): 

```
rss: 21.9 MiB | heapTotal: 4.6 MiB
```

If all boolean arguments set to `true`, the following will be output to the console: 
```
rss: 22.9 MiB | heapTotal: 4.9 MiB | heapUsed: 4.3 MiB | external: 294.7 KiB | arrayBuffers: 43.7 KiB
```
## Arguments 
| Name           | Default      | Description                                                                                                                        |
| -------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `interval`     | `10000` (ms) | The sampling rate expressed as time between sample (and subsequent logging) events.                                                |
| `rss`          | `true`       | Determines whether or not [rss](https://nodejs.org/api/process.html#processmemoryusagerss) should be included in the output.       |
| `heapTotal`    | `true`       | Determines whether or not [heapTotal](https://nodejs.org/api/process.html#processmemoryusage) should be included in the output.    |
| `heapUsed`     | `false`      | Determines whether or not [heapUsed](https://nodejs.org/api/process.html#processmemoryusage) should be included in the output.     |
| `external`     | `false`      | Determines whether or not [external](https://nodejs.org/api/process.html#processmemoryusage) should be included in the output.     |
| `arrayBuffers` | `false`      | Determines whether or not [arrayBuffers](https://nodejs.org/api/process.html#processmemoryusage) should be included in the output. |

## Contribute
Contribution is welcome, although there is probably little more to be done. Some options include: 
  * add ability to toggle monitor off and on
  * create options that allow for logs to be more queryable and traceable within a logging aggregator
  * save output to a variable for actionable checks (i.e. usage notifications, etc.)

These would constitute fairly large changes and may even warrant packages of their own, however they are valid ideas for improving the utility of this package. 

## Support 
-   [Buy me a coffee](https://www.buymeacoffee.com/dannyibrahim)
-   [Read my writing](https://medium.com/@thedannyibrahim/)
