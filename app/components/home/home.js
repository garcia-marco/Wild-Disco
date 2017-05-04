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
    this.titre = this.resource.title;
    this.test = this.titre.get();
}

function getDiscogs($scope, $resource) {
    return $resource("https://api.discogs.com/releases/249504");
};