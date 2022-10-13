var new_images =document.getElementsByClassName('news_image');
var news_images_dir= "../img/home/products/";
var news_images_file_name= "-min.jpg"

window.onload=() => {
    for (var i=0; i<new_images.length; i++) {
        new_images[i].src =news_images_dir+(i+1)+news_images_file_name;    }
};