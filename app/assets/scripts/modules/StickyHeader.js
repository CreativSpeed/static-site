import $ from 'jquery';
import Waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
    constructor() {
       this.siteHeader = $(".site-header") ;
       this.headerTriggerElement = $(".large-hero__title");    
       this.pageSections = $(".page-section");
       this.headerLinks = $(".primary-nav a");
       this.createHeaderWaypoint();
       this.createPageSectionWaypoints();
       this.addSmoothScrolling();
    }
    createHeaderWaypoint() {
        var that = this;
        var waypoint = new Waypoint({
            element: this.headerTriggerElement[0],
            handler: function(direction) {
                if( direction === 'down') {
                    that.siteHeader.addClass("site-header--dark");
                } else {
                    that.siteHeader.removeClass("site-header--dark");
                }
            }
        });
    }
    createPageSectionWaypoints() {
        var that = this;
        this.pageSections.each(function() {
            var currentPageSection = this;
            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if(direction === 'down') {
                        var matchingHeadLink = currentPageSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("is-current-link");
                        $(matchingHeadLink).addClass("is-current-link");
                    }
                },
                offset: "18%"
            });

            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if(direction === 'up') {
                        var matchingHeadLink = currentPageSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("is-current-link");
                        $(matchingHeadLink).addClass("is-current-link");
                    }
                },
                offset: "-40%" 
            });

        });
    }
    addSmoothScrolling() {
      this.headerLinks.smoothScroll();
    }
}

export default StickyHeader;