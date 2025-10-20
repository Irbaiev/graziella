// Cross-platform haptics helper: Web Vibration API + iOS fallbacks + Capacitor/Cordova

// Create audio context for iOS sound feedback
let audioContext = null;
let clickSound = null;

function createClickSound() {
  if (typeof window === 'undefined') return null;
  
  try {
    if (!audioContext) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return null;
      audioContext = new Ctx();
    }
    
    if (!clickSound) {
      // Create a short, pleasant click sound
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);
      
      clickSound = { oscillator, gainNode };
    }
    
    return clickSound;
  } catch (e) {
    return null;
  }
}

function playClickSound() {
  try {
    const sound = createClickSound();
    if (sound) {
      // Clone the sound to avoid conflicts; guard when context is suspended
      if (audioContext.state === 'suspended') {
        audioContext.resume().catch(() => {});
      }
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    }
  } catch (e) {
    // Silent fail
  }
}

export function triggerLightHaptic() {
  try {
    // 1) Web Vibration API (Android + some iOS browsers)
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate([10, 30]);
      return;
    }

    // 2) Capacitor Haptics (if running inside native shell)
    const cap = typeof window !== 'undefined' ? window.Capacitor : undefined;
    const capHaptics = cap?.Plugins?.Haptics || cap?.Haptics;
    if (cap && capHaptics && typeof capHaptics.impact === 'function') {
      capHaptics.impact({ style: 'light' });
      return;
    }

    // 3) Cordova TapticEngine (optional legacy)
    const taptic = typeof window !== 'undefined' ? (window.TapticEngine || window?.cordova?.plugins?.TapticEngine) : undefined;
    if (taptic && typeof taptic.impact === 'function') {
      taptic.impact({ style: 'light' });
      return;
    }

    // 4) iOS fallback: Audio feedback
    if (typeof window !== 'undefined') {
      // Check if we're on iOS
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                   (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      
      if (isIOS) {
        playClickSound();
        return;
      }
    }
  } catch (e) {
    // Silent fail
  }
}

// Enhanced haptic for stronger feedback
export function triggerMediumHaptic() {
  try {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate([20, 10, 20]);
      return;
    }

    const cap = typeof window !== 'undefined' ? window.Capacitor : undefined;
    const capHaptics = cap?.Plugins?.Haptics || cap?.Haptics;
    if (cap && capHaptics && typeof capHaptics.impact === 'function') {
      capHaptics.impact({ style: 'medium' });
      return;
    }

    const taptic = typeof window !== 'undefined' ? (window.TapticEngine || window?.cordova?.plugins?.TapticEngine) : undefined;
    if (taptic && typeof taptic.impact === 'function') {
      taptic.impact({ style: 'medium' });
      return;
    }

    // iOS fallback with slightly different sound
    if (typeof window !== 'undefined') {
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                   (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      
      if (isIOS) {
        try {
          if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
          }
          
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();
          
          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);
          
          oscillator.frequency.setValueAtTime(1000, audioContext.currentTime);
          oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.15);
          
          gainNode.gain.setValueAtTime(0, audioContext.currentTime);
          gainNode.gain.linearRampToValueAtTime(0.15, audioContext.currentTime + 0.01);
          gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.15);
          
          oscillator.start(audioContext.currentTime);
          oscillator.stop(audioContext.currentTime + 0.15);
        } catch (e) {
          // Silent fail
        }
        return;
      }
    }
  } catch (e) {
    // Silent fail
  }
}


