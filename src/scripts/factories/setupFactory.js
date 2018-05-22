const $ = require('jquery');

const setupFactory = (title, subtitle, details, inputs, button1, button2) => {

    const $content = $('<div>')
        .attr('id', 'content')
        .addClass('modal__content')

    // Modal title
    if (subtitle) {
        const $subtitle = $('<p>')
            .text(subtitle)
            .addClass('modal__subtitle');
        $content.append($subtitle);
    }

    // Modal title
    if (title) {
        const $title = $('<h1>')
            .addClass('modal__title')
            .html(`<span>${title}</span>`);
        $content.append($title);
    }

    // Modal details
    if (details) {
        const $details = $('<p>')
            .text(details)
            .addClass('modal__details');
        $content.append($details);
    }

    // Modal inputs
    if (inputs) {
        const $form = $('<span>');
        $form.addClass('modal__form');
        inputs.forEach(input => {
            const $structure = $('<span>')
                .addClass('modal__form--structure')

            // Creates label for input
            const $label = $('<label>')
                .text(input)
                .addClass('modal__form--label');
            $structure.append($label);

            // Creates input
            const id = input.split(' ')[0];
            const $input = $('<input>')
                .attr('id', `id__${id}`)
                .attr('placeholder', input)
                .addClass('modal__form--input');
            $structure.append($input);

            // Appends full input to form
            $form.append($structure);
        })
        $content.append($form);
    }

    // Modal buttons
    if (button1 && button2) {
        const $structure = $('<span>')
            .addClass('modal__button');
        $structure.append(button2, button1);
        $content.append($structure)
    }
    if (!button2) {
        const $structure = $('<span>')
            .addClass('modal__button');
        $structure.append(button1);
        $content.append($structure)
    }

    return $content;
}

module.exports = setupFactory;