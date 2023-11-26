$('.c-workCard').waypoint(function() {
    if($('.c-workCard').css('visibility') == 'visible') {

    } else {
        $('.c-workCard').css('visibility', 'visible');

        if($('.c-workCard').hasClass('card01')) {
            $('.card01').toggleClass('animate__animated animate__fadeInUp animate__faster');
        }
        if($('.c-workCard').hasClass('card02')) {
            $('.card02').toggleClass('animate__animated animate__fadeInUp animate__delay-1s animate__faster');
        }
        if($('.c-workCard').hasClass('card03')) {
            $('.card03').toggleClass('animate__animated animate__fadeInUp animate__delay-2s animate__faster');
        }
        
    }
}, {offset: '70%'});

$('.voiceCard').waypoint(function() {

    if($('.voiceCard').css('visibility') == 'visible') {

    } else {
        $('.voiceCard').css('visibility', 'visible');

        if($('.voiceCard').hasClass('voice-left')) {
            $('.voice-left').toggleClass('animate__animated animate__fadeInLeft animate__fast');
        }
        if($('.voiceCard').hasClass('voice-right')) {
            $('.voice-right').toggleClass('animate__animated animate__fadeInRight animate__delay-1s animate__fast');
        }
        
    }
}, {offset: '60%'});

$('.stepNum01').waypoint(function() {

    if($('.stepNum01').css('visibility') == 'visible') {

    } else {
        $('.stepNum01').css('visibility', 'visible');
        $('.stepNum01').toggleClass('animate__animated animate__fadeInUp animate__fast');
    }
}, {offset: '50%'});

$('.stepNum02').waypoint(function() {

    if($('.stepNum02').css('visibility') == 'visible') {

    } else {
        $('.stepNum02').css('visibility', 'visible');
        $('.stepNum02').toggleClass('animate__animated animate__fadeInUp animate__fast');
    }
}, {offset: '60%'});

$('.stepNum03').waypoint(function() {

    if($('.stepNum03').css('visibility') == 'visible') {

    } else {
        $('.stepNum03').css('visibility', 'visible');
        $('.stepNum03').toggleClass('animate__animated animate__fadeInUp animate__fast');
    }
}, {offset: '70%'});