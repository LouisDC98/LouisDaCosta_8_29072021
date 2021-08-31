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
            const result = notices.find((element) => element.id === id);
            if (result === undefined) {
                reject('Not found');
            }
            resolve(result);
        }, 1000);
    });
}
