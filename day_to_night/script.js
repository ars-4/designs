// Using `onscroll` rather than window.requestAnimationFrame
// let scroll = window.requestAnimationFrame || function(callback){setTimeout(callback, 1000/60)};

function main() {
    for(e of document.querySelectorAll('.div')) {
        viewport(e)
    }
    // scroll(main)
}
// main()

// document.getElementsByTagName('body')[0].addEventListener('scroll', () => {
//     console.log('sc');
// })


function viewport(ele) {
    let rect = ele.getBoundingClientRect();
    mainClass = ele.classList[0];
    let classes = [
        'first',
        'second',
        'last',
        'ultra-last'
    ];
    let animation_duration = rect.height / classes.length;
    if (rect.top <= 0) {
        for (let i = 0; i < classes.length; i++) {
            if (rect.top <= -(animation_duration * i) && rect.top >= -(animation_duration * (i + 1))) {
                ele.classList = [];
                ele.classList.add(mainClass);
                ele.classList.add('div')
                ele.classList.add(classes[i]);
            }
        }
    } else {
        return false;
    }
}