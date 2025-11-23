let timeLeft = 1500; // 25 menit x 60 detik = 1500 detik
let timerInterval;

const timerDisplay = document.getElementById("timer");

function updateTimer() {
    // Hitung menit dan detik
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    // Tambahkan angka "0" jika detik kurang dari 10 (contoh: 09, 08)
    let formattedTime = 
        (minutes < 10 ? "0" : "") + minutes + ":" + 
        (seconds < 10 ? "0" : "") + seconds;

    timerDisplay.innerHTML = formattedTime;
}

function startTimer() {
    // Cegah timer jalan dobel kalau tombol start ditekan berkali-kali
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            timeLeft--;
            updateTimer();

            // Jika waktu habis
            if (timeLeft === 0) {
                clearInterval(timerInterval);
                alert("Waktu Habis! Istirahat dulu.");
            }
        }, 1000); // Update setiap 1000ms (1 detik)
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    stopTimer();
    timeLeft = 1500; // Kembalikan ke 25 menit
    updateTimer();
}