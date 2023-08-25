let sectionScrolltop = $('#about').offset().top
$(window).scroll( () =>{
    let scrollTop = $(window).scrollTop()
    if(scrollTop > sectionScrolltop -30){
        $('.navbar').css({'backgroundColor':'#fff'})
        $('.navbar-brand').css({'color':'#000'})
        $('.navbar-expand-lg .navbar-nav .nav-link').css({'color':'#000'})
        $('.decorations').css({'backgroundColor':'#000'})
        $('.navbar-toggler-icon > i').css('color','#000')

    } else{
        $('.navbar').css({'backgroundColor':'transparent'})
        $('.navbar-brand').css({'color':'#fff'})
        $('.navbar-expand-lg .navbar-nav .nav-link').css({'color':'#fff'})        
        $('.decorations').css({'backgroundColor':'#fff'})
        $('.navbar-toggler-icon > i').css('color','#fff')                
    }
})