# Sparky's World

A scripted children's game hub with a live 3D Sparky exploring a PNG island. No runtime LLM.

## Play
Serve dist over HTTP locally or HTTPS when hosted. Tap PNG play to unlock audio, meet Sparky, then explore. Drag the map, tap landmarks and game pictures, or tap Sparky and toys. Microphone is optional; picture choices and typed-name fallback remain. Run npm install and npm run build to rebuild, npm start to serve.

Six places connect home, letters, numbers, colours, puzzles and picnic activities. Twelve existing PW modes load on demand from dist/pw-games. Their original artwork, mascot and teaching recordings remain intact. A validated same-origin bridge reports readiness, activity, completion and return. The world renderer pauses during games. Sparky returns with praise and two choices from different learning districts.

Sparky waves, hops, dances, reacts to gentle tickling, follows attention and tells short jokes. Ball, butterfly, gifts, bellflowers and balloon provide world play. A PNG backpack offers map missions and star rewards.

## Personal places
Play history and missions are stored per normalized first name in this browser, without cloud accounts. Flowers appear after a visit, stars after two launches plus 45 active seconds, and a favourite cozy corner becomes eligible after three launches plus 90 active seconds. Loading, background, paused and inactive time are excluded. Recommendations encourage variety.

## Art and voice
The world is 2.5D: live 3D over PNG terrain, landmarks, toys and controls. The approved 2.66 MB GLB retains brown hands, 15 curated animations and ambient flames. Mouth movement follows audio amplitude, rather than phoneme-level lip sync.

110 prerecorded map/companion clips use en-US-JennyNeural at -10% rate and +6Hz pitch, with shorter sentences. No live TTS is required. Voice authoring uses edge-tts. Existing PW teaching recordings are preserved. Artwork prompts and provenance: asset-prompts-v3.json. PNG assets: dist/assets.

The character is under 10 MB; the full game library is larger and loads on demand.

## Verification
Build and six play-memory tests pass. Browser checks loaded all 12 modes, solved a real letter round, verified return/praise, phone-size layouts, choices, toys, missions and favourite decorations. All 110 narration files decode. Reports are in validation; simulated QA preference/mission events are identified explicitly.

Physical-phone frame rate and live child microphone recognition remain unverified. Speech recognition depends on browser support. Conversation uses authored branches and known intents.
