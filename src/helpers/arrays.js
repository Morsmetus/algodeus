export const recursiveTreeToArray = (tree, array) => {
    const output = array ? array : [];
    if (!tree || tree.length < 1) {
        return output;
    }

    output.push(tree.value);
    if (tree.next) {
        return recursiveTreeToArray(tree.next, output);
    }

    return output;
};
