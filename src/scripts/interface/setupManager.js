const $ = require('jquery');
const buttonFactory = require('../factories/buttonFactory');
const setupFactory = require('../factories/setupFactory');
const printArea = $('#content')

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

            const modal = setupFactory(wave, title, subtitle, details, inputs, button1, button2);
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

            $('.modal__bg').animate({
                width: '100%',
            }, 1640, function () {
                $(this).after($('.modal').empty());
                $(this).after(function () {
                    // Creating arguments for setupFactory;
                    const title = `How should we address you?`;
                    const subtitle = 'STEP 2: BASIC INFORMATION';
                    const details = undefined;
                    const inputs = ['Full name', 'E-mail'];
                    const wave = 'wave1'

                    const button1 = buttonFactory('modal__button--primary', 'Continue setup', (function () {
                        const name = $('#id__Full').val()
                        setupManager.viewThree(name)
                    }))

                    const button2 = buttonFactory('modal__button--secondary', 'Go back', (function () {
                        $('.modal').empty();
                        setupManager.viewOne();
                    }))

                    const modal = setupFactory(wave, title, subtitle, details, inputs, button1, button2);

                    $('.modal__details').addClass('modal__detailsAlt');

                    $('.modal__button').css({
                        'margin-top': '50px'
                    })
                })
            });
        }
    },
    viewThree: {
        value: function (name) {
            const firstName = name.split(' ')[0]

            $('#wave1').animate({
                width: '900px',
                height: '900px',
                right: '-1000px',
                color: '1b1e26',
                opacity: 0
            }, 1800);

            $('.modal__bg').animate({
                width: '100%',
            }, 1640, function () {
                $(this).after($('.modal').empty());
                $(this).after(function () {
                    // Creating arguments for setupFactory;
                    const title = `Where can we find you, ${firstName}?`;
                    const subtitle = 'STEP 3: SOCIAL PROFILES';
                    const details = undefined;
                    const inputs = ['Linkedin', 'GitHub'];
                    const wave = 'wave1'

                    const button1 = buttonFactory('modal__button--primary', 'Continue setup', (function () {
                        setupManager.viewThree()
                    }))

                    const button2 = buttonFactory('modal__button--secondary', 'Go back', (function () {
                        $('.modal').empty();
                        setupManager.viewTwo();
                    }))

                    const modal = setupFactory(wave, title, subtitle, details, inputs, button1, button2);

                    $('.modal__details').addClass('modal__detailsAlt');

                    $('.modal__button').css({
                        'margin-top': '50px'
                    })

                })
            });
        }
    },
})

module.exports = setupManager;
