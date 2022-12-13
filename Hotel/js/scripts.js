const apiURL = "./hoteldata.json";

fetch (apiURL)
.then ((response) => response.json())
.then ((myList) => {
    console.log(myList);

    for (i = 0; i < myList.length; i++){

   
        let myImageTag = document.createElement("img");
        myImageTag.src = myList[i].photo;
        console.log(myList[i].photo);
    
        let myCaptionTag = document.createElement("figcaption");
        myCaptionTag.textContent = myList[i].name;
        console.log(myList[i].name);
    
        let myFigureTag = document.createElement("figure");
        myFigureTag.appendChild(myImageTag);
        myFigureTag.appendChild(myCaptionTag);
    
        let theIconleftTag = document.createElement("i");
        theIconleftTag.name = "icon ion-md-car";
    
        let theAddress1Tag = document.createElement("p");
        theAddress1Tag.textContent = myList[i].address[0];
        console.log(myList[i].address[0]);
    
        let theAddress2Tag = document.createElement("p");
        theAddress2Tag.textContent = myList[i].address[1];
        console.log(myList[i].address[1]);
    
        let theIconRightTag = document.createElement("i");
        theIconRightTag.name = "icon ion-md-call";
    
        let thePhoneTag = document.createElement("p");
        thePhoneTag.textContent = myList[i].phone;
        console.log(myList[i].phone);
    
        let theSpanLeftTag = document.createElement("span");
        theSpanLeftTag.appendChild(theIconleftTag);
        theSpanLeftTag.appendChild(theAddress1Tag);
        theSpanLeftTag.appendChild(theAddress2Tag);
    
        let theSpanRightTag = document.createElement("span");
        theSpanRightTag.appendChild(theIconRightTag);
        theSpanRightTag.appendChild(thePhoneTag);
    
    
        let myDivTag = document.createElement("div");
        myDivTag.appendChild(theSpanLeftTag);
        myDivTag.appendChild(theSpanRightTag);

        let mySectionTag = document.createElement("section");
        mySectionTag.className = "card";
        mySectionTag.appendChild(myFigureTag);
        mySectionTag.appendChild(myDivTag);
       
        document.getElementById('myCards').appendChild(mySectionTag);
      }
})