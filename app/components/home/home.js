"use strict";

angular.module("app")

    .component("home", {
        templateUrl: "app/components/home/home.html",
        controller: Home
    })

;

function Home($resource, $scope) {
    this.home = "Home";
    this.resource = getDiscogs($resource, $scope);
    this.test = this.resource.get();
}

function getDiscogs($resource, $scope) {
    return $resource("https://api.discogs.com/releases/249504");
};