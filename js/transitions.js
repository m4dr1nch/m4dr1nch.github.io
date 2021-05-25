window.onload = () => {
    const transition_main = document.querySelector('.transitionMain');
    const transition_nav = document.querySelector('.transitionNav');
    const anchors = document.querySelectorAll('a');

    setTimeout(() => {
        transition_main.classList.remove('is-activeMain');
    }, 500);

    setTimeout(() => {
        transition_nav.classList.remove('is-activeNav');
    }, 100);

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target.href;

            transition_main.classList.add('is-activeMain');
            setTimeout(() => {
                transition_nav.classList.add('is-activeNav');
            }, 400);

            setTimeout(() => {
                window.location.href = target;
            }, 500);
        });
    }
}