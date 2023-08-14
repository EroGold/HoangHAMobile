$(document).ready(function(){
    $('.sub ul li a').click(function(){
        if($(this).hasClass('text-red')){
            $(this).removeClass('text-red')
            $(this).find('i').css({
                "display": "none"
            })
            var newText = $(this).parents('.filter-option').find('label a').text().replace(": " + $(this).text(), "")
            $(this).parents('.filter-option').find('label a').text(newText)          
        }else{
            $(this).addClass('text-red')
            $(this).find('i').css({
                "display": "block"
            })
            $(this).parents('.filter-option').find('label a').text(
                $(this).parents('.filter-option').find('label a').text() + ": " + $(this).text()
            )

        }
    })
})

