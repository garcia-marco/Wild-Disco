"use strict";

angular.module("app")

    .component("home", {
        templateUrl: "app/components/home/home.html",
        controller: home
    })

;

function home() {
    this.home = "Home";
}
