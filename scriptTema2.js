document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "1. ¿Qué permite la programación multihilo?",
            a: "Ejecutar un solo hilo por proceso",
            b: "Ejecutar varios hilos en un solo hilo",
            c: "Ejecutar varios hilos simultáneamente, manejando diferentes tareas",
            d: "Ejecutar varios procesos en un solo hilo",
            correct: "c",
            explanation: "La programación multihilo permite que dos o más partes de un programa se ejecuten simultáneamente, manejando diferentes tareas."
        },
        {
            question: "2. ¿Qué lenguaje de programación permite manejar programas con distintos hilos o 'threads'?",
            a: "Python",
            b: "Java",
            c: "C++",
            d: "JavaScript",
            correct: "b",
            explanation: "El lenguaje de programación Java permite manejar programas que tienen distintos hilos o 'threads'."
        },
        {
            question: "3. ¿Qué método en Java se utiliza para iniciar un proceso o tarea en programación multihilo?",
            a: "begin()",
            b: "execute()",
            c: "start()",
            d: "launch()",
            correct: "c",
            explanation: "El método 'start()' se utiliza en Java para iniciar un proceso o tarea en programación multihilo."
        },
        {
            question: "4. ¿Cuál es el propósito del método 'sleep(long)' en programación multihilo?",
            a: "Iniciar inmediatamente un hilo",
            b: "Detener la ejecución de un hilo temporalmente",
            c: "Finalizar un hilo",
            d: "Sincronizar hilos",
            correct: "b",
            explanation: "El método 'sleep(long)' se utiliza para pausar la ejecución de un hilo temporalmente por un número de milisegundos indicados."
        },
        {
            question: "5. ¿Qué indica el método 'isAlive()' en programación multihilo?",
            a: "Si un hilo ha finalizado su ejecución",
            b: "Si un hilo está esperando recursos",
            c: "Si un hilo está activo",
            d: "Si un hilo puede ser ejecutado",
            correct: "c",
            explanation: "El método 'isAlive()' se utiliza para conocer si un hilo está activo en programación multihilo."
        },
        {
            question: "6. ¿Qué se entiende por 'sincronización de hilos' en programación multihilo?",
            a: "Iniciar y terminar hilos al mismo tiempo",
            b: "Permitir que varios hilos compartan recursos sin conflictos",
            c: "Ejecutar hilos en un orden específico",
            d: "Todas las anteriores son correctas",
            correct: "b",
            explanation: "La sincronización de hilos se refiere a permitir que varios hilos compartan recursos de manera segura, evitando conflictos y problemas de acceso concurrente."
        },
        {
            question: "7. ¿Cuál es la función principal de la palabra clave 'synchronized' en Java?",
            a: "Crear un nuevo hilo",
            b: "Detener un hilo temporalmente",
            c: "Controlar el acceso a un método o bloque por parte de los hilos",
            d: "Notificar a los hilos sobre cambios en un objeto",
            correct: "c",
            explanation: "La palabra clave 'synchronized' en Java se utiliza para controlar el acceso a un método o bloque de código, asegurando que solo un hilo pueda acceder a él en un momento dado."
        },
        {
            question: "8. ¿Qué representa el método 'wait()' en programación multihilo?",
            a: "Inicia un hilo después de un tiempo de espera",
            b: "Hace que un hilo espere hasta que otro hilo le notifique",
            c: "Pausa un hilo indefinidamente",
            d: "Termina la ejecución de un hilo",
            correct: "b",
            explanation: "El método 'wait()' se utiliza para hacer que un hilo espere hasta que otro hilo invoque el método 'notify()' o 'notifyAll()' sobre el mismo objeto."
        },
        {
            question: "9. ¿Qué es un 'lock' o cerrojo en programación multihilo?",
            a: "Una variable que guarda el estado de un hilo",
            b: "Un método para pausar hilos",
            c: "Un mecanismo para controlar el acceso a un recurso compartido",
            d: "Un tipo de error cuando un hilo no puede ejecutarse",
            correct: "c",
            explanation: "Un 'lock' o cerrojo es un mecanismo utilizado en programación multihilo para controlar el acceso a un recurso compartido, asegurando que solo un hilo pueda acceder a él a la vez."
        },
        {
            question: "10. ¿Qué problema puede surgir al usar la sincronización de hilos en Java?",
            a: "Reducción en la eficiencia del programa",
            b: "Imposibilidad de crear nuevos hilos",
            c: "Cambios automáticos en el código del programa",
            d: "Todas las anteriores son incorrectas",
            correct: "a",
            explanation: "Al usar la sincronización de hilos en Java, puede surgir una reducción en la eficiencia del programa debido al tiempo necesario para gestionar el acceso a los recursos compartidos."
        },
        {
            question: "11. ¿Qué método se utiliza en Java para notificar a un hilo en espera?",
            a: "alert()",
            b: "signal()",
            c: "notify()",
            d: "wake()",
            correct: "c",
            explanation: "El método 'notify()' se utiliza en Java para notificar a un hilo que está esperando, permitiéndole continuar su ejecución si las condiciones son adecuadas."
        },
        {
            question: "12. ¿En qué consiste el 'problema del productor-consumidor' en programación multihilo?",
            a: "Sincronizar la producción y consumo de datos entre hilos",
            b: "Intercambiar datos entre hilos sin sincronización",
            c: "Producir datos más rápido de lo que se consumen",
            d: "Ninguna de las anteriores es correcta",
            correct: "a",
            explanation: "El 'problema del productor-consumidor' en programación multihilo se refiere a la necesidad de sincronizar la producción y consumo de datos entre dos o más hilos."
        },
        {
            question: "13. ¿Qué caracteriza al 'interbloqueo' o 'deadlock' en programación multihilo?",
            a: "La imposibilidad de iniciar nuevos hilos",
            b: "La terminación de todos los hilos en ejecución",
            c: "La situación en la que dos o más hilos se bloquean mutuamente esperando recursos",
            d: "Ninguna de las anteriores es correcta",
            correct: "c",
            explanation: "El 'interbloqueo' o 'deadlock' ocurre cuando dos o más hilos en ejecución se bloquean mutuamente, esperando por recursos que los otros hilos tienen."
        },
        {
            question: "14. ¿Cómo se puede resolver un 'deadlock' en programación multihilo?",
            a: "Incrementando la velocidad de ejecución de los hilos",
            b: "Utilizando algoritmos de prevención o detección de deadlocks",
            c: "Creando más hilos",
            d: "Todas las anteriores son incorrectas",
            correct: "b",
            explanation: "Los 'deadlocks' en programación multihilo se pueden resolver mediante el uso de algoritmos de prevención o detección, que manejan el uso de recursos para evitar situaciones de bloqueo mutuo."
        },
        {
            question: "15. ¿Qué es un 'hilo daemon' en Java?",
            a: "Un hilo que corre en segundo plano y no impide la terminación del programa",
            b: "Un hilo con máxima prioridad en la ejecución",
            c: "Un hilo que controla otros hilos",
            d: "Un hilo que siempre se ejecuta en primer plano",
            correct: "a",
            explanation: "Un 'hilo daemon' en Java es un hilo de segundo plano que no impide la terminación del programa cuando todos los hilos no-daemon han terminado su ejecución."
        },
        {
            question: "16. ¿Cuál es la diferencia principal entre un hilo 'daemon' y un hilo 'no-daemon' en Java?",
            a: "La prioridad de ejecución",
            b: "El tipo de tareas que pueden realizar",
            c: "La capacidad de impedir la terminación del programa",
            d: "Todas las anteriores son correctas",
            correct: "c",
            explanation: "La diferencia principal entre un hilo 'daemon' y un 'no-daemon' en Java es que un hilo 'daemon' no impide la terminación del programa cuando todos los hilos 'no-daemon' han finalizado."
        },
        {
            question: "17. ¿Cuál es el propósito de la clase 'ThreadGroup' en Java?",
            a: "Agrupar hilos para facilitar su gestión",
            b: "Aumentar la prioridad de los hilos",
            c: "Crear nuevos hilos",
            d: "Sincronizar la ejecución de hilos",
            correct: "a",
            explanation: "La clase 'ThreadGroup' en Java se utiliza para agrupar hilos, lo que facilita su gestión conjunta."
        },
        {
            question: "18. ¿Qué caracteriza a la 'programación paralela'?",
            a: "Ejecución de múltiples hilos en un único procesador",
            b: "Uso de varios procesadores para ejecutar diferentes partes de un programa simultáneamente",
            c: "Ejecución secuencial de tareas en un solo hilo",
            d: "Ninguna de las anteriores es correcta",
            correct: "b",
            explanation: "La programación paralela se caracteriza por el uso de varios procesadores para ejecutar diferentes partes de un programa de manera simultánea."
        },
        {
            question: "19. ¿Qué es un 'futuro' en programación asincrónica?",
            a: "Una promesa de que un resultado estará disponible en el futuro",
            b: "Un tipo de variable para almacenar datos",
            c: "Una herramienta para sincronizar hilos",
            d: "Un método para terminar hilos",
            correct: "a",
            explanation: "En programación asincrónica, un 'futuro' es un objeto que actúa como una promesa de que un resultado o dato estará disponible en algún momento futuro."
        },
        {
            question: "20. ¿Qué problema se soluciona con el uso de 'executor' en Java?",
            a: "Gestión ineficiente de la creación y terminación de hilos",
            b: "Interbloqueo entre hilos",
            c: "Falta de sincronización en el acceso a recursos",
            d: "Todas las anteriores son correctas",
            correct: "a",
            explanation: "El uso de 'executor' en Java ayuda a solucionar problemas relacionados con la gestión ineficiente de la creación y terminación de hilos, ofreciendo un marco de trabajo para la ejecución de tareas en hilos."
        },
        {
            question: "21. ¿Qué garantiza el uso del bloque 'synchronized' en Java?",
            a: "Que un hilo se ejecutará más rápido",
            b: "Que sólo un hilo puede acceder al recurso bloqueado en un momento dado",
            c: "Que todos los hilos se ejecutarán en orden",
            d: "Ninguna de las anteriores es correcta",
            correct: "b",
            explanation: "El uso del bloque 'synchronized' en Java garantiza que sólo un hilo puede acceder al recurso bloqueado en un momento dado, evitando conflictos de acceso concurrente."
        },
        {
            question: "22. ¿Qué es un 'pool de hilos' en Java?",
            a: "Un grupo de hilos que se ejecutan en paralelo",
            b: "Una colección de hilos para reutilización",
            c: "Un método para crear nuevos hilos",
            d: "Un sistema para priorizar hilos",
            correct: "b",
            explanation: "Un 'pool de hilos' en Java es una colección de hilos ya creados que están disponibles para ser reutilizados, mejorando la eficiencia en la gestión de recursos."
        },
        {
            question: "23. ¿Cuál es el objetivo principal de la interfaz 'Callable' en Java?",
            a: "Interrumpir la ejecución de un hilo",
            b: "Ejecutar un hilo con prioridad alta",
            c: "Devolver un resultado al finalizar la ejecución de un hilo",
            d: "Crear un nuevo grupo de hilos",
            correct: "c",
            explanation: "La interfaz 'Callable' en Java se utiliza para ejecutar tareas en un hilo, permitiendo devolver un resultado una vez que la tarea ha finalizado."
        },
        {
            question: "24. ¿Qué tipo de operación se puede realizar con el método 'join()' en programación multihilo?",
            a: "Detener todos los hilos excepto uno",
            b: "Iniciar todos los hilos de un grupo simultáneamente",
            c: "Esperar a que un hilo específico termine antes de continuar",
            d: "Intercambiar datos entre dos hilos",
            correct: "c",
            explanation: "El método 'join()' permite que un hilo espere a que otro hilo específico termine su ejecución antes de continuar con su propia ejecución."
        },
        {
            question: "25. ¿Qué sucede cuando se llama al método 'interrupt()' en un hilo en Java?",
            a: "El hilo se detiene inmediatamente",
            b: "El hilo ignora todas las solicitudes de sincronización",
            c: "El hilo recibe una solicitud de interrupción",
            d: "Todas las anteriores son incorrectas",
            correct: "c",
            explanation: "Cuando se llama al método 'interrupt()' en un hilo en Java, el hilo recibe una solicitud de interrupción, que puede utilizar para decidir cómo y cuándo detener su ejecución."
        }     ,
        {
            question: "26. ¿Cuál es la finalidad de la palabra clave 'volatile' en Java?",
            a: "Hacer que un hilo se ejecute más rápido",
            b: "Indicar que una variable puede ser modificada por diferentes hilos",
            c: "Prevenir la sincronización de hilos",
            d: "Todas las anteriores son incorrectas",
            correct: "b",
            explanation: "La palabra clave 'volatile' en Java se utiliza para indicar que una variable puede ser modificada por diferentes hilos, asegurando que el valor de la variable sea leído desde la memoria principal y no desde la caché del hilo."
        },
        {
            question: "27. ¿Qué es una 'barrier' en programación multihilo?",
            a: "Un error común en la sincronización de hilos",
            b: "Un punto de sincronización donde los hilos se detienen hasta que todos alcanzan ese punto",
            c: "Una técnica para dividir tareas entre hilos",
            d: "Un método para priorizar hilos",
            correct: "b",
            explanation: "Una 'barrier' en programación multihilo es un punto de sincronización donde varios hilos se detienen hasta que todos los hilos han alcanzado ese punto."
        },
        {
            question: "28. ¿En qué se diferencia la programación concurrente de la programación paralela?",
            a: "La programación concurrente no usa múltiples hilos",
            b: "La programación paralela se enfoca en la ejecución simultánea de tareas en múltiples núcleos de CPU",
            c: "La programación concurrente siempre implica interbloqueos",
            d: "Todas las anteriores son incorrectas",
            correct: "b",
            explanation: "La diferencia principal es que la programación paralela se enfoca en la ejecución simultánea de tareas en múltiples núcleos de CPU, mientras que la programación concurrente puede involucrar múltiples hilos en un solo núcleo."
        },
        {
            question: "29. ¿Qué caracteriza a un 'hilo de usuario' en contraste con un 'hilo del sistema'?",
            a: "Ejecuta tareas de bajo nivel del sistema operativo",
            b: "Es creado y gestionado por el usuario del programa",
            c: "Tiene una prioridad más alta",
            d: "Todas las anteriores son incorrectas",
            correct: "b",
            explanation: "Un 'hilo de usuario' se caracteriza por ser creado y gestionado por el usuario del programa, en contraste con un 'hilo del sistema', que es utilizado por el sistema operativo para tareas de bajo nivel."
        },
        {
            question: "30. ¿Qué método en Java permite a un hilo ceder su tiempo de ejecución a otros hilos?",
            a: "yield()",
            b: "giveUp()",
            c: "stop()",
            d: "wait()",
            correct: "a",
            explanation: "El método 'yield()' en Java permite a un hilo ceder voluntariamente su tiempo de ejecución actual, dando la oportunidad a otros hilos de ejecutarse."
        },
        {
            question: "31. ¿Qué ventaja ofrece el uso de 'futures' y 'promises' en programación asincrónica?",
            a: "Reducción del uso de memoria",
            b: "Prevención de 'deadlocks'",
            c: "Facilitar la gestión de resultados de tareas asincrónicas",
            d: "Aumento de la velocidad de ejecución del programa",
            correct: "c",
            explanation: "Los 'futures' y 'promises' en programación asincrónica facilitan la gestión de los resultados obtenidos de tareas asincrónicas, permitiendo un manejo más eficiente y organizado de las respuestas."
        },
        {
            question: "32. ¿Qué se entiende por 'task parallelism' en programación paralela?",
            a: "Ejecución de varias tareas en secuencia",
            b: "División de una tarea en subprocesos que se ejecutan en paralelo",
            c: "Ejecución de tareas independientes en paralelo",
            d: "Ninguna de las anteriores es correcta",
            correct: "c",
            explanation: "'Task parallelism' se refiere a la ejecución de tareas independientes de manera paralela, aprovechando múltiples procesadores o núcleos para mejorar la eficiencia y velocidad de ejecución."
        },
        {
            question: "33. ¿Cuál es una característica principal de los 'hilos verdes' en Java?",
            a: "Son gestionados directamente por el sistema operativo",
            b: "Son hilos que consumen menos recursos",
            c: "Son simulados por la Máquina Virtual de Java",
            d: "Son hilos que sólo se ejecutan en procesadores específicos",
            correct: "c",
            explanation: "Los 'hilos verdes' en Java son hilos que son simulados y gestionados por la Máquina Virtual de Java, en lugar de ser gestionados directamente por el sistema operativo."
        },
        {
            question: "34. ¿Qué problema aborda el 'Thread Pool' en Java?",
            a: "Ineficiencia en la creación y destrucción frecuente de hilos",
            b: "Sincronización de hilos",
            c: "Interbloqueo entre hilos",
            d: "Todas las anteriores son correctas",
            correct: "a",
            explanation: "El 'Thread Pool' en Java aborda la ineficiencia causada por la creación y destrucción frecuente de hilos, al reutilizar un número fijo de hilos para ejecutar tareas."
        },
        {
            question: "35. ¿Qué es 'atomicidad' en el contexto de programación multihilo?",
            a: "La capacidad de un programa para ejecutarse en múltiples núcleos",
            b: "La división de tareas en partes más pequeñas",
            c: "La propiedad de una operación que se completa en su totalidad o no se realiza en absoluto",
            d: "Un método para sincronizar el acceso a variables",
            correct: "c",
            explanation: "La atomicidad se refiere a la propiedad de una operación que asegura que se completa en su totalidad o no se realiza en absoluto, siendo crucial en entornos multihilo para mantener la consistencia de datos."
        },
        {
            question: "36. ¿Qué técnica se utiliza para evitar el problema del productor-consumidor en programación multihilo?",
            a: "Incrementar la capacidad del buffer",
            b: "Utilizar variables atómicas para cada operación",
            c: "Aplicar métodos de sincronización como 'wait' y 'notify'",
            d: "Dividir las tareas de producción y consumo en diferentes hilos",
            correct: "c",
            explanation: "Para evitar el problema del productor-consumidor en programación multihilo, se aplican métodos de sincronización como 'wait' y 'notify', que controlan el acceso y la modificación del buffer compartido entre productores y consumidores."
        },
        {
            question: "37. ¿Cuál es el propósito del método 'join()' en la sincronización de hilos?",
            a: "Permitir que un hilo ejecute una tarea de forma exclusiva",
            b: "Detener la ejecución de todos los hilos excepto uno",
            c: "Esperar a que un hilo específico termine su ejecución",
            d: "Intercambiar datos entre hilos de manera segura",
            correct: "c",
            explanation: "El método 'join()' se utiliza en la sincronización de hilos para esperar a que un hilo específico termine su ejecución antes de que el hilo que llama a 'join()' continúe su proceso."
        },
        {
            question: "38. ¿Qué efecto tiene el método 'yield()' en la programación multihilo?",
            a: "Finaliza la ejecución de un hilo",
            b: "Indica al planificador que el hilo actual puede ceder su tiempo de CPU a otros hilos",
            c: "Bloquea el hilo hasta que se cumpla una condición específica",
            d: "Crea un nuevo hilo",
            correct: "b",
            explanation: "El método 'yield()' en la programación multihilo indica al planificador que el hilo actual está dispuesto a ceder su tiempo de CPU actual a otros hilos, permitiendo una distribución más equitativa del tiempo de procesamiento."
        },
        {
            question: "39. ¿En qué consiste el método 'wait()' en el contexto del modelo productor-consumidor?",
            a: "Inicia la producción de un elemento",
            b: "Detiene la producción hasta que el buffer esté lleno",
            c: "Espera a que haya espacio en el buffer para producir o consumir",
            d: "Notifica a todos los hilos cuando un elemento está listo",
            correct: "c",
            explanation: "En el contexto del modelo productor-consumidor, el método 'wait()' se usa para esperar hasta que haya espacio disponible en el buffer para producir un nuevo elemento o hasta que haya un elemento disponible para consumir."
        },
        {
            question: "40. ¿Qué es un 'buffer' en el modelo productor-consumidor?",
            a: "Un método para generar elementos",
            b: "Un espacio de almacenamiento donde los productores colocan elementos y los consumidores los toman",
            c: "Una variable que cuenta el número de elementos producidos",
            d: "Un conjunto de hilos encargados de la producción y consumo",
            correct: "b",
            explanation: "En el modelo productor-consumidor, un 'buffer' es un espacio de almacenamiento donde los productores depositan elementos y los consumidores los retiran, sirviendo como punto de intercambio entre ellos."
        },
        {
            question: "41. ¿Cómo se puede manejar la situación en la que un hilo espera indefinidamente debido a 'wait()' en Java?",
            a: "Utilizando un temporizador",
            b: "Llamando al método 'notify()' desde otro hilo",
            c: "Reiniciando el hilo",
            d: "Incrementando la prioridad del hilo",
            correct: "b",
            explanation: "La situación en la que un hilo espera indefinidamente debido al método 'wait()' se puede manejar llamando al método 'notify()' o 'notifyAll()' desde otro hilo para reanudar su ejecución."
        },
        {
            question: "42. ¿Qué representa el término 'starvation' en el contexto de la programación multihilo?",
            a: "Un hilo consume todos los recursos del sistema",
            b: "Un hilo no puede acceder a los recursos necesarios debido a la competencia con otros hilos",
            c: "Un hilo se termina inesperadamente",
            d: "Un hilo se ejecuta sin interrupciones",
            correct: "b",
            explanation: "'Starvation' ocurre cuando un hilo no puede acceder a los recursos necesarios para su ejecución debido a la competencia continua con otros hilos, quedando indefinidamente en espera."
        },
        {
            question: "43. ¿Qué técnica se emplea para prevenir 'starvation' en un sistema multihilo?",
            a: "Asignación de prioridades fijas a los hilos",
            b: "Utilización de algoritmos de planificación 'Round Robin'",
            c: "Limitación del número de hilos",
            d: "Aumento de la cantidad de recursos disponibles",
            correct: "b",
            explanation: "Para prevenir 'starvation', se puede emplear un algoritmo de planificación como 'Round Robin', que asegura que cada hilo reciba una porción equitativa de tiempo de CPU."
        },
        {
            question: "44. ¿Qué papel juegan los 'monitores' en la programación multihilo de Java?",
            a: "Controlar el acceso a recursos compartidos entre hilos",
            b: "Monitorizar el rendimiento del sistema",
            c: "Ejecutar hilos en segundo plano",
            d: "Gestionar la memoria utilizada por los hilos",
            correct: "a",
            explanation: "En Java, los 'monitores' juegan un papel crucial en la sincronización, controlando el acceso a recursos compartidos entre diferentes hilos para prevenir conflictos y asegurar la consistencia de datos."
        },
        {
            question: "45. ¿Cuál es una práctica común para manejar 'deadlocks' en programación multihilo?",
            a: "Evitar la espera indefinida mediante 'timeouts'",
            b: "Permitir que el sistema operativo resuelva el 'deadlock'",
            c: "Aumentar la cantidad de recursos disponibles",
            d: "Crear más hilos para distribuir la carga",
            correct: "a",
            explanation: "Una práctica común para manejar 'deadlocks' en programación multihilo es evitar la espera indefinida mediante el uso de 'timeouts', lo que permite liberar recursos si un hilo está esperando por demasiado tiempo."
        },
        {
            question: "46. ¿Qué método en Java permite a un hilo informar al planificador que puede ceder su tiempo de CPU?",
            a: "interrupt()",
            b: "yield()",
            c: "sleep()",
            d: "wait()",
            correct: "b",
            explanation: "El método 'yield()' en Java permite a un hilo informar al planificador que está dispuesto a ceder su tiempo de CPU actual a otros hilos."
        },
        {
            question: "47. ¿En qué consiste el método 'join()' en la programación multihilo?",
            a: "Permite a un hilo esperar hasta que otro hilo complete su ejecución",
            b: "Inicia la ejecución de un hilo",
            c: "Interrumpe la ejecución de un hilo",
            d: "Sincroniza dos o más hilos",
            correct: "a",
            explanation: "El método 'join()' en programación multihilo permite a un hilo esperar hasta que otro hilo complete su ejecución."
        },
        {
            question: "48. ¿Cuál es el principal desafío del modelo productor-consumidor en programación multihilo?",
            a: "Sincronizar la producción y el consumo para evitar condiciones de carrera",
            b: "Asegurar que el productor produzca a la misma velocidad que el consumidor consume",
            c: "Minimizar el uso de la CPU por los hilos productores y consumidores",
            d: "Evitar la creación de hilos adicionales",
            correct: "a",
            explanation: "El principal desafío en el modelo productor-consumidor en programación multihilo es sincronizar la producción y el consumo de elementos para evitar condiciones de carrera y asegurar una gestión eficiente del buffer compartido."
        },
        {
            question: "49. ¿Qué caracteriza al 'interbloqueo' o 'deadlock' en programación multihilo?",
            a: "Un hilo consume todos los recursos del sistema",
            b: "Todos los hilos entran en un ciclo infinito",
            c: "Dos o más hilos se bloquean mutuamente, esperando recursos que los otros poseen",
            d: "Un hilo se ejecuta sin permitir la ejecución de otros hilos",
            correct: "c",
            explanation: "El 'interbloqueo' o 'deadlock' se caracteriza por la situación en la que dos o más hilos se bloquean mutuamente, esperando recursos que los otros hilos poseen, sin poder avanzar en su ejecución."
        },
        {
            question: "50. ¿Qué técnica se utiliza para gestionar la ejecución concurrente de hilos en Java?",
            a: "Polimorfismo",
            b: "Herencia múltiple",
            c: "Sincronización mediante monitores",
            d: "Programación orientada a eventos",
            correct: "c",
            explanation: "En Java, la técnica de sincronización mediante monitores se utiliza para gestionar la ejecución concurrente de hilos, controlando el acceso a los recursos compartidos y evitando conflictos."
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