"use strict";

angular.module("app")
    .component("artist", {
        templateUrl: "app/components/artist/artist.html",
        controller: ArtistPage
    })


function ArtistPage(Artist, ArtistReleases, $stateParams) {

    let currentArt = $stateParams.id;
    this.currentArtist = Artist.get({ id: currentArt });

    this.releases = ArtistReleases.get({ id: currentArt });
}
