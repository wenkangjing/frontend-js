var accessor = require("../routes/accessor");
var Labels = Object.create(accessor);
Labels.name = "labels";
var Comments = Object.create(accessor);
Comments.name = "comments";

var tempId;
var origLength;

describe("Label Accessor", function() {
  it("get array of labels", function() {
    origLength = Labels.get().length;
    expect(Labels.get()).toBeDefined();
  });
  it("new label", function() {
    var item = Labels.add({name: "unittest", color: "pink"});
    tempId = item.id;
    expect(Labels.get().length).toEqual(origLength + 1);
  });
  it("delete label", function() {
    var deleted = Labels.delete(tempId);
    expect(Labels.get().length).toEqual(origLength);
  });
});

describe("Comment Accessor", function() {
  it("get array of comments", function() {
    origLength = Comments.get().length;
    expect(Comments.get()).toBeDefined();
  });
  it("new label", function() {
    var item = Comments.add({name: "unittest", color: "pink"});
    tempId = item.id;
    expect(Comments.get().length).toEqual(origLength + 1);
  });
  it("delete label", function() {
    var deleted = Comments.delete(tempId);
    expect(Comments.get().length).toEqual(origLength);
  });
});
