let path = require('path');

module.exports = {
    resolve: {
        extensions: ['.js', '.json', '.vue'],
        alias: {
            '~': path.resolve(__dirname, '../../../utils/MyUtilFn'),
        },
    },
};
