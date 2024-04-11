function little_boxes(s) {
    let chars = s.split('');
    chars.sort();
    return chars.join('');
}

module.exports = {
    little_boxes
}
