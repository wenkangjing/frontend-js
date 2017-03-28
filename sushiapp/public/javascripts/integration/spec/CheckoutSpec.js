describe("Checkout view - order details", function() {
  beforeAll(function() {
    App.cart_items.reset([{"id":1,"name":"Sashimi salad","price":12,"image":"sashimi-salad.jpg","category":"Cold starters","description":"Organic greens topped with fresh sashimi, wasabi soy vinaigrette.","nutrition":{"protein":2.9156,"fat":2.4396,"carbohydrate":3.8071,"energy":17.5775,"sugar":0.3738},"quantity":1}]);
    this.view = new CheckoutView({collection: App.cart_items});
  });
  it("contains a valid $el", function() {
    expect(this.view.$el).toBeDefined();
  });
  it("contains 1 item in the table", function() {
    expect(this.view.$el.find("tbody tr").length).toEqual(1);
  });  
  it("contains data-id", function() {
    expect(this.view.$el.find("tbody tr").data("id")).toEqual(1);
  });
  afterAll(function() {
    this.view.remove();
  });
});

