import Runtime "mo:core/Runtime";
import Nat "mo:core/Nat";
import Text "mo:core/Text";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Principal "mo:core/Principal";

actor {
  type EmailMessage = {
    name : Text;
    email : Text;
    message : Text;
  };

  let inquiries = Map.empty<Principal, EmailMessage>();

  type Product = {
    id : Text;
    title : Text;
    price : Float;
    category : Text;
    rating : ?Float;
    description : Text;
    imageUrl : Text;
  };

  module Product {
    public func compare(product1 : Product, product2 : Product) : Order.Order {
      // Compare by title first, then by price
      switch (Text.compare(product1.title, product2.title)) {
        case (#equal) { return orderByPrice(product1, product2) };
        case (order) { return order };
      };
    };

    func orderByPrice(product1 : Product, product2 : Product) : Order.Order {
      if (product1.price < product2.price) { return #less };
      if (product1.price > product2.price) { return #greater };
      #equal;
    };
  };

  let products = Map.empty<Text, Product>();

  public shared ({ caller }) func submitInquiry(name : Text, email : Text, message : Text) : async () {
    let inquiry : EmailMessage = {
      name;
      email;
      message;
    };
    inquiries.add(caller, inquiry);
  };

  public query ({ caller }) func getInquiry() : async EmailMessage {
    switch (inquiries.get(caller)) {
      case (null) { Runtime.trap("Inquiry does not exist") };
      case (?inquiry) { inquiry };
    };
  };

  public shared ({ caller }) func addProduct(
    id : Text,
    title : Text,
    price : Float,
    category : Text,
    rating : ?Float,
    description : Text,
    imageUrl : Text,
  ) : async () {
    let product : Product = {
      id;
      title;
      price;
      category;
      rating;
      description;
      imageUrl;
    };
    products.add(id, product);
  };

  public query ({ caller }) func getProducts() : async [Product] {
    products.values().toArray().sort(); // Uses Product.compare
  };

  // Initialize with 100 demo products (seeded data)
  public shared ({ caller }) func initializeDemoProducts() : async () {
    for (i in Nat.range(1, 101)) {
      let productId = "product" # i.toText();
      let product : Product = {
        id = productId;
        title = "Demo Product " # i.toText();
        price = 19.99;
        category = "Demo Category";
        rating = ?4.5;
        description = "This is a demo product.";
        imageUrl = "images/" # productId # ".jpg";
      };
      products.add(productId, product);
    };
  };
};
