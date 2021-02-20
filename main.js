const app = {
    data() {
        return {
            gallerys:[{img:"images/Gallery1.jpg",address:"Kyoto,Japan",favorite:false,show:true},
                     {img:"images/Gallery2.jpg",address:"Tokyo,Japan",favorite:false,show:true},
                     {img:"images/Gallery3.jpg",address:"Wonderland,Kiki",favorite:false,show:true},
                     {img:"images/Gallery4.jpg",address:"Flying pig,Italy",favorite:false,show:true}],
            search:false,
            inputSearch:'',
            imgShow:0,
            focusImg:{show:false,index:0},
        }
    },
    methods: {
        favoriteImg(index){
            this.gallerys[index].favorite = !this.gallerys[index].favorite
        },
        changfocusImg(index){
            if(!this.focusImg.show){
                this.focusImg.show = true
            }
            this.focusImg.index = index
        },
        changSearch(){
            this.search = !this.search;
            this.inputSearch='';
        },
        next(i){
            this.focusImg.index += i;
            if(this.focusImg.index==-1){
                this.focusImg.index = this.gallerys.length-1;
            }
            else if(this.focusImg.index== this.gallerys.length){
                this.focusImg.index = 0;
            }
            if(!this.gallerys[this.focusImg.index].show){
                this.next(i)
            }
        },
        quit(){
            this.focusImg.show = false;
        }
    },
    computed:{
        countGallerys(){
            return this.gallerys.length
        },
        countfavorite(){
            return this.gallerys.filter(g => g.favorite).length
        },
        showGallerys(){
            let count = 0;
            for (let index = 0; index < this.gallerys.length; index++) {
                this.gallerys[index].show = this.gallerys[index].address.toUpperCase().search(this.inputSearch.toUpperCase()) == -1 ? false:true
                if(this.gallerys[index].show){
                    count++
                }
            }
            this.imgShow = count;     
        },
    },
}

var mountedApp = Vue.createApp(app).mount('#app')