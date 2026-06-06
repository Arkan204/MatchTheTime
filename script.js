// Dictionary
const i18n = {
    en: {
        title: "MATCH THE TIME",
        m1_btn: "Mode 1: Blind Target",
        m2_btn: "Mode 2: Visible Guess",
        m3_btn: "Mode 3: Team Relay",
        m4_btn: "Mode 4: Duel",
        m5_btn: "Mode 5: Dual Blind",
        rules_title: "Game Rules",
        rules_text: `
            <p><strong>Mode 1: Blind Target</strong><br>Timer is hidden while running. Try to stop exactly at an agreed target time!</p>
            <p><strong>Mode 2: Visible Guess</strong><br>Timer is visible while running. Stop it randomly and let others guess the exact time it stopped at.</p>
            <p><strong>Mode 3: Team Relay</strong><br>Best played with two devices. Each team sets a target time. SPACE starts/pauses. ENTER reveals the final time.</p>
            <p><strong>Mode 4: Duel</strong><br>P1 holds 'A', P2 holds 'L' (or touch left/right). Wait for the Green Flash. First to release wins! False starts = instant loss.</p>
            <p><strong>Mode 5: Dual Blind Match</strong><br>Agree on a target time. P1 presses 'A' to start and stop their hidden timer. P2 presses 'L' to start and stop theirs. Press SPACE to reveal both times!</p>
        `,
        close_btn: "Close",
        rules_btn: "Rules",
        lang_btn: "کوردی",
        start: "Tap / Press SPACE to Start",
        start_relay: "Tap / Press SPACE to Start Relay",
        stop: "Tap / Press SPACE to Stop",
        pause: "Tap / Press SPACE to Pause",
        reveal: "Tap / Press SPACE to Reveal",
        reset: "Tap / Press SPACE to Reset",
        reset_relay: "Press BACKSPACE to Reset",
        next_player: "Next Player: Tap / Press SPACE",
        timing: "TIMING...",
        paused: "PAUSED",
        mob_reveal: "Give Up / Reveal",
        mob_reset: "Reset Timer",
        exit_split: "Exit / دەرچوون",
        p1_hold: "P1: Hold 'A'",
        p2_hold: "P2: Hold 'L'",
        p1_tap: "P1: Press 'A'",
        p2_tap: "P2: Press 'L'",
        ready: "READY...",
        false_start: "FALSE START",
        winner: "WINNER!",
        loser: "TOO SLOW",
        locked: "LOCKED"
    },
    ku: {
        title: "کـاتـەکـە بـگـرە",
        m1_btn: "مۆدی ١: کاتی شاراوە",
        m2_btn: "کاتەکە دیارە",
        m3_btn: "مۆدی ٣: شەڕە تیم",
        m4_btn: "مۆدی ٤: شەڕە تەقە",
        m5_btn: "مۆدی ٥: کاتی شاراوەی دووانە",
        rules_title: "ڕێنماییەکانی یاری",
        rules_text: `
            <p><strong>مۆدی ١: کاتی شاراوە</strong><br>کاتەکە دیار نییە کە دەڕوات. هەوڵبدە ڕێک لەسەر ئەو کاتە ڕایگریت کە دیاریتان کردووە!</p>
            <p><strong>مۆدی ٢: حەزەرکردن</strong><br>کاتەکە دیارە. کەسێک کاتەکە ڕابگرێت و ئەوانی تر دەبێ بزانن کاتەکە چەندە!</p>
            <p><strong>مۆدی ٣: شەڕە تیم</strong><br>ئەم مۆدە باشترە بە ٢ ئامێر بکرێت. SPACE بۆ دەستپێکردن/وەستاندن. ENTER بۆ دەرخستن.</p>
            <p><strong>مۆدی ٤: شەڕە تەقە (Duel)</strong><br>یاریزانی ١ پەنجە لەسەر 'A' دادەنێت، یاریزانی ٢ لەسەر 'L'. چاوەڕێی ڕووناکی سەوز بکەن. کێ زووتر پەنجەی لادا ئەو دەیباتەوە! ئەگەر زووتر لاتدا دەدۆڕێیت.</p>
            <p><strong>مۆدی ٥: کاتی شاراوەی دووانە</strong><br>لەگەڵ هاوڕێکەت کاتێک دیاری بکەن. یاریزانی ١ دوگمەی 'A' دادەگرێت بۆ دەستپێکردن و وەستاندنی کاتەکەی خۆی، یاریزانی ٢ دوگمەی 'L'. پاشان SPACE دابگرن بۆ ئاشکراکردنی هەردوو کاتەکە بەیەکەوە!</p>
        `,
        close_btn: "داخستن",
        rules_btn: "ڕێنمایی",
        lang_btn: "EN",
        start: "SPACE یان شاشە دابگرە بۆ دەستپێکردن",
        start_relay: "SPACE یان شاشە دابگرە بۆ شەڕە تیم!",
        stop: "SPACE یان شاشە دابگرە بۆ وەستاندن",
        pause: "SPACE یان شاشە دابگرە بۆ وەستاندن",
        reveal: "SPACE یان شاشە دابگرە بۆ بینینی کاتەکە",
        reset: "SPACE یان شاشە دابگرە بۆ سەرلەنوێ",
        reset_relay: "BACKSPACE دابگرە بۆ سفرکردنەوە",
        next_player: "نۆرەی دواتر: SPACE یان شاشە دابگرە",
        timing: "دەڕوات...",
        paused: "وەستا",
        mob_reveal: "ئاشکراکردن",
        mob_reset: "سفرکردنەوە",
        exit_split: "دەرچوون / Exit",
        p1_hold: "یاریزانی ١: پەنجە بنێ بە 'A'",
        p2_hold: "یاریزانی ٢: پەنجە بنێ بە 'L'",
        p1_tap: "یاریزانی ١: 'A' دابگرە",
        p2_tap: "یاریزانی ٢: 'L' دابگرە",
        ready: "چاوەڕێبە...",
        false_start: "زووتر ڕۆیشتیت!",
        winner: "براوە!",
        loser: "خاو بوویت",
        locked: "وەستێنرا"
    }
};

// State Machine Variables
let currentLang = 'en'; 
let currentMode = 1; 
let currentState = 'IDLE'; 
let startTime = 0;
let accumulatedTime = 0; 
let animationFrameId = null;

// Split Screen State
let duelState = 'IDLE'; // IDLE, ARMED, FLASHED, REVEALED
let p1State = 'IDLE'; 
let p2State = 'IDLE';
let p1Time = 0;
let p2Time = 0;
let p1StartTime = 0;
let p2StartTime = 0;
let duelTimeout = null;
let duelFlashTime = 0;

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
const modeDuelBtn = document.getElementById('mode-duel');
const modeDualBlindBtn = document.getElementById('mode-dual-blind');
const timerBox = document.getElementById('timer-box');
const displayText = document.getElementById('display-text');
const instructionText = document.getElementById('instruction-text');

const mobileRevealBtn = document.getElementById('mobile-reveal');
const mobileResetBtn = document.getElementById('mobile-reset');

// Split Screen Elements
const splitScreen = document.getElementById('split-screen');
const exitSplitBtn = document.getElementById('exit-split');
const p1Half = document.getElementById('p1-half');
const p2Half = document.getElementById('p2-half');
const p1Text = document.getElementById('p1-text');
const p2Text = document.getElementById('p2-text');
const p1TimeEl = document.getElementById('p1-time');
const p2TimeEl = document.getElementById('p2-time');

// Initialize Language
function applyLanguage() {
    const t = i18n[currentLang];
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ku' ? 'rtl' : 'ltr';
    
    mainTitle.textContent = t.title;
    modeBlindBtn.textContent = t.m1_btn;
    modeVisibleBtn.textContent = t.m2_btn;
    modeRelayBtn.textContent = t.m3_btn;
    modeDuelBtn.textContent = t.m4_btn;
    modeDualBlindBtn.textContent = t.m5_btn;
    rulesToggleBtn.textContent = t.rules_btn;
    langToggleBtn.textContent = t.lang_btn;
    
    modalTitle.textContent = t.rules_title;
    modalRulesText.innerHTML = t.rules_text;
    closeModalBtn.textContent = t.close_btn;
    
    mobileRevealBtn.textContent = t.mob_reveal;
    mobileResetBtn.textContent = t.mob_reset;
    exitSplitBtn.textContent = t.exit_split;

    if(currentMode < 4) {
        if (currentState === 'IDLE') instructionText.textContent = currentMode === 3 ? t.start_relay : t.start;
        else if (currentState === 'RUNNING') {
            instructionText.textContent = currentMode === 3 ? t.pause : t.stop;
            if (currentMode === 1 || currentMode === 3) displayText.textContent = t.timing;
        } else if (currentState === 'STOPPED_HIDDEN') {
            if (currentMode === 1) instructionText.textContent = t.reveal;
            else if (currentMode === 3) instructionText.textContent = t.next_player;
            displayText.textContent = t.paused;
        } else if (currentState === 'REVEALED') instructionText.textContent = currentMode === 3 ? t.reset_relay : t.reset;
    } else {
        updateSplitScreenText();
    }
}

langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ku' : 'en';
    applyLanguage();
});

// Modal Logic
rulesToggleBtn.addEventListener('click', () => rulesModal.classList.remove('hidden'));
closeModalBtn.addEventListener('click', () => rulesModal.classList.add('hidden'));
rulesModal.addEventListener('click', (e) => { if (e.target === rulesModal) rulesModal.classList.add('hidden'); });

// Audio setup
function initAudio() { if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
function playBeep(type) {
    if (!audioCtx) return;
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    oscillator.connect(gainNode); gainNode.connect(audioCtx.destination);
    
    if (type === 'start') {
        oscillator.type = 'sine'; oscillator.frequency.setValueAtTime(880, audioCtx.currentTime); 
        gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime); gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
        oscillator.start(); oscillator.stop(audioCtx.currentTime + 0.2);
    } else if (type === 'stop') {
        oscillator.type = 'square'; oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); 
        gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime); gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        oscillator.start(); oscillator.stop(audioCtx.currentTime + 0.3);
    } else if (type === 'reveal') {
        oscillator.type = 'triangle'; oscillator.frequency.setValueAtTime(1046.50, audioCtx.currentTime); 
        gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime); gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
        oscillator.start(); oscillator.stop(audioCtx.currentTime + 0.5);
    } else if (type === 'false_start') {
        oscillator.type = 'sawtooth'; oscillator.frequency.setValueAtTime(150, audioCtx.currentTime); 
        gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime); gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
        oscillator.start(); oscillator.stop(audioCtx.currentTime + 0.5);
    }
}

// Mode Selection
function switchMode(mode, btn) {
    if (currentState !== 'IDLE' && duelState !== 'IDLE') return;
    currentMode = mode;
    modeBlindBtn.classList.remove('active'); modeVisibleBtn.classList.remove('active');
    modeRelayBtn.classList.remove('active'); modeDuelBtn.classList.remove('active'); modeDualBlindBtn.classList.remove('active');
    btn.classList.add('active');
    
    if (currentMode === 3) mobileRevealBtn.classList.remove('hidden'); else mobileRevealBtn.classList.add('hidden');
    
    if (currentMode >= 4) {
        splitScreen.classList.remove('hidden');
        resetSplitScreen();
    } else {
        splitScreen.classList.add('hidden');
        resetTimer();
    }
}

modeBlindBtn.addEventListener('click', () => switchMode(1, modeBlindBtn));
modeVisibleBtn.addEventListener('click', () => switchMode(2, modeVisibleBtn));
modeRelayBtn.addEventListener('click', () => switchMode(3, modeRelayBtn));
modeDuelBtn.addEventListener('click', () => switchMode(4, modeDuelBtn));
modeDualBlindBtn.addEventListener('click', () => switchMode(5, modeDualBlindBtn));

exitSplitBtn.addEventListener('click', () => { switchMode(1, modeBlindBtn); });

// Format time utility
function formatTime(ms) {
    const totalSeconds = ms / 1000;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    const hundredths = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${hundredths.toString().padStart(2, '0')}`;
}

// Standard Timer Loop
function updateTimer() {
    if (currentState === 'RUNNING') {
        const now = performance.now();
        const elapsed = accumulatedTime + (now - startTime);
        if (currentMode === 2) displayText.textContent = formatTime(elapsed);
        animationFrameId = requestAnimationFrame(updateTimer);
    }
}

function resetTimer() {
    currentState = 'IDLE'; accumulatedTime = 0; displayText.textContent = "00:00:00";
    timerBox.className = "timer-container"; instructionText.classList.add('blink');
    applyLanguage(); if (animationFrameId) cancelAnimationFrame(animationFrameId);
}

// Split Screen Logic
function resetSplitScreen() {
    duelState = 'IDLE'; p1State = 'IDLE'; p2State = 'IDLE';
    p1Time = 0; p2Time = 0; p1StartTime = 0; p2StartTime = 0;
    if(duelTimeout) clearTimeout(duelTimeout);
    
    p1Half.className = "half-screen p1-side"; p2Half.className = "half-screen p2-side";
    p1TimeEl.classList.add('hidden'); p2TimeEl.classList.add('hidden');
    p1TimeEl.textContent = "00:00:00"; p2TimeEl.textContent = "00:00:00";
    updateSplitScreenText();
}

function updateSplitScreenText() {
    const t = i18n[currentLang];
    if (currentMode === 4) {
        if (duelState === 'IDLE') {
            p1Text.textContent = p1State === 'HOLDING' ? t.ready : t.p1_hold;
            p2Text.textContent = p2State === 'HOLDING' ? t.ready : t.p2_hold;
        }
    } else if (currentMode === 5) {
        if (duelState === 'REVEALED') return;
        
        if (p1State === 'IDLE') p1Text.textContent = t.p1_tap;
        else if (p1State === 'RUNNING') p1Text.textContent = t.timing;
        else if (p1State === 'LOCKED') p1Text.textContent = duelState === 'STOPPED_HIDDEN' ? t.reveal : t.locked;

        if (p2State === 'IDLE') p2Text.textContent = t.p2_tap;
        else if (p2State === 'RUNNING') p2Text.textContent = t.timing;
        else if (p2State === 'LOCKED') p2Text.textContent = duelState === 'STOPPED_HIDDEN' ? t.reveal : t.locked;
    }
}

function checkDuelReady() {
    if (currentMode === 4 && duelState === 'IDLE' && p1State === 'HOLDING' && p2State === 'HOLDING') {
        duelState = 'ARMED';
        p1Half.classList.add('ready'); p2Half.classList.add('ready');
        p1Text.textContent = i18n[currentLang].ready; p2Text.textContent = i18n[currentLang].ready;
        initAudio();
        // Random time between 1 second and 20 seconds for maximum psychological tension
        const waitTime = 1000 + Math.random() * 19000;
        duelTimeout = setTimeout(() => {
            if (duelState === 'ARMED') {
                duelState = 'FLASHED';
                playBeep('reveal');
                p1Half.classList.remove('ready'); p2Half.classList.remove('ready');
                p1Half.classList.add('flashed-green'); p2Half.classList.add('flashed-green');
                p1Text.textContent = "GO!"; p2Text.textContent = "GO!";
                duelFlashTime = performance.now();
            }
        }, waitTime);
    }
}

function handleP1Down() {
    if (currentMode === 4 && duelState === 'IDLE') { p1State = 'HOLDING'; updateSplitScreenText(); checkDuelReady(); }
    else if (currentMode === 5) {
        if (p1State === 'IDLE') {
            p1StartTime = performance.now(); p1State = 'RUNNING'; p1Half.classList.add('running'); playBeep('start'); updateSplitScreenText();
        } else if (p1State === 'RUNNING') {
            p1Time = performance.now() - p1StartTime; p1State = 'LOCKED'; p1Half.classList.remove('running'); p1Half.classList.add('locked'); playBeep('stop'); updateSplitScreenText();
            if (p2State === 'LOCKED') duelState = 'STOPPED_HIDDEN'; updateSplitScreenText();
        }
    }
}

function handleP2Down() {
    if (currentMode === 4 && duelState === 'IDLE') { p2State = 'HOLDING'; updateSplitScreenText(); checkDuelReady(); }
    else if (currentMode === 5) {
        if (p2State === 'IDLE') {
            p2StartTime = performance.now(); p2State = 'RUNNING'; p2Half.classList.add('running'); playBeep('start'); updateSplitScreenText();
        } else if (p2State === 'RUNNING') {
            p2Time = performance.now() - p2StartTime; p2State = 'LOCKED'; p2Half.classList.remove('running'); p2Half.classList.add('locked'); playBeep('stop'); updateSplitScreenText();
            if (p1State === 'LOCKED') duelState = 'STOPPED_HIDDEN'; updateSplitScreenText();
        }
    }
}

function handleP1Up() {
    const t = i18n[currentLang];
    if (currentMode === 4) {
        if (duelState === 'ARMED') {
            duelState = 'REVEALED'; clearTimeout(duelTimeout); playBeep('false_start');
            p1Half.className = "half-screen p1-side flashed-red"; p1Text.textContent = t.false_start;
            p2Half.className = "half-screen p2-side flashed-green"; p2Text.textContent = t.winner;
        } else if (duelState === 'FLASHED') {
            duelState = 'REVEALED'; p1Time = performance.now() - duelFlashTime; playBeep('reveal');
            p1Half.className = "half-screen p1-side flashed-green"; p1Text.textContent = t.winner; p1TimeEl.textContent = (p1Time/1000).toFixed(3) + "s"; p1TimeEl.classList.remove('hidden');
            p2Half.className = "half-screen p2-side"; p2Text.textContent = t.loser;
        } else if (duelState === 'IDLE') { p1State = 'IDLE'; updateSplitScreenText(); }
    }
}

function handleP2Up() {
    const t = i18n[currentLang];
    if (currentMode === 4) {
        if (duelState === 'ARMED') {
            duelState = 'REVEALED'; clearTimeout(duelTimeout); playBeep('false_start');
            p2Half.className = "half-screen p2-side flashed-red"; p2Text.textContent = t.false_start;
            p1Half.className = "half-screen p1-side flashed-green"; p1Text.textContent = t.winner;
        } else if (duelState === 'FLASHED') {
            duelState = 'REVEALED'; p2Time = performance.now() - duelFlashTime; playBeep('reveal');
            p2Half.className = "half-screen p2-side flashed-green"; p2Text.textContent = t.winner; p2TimeEl.textContent = (p2Time/1000).toFixed(3) + "s"; p2TimeEl.classList.remove('hidden');
            p1Half.className = "half-screen p1-side"; p1Text.textContent = t.loser;
        } else if (duelState === 'IDLE') { p2State = 'IDLE'; updateSplitScreenText(); }
    }
}

// Action Handlers for Modes 1-3
function handleBackspace() { if(currentMode < 4) resetTimer(); }
function handleEnter() {
    if (currentMode === 3) {
        initAudio();
        if (currentState === 'RUNNING' || currentState === 'STOPPED_HIDDEN') {
            if (currentState === 'RUNNING') { accumulatedTime += (performance.now() - startTime); if (animationFrameId) cancelAnimationFrame(animationFrameId); }
            currentState = 'REVEALED'; playBeep('reveal'); timerBox.className = "timer-container revealed";
            displayText.textContent = formatTime(accumulatedTime); instructionText.textContent = i18n[currentLang].reset_relay; instructionText.classList.add('blink');
        }
    }
}
function handleSpacebar() {
    initAudio(); const t = i18n[currentLang];
    if (currentMode < 4) {
        if (currentState === 'IDLE') {
            currentState = 'RUNNING'; startTime = performance.now(); playBeep('start');
            timerBox.className = "timer-container running"; instructionText.classList.remove('blink'); instructionText.textContent = currentMode === 3 ? t.pause : t.stop;
            if (currentMode === 1 || currentMode === 3) displayText.textContent = t.timing;
            updateTimer();
        } else if (currentState === 'RUNNING') {
            accumulatedTime += (performance.now() - startTime); if (animationFrameId) cancelAnimationFrame(animationFrameId); playBeep('stop');
            timerBox.className = "timer-container stopped";
            if (currentMode === 1) { currentState = 'STOPPED_HIDDEN'; displayText.textContent = t.paused; instructionText.textContent = t.reveal; instructionText.classList.add('blink'); }
            else if (currentMode === 3) { currentState = 'STOPPED_HIDDEN'; displayText.textContent = t.paused; instructionText.textContent = t.next_player; instructionText.classList.add('blink'); }
            else { currentState = 'REVEALED'; displayText.textContent = formatTime(accumulatedTime); instructionText.textContent = t.reset; instructionText.classList.add('blink'); }
        } else if (currentState === 'STOPPED_HIDDEN') {
            if (currentMode === 1) { currentState = 'REVEALED'; playBeep('reveal'); timerBox.className = "timer-container revealed"; displayText.textContent = formatTime(accumulatedTime); instructionText.textContent = t.reset; }
            else if (currentMode === 3) { currentState = 'RUNNING'; startTime = performance.now(); playBeep('start'); timerBox.className = "timer-container running"; instructionText.classList.remove('blink'); instructionText.textContent = t.pause; displayText.textContent = t.timing; updateTimer(); }
        } else if (currentState === 'REVEALED') { if (currentMode !== 3) resetTimer(); }
    } else {
        // Mode 4 & 5 Spacebar Handling (Reset / Reveal)
        if (currentMode === 4 && duelState === 'REVEALED') resetSplitScreen();
        if (currentMode === 5) {
            if (duelState === 'STOPPED_HIDDEN') {
                duelState = 'REVEALED'; playBeep('reveal');
                p1Half.className = "half-screen p1-side revealed"; p2Half.className = "half-screen p2-side revealed";
                p1Text.textContent = ""; p2Text.textContent = "";
                p1TimeEl.textContent = formatTime(p1Time); p2TimeEl.textContent = formatTime(p2Time);
                p1TimeEl.classList.remove('hidden'); p2TimeEl.classList.remove('hidden');
            } else if (duelState === 'REVEALED') resetSplitScreen();
        }
    }
}

// Keyboard Bindings
document.addEventListener('keydown', (e) => {
    if (!rulesModal.classList.contains('hidden')) return;
    if (e.code === 'Backspace') { e.preventDefault(); handleBackspace(); }
    else if (e.code === 'Enter') { e.preventDefault(); handleEnter(); }
    else if (e.code === 'Space' && !e.repeat) { e.preventDefault(); handleSpacebar(); }
    else if (e.code === 'KeyA' && !e.repeat) { e.preventDefault(); initAudio(); handleP1Down(); }
    else if (e.code === 'KeyL' && !e.repeat) { e.preventDefault(); initAudio(); handleP2Down(); }
});

document.addEventListener('keyup', (e) => {
    if (e.code === 'KeyA') { e.preventDefault(); handleP1Up(); }
    else if (e.code === 'KeyL') { e.preventDefault(); handleP2Up(); }
});

// Mobile Touch Bindings
document.body.addEventListener('touchstart', (e) => {
    if (e.target.tagName.toLowerCase() === 'button' || e.target.closest('button') || e.target.closest('.modal-content')) return;
    if (!rulesModal.classList.contains('hidden')) return;
    
    if (currentMode < 4) { 
        e.preventDefault(); handleSpacebar(); 
    } else {
        // Allow mobile users to reset/reveal by tapping the screen
        if (duelState === 'REVEALED' || duelState === 'STOPPED_HIDDEN') {
            e.preventDefault();
            handleSpacebar();
            return;
        }

        initAudio();
        const isMobile = window.innerWidth <= 768;
        for (let i = 0; i < e.changedTouches.length; i++) {
            const touch = e.changedTouches[i];
            let isP1;
            if (isMobile) isP1 = touch.clientY < window.innerHeight / 2;
            else isP1 = touch.clientX < window.innerWidth / 2;
            
            if (isP1) handleP1Down();
            else handleP2Down();
        }
    }
}, { passive: false });

document.body.addEventListener('touchend', (e) => {
    if (currentMode >= 4) {
        const isMobile = window.innerWidth <= 768;
        for (let i = 0; i < e.changedTouches.length; i++) {
            const touch = e.changedTouches[i];
            let isP1;
            if (isMobile) isP1 = touch.clientY < window.innerHeight / 2;
            else isP1 = touch.clientX < window.innerWidth / 2;
            
            if (isP1) handleP1Up();
            else handleP2Up();
        }
    }
}, { passive: false });

mobileRevealBtn.addEventListener('click', () => handleEnter());
mobileResetBtn.addEventListener('click', () => handleBackspace());

// Init on load
switchMode(1, modeBlindBtn);
