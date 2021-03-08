function feast(beast, dish) {

    for (let i=0;i<beast.length;i++) {
        if (beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1] ) {
            return true;
        } else {
          return false;
        }
    }}
feast("great blue heron", "garlic naan");