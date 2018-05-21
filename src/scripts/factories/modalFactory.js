const $ = require('jquery');

const modalFactory = (title, subtitle, details, inputs, button1, button2) => {
    const $body = $('body');

    // Creates modal structure
    const $modal = $('<span>');
    $modal.addClass('modal');

    // Modal title
    if (subtitle) {
        const $subtitle = $('<p>')
            .text(subtitle)
            .addClass('modal__subtitle');
        $modal.append($subtitle);
    }

    // Modal title
    if (title) {
        const $title = $('<h1>')
            .addClass('modal__title')
            .html(`<span>${title}</span>`);
        $modal.append($title);
    }

    // Modal details
    if (details) {
        const $details = $('<p>')
            .text(details)
            .addClass('modal__details');
        $modal.append($details);
    }

    // Modal inputs
    if (inputs) {
        const $form = $('<span>');
        $form.addClass('modal__form');
        inputs.forEach(input => {
            const $label = $('<label>')
                .text(input)
                .addClass('modal__label');
            $modal.append($label);

            const id = input.split(' ')[0];
            const $input = $('<input>')
                .attr('id', `id__${id}`)
                .attr('placeholder', input)
                .addClass('modal__input');

            $form.append($input);
        })
        $modal.append($form);
    }

    if (button1 && button2) {
        const $structure = $('<span>')
            .addClass('modal__button');
        $structure.append(button1, button2);
        $modal.append($structure)
    }
    if (!button2) {
        $modal.append(button1);
    }

    // Appending everything together
    $body.append($modal);
}

// Closes the modal when a user clicks the 'x'
const closeModal = () => {
    $('.modal__bg').remove();
    $('.modal__close').remove();
}

module.exports = modalFactory;