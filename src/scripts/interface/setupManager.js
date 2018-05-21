const $ = require('jquery');
const buttonFactory = require('../factories/buttonFactory');
const modalFactory = require('../factories/modalFactory');
const printArea = $('#content')

// Manages all modals used throughout the app
const setupManager = Object.create(null, {
    // Initial modal view
    viewOne: {
        value: function () {
            // Creating arguments for modalFactory;
            const title = 'Create student profile';
            const subtitle = 'LAUNCH YOUR CAREER IN SOFTWARE';
            const details = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.';
            const inputs = undefined;

            const button1 = buttonFactory('modal__button--primary', 'Primary button', (function () {
                setupManager.viewTwo()
            }))

            const button2 = buttonFactory('modal__button--secondary', 'Secondary button', (function () {
                setupManager.viewThree()
            }))

            const modal = modalFactory(title, subtitle, details, inputs, button1, button2);
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
