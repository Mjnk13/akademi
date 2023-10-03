export type chat = {
    name: string,
    message: string,
    time: string,
    numOfUnreadMessage: number
}

export type group = chat & {
    colorAvatar: string,
}

export type message = {
    text: string,
    time: string,
    by: string
}