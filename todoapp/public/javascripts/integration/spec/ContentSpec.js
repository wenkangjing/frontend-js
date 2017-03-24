describe("Contents", function() {
  beforeAll(function() {
    App.todos  = new Todos([
      {"day":0,"month":0,"year":0,"completed":false,"id":1},
      {"day":3,"month":5,"year":2020,"completed":true,"id":2}
    ]);
    App.init();
  });
  it("contains 2 todos", function() {
    expect($("#content").find(".todo").length).toEqual(2);
  });
  it("contains 1 todo with filter completed", function() {
    App.trigger("filter", {completed: true, due_date: undefined});
    expect($("#content").find(".todo").length).toEqual(1);
  });
  it("empty view  with a invilid filter", function() {
    App.trigger("filter", {completed: false, due_date: "12/59"});
    expect($("#content").find(".todo").length).toEqual(0);
  });
  afterAll(function() {
    App.index.remove();
  }); 
});
