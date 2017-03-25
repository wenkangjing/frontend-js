var Todos = require("../routes/_menus");
var _ = require("underscore");

describe("menu.json", function() {
  it("get an array of todos", function() {
    expect(Todos.get()).not.toBe(null);
    last_length = Todos.get().length;
    expect(last_length).not.toBeLessThan(0);
  });
});


