# Restaurant Reservation and Ordering System - Requirements:

1. Create a `Restaurant` class with the following properties and methods:
   - Properties:
     - `name` (string): The name of the restaurant.
     - `capacity` (number): The maximum capacity of the restaurant.
     - `reservations` (array): An array to store the reservations.
     - `menu` (array): An array to store the menu items.
     - `orders` (array): An array to store the orders.
   - Methods:
     - `addReservation(reservation)`: Adds a reservation to the restaurant.
     - `removeReservation(reservationName)`: Removes a reservation from the restaurant based on the reservation name.
     - `checkAvailability()`: Returns the number of available seats in the restaurant.
     - `listReservations()`: Returns an array of reservation names.
     - `isReservationAvailable(reservationName)`: Checks if a reservation with a specific name is available.
     - `isFullyBooked()`: Checks if the restaurant is fully booked.
     - `getGuestCount()`: Returns the total number of guests across all reservations.
     - `sortReservationsAlphabetically()`: Returns an array of reservation names sorted alphabetically.
     - `addOrder(order)`: Adds an order to the restaurant.
     - `removeOrder(tableNumber)`: Removes an order from the restaurant based on the table number.
     - `listOrders()`: Returns an array of all orders.
     - `getTotalRevenue()`: Returns the total revenue generated from orders.
     - `addMenuItem(item)`: Adds a menu item to the restaurant's menu.
     - `removeMenuItem(itemName)`: Removes a menu item from the restaurant's menu based on the item name.
     - `listMenuItems()`: Returns an array of all menu items.

2. Create a `Reservation` class with the following properties:
   - `name` (string): The name of the guest making the reservation.
   - `date` (string): The date of the reservation.
   - `time` (string): The time of the reservation.
   - `guestCount` (number): The number of guests in the reservation.

3. Create a `Guest` class that inherits from the `Reservation` class and adds the following property:
   - `specialRequests` (string): Any special requests made by the guest.

4. Create an `Order` class with the following properties and methods:
   - Properties:
     - `tableNumber` (number): The table number where the order is placed.
     - `items` (array): An array of menu items ordered by the customer.
     - `totalPrice` (number): The total price of the order.
   - Methods:
     - `calculateTotalPrice()`: Calculates and returns the total price of the order based on the menu items.

5. Create an `OnlineOrder` class that inherits from the `Order` class and adds the following property:
   - `deliveryAddress` (string): The delivery address for the online order.

6. Create a `MenuItem` class with the following properties:
   - `name` (string): The name of the menu item.
   - `price` (number): The price of the menu item.

Ensure that the code satisfies these requirements and exhibits the use of the specified ES6 features.

The homework should contain one HTML and one JS file. Put those files into one archive. Name the archive using the following pattern: your-name-js-oop-es6-homework.
