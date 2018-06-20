import PropTypes from 'prop-types';

import assert from 'assert';

import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './utils/createShareButton';


function hatenaLink(url, {title}) {
    assert(url, 'hatena.url');
    return 'http://b.hatena.ne.jp/add' + objectToGetParams({
        url: url,
        title
    });
}

const HatenaShareButton = createShareButton('hatena', hatenaLink, props => ({
    title: props.title,
}), {
    title: PropTypes.string,
}, {
    windowWidth: 740,
    windowHeight: 600,
});

export default HatenaShareButton;
