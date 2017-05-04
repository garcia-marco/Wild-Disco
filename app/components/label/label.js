"use strict";

angular.module("app")

    .component("label", {
        templateUrl: "app/components/label/label.html",
        controller: Label
    })

;

function Label() {
    this.label = "label here";
}
