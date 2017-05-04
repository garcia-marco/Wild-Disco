"use strict";

angular.module("app")

    .component("release", {
        templateUrl: "app/components/release/release.html",
        controller: Release
    })

;

function Release() {
    this.release = "release here";
}
