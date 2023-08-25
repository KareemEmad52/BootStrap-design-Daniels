let sectionScrolltop = $('#about').offset().top
$(window).scroll( () =>{
    let scrollTop = $(window).scrollTop()
    if(scrollTop > sectionScrolltop -30){
        $('.navbar').css({'backgroundColor':'#fff'})
        $('.navbar').css({'boxShadow':'0 1px 8px 3px rgba(0, 0, 0, 0.150980392156862744)'})
        $('.navbar-brand').css({'color':'#000'})
        $('.navbar-expand-lg .navbar-nav .nav-link').css({'color':'#000'})
        $('.decorations').css({'backgroundColor':'#000'})
        $('.navbar-toggler-icon > i').css('color','#000')
        $('#BtnUp i').fadeIn(500);

    } else{
        $('.navbar').css({'backgroundColor':'transparent'})
        $('.navbar').css({'boxShadow':'none'})
        $('.navbar-brand').css({'color':'#fff'})
        $('.navbar-expand-lg .navbar-nav .nav-link').css({'color':'#fff'})        
        $('.decorations').css({'backgroundColor':'#fff'})
        $('.navbar-toggler-icon > i').css('color','#fff')
        $('#BtnUp i').fadeOut(500);                
    }
})

$(document).ready( () =>{
    $('#loading').fadeOut(1000)
    // $('#loading').remove();
})