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
            rect:['-314px','-787px','2503px','3337px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"plants.png",'0px','0px']
         },
         {
            id:'olivia',
            type:'image',
            rect:['673px','177px','703px','1209px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"olivia.png",'0px','0px']
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
         "${_berries}": [
            ["style", "top", '642px'],
            ["style", "left", '-397px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '1536px'],
            ["style", "width", '2048px']
         ],
         "${_olivia}": [
            ["style", "left", '673px'],
            ["style", "top", '177px']
         ],
         "${_bakground}": [
            ["style", "left", '-22px'],
            ["style", "top", '-8px']
         ],
         "${_plants}": [
            ["style", "top", '23px'],
            ["style", "height", '1715px'],
            ["style", "left", '-234px'],
            ["style", "width", '2500px']
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
            { id: "eid13", tween: [ "style", "${_plants}", "left", '-314px', { fromValue: '-234px'}], position: 0, duration: 30000 },
            { id: "eid1", tween: [ "style", "${_bakground}", "left", '-222px', { fromValue: '-22px'}], position: 0, duration: 30000 },
            { id: "eid3", tween: [ "style", "${_berries}", "left", '-127px', { fromValue: '-397px'}], position: 0, duration: 30000 },
            { id: "eid7", tween: [ "style", "${_berries}", "top", '642px', { fromValue: '642px'}], position: 30000, duration: 0 }         ]
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
