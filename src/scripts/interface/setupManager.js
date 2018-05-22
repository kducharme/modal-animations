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
            const title = 'Create student profile';
            const subtitle = 'LAUNCH YOUR CAREER IN SOFTWARE';
            const details = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.';
            const inputs = undefined;

            const button1 = buttonFactory('modal__button--primary', 'Get started now', (function () {
                setupManager.viewTwo()
            }))

            const button2 = buttonFactory('modal__button--secondary', 'Complete later', (function () {
                setupManager.viewThree()
            }))

            const modal = setupFactory(title, subtitle, details, inputs, button1, button2);

            setupManager.waves()
        }
    },
    waves: {
        value: function () {
            const $waveOne = $('<div>')
                .addClass('wave wave1');

            const $waveTwo = $('<div>')
                .addClass('wave wave2');
                
            const $waveThree = $('<div>')
                .addClass('wave wave3');


            $('.modal').append($waveOne, $waveTwo)
        }
    },
    viewTwo: {
        value: function () {
            console.log('viewTwo')
        }
    },
    viewTwo: {
        value: function () {
            console.log('viewThree')
        }
    },
})

module.exports = setupManager;
