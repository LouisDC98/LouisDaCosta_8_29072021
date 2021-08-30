import notices from './notices';

export async function getAllNotices() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(notices);
        }, 1000);
    });
}

export async function getNoticeById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const toto = notices.find((element) => element.id === id);
            if (toto === undefined) {
                reject('Not found');
            }
            resolve(toto);
        }, 1000);
    });
}
