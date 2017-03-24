var request = require("request");
var root = "http://localhost:3000";

describe("index", function() {
  it("returns an array of albums", function(done) {
    request.get(root, function(error, response, body) {
      expect(response.toJSON().statusCode).toEqual(200);
      done();
    });
  });
  it("save an array of albums", function(done) {
    var data = {
      body: {
        todos: JSON.stringify([ {title: "testcase 1"},  {title: "testcase 2"} ])
      }
    };
    request.post(root + "/todos",  JSON.stringify(data), function(error, response, body) {
      expect(response).toEqual(200);
      done();
    });
  });  
});