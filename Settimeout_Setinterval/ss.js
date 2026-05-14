const Loader = document.querySelector('.loader');
const CountDown = document.querySelector('.countdown');
const timer = document.getElementById('timer');

if (Loader || CountDown ||timer) {
        setTimeout(() => {
            Loader.style.display = 'none';
            CountDown.style.display = 'flex';

            let timeleft = 5;

            const countdown = setInterval(() => { 
                timer.textContent = timeleft;
                

                if (timeleft === 0) {
                    clearInterval(countdown);
                    CountDown.style.display = 'none';
                }

                timeleft--;
            }, 1000);
        }, 5000);
}