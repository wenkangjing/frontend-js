var Accessor = require("../routes/accessor");

describe("Data Accessor Spec", function() {
  it("returns a list of List", function() {
    var lists = Accessor.getLists();
    expect(lists).toBeDefined();
    expect(lists.length).toBeGreaterThan(0);
  });
  it("returns a list of Labels", function() {
    var lists = Accessor.getLabels();
    expect(lists).toBeDefined();
    expect(lists.length).toBeGreaterThan(0);
  });  
  it("returns a list of Labels", function() {
    var lists = Accessor.getColors();
    expect(lists).toBeDefined();
    expect(lists.length).toBeGreaterThan(0);
  });    
});


