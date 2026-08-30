import { IconType } from "react-icons";
import { IconEmail, IconGithub, IconLinkedin, IconX, IconYoutube } from "./assets";
import elpinar from '../assets/images/elpinar.png';  
import automovil from '../assets/images/automovil.png';
import sice from '../assets/images/sice.png'; 
import artec from '../assets/images/artec.png';
import ficosa from '../assets/images/ficosa.png';
import gnorte from '../assets/images/gnorte.png';
import golpe from '../assets/images/golpe.jpeg'
import carretillero from '../assets/images/carretillero.jpg'
import gruas from '../assets/images/gruas.jpg'

export interface IconInfo {
    name: string;
    address: string;
    icon: IconType;
}

export interface BlogType {
    title: string;
    date: string;
    description: string;
    id:string;
    content:string;
    tags: string[];
    imagen: string;
}

interface ProjectType {
    id:number;
    title: string;
    date: string;
    description: string;
    tags: string[];
    logo:string;
    
}

export interface PublicationsType {
    link: string;
    content: string;
    duracion: string;
    
}

export const iconsList: IconInfo[] = [
    {
        name: "Email",
        address: "mailto:antogobebar@yahoo.es",
        icon: IconEmail
    },
    {
        name: "Linkedin",
        address: "https://www.linkedin.com/in/antonio-g-513957309",
        icon: IconLinkedin
    },
    {
        name: "X",
        address: "https://x.com/Goberfesio",
        icon: IconX
    },
    {
        name: "Github",
        address: "https://github.com/antonio-gobernado",
        icon: IconGithub
    },
    {
        name: "Youtube",
        address: "https://www.youtube.com/@gober4662",
        icon: IconYoutube
    }
];

export const tagsBlog:string[] = [
    "automocion", "seguridad", "industria",
]

export const blogs: BlogType[] = [
    {
        title: "Máquinas de Corte en la Industria: Tipos y Uso Seguro",
        id: "maquinas-de-corte-industrial",
        date: "Agosto 27, 2026",
        description: "Las máquinas de corte son equipos imprescindibles en la industria, pero también una de las principales fuentes de accidentes graves. Conocer sus tipos, sus riesgos y las medidas preventivas adecuadas es esencial antes de cada uso.",
        content: `
Las **máquinas de corte** son equipos imprescindibles en prácticamente cualquier proceso industrial: construcción, metalurgia, automoción, madera, plásticos o textiles. Su capacidad para seccionar materiales con rapidez y precisión las convierte en herramientas muy productivas, pero también en una de las principales fuentes de accidentes graves y mortales. Un corte mal ejecutado, un resguardo retirado o un mantenimiento deficiente pueden provocar amputaciones, proyecciones de partículas o incendios. Por eso, conocer los tipos de máquinas de corte y aplicar las medidas preventivas es esencial antes de cada uso.

## Principales Tipos de Máquinas de Corte

Existen multitud de máquinas de corte según el material y el acabado deseado. Entre las más habituales en la industria se encuentran:

- **Sierras circulares y de cinta**: para madera, metales ligeros y plásticos. De uso muy extendido en talleres.
- **Amoladoras angulares o radiales**: cortadoras portátiles de gran versatilidad para metal y obra.
- **Tronzadoras y cortadoras de disco**: fijas o de mesa, para cortes rectos y repetitivos de perfiles y tubos.
- **Cizallas y guillotinas**: para chapa y lamina metálica, mediante presión y corte recto.
- **Corte por láser**: alta precisión mediante haz de luz; genera radiación y humos.
- **Corte por plasma y oxicorte**: para metales gruesos, con altas temperaturas y riesgo de incendio.
- **Corte por chorro de agua**: frío y sin afectación térmica, pero con riesgo de alta presión.

## Riesgos Asociados a las Máquinas de Corte

Independientemente del tipo de máquina, los riesgos más frecuentes son:

- **Cortes y amputaciones** por contacto con el elemento de corte o con piezas en movimiento.
- **Proyecciones de partículas o fragmentos** del material, del disco o de la cuchilla.
- **Atrapamiento** de ropa, guantes, cabello o extremidades en elementos giratorios.
- **Contacto eléctrico** por equipos o cables en mal estado, sobre todo en ambientes húmedos.
- **Incendio y explosión** por chispas, altas temperaturas o polvo combustible acumulado.
- **Inhalación de polvo y humos** tóxicos que provocan enfermedades respiratorias.
- **Daños por ruido y vibraciones** tras un uso prolongado y sin protecciones.

## Medidas Preventivas y Uso Seguro

### 1. Formación y autorización del operario
- Solo debe manejar la máquina **personal formado y autorizado**.
- El operario debe conocer el manual de instrucciones y las normas específicas de su puesto.
- Nunca se debe retirar, anular o saltarse los **dispositivos de seguridad**.

### 2. Verificación del equipo antes de cada uso
- Comprobar que los **resguardos y protectores** están colocados y correctamente ajustados.
- Revisar el estado de disco, cuchilla o elemento de corte: sin grietas, mellas ni señales de desgaste.
- Verificar que la **velocidad máxima** del elemento de corte es compatible con la máquina.
- Cable, enchufe, interruptor y **parada de emergencia** en perfecto estado.
- Confirmar que la máquina está **desconectada** (bloqueo/señalización) durante el cambio de accesorio o el mantenimiento.

### 3. Uso correcto durante el trabajo
- Sujetar la pieza con garras, grapas o tornillo de banco, **nunca con la mano**.
- Mantener una postura estable y usar la máquina con las dos manos cuando corresponda.
- No forzar el corte ni hacer palanca: dejar que el disco o la cuchilla trabajen a su ritmo.
- Aproximar la pieza al elemento de corte de forma controlada y sin brusquedad.
- Trabajar en zonas **ventiladas** y alejar los materiales inflamables de la zona de chispas.
- Mantener el área de trabajo limpia, ordenada y con buena iluminación.

### 4. Equipos de Protección Individual (EPIs)
- **Gafas o pantalla facial** frente a proyecciones y chispas.
- **Guantes de seguridad** (no se usarán guantes sueltos cerca de elementos giratorios).
- **Protectores auditivos**, ya que muchas máquinas superan los 85 dB.
- **Mascarilla de protección respiratoria** contra polvo y humos.
- Ropa de trabajo ajustada, sin elementos colgantes, y **calzado de seguridad**.

### 5. Mantenimiento periódico
- Seguir el plan de mantenimiento del fabricante y registrar las operaciones realizadas.
- Sustituir los elementos de corte desgastados o dañados de inmediato.
- Las reparaciones estructurales o eléctricas deben realizarlas **personal cualificado**.
- Retirar y señalizar claramente cualquier máquina que presente deficiencias.

## Conclusión

Las máquinas de corte son herramientas muy valiosas para la industria, pero no admiten improvisación. La mayoría de los accidentes se producen por la retirada de los resguardos, un mal estado del elemento de corte, la falta de formación o una actitud imprudente. Con la máquina en buen estado, el elemento de corte adecuado, los EPIs puestos y el operario formado, el corte industrial puede realizarse con eficacia, precisión y, sobre todo, con seguridad.
        `,
        tags: ["seguridad", "industria"],
        imagen: "https://tse4.mm.bing.net/th/id/OIP.x5KvN5zQkRvBqFJj5XgZXQHaE7?pid=Api&P=0&h=180",
    },

    {
        title: "Uso Seguro de la Radial (Amoladora Angular)",
        id: "uso-radial",
        date: "Agosto 27, 2026",
        description: "La amoladora angular o radial es una de las herramientas eléctricas más utilizadas y, a la vez, una de las que más accidentes graves provoca. Conocer sus riesgos y aplicar las medidas preventivas es imprescindible antes de cada uso.",
        content: `
La amoladora angular o **radial** es una de las herramientas eléctricas más utilizadas en talleres, obras e industria; también es una de las que más accidentes graves registra. Girando a velocidades que pueden superar los 10.000 rpm, un descuido puede convertirse en una lesión grave o, en el peor de los casos, en un accidente mortal. Por eso es imprescindible conocer sus riesgos y aplicar las medidas preventivas antes de cada uso.

## Principales Riesgos de la Radial

- **Cortes y amputaciones** por contacto con el disco en movimiento.
- **Proyecciones de partículas y fragmentos** por rotura o desprendimiento del disco.
- **Contacto eléctrico** por máquinas o cables en mal estado, especialmente en entornos húmedos.
- **Incendio o explosión** por chispas sobre polvo o materiales inflamables.
- **Inhalación de polvo y partículas**, que puede provocar enfermedades respiratorias.
- **Daños por ruido y vibraciones**, sobre todo con un uso prolongado.

## Cómo Evitar los Accidentes

### 1. Elige y comprueba el disco
- El disco debe ser del diámetro y tipo adecuados para la máquina.
- Verifica que la **velocidad máxima** indicada en el disco es igual o superior a la de la radial.
- Inspecciona el disco antes de montarlo: si tiene grietas, mellas o ha superado su **fecha de caducidad**, no lo utilices.
- No modifiques el agujero del disco ni lo fuerces sobre el eje.

### 2. Revisa la máquina
- El **protector** debe estar siempre colocado y correctamente ajustado.
- La **empuñadura lateral** montada: la radial nunca se maneja con una sola mano.
- Cable y enchufe en buen estado, sin cortes ni empalmes improvisados.
- El interruptor debe funcionar correctamente, incluido el sistema de bloqueo.

### 3. Usa los EPIs adecuados
- **Pantalla facial o gafas de protección** frente a las partículas proyectadas.
- **Guantes de seguridad** y, si el trabajo lo requiere, no de piel hasta el codo.
- **Protectores auditivos**, ya que la radial supera fácilmente los 85 dB.
- **Mascarilla** de protección respiratoria contra el polvo.
- Ropa de trabajo ajustada, sin mangas anchas ni elementos colgantes, y **calzado de seguridad**.

### 4. Trabaja con técnica segura
- Sujeta la radial con las **dos manos** y mantén una postura estable.
- Deja que el disco alcance su velocidad de giro antes de empezar a cortar.
- No fuerces la herramienta ni hagas palanca: deja que el disco trabaje.
- Sujeta la pieza con garras o tornillo de banco, nunca con la mano.
- No frenes el disco con la mano ni con la pieza: espera a que se detenga solo.
- Trabaja en zonas ventiladas y aparta los materiales inflamables del área de chispas.
- **Desenchufa siempre** la radial para cambiar el disco y retíralo al terminar.
- Evita trabajar con polvo acumulado y mantén el área de trabajo limpia y ordenada.

## Conclusión

La radial es una herramienta versátil y muy productiva, pero no admite improvisación. La mayoría de los accidentes se producen por el mal estado del disco, la retirada del protector o un uso inadecuado. Con la máquina en buen estado, el disco correcto y una actitud prudente, el trabajo con radial puede ser eficaz y seguro.
        `,
        tags: ["seguridad", "industria"],
        imagen: "https://tse2.mm.bing.net/th/id/OIP.lP4CS51xpnTXQQIbU-zeJAHaE8?r=0&pid=Api&P=0&h=180",
    },

    {
        title: `Seguridad Laboral en Entornos Industriales del Sector del Automóvil`,
        id: "seguridad-automocion",
        date: "Agosto 2, 2025",
        description: "La seguridad laboral en la industria automotriz es un pilar fundamental para garantizar la continuidad operativa, la salud de los trabajadores y el cumplimiento normativo.",
        content: 


`La seguridad laboral en la industria automotriz es un pilar fundamental para garantizar la continuidad operativa, la salud de los trabajadores y el cumplimiento normativo. En un entorno altamente tecnificado y automatizado como el del sector del automóvil, el riesgo inherente a la actividad industrial se intensifica en determinados momentos del año, como durante las **paradas de producción**, donde se ejecutan tareas de mantenimiento, renovación de equipos o reestructuración de líneas.

Uno de los factores críticos durante estas paradas es la **gestión y control de proveedores externos**. Estos equipos, que ingresan temporalmente a las instalaciones para realizar trabajos especializados, suponen un reto adicional para los departamentos de seguridad y salud laboral.

## Riesgos Asociados a las Paradas de Producción

Durante las paradas de producción, se rompe la rutina operativa habitual. Esto implica:

- Una mayor presencia de trabajadores no habituales (contratistas y subcontratistas).
- Ejecución simultánea de múltiples tareas de alto riesgo: trabajos en altura, corte, soldadura, manipulación de maquinaria pesada, espacios confinados, etc.
- Uso de equipos y materiales externos que pueden no estar adaptados a los estándares de la planta.
- Menor familiaridad de los proveedores con los procedimientos de seguridad internos.

Este escenario genera una **situación crítica** que debe ser anticipada y controlada con rigurosidad.

## Claves para el Control de Proveedores Externos

### 1. Precalificación y Evaluación de Riesgos
Antes de autorizar la entrada de cualquier proveedor, es fundamental establecer un proceso de **precalificación** que incluya:
- Revisión de documentación legal y técnica (seguros, formación, habilitaciones).
- Evaluación del historial de seguridad de la empresa subcontratada.
- Análisis conjunto de riesgos específicos del trabajo a realizar.

### 2. Planificación y Coordinación de Actividades
Una planificación temprana permite:
- Asignar horarios para evitar interferencias entre trabajos simultáneos.
- Definir responsables de supervisión por área.
- Establecer zonas de trabajo seguras y delimitadas.

### 3. Formación e Inducción
Todo proveedor debe recibir una **inducción de seguridad específica** para la planta:
- Normas internas.
- Procedimientos de emergencia.
- Identificación de riesgos particulares.
- Reglas de circulación y uso de EPI (Equipos de Protección Individual).

### 4. Control de Accesos y Permisos de Trabajo
La **gestión del acceso físico** a la planta debe estar basada en:
- Listados de personal autorizado.
- Emisión de permisos de trabajo específicos para tareas críticas.
- Trazabilidad de entradas y salidas.

### 5. Supervisión y Seguimiento
Durante la ejecución de los trabajos:
- Se deben realizar inspecciones regulares en terreno.
- Evaluar el cumplimiento de normas y corregir desviaciones.
- Documentar incidentes, cuasi-incidentes y lecciones aprendidas.

### 6. Cierre y Evaluación Post-Parada
Al finalizar la parada:
- Revisión conjunta de resultados y cumplimiento de condiciones de seguridad.
- Evaluación del desempeño de los proveedores.
- Actualización de bases de datos para futuras contrataciones.

## Conclusión

Las paradas de producción representan una oportunidad para mejorar y actualizar instalaciones, pero también suponen un **riesgo aumentado en términos de seguridad laboral**, especialmente por la presencia de personal externo. La clave está en **anticiparse, planificar y supervisar** rigurosamente todas las fases del proceso, asegurando que tanto el personal propio como los contratistas trabajen bajo un mismo estándar de seguridad.

En un sector tan exigente como el de la automoción, donde la eficiencia y la calidad son esenciales, la **seguridad no es negociable**. Un proveedor seguro y bien gestionado es un aliado estratégico en el mantenimiento del rendimiento industrial y la protección de las personas.

---`,
        tags: ["automocion", "industria"],
        imagen: automovil,
    },

    {
        title: "El Golpe de Calor",
        id: "summer-innovation-222",
        date: "Julio 23, 2025",
        description: "El golpe de calor es la más grave de las enfermedades relacionadas con el calor, y se produce cuando el cuerpo es incapaz de regular su propia temperatura.",
        content: `
El golpe de calor es la más grave de las enfermedades relacionadas con el calor, y se produce cuando el cuerpo es incapaz de regular su propia temperatura: la temperatura corporal sube rápidamente, los mecanismos de regulación de la temperatura fallan, y el cuerpo es incapaz de enfriarse, llegando a superar los 40 º C en cuestión de 10 o 15 minutos. Puede ser mortal, o provocar daños permanentes si no se proporcionan los primeros auxilios con rapidez.

Todos estamos expuestos a sufrir un golpe de calor, pero algunas personas son más vulnerables, como las que tienen hipertensión arterial o problemas cardíacos, diabetes, problemas respiratorios, o simplemente las que tienen que trabajar al aire libre en días de calor intenso.

El calor nos influye de distinta manera, según los factores personales (falta de aclimatación al calor, edad, estado de salud, forma física, toma de medicamentos, consumo de alcohol y cafeína, etc.) y el tiempo de exposición (la duración de los trabajos).

La falta de aclimatación al calor es uno de los factores personales más importantes. 
La aclimatación hace que el cuerpo soporte mejor los efectos del calor. 

### SÍNTOMAS DEL GOLPE DE CALOR
* Dolor de cabeza
* Taquicardia
* Respiración rápida y débil
* Irritabilidad, confusión y desmayo
* Piel caliente y seca, se deja de sudar
* La temperatura corporal puede superar los 40,5 ° C
* Puede aparecer de manera brusca y sin síntomas previos:

![Sintomas ](https://clinicalasiesta.com/wp-content/uploads/2023/07/Golpe-de-calor-sintomas-1.jpg "Importante!!!")

### PELIGRO DE MUERTE
Si identificas estos síntomas, llama al 112, y mientras esperas la llegada de la ayuda:
1. Lleva inmediatamente a la persona a un lugar fresco y fuera del alcance del sol
2. Acuesta a la persona, colocándole los pies en posición elevada aflójale la ropa y aplícale compresas frías (paños húmedos) en la cabeza, cuello, brazos y muslos para bajar la temperatura del cuerpo
El aporte de líquidos es fundamental. 
3. Si la persona está consciente, le daremos agua, zumos o bebidas isotónicas (que además de cubrir las deficiencias de agua, aportan iones y azúcares). Daremos el líquido poco a poco, y a temperatura ambiente (hay que evitar las bebidas muy frías y las ingestas muy abundantes de golpe) 

### PROTÉJETE
- Siempre que sea posible, trabaja en zona de sombra
- Deja las tareas de más esfuerzo físico para los momentos de menos calor de la jornada. 
- Descansa en lugares sombreados y frescos para recuperarte del calor
- Bebe agua con frecuencia antes y durante el trabajo, aunque no tengas sed (un par de vasos cada hora)
- Evita las comidas grasientas y copiosas. Come más fruta y verdura, porque las vitaminas B y C ayudan a combatir la fatiga producida por las altas temperaturas
- Evita el alcohol (cerveza, vino etc.), las bebidas con cafeína (café, refrescos de cola, té, etc.) y también las bebidas muy azucaradas, porque favorecen la deshidratación
- Usa ropa de trabajo de verano y protege la cabeza del sol
- Usa cremas de protección solar con un factor de protección de 15 o más
- Es importante descansar y dormir bien por la noche, ya que la falta de descanso es un factor que agrava los efectos del estrés térmico.     
        
        `,
        
        tags: ["seguridad"],
        imagen: golpe,
    },
    {
        title: "Carretillas Elevadoras",
        id: "carretillas",
        date: "Mayo 15, 2025",
        description: "Descripción de las medidas preventivas más básicas para la conducción de carretillas en el trabajo.",
        content: `

    
        
Antes de iniciar la jornada el conductor debe realizar una inspección de la carretilla que contemple los puntos siguientes: ruedas, fijación y estado de los brazos de la horquilla, inexistencia de fugas en el circuito hidráulico, niveles de aceite diversos, mandos en servicio, protectores y dispositivos de seguridad, frenos de pie y de mano, embrague, etc.

Para su conducción y circulación se tendrán en cuenta como mínimo las siguientes reglas genéricas: No conducir el vehículo por personal no autorizado. No permitir que suba ninguna persona en la carretilla. Mirar en la dirección de avance y mantener la vista en el camino que recorre. Disminuir la velocidad en cruces y lugares con poca visibilidad. Evitar paradas y arranques bruscos y virajes rápidos. Transportar únicamente cargas preparadas correctamente y asegurarse que no chocará con techos, conductos, etc., por razón de altura de la carga en función de la altura de paso libre.  Deben respetarse las normas del código de circulación especialmente en áreas en las que pueden encontrarse otros vehículos. No se transportarán cargas que superen la capacidad nominal. No se circulará por encima de los 20 km./h.  en espacios exteriores y 10 km./h. en espacios interiores. Cuando el conductor abandone la carretilla deberá asegurarse de que las palancas están en punto muerto, motor parado, frenos echados, llave de contacto sacada o la toma de batería retirada. Si está la carretilla en pendiente se calzarán las ruedas, asimismo la horquilla se dejará en la posición más baja.

La manipulación de cargas debería efectuarse guardando siempre la relación dada por le fabricante entre la carga máxima y la altura a la que se ha de transportar y descargar, bajo los siguientes criterios: Recoger la carga y elevarla unos 15 cms. sobre el suelo. Circular llevando el mástil inclinado el máximo hacia atrás. Situar la carretilla frente al lugar previsto y en posición precisa para depositar la carga. Elevar la carga hasta la altura necesaria manteniendo la carretilla frenada. Para alturas superiores a 4 mts. programar las alturas de descarga y carga con un sistema automatizado que compense la limitación visual que se produce a distancias altas. Avanzar la carretilla hasta que la carga se encuentre sobre el lugar de descarga. Situar las horquillas en posición horizontal y depositar la carga, separándose luego lentamente. Estas mismas operaciones se efectuarán a la inversa en caso de desapilado. La circulación sin carga se deberá hacer con las horquillas bajadas.    

### Pulsa el siguiente video:
[![](https://tse4.mm.bing.net/th/id/OIP.nSaoUjzIuGKGNC6ZUtTfLwHaEK?pid=Api&P=0&h=180)](https://youtu.be/cimaVVuHDsc?si=2zadHQ5DBQHB_ViD)
Toda carretilla en la que se detecte deficiencia o se encuentre averiada deberá quedar claramente fuera de uso advirtiéndolo mediante señalización. Tal medida tiene especial importancia cuando la empresa realiza trabajos a turnos.   
        
        `,
        tags: ["seguridad"],
        imagen: carretillero,
    },
    {
        title: "Mantenimiento de grúas",
        id: "gruas",
        date: "Marzo 13, 2025",
        description: "Las grúas hidráulicas son unos equipos de trabajo que pueden ser peligrosos si no están en perfectas condiciones de uso, es imprescindible leer atentamente el manual de operario que se entrega con la máquina, esto puede evitar accidentes graves y costosas averías.",
        content: `

Las grúas hidráulicas son unos equipos de trabajo que pueden ser peligrosos si no están en perfectas condiciones de uso, es imprescindible leer atentamente el manual de operario que se entrega con la máquina, esto puede evitar accidentes graves y costosas averías.   

El operario solo puede realizar las comprobaciones pertinentes y el mantenimiento indicado en el correspondiente libro de instrucciones, todos los demás fallos o averías tienen que ser solucionadas por un taller oficial. Cualquier fallo o mala función se tiene que reparar inmediatamente.

Periódicamente se debe inspeccionar el buen estado y funcionamiento de los gatos estabilizadores y los seguros, botones de parada, gancho de carga, seguro y suspensión. En las palancas de maniobra controlar el funcionamiento suave y que al soltarlas vuelven a la posición neutral, revisar el buen estado de los componentes electrónicos. Comprobar que no haya daños de estructura de la grúa, como deformaciones o fisuras, y que no haya pérdidas de aceite en las mangueras, tubos y conexiones del sistema hidráulico (no acercarse nunca al chorro de aceite que sale de la grúa).

Controlar el nivel de aceite y si es necesario rellenarlo, tanto del depósito como en la base de la grúa. Los accesorios también se deben revisar de acuerdo a sus instrucciones específicas.

Adicionalmente a la inspección diaria, mensualmente controlar si existen daños u holguras en los ejes y articulaciones de la grúa, cilindros, etc.; ver el par de apriete de bulones, espárragos y uniones atornilladas; fijación de bomba al vehículo, buen estado de cables y sensores del sistema de brazos.

Limpiar regularmente la grúa y accesorios, pero no emplear detergentes agresivos y nunca usar agua a alta presión en la limpieza de distribuidores, cilindros, depósito de aceite o componentes electrónicos, el lavado a presión se empleará solamente en las superficies de la grúa.

El operario debe anotar en el parte de revisiones todas las reparaciones y mantenimiento realizadas por él mismo, si el trabajador detecta una anomalía en el funcionamiento debe comunicarla a su superior para que se repare en un taller oficial.

Lubricar la grúa siguiendo el esquema de lubricación cuidadosamente, procediendo a la misma en los puntos que marque el manual.

Como mínimo una vez al año llevar la grúa para cambiar el aceite o analizarlo por un especialista, tanto el hidráulico como en la carcasa de giro (base), cambiar cartuchos de filtro de retorno, de presión, de reductor de presión y el tapón del depósito. Las impurezas dañas el sistema hidráulico.
        

        
        `,
        tags: ["seguridad"],
        imagen: gruas,
    },
    
   
  ];
  

  export const projects: ProjectType[] = [
    
    {
        id: 1,
title: "Director de Prevención de Riesgos Laborales",
date: "Enero, 2025",

description: `
1. Gestión de reconocimientos médicos y Evaluaciones de Riesgos con SPA CUALTIS. 
2. Investigación de accidentes laborales e incidentes.
3. Seguimiento e Implantación del Plan de Medidas Preventivas en las fincas de Segovia, Ávila y Huelva.  
4. Inducción y Charlas de Concienciación P.R.L a todos los trabajadores.
5. Gestionar los requerimientos de las Inspecciones de Trabajo de la Autoridad Laboral.
6. Coordinación de actividades empresariales con empresas subcontratistas en las obras de las Fincas. 
7. Gestión ADR.

`,
tags: ["EL PINAR"],
logo: elpinar,
},

{
id: 3,
title: "Técnico Responsable HSE de obra en la Instalación de Planta Fotovoltaica de 50 MW en Toro (Zamora)",
date: "Noviembre, 2023",

description: `
1. Implantación de Medidas Preventivas en obra. 
2. Inducción a todos los trabajadores. 
3. Vigilancia de la Salud con Servicio de Prevención Ajeno. 
4. Elaboración de planes de emergencia y puesta en marcha de simulacros. 
5. Formación/ Información en P.R.L a personal base y de estructura de la empresa. 
6. Coordinación de actividades empresariales con empresas visitantes.Liderar las visitas con los Coordinadores de Seguridad y Salud y Medio Ambiente. 
7. Seguimiento de las acciones propuestas por el Coordinador de Seguridad y Salud según RD 1627.
8. Seguimiento de las acciones propuestas por el Coordinador de Medio Ambiente.Gestión de los residuos. 
9. Control del libro de residuos y DI.
10. Gestionar los requerimientos de las Inspecciones de Trabajo de la Autoridad Laboral.`,
tags: ["ARTEC ENERGY"],
logo:artec,
},
{
id: 4,
title: "Técnico PRL Castilla y Leon",
date: "Febrero, 2005",

description: `
1. Informes de evaluación de riesgos laborales de cada centro del cliente (IVECO, MICHELIN, BIBLIOTECA DE LEON, otros centros).  Investigación de accidentes laborales.
2. Vigilancia de la Salud con Servicio de Prevencion Ajeno.
3. Tramitación de partes de accidente por DELT@.
4. Elaboración de planes de emergencia y puesta en marcha de simulacros.
5. Formación en P.R.L a personal base y de estructura de la empresa.
6. Coordinación de actividades empresariales con empresas visitantes.
7. Evaluaciones específicas de higiene y ergonomía industrial, en especial Estudios Psicosociales.`,
tags: ["GRUPO NORTE"],
logo:gnorte,
},

{
id: 5,
title: "Gestor de Prevención de Riesgos Laborales, Calidad y Medio Ambiente",
date: "Octubre, 2007",
description: `
1. Tareas propias como técnico de PRL con R.D. 1627/1997 para obras de construcción, ejm: Construcción de edificios ( Sede Central ACS, Colegios de la Junta de Andalucía, Hospital Virgen en Granada).
2. Mantenimiento de instalaciones eléctricas en la RED de CERCANIAS de RENFE en Madrid.Instalaciones eléctricas y de seguridad en todas las estaciones de METRO DE MADRID. 
3. Elaboración de Documentos de Gestión Preventiva para las plantas fotovoltaicas pertenecientes a SICE, SICE ENERGIA y FUENGIROLA FOTOVOLTAICAS (Huerto solar en Valdelacasa (Salamanca), La Nucia (Alicante), Daya Nueva (Alicante), Betera ( Valencia), Pabellón Deportivo Santa Fe de Boliches, Golpejar (León), Tárrega (Lerida)).
4. Análisis de Informes de requisitos PRL en las plantas fotovoltaicas antes de ejecución de obra. 
5. Seguimiento del cumplimiento de las actividades preventivas para la ejecución y posterior explotación de las plantas fotovoltaicas. 
6. Auditorías internas de Calidad, Prevención de Riesgos Laborales y Medio Ambiente.
7. Investigación de accidentes laborales. 
8. Vigilancia de la salud. Gestión con SPA. 
9. Informes de inspección de seguridad laboral a los trabajos en clientes como ADIF, RENFE y METRO DE MADRID.
10. Elaboración de planes de emergencia y puesta en marcha de simulacros en los centros de trabajo. 
11. Gestión de la formación en P.R.L a personal base y de estructura de la empresa.
12. Investigación de accidentes laborales. Partes Delt@. 
13. Gestión de la información y formación en P.R.L a personal base y de estructura de la empresa. 
14. Entrega de EPIS a los trabajadores.
15. Evaluaciones específicas de higiene y ergonomía industrial, en especial Estudios Psicosociales 
16. Legalización de máquinas según 1215. 
17. CAE con plataformas de clientes tales como NALANDA, TGESTIONA, EGESTIONA, CTAIMA, etc`,
tags: ["SICE", "SICE SEGURIDAD", "TELSA", "SIMETSA"],
logo:sice,
},
{
id: 6,
title: "Coordinador del Servicio de Prevención Mancomunado SICE TECNOLOGIA Y SISTEMAS ",
date: "Enero, 2016",
description: `
1. Tareas propias como técnico de PRL con R.D. 1627/1997 para obras de construcción, ejm: Construcción de edificios ( Sede Central ACS, Colegios de la Junta de Andalucía, Hospital Virgen en Granada).
2. Mantenimiento de instalaciones eléctricas en la RED de CERCANIAS de RENFE en Madrid.Instalaciones eléctricas y de seguridad en todas las estaciones de METRO DE MA
1. Comunicar a la Autoridad Laboral, la estructura organizativa necesaria y obligatoria para la realización de las actividades preventivas.
2. Mantener informados a los técnicos de PRL del mancomunado de lo más significativo en materia preventiva.
3. Promover y participar en reuniones periódicas con los técnicos PRL de la mancomunidad para analizar y discutir temas de seguridad y salud.
4. Visitar periódicamente con los diferentes técnicos de PRL, los lugares de trabajo para poder estimular comportamientos eficientes, detectar deficiencias y trasladar interés por su solución.
5. Mostrar interés por los accidentes laborales acaecidos y por las medidas adoptadas para evitar su repetición.
6. Consultar a los técnicos de PRL del mancomunado en la adopción de decisiones que puedan afectar a la seguridad, salud y condiciones de trabajo.
7. Ayudar en la certificación y renovación de los sistemas de gestión de calidad, medio ambiente y PRL según normas UNE EN ISO 9001:2015, UNE EN ISO 14001:2015 y ISO 45001:2018 en las diferentes empresas de SICE TECNOLOGÍA Y SISTEMAS, S.A.
8. Auditor Interno de las Normas de Cumplimiento legal del Grupo SICE.`,
tags: ["SICE"],
logo:sice,
},
{
id: 7,
title: "Técnico de calidad sistemas y Técnico de PRL en la Factoría FICO CABLES (SORIA) ",
date: "Julio, 2004",
description: `

1. Tareas propias de Técnico de Calidad y de prevención de riesgos laborales para la UBN en Soria.
2. Implantación y Mantenimiento de ISO TS 16949:2002 con superación de la certificación por AENOR.
3. Evaluación de riesgos laborales en los puestos de cada línea de cada cliente: (IVECO, HONDA, PSA).
4. Investigación de accidentes laborales. Formación en P.R.L a personal de la empresa.
5. Formación de Calidad a operarios y auditorías internas de procesos productivos, además de formación.  Implementación de grupos de Mejora Continua. Aplicación directa de la metodología PDCA.
6. Monitoreo y control de indicadores de calidad: PPMs, Costes de No Calidad, etc.
7. Metodología 8Ds y 5 Whys.
8. Implantación de 5S en diferentes cadenas de la factoría.`,
tags: ["FICOSA"],
logo:ficosa,
},
    
];


export const publications: PublicationsType[] = [
    {
        link: "TITULACIÓN INGENIERÍA QUÍMICA. ESPECIALIDAD CONTROL E INSTRUMENTACIÓN EN PETROQUÍMICA (Junio, 2002)",
        content: "Facultad de Ciencias",
        duracion: "5 años"
       
    },
    {
        link: "MÁSTER EN GESTIÓN DE SISTEMAS INTEGRADOS DE CALIDAD, MEDIO AMBIENTE Y PRL (Octubre, 2003)",
        content: "Escuela de Negocios- Camara de Comercio de Valladolid",
        duracion: "1200 horas"
       
    },
    {
        link: "TÉCNICO SUPERIOR EN PREVENCIÓN DE RIESGOS LABORALES. ESPECIALIDAD SEGURIDAD (Octubre, 2003)",
        content: "Escuela de Negocios- Camara de Comercio de Valladolid",
        duracion: "600 horas"
       
    },
    {
        link: "TÉCNICO SUPERIOR EN PREVENCIÓN DE RIESGOS LABORALES. ERGONOMIA (Mayo, 2006)",
        content: "Instituto Madrileño Formación",
        duracion: "250 horas"
       
    },
    {
        link: "TÉCNICO SUPERIOR EN PREVENCIÓN DE RIESGOS LABORALES. HIGIENE INDUSTRIAL(Mayo, 2006)",
        content: "Instituto Madrileño Formación",
        duracion: "250 horas"
       
    },
    
    {
        link: "COORDINADOR DE SEGURIDAD Y SALUD EN OBRAS DE CONSTRUCCION (Diciembre, 2009)",
        content: "Facultad de Ciencias",
        duracion: "200 horas"
       
    },
    {
        link: "TECNICO EN ENERGIA SOLAR: TERMICA Y FOTOVOLTAICA (Noviembre, 2010)",
        content: "Confemetal",
        duracion: "130 horas"
       
    },
    {
        link: "INGENIERIA DE CALIDAD (Junio, 2013)",
        content: "Confemetal",
        duracion: "210 horas"
       
    },
    {
        link: "AUTOCAD (Marzo, 2025)",
        content: "EDUTIN ACADEMY",
        duracion: "180 horas"
       
    },
    
];
