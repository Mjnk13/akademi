export type contact = {
    icon: React.ReactNode,
    title?: string,
    description: string
}

export type mainContact = {
    name: string,
    role: string,
    location?: string
}

export type teacherDetailsInfo = {
    about: string,
    education: {
        title: string,
        yearDuration: string
    }[],
    expertise: string[],
}