const $ = require('jquery');
const buttonFactory = require('../factories/buttonFactory');
const setupFactory = require('../factories/setupFactory');
const printArea = $('#content')

const $body = $('body');

// Creates modal structure
const $modal = $('<div>')
    .addClass('modal');

const $bg = $('<div>')
    .addClass('modal__bg')
$modal.append($bg);

// Modal background animation
const $wave = $('<div>')
    .addClass(`wave wave1`)
    .attr('id', 'wave1');

$modal.append($wave);


// Appending everything together
$body.append($modal);

// Manages all modals used throughout the app
const setupManager = Object.create(null, {
    // Initial modal view
    viewOne: {
        value: function () {
            // Creating arguments for setupFactory;
            const title = 'Create your student profile';
            const subtitle = 'STEP 1: SETUP YOUR STUDENT PROFILE';
            const details = 'Manage every aspect of your NSS experience in your profile. From your application to pre-work to job search, your profile will help you learn and launch your career.';
            const inputs = undefined;
            const wave = 'wave1'

            const button1 = buttonFactory('modal__button--primary', 'Get started now', (function () {
                setupManager.viewTwo()
            }))

            const button2 = buttonFactory('modal__button--secondary', 'Complete later', (function () {
                setupManager.viewThree()
            }));

            const modal = setupFactory(title, subtitle, details, inputs, button1, button2);

            $modal.append(modal)
        }
    },
    viewTwo: {
        value: function () {
            $('#wave1').animate({
                width: '900px',
                height: '900px',
                right: '-1000px',
                color: '1b1e26',
                opacity: 0
            }, 1800);

            // expands bg from left to right and hides content
            $('.modal__bg').animate({
                width: '100%',
            }, 1620, function () {
                // $(this).after($('.modal').empty())
                $('.modal__content').empty();
                $('.modal__content').remove();
                $(this).after(function () {

                    // Creating arguments for setupFactory;
                    const title = `How should we address you?`;
                    const subtitle = 'STEP 2: BASIC INFORMATION';
                    const details = undefined;
                    const inputs = ['First name', 'Last name'];

                    const button1 = buttonFactory('modal__button--primary', 'Continue setup', (function () {
                        const name = $('#id__First').val()
                        setupManager.viewThree(name)
                    }))

                    const button2 = buttonFactory('modal__button--secondary', 'Go back', (function () {
                        $('.modal').empty();
                        setupManager.viewOne();
                    }))

                    const modal = setupFactory(title, subtitle, details, inputs, button1, button2);

                    $modal.append(modal);

                    $('.modal__details').addClass('modal__detailsAlt');

                    $('.modal__button').css({
                        'margin-top': '50px'
                    })

                    // collapses bg to hide on right of page
                    $('#wave1').animate({
                        width: '1000px',
                        height: '1000px',
                        right: '-100px',
                        color: 'white',
                        opacity: '.05'
                    }, 1400);

                    setTimeout(function () {
                        $('.modal__bg').animate({
                            width: '5vw'
                        }, 1400)
                    }, 265);

                })
                // Add code here
            });
        }
    },
    viewThree: {
        value: function (name) {
            $('#wave1').animate({
                width: '900px',
                height: '900px',
                right: '-1000px',
                color: '1b1e26',
                opacity: 0
            }, 1800);

            // expands bg from left to right and hides content
            $('.modal__bg').animate({
                width: '100%',
            }, 1620, function () {
                // $(this).after($('.modal').empty())
                $('.modal__content').empty();
                $('.modal__content').remove();
                $(this).after(function () {

                    // Creating arguments for setupFactory;
                    const title = `How can we reach you, ${name}?`;
                    const subtitle = 'STEP 3: CONTACT INFORMATION';
                    const details = undefined;
                    const inputs = ['E-mail', 'Phone number'];

                    const button1 = buttonFactory('modal__button--primary', 'Continue setup', (function () {
                        const name = $('#id__Full').val()
                        setupManager.viewThree(name)
                    }))

                    const button2 = buttonFactory('modal__button--secondary', 'Go back', (function () {
                        $('.modal').empty();
                        setupManager.viewOne();
                    }))

                    const modal = setupFactory(title, subtitle, details, inputs, button1, button2);

                    $modal.append(modal);

                    $('.modal__details').addClass('modal__detailsAlt');

                    $('.modal__button').css({
                        'margin-top': '50px'
                    })

                    // collapses bg to hide on right of page
                    $('#wave1').animate({
                        width: '1000px',
                        height: '1000px',
                        right: '-100px',
                        color: 'white',
                        opacity: '.05'
                    }, 1400);

                    setTimeout(function () {
                        $('.modal__bg').animate({
                            width: '5vw'
                        }, 1400)
                    }, 265);

                })
            });
        }
    }
})

module.exports = setupManager;