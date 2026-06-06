// Dictionary
const i18n = {
    en: {
        title: "MATCH THE TIME",
        m1_btn: "Mode 1: Blind Target",
        m2_btn: "Mode 2: Visible Guess",
        m3_btn: "Mode 3: Team Relay",
        rules_title: "Game Rules",
        rules_text: `
            <p><strong>Mode 1: Blind Target</strong><br>Timer is hidden while running. Try to stop exactly at an agreed target time!</p>
            <p><strong>Mode 2: Visible Guess</strong><br>Timer is visible while running. Stop it randomly and let others guess the exact time it stopped at.</p>
            <p><strong>Mode 3: Team Relay</strong><br>Best played with two devices. Each team sets a target time (e.g. 20s). Players take turns starting and pausing the hidden timer to accumulate time. SPACE starts/pauses. ENTER reveals the final time. BACKSPACE resets.</p>
        `,
        close_btn: "Close",
        rules_btn: "Rules",
        lang_btn: "کوردی",
        start: "Press SPACE to Start",
        start_relay: "Press SPACE to Start Relay",
        stop: "Press SPACE to Stop",
        pause: "Press SPACE to Pause",
        reveal: "Press SPACE to Reveal",
        reset: "Press SPACE to Reset",
        reset_relay: "Press BACKSPACE to Reset",
        next_player: "Next Player: Press SPACE. Or ENTER to Give Up/Reveal",
        timing: "TIMING...",
        paused: "PAUSED"
    },
    ku: {
        title: "کـاتـەکـە بـگـرە",
        m1_btn: "مۆدی ١: کاتی شاراوە",
        m2_btn: "کاتەکە دیارە",
        m3_btn: "مۆدی ٣: شەڕە تیم",
        rules_title: "ڕێنماییەکانی یاری",
        rules_text: `
            <p><strong>مۆدی ١: کاتی شاراوە</strong><br>کاتەکە دیار نییە کە دەڕوات. هەوڵبدە ڕێک لەسەر ئەو کاتە ڕایگریت کە دیاریتان کردووە!</p>
            <p><strong>مۆدی ٢: حەزەرکردن</strong><br>کاتەکە دیارە. کەسێک کاتەکە ڕابگرێت و ئەوانی تر دەبێ بزانن کاتەکە چەندە!</p>
            <p><strong>مۆدی ٣: شەڕە تیم</strong><br>ئەم مۆدە باشترە بە ٢ ئامێر بکرێت لە یەک کاتدا بۆ دوو تیم. دەبێت هەر تیمێک بگەنە ئەو کاتەی کە دیاریان کردووە.<br><br>• <strong>SPACE</strong> بۆ دەستپێکردن و وەستاندن.<br>• <strong>ENTER</strong> بۆ دەرخستنی کاتەکە.<br>• <strong>BACKSPACE</strong> بۆ ڕیستارت کردنەوە.</p>
        `,
        close_btn: "داخستن",
        rules_btn: "ڕێنمایی",
        lang_btn: "EN",
        start: "SPACE دابگرە بۆ دەستپێکردن",
        start_relay: "SPACE دابگرە بۆ شەڕە تیم!",
        stop: "SPACE دابگرە بۆ وەستاندن",
        pause: "SPACE دابگرە بۆ وەستاندن",
        reveal: "SPACE دابگرە بۆ بینینی کاتەکە",
        reset: "SPACE دابگرە بۆ سەرلەنوێ",
        reset_relay: "BACKSPACE دابگرە بۆ سفرکردنەوە",
        next_player: "نۆرەی دواتر: SPACE، یان ENTER ئەگەر تەسلیم دەبن!",
        timing: "دەڕوات...",
        paused: "وەستا"
    }
};

// State Machine Variables
let currentLang = 'en'; 
let currentMode = 1; // 1: Blind, 2: Visible, 3: Relay
let currentState = 'IDLE'; // IDLE, RUNNING, STOPPED_HIDDEN, REVEALED
let startTime = 0;
let accumulatedTime = 0; 
let animationFrameId = null;

// Audio Context
let audioCtx = null;

// DOM Elements
const langToggleBtn = document.getElementById('lang-toggle');
const rulesToggleBtn = document.getElementById('rules-toggle');
const rulesModal = document.getElementById('rules-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const modalRulesText = document.getElementById('modal-rules-text');

const mainTitle = document.getElementById('main-title');
const modeBlindBtn = document.getElementById('mode-blind');
const modeVisibleBtn = document.getElementById('mode-visible');
const modeRelayBtn = document.getElementById('mode-relay');
const timerBox = document.getElementById('timer-box');
const displayText = document.getElementById('display-text');
const instructionText = document.getElementById('instruction-text');

// Initialize Language
function applyLanguage() {
    const t = i18n[currentLang];
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ku' ? 'rtl' : 'ltr';
    
    mainTitle.textContent = t.title;
    modeBlindBtn.textContent = t.m1_btn;
    modeVisibleBtn.textContent = t.m2_btn;
    modeRelayBtn.textContent = t.m3_btn;
    rulesToggleBtn.textContent = t.rules_btn;
    langToggleBtn.textContent = t.lang_btn;
    
    modalTitle.textContent = t.rules_title;
    modalRulesText.innerHTML = t.rules_text;
    closeModalBtn.textContent = t.close_btn;

    // Update Instruction Text based on state
    if (currentState === 'IDLE') {
        instructionText.textContent = currentMode === 3 ? t.start_relay : t.start;
    } else if (currentState === 'RUNNING') {
        instructionText.textContent = currentMode === 3 ? t.pause : t.stop;
        if (currentMode === 1 || currentMode === 3) displayText.textContent = t.timing;
    } else if (currentState === 'STOPPED_HIDDEN') {
        if (currentMode === 1) instructionText.textContent = t.reveal;
        else if (currentMode === 3) instructionText.textContent = t.next_player;
        displayText.textContent = t.paused;
    } else if (currentState === 'REVEALED') {
        instructionText.textContent = currentMode === 3 ? t.reset_relay : t.reset;
    }
}

langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ku' : 'en';
    applyLanguage();
});

// Modal Logic
rulesToggleBtn.addEventListener('click', () => {
    rulesModal.classList.remove('hidden');
});

closeModalBtn.addEventListener('click', () => {
    rulesModal.classList.add('hidden');
});

rulesModal.addEventListener('click', (e) => {
    if (e.target === rulesModal) {
        rulesModal.classList.add('hidden');
    }
});

// Audio setup
function initAudio() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
}

function playBeep(type) {
    if (!audioCtx) return;
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    if (type === 'start') {
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(880, audioCtx.currentTime); 
        gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
        oscillator.start(); oscillator.stop(audioCtx.currentTime + 0.2);
    } else if (type === 'stop') {
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); 
        gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        oscillator.start(); oscillator.stop(audioCtx.currentTime + 0.3);
    } else if (type === 'reveal') {
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(1046.50, audioCtx.currentTime); 
        gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
        oscillator.start(); oscillator.stop(audioCtx.currentTime + 0.5);
    }
}

// Mode Selection
function switchMode(mode, btn) {
    if (currentState !== 'IDLE') return;
    currentMode = mode;
    modeBlindBtn.classList.remove('active');
    modeVisibleBtn.classList.remove('active');
    modeRelayBtn.classList.remove('active');
    btn.classList.add('active');
    applyLanguage(); 
    resetTimer();
}

modeBlindBtn.addEventListener('click', () => switchMode(1, modeBlindBtn));
modeVisibleBtn.addEventListener('click', () => switchMode(2, modeVisibleBtn));
modeRelayBtn.addEventListener('click', () => switchMode(3, modeRelayBtn));

// Format time utility
function formatTime(ms) {
    const totalSeconds = ms / 1000;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    const hundredths = Math.floor((ms % 1000) / 10);
    
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${hundredths.toString().padStart(2, '0')}`;
}

// Timer Loop for Visible Mode
function updateTimer() {
    if (currentState === 'RUNNING') {
        const now = performance.now();
        const elapsed = accumulatedTime + (now - startTime);
        if (currentMode === 2) {
            displayText.textContent = formatTime(elapsed);
        }
        animationFrameId = requestAnimationFrame(updateTimer);
    }
}

function resetTimer() {
    currentState = 'IDLE';
    accumulatedTime = 0;
    displayText.textContent = "00:00:00";
    timerBox.className = "timer-container";
    instructionText.classList.add('blink');
    applyLanguage(); 
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
}

// Main logic handler
document.addEventListener('keydown', (e) => {
    // Ignore space/enter if modal is open to prevent accidental triggers
    if (!rulesModal.classList.contains('hidden')) return;

    if (e.code === 'Backspace') {
        e.preventDefault();
        resetTimer();
        return;
    }

    const t = i18n[currentLang];

    if (e.code === 'Enter' && currentMode === 3) {
        e.preventDefault();
        initAudio();
        if (currentState === 'RUNNING' || currentState === 'STOPPED_HIDDEN') {
            if (currentState === 'RUNNING') {
                accumulatedTime += (performance.now() - startTime);
                if (animationFrameId) cancelAnimationFrame(animationFrameId);
            }
            currentState = 'REVEALED';
            playBeep('reveal');
            timerBox.className = "timer-container revealed";
            displayText.textContent = formatTime(accumulatedTime);
            instructionText.textContent = t.reset_relay;
            instructionText.classList.add('blink');
        }
        return;
    }

    if (e.code === 'Space') {
        e.preventDefault(); 
        initAudio(); 
        
        if (currentState === 'IDLE') {
            currentState = 'RUNNING';
            startTime = performance.now();
            playBeep('start');
            
            timerBox.className = "timer-container running";
            instructionText.classList.remove('blink');
            instructionText.textContent = currentMode === 3 ? t.pause : t.stop;
            
            if (currentMode === 1 || currentMode === 3) {
                displayText.textContent = t.timing;
            }
            
            updateTimer();
            
        } else if (currentState === 'RUNNING') {
            const now = performance.now();
            accumulatedTime += (now - startTime);
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            playBeep('stop');
            
            timerBox.className = "timer-container stopped";
            
            if (currentMode === 1) {
                currentState = 'STOPPED_HIDDEN';
                displayText.textContent = t.paused;
                instructionText.textContent = t.reveal;
                instructionText.classList.add('blink');
            } else if (currentMode === 3) {
                currentState = 'STOPPED_HIDDEN';
                displayText.textContent = t.paused;
                instructionText.textContent = t.next_player;
                instructionText.classList.add('blink');
            } else {
                currentState = 'REVEALED';
                displayText.textContent = formatTime(accumulatedTime);
                instructionText.textContent = t.reset;
                instructionText.classList.add('blink');
            }
            
        } else if (currentState === 'STOPPED_HIDDEN') {
            if (currentMode === 1) {
                currentState = 'REVEALED';
                playBeep('reveal');
                timerBox.className = "timer-container revealed";
                displayText.textContent = formatTime(accumulatedTime);
                instructionText.textContent = t.reset;
            } else if (currentMode === 3) {
                currentState = 'RUNNING';
                startTime = performance.now();
                playBeep('start');
                
                timerBox.className = "timer-container running";
                instructionText.classList.remove('blink');
                instructionText.textContent = t.pause;
                displayText.textContent = t.timing;
                updateTimer();
            }
        } else if (currentState === 'REVEALED') {
            if (currentMode !== 3) {
                resetTimer();
            }
        }
    }
});

// Init on load
applyLanguage();
