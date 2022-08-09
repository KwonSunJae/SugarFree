module.exports = {
    apps: [{
        name: 'app',
        script: './server.js',
        instances: -1,
        exec_mode: 'cluster',
        env: {
            PORT:5051
        }
    }]
}