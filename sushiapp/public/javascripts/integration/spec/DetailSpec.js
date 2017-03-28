describe("Detail view - shows detailed info of a single menu item", function() {
  beforeEach(function() {
    this.view = new MenuDetailView({model: App.menu_items.get(1)});
  });
  it("contains a valid $el", function() {
    expect(this.view.$el).toBeDefined();
  });
  it("contains a valid model", function() {
    expect(this.view.model).toBeDefined();
  });  
  it("contains data-id", function() {
    expect(this.view.$el.data("id")).toEqual(1);
  });
  afterEach(function() {
    this.view.remove();
  });
});

