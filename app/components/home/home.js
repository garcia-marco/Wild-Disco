"use strict";

angular.module("app")

    .component("home", {
        templateUrl: "app/components/home/home.html",
        controller: Home
    })

    ;

function Home($scope, $resource) {
    this.home = "Home";
    this.resource = getDiscogs($scope, $resource);
    this.getArtists = this.resource.get();
}

function getDiscogs($scope, $resource) {
    return $resource("https://api.discogs.com/artists/:id", {id:791, key:'AhezeNpOGqMfsaWoHHJV', secret:'nhbZbFrJENBMOisxoKIYukdoggyRmFkF'});
};