document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "1. ¿Qué es un proceso en el contexto de programación?",
            a: "Una secuencia de comandos",
            b: "Un programa en ejecución",
            c: "Un conjunto de datos",
            d: "Una función en un programa",
            correct: "b",
            explanation: "Un proceso se refiere a un programa que está siendo ejecutado."
        },
        {
            question: "2. ¿Qué representa un hilo en un proceso?",
            a: "Una operación de E/S",
            b: "Una secuencia de comandos",
            c: "Un punto de ejecución",
            d: "Un recurso del proceso",
            correct: "c",
            explanation: "Un hilo es un punto de ejecución dentro de un proceso."
        },
        {
            question: "3. ¿Qué significa que un proceso esté en estado 'Preparado'?",
            a: "Esperando ser eliminado",
            b: "En ejecución",
            c: "Esperando tiempo de CPU",
            d: "Siendo creado",
            correct: "c",
            explanation: "Un proceso está 'Preparado' cuando tiene los recursos y espera tiempo de CPU."
        },
        {
            question: "4. ¿Qué es el algoritmo 'Round Robin' en planificación de procesos?",
            a: "Asigna tareas según la prioridad",
            b: "Asigna CPU por orden de llegada",
            c: "Asigna CPU de manera rotativa",
            d: "Asigna tareas basadas en complejidad",
            correct: "c",
            explanation: "Round Robin asigna ciclos de CPU de manera rotativa a los procesos."
        },
        {
            question: "5. ¿Qué representa la transición A en el ciclo de vida de un proceso?",
            a: "De nuevo a preparado",
            b: "De ejecución a terminado",
            c: "De bloqueado a preparado",
            d: "De preparado a ejecución",
            correct: "a",
            explanation: "La transición A es cuando un proceso nuevo pasa a estado preparado."
        },
        {
            question: "6. ¿Qué es la 'exclusión mutua' en programación concurrente?",
            a: "Intercambio de datos entre procesos",
            b: "Prevención de acceso simultáneo a recursos",
            c: "Ejecución en paralelo de procesos",
            d: "Comunicación directa entre procesos",
            correct: "b",
            explanation: "La exclusión mutua evita que procesos accedan a un mismo recurso a la vez."
        },
        {
            question: "7. ¿Qué caracteriza a la programación paralela?",
            a: "Ejecución secuencial de tareas",
            b: "Ejecución simultánea de tareas",
            c: "Comunicación asincrónica entre tareas",
            d: "Independencia total entre tareas",
            correct: "b",
            explanation: "La programación paralela implica la ejecución simultánea de varias tareas."
        },
        {
            question: "8. ¿Qué modelo de la taxonomía de Flynn involucra múltiples flujos de datos en un solo flujo de instrucciones?",
            a: "SISD",
            b: "SIMD",
            c: "MISD",
            d: "MIMD",
            correct: "b",
            explanation: "El modelo SIMD usa varios flujos de datos en un único flujo de instrucciones."
        },
        {
            question: "9. ¿Qué mecanismo de creación de procesos describe la relación entre procesos padre e hijo?",
            a: "Estructura de árbol",
            b: "Ejecución secuencial",
            c: "Bucle de eventos",
            d: "Planificación FIFO",
            correct: "a",
            explanation: "La relación entre procesos padre e hijo se describe con una estructura de árbol en la creación de procesos."
        },
        {
            question: "10. ¿Qué servicio del sistema se utiliza para terminar la ejecución de un proceso por sí mismo?",
            a: "Abort",
            b: "Kill",
            c: "Exit",
            d: "End",
            correct: "c",
            explanation: "El servicio del sistema 'Exit' se utiliza para que un proceso termine su ejecución por sí mismo."
        },
        {
            question: "11. ¿Cuál es un mecanismo básico de comunicación entre procesos?",
            a: "Ejecución paralela",
            b: "Memoria compartida",
            c: "Algoritmo Round Robin",
            d: "Buffer temporal",
            correct: "b",
            explanation: "La memoria compartida es un mecanismo básico para la comunicación entre procesos."
        },
        {
            question: "12. ¿Qué tipo de comunicación entre procesos implica el uso de un buffer temporal?",
            a: "Síncrona",
            b: "Asíncrona",
            c: "Directa",
            d: "Indirecta",
            correct: "b",
            explanation: "La comunicación asíncrona entre procesos puede implicar el uso de un buffer temporal."
        },
        {
            question: "13. En la programación concurrente, ¿qué problema surge cuando varios procesos compiten por los mismos recursos?",
            a: "Exclusión mutua",
            b: "Bloqueo mutuo",
            c: "Interbloqueo",
            d: "Desincronización",
            correct: "a",
            explanation: "El problema de 'exclusión mutua' surge en la programación concurrente cuando varios procesos compiten por los mismos recursos."
        },
        {
            question: "14. ¿Qué caracteriza a los sistemas MIMD en la programación paralela?",
            a: "Un único flujo de datos",
            b: "Un único flujo de instrucciones",
            c: "Múltiples procesadores ejecutando distintas instrucciones",
            d: "Procesadores ejecutando un único conjunto de datos",
            correct: "c",
            explanation: "Los sistemas MIMD se caracterizan por tener varios procesadores ejecutando distintas instrucciones."
        },
        {
            question: "15. ¿Qué ventaja ofrece la programación distribuida en el desarrollo de sistemas?",
            a: "Mayor velocidad de ejecución",
            b: "Menor uso de recursos",
            c: "Escalabilidad y tolerancia a fallos",
            d: "Simplicidad en la integración de componentes",
            correct: "c",
            explanation: "La programación distribuida ofrece ventajas como escalabilidad y tolerancia a fallos en el desarrollo de sistemas."
        },
        {
            question: "15. ¿Qué es la 'programación concurrente'?",
            a: "Ejecución secuencial de tareas",
            b: "Procesamiento simultáneo de múltiples tareas",
            c: "Uso de un solo procesador para varias tareas",
            d: "Ejecución de tareas en un solo hilo",
            correct: "b",
            explanation: "La programación concurrente se refiere al procesamiento simultáneo de múltiples tareas."
        },
        {
            question: "16. ¿Cuál es el propósito principal de la 'programación distribuida'?",
            a: "Ejecutar tareas en un solo sistema",
            b: "Desarrollar sistemas distribuidos, escalables y tolerantes a fallos",
            c: "Aumentar la velocidad de un solo proceso",
            d: "Reducir el uso de recursos en una sola máquina",
            correct: "b",
            explanation: "La programación distribuida se enfoca en el desarrollo de sistemas distribuidos, escalables y tolerantes a fallos."
        },
        {
            question: "17. ¿En qué se diferencia la 'programación paralela' de la programación secuencial?",
            a: "En la programación paralela, las tareas se ejecutan de forma secuencial",
            b: "La programación paralela se enfoca en la ejecución simultánea de tareas",
            c: "La programación paralela no permite la interacción entre tareas",
            d: "No hay diferencias significativas",
            correct: "b",
            explanation: "La programación paralela se diferencia en su enfoque en la ejecución simultánea de tareas."
        },
        {
            question: "18. ¿Qué modelo de la taxonomía de Flynn describe varios flujos de datos dentro de un único flujo de instrucciones?",
            a: "SISD",
            b: "SIMD",
            c: "MISD",
            d: "MIMD",
            correct: "b",
            explanation: "El modelo SIMD de la taxonomía de Flynn describe varios flujos de datos dentro de un único flujo de instrucciones."
        },
        {
            question: "19. ¿Qué es un 'thread' o hilo en programación?",
            a: "Un proceso independiente",
            b: "Un punto de ejecución dentro de un proceso",
            c: "Un recurso compartido entre procesos",
            d: "Una operación de entrada/salida",
            correct: "b",
            explanation: "Un 'thread' o hilo es un punto de ejecución dentro de un proceso."
        },
        {
            question: "20. ¿Qué representa el estado 'Bloqueado' de un proceso?",
            a: "El proceso está esperando un recurso no disponible",
            b: "El proceso está en ejecución",
            c: "El proceso ha terminado su ejecución",
            d: "El proceso está en espera activa",
            correct: "a",
            explanation: "El estado 'Bloqueado' indica que el proceso está esperando un recurso no disponible."
        },
        {
            question: "21. ¿Qué es la 'exclusión mutua' en la programación concurrente?",
            a: "La capacidad de ejecutar varios procesos al mismo tiempo",
            b: "Un algoritmo de planificación de procesos",
            c: "La prevención de que múltiples procesos accedan al mismo recurso al mismo tiempo",
            d: "Un método para dividir las tareas",
            correct: "c",
            explanation: "La 'exclusión mutua' en programación concurrente se refiere a prevenir que múltiples procesos accedan al mismo recurso simultáneamente."
        },
        {
            question: "22. ¿Cuál es la función del sistema operativo en la creación de procesos?",
            a: "Proporcionar recursos para la ejecución de procesos",
            b: "Controlar la interacción entre procesos",
            c: "Facilitar un servicio para la creación de procesos",
            d: "Gestionar la memoria utilizada por los procesos",
            correct: "c",
            explanation: "El sistema operativo proporciona un servicio para la creación de procesos, facilitando su ejecución y gestión."
        },
        {
            question: "23. ¿Cómo se denomina la estructura de datos que almacena información sobre un proceso?",
            a: "Registro de sistema",
            b: "Bloque de control de proceso",
            c: "Tabla de procesos",
            d: "Buffer de ejecución",
            correct: "b",
            explanation: "El bloque de control de proceso es la estructura de datos que almacena información relevante sobre un proceso."
        },
        {
            question: "24. ¿Qué tipo de programación se basa en el uso de distintos computadores repartidos en una infraestructura?",
            a: "Programación concurrente",
            b: "Programación secuencial",
            c: "Programación distribuida",
            d: "Programación paralela",
            correct: "c",
            explanation: "La programación distribuida utiliza distintos computadores organizados en una infraestructura para el desarrollo de sistemas distribuidos."
        },
        {
            question: "25. ¿Qué problema en la programación concurrente se da cuando dos procesos necesitan un recurso que tiene el otro?",
            a: "Exclusión mutua",
            b: "Bloqueo mutuo",
            c: "Desincronización",
            d: "Interbloqueo",
            correct: "b",
            explanation: "El bloqueo mutuo ocurre en la programación concurrente cuando dos procesos dependen de un recurso que posee el otro proceso."
        },
        {
            question: "26. ¿Qué caracteriza a un proceso en estado 'Ejecución'?",
            a: "Espera por recursos del sistema",
            b: "Está siendo eliminado",
            c: "Se encuentra activo y usando la CPU",
            d: "Está en espera de interacción del usuario",
            correct: "c",
            explanation: "Un proceso en estado 'Ejecución' se encuentra activo y haciendo uso de la CPU."
        },
        {
            question: "27. ¿Qué implica la 'concurrencia' en la programación?",
            a: "Ejecución de un solo proceso a la vez",
            b: "Ejecución simultánea de múltiples procesos o hilos",
            c: "Uso secuencial de recursos por varios procesos",
            d: "Procesamiento de tareas sin interrupciones",
            correct: "b",
            explanation: "La concurrencia en programación se refiere a la ejecución simultánea de múltiples procesos o hilos."
        },
        {
            question: "28. ¿Qué técnica se utiliza para mejorar el rendimiento en sistemas multiprocesador?",
            a: "Programación secuencial",
            b: "Balanceo de carga",
            c: "Ejecución en un solo hilo",
            d: "Aislamiento de procesos",
            correct: "b",
            explanation: "El balanceo de carga es una técnica utilizada para mejorar el rendimiento en sistemas multiprocesador, distribuyendo el trabajo de manera equitativa entre los procesadores."
        },
        {
            question: "29. ¿Qué representa el estado 'Nuevo' en el ciclo de vida de un proceso?",
            a: "Proceso en ejecución",
            b: "Proceso terminado",
            c: "Proceso que acaba de ser creado",
            d: "Proceso esperando recursos",
            correct: "c",
            explanation: "El estado 'Nuevo' en el ciclo de vida de un proceso indica que el proceso acaba de ser creado."
        },
        {
            question: "30. ¿Qué es un 'semaforo' en programación concurrente?",
            a: "Un tipo de variable compartida",
            b: "Una estructura para gestionar hilos",
            c: "Un mecanismo para controlar el acceso a recursos",
            d: "Una técnica de planificación de procesos",
            correct: "c",
            explanation: "Un 'semaforo' en programación concurrente es un mecanismo utilizado para controlar el acceso a recursos compartidos y evitar conflictos."
        },
        {
            question: "31. ¿Qué es la 'programación reactiva'?",
            a: "Programar con anticipación a eventos",
            b: "Responder a cambios en el entorno de ejecución",
            c: "Optimizar el uso de la CPU en programas",
            d: "Reducir el consumo de memoria en aplicaciones",
            correct: "b",
            explanation: "La programación reactiva se enfoca en desarrollar sistemas que responden a cambios en su entorno de ejecución."
        },
        {
            question: "32. ¿Qué representa el modelo 'cliente-servidor' en programación distribuida?",
            a: "Dos procesos que comparten recursos",
            b: "Un proceso que se comunica con múltiples procesos",
            c: "Un proceso cliente que solicita servicios a un proceso servidor",
            d: "Varios servidores que comparten una base de datos",
            correct: "c",
            explanation: "En el modelo 'cliente-servidor', un proceso cliente solicita servicios a un proceso servidor."
        },
        {
            question: "33. ¿Qué se entiende por 'escalabilidad' en sistemas distribuidos?",
            a: "Capacidad de un sistema para manejar una carga de trabajo creciente",
            b: "Habilidad para ejecutar tareas de manera secuencial",
            c: "Eficiencia en el uso de recursos de hardware",
            d: "Capacidad para funcionar sin errores",
            correct: "a",
            explanation: "La escalabilidad en sistemas distribuidos se refiere a la capacidad de un sistema para manejar eficientemente una carga de trabajo creciente."
        },
        {
            question: "34. ¿Qué problema aborda el 'algoritmo de Peterson' en la programación concurrente?",
            a: "Optimización de uso de CPU",
            b: "Equilibrio de carga entre procesos",
            c: "Exclusión mutua entre dos procesos",
            d: "Planificación eficiente de tareas",
            correct: "c",
            explanation: "El algoritmo de Peterson es una solución al problema de exclusión mutua entre dos procesos."
        },
        {
            question: "35. ¿Qué es un 'proceso zombie' en sistemas operativos?",
            a: "Un proceso que consume todos los recursos del sistema",
            b: "Un proceso que ha terminado, pero aún mantiene su entrada en la tabla de procesos",
            c: "Un proceso que no puede ser terminado",
            d: "Un proceso que inicia otros procesos",
            correct: "b",
            explanation: "Un proceso zombie es aquel que ha terminado su ejecución, pero aún conserva su entrada en la tabla de procesos."
        },
        {
            question: "36. ¿Qué se entiende por 'deadlock' o interbloqueo en sistemas operativos?",
            a: "Un proceso que termina inesperadamente",
            b: "Un conjunto de procesos que se bloquean mutuamente, esperando recursos",
            c: "Un error de sistema que reinicia el ordenador",
            d: "Una situación donde todos los procesos están en estado de espera",
            correct: "b",
            explanation: "El 'deadlock' o interbloqueo se refiere a una situación en la que dos o más procesos se bloquean mutuamente, esperando por recursos que otros procesos tienen."
        },
        {
            question: "37. ¿Qué es una 'colisión de hilos' en programación?",
            a: "Dos hilos que intentan acceder al mismo recurso al mismo tiempo",
            b: "Un error que ocurre cuando un hilo no puede iniciar",
            c: "La terminación inesperada de un hilo",
            d: "Un hilo que interrumpe la ejecución de otro",
            correct: "a",
            explanation: "Una 'colisión de hilos' ocurre cuando dos hilos intentan acceder al mismo recurso simultáneamente, lo que puede causar problemas de sincronización o corrupción de datos."
        },
        {
            question: "38. ¿Cuál es el propósito de las 'variables de condición' en programación concurrente?",
            a: "Almacenar datos temporales",
            b: "Sincronizar el acceso a recursos compartidos",
            c: "Contar el número de hilos en ejecución",
            d: "Definir las prioridades de los hilos",
            correct: "b",
            explanation: "Las 'variables de condición' se utilizan en programación concurrente para sincronizar hilos, permitiendo que un hilo espere a que ciertas condiciones sean verdaderas antes de proceder."
        },
        {
            question: "39. ¿Qué es la 'fragmentación de memoria' en sistemas operativos?",
            a: "El proceso de asignación de memoria a los procesos",
            b: "Un método para mejorar el rendimiento del sistema",
            c: "La división de la memoria en partes pequeñas e inutilizables",
            d: "La limpieza automática de memoria",
            correct: "c",
            explanation: "La 'fragmentación de memoria' se refiere al fenómeno por el cual la memoria se divide en pequeñas partes inutilizables, lo que reduce la eficiencia en la asignación de memoria a los procesos."
        },
        {
            question: "40. ¿Qué técnica se utiliza para evitar la fragmentación de memoria?",
            a: "Compresión de memoria",
            b: "Reasignación dinámica",
            c: "Paging o paginación",
            d: "Segmentación de memoria",
            correct: "c",
            explanation: "La técnica de 'paging' o paginación se utiliza para evitar la fragmentación de memoria, permitiendo una gestión más eficiente del espacio disponible."
        },
        {
            question: "41. ¿Qué es la 'planificación de procesos' en sistemas operativos?",
            a: "Asignar memoria a los procesos",
            b: "Decidir qué proceso ejecutar a continuación",
            c: "Gestionar la entrada y salida de procesos",
            d: "Crear y eliminar procesos",
            correct: "b",
            explanation: "La planificación de procesos se refiere a la decisión del sistema operativo sobre qué proceso ejecutar a continuación en la CPU."
        },
        {
            question: "42. ¿Qué es un 'proceso huérfano' en sistemas operativos?",
            a: "Un proceso que consume todos los recursos",
            b: "Un proceso que ha perdido su proceso padre",
            c: "Un proceso en estado zombie",
            d: "Un proceso bloqueado permanentemente",
            correct: "b",
            explanation: "Un proceso huérfano es aquel que continúa ejecutándose después de que su proceso padre ha terminado."
        },
        {
            question: "43. ¿Qué se entiende por 'sobrecarga de procesos' en un sistema operativo?",
            a: "Muchos procesos ejecutándose simultáneamente",
            b: "Un solo proceso consumiendo todos los recursos",
            c: "Procesos que requieren mucha memoria",
            d: "Falta de recursos para ejecutar nuevos procesos",
            correct: "a",
            explanation: "La sobrecarga de procesos ocurre cuando hay demasiados procesos ejecutándose al mismo tiempo, lo que puede afectar el rendimiento del sistema."
        },
        {
            question: "44. ¿Qué es un 'proceso ligero' o 'LWP'?",
            a: "Un proceso que utiliza pocos recursos",
            b: "Un tipo de hilo en sistemas operativos",
            c: "Un proceso en espera de ser asignado a la CPU",
            d: "Un proceso que realiza tareas simples",
            correct: "b",
            explanation: "Un 'proceso ligero' o 'LWP' (Lightweight Process) es un tipo de hilo que puede ser manejado de forma más eficiente por el sistema operativo."
        },
        {
            question: "45. ¿Qué técnica se utiliza para mejorar la eficiencia en la comunicación entre procesos?",
            a: "Programación secuencial",
            b: "Bloqueo de procesos",
            c: "Uso de tuberías o 'pipes'",
            d: "Compresión de datos",
            correct: "c",
            explanation: "El uso de tuberías o 'pipes' es una técnica común para mejorar la eficiencia en la comunicación entre procesos en sistemas operativos."
        },
        {
            question: "46. ¿Qué es la 'segmentación de memoria' en sistemas operativos?",
            a: "Dividir la memoria en partes iguales",
            b: "Un método para evitar interbloqueos",
            c: "Dividir la memoria en segmentos de tamaño variable",
            d: "Agrupar procesos en la misma área de memoria",
            correct: "c",
            explanation: "La segmentación de memoria es una técnica que divide la memoria en segmentos de tamaño variable, facilitando la gestión de la memoria."
        },
        {
            question: "47. ¿Cómo se denomina el proceso de asignar tiempo de CPU a los procesos en sistemas operativos?",
            a: "Multiprogramación",
            b: "Multitarea",
            c: "Planificación de procesos",
            d: "Gestión de memoria",
            correct: "c",
            explanation: "La planificación de procesos es el proceso de asignar tiempo de CPU a los procesos en un sistema operativo."
        },
        {
            question: "48. ¿Qué es la 'multitarea' en sistemas operativos?",
            a: "Ejecutar un solo proceso a la vez",
            b: "Asignar tareas a múltiples usuarios",
            c: "Ejecutar varios procesos al mismo tiempo",
            d: "Dividir un proceso en múltiples hilos",
            correct: "c",
            explanation: "La multitarea se refiere a la capacidad de un sistema operativo de ejecutar varios procesos al mismo tiempo."
        },
        {
            question: "49. ¿Qué caracteriza a los 'procesos de usuario' en sistemas operativos?",
            a: "Se ejecutan con privilegios de administrador",
            b: "Son procesos que no interactúan con el hardware",
            c: "Son iniciados y controlados por usuarios",
            d: "No pueden ser interrumpidos",
            correct: "c",
            explanation: "Los procesos de usuario son aquellos que son iniciados y controlados por los usuarios del sistema."
        },
        {
            question: "50. ¿Qué función tiene un 'planificador de largo plazo' en sistemas operativos?",
            a: "Decidir cuándo se deben iniciar los procesos",
            b: "Asignar recursos a los procesos en ejecución",
            c: "Gestionar la memoria de largo plazo",
            d: "Planificar tareas de mantenimiento del sistema",
            correct: "a",
            explanation: "El planificador de largo plazo en un sistema operativo decide cuándo se deben iniciar los procesos, controlando la cantidad de procesos en el sistema."
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
