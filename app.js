"use strict";

angular.module("app", [
    // les dépendances externes
    "ui.router", "ngResource"
])

    .config(function ($stateProvider, $urlRouterProvider) {
        var states = [
            {
                name: "home",
                url: "/home",
                component: "home"
            },
            {
                name: "artist",
                url: "/artist/:id",
                component: "artist"
            },
            {
                name: "label",
                url: "/label/:id",
                component: "label"
            },
            {
                name: "release",
                url: "/release/:id",
                component: "release"
            },
        ];

        $urlRouterProvider.otherwise("/home");
        states.forEach(function (state) {
            $stateProvider.state(state);
        })
    })

    ;
