import $ from 'jquery';
import Waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

console.log( Waypoints );

class RevealOnScroll {
    constructor(els, offset) {
        this.itemsToReveal = els;
        this.offsetPercentage = offset;
        this.hideInitially();
        this.createWaypoints();
    }
    hideInitially() {
        this.itemsToReveal.addClass("reveal-item");
    }
    createWaypoints() {
        var that = this;
        this.itemsToReveal.each(function(){
            var currentItem = this;
            var waypoint = new Waypoint({
                element: currentItem,
                handler: function(direction) {
                    $(currentItem).addClass("reveal-item--is-visible");
                },
                offset: that.offsetPercentage
            });
        });
    }
}

export default RevealOnScroll;