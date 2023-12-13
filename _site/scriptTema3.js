document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "1. ¿Qué define un protocolo de comunicaciones en redes?",
            a: "Un lenguaje de programación específico para redes",
            b: "Un conjunto de normas para la gestión de la comunicación en redes",
            c: "Un dispositivo físico para conectar ordenadores",
            d: "Una aplicación para monitorear el tráfico de red",
            correct: "b",
            explanation: "Un protocolo de comunicaciones es un conjunto de normas que usan los ordenadores para gestionar la comunicación en el intercambio de información."
        },
        {
            question: "2. ¿Cuál es una característica clave de la capa de Internet en el modelo TCP/IP?",
            a: "Controla el acceso físico a la red",
            b: "Garantiza la seguridad de los datos",
            c: "Permite que los paquetes de datos viajen de forma independiente a su destino",
            d: "Ofrece protocolos de alto nivel como SMTP y FTP",
            correct: "c",
            explanation: "La capa de Internet permite que los nodos incluyan paquetes en cualquier red y viajen de forma independiente a su destino."
        },
        {
            question: "3. ¿Qué diferencia fundamental existe entre los protocolos TCP y UDP?",
            a: "TCP es más antiguo que UDP",
            b: "UDP es más seguro que TCP",
            c: "TCP es orientado a la conexión, mientras que UDP no",
            d: "UDP utiliza puertos de comunicación, a diferencia de TCP",
            correct: "c",
            explanation: "La principal diferencia entre TCP y UDP es que TCP es orientado a la conexión, lo que garantiza la entrega de los mensajes en orden, mientras que UDP no tiene estas garantías."
        },
        {
            question: "4. ¿Qué representa un puerto en la programación de redes?",
            a: "Un software para gestionar las conexiones de red",
            b: "Un número que identifica a qué proceso o protocolo van dirigidos los datos",
            c: "Un cable físico que conecta ordenadores en una red",
            d: "Una dirección IP específica de un dispositivo en la red",
            correct: "b",
            explanation: "Un puerto es un número de 16 bits utilizado para identificar a qué protocolo o proceso van dirigidos los datos en una red."
        },
        {
            question: "5. ¿Cuál es una ventaja principal del modelo cliente-servidor en programación de redes?",
            a: "Permite conexiones directas entre todos los dispositivos de la red",
            b: "Facilita el mantenimiento al realizarse principalmente en el servidor",
            c: "Utiliza un único lenguaje de programación para todas las aplicaciones",
            d: "No requiere protocolos de comunicación para la transferencia de datos",
            correct: "b",
            explanation: "Una ventaja principal del modelo cliente-servidor es la facilidad de mantenimiento, ya que este se realiza principalmente en el servidor."
        },
        {
            question: "6. ¿Qué función cumple la capa de transporte en el modelo OSI?",
            a: "Controlar el flujo de datos entre sistemas finales",
            b: "Manejar la dirección de los paquetes de red",
            c: "Definir el formato de los datos para la aplicación",
            d: "Regular la conexión física entre dispositivos",
            correct: "a",
            explanation: "La capa de transporte controla el flujo de datos entre sistemas finales y proporciona comunicación fiable y segura."
        },
        {
            question: "7. ¿En qué consiste el principio de encapsulamiento en redes?",
            a: "Proteger los datos de accesos no autorizados",
            b: "Comprimir los datos para ahorrar espacio",
            c: "Incluir los datos en paquetes con información de control",
            d: "Codificar los datos para la transmisión inalámbrica",
            correct: "c",
            explanation: "El encapsulamiento en redes se refiere a incluir los datos dentro de paquetes, agregando la información de control necesaria para su transmisión."
        },
        {
            question: "8. ¿Qué es una dirección MAC en redes?",
            a: "Un protocolo para controlar el acceso a medios",
            b: "Una dirección única asignada a cada interfaz de red",
            c: "Un tipo de dirección IP estática",
            d: "Una contraseña para acceder a redes Wi-Fi",
            correct: "b",
            explanation: "Una dirección MAC es un identificador único asignado a las interfaces de red para comunicaciones en la capa de enlace de datos."
        },
        {
            question: "9. ¿Qué característica distingue a IPv6 de IPv4?",
            a: "IPv6 utiliza direcciones más cortas que IPv4",
            b: "IPv6 no soporta la fragmentación de paquetes",
            c: "IPv6 ofrece una cantidad menor de direcciones posibles",
            d: "IPv6 utiliza direcciones de 128 bits, más largas que las de 32 bits de IPv4",
            correct: "d",
            explanation: "IPv6 utiliza direcciones de 128 bits, lo que permite una cantidad mucho mayor de direcciones únicas en comparación con las de 32 bits de IPv4."
        },
        {
            question: "10. ¿Cuál es el propósito del protocolo ARP en redes?",
            a: "Asignar direcciones IP automáticamente",
            b: "Traducir direcciones IP a direcciones MAC",
            c: "Comprimir datos para la transmisión rápida",
            d: "Cifrar los datos para la seguridad",
            correct: "b",
            explanation: "El protocolo ARP (Address Resolution Protocol) se utiliza para traducir direcciones IP conocidas en sus correspondientes direcciones MAC."
        },
        {
            question: "11. ¿Qué es un socket en el contexto de programación de redes?",
            a: "Un dispositivo de hardware para conexiones de red",
            b: "Un protocolo de comunicación a nivel de aplicación",
            c: "Un punto final en una comunicación de red bidireccional",
            d: "Una herramienta de software para monitorear el tráfico de red",
            correct: "c",
            explanation: "En la programación de redes, un socket es un punto final en una comunicación de red bidireccional, actuando como una interfaz para enviar y recibir datos."
        },
        {
            question: "12. ¿Cuál es el propósito de las direcciones IP dinámicas?",
            a: "Proporcionar una dirección única y constante a los dispositivos",
            b: "Permitir el cambio de dirección IP para la gestión de la red",
            c: "Aumentar la seguridad de la red mediante direcciones cambiantes",
            d: "Facilitar la identificación de dispositivos en una red local",
            correct: "b",
            explanation: "Las direcciones IP dinámicas permiten que un dispositivo cambie su dirección IP, lo cual es útil para la administración de redes y la gestión de recursos."
        },
        {
            question: "13. ¿En qué consiste el enrutamiento en redes?",
            a: "Proteger la red de accesos no autorizados",
            b: "Conectar físicamente diferentes segmentos de la red",
            c: "Determinar la mejor ruta para el envío de paquetes de datos",
            d: "Gestionar la asignación de direcciones IP",
            correct: "c",
            explanation: "El enrutamiento es el proceso de seleccionar caminos en una red para enviar paquetes de datos desde un origen hasta un destino."
        },
        {
            question: "14. ¿Cuál es la función principal de un firewall en una red?",
            a: "Acelerar la transmisión de datos",
            b: "Proporcionar direcciones IP a los dispositivos",
            c: "Controlar el acceso a la red y protegerla de amenazas externas",
            d: "Comprimir datos para ahorrar ancho de banda",
            correct: "c",
            explanation: "Un firewall es un sistema de seguridad que controla el tráfico de red entrante y saliente, protegiendo la red de accesos no autorizados y otras amenazas."
        },
        {
            question: "15. ¿Qué caracteriza a la topología de red en estrella?",
            a: "Todos los dispositivos se conectan directamente entre sí",
            b: "Hay un dispositivo central al que se conectan todos los demás",
            c: "Los dispositivos se conectan en un círculo sin un punto central",
            d: "La red se extiende linealmente conectando cada dispositivo con el siguiente",
            correct: "b",
            explanation: "En la topología de red en estrella, todos los dispositivos se conectan a un punto central, como un router o switch, facilitando la gestión y el mantenimiento."
        },
        {
            question: "16. ¿Qué es un protocolo de enrutamiento dinámico en redes?",
            a: "Un software que controla el tráfico de datos en la red",
            b: "Una herramienta para asignar direcciones IP estáticas",
            c: "Un método para distribuir información de enrutamiento entre routers",
            d: "Un dispositivo que conecta diferentes segmentos de red",
            correct: "c",
            explanation: "Un protocolo de enrutamiento dinámico distribuye automáticamente información de enrutamiento entre routers para ajustar las rutas según las condiciones de la red."
        },
        {
            question: "17. ¿Qué función tiene el protocolo DHCP en redes?",
            a: "Cifrar la comunicación entre dispositivos",
            b: "Asignar direcciones IP dinámicamente a los dispositivos en la red",
            c: "Controlar el flujo de datos en la capa de transporte",
            d: "Establecer conexiones seguras tipo VPN",
            correct: "b",
            explanation: "El protocolo DHCP (Dynamic Host Configuration Protocol) asigna direcciones IP dinámicamente a los dispositivos en una red, facilitando la administración de direcciones."
        },
        {
            question: "18. ¿En qué consiste la NAT (Network Address Translation) en redes?",
            a: "Encriptar los datos que se transmiten a través de la red",
            b: "Comprimir los datos para ahorrar ancho de banda",
            c: "Traducir direcciones IP privadas a direcciones IP públicas",
            d: "Asignar múltiples direcciones IP a un solo dispositivo",
            correct: "c",
            explanation: "La NAT es un método que permite a múltiples dispositivos en una red local compartir una única dirección IP pública para acceder a Internet."
        },
        {
            question: "19. ¿Qué es un dominio en el contexto de redes de Internet?",
            a: "Un dispositivo que controla el acceso a una red local",
            b: "Un software para la gestión del tráfico de red",
            c: "Una parte de una dirección IP que identifica una red específica",
            d: "Un nombre único asignado a una entidad en Internet",
            correct: "d",
            explanation: "Un dominio es un nombre único asignado a una entidad en Internet, como una página web, que facilita su localización y acceso."
        },
        {
            question: "20. ¿Cuál es el propósito del cifrado en la seguridad de redes?",
            a: "Aumentar la velocidad de transmisión de datos",
            b: "Reducir el tamaño de los paquetes de datos",
            c: "Proteger la integridad y privacidad de los datos transmitidos",
            d: "Asignar direcciones IP a los dispositivos",
            correct: "c",
            explanation: "El cifrado es una técnica de seguridad utilizada para proteger la integridad y privacidad de los datos transmitidos a través de una red."
        },
        {
            question: "21. ¿Cuál es el objetivo principal de la segmentación en la transmisión de datos?",
            a: "Aumentar la velocidad de la red",
            b: "Dividir los datos en segmentos más manejables para su transmisión eficiente",
            c: "Reducir el tamaño total de los datos transmitidos",
            d: "Cifrar los datos para mayor seguridad",
            correct: "b",
            explanation: "La segmentación en la transmisión de datos implica dividir los datos en segmentos más pequeños, lo que facilita su manejo y transmisión eficiente a través de la red."
        },
        {
            question: "22. ¿Qué es una VPN en el contexto de redes?",
            a: "Un protocolo para la asignación de direcciones IP",
            b: "Un dispositivo para aumentar la velocidad de la red",
            c: "Una red virtual que proporciona una conexión segura y privada a través de una red pública",
            d: "Un software para monitorear el tráfico de red",
            correct: "c",
            explanation: "Una VPN (Red Privada Virtual) es una tecnología que crea una conexión segura y privada a través de una red pública, como Internet."
        },
        {
            question: "23. ¿Qué representa el modelo cliente-servidor en programación de redes?",
            a: "Una forma de asignar direcciones IP a los dispositivos",
            b: "Un tipo de cableado para redes físicas",
            c: "Una arquitectura donde múltiples clientes solicitan servicios a un servidor",
            d: "Un protocolo de seguridad para transacciones en línea",
            correct: "c",
            explanation: "El modelo cliente-servidor es una arquitectura de red en la que múltiples clientes (usuarios) solicitan y reciben servicios de un servidor centralizado."
        },
        {
            question: "24. ¿Cuál es la función de un switch en una red?",
            a: "Conectar múltiples dispositivos para compartir una única dirección IP",
            b: "Dirigir los paquetes de datos a sus destinos específicos dentro de una red",
            c: "Cifrar los datos transmitidos en la red",
            d: "Asignar dinámicamente direcciones IP a los dispositivos",
            correct: "b",
            explanation: "Un switch es un dispositivo de red que conecta varios dispositivos y dirige los paquetes de datos a sus destinos específicos dentro de una red local (LAN)."
        },
        {
            question: "25. ¿En qué se diferencia un router de un modem?",
            a: "Un router asigna direcciones IP, mientras que un modem no",
            b: "Un modem conecta una red a Internet, mientras que un router conecta múltiples dispositivos en una red local",
            c: "Un router es un dispositivo de almacenamiento en red",
            d: "Un modem es un tipo de firewall para la seguridad de la red",
            correct: "b",
            explanation: "La principal diferencia es que un modem conecta una red con Internet, proporcionando acceso a redes externas, mientras que un router conecta múltiples dispositivos en una red local y gestiona el tráfico entre ellos."
        },
        {
            question: "26. ¿Qué es un protocolo de control de congestión en redes?",
            a: "Un dispositivo para optimizar la velocidad de la red",
            b: "Una técnica para reducir el tamaño de los paquetes de datos",
            c: "Un conjunto de algoritmos para prevenir y controlar la sobrecarga de la red",
            d: "Un software para monitorizar el tráfico de Internet",
            correct: "c",
            explanation: "Los protocolos de control de congestión en redes son conjuntos de algoritmos diseñados para prevenir y controlar la congestión de la red, asegurando así una transmisión de datos eficiente."
        },
        {
            question: "27. ¿Cuál es la función de las tablas de enrutamiento en un router?",
            a: "Almacenar contraseñas para la seguridad de la red",
            b: "Mantener un registro de las direcciones IP asignadas",
            c: "Listar las rutas disponibles para enviar paquetes de datos",
            d: "Controlar el acceso a Internet de los dispositivos conectados",
            correct: "c",
            explanation: "Las tablas de enrutamiento en un router contienen información sobre las rutas disponibles a través de la red para enviar paquetes de datos a sus destinos."
        },
        {
            question: "28. ¿Qué caracteriza a la topología de red en malla?",
            a: "Un único dispositivo central al que se conectan todos los demás",
            b: "Una conexión directa entre cada par de dispositivos en la red",
            c: "Una estructura lineal donde cada dispositivo se conecta con dos vecinos",
            d: "Un diseño donde todos los dispositivos se conectan en un círculo",
            correct: "b",
            explanation: "La topología de red en malla se caracteriza por tener una conexión directa entre cada par de dispositivos, proporcionando múltiples rutas para la transmisión de datos."
        },
        {
            question: "29. ¿En qué consiste el balanceo de carga en redes?",
            a: "Repartir el tráfico de datos equitativamente entre los servidores",
            b: "Reducir el tamaño de los paquetes de datos para una transmisión más rápida",
            c: "Asignar dinámicamente direcciones IP para equilibrar la red",
            d: "Cifrar los datos transmitidos para distribuir la carga de seguridad",
            correct: "a",
            explanation: "El balanceo de carga en redes implica distribuir el tráfico de datos de manera equitativa entre varios servidores para optimizar recursos y prevenir sobrecargas."
        },
        {
            question: "30. ¿Qué es una dirección IP estática?",
            a: "Una dirección que cambia automáticamente cada cierto tiempo",
            b: "Una dirección asignada manualmente a un dispositivo, que no cambia",
            c: "Una dirección que identifica a los routers únicamente",
            d: "Una dirección única asignada a cada paquete de datos en la red",
            correct: "b",
            explanation: "Una dirección IP estática es una dirección de Internet asignada manualmente a un dispositivo específico en una red y que no cambia automáticamente."
        },
        {
            question: "31. ¿Qué es un ataque de denegación de servicio (DDoS) en el contexto de seguridad de redes?",
            a: "Un intento de acceder a datos privados en una red",
            b: "Una técnica para encriptar el tráfico de red",
            c: "Un ataque que busca sobrecargar un servidor o red para que no esté disponible",
            d: "Un protocolo para asegurar la comunicación en una red",
            correct: "c",
            explanation: "Un ataque de denegación de servicio (DDoS) busca sobrecargar un servidor o red con tráfico malicioso, con el objetivo de hacer que los servicios no estén disponibles para los usuarios legítimos."
        },
        {
            question: "32. ¿Cuál es el propósito del protocolo SMTP en el envío de correo electrónico?",
            a: "Encriptar los correos electrónicos para mayor seguridad",
            b: "Escanear correos electrónicos en busca de virus",
            c: "Rastrear la ubicación geográfica del remitente",
            d: "Transferir correos electrónicos desde el cliente al servidor de correo",
            correct: "d",
            explanation: "El protocolo SMTP (Simple Mail Transfer Protocol) se utiliza para transferir correos electrónicos desde el cliente de correo al servidor de correo saliente, facilitando su envío a través de Internet."
        },
        {
            question: "33. ¿Qué es un DNS en el contexto de redes?",
            a: "Una dirección IP única asignada a un dominio web",
            b: "Un protocolo de seguridad para navegación web",
            c: "Un servicio que traduce nombres de dominio en direcciones IP",
            d: "Una herramienta para medir la velocidad de la red",
            correct: "c",
            explanation: "Un DNS (Domain Name System) es un servicio que traduce nombres de dominio legibles por humanos en direcciones IP utilizadas por las máquinas para localizar recursos en Internet."
        },
        {
            question: "34. ¿Cuál es el propósito del protocolo HTTP en la navegación web?",
            a: "Encriptar las conexiones entre el navegador y el servidor web",
            b: "Transferir páginas web y recursos desde el servidor al navegador",
            c: "Gestionar el correo electrónico en línea",
            d: "Controlar el acceso a sitios web restringidos",
            correct: "b",
            explanation: "El protocolo HTTP (Hypertext Transfer Protocol) se utiliza para transferir páginas web y recursos desde el servidor web al navegador del usuario durante la navegación en la web."
        },
        {
            question: "35. ¿En qué consiste la autenticación de dos factores (2FA) en seguridad informática?",
            a: "Usar dos navegadores diferentes para acceder a una cuenta",
            b: "Requerir dos contraseñas diferentes para el inicio de sesión",
            c: "Utilizar dos dispositivos móviles para acceder a una red",
            d: "Combinar dos métodos de autenticación diferentes para verificar la identidad del usuario",
            correct: "d",
            explanation: "La autenticación de dos factores (2FA) consiste en combinar dos métodos de autenticación diferentes, como una contraseña y un código enviado al teléfono móvil, para verificar la identidad del usuario y mejorar la seguridad."
        },
        {
            question: "36. ¿Cuál es el propósito de un sistema de gestión de bases de datos (DBMS) en programación?",
            a: "Controlar el acceso a Internet de los dispositivos",
            b: "Administrar y organizar eficientemente los datos en una base de datos",
            c: "Optimizar el rendimiento de la tarjeta de red",
            d: "Asignar direcciones IP estáticas a los dispositivos",
            correct: "b",
            explanation: "Un sistema de gestión de bases de datos (DBMS) se utiliza para administrar y organizar eficientemente los datos en una base de datos, facilitando su acceso y manipulación."
        },
        {
            question: "37. ¿Qué es un bucle 'for' en programación?",
            a: "Una estructura de control que repite un bloque de código mientras una condición sea verdadera",
            b: "Un tipo de variable que almacena números enteros",
            c: "Un dispositivo para la transmisión inalámbrica de datos",
            d: "Una función que calcula la raíz cuadrada de un número",
            correct: "a",
            explanation: "Un bucle 'for' en programación es una estructura de control que repite un bloque de código un número específico de veces o mientras una condición sea verdadera."
        },
        {
            question: "38. ¿Cuál es la función principal de un servidor web en Internet?",
            a: "Controlar el tráfico de datos en la red",
            b: "Administrar cuentas de correo electrónico",
            c: "Almacenar archivos y servir páginas web a los clientes",
            d: "Proporcionar direcciones IP a los dispositivos",
            correct: "c",
            explanation: "Un servidor web en Internet almacena archivos y sirve páginas web a los clientes que las solicitan, permitiendo que los sitios web sean accesibles en línea."
        },
        {
            question: "39. ¿Qué es un lenguaje de programación orientado a objetos?",
            a: "Un lenguaje que solo permite escribir código orientado a objetos",
            b: "Un lenguaje que se centra en la programación de juegos",
            c: "Un lenguaje que utiliza objetos y clases para modelar el mundo real en el código",
            d: "Un lenguaje diseñado exclusivamente para la programación web",
            correct: "c",
            explanation: "Un lenguaje de programación orientado a objetos utiliza objetos y clases para modelar el mundo real en el código, facilitando la creación de programas basados en objetos y su reutilización."
        },
        {
            question: "40. ¿Cuál es el propósito de un controlador de versión (VCS) en programación?",
            a: "Administrar el acceso a la red de dispositivos",
            b: "Optimizar el rendimiento de la tarjeta gráfica",
            c: "Controlar y registrar cambios en el código fuente de un proyecto de software",
            d: "Asignar nombres de dominio a direcciones IP",
            correct: "c",
            explanation: "Un controlador de versión (VCS) se utiliza para controlar y registrar cambios en el código fuente de un proyecto de software, facilitando la colaboración y el seguimiento de versiones."
        },
        {
            question: "41. ¿Cuál es el propósito principal de un sistema operativo en una computadora?",
            a: "Controlar la velocidad de la CPU",
            b: "Administrar y coordinar los recursos de hardware y software",
            c: "Gestionar el acceso a Internet",
            d: "Realizar copias de seguridad de los datos",
            correct: "b",
            explanation: "El propósito principal de un sistema operativo es administrar y coordinar los recursos de hardware y software de una computadora para permitir que los programas se ejecuten de manera eficiente."
        },
        {
            question: "42. ¿Qué es el lenguaje de programación Python?",
            a: "Un lenguaje diseñado exclusivamente para la programación web",
            b: "Un lenguaje orientado a objetos utilizado en la inteligencia artificial",
            c: "Un lenguaje de programación de alto nivel conocido por su sintaxis clara y legible",
            d: "Un lenguaje de programación para sistemas embebidos",
            correct: "c",
            explanation: "Python es un lenguaje de programación de alto nivel conocido por su sintaxis clara y legible, ampliamente utilizado en diversos campos de desarrollo de software."
        },
        {
            question: "43. ¿Qué es un algoritmo de ordenamiento en programación?",
            a: "Un programa que verifica la validez de una dirección IP",
            b: "Una técnica para organizar datos en una secuencia específica",
            c: "Un protocolo de seguridad para transacciones en línea",
            d: "Un lenguaje de programación orientado a objetos",
            correct: "b",
            explanation: "Un algoritmo de ordenamiento en programación es una técnica utilizada para organizar datos en una secuencia específica, como ordenar elementos en una lista de manera ascendente o descendente."
        },
        {
            question: "44. ¿Qué es la programación concurrente en informática?",
            a: "La programación de videojuegos en línea",
            b: "El desarrollo de aplicaciones móviles",
            c: "La escritura de código que se ejecuta de manera simultánea y controlada por múltiples hilos",
            d: "Un enfoque para la optimización de bases de datos",
            correct: "c",
            explanation: "La programación concurrente en informática se refiere a la escritura de código que se ejecuta de manera simultánea y controlada por múltiples hilos, lo que permite una mayor eficiencia en la ejecución de tareas."
        },
        {
            question: "45. ¿Cuál es el propósito de un firewall en la seguridad de redes?",
            a: "Optimizar el rendimiento de la memoria RAM",
            b: "Controlar el acceso a sitios web restringidos",
            c: "Proteger una red al filtrar el tráfico no autorizado",
            d: "Administrar el registro de eventos del sistema",
            correct: "c",
            explanation: "Un firewall en la seguridad de redes tiene como propósito proteger una red al filtrar el tráfico no autorizado, controlando qué datos pueden ingresar o salir de la red."
        },
        {
            question: "46. ¿Qué es un algoritmo de búsqueda en programación?",
            a: "Un programa que protege contra virus y malware",
            b: "Una técnica para organizar datos en una secuencia específica",
            c: "Una instrucción utilizada en la programación orientada a objetos",
            d: "Una técnica para encontrar un elemento específico en una colección de datos",
            correct: "d",
            explanation: "Un algoritmo de búsqueda en programación es una técnica utilizada para encontrar un elemento específico en una colección de datos, como una lista o un arreglo."
        },
        {
            question: "47. ¿Qué es un IDE (Entorno de Desarrollo Integrado) en programación?",
            a: "Un dispositivo para la transmisión inalámbrica de datos",
            b: "Un lenguaje de programación específico para videojuegos",
            c: "Una herramienta que proporciona un conjunto de utilidades para facilitar el desarrollo de software",
            d: "Un protocolo para la comunicación en redes",
            correct: "c",
            explanation: "Un IDE (Entorno de Desarrollo Integrado) es una herramienta que proporciona un conjunto de utilidades, como un editor de código y un depurador, para facilitar el desarrollo de software en programación."
        },
        {
            question: "48. ¿Cuál es el propósito de un sistema de gestión de versiones (VCS) en programación?",
            a: "Controlar el tráfico de datos en la red",
            b: "Administrar y coordinar los recursos de hardware y software",
            c: "Controlar y registrar cambios en el código fuente de un proyecto de software",
            d: "Asignar direcciones IP estáticas a los dispositivos",
            correct: "c",
            explanation: "Un sistema de gestión de versiones (VCS) se utiliza para controlar y registrar cambios en el código fuente de un proyecto de software, facilitando la colaboración y el seguimiento de versiones."
        },
        {
            question: "49. ¿Qué es un lenguaje de marcado en programación?",
            a: "Un lenguaje utilizado para crear gráficos en 3D",
            b: "Un lenguaje orientado a objetos para el desarrollo de aplicaciones móviles",
            c: "Un lenguaje que utiliza etiquetas para dar formato y estructura a documentos",
            d: "Un lenguaje para la programación de sistemas operativos",
            correct: "c",
            explanation: "Un lenguaje de marcado en programación es un lenguaje que utiliza etiquetas para dar formato y estructura a documentos, como HTML utilizado en la creación de páginas web."
        },
        {
            question: "50. ¿Cuál es el propósito de una API (Interfaz de Programación de Aplicaciones) en desarrollo de software?",
            a: "Administrar el registro de eventos del sistema",
            b: "Optimizar el rendimiento de la memoria RAM",
            c: "Permitir la comunicación y la interacción entre diferentes aplicaciones y servicios",
            d: "Controlar el acceso a Internet de los dispositivos",
            correct: "c",
            explanation: "Una API (Interfaz de Programación de Aplicaciones) en desarrollo de software permite la comunicación y la interacción entre diferentes aplicaciones y servicios, facilitando la integración de funcionalidades."
        }
    ];




    const quizForm = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');

    function loadQuiz() {
        const quizQuestions = quizData.map((q, index) => {
            return `
            <div class="question" id="question-${index}">${q.question}</div>
            <ul class="options">
                <li><input type="radio" name="question${index}" value="a"> ${q.a}</li>
                <li><input type="radio" name="question${index}" value="b"> ${q.b}</li>
                <li><input type="radio" name="question${index}" value="c"> ${q.c}</li>
                <li><input type="radio" name="question${index}" value="d"> ${q.d}</li>
            </ul>
        `;
        }).join('');
        quizForm.innerHTML = quizQuestions;
    }

    function submitQuiz() {
        const answers = quizData.map((_, index) => {
            return document.querySelector(`input[name="question${index}"]:checked`)?.value;
        });

        let score = 0;
        let resultsHTML = '';

        answers.forEach((answer, index) => {
            const questionElement = document.getElementById(`question-${index}`);
            if (answer === quizData[index].correct) {
                score++;
                resultsHTML += `<p><a href="#question-${index}"><b>Pregunta ${index + 1}: correcta.</b></a> ${quizData[index].explanation}</p>`;
                questionElement.classList.remove('incorrect');
            } else {
                resultsHTML += `<p><a href="#question-${index}" class="incorrect"><b>Pregunta ${index + 1}: INCORRECTA.</b></a> La respuesta correcta era '${quizData[index].correct}'. ${quizData[index].explanation}</p>`;
                questionElement.classList.add('incorrect');
            }
        });

        const finalScore = (score / quizData.length) * 10;
        resultsHTML = `<h2>Tu puntuación es: ${finalScore.toFixed(2)} / 10</h2>` + resultsHTML;

        resultDiv.innerHTML = resultsHTML;
    }

    window.submitQuiz = submitQuiz; // Hacer la función accesible globalmente
    loadQuiz();
});