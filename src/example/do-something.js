import { doMore } from '#another'; // remove this import and call below and it works...

export function doSomething() {
    trace('in doSomething\n');
    doMore();
}