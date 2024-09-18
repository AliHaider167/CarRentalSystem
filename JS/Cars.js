class Cars {

  image;
  name;
  carId;
  rent;
  speedLimit;
  personId;
  status;

  constructor(image, name, carId, rent,  speedLimit, personId) {
    this.image = image;
    this.name = name;
    this.carId = carId;
    this.rent = rent;   
    this.speedLimit = speedLimit;
    this.personId = personId;
    this.status='';
  }

}


export const carArray = [
  new Cars('Photos/Cars/Car-1.png', 'Mercedes-Benz A-Class', '7FQ9B3LKX2', 1200, '120-130 km/h (75-81 mph)', ''),
  new Cars('Photos/Cars/Car-2.png', 'Chevrolet Camaro', 'M1V8H5RZD6', 1499, '140-160 km/h (87-99 mph)', ''),
  new Cars('Photos/Cars/Car-3.png', 'Tesla Model S', 'K4Y3T9PN8W', 2067, '130-150 km/h (81-93 mph)', ''),
  new Cars('Photos/Cars/Car-4.png', 'Chevrolet Onix', 'X7J1M2C4Q8', 1563, ' 120-130 km/h (75-81 mph)', ''),
  new Cars('Photos/Cars/Car-5.png', 'Audi RS7', '9G6V5L2RX1', 1064, '150-180 km/h (93-112 mph)', ''),
  new Cars('Photos/Cars/Car-6.png', 'BMW M3', 'N3Y8Z4K7T2', 454, '150-180 km/h (93-112 mph)', ''),
  new Cars('Photos/Cars/Car-7.png', 'Mercedes-Benz G-Class', 'P5W2X9Q7V3', 2413, '130-150 km/h (81-93 mph)', ''),
  new Cars('Photos/Cars/Car-8.png', 'Toyota Corolla', 'B1M6R8F2Y4', 1233, '120-130 km/h (75-81 mph)', ''),
  new Cars('Photos/Cars/Car-9.png', 'Fiat Argo', 'T7C4V9K1X5', 4321, '120-130 km/h (75-81 mph)', ''),
  new Cars('Photos/Cars/Car-10.png', 'Jeep Grand Cherokee', 'Z8P3L6N4M2', 1332, '120-140 km/h (75-87 mph)', ''),
  new Cars('Photos/Cars/Car-11.png', 'Toyota Corolla Altis', 'R9K7T1Q5X6', 2341, '120-130 km/h (75-81 mph)', '')
];