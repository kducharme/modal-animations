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
                    const title = 'Tell us about yourself';
                    const subtitle = 'STEP 2: BASIC INFORMATION';
                    const details = 'Manage every aspect of your NSS experience in your profile. From your application to pre-work to job search, your profile will help you learn and launch your career.';
                    const inputs = ['Full name', 'E-mail'];
                    const wave = 'wave1'

                    const button1 = buttonFactory('modal__button--primary', 'Continue setup', (function () {
                        setupManager.viewThree()
                    }))

                    const modal = setupFactory(wave, title, subtitle, details, inputs, button1);
                })
            });
        }
    },
    viewThree: {
        value: function () {
            console.log('viewThree')
        }
    },
})

module.exports = setupManager;
