function test(argument) {
    this.a = 1;
}
test.prototype.method_name = function (first_argument) {
    console.log(this.a);
}