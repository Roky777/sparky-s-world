# The Lost Moonlight — first playable story

Target interaction: one short guided adventure. The child helps, explores, and plays alongside Sparky. Voice is optional.

| Scene | Sparky | Child | Branch |
|---|---|---|---|
| Intro | Greets and explains the missing light | Starts adventure | Continue to forest |
| Forest | Explains three glow seeds | Taps each seed | Contextual count responses; collect first light |
| Travel | Floats along the route | Watches or drags scenery | Arrive at river |
| River | Explains numbered crossing | Taps/drags 1, 2, 3 | Wrong order: hint; correct order: second light |
| Travel | Continues towards the moon gate | Watches or explores | Arrive at clearing |
| Moon gate | Asks who lights the night | Says or taps moon | Sun: daytime hint; unclear: retry; moon: third light |
| Outro | Celebrates the adventure | Completes or replays | Local completion saved |

All exact lines live in `src/lines.json` and have matching recorded MP3s. Twenty-three seconds without action triggers one gentle contextual hint. Repeated instructions are available. A voice-recognition error never removes progress.
