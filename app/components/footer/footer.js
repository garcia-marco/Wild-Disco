"use strict";

angular.module("app")

    .component("footer", {
        templateUrl: "app/components/footer/footer.html",
        controller: Footer
    })

;

function Footer() {
    this.footer = ["home","artist","label","release"];
}