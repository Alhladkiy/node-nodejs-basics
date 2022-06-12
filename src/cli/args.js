export const parseArgs = () => {
    const args = process.argv.slice(2);
    let res = '';
    args.forEach((item, index, arr) => {
        if (index % 2 !== 0) {
            res += `${item}`;
            if (index !== arr.length -1) {
                res += ', ';
            }
        } else {
            res += `${item.slice(2)} is `;
        }
    })
    console.log(res)
};

parseArgs();
