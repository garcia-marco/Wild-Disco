"use strict";

angular.module("app")

    .component("label", {
        templateUrl: "app/components/label/label.html",
        controller: Labels
    })


function Labels(Label, LabelReleases, $stateParams) {

    let currentLab = $stateParams.id;
    this.currentLabel = Label.get({ id: currentLab });
    this.labelRel = LabelReleases.get({ id: currentLab});
}