process.env.RSS_name = 'alex';
process.env.task = 'basic';
process.env.RSS_year = '2022';
process.env.SRS_err = 'err';

export const parseEnv = () => {
    const envVars = process.env;
    const findName = 'RSS_';
    const rssVars = [];
    for (let key in envVars) {
        if (key.startsWith(findName)) {
            rssVars.push(`${key}=${envVars[key]}`)
        }
    }
    console.log(rssVars.join('; '))
}
parseEnv();
