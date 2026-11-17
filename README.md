# Sparky · The Lost Moonlight

A scripted, mobile-friendly storybook adventure. Sparky guides the child through a glowing forest, a river-crossing activity, and a moon-gate question. There is no generative dialogue or LLM service at runtime.

## Play and build

`npm install` then `npm run build`. Serve `dist/` over HTTP (`npm start`) or HTTPS. The prebuilt game runs without Node or a backend. Click **Start our adventure** to enable the recorded narration. Sound, pause, repeat, restart, touch, and keyboard scenery exploration are available.

## The storyboard

1. **Introduction:** Sparky invites the child to restore the moonlight.
2. **Glowwood:** tap three luminous seeds. Each tap receives a contextual response.
3. **Travel:** animated floating travel with horizontal scenery movement.
4. **Wishing River:** place numbered stepping stones in order, by tapping or dragging. Incorrect order gets a friendly hint.
5. **Travel:** continue to the moon gate.
6. **Moonrise:** answer the night-sky question by tapping the sun/moon or speaking.
7. **Outro:** send the lights home, celebrate, and replay.

## Assets and voice

- Three real 1536×1024 PNG background illustrations: `dist/assets/glowwood.png`, `river.png`, and `moonrise.png`.
- Four transparent PNG game sprites: `seed.png`, `stone.png`, `sun.png`, and `moon.png`.
- Approved 2.66 MB Sparky GLB, original brown arms/hands, 15 curated animations and ambient fire.
- Three story animation aliases, derived from the approved clips: greet, travel, and listen. Existing bone deformation is preserved. Speaking uses a restrained blend of the existing mouth morphs, not phoneme-accurate lip sync.
- Nineteen pre-generated MP3 narration clips, warm childlike en-US-AnaNeural voice, slightly slower delivery. Playback does not call a TTS service. The authoring tool was [edge-tts](https://github.com/rany2/edge-tts).
- PNG artwork generated with the built-in image generation tool; prompts are recorded in `asset-prompts.json`.
- The whole shipped `dist/` is approximately 7.1 MB before HTTP compression.

## Interaction and accessibility

Real buttons, subtitles, repeated instructions, generous touch targets, touch answer fallback, reduced-motion support, and a pause overlay. Empty scenery supports horizontal drag and arrow keys. Progress is stored locally on the device; restart clears it. There is no account system.

Speech uses the browser's SpeechRecognition API where available. Depending on the browser it can send audio to that browser's speech provider. It requires microphone permission and a supported browser/network. HTTPS is required when hosted. The game gives clear retry/error feedback and remains fully playable with touch. Electron preview may not support the actual recognition provider; try the hosted page in Chrome or Edge. Child-speech accuracy has not been measured on a physical phone.

## Validation

Desktop and 390×844 browser playthrough passed: PNG decoding, all 19 voice files decoded, correct and wrong answers, reward progression, ending, pause/resume, and phone layout without horizontal overflow. The recognition callbacks were checked using a mock adapter; this does not establish real microphone or speech-provider accuracy. No browser console errors were observed. Physical-phone frame rate remains to be measured.

## Source

`src/game.js`: storyboard and interaction controller. `src/world.js`: PNG scenery movement and ambient particles. `src/lines.json`: fixed narration. The player and model are from the user's 3dSparky package. Three.js and Meshoptimizer license notices are in `THIRD_PARTY_NOTICES.md`.
