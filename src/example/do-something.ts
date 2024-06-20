export function doSomething() {
    if (typeof console === 'object')
        console.log('in doSometing');
    else
        trace('in doSomething\n');
}