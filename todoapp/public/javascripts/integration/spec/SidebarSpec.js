describe("Sidebar", function() {
  beforeAll(function() {
    App.todos  = new Todos([
      {"day":0,"month":0,"year":0,"completed":false,"due_date":"No Due Date","id":1},
      {"day":3,"month":5,"year":2020,"completed":true,"due_date":"5/20","id":2}
    ]);
    App.init();
  });
  it("contains a section for all todos", function() {
    expect($("#sidebar .all")).toBeDefined();
  });
  it("contains a section for completed todos", function() {
    expect($("#sidebar .completed")).toBeDefined();
  });  
  it("there are 2 todos ", function() {
    expect($("#sidebar .all li.group").length).toEqual(2);
  });  
  it("there is 1 completed todo ", function() {
    expect($("#sidebar .completed li.group").length).toEqual(1);
  });    
  afterAll(function() {
    App.index.remove();
  });
});