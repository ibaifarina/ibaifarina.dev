## Un grabador de pantalla diseñado pensando en el resultado final

Smooth Cursor es un grabador de pantalla nativo para macOS, creado para demos de producto, tutoriales y explicaciones visuales. Lo diseñé y desarrollé alrededor de una idea sencilla: grabar debe ser rápido, pero el resultado también debe sentirse cuidado y profesional.

En lugar de limitarse a capturar la pantalla, Smooth Cursor reúne grabación y posproducción en un único flujo de trabajo. Graba la pantalla con el cursor oculto, registra cada movimiento, clic y pulsación de tecla a 120 Hz, y después vuelve a renderizar el cursor con fluidez, añadiendo zooms, fondos o incluso un marco 3D de iPhone.

<img width="1200" height="631" alt="Editor de Smooth Cursor" src="/projects/smooth-cursor/editor.webp" />

## El reto de producto

La mayoría de grabadores se centran en guardar píxeles en un archivo. Un buen vídeo de producto necesita algo más: el espectador debe saber dónde mirar, el cursor tiene que moverse de forma natural y los zooms deben acompañar la explicación sin distraer.

Mi objetivo era hacer accesibles esos detalles de presentación sin convertir Smooth Cursor en un editor de vídeo complejo. La interfaz debía mantenerse tranquila y clara, pero ofrecer control preciso sobre la captura, el ritmo, los zooms y la calidad de exportación.

## Un flujo de edición centrado

El editor combina una vista previa en vivo con Metal, un inspector y una línea de tiempo en la que la grabación, los datos del cursor y los zooms permanecen sincronizados. El zoom automático a partir de clics y escritura ofrece un buen punto de partida, mientras que el cursor suavizado con física de muelle, los fondos, los subtítulos, las teclas pulsadas y las zonas de desenfoque o pixelado permiten pulir cada momento.

Smooth Cursor captura pantallas, ventanas y áreas, además de un iPhone por USB o el simulador de iOS, con audio del sistema, micrófono y webcam superpuesta. Exporta a H.264, HEVC, ProRes y GIF hasta 4K y 60 fps, con ajustes preconfigurados para YouTube, X, Reels y más.

<video src="/projects/smooth-cursor/demo.mp4" autoplay loop muted playsinline preload="metadata" aria-label="Ejemplo de una grabación terminada con Smooth Cursor"></video>

*Un ejemplo de una grabación exportada desde Smooth Cursor.*

## Desarrollo nativo

Desarrollé Smooth Cursor con Swift y SwiftUI para que la experiencia se sintiera propia de macOS. ScreenCaptureKit se encarga de la captura y Metal impulsa un compositor en GPU compartido por la vista previa y la exportación, de modo que lo que ves es exactamente lo que obtienes.

El proyecto combina diseño de producto, interfaces nativas, procesamiento multimedia y animación. El resultado es una herramienta que entiende la grabación de pantalla como un medio de presentación, no solo como una utilidad de captura.
