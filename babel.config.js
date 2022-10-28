module.exports = {
    presets: [
        '@babel/preset-env',

        // configurar sem importar o React
        ['@babel/preset-react', {
            runtime: 'automatic',
        }]
    ]
}