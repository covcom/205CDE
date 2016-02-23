var notes = (function() {

    var list = [];

    return {
        // add: function(note) {},
        // add: function(note) {
        //     var item = {
        //         timestamp: Date.now(),
        //         text: note
        //     };
        //     list.push(item);
        //     return true;
        // },
        add: function(note) {
            if (note) {
                var item = {
                    timestamp: Date.now(),
                    text: note
                };
                list.push(item);
                return true;
            }
            return false;
        },
        remove: function(index) {},
        count: function() {
            return list.length;
        },
        list: function() {},
        find: function(str) {},
        clear: function() {
                list.splice(0, list.length);
            }
            // clear: function() { }
    };
}());
