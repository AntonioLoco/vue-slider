/*
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Bonus:
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
*/

const { createApp } = Vue;

createApp({
    data(){
        return{
            slides: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                }
            ],
            currentSlide: 0,
            autoplay: null,
            classHover: ""
        }
    },
    methods: {
        nextCard: function(){
            if(this.currentSlide < this.slides.length - 1){
                this.currentSlide++;
            } else{
                this.currentSlide = 0;
            }
        },
        prevCard: function(){
            if(this.currentSlide > 0){
                this.currentSlide--;
            } else {
                this.currentSlide = this.slides.length - 1;
            }
        },
        stopAutoplay: function() {
            this.classHover = "hover";
            clearInterval(this.autoplay);
            this.autoplay = null;
        },
        startAutoplay: function(){
            this.classHover = "";
            this.autoplay = setInterval(this.nextCard, 3000);
        }
    },
    created: function(){
        this.startAutoplay();
    }
}).mount("#app");

