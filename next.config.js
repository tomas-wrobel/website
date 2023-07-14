module.exports = require("@next/mdx")()({
    /**
     * @param {import("webpack").Configuration} config
     * @returns
     */
    webpack(config) {
        config.resolve.extensions.push("...");
        return config;
    },
});
