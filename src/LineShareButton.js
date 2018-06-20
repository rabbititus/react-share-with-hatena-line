import PropTypes from 'prop-types';

import assert from 'assert';

import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './utils/createShareButton';


function LineLink(url) {
    assert(url, 'line.url');
    return 'https://social-plugins.line.me/lineit/share' + objectToGetParams({
        url
    });
}

const LineShareButton = createShareButton('line', LineLink, props => ({
    title: props.title,
}), {
    title: PropTypes.string,
}, {
    windowWidth: 740,
    windowHeight: 600,
});

export default LineShareButton;
