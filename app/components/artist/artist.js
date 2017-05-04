"use strict";

angular.module("app")

    .component("artist", {
        templateUrl: "app/components/artist/artist.html",
        controller: Artist
    })

;

function Artist() {
    this.artist = "artist here";
}
