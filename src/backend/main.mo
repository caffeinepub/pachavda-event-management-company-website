import Map "mo:core/Map";
import Set "mo:core/Set";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  type Inquiry = {
    id : Nat;
    timestamp : Time.Time;
    name : Text;
    phone : Text;
    eventType : Text;
    eventDate : Text;
    location : Text;
    message : Text;
  };

  module Inquiry {
    public func compare(inquiry1 : Inquiry, inquiry2 : Inquiry) : Order.Order {
      Nat.compare(inquiry1.id, inquiry2.id);
    };
  };

  var nextInquiryId = 1;
  let inquiries = Map.empty<Nat, Inquiry>();

  let confirmedInquiries = Set.empty<Nat>();
  let deletedInquiries = Set.empty<Nat>();

  public shared ({ caller }) func submitInquiry(
    name : Text,
    phone : Text,
    eventType : Text,
    eventDate : Text,
    location : Text,
    message : Text,
  ) : async {
    id : Nat;
    timestamp : Time.Time;
  } {
    let id = nextInquiryId;
    nextInquiryId += 1;

    let now = Time.now();

    let inquiry : Inquiry = {
      id;
      timestamp = now;
      name;
      phone;
      eventType;
      eventDate;
      location;
      message;
    };

    inquiries.add(id, inquiry);

    {
      id;
      timestamp = now;
    };
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can view all inquiries");
    };
    let nonDeletedInquiries = inquiries.filter(
      func(id, _) {
        not deletedInquiries.contains(id);
      }
    );
    nonDeletedInquiries.values().toArray();
  };

  public shared ({ caller }) func markInquiryAsConfirmed(inquiryId : Nat) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can mark inquiries as confirmed");
    };
    confirmedInquiries.add(inquiryId);
  };

  public shared ({ caller }) func markInquiryAsDeleted(inquiryId : Nat) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can mark inquiries as deleted");
    };
    deletedInquiries.add(inquiryId);
  };

  public query ({ caller }) func getConfirmedInquiries() : async [Inquiry] {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can view confirmed inquiries");
    };
    let confirmed = inquiries.filter(
      func(id, _) {
        confirmedInquiries.contains(id);
      }
    );
    confirmed.values().toArray();
  };

  public query ({ caller }) func getDeletedInquiries() : async [Inquiry] {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can view deleted inquiries");
    };
    let deleted = inquiries.filter(
      func(id, _) {
        deletedInquiries.contains(id);
      }
    );
    deleted.values().toArray();
  };

  public shared ({ caller }) func submitAndContinueOnWhatsApp(
    name : Text,
    phone : Text,
    eventType : Text,
    eventDate : Text,
    location : Text,
    message : Text,
  ) : async {
    id : Nat;
    timestamp : Time.Time;
  } {
    if (not phone.contains(#text "+")) {
      Runtime.trap("Phone number must start with a country code and + sign (e.g., +49)");
    };
    let { id } = await submitInquiry(name, phone, eventType, eventDate, location, message);
    {
      id;
      timestamp = Time.now();
    };
  };
};
