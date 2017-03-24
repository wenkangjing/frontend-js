describe("Index", function() {
  beforeAll(function() {
    App.todos  = new Todos([]);
    App.init();
  })
  it("contains a sidebar anchor element", function() {
    expect(App.$el.find("#sidebar").length).toBeGreaterThan(0);
  });
  it("contains a content anchor element", function() {
    expect(App.$el.find("#content").length).toBeGreaterThan(0);
  });
  afterAll(function() {
    App.index.remove();
  })
});

