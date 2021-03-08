function areYouPlayingBanjo(name) {
    // Implement me

    for (let i = 0;i <= name.length; i++) {
        if (name[i].charAt(0) === 'R' || name[i].charAt(0) === 'r') {
            return `${name} plays banjo`
        } else {
            return `${name} does not play banjo`
        }}}