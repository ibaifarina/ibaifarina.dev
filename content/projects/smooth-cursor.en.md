## A screen recorder designed around the final result

Smooth Cursor is a native macOS screen recorder for product demos, tutorials, and visual walkthroughs. I designed and built it around a simple idea: recording should be quick, but the result should still feel deliberate and polished.

Instead of stopping at screen capture, Smooth Cursor brings recording and post-production into one focused workflow. It records the screen with the cursor hidden, logs every movement, click, and keystroke at 120 Hz, and then re-renders the cursor smoothly while adding zooms, backgrounds, or even a 3D iPhone frame.

<img width="1200" height="631" alt="Smooth Cursor editor" src="/projects/smooth-cursor/editor.webp" />

## The product challenge

Most screen recorders optimize for getting pixels into a file. Product videos need more than that: the viewer has to understand where to look, cursor motion should feel natural, and zooms should support the story rather than distract from it.

My goal was to make those presentation details approachable without turning Smooth Cursor into a full video editor. The interface had to remain calm while still giving precise control over capture, timing, zooms, and export quality.

## A focused editing workflow

The editor combines a live Metal preview, an inspector, and a timeline where recordings, cursor data, and zooms stay synchronized. Auto zoom from clicks and typing provides a useful starting point, while the spring-smoothed cursor, backgrounds, captions, keystroke display, and blur or pixelate regions let every moment be refined.

Smooth Cursor captures displays, windows, and areas, as well as an iPhone over USB or the iOS Simulator, with system audio, microphone, and webcam overlay. It exports to H.264, HEVC, ProRes, and GIF at up to 4K and 60 fps, with presets for YouTube, X, Reels, and more.

<video src="/projects/smooth-cursor/demo.mp4" autoplay loop muted playsinline preload="metadata" aria-label="Example of a finished Smooth Cursor recording"></video>

*An example recording exported from Smooth Cursor.*

## Building it natively

I built Smooth Cursor with Swift and SwiftUI to make the experience feel at home on macOS. ScreenCaptureKit handles capture, and Metal powers a GPU compositor that is shared by the preview and the export, so what you see is exactly what you get.

The project brought together product design, native interface work, media processing, and animation. The result is a tool that treats screen recording as a presentation medium—not only as a capture utility.
