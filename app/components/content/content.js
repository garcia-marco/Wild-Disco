"use strict";

angular.module("app")

    .component("content", {
        templateUrl: "app/components/content/content.html",
        controller: Content
    })

;

function Content() {
    this.content = "content here";
}
