var Menu = require("../routes/_menu");

describe("Menu items", function() {
  it("get an array of menu items", function() {
    var items = Menu.getItems();
    expect(items).toBeDefined();
    expect(items.length).toBeGreaterThan(0);
  });
  it ("check properties", function() {
    var items = Menu.getItems();
    expect(items[0]).toBeDefined();
    expect(items[0].id).toBeDefined();
    expect(items[0].nutrition).toBeDefined();
  });
});


