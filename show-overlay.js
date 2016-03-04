document.addEventListener("DOMContentLoaded", function () {

    if (-1 !== location.search.indexOf('show-overlay')) {

        var KEY_CODE_SHIFT = 16,
            KEY_CODE_CTRL = 91,
            KEY_CODE_LEFT_ARROW = 37,
            KEY_CODE_UP_ARROW = 38,
            KEY_CODE_RIGHT_ARROW = 39,
            KEY_CODE_DOWN_ARROW = 40,
            KEY_CODE_TILDE = 192,
            KEY_CODE_1 = 49,
            KEY_CODE_2 = 50,
            KEY_CODE_3 = 51,
            KEY_CODE_4 = 52,
            KEY_CODE_5 = 53,
            KEY_CODE_6 = 54,
            KEY_CODE_7 = 55,
            KEY_CODE_8 = 56,
            KEY_CODE_9 = 57,
            KEY_CODE_0 = 48,
            shiftDown = false,
            ctrlDown = false,
            div = document.createElement('div'),
            img = document.createElement('img');

        img.src = 'you-need-to-set-your-overlay.jpg';
        var match = location.search.match(/show\-overlay=(.+?)(&|$)/);
        if (null !== match) {
            img.src = match[1];
        }

        div.style.opacity = 0.3;
        div.style.position = 'absolute';
        div.style.top = '0';
        div.style.left = '0';
        div.style.zIndex = 10051;
        div.appendChild(img);
        if (document.body.firstChild) {
            document.body.insertBefore(div, document.body.firstChild);
        } else {
            document.body.appendChild(div);
        }

        function removePx(s) {
            return s.replace(/[^0-9]/g, '');
        }

        function updateCssPosition(what, amount) {
            amount *= 1;
            var oldAmount = removePx(div.style[what]) * 1,
                newAmount = oldAmount + amount;
            div.style[what] = newAmount + 'px';
            localStorage.setItem(what, newAmount);
        }

        function setOpacity(opacity) {
            opacity *= 1;
            div.style.opacity = opacity;
            localStorage.setItem('opacity', opacity);
        }

        document.onkeydown = function (e) {
            e = e || window.event;

            var amt = 1;
            if (shiftDown) amt *= 10;
            if (ctrlDown) amt *= 10;

            var keycode = e.which || e.keyCode;

            switch (keycode) {

                case KEY_CODE_SHIFT:
                    shiftDown = true;
                    break;

                case KEY_CODE_CTRL:
                    ctrlDown = true;
                    break;

                case KEY_CODE_LEFT_ARROW:
                    updateCssPosition('left', amt * -1);
                    break;

                case KEY_CODE_UP_ARROW:
                    updateCssPosition('top', amt * -1);
                    break;

                case KEY_CODE_RIGHT_ARROW:
                    updateCssPosition('left', amt);
                    break;

                case KEY_CODE_DOWN_ARROW:
                    updateCssPosition('top', amt);
                    break;

                case KEY_CODE_TILDE:
                    setOpacity(0);
                    break;

                case KEY_CODE_1:
                    setOpacity(0.1);
                    break;

                case KEY_CODE_2:
                    setOpacity(0.2);
                    break;

                case KEY_CODE_3:
                    setOpacity(0.3);
                    break;

                case KEY_CODE_4:
                    setOpacity(0.4);
                    break;

                case KEY_CODE_5:
                    setOpacity(0.5);
                    break;

                case KEY_CODE_6:
                    setOpacity(0.6);
                    break;

                case KEY_CODE_7:
                    setOpacity(0.7);
                    break;

                case KEY_CODE_8:
                    setOpacity(0.8);
                    break;

                case KEY_CODE_9:
                    setOpacity(0.9);
                    break;

                case KEY_CODE_0:
                    setOpacity(1);
                    break;

                default:
                    console.log(keycode);
                    return;
            }
            e.preventDefault();
        };

        document.onkeyup = function (e) {
            e = e || window.event;
            switch (e.which || e.keyCode) {

                case KEY_CODE_SHIFT:
                    shiftDown = false;
                    break;

                case KEY_CODE_CTRL:
                    ctrlDown = false;
                    break;

                default:
                    return;
            }
            e.preventDefault();
        };

        if (true === localStorage.hasOwnProperty('top')) {
            updateCssPosition('top', localStorage.getItem('top'));
        }

        if (true === localStorage.hasOwnProperty('left')) {
            updateCssPosition('left', localStorage.getItem('left'));
        }

        if (true === localStorage.hasOwnProperty('opacity')) {
            setOpacity(localStorage.getItem('opacity'));
        }
    }
});
