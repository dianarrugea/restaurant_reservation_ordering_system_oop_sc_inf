class Restaurant {
  constructor(name, capacity) {
    this.name = name;
    this.capacity = capacity;
    this.reservations = [];
    this.menu = [];
    this.orders = [];
  }
  addReservation(reservation) {
    this.reservations.push(reservation);
    console.log(`A new reservation has been made.`);
  }

  removeReservation(reservationName) {
    const index = this.reservations.indexOf(reservationName);
    if (index !== -1) {
      const removedReservation = this.reservations.splice(index, 1);
      console.log(
        `Reservation for ${removedReservation} removed successfully.`
      );
    } else {
      console.log(`No reservation found for ${reservationName}.`);
    }
  }

  checkAvailability() {
    // return this.capacity - this.reservations.length;
    console.log(
      `Total available tables:`,
      this.capacity - this.reservations.length
    );
  }

  listReservations() {
    console.log("Current reservations:");
    this.reservations.forEach((reservation, index) => {
      let specialRequests = reservation.specialRequests;
      if (specialRequests != null) {
        console.log(
          ` -Reservation ${index + 1}: ${reservation.name} - Guests ${
            reservation.guestCount
          } - ${reservation.date} - ${reservation.time} - Special Reguests: ${
            reservation.specialRequests
          }`
        );
      } else {
        console.log(
          ` -Reservation ${index + 1}: ${reservation.name} - Guests ${
            reservation.guestCount
          } - ${reservation.date} - ${reservation.time} - No Special Requests.`
        );
      }
    });
  }

  isReservationAvailable(reservationName) {
    let isReservation = false;
    try {
      this.reservations.forEach((reservation) => {
        if (reservation.name === reservationName) {
          isReservation = true;
          throw new Error(
            `There's already a reservation for this name: ${reservationName}`
          );
        } else {
          isReservation = false;
        }
      });
    } catch (error) {
      console.log(error.message);
    }
    if (isReservation != true) {
      console.log(`There's no reservation for this name: ${reservationName}`);
    }
  }

  isFullyBooked() {
    if (this.reservations.length === this.capacity) {
      console.log(`${myRestaurant.name} is fully booked.`);
    } else {
      console.log(`${myRestaurant.name} still has available tables.`);
    }
  }

  getGuestCount() {
    let totalGuests = 0;
    for (const reservation of this.reservations) {
      totalGuests = totalGuests + reservation.guestCount;
    }
    return totalGuests;
  }

  sortReservationsAlphabetically() {
    const sortedReservations = this.reservations.sort((a,b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return nameA.localeCompare(nameB);
    })
    console.log("Sorted Reservations: ", sortedReservations);
   }

  addOrder(order) {
    console.log(`A new order has been placed.`);
    console.log(order);
    this.orders.push(order);
  }

  removeOrder(orderToRemove) {
    this.orders.forEach((order, index) => {
      if (order.tableNumber === orderToRemove) {
        console.log(`Order for table ${order.tableNumber} has been removed `);
        this.orders.splice(index, 1);
      }
    });
  }

  listOrders() {
    console.log("Current Orders:");
    console.log(this.orders);
  }

  getTotalRevenue() {
    let totalRevenue = 0;
    this.orders.forEach((order, index) => {
      totalRevenue = totalRevenue + order.totalPrice;
    });
    console.log("Total revenue is: ", totalRevenue);
  }

  addMenuItem(item) {
    this.menu.push(item);
  }

  removeMenuItem(itemName) {
    this.menu.forEach((item, index) => {
      if (item.name === itemName) {
        console.log(`Item ${item.name} has been removed from the menu`);
        this.menu.splice(index, 1);
      }
    });
  }

  listMenuItems() {
    console.log("Menu Items:");
    this.menu.forEach((item, index) => {
      console.log(` Item ${index + 1}: ${item.name} - Price: ${item.price}`);
    });
  }
}

// Create a `Reservation` class with the following properties: name, date, time, guestCount
class Reservation {
  constructor(name, date, time, guestCount) {
    this.name = name;
    this.date = date;
    this.time = time;
    this.guestCount = guestCount;
  }
}

// Create a `Guest` class that inherits from the `Reservation` class and adds the following property: `specialRequests`
class Guest extends Reservation {
  constructor(name, date, time, guestCount, specialRequests) {
    super(name, date, time, guestCount);
    this.specialRequests = specialRequests;
  }
}

// Create an `Order` class with the following properties and methods: tableNumber, items, totalPrice
class Order {
  constructor(tableNumber, ...items) {
    this.tableNumber = tableNumber;
    this.items = items;
    this.totalPrice = 0;
    this.calculateTotalPrice();
  }

// Calculates and returns the total price of the order based on the menu items
  calculateTotalPrice() {
    this.items.forEach((item, index) => {
      this.totalPrice = this.totalPrice + item.price;
    });
    console.log(
      "Total price of order for table ",
      this.tableNumber,
      " is ",
      this.totalPrice,
      "ron"
    );
  }
}

// Create an `OnlineOrder` class that inherits from the `Order` class and adds the following property: `deliveryAddress`
class OnlineOrder extends Order {
  constructor(tableNumber, deliveryAddress, ...items) {
    super(tableNumber, ...items);
    this.deliveryAddress = deliveryAddress;
  }
}

// Create a `MenuItem` class with the following properties: name, price
class MenuItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Adding the name and the capacity for the restaurant
const myRestaurant = new Restaurant("Slates & Plates", 25);

// Creating a reservation for the restaurant.

const reservation1 = new Reservation("Smith Family", "10.02.2024", "16:00", 4);
const reservation2 = new Reservation("Popescu Family","19.02.2024","14:00", 2);
const reservation3 = new Reservation("Brooks Family", "08.03.2024", "11:00", 3);

// Creating a guest with special requests
const guest1 = new Guest("Andreea", "14.02.2024", "16:00", 7, "Vegan");

// Adding the reservations to the restaurant.
myRestaurant.addReservation(reservation1);
myRestaurant.addReservation(reservation2);
myRestaurant.addReservation(reservation3);
myRestaurant.addReservation(guest1);

// Removes a reservation from the restaurant based on the reservation name
myRestaurant.removeReservation("Popescu Family");

// Returns the number of available seats in the restaurant
myRestaurant.checkAvailability();

// Returns an array of reservation names.
myRestaurant.listReservations();

// Checks if a reservation with a specific name is available
myRestaurant.isReservationAvailable("Sima Family");
myRestaurant.isReservationAvailable("Brooks Family");

// Checks if the restaurant is fully booked
myRestaurant.isFullyBooked();

// Create menu items
const menuItem1 = new MenuItem("Burger", 10);
const menuItem2 = new MenuItem("Fried Grill", 15);
const menuItem3 = new MenuItem("Chicken Soup", 8);
const menuItem4 = new MenuItem("Souvlaki", 9);
const menuItem5 = new MenuItem("Gyros", 11);
const menuItem6 = new MenuItem("French Fries", 16);
const menuItem7 = new MenuItem("Chicken Wings", 12);

// Add items to the menu
myRestaurant.addMenuItem(menuItem1);
myRestaurant.addMenuItem(menuItem2);
myRestaurant.addMenuItem(menuItem3);
myRestaurant.addMenuItem(menuItem4);
myRestaurant.addMenuItem(menuItem5);
myRestaurant.addMenuItem(menuItem6);
myRestaurant.addMenuItem(menuItem7);

myRestaurant.removeMenuItem("Fried Grill");

// List all menu items
myRestaurant.listMenuItems();

// Returns the total number of guests across all reservations
console.log(`Total number of guests across all reservations: ${myRestaurant.getGuestCount()}`);

// Returns an array of reservation names sorted alphabetically.
myRestaurant.sortReservationsAlphabetically();

// Creates an order for the restaurant
const order1 = new Order(4, menuItem1, menuItem4);
const order2 = new Order(2, menuItem3);
const order3 = new Order(2, menuItem1, menuItem6, menuItem2);
const order4 = new Order(3, menuItem4, menuItem7);

// Adds an order to the restaurant
myRestaurant.addOrder(order1);
myRestaurant.addOrder(order2);
myRestaurant.addOrder(order3);
myRestaurant.addOrder(order4);

// Get total revenue
myRestaurant.getTotalRevenue();

// Removes an order from the restaurant based on the table number
myRestaurant.listOrders();
myRestaurant.removeOrder(4);
myRestaurant.removeOrder(3);

// Returns an array of all orders
myRestaurant.listOrders();

myRestaurant.getTotalRevenue();
