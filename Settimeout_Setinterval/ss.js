const Loader = document.querySelector('.loader');
const CountDown = document.querySelector('.countdown');
const timer = document.getElementById('timer');

if (Loader && CountDown && timer) {
    function startCycle() {
        // Ipakita ang loader
        Loader.style.display = 'flex';
        CountDown.style.display = 'none';

        // Hintay ng 5 seconds habang naka-loader
        setTimeout(() => {
            Loader.style.display = 'none';
            CountDown.style.display = 'flex';

            let timeleft = 5;
            timer.textContent = timeleft;

            const countdown = setInterval(() => {
                timeleft--;
                timer.textContent = timeleft;

                if (timeleft === 0) {
                    clearInterval(countdown);
                    CountDown.style.display = 'none';

                    // Ulitin muli ang buong proseso
                    startCycle();
                }
            }, 1000);
        }, 5000);
    }

    // Simulan ang unang cycle
    startCycle();
}