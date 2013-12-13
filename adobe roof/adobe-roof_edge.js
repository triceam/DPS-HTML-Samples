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
            id:'San-Francisco-background',
            type:'image',
            rect:['-170px','-17px','1668px','475px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"San-Francisco-background.jpg",'0px','0px']
         },
         {
            id:'San-Francisco-192',
            type:'image',
            rect:['-170px','-17px','1756px','500px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"San-Francisco-192.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '450px'],
            ["style", "width", '1441px']
         ],
         "${_San-Francisco-background}": [
            ["style", "left", '-116px'],
            ["style", "top", '-17px']
         ],
         "${_San-Francisco-192}": [
            ["style", "left", '-170px'],
            ["style", "top", '-17px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid10", tween: [ "style", "${_San-Francisco-background}", "left", '-116px', { fromValue: '-116px'}], position: 0, duration: 0 },
            { id: "eid12", tween: [ "style", "${_San-Francisco-192}", "left", '-127px', { fromValue: '-170px'}], position: 0, duration: 10000 }         ]
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
})(jQuery, AdobeEdge, "EDGE-17070827");
