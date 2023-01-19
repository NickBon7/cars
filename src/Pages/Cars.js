import { useState } from "react";
import CarCard from "../components/CarCard";
import SearchBar from "../components/SearchBar";

import "./Cars.css";

function Cars() {
  const cars = [
    {
      carImg: "/images/ferrari.avif",
      make: "Ferrari",
      miles: "10.100",
      price: "250.000",
      location: "Edinburgh",
      year: "2020",
      category: "super cars",
    },
    {
      carImg: "/images/lambo.avif",
      make: "Lamborghini",
      miles: "12.900",
      price: "165.000",
      location: "London",
      year: "2019",
      category: "super cars",
    },
    {
      carImg: "/images/range.avif",
      make: "Range Rover",
      miles: "32.700",
      price: "55.000",
      location: "Glasgow",
      year: "2019",
      category: "suv",
    },
    {
      carImg: "/images/bmw1.avif",
      make: "BMW",
      miles: "25.350",
      price: "37.500",
      location: "Liverpool",
      year: "2020",
      category: "daily cars",
    },
    {
      carImg: "/images/g63.jpg",
      make: "Mercedes",
      miles: "20.700",
      price: "130.000",
      location: "Machester",
      year: "2021",
      category: "suv",
    },
    {
      carImg: "/images/p208.jpg",
      make: "Peugeot",
      miles: "18.800",
      price: "19.000",
      location: "Glasgow",
      year: "2021",
      category: "daily cars",
    },
    {
      carImg: "/images/i20.jpg",
      make: "Hyundai",
      miles: "12.900",
      price: "17.500",
      location: "Liverpool",
      year: "2021",
      category: "daily cars",
    },
  ];
  const categories = ["super cars", "suv", "daily cars"];
  const [search, setSearch] = useState("");

  const [carsList, setCarsList] = useState(cars);

  const searchHandler = (event) => {
    const value = event.target.value;
    const temp = [];
    cars.map((car) => {
      const make = car.make;
      if (make.toLowerCase().includes(value)) {
        temp.push(car);
      }
    });
    setCarsList(temp);
    setSearch(event.target.value);
  };

  return (
    <div>
      <SearchBar value={search} searchHandler={searchHandler} />
      {categories.map((category) => {
        return (
          <div className="card-car-style">
            <h1>{category}</h1>
            {carsList.map((car) => {
              if (car.category === category) {
                return (
                  <CarCard
                    carImg={car.carImg}
                    make={car.make}
                    miles={car.miles}
                    price={car.price}
                    location={car.location}
                    year={car.year}
                  />
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Cars;
