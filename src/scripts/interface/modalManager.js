const $ = require('jquery');
const buttonFactory = require('../factories/buttonFactory');
const modalFactory = require('../factories/modalFactory');
const printArea = $('#content')

// Manages all modals used throughout the app
const modalManager = Object.create(null, {
    // Initial modal view
    viewOne: {
        value: function () {
            // Creating arguments for modalFactory;
            const title = 'Add new task'
            const details = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.';
            const inputs = ['Task name', 'Task description', 'Due date']
            const button = buttonFactory('modal__content--button', 'Add task', (function () {
                modalManager.viewTwo()
            }))
            const modal = modalFactory(title, details, inputs, button);
        }
    },
    viewTwo: {
        value: function () {
            console.log('viewTwo')
        }
    },
})

module.exports = modalManager;
