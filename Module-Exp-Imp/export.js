// Default export class
export default class Nokia {
    model() {
        console.log('hi model');
    }
}
// export default Nokia;

function sayName() {
    console.log('hello export function');
}

function greetings() {
    console.log('welcome export to import');
}
export { sayName, greetings };