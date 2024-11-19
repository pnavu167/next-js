module.exports = {
    apps: [
        {
            name: 'next-js',
            exec_mode: 'cluster',
            instances: 'max', // Or a number of instances
            script: 'npm',
            args: 'start',
            env: {
                NODE_ENV: 'production'
            }
        }
    ]
};
