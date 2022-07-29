var PolymerUtils={
    cloneObject: function (original) {
        if (!original) {
            return null;
        }
        if (original instanceof Array) {
            var copy = [];
            for (var i = 0; i < original.length; i++) {
                copy[i] = this.cloneObject(original[i]);
            }
            return copy;
        }
        else {
            var keys = Object.keys(original);
            var copy = {};
            for (var i = 0; i < keys.length; i++) {
                copy[keys[i]] = original[keys[i]];
            }
            return copy;
        }

    }
}