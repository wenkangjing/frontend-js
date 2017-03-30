var Accessor = require("../routes/accessor");

describe("Retrieve Data", function() {
  it("returns a list of List", function() {
    var lists = Accessor.getLists();
    expect(lists).toBeDefined();
    expect(lists.length).toBeGreaterThan(0);
  });
});


