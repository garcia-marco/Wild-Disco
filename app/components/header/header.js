"use strict";

angular.module("app")

    .component("header", {
        templateUrl: "app/components/header/header.html",
        controller: Header
    })

;

function Header() {
    this.links = ["release","label","artist",];
}
