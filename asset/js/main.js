const all = document.getElementsByClassName("btn")[0]
all.addEventListener("click",function(){
    const image = document.querySelectorAll("#image img")
    image[0].src = "asset/images/bag1.jpg";
    image[1].src = "asset/images/Shoe1.jpg";
    image[2].src = "asset/images/bike1.jpeg";
    image[3].src = "asset/images/watch1.png";
    image[4].src = "asset/images/headphon1.jpeg";
    image[5].src = "asset/images/bag2.jpg";
    image[6].src = "asset/images/Shoe2.jpg";
    image[7].src = "asset/images/bike2.jpeg";
    image[8].src = "asset/images/watch2.jpeg";
    image[9].src = "asset/images/headphon2.jpeg";
    image[10].src = "asset/images/bag3.jpg";
    image[11].src = "asset/images/Shoe3.jpg";
    image[12].src = "asset/images/bike3.jpeg";
    image[13].src = "asset/images/watch3.jpeg";
    image[14].src = "asset/images/headphon3.jpeg";
    image[15].src = "asset/images/bag4.jpg";
    image[16].src = "asset/images/Shoe4.jpg";
    image[17].src = "asset/images/bike4.webp";
    image[18].src = "asset/images/watch4.jpeg";
    image[19].src = "asset/images/headphon4.jpeg";

    for( i = 0; i < image.length; i++){
        image[i].style.display = "block"
    }
})

const bag = document.getElementsByClassName("btn")[1];
bag.addEventListener("click",function(e){
    e.preventDefault();
    const image = document.querySelectorAll("#image img");
    image[0].src = "asset/images/bag1.jpg";
    image[1].src = "asset/images/bag2.jpg";
    image[2].src = "asset/images/bag3.jpg";
    image[3].src = "asset/images/bag4.jpg";
    
    for(i = 4; i < image.length; i++){
        image[i].style.display = "none";
    }
});

const shoe = document.getElementsByClassName("btn")[2];
shoe.addEventListener("click", function(){
    const image = document.querySelectorAll("#image img")
    image[0].src="asset/images/shoe1.jpg";
    image[1].src="asset/images/shoe2.jpg";
    image[2].src="asset/images/shoe3.jpg";
    image[3].src="asset/images/shoe4.jpg";


    for( i = 4; i < image.length ; i++){
        image[i].style.display="none"
    };
});

const bike = document.getElementsByClassName("btn")[3];
bike.addEventListener("click", function(){
    const image = document.querySelectorAll("#image img");
    image[0].src="asset/images/bike1.jpeg";
    image[1].src="asset/images/bike2.jpeg";
    image[2].src="asset/images/bike3.jpeg";
    image[3].src="asset/images/bike4.webp";


    for( i = 4; i < image.length ; i++){
        image[i].style.display="none"
    };
});

const watch = document.getElementsByClassName("btn")[4];
watch.addEventListener("click", function(){
    const image = document.querySelectorAll("#image img")
    image[0].src="asset/images/watch1.png";
    image[1].src="asset/images/watch2.jpeg";
    image[2].src="asset/images/watch3.jpeg";
    image[3].src="asset/images/watch4.jpeg";


    for( i = 4; i < image.length ; i++){
        image[i].style.display="none"
    };
});

const headphone = document.getElementsByClassName("btn")[5];
headphone.addEventListener("click", function(){
    const image = document.querySelectorAll("#image img")
    image[0].src="asset/images/headphon1.jpeg";
    image[1].src="asset/images/headphon2.jpeg";
    image[2].src="asset/images/headphon3.jpeg";
    image[3].src="asset/images/headphon4.jpeg";


    for( i = 4; i < image.length ; i++){
        image[i].style.display="none"
    };
});