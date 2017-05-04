"use strict";

angular.module("app")

    .component("footer", {
        templateUrl: "app/components/footer/footer.html",
        controller: Footer
    })

;

function Footer() {
    this.links = ["home","artist","label","release"]
}