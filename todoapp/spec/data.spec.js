var Todos = require("../routes/_todos");
var _ = require("underscore");

var last_id;
var last_length;
var temp_todo = {
  title: "created in unit test"
};

describe("CRUD todos.json", function() {
  it("last_id should not be less than 0", function() {
    last_id = Todos.getLastID();
    expect(last_id).not.toBeLessThan(0);
  });
  it("get an array of todos", function() {
    expect(Todos.get()).not.toBe(null);
    last_length = Todos.get().length;
    expect(last_length).not.toBeLessThan(0);
  });
  it("add an todo", function() {
    Todos.add(temp_todo);
    temp_todo.id = Todos.getLastID();
    expect(temp_todo.id).toEqual(last_id + 1);
  });
  it("edit the todo that just created", function() {
    temp_todo.title = "updated by unit test";
    Todos.update(temp_todo);
    expect(temp_todo.id).toEqual(Todos.getLastID());
    var updated_todo = _(Todos.get()).findWhere({id:temp_todo.id});
    expect(updated_todo.title).toEqual(temp_todo.title);
  });
  it("delete the todo to rollback to original but last_id increamented", function() {
    Todos.delete(temp_todo.id);
    expect(Todos.get().length).toEqual(last_length);
  });
});


