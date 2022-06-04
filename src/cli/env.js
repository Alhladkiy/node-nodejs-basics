export const parseEnv = () => {
    const variable = process.env;
    const findName = 'RSS_';
    for (let key in variable) {
        if (key.includes(findName)) {
            console.log(`${key}=${variable[key]};`)
        }
    }
}
parseEnv();
