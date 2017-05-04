"use strict";

angular.module("app")

    .component("home", {
        templateUrl: "app/components/home/home.html",
        controller: Home
    })

;

function Home($scope, $resource) {
    this.home = "Home";
    this.resource = $resource("https://api.discogs.com/releases/249504");
}
