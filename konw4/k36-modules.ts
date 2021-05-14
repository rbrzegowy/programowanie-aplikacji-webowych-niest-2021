export class SomeClassToExport {

}
export const SOME_CONST = 0;

declare const $:JQuery ;

$('.abc')

// ale można też tak:
// export { SomeClassToExport, SOME_CONST }
// import * as mod from './modules/module.js';

// default
// export default {SomeClassToExport, SOME_CONST};
// import mod from .., next mod.saveTheWorld

// alias
// export { ClassToExport as SomeClassToExport } // export with aliases
// import {scl} from .., next
