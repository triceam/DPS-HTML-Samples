/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         
         sym.stop();
         
         document.addEventListener('touchstart', function(event){
            event.preventDefault();
            return false;
         });
         
         window.ondeviceorientation = function(event) {
            var delta = Math.round(event.beta);
         
         	switch (window.orientation) {
         		case 0: 
         			delta = Math.round(event.gamma);
         			break;
         		case 180: 
         			delta = -Math.round(event.gamma);
         			break;
         	}
         
            var position = 5000 + (delta * 100);
            position = Math.floor(position);
            sym.stop(position);
            console.log(position);
         }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-17070827");