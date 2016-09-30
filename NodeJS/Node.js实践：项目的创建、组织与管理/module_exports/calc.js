module.exports = {
    sum: function () {
        var result = 0;
        for (var i in arguments) {
            if (!isNaN(arguments[i])) {
                result += parseFloat(arguments[i]);
            }
        }
        return result;
    },
};