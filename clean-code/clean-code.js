/* 
DECSRITPION: This file is about to describe best practices for clean code  

 */

 /* SECTION: Variable names */

 let descrVarNamesStr = 'descriptive variable name should consist of 2 to 4 words and 8 to 20 characters ';

 /* SECTION: Booleans */

 let boolValKeywordsArr = ['should','is','has','can'];

 // for readability boolean params should be passed by oobjects
 boolParamsFn({
 	canExportSvg : true,
 	hasProtpertyMondeky: false
 	/* ... */
 });
// OR
boolParamsFn({
 	/* canExportSvg */ true,
 	/* hasProtpertyMondeky */ false
 	/* ... */
})
