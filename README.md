# Birth.js
 A Module For get Birth Information with Nodejs 🎂 
    
 License : MIT <br/>
 Author : Aref Rasti

## Installation
```
    npm install birth.js
```

# example
```javascript
    const { Birth } = require('birth.js');
    const BirthDay = new Birth('2003-12-8');

    console.log(`Date : ${BirthDay.BirthDate}`);
    console.log(BirthDay.getDays());   
    // Date : 2003-12-08
    // return 6511
```

# document
    ## getDays
    return the number of days from the birth date to now.

    ## getMonths
    return the number of months from the birth date to now.

    ## getYears
    return the number of years from the birth date to now.

    ## getWeeks
    return the number of weeks from the birth date to now.

    ## getAge
    return the age from the birth date to now.
    
    ## getHours 
    return the number of hours from the birth date to now.

    ## getMinutes
    return the number of minutes from the birth date to now.

    ## getSeconds
    return the number of seconds from the birth date to now.


Good Luck 🤗
