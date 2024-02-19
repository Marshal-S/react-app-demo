/* eslint-disable @typescript-eslint/no-var-requires */
//引入 craco-less插件
// eslint-disable-next-line no-undef
const CracoLessPlugin = require('craco-less');

// eslint-disable-next-line no-undef
module.exports = {
    typescript: {
        enableTypeChecking: true /* (default value) */,
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
        },
    ],
};
