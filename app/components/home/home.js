"use strict";

angular.module("app")

    .component("home", {
        templateUrl: "app/components/home/home.html",
        controller: Home
    })

    ;

function Home($scope, $resource) {
    this.artistsId = [287377, 14014, 251595, 1419605, 791];
    this.artists = [];
    for (let i = 0, len = this.artistsId.length; i < len; i++) {
        this.artists.push($resource('https://api.discogs.com/artists/:id', { id: this.artistsId[i], key: 'AhezeNpOGqMfsaWoHHJV', secret: 'nhbZbFrJENBMOisxoKIYukdoggyRmFkF' }).get())
    }
};
