/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'bakground',
            type:'image',
            rect:['-22px','-8px','2500px','1875px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bakground.jpg",'0px','0px']
         },
         {
            id:'plants',
            type:'image',
            rect:['-219px','24px','1250px','858px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"plants.png",'0px','0px']
         },
         {
            id:'olivia',
            type:'image',
            rect:['336px','146px','351px','604px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"olivia.png",'0px','0px'],
            transform:[]
         },
         {
            id:'berries',
            type:'image',
            rect:['-397px','532px','2500px','1037px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"berries.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_plants}": [
            ["style", "top", '24px'],
            ["style", "left", '-136px']
         ],
         "${_berries}": [
            ["style", "top", '377px'],
            ["style", "height", '519px'],
            ["style", "left", '-202px'],
            ["style", "width", '1251px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '1024px'],
            ["style", "height", '768px'],
            ["style", "overflow", 'hidden']
         ],
         "${_olivia}": [
            ["style", "top", '146px'],
            ["style", "height", '604px'],
            ["style", "left", '336px'],
            ["style", "width", '351px']
         ],
         "${_bakground}": [
            ["style", "top", '-8px'],
            ["style", "height", '938px'],
            ["style", "left", '-22px'],
            ["style", "width", '1250px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 30000,
         autoPlay: true,
         timeline: [
            { id: "eid32", tween: [ "style", "${_berries}", "left", '-90px', { fromValue: '-202px'}], position: 0, duration: 30000 },
            { id: "eid37", tween: [ "style", "${_plants}", "left", '-219px', { fromValue: '-136px'}], position: 0, duration: 30000 },
            { id: "eid1", tween: [ "style", "${_bakground}", "left", '-222px', { fromValue: '-22px'}], position: 0, duration: 30000 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-115372601");
