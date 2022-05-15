$("button#some").click(function () { 
    $("div").css("color","red");
    });

    $(".toggle-text").click(function () { 
    // $("div").fadeOut();
    // $("div").addClass('not-visible')
    
    if ($('div').hasClass('not-visible')) {
        $('div').fadeIn();
        $('div').removeClass("not-visible");
    } else {
        $('div').hide();
        $('div').addClass('not-visible');
    }
    });