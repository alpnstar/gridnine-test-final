const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react', "@babel/preset-typescript"],
    plugins: devMode ? ['react-refresh/babel'] : null,
};
