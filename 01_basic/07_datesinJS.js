 // Dates

 let myDate = new Date()
 // console.log(myDate);
 // console.log(myDate.toString()); //O/p : Tue Oct 22 2024 11:45:37 (its indian Standard Time)
 // console.log(myDate.toDateString()); // O/p : Tue Oct 22 2024
 // console.log(myDate.toLocaleString()); // O/p : 22/10/2024, 11:47:28 am
 // console.log(typeof myDate); // Datatype : object
 
 // let myCreatedDate = new Date(2024, 9, 22)
 // console.log(myCreatedDate.toDateString()); // O/p : Tue Oct 22 2024
 
 // let myCreatedDate = new Date(2024, 9, 22, 5, 3) // O/p : 22/10/2024, 5:03:00 am
 // let myCreatedDate = new Date("2024-10-22") // for specific Date (YY /DD /MM )
 let myCreatedDate = new Date("10-22-2024") // for specific Date (MM /DD /YY )
 // console.log(myCreatedDate.toLocaleString()); 
 
 let myTimeStamp = Date.now()
 
 // console.log(myTimeStamp); // everytime comes a big number bcz it will convert the No. in millisecond
 console.log(myCreatedDate.getTime()); // always check the O/p 
 // console.log(Math.floor(Date.now()/1000)); // converting in second when i am divided to 1000
 
 let newDate = new Date()
 // console.log(newDate); // there are many function to get.. and 
 // console.log(newDate.getMonth() + 1); // cuurent month, i want only current month then i use this
 // console.log(newDate.getDay()); // current Day, i want only Date then i use this
 
 // `${newDate.getDay()} and the time `
 
 newDate.toLocaleString('default', { 
     weekday: "long",
 })
 // tolocatestring is use to more customize a format of Date and Time