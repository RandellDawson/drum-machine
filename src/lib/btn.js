const updateProps = function() {
    const btnIcon = this.btn.children[0];
    if (!this.btn.disabled) {
        if (this.on) {
            btnIcon.classList.add('on');
        }
        else {
            btnIcon.classList.remove('on')
            btnIcon.style.color = this.btnColor;
        }
    }
    else {
        btnIcon.style.color = '#CCCCCC';
        btnIcon.classList.remove('on');
    }
};

const updateBtns = () => {
    player.btn.updateProps();
    recorder.btn.updateProps();
};

const handleClick = function() {
    this.on = !this.on;
    if (this.on) {
        this.btn.blur();
        this.start();
    }
    else {
        this.stop();
    }
};
