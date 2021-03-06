var request = require("request");
var root = "http://localhost:3000";
var albums;
var id;

function getURL(fregment) {
  fregment = fregment || "";
  fregment = fregment.replace(/^\/?/, "");
  return "http://localhost:3000/" + fregment;
}

describe("index", function() {
  it("returns an array of albums", function(done) {
    request.get(getURL(), function(error, response, body) {
      expect(response.toJSON().statusCode).toEqual(200);
      done();
    });
  });
});
describe("albums", function() {
  it("returns an empty form", function(done) {
    request.get(getURL("albums/new"), function(error, response, body) {
      expect(response.toJSON().statusCode).toEqual(200);
      done();
    });
  });
  it("returns a filled form", function(done) {
    request(getURL("albums/edit/1"), function(error, response, body) {
      expect(response.toJSON().statusCode).toEqual(200);
      done();
    });
  });
  it("creates a new album", function(done) {
    request.post(getURL("albums"), { form: {title: "unittest"}}, function(error, response, body) {
      expect(response.toJSON().statusCode).toEqual(200);
      id = JSON.parse(response.body).id;
      expect(id).toBeDefined();
      done();
    });
  });
  // fixme: cant attach body on delete in requestjs 
  it("deletes the created album", function(done) {
    console.log(id);
    request.delete(getURL("albums"), JSON.stringify({body: {id: id}}), function(error, response, body) {
      expect(response.toJSON().statusCode).toEqual(200);
      done();
    });
  });
});

