export type mark_day = {
    day: number,
    background: string,
}

export type CalendarEvent = {
    day: number,
    colorText?: string,
    dots?: ('yellow' | 'purple' | 'orange')[],
    backgroundColor?: string,
    borderColor?: string,
    specialBorder?: boolean,
    invoice?: {
        dividerColor: string,
        name: string,
        count?: number
    },
    peopleCounts?: number
};