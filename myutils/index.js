export const absoluteAlign = (direction) => {
    switch (direction) {
        case 'left':
            return { left: 15 }
        case 'center':
            return { alignItems: 'center' }
        case 'right':
            return { right: 15 }
        default:
            return { right: 15 }
    }
}

export const flexAlign = (direction) => {
    switch (direction) {
        case 'left':
            return { alignItems: 'flex-start' }
        case 'center':
            return { alignItems: 'center' }
        case 'right':
            return { alignItems: 'flex-end' }
        default:
            return { alignItems: 'center' }
    }
}
