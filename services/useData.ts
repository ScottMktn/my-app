// mock database 
let FLAGS = ['auctions', 'connect'];

const getFlags = () => {
    return FLAGS;
}

const addFlag = (flag: string): void => {
    FLAGS.push(flag);
}

const deleteFlag = (flag: string): void => {
    FLAGS = FLAGS.filter(curFlag => curFlag !== flag);
}

export {
    getFlags,
    addFlag, 
    deleteFlag,
}