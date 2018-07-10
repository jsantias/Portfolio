$(document).ready(function () {
    var progressbar = $('#progress_bar');
    max = progressbar.attr('max');
    time = (1000 / max) * 5;
    value = progressbar.val();

    var progressbar2 = $('#progress_bar2');
    max2 = progressbar2.attr('max');
    time2 = (2000 / max2) * 5;
    value2 = progressbar2.val();

    var progressbar3 = $('#progress_bar3');
    max3 = progressbar3.attr('max');
    time3 = (3000 / max3) * 5;
    value3 = progressbar3.val();

    var loading = function () {
        if (value < max) {
            value += 1;
            addValue = progressbar.val(value);
        }
        if (value2 < max2) {
            value2 += 1;
            addValue2 = progressbar2.val(value2);
        }

        if (value3 < max3) {
            value3 += 1;
            addValue3 = progressbar3.val(value3);
        }

        $('#progress_bar').html(value + '%');
        $('#progress_bar2').html(value2 + '%');
        $('#progress_bar3').html(value3 + '%');

        var $ppc = $('#pbar'),
            deg = 360 * value / 100;
        if (value > 50) {
            $ppc.addClass('gt-50');
        }

        var $ppc2 = $('#pbar2'),
            deg2 = 360 * value2 / 100;
        if (value2 > 50) {
            $ppc2.addClass('gt-50');
        }

        var $ppc3 = $('#pbar3'),
            deg3 = 360 * value3 / 100;
        if (value3 > 50) {
            $ppc3.addClass('gt-50');
        }

        $('#progress-fill').css('transform', 'rotate(' + deg + 'deg)');
        $('#progress-fill2').css('transform', 'rotate(' + deg2 + 'deg)');
        $('#progress-fill3').css('transform', 'rotate(' + deg3 + 'deg)');

        $('#ppc-percents span').html(value + '%');
        $('#ppc-percents2 span').html(value2 + '%');
        $('#ppc-percents3 span').html(value3 + '%');

        if (value == max) {
            clearInterval(animate);
        }
    };

    var animate = setInterval(function () {
        loading();
    }, time);
});