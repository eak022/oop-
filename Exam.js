class Hotel {
  rooms = [];
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getRooms() {
    return this.rooms
      .map((room) => {
        return (
          "เลขห้อง " +
          room.roomNumber +
          " สไตล์ " +
          room.style +
          " สถานะ " +
          room.status.name +
          " ราคา " +
          room.roomPrice +
          " บาท"
        );
      })
      .join("\n");
  }
  addNewRooms(room) {
    this.rooms.push(room);
  }
}

class Room {
  constructor(roomNumber, style, status, roomPrice) {
    this.roomNumber = roomNumber;
    this.style = style;
    this.status = status;
    this.roomPrice = roomPrice;
  }

  isRoomAvailable() {
    return this.status === RoomStatus.Available;
  }
}

class Person {
  account = null;
  constructor(name, address, email, phone, accountType) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.accountType = accountType;
  }
  
}

class Receptionist extends Person {
  createBooking() {
    return this.createBooking;
  }
}

class Account {
  isLogin = true;
  setNewPassword = true;
  constructor(userName, password, status) {
    this.userName = userName;
    this.password = password;
    this.status = status;
  }

  login(password) {
    return this.password === password;
  }
  resetPassword(newPassword) {
    this.password = newPassword;
  }
}

class Guest extends Person {
  constructor(name, address, email, phone, accountType, totalBooking) {
    super(name, address, email, phone, accountType);
    this.totalBooking = totalBooking;
  }
  createBooking() {
    return this.createBooking;
  }
}

class RoomBooking {
  guest = [];
  room = null;
  constructor(reservationNumber, startDate, durationDays, status, createdBy) {
    this.reservationNumber = reservationNumber;
    this.startDate = startDate;
    this.durationDays = durationDays;
    this.status = status;
    this.createdBy = createdBy;
  }

  getDetail() {
    return (
      "Reservation Number: " +
      this.reservationNumber +
      "\nStart Date: " +
      this.startDate +
      "\nDuration Days: " +
      this.durationDays +
      "\nStatus: " +
      this.status.name +
      "\nCreated By: " +
      this.createdBy.name
    );
  }
}

class Notification {
  constructor(notificationId, createdOn, content, sender, recipient) {
    this.notificationId = notificationId;
    this.createdOn = createdOn;
    this.content = content;
    this.sender = sender;
    this.recipient = recipient;
  }

  send(content, sender, recipient) {
    this.content = content;
    this.sender = sender;
    this.recipient = recipient;
  }
}

class AccountType {
  static Guest = new AccountType("guest");
  static Receptionist = new AccountType("receptionist");
  constructor(name) {
    this.name = name;
  }
}

class AccountStatus {
  static Active = new AccountStatus("active");
  static Banned = new AccountStatus("banned");
  constructor(name) {
    this.name = name;
  }
}

class RoomStatus {
  static Available = new RoomStatus("Available");
  static Disavailable = new RoomStatus("Disavailable");
  static LateCheckout = new RoomStatus("LateCheckout");
  static EarlyCheckin = new RoomStatus("EarlyCheckin");
  constructor(name) {
    this.name = name;
  }
}

class BookingStatus {
  static Confirmed = new BookingStatus("confirmed");
  static Cancel = new BookingStatus("cancel");
  constructor(name) {
    this.name = name;
  }
}

function printPersonDetails(person) {
  console.log("- ที่อยู่:", person.address);
  console.log("- อีเมล:", person.email);
  console.log("- เบอร์โทร:", person.phone);
}

function printGuestDetails(guest) {
  console.log("Guests:");
  console.log("- " + guest.name + ":");
  printPersonDetails(guest);
  console.log("- จำนวนการจองทั้งหมด:", guest.totalBooking);
}

function printReceptionistDetails(receptionist) {
  console.log("Receptionists:");
  console.log("- " + receptionist.name + ":");
  printPersonDetails(receptionist);
}

// Create instances of guests
const alice = new Guest(
  "Alice",
  "123 Main St",
  "alice@example.com",
  "123456789",
  AccountType.Guest,
  0
);
const bob = new Guest(
  "Bob",
  "456 Elm St",
  "bob@example.com",
  "987654321",
  AccountType.Guest,
  0
);

// Create instances of receptionists
const catherine = new Receptionist(
  "Catherine",
  "789 Oak St",
  "catherine@example.com",
  "456789123",
  AccountType.Receptionist
);
const david = new Receptionist(
  "David",
  "321 Pine St",
  "david@example.com",
  "789123456",
  AccountType.Receptionist
);

// เรียกใช้งานฟังก์ชันเพื่อพิมพ์รายละเอียดของแต่ละบุคคล
printGuestDetails(alice);
printGuestDetails(bob);
printReceptionistDetails(catherine);
printReceptionistDetails(david);
console.log("\n");
// Create hotel
const hotel = new Hotel("Luxury Hotel", "Beachfront");

// Create rooms
const doubleBedSeaViewRoom = new Room(
  101,
  "Double bed Sea view",
  RoomStatus.Available,
  5000
);
const twinBedPoolViewRoom = new Room(
  102,
  "Twin bed pool view",
  RoomStatus.Available,
  4000
);
const twinBedSeaViewRoom = new Room(
  103,
  "Twin bed Sea view",
  RoomStatus.Available,
  4500
);
const doubleBedPoolViewRoom = new Room(
  104,
  "Double bed pool view",
  RoomStatus.Available,
  5500
);

// Add rooms to the hotel
hotel.addNewRooms(doubleBedSeaViewRoom);
hotel.addNewRooms(twinBedPoolViewRoom);
hotel.addNewRooms(twinBedSeaViewRoom);
hotel.addNewRooms(doubleBedPoolViewRoom);

// Print room details
console.log(hotel.name);
console.log(hotel.getRooms());

// Booking for Bob
const bobReservation = new RoomBooking(
  1,
  "2024-03-16",
  3,
  BookingStatus.Confirmed,
  catherine
);
bobReservation.room = doubleBedSeaViewRoom;
bobReservation.guest.push(bob);

// Booking for Alice by Catherine
const aliceReservation = new RoomBooking(
  2,
  "2024-03-19",
  5,
  BookingStatus.Confirmed,
  catherine
);
aliceReservation.room = twinBedSeaViewRoom;
aliceReservation.guest.push(alice);

// Print booking details
console.log("\nBooking Details:");
console.log("Bob's Booking:");
console.log(bobReservation.getDetail());
console.log("Alice's Booking:");
console.log(aliceReservation.getDetail());