"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("#image_rollovers img");

    var originImage = [];
    var rolloverImage = [];

    // process each img tag
    for (let image of images) {
        const oldURL = image.src;
        const newURL = image.id;

        // preload rollover image
        originImage.push(oldURL);
        rolloverImage.push(newURL);

        // set up event handlers for hovering an image
        image.addEventListener("mouseover", () => {
            image.src = newURL;
        });
        image.addEventListener("mouseout", () => {
            image.src = oldURL;
        });
    }

    var timer1 = setTimeout (
        function () {
            var count = 0;
            for (let image of images) {
                image.src = rolloverImage[count++];
            }
            clearTimeout(timer1);
        },
        1000);

    var timer2 = setTimeout (
        function () {
            var count = 0;
            for (let image of images) {
                image.src = originImage[count++];
            }
            clearTimeout(timer2);
        },
        2000);

});