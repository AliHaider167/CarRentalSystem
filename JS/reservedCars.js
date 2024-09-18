export let reserverCars = [];

//----------- Function To Get data from Local Storage --------------

export function getReserverdCar()
{
  const storeData = localStorage.getItem('reservedCars');
  if(storeData)
  {
    reserverCars = JSON.parse(storeData);
  }
  else
  {
    reserverCars = [];
  }
}