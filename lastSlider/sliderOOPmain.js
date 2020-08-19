let sliderFactory = {
    createSlider: function () {
        let newSlider = {
            bLeftClick: null,
            bRightClick: null, 
            imgMain: null, 
        
            arrayImg: [],
            currentImg: 0,
        
            sliderStart: function(elId) {
        
                let that = this;    
        
                let el = document.querySelector('#' + elId)
        
                this.bLeftClick = el.querySelector('.btnLeft')
                this.bRightClick = el.querySelector('.btnRight')
                this.imgMain = el.querySelector('.slider-img')
        
                this.bLeftClick.addEventListener('click', function(e) {
                    that.bLeftOn()
                });
                this.bRightClick.addEventListener('click', function(e) {
                    that.bRightOn()
                });
        
                this.arrayImg.push('https://i.ytimg.com/vi/ExfkATFHFik/maxresdefault.jpg');
                this.arrayImg.push('https://i1.wp.com/itc.ua/wp-content/uploads/2019/12/6_underground_i00.jpg');
                this.arrayImg.push('https://upload.wikimedia.org/wikipedia/ru/thumb/c/c3/Doom_poster.jpg/250px-Doom_poster.jpg');
                this.arrayImg.push('https://thumbs.dfs.ivi.ru/storage6/contents/c/8/d8e22515b24dd46b1a920f6ac1ded6.jpg');
                this.imgMain.src = this.arrayImg[this.currentImg];
                this.bLeftClick.disabled = true;
            },
            bLeftOn: function(e) {
                this.currentImg--;
                this.imgMain.src = this.arrayImg[this.currentImg];
                this.bRightClick.disabled = false;
                if (this.currentImg === 0) {
                    this.bLeftClick.disabled = true;
                };
            },
            bRightOn: function(e) {
                this.currentImg++;
                this.imgMain.src = this.arrayImg[this.currentImg];
                this.bLeftClick.disabled = false;
                if (this.currentImg === (this.arrayImg.length - 1)) {
                    this.bRightClick.disabled = true;
                };
            }
        }
        return newSlider;
    }
};


