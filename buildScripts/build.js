import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod'
import chalk from 'chalk';
/* eslint-disable*/
process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production. This will take a moment..'))

webpack(webpackConfig).run((err) => {
    if(err){
        console.log(chalk.red(err));
        return 1;
    }
    return 0;
});

/*const jsonStats = stats.toJson();

if(jsonStats.hasErrors){
    return jsonStats.errors.map(error => console.log(chalk.red(error))); //eslint-disable
}

if(jsonStats.hasWarnings){
    console.log(chalk.yellow('Webpack generated the following warnings: '));
    return jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
}

console.log(`Webpak stats: ${stats}`);

console.log(chalk.green('Your app has been built for production and written to /dist'));

return 0;*/