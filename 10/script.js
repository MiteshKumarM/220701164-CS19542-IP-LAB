$(document).ready(function () {
    var width = window.innerWidth - 100;
    var height = window.innerHeight - 200;

    function getRandomAlphabet() {
        var code = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
        return String.fromCharCode(code);
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function getRandomPosition() {
        var x = Math.floor(Math.random() * width);
        var y = Math.floor(Math.random() * height);
        return { top: y, left: x };
    }

    function createBubble(character, x, y, color) {
        var bubble = $('<div class="bubble"></div>').text(character)
            .css({
                'background-color': color,
                'top': y + 'px',
                'left': x + 'px'
            });

        $('body').append(bubble);

        setTimeout(function () {
            bubble.remove();
        }, 3000);
    }

    $(document).keydown(function (event) {
        var keyCode = event.which || event.keyCode;
        if (keyCode >= 65 && keyCode <= 90) {
            var char = String.fromCharCode(keyCode).toUpperCase();
            var position = getRandomPosition();
            var color = getRandomColor();

            createBubble(char, position.left, position.top, color);
        }
    });

    $(document).click(function (event) {
        var char = getRandomAlphabet();
        var color = getRandomColor();

        var x = event.pageX;
        var y = event.pageY;

        createBubble(char, x, y, color);
    });
});
