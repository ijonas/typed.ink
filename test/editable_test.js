var test = require('tape');

test('fibwibblers and xyrscawlers', function (t) {
    t.plan(2);

    var x = someModule();
    t.equal(x.foo(2), 22);

    x.beep(function (err, res) {
        t.equal(res, 'boop');
    });
})