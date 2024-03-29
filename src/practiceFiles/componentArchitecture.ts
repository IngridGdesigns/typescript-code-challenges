/*
In the software development world, organizing code in a way that makes it extendable, 
reusable, and manageable is called architecture.
clean architecture is just as important—and just as achievable—as clean code,

There may be a function that’s more important. In those situations, you can declare a 
default export. This will make the import process a little shorter. Added
default after the export keyword makes it the main export
Example:

export function parseRegion(address) {
    const region = address.state || address.providence || '';
    return region;
}

export function parseStreet({ street }) {
    return street.split(' ')
        .map(part => capitalize(part))
        .join(' ');
}

export default function normalize(address) {
    const street = parseStreet(address);
    const city = address.city;
    const region = parseRegion(address);
    return `${street} ${city}, ${region}`;
}

Now when you want to import normalize(), you use the same syntax but without 
the curly braces. If you don’t use curly braces, you’ll get the default export
and nothing else. 

import normalize from './address';
import normalize, { parseRegion } from './address';

component architecture. A component is the combination of all relevant code into a single directory. 

The biggest problem with component architecture is that it depends on build tools and, to a 
lesser extent, frameworks such as React.js
example: https://github.com/jsmapr1/simplifying-js/tree/master/architecture/component/simplifying-js-component/src

problem with component architecture: It won’t work natively in browsers.
You may need babel to translate ES6 JavaScript and babel-present-react to convert react code.
https://babeljs.io/

Module loader handles the compiled imports and exports. You have a few options for module loaders. 
Currently, the most popular module loaders are webpack and rollup.js.

Webpack is a project that can handle everything from combining your JavaScript to processing your 
CSS or SASS, to image conversion. Webpack can handle so many file types because you declare 
different actions—referred to as loaders in webpack—based on file extension.
https://webpack.js.org/concepts/
*/