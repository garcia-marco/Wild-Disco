"use strict";

angular.module("app")

    .component("release", {
        templateUrl: "app/components/release/release.html",
        controller: Release
    })

;

function Release(Release, $stateParams) {

    let currentRel = $stateParams.id;
    this.currentRelease = Release.get({ id: currentRel });
}