
const developer={
    firstName:"Shivani",
    age:23,
    isMarried:true
    
    }
    const newDeveloper=Object.assign({},developer);
    newDeveloper.firstName="Jenny";
    console.log(newDeveloper);
    console.log(developer);

    console.log(`Object Merge`);
    const user={
        name:"Bill",
        designation:"CEO"
    }

    const address={
        city:"LA",
        country:"USA",
        pin:112233
    }

    const mergeObject=Object.assign({},user,address);
    console.log(user);
    console.log(address);
    console.log(mergeObject);

    Object.assign(user,address);
    console.log(user);

