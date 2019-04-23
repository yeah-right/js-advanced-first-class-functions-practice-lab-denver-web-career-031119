// Code your solution in this file!
const logDriverNames = (function(driverObject) {
    driverObject.forEach(function(driver) {
        console.log(driver.name);  
    });
});
const logDriversByHometown = (function(driversObject, hometown) {
    driversObject.forEach(function (driver) {
        if (driver.hometown === hometown) {
        console.log(driver.name);
        }
    });
});
const driversByRevenue = function(driversObject) {
    return driversObject.slice().sort(function(first, second) {
        return first.revenue - second.revenue;
    });
};
const driversByName = function (driversObject) {
    return driversObject.slice().sort(function (firstDriver, secondDriver) {
      return firstDriver.name.localeCompare(secondDriver.name);
    });
};
const totalRevenue = function(driversObject) {
    return driversObject.reduce(function(totalRev, driver) {
        return driver.revenue + totalRev;
    },0);
};

const averageRevenue = function(driversObject) {
    return totalRevenue(driversObject) / driversObject.length;
}

  

// const totalRevenue = function (drivers) {
//     return drivers.reduce(function (total, currentDriver) {
//       return currentDriver.revenue + total;
//     }, 0);
//   };
  
//   const averageRevenue = function (drivers) {
//     return totalRevenue(drivers) / drivers.length;
//   };