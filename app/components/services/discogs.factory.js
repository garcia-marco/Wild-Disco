"use strict";

angular.module("app")

    .factory("Artist", function ($resource) {
        return $resource('https://api.discogs.com/artists/:id', { id: 'osef', key: "SlpnWvilmgEBALOyuUUf", secret: "cLadqGZrWvmArSUIlUwhYflriPcszTAo" });
    })
    .factory("Label", function ($resource) {
        return $resource('https://api.discogs.com/labels/:id', { id: 'osef', key: "SlpnWvilmgEBALOyuUUf", secret: "cLadqGZrWvmArSUIlUwhYflriPcszTAo" });
    })
    .factory("ArtistReleases", function ($resource) {
        return $resource('https://api.discogs.com/artists/:id/releases', { id: 'osef', key: "CYxgKilzBewlWUCbRXtK", secret: "RzsDXknRYVrUtVYwtRWiCLdXqctGmpEZ" });
    })
    .factory("Release", function ($resource) {
        return $resource('https://api.discogs.com/releases/:id', { id: 'osef', key: "CYxgKilzBewlWUCbRXtK", secret: "RzsDXknRYVrUtVYwtRWiCLdXqctGmpEZ" });
    })
    .factory("LastArtistReleases", function ($resource) {
        return $resource('https://api.discogs.com/artists/:artist_id/releases', { artist_id: 'osef', sort: 'year', sort_order: 'desc', page: "1", per_page: "3", key: "AhezeNpOGqMfsaWoHHJV", secret: "nhbZbFrJENBMOisxoKIYukdoggyRmFkF" });
    })
    .factory("LabelReleases", function ($resource) {
        return $resource('https://api.discogs.com/labels/:id/releases', { id: 'osef', key: "AhezeNpOGqMfsaWoHHJV", secret: "nhbZbFrJENBMOisxoKIYukdoggyRmFkF" });
    })