/* function openNav() {
    document.getElementById("myNav").style.width = "20%";
} */

/* function closeNav() {
    document.getElementById("myNav").style.width = "0%";
} */
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    $("body").on("mouseover", function() {
        $(".socials").fadeTo(1000, 1);
        $(".links").fadeTo(1000, 1);
    });

    //$(window).load(function() {
      $(".openbtn").on("click", function() {
      const screenWidth = $(window).width();
      if (screenWidth <= 700) {
        $(".bars").fadeOut();
        $('#myNav').css('width', '50%');
      } else {
        $(".bars").fadeOut();
        $('#myNav').css('width', '20%');
      }  
      });
    //});

    $(".closebutton").on("click", function() {
        $(".bars").fadeIn();
        $('#myNav').css('width', '0%');
    });

    $(document).ready(function() {
        var count = 0;
        setInterval(function() {
            if (count <= 20) {
                $(".projectno").text(count);
                count++;
            }
        }, 300);
    });

    $(document).ready(function() {
        var count = 0;
        setInterval(function() {
            if (count <= 7) {
                $(".clients").text(count);
                count++;
            }
        }, 700);
    });

    $(".offers").on("mouseover", function() {
        $("#first-icon").fadeTo(500, 1);
        $(".brand").fadeTo(500, 1);
        $("#second-icon").fadeTo(1000, 1);
        $(".marketing").fadeTo(1000, 1);
        $("#third-icon").fadeTo(1900, 1);
        $(".illustration").fadeTo(1900, 1);
        $("#fourth-icon").fadeTo(2800, 1);
        $(".web").fadeTo(2800, 1);
    });

    $('.scroll').click(function() {
        $('html, body').animate({scrollTop: 0}, 500);
    });

    $('#about-side').click(function() {
        $('html, body').animate({
            scrollTop: $('.about-section').offset().top
        }, 500);
    });

    $('#exp1').click(function() {
        $('html, body').animate({
            scrollTop: $('.about-section').offset().top
        }, 500);
    });

    $('#services-side').click(function() {
        $('html, body').animate({
            scrollTop: $('.offers').offset().top
        }, 500);
    });

    $('#projects-side').click(function() {
        $('html, body').animate({
            scrollTop: $('.projects').offset().top
        }, 500);
    });

    $('#contacts-side').click(function() {
        $('html, body').animate({
            scrollTop: $('.contact-start').offset().top
        }, 500);
    });

    $('#exp2').click(function() {
        $('html, body').animate({
            scrollTop: $('.contact-start').offset().top
        }, 500);
    });

    const observer9 = new
    IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        const screenWidth = $(window).width();
        if (screenWidth <= 700) {
            $('.offers').css({
                height: '250%'
            })
            $('.contact-start').css({
                marginTop: '30px'
            })
            $('.contact-header').css({
                fontSize: '20px',
                marginBottom: '40px'
            })
            $('.contact-write').css({
                fontSize: '14px',
                marginLeft: '20%',
                marginRight: '20%'
            })
            $('.box').css({
                display: 'none',
                width: '20%',
                paddingRight: 0
            });
            $('.location').css({
                width: '30%',
                marginTop: '10%',
                marginLeft: '-60px'
            });
            $('.location h1').css({
                fontSize: '16px',
            });
            $('.location-p').css({
                fontSize: '14px',
                marginLeft: '-5px'
            });
            $('.email-address').css({
                width: '30%',
                marginLeft: '80px'
            });
            $('.email-heading').css({
                fontSize: '16px',
                marginLeft: '60px'
            });
            $('.email-p').css({
                fontSize: '14px'
            });
            $('.phone-no').css({
                width: '30%',
                marginLeft: '140px'
            });
            $('.phone-heading').css({
                fontSize: '16px',
                marginLeft: '120px'
            });
            $('.phone-p').css({
                fontSize: '14px'
            });
            $('.we-offer').animate({
              opacity: 1,
              marginLeft: '38%'
            }, 1);
            $('.everything').animate({
                opacity: 1,
                marginLeft: '16%'
            }, 1)
            $('.everything').css({
                fontSize: '25px',
                marginTop: '-10px',
                marginBottom: '-10%'
            })
            $('.we-offer').css({
                fontSize: '18px'
            })
            $('.col-1').css({
                display: 'block',
                width: '80%',
                textAlign: 'center'
            })
            $('.col-2').css({
                display: 'block',
                width: '80%',
                textAlign: 'center',
                marginTop: '-57%'
            })
            $('.brand h3').css({
                fontSize: '20px',
            })
            $('.brand i').css({
                fontSize: '25px'
            })
            $('.brand p').css({
                fontSize: '15px',
                marginLeft: '10%',
                marginRight: '10%'
            })
            $('.marketing h3').css({
                fontSize: '20px',
            })
            $('.marketing i').css({
                fontSize: '25px',
            })
            $('.marketing p').css({
                fontSize: '15px',
                marginLeft: '10%',
                marginRight: '10%',
                marginBottom: '-30px'
            })
            $('.illustration h3').css({
                fontSize: '20px',
            })
            $('.illustration i').css({
                fontSize: '25px',
            })
            $('.illustration p').css({
                fontSize: '15px',
                marginLeft: '10%',
                marginRight: '10%',
            })
            $('.web h3').css({
                fontSize: '20px',
            })
            $('.web i').css({
                fontSize: '25px',
            })
            $('.web p').css({
                fontSize: '15px',
                marginLeft: '10%',
                marginRight: '10%',
            })
        } else {
            $('.we-offer').animate({
                opacity: 1,
                marginLeft: '45%',
                transform: 'translateX(-100%)'
            }, 1000)
            $('.everything').animate({
                opacity: 1,
                marginLeft: '28%',
                transform: 'translateX(-100%)'
            }, 1000)
        }
        }
    }, {
        threshold: 0.4
    });

    observer9.observe($('.offers')[0]);

    const observer = new
    IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            const screenWidth = $(window).width();
            if (screenWidth <= 700) {
                $('.projects').css({
                    height: '60%'
                }, 1);
                $('.project-heading').css({
                    opacity: 0,
                    textAlign: 'center',
                    fontSize: '16px',
                    marginTop: '30px'
                })
                $('.project-heading').animate({
                    opacity: 1
                }, 1);
                $('.img-section').css({
                    marginTop: '-10%',
                    height: '130%',
                    width: '90%',
                    marginLeft: '5%',
                    marginRight: '5%'
                })
                $('.img1').css({
                    height: '25%'
                })
                $('.img1').mouseenter(function() {
                    $(this).css('transform', 'none');
                })
                $('.img1').animate({
                opacity: 1
                }, 1);
                $('.img2').css({
                    height: '25%'
                })
                $('.img2').mouseenter(function() {
                    $(this).css('transform', 'none');
                })
                $('.img2').animate({
                opacity: 1
                }, 1);
                $('.img3').css({
                    height: '25%'
                })
                $('.img3').mouseenter(function() {
                    $(this).css('transform', 'none');
                })
                $('.img3').animate({
                opacity: 1
                }, 1);
                $('.img4').css({
                    height: '25%'
                })
                $('.img4').mouseenter(function() {
                    $(this).css('transform', 'none');
                })
                $('.img4').animate({
                opacity: 1
                }, 1);
                $('.img5').css({
                    height: '25%'
                })
                $('.img5').mouseenter(function() {
                    $(this).css('transform', 'none');
                })
                $('.img5').animate({
                opacity: 1
                }, 1);
                $('.img6').css({
                    height: '25%'
                })
                $('.img6').mouseenter(function() {
                    $(this).css('transform', 'none');
                })
                $('.img6').animate({
                opacity: 1
                }, 1);
                $('.img7').css({
                    height: '25%'
                })
                $('.img7').mouseenter(function() {
                    $(this).css('transform', 'none');
                })
                $('.img7').animate({
                opacity: 1
                }, 1);
                $('.img8').css({
                    height: '25%',
                    opacity: 1
                })
                $('.img8').mouseenter(function() {
                    $(this).css('transform', 'none');
                })
                /* $('.img8').animate({
                opacity: 1
                }, 1); */
            } else {
                $('.project-heading').animate({
                opacity: 1,
                //marginLeft: '42.5%',
                //transform: 'translateX(-100%)'
            }, 500);
            }
        }
    }, {
        threshold: 0.4
    });

    observer.observe($('.projects')[0]);

    const observer2 = new
    IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
        const screenWidth = $(window).width();
            if (screenWidth <= 700) {
                $('.check').css({
                    fontSize: '25px',
                    opacity: 0,
                    textAlign: 'center',
                    marginBottom: '10px'
                })
                $('.check').animate({
                    opacity: 1
                }, 1)
            } else {
            $('.check').animate({
                opacity: 1,
                //marginRight: '29%',
                //transform: 'translateX(-100%)'
            }, 1500);
        }
        }
    }, {
        threshold: 0.6
    });

    observer2.observe($('.projects')[0]);

    const observer3 = new
    IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            const screenWidth = $(window).width();
            if (screenWidth <= 700) {
                $('.hello').css({
                 marginTop: '-40px',
               });
                $('.hello').animate({
                opacity: 1,
                marginLeft: '33%'
            }, 1);
            } else {
                $('.hello').animate({
                opacity: 1,
                marginLeft: '42.5%',
                transform: 'translateX(-100%)'
            }, 1000);
            }
        }
    }, {
        threshold: 0.3
    });

    observer3.observe($('.about-section')[0]);

    const observer4 = new
    IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
        const screenWidth = $(window).width();
        if (screenWidth <= 700) {
            $('.who').css({
                fontSize: '50px',
                letterSpacing: '2px',
                marginTop: '-30px',
                opacity: 1
            })
            $('.who').animate({
                opacity: 1
            }, 1000);
            $('.aboutme').css({
                fontSize: '18px',
                lineHeight: '24px',
                marginLeft: '13%',
                marginRight: '13%',
                opacity: 1
            })
            $('#comp-2').css({
                marginTop: '-239px'
            })
            $('.about-line').css({
                marginTop: '-30px',
                opacity: 1
            })
            $('.scroll').css({
                width: '25px',
                height: '25px',
                marginLeft: '95%',
                marginTop: '20%'
            })
            $('.scroll').animate({
                opacity: 1
            })
        } else {
            $('.who').animate({
                opacity: 1,
            }, 3500);
            $('.scroll').animate({
                opacity: 1
            })
            }
        }
    }, {
        threshold: 0.5
    });

    observer4.observe($('.about-section')[0]);

//first image
    const image1 = new
    IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            $('.img1').animate({
                opacity: 1
            }, 300);
        }
    }, {
        threshold: 0.3
    });
    image1.observe($('.img-section')[0]);

    //fourth image
    const image4 = new
    IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            $('.img4').animate({
                opacity: 1,
            }, 400);
        }
    }, {
        threshold: 0.4
    });
    image4.observe($('.img-section')[0]);

    //second image
    const image2 = new
    IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            $('.img2').animate({
                opacity: 1
            }, 700);
        }
    }, {
        threshold: 0.5
    });
    image2.observe($('.img-section')[0]);

    //fifth image
    const image5 = new
    IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            $('.img5').animate({
                opacity: 1
            }, 1400);
        }
    }, {
        threshold: 0.5
    });
    image5.observe($('.img-section')[0]);

    //third image
    const image3 = new
    IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            $('.img3').animate({
                opacity: 1
            }, 2100);
        }
    }, {
        threshold: 0.5
    });
    image3.observe($('.img-section')[0]);

    //sixth image
    const image6 = new
    IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            $('.img6').animate({
                opacity: 1
            }, 2800);
        }
    }, {
        threshold: 0.5
    });
    image6.observe($('.img-section')[0]);

    //seventh image
    const image7 = new
    IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            $('.img7').animate({
                opacity: 1
            }, 3500);
        }
    }, {
        threshold: 0.5
    });
    image7.observe($('.img-section')[0]);

    //eigth image
    const image8 = new
    IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            $('.img8').animate({
                opacity: 1
            }, 4200);
        }
    }, {
        threshold: 0.5
    });
    image8.observe($('.img-section')[0]);

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = element = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).outerHeight();
        return elementBottom > viewportTop && elementTop < viewportBottom
    }

    //$(document).ready(function() {
        $(window).on('beforeunload', function() {
            $(window).scrollTop(0);
        });
    //});

    $(document).ready(function() {
        $(window).on('beforeunload', function() {
            $(window).scrollTop(0);
        });
    });