'use strict';

{
    // トップページ
    function callback(entries, obs) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('appear');
            obs.unobserve(entry.target);
        });
    }
    const options = {
        threshold:0.8,
    };

    const observer = new IntersectionObserver(callback, options);

    const targets = document.querySelectorAll('.main-item');      

    targets.forEach(target => {
        observer.observe(target);
    });

    // 足跡
    function callbackTwo(entries, obs) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('appear');
            obs.unobserve(entry.target);
        });
    }
    const optionsTwo = {
        threshold:0.8,
    };

    const observerTwo = new IntersectionObserver(callbackTwo, optionsTwo);

    const targetsTwo = document.querySelectorAll('.step');      

    targetsTwo.forEach(target => {
        observerTwo.observe(target);
    });

    
    // モーダルリスト
    const open = document.getElementById("open");
    const close = document.getElementById("close");
    const mask = document.getElementById("mask");
    const modal = document.getElementById("modal");

    open.addEventListener('click', () => {
        modal.classList.remove('hidden');
        mask.classList.remove('hidden');
    });
    close.addEventListener('click', () => {
        modal.classList.add('hidden');
        mask.classList.add('hidden');
    });
}

