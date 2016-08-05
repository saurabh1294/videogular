'use strict';
angular.module('myApp',
		[
			"ngSanitize",
			"com.2fdevs.videogular",
			"com.2fdevs.videogular.plugins.controls",
			"info.vietnamcode.nampnq.videogular.plugins.youtube"
		]
	)
	.controller('HomeCtrl',
		["$sce", function ($sce) {
			this.config = {
				preload: "none",
				sources: [
					{src: "https://www.youtube.com/watch?v=I7ZUkd44-Co"},
					{src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
					{src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
				],
				theme: {
					url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
				},
				plugins: {
					controls: {
						autoHide: true,
						autoHideTime: 5000
					}
				}
			};
		}]
	);
