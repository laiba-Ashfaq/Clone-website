$(document).ready(function() {
    $(".bar-btn").click(function() {
        $(".nav-list").animate({
            left: '0px'
        }, 300)
        $(".bar-btn").hide()
        $(".cross-btn").show()
    })
    $(".cross-btn").click(function() {
        $(".nav-list").animate({
            left: '-300px'
        }, 300)
        $(".cross-btn").hide()
        $(".bar-btn").show()
    })

})