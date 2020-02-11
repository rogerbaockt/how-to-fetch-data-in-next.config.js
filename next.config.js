import fetch from 'isomorphic-unfetch'

module.exports = {
    exportTrailingSlash: true,
    exportPathMap: async function () {
        const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
        const data = await res.json()

        let staticHtmls = {
            '/': { page: '/' }
        };
        for (let i = 0, len = data.length; i < len; i++) {
            staticHtmls[`/show/${data[i].show.id}`] = `/show/${data[i].show.id}`
        }
        return staticHtmls;
    }
};