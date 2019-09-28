module.exports = {
    publicPath: '',
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3100',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}