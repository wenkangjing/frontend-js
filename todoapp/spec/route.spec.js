var request = require("request");
var root = "http://localhost:3000";


xdescribe("index", function() {
  it("returns an array of albums", function(done) {
    request.get(getURL(), function(error, response, body) {
      expect(response.toJSON().statusCode).toEqual(200);
      done();
    });
  });
});