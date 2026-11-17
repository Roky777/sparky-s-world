export const PW_GAMES = [
 {id:'letters',art:'ordering',label:'Picture ordering'},
 {id:'letter-picture',art:'letter-picture',label:'Letter and picture matching'},
 {id:'letter-case',art:'letter-case',label:'Big and small letters'},
 {id:'word-picture',art:'word-picture',label:'Words and pictures'},
 {id:'counting',art:'counting',label:'Counting'},
 {id:'count-connect',art:'count-connect',label:'Count and connect'},
 {id:'equal-groups',art:'equal-groups',label:'Equal groups'},
 {id:'colour-match',art:'colour-match',label:'Colour matching'},
 {id:'assembly',art:'assembly',label:'Picture puzzles'},
 {id:'differences',art:'differences',label:'Spot the difference'},
 {id:'food-sort',art:'food-sort',label:'Food choices'},
 {id:'accessory-grid',art:'accessory-grid',label:'Sticker studio'}
];
export const DESTINATIONS = [
 {id:'home',name:'Sparky’s home',x:20,y:72,art:'home',games:[],offer:'hubHome'},
 {id:'letters',name:'Storybook house',x:26,y:33,art:'letters',games:['letters','letter-picture','letter-case','word-picture'],offer:'offerLetters'},
 {id:'numbers',name:'Counting mill',x:52,y:25,art:'numbers',games:['counting','count-connect','equal-groups'],offer:'offerNumbers'},
 {id:'colours',name:'Colour garden',x:78,y:34,art:'colours',games:['colour-match'],offer:'offerColours'},
 {id:'puzzles',name:'Puzzle grotto',x:78,y:71,art:'puzzles',games:['assembly','differences'],offer:'offerPuzzles'},
 {id:'picnic',name:'Picnic kitchen',x:51,y:76,art:'picnic',games:['food-sort','accessory-grid'],offer:'offerPicnic'}
];
