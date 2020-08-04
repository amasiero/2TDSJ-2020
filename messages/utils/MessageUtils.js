import PropTypes from 'prop-types';

export const MessageShape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['text', 'image', 'location']),
    text: PropTypes.string,
    uri: PropTypes.string,
    coordinate: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
    }),
});

let messageId = 0;

function getNextId() {
    messageId+=1;
    return messageId;
}

export function createTextMessage(text) {
    return {
        id: getNextId(),
        type: 'text',
        text
    };
}

export function createImageMessage(uri) {
    return {
        id: getNextId(),
        type: 'image',
        uri
    };
}

export function createLocationMessage(coordinate) {
    return {
        id: getNextId(),
        type: 'location',
        coordinate
    };
}