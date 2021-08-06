const listings = [
    {
        id:1,
        title:"cupboard",
        price : 100,
        image: require("../assets/c1.jpeg"),
        image2 : require("../assets/ml.jpg"),
        name : "Muwonge Lawrence",
        description : "programmer",
    },

    {
        id:2,
        title:"Bowels",
        price : 1000,
        image: require("../assets/c2.jpeg"),
        image2 : require("../assets/ml.jpg"),
        name : "Muwonge Lawrence",
        description : "programmer",
    },

    {
        id:3,
        title:"bowels",
        price : 100,
        image: require("../assets/red.jpeg"),
        image2 : require("../assets/ml.jpg"),
        name : "Muwonge Lawrence",
        description : "programmer",
    },
    {
        id:4,
        title:"Cupboard",
        price : 100,
        image: require("../assets/c3.jpeg"),
        image2 : require("../assets/ml.jpg"),
        name : "Muwonge Lawrence",
        description : "react developer",
    },
    {
        id:5,
        title:"car",
        price : 100,
        image: require("../assets/car1.jpeg"),
        image2 : require("../assets/ml.jpg"),
        name : "Muwonge Lawrence",
        description : "this is a good backend",
    },

    {
        id:6,
        title:"Furniture",
        price : 100,
        image: require("../assets/f1.jpg"),
        image2 : require("../assets/ml.jpg"),
        name : "Muwonge Lawrence",
        description : "this is a good backend",
    },

    {
        id:7,
        title:"House",
        price : 100,
        image: require("../assets/h1.jpeg"),
        image2 : require("../assets/ml.jpg"),
        name : "Muwonge Lawrence",
        description : "this is a good backend",
    },
    {
        id:8,
        title:"Motorcycle",
        price : 100,
        image: require("../assets/motor1.jpeg"),
        image2 : require("../assets/ml.jpg"),
        name : "Muwonge Lawrence",
        description : "this is a good backend",
    },
    {
        id:9,
        title:"Shoe",
        price : 100,
        image: require("../assets/shoe1.jpeg"),
        image2 : require("../assets/ml.jpg"),
        name : "Muwonge Lawrence",
        description : "this is a good backend",
    },

    {
        id:10,
        title:"car",
        price : 100,
        image: require("../assets/car2.jpeg"),
        image2 : require("../assets/ml.jpg"),
        name : "Muwonge Lawrence",
        description : "this is a good backend",
    },

    {
        id:11,
        title:"Furniture",
        price : 100,
        image: require("../assets/f2.jpg"),
        image2 : require("../assets/ml.jpg"),
        name : "Muwonge Lawrence",
        description : "this is a good backend",
    },

    {
        id:12,
        title:"House",
        price : 100,
        image: require("../assets/h2.jpeg"),
        image2 : require("../assets/ml.jpg"),
        name : "Muwonge Lawrence",
        description : "this is a good backend",
    },
    {
        id:13,
        title:"Motorcycle",
        price : 100,
        image: require("../assets/motor2.jpeg"),
        image2 : require("../assets/ml.jpg"),
        name : "Muwonge Lawrence",
        description : "this is a good backend",
    },
    {
        id:14,
        title:"Shoe",
        price : 100,
        image: require("../assets/shoe2.jpeg"),
        image2 : require("../assets/ml.jpg"),
        name : "Muwonge Lawrence",
        description : "this is a good backend",
    },
    {
        id:15,
        title:"car",
        price : 100,
        image: require("../assets/car3.jpeg"),
        image2 : require("../assets/ml.jpg"),
        name : "Muwonge Lawrence",
        description : "this is a good backend",
    },

    {
        id:16,
        title:"Furniture",
        price : 100,
        image: require("../assets/f3.jpg"),
        image2 : require("../assets/ml.jpg"),
        name : "Muwonge Lawrence",
        description : "this is a good backend",
    },

    {
        id:17,
        title:"House",
        price : 100,
        image: require("../assets/h3.jpeg"),
        image2 : require("../assets/ml.jpg"),
        name : "Muwonge Lawrence",
        description : "this is a good backend",
    },
   
    {
        id:18,
        title:"Shoe",
        price : 100,
        image: require("../assets/shoe3.jpeg"),
        image2 : require("../assets/ml.jpg"),
        name : "Muwonge Lawrence",
        description : "this is a good backend",
    },

    {
        id:19,
        title:"Furniture",
        price : 1000,
        image: require("../assets/s1.jpg"),
        image2 : require("../assets/ml.jpg"),
        name : "Muwonge Lawrence",
        description : "this is a good backend",
    },


];


export const getListings = () => {
    return listings;
};

export const saveListing = (listing) => {
    //console.log(listing);
    const newListing = listings.find(l => l.id === listing.id) || {};
    newListing.title = listing.title;
    newListing.price = listing.price;
    newListing.imageUri = listing.images[0];
    newListing.image2 = listing.image2;
    newListing.name = listing.name;
    newListing.description = listing.description;
     
    if(!newListing.id){
        newListing.id = listings.length + 1;
        listings.push(newListing);
    }
    //console.log(listings);

    return newListing;
}