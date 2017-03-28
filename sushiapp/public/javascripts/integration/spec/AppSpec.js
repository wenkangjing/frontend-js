describe("App", function() {
  it("contains handlebar templates", function() {
    expect(App.templates).toBeDefined();
  });
  it("contains a parent element", function() {
    expect(App.$el).toBeDefined();
  });
  it("contains a router", function() {
    expect(App.router).toBeDefined();
  });
  it("extends Backbone Event", function() {
    expect(App.trigger).toBeDefined();
    expect(App.on).toBeDefined();
    expect(App.off).toBeDefined();
  });
});