import 'es6-shim';

import 'reflect-metadata';
import 'zone.js/dist/zone';

if (process.env.ENV === 'production') {
    // Production
} else {
    // Development
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}

import '@angular/platform-browser';

import 'rxjs';