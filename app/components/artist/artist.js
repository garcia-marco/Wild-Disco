"use strict";

angular.module("app")
    .component("artist", {
        templateUrl: "app/components/artist/artist.html",
        controller: ArtistPage
    })


function ArtistPage(Artist, LabelByArtist, $stateParams) {

    let currentArt = $stateParams.id;
    this.currentArtist = Artist.get({ id: currentArt });
    // console.log(this.currentArtist);
     let labels = $stateParams.label_id;
     this.currentArtistLabels = LabelByArtist.get({ label_id:labels });

}
