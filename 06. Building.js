function building(input) {
    let floor = Number(input.shift());
    let room = Number(input.shift());

    for (let floorCount = floor; floorCount > 0; floorCount--) {
        let result = "";
        for (let roomCount = 0; roomCount < room; roomCount++) {
            if (floor === floorCount) {
                result += `L${floorCount}${roomCount} `;
            } else if (floorCount % 2 === 0) {
                result += `O${floorCount}${roomCount} `;
            } else {
                result += `A${floorCount}${roomCount} `;
            }
        }
        console.log(result)
    }
}

building(['6','4']);