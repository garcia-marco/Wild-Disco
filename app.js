"use strict";

angular.module("app", [
    // les dépendances externes
    "ui.router", "ngResource"
])
    .controller('main', main)

    .config(function ($stateProvider, $urlRouterProvider) {
        var states = [
            {
                name: "home",
                url: "/home",
                component: "home"
            },
            {
                name: "artist",
                url: "/artist",
                component: "artist"
            },
            {
                name: "label",
                url: "/label",
                component: "label"
            },
            {
                name: "release",
                url: "/release",
                component: "release"
            },
        ];

        $urlRouterProvider.otherwise("/home");
        states.forEach(function (state) {
            $stateProvider.state(state);
        })
    })

    ;


function main($scope, $resource) {
    this.test = "hello";
    var resource = $resource("https://api.discogs.com/releases/249504");

};
