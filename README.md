# Sparky — your little world

A scripted, map-based companion game for mobile browsers. Meet Sparky, introduce yourself, chat about feelings and favourite colours, then explore an island with different activities. There is no LLM or generative dialogue service at runtime.

## Play and build

The prebuilt game is in `dist/`. Serve it over HTTP locally or HTTPS when hosted. Click **Meet Sparky** to unlock narration. For source changes: `npm install` then `npm run build`. `npm start` serves the game locally.

## Meeting your companion

First visit: greeting → say or type a first name → confirm or correct → feelings → contextual reaction → favourite colour → contextual reaction → play together or explore. Name input can be skipped. A return visit offers exploring or chatting again. The name appears in the interface; arbitrary names are not pronounced in the prerecorded voice.

All branches and dialogue are authored. Unrecognised answers get a retry or a touch/typing option. This is bounded companion conversation, not general-purpose chat.

## The map

A horizontally pannable island connects five destinations. Tap a destination and Sparky travels toward it; tap an empty path to let him roam.

| Place | Activity |
|---|---|
| Sparky’s home | Companion conversation |
| Glowwood | Wake three glow seeds |
| Wishing River | Put numbered stones in order by tapping or dragging |
| Moon Garden | Answer a night-sky question by voice or touch |
| Play Garden | Find the seed matching the child’s favourite colour |

Visit in any order. Each distinct story location earns one light. Three story lights unlock the outro; the play garden is optional. Completed destinations remain marked. The map and talk controls stay available during activities.

## Visuals, character, and voice

Four original smooth 3D cartoon PNG environments, including the island map, were generated using the approved Sparky render as a style reference. Four transparent PNG props match that direction. These are the `*-v2.png` files under `dist/assets/`. Full generation prompts are in `asset-prompts-v2.json`.

This is a 2.5D world: a live 3D character over PNG environments, not a full navigable 3D terrain. The 2.66 MB approved Sparky GLB retains original brown arms/hands, 15 curated animations, and ambient fire. Story-specific greet, travel, and listening variants derive from those clips. Mouth movement follows narration waveform amplitude; it is not phoneme-accurate lip sync.

Fifty-three pre-generated natural-voice MP3 clips provide all dialogue, delivered slightly slower for children. Playback requires no TTS service. Voice authoring used [edge-tts](https://github.com/rany2/edge-tts), en-US-AnaNeural. All shipped game assets total about 8.0 MB before HTTP compression.

## Voice, progress, and controls

SpeechRecognition is used only after the microphone is selected. Browser support varies and some browsers send speech to their recognition provider. HTTPS and microphone permission are needed when hosted. Recognition denial, unavailable service, silence, and unclear speech retain touch/typing alternatives.

A first-name profile, preferences, and completed places stay in browser localStorage. There are no accounts, cloud sync, analytics, or API keys. Changing the name resets activity progress for the new visitor. Restart clears activity completion while retaining the chosen name.

Sound, pause/resume, repeat narration, name correction, keyboard scenery exploration, reduced-motion support, subtitles, and labelled controls are included.

## Validation and limits

`validation/browser-v2.json` records the desktop and 390×844 browser playthrough: name parsing and correction, typed confirmation, feelings, favourite colour, play-before-exploring branch, five map destinations, non-linear task order, wrong answers, all four games, rewards, returning visitor, microphone denial, pause/resume, mobile layout, and all 53 audio files decoding. No console errors were observed.

Speech callbacks were tested with a mock; this does not establish microphone accuracy with a child. A physical Vivo phone was connected and Hank’s visual/navigation patterns were inspected as a reference. The Sparky Chrome tab was not exposed for the attempted physical-device check, so physical-phone frame rate and live recognition remain unverified. The local diagnostic history is retained under ignored `checks/`.

## Source

- `src/game.js`: game flow, character rendering, audio, tasks.
- `src/conversation.js`: scripted companion conversation and voice/typing input.
- `src/explore-map.js`: map navigation and roaming.
- `src/world.js`: scene artwork movement and atmosphere.
- `src/lines.json`: fixed dialogue.
- `THIRD_PARTY_NOTICES.md`: renderer and compression licenses.
