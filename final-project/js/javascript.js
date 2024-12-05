$(document).ready(function(){
    $(function(){
        $("#header").load("header.html");
        $("#footer").load("footer.html");
    });


    // Bunch of hover effects
    $("#snesBtn").hover(
        function(){
            // mouse enter
            $(this).css('background-color', '#ff6058');
        },
        function(){
            // mouse leave
            $(this).css('background-color', '#FE463C');
        }
    );
    
    $("#gcBtn").hover(
        function(){
            // mouse enter
            $(this).css('background-color', '#b8b9f1');
        },
        function(){
            // mouse leave
            $(this).css('background-color', '#A9AADD');
        }
    );

    $("#switchBtn").hover(
        function(){
            // mouse enter
            $(this).css('background-color', '#6f61c6');
        },
        function(){
            // mouse leave
            $(this).css('background-color', '#554A98');
        }
    );

    $("#asideBtn").hover(
        function(){
            // mouse enter
            $(this).css('background-color', '#6256af');
        },
        function(){
            // mouse leave
            $(this).css('background-color', '#433b79');
        }
    );

    $("#aside2Btn").hover(
        function(){
            // mouse enter
            $(this).css('background-color', '#6256af');
        },
        function(){
            // mouse leave
            $(this).css('background-color', '#433b79');
        }
    );

    $("#gcBuyBtn").hover(
        function(){
            // mouse enter
            $(this).css('background-color', '#6f61c6');
        },
        function(){
            // mouse leave
            $(this).css('background-color', '#554A98');
        }
    );

    $("#snesBuyBtn").hover(
        function(){
            // mouse enter
            $(this).css('background-color', '#b8b9f1');
        },
        function(){
            // mouse leave
            $(this).css('background-color', '#A9AADD');
        }
    );

    $("#switchBuyBtn").hover(
        function(){
            // mouse enter
            $(this).css('background-color', '#ff6058');
        },
        function(){
            // mouse leave
            $(this).css('background-color', '#FE463C');
        }
    );
});