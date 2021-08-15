import notices from './notices';

export function getAllNotices() {
    return notices;
}

export function getNoticeById(id) {
    return notices.find((element) => element.id === id);
}
