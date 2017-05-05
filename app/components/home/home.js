"use strict";

angular.module("app")
    .component("home", {
        templateUrl: "app/components/home/home.html",
        controller: Home
    })


function Home(Artist, LastArtistReleases, Label) {

    let artistsId = [287377, 14014, 251595, 1419605, 791];

    let artists = [];
    let labels = [];
    let releases = [];

    angular.forEach(artistsId, function (Ids) {
        let art = {};
        art = Artist.get({ id: Ids });
        art.$promise.then(function (data) {
            artists.push(data);
            let rel = {};
            rel = LastArtistReleases.get({ artist_id: data.id });
            rel.$promise.then(function (dataRelease) {
                releases[data.id] = dataRelease;
            });
        });
    });

    this.artists = artists;

    this.artistsReleases = releases;

    this.getArtistReleases = function (id) {
        return this.artistsReleases[id];
    }

    this.label = function (label_id) {
        return Label.get({ label_id: id });
    }
}
