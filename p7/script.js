$(document).ready(function() {

    let timer = 20;
    let count = 0;
    let colors = ['MediumSlateBlue', 'RoyalBlue', 'SpringGreen', 'Cornsilk', 'BlueViolet', 'Tomato', 'LightCoral', 'HotPink', 'LightCyan']
    let width = $(document).width() - 200;
    let height = $(document).height() - 200;



    function setInter() {
        $('#timer').text(timer);
        let inter = setInterval(function() {
            if (timer > 0) {
                timer--;
                $('#timer').text(timer);
            } else {
                $('.message').text('You died.');
                $('#text').css('display', 'flex');
                clearInterval(inter);
            }
        }, 1000);
        return inter;
    }

    let i = setInter();

    function randomPosition(el) {
        let x = (Math.random() * width); // 1000 * Mathh.random=[0;1]; 1280 * 0.34 = 400,4344334//
        let y = (Math.random() * height);

        $(el).toggleClass('circle');
        $(el).css('background-color', colors[count % 9]);
        $(el).css('top', y);
        $(el).css('right', x);
    }

    $('#shape').on('click', function() {

        randomPosition(this)

        count ++;
        //timer ++;
        $('#count').text(count);
        $('#timer').text(timer);

        if (count == 25) {
            $('.message').text('AAAAW MAN YOU JUST DO IT');
            $('#text').css('display', 'flex')
            clearInterval(i);
        }
    })

    $('#restart').on('click', function() {
        count = 0;
        timer = 20;
        $('#count').text(count);
        $('#text').css('display', 'none');
        i = setInter();
        randomPosition('#shape');

    })
})

//randromPosition($('#timer'));
