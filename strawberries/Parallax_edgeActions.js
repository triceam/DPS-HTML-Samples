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
         
         sym.stop();
         
         document.addEventListener('touchstart', function(event){
         	event.preventDefault();
         	return false;
         });
         
         window.ondeviceorientation = function(event) {
            beta = Math.round(event.beta);
         
            var position = 15000 + (beta * 400);
            position = Math.floor(position);
            sym.stop(position);
            console.log(position);
         }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-115372601");