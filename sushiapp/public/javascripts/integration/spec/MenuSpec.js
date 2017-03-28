describe("Menu view - shows menu items in grid", function() {
  beforeAll(function() {
    this.view = new MenuView({collection: App.menu_items});
  });
  it("contains a valid $el", function() {
    expect(this.view.$el).toBeDefined();
  });
  it("contains 2 menu items", function() {
    expect(this.view.$el.find(".menu-item").length).toEqual(2);
  });
  it("each menu item contains a data-id", function() {
    this.view.$el.find(".menu-item").each(function(index, item) {
      expect($(item).data("id")).toBeDefined();
      expect($(item).data("id")).toBeGreaterThan(0);
    });
  });
  afterAll(function() {
    this.view.remove();
  });
});

