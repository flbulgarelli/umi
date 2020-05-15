<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<link rel="stylesheet" type="text/css" href="css/alignment.css">
<script src="js/alignment.js"></script>

### **UNA PALABRA NO DICE NADA Y AL MISMO TIEMPO LO DICE TODO**
<p class='informative-text'>
Desde los trabajos realizados por Kossel en 1898 (Kossel, 1898)​ en el que describe plantea que la función de las proteı́nas podrı́a estar relacionada con el tipo de aminoácidos que la componen y su disposicion espacial, se empieza a intuir una posible relación entre la función proteica, su composición aminoacídica. Luego de décadas de experimentos, Anfinsen finalmente confirma que la secuencia aminoacídica contenía la información necesaria para el plegamiento de una proteína en una conformación biológicamente activa (Anfinsen et al., 1961)​. En dicho estudio, Anfinsen y colaboradores postularon que a partir de la estructura primaria de una proteína podría ser predicha la conformación o estructura terciaria biológicamente activa. También recientemente en la historia, más precisamente en 1953, Watson y Crick proponen un arreglo que estabiliza la estructura primaria del ADN y que, a posteriori, permitiría explicar los distintos mecanismos celulares involucrados en la espresión génica (Watson and Crick 1953). Hoy en día sabemos que tanto la estructura primaria proteica, cómo la de de ácidos nucleicos, aportan información relativa no solo a su estructura y función, si no que nos proveen información sobre las características un organismo dado y su relación evolutiva con otros organismos.
</p>
<p class='informative-text'>
Existen diferentes mecanismos que explican la biodiversidad, como las mutaciones, la duplicación de genes, reorganización de genomas e intercambios genéticos como recombinación, reordenamiento y transferencia lateral de genes. En las poblaciones ocurren variaciones aleatorias entre los organismos individuales, variaciones no ocasionadas por el ambiente, que en algunos casos pueden ser heredables. La interacción de las variaciones al azar y el ambiente determina el grado significativo en el que los organismos se reproducen y sobreviven (selección natural), y por tanto las características de la población. Dado suficiente tiempo, la selección natural lleva a la acumulación de cambios que diferencian los grupos de organismos. El análisis a nivel molecular de la evolución consiste en gran medida en determinar cómo las proteínas y el material genético se han transformado a través del tiempo.
</p>

### **JUNTAS A LA PAR**
<p class='informative-text'>
Dos secuencias que comparten un ancestro común se denominan secuencias **homólogas** (Reeck et al., 1987). Aunque suele utilizarse muy frecuentemente de modo incorrecto, la homología es cualitativa. Las moléculas homólogas, u homólogos, se pueden dividir en dos clases: parálogos, que son homólogos que están presentes dentro de una especie y que suelen difierir en sus funciones bioquímicas detalladas; y ortólogos son homólogos que están presentes dentro de diferentes especies y tienen funciones muy similares o idénticas. Comprender la homología entre las moléculas puede revelar la historia evolutiva de las mismas, así como información sobre su función; Si una proteína recién secuenciada es homóloga a una proteína ya caracterizada, tenemos una fuerte indicación de la función bioquímica de la nueva proteína. La predicción de homologı́a se realiza extrayendo de las secuencias la información conservada durante la evolución, para lo que resulta necesario la comparación de las secuencias para identificar los residuos que tienen en común.
</p>
<p class='pensar'>
👉 PARA PENSAR: ¿Qué tipo de información se puede extraer de la comparación de secuencias? ¿Cómo esperás que se vea en una comparación?  🤔
</p>

<p class='informative-text'>
Sin embargo, es importante tener en cuenta que con el tiempo dos genes pueden acumular una gran cantidad de cambios, de modo que puede que los datos de la secuencia en sí mismos no contengan suficiente información sobre la relación entre ellos. Por lo que el término homología se usa solo cuando el antepasado común es lo suficientemente reciente como para que la información de la secuencia haya retenido suficiente similitud como para hacer inferencias evolutivas (Park et al. 1998). Suele ser mejor para evaluar relaciones evolutivas lejanas la comparación a nivel de secuencias de proteinas, mientras que para relaciones más cercanas suelen utilizarse las secuencias de acidos nucleicos que codifican para las mismas, ya que estas suelen ser menos informativas que las secuencias proteicas (Pearson, 1996). Es importante tener en cuenta que la conclusión de que dos (o más) genes o proteínas son homólogos es una conjetura o inferencia, que se derivan de múltiples cálculos, no es un hecho experimental. Pero como no existe un registro fósil de las formas extintas, se define la relación evolutiva entre dos genes sobre la base de la similitud entre ellos.
</p>

<p class='pensar'>
👉 PARA PENSAR: ¿Por qué crees que es mejor evaluar las relaciones evolutivas lejanas comparando proteínas? 🤔
</p>


### **PARECIDO NO ES LO MISMO**
<p class='informative-text'>
Como se explicó anteriormente, la forma de encontrar relaciones evolutivas entre dos secuencias y evaluar el parecido entre ellas implica la comparación posición a posición entre ambas. Si bien, las secuencias proteicas y de ácidos nucleicos pueden ser pensads como textos, o cadenas de caracteres, el proceso de alinear dos secuencia no es tan sencillo como poner una secuencia encima de otra y comparar columna a columna si existe concordancia entre los residuos (o caracteres). ¿Por qué? Pus porque como dijimos antes, a lo largo del tiempo las secuencias pueden  mutaciones, inserciones y deleciones, y la consideración de estos cambios no es resulta trivial.
</p>
<p class='informative-text'>
Para comenzar a pensar sobre las complejidades que reviste este análisis comencemos con un ejemplo sencillo, de comparación de dos secuencias de "lenguaje no celular". Supongamos que queremos alinear dos pequeñas palabras (cadenas de caracteres o strings): "BANANA" y "MANZANA". Si prestamos atención a estas dos palabras podemos notar una diferencia sustancial entre ellas, que nos complica por sobre manera el análisis. ¿Se dan cuenta a qué nos referimos? ¡Exacto! ¡A la diferencia de longitud!
</p>

<p class='reto'> 👇 RETO I: Intentemos, entonces alinear estas dos palabras, para comprender mejor el problema. Alineá en la siguiente table de comparaciones las palabras "BANANA" y "MANZANA".</p>
<p class='reto'> ¡Tomá nota de tus observaciones y de las conclusiones que se desprendan de estas observaciones! </p>
<p class='disparadores'>
 ☑️ PREGUNTAS DISPARADORAS: ¿Existe una única forma de alinearlas? ¿Es alguno de los posibles alineamientos mejor que otro? Si así fuera ¿Por qué?
</p>

<div class="umi-alignment-card">
  <table class="umi-alignment-table">
    <tr class="umi-alignment-row"  data-align-expected="-BAN-ANA">
      <td class="umi-alignment-word-result"></td>
    </tr>
    <tr class="umi-alignment-row" data-align-expected="M-ANZANA">
      <td class="umi-alignment-word-result"></td>
    </tr>
    <tr class="umi-alignment-results">
      <td class="umi-alignment-general-result"></td>
    </tr>
  </table>

  <div class="umi-alignment-card-results">
    <span class="umi-alignment-card-result"></span>
  </div>
</div>

<p class='disparadores'>
 ☑️ PREGUNTAS DISPARADORAS: ¿Qué representan esos guiones?
</p>

<p class='informative-text'>
Ahora bien, como bien dijimos el objetivo de alinear secuencias es el de poder inferir relaciones evolutivas entre ellas y evaluar su parecido. Sin embargo, poder evaluar el parecido entre dos secuencias pude collevar algunas dificultades. En primera instancia definamos un concepto que nos puede ser útil en este sentido, la <i>identidad</i>. Este se define como la suma de residuos idénticos en posiciones equivalentes en dos secuencias alineadas.
</p>
<p class='reto'> 👇 RETO II: En la siguiente tabla probá distintos alineamientos para las palabras "ANA" y "ANANA". Verás que en el margen superior izquierdo aparece un valor de identidad calculado para cada alineamitno que intentes. </p>
<p class='reto'> Tomá nota de los valores de identidad observados y de las conclusiones que se desprendan de estas observaciones. </p>
<p class='disparadores'>
 ☑️ PREGUNTAS DISPARADORAS: ¿Son todos los valores iguales? ¿Qué consideraciones deberían tenerse en cuenta a la hora de realizar el cálculo? ¿Se te ocurre, distintas formas de calcularlo? ¿Serán todas ellas igualmente válidas en Biología?
</p>


<div class="umi-alignment-card">
  <div class="umi-alignment-inputs">
    <div class="umi-alignment-input">
      <label for="umi-alignment-gap-penalty-1">Penalidad</label>
      <input id="umi-alignment-gap-penalty-1" class="umi-alignment-gap-penalty" type="number" min="0" value="0">
    </div>
    <div class="umi-alignment-input">
      <label for="umi-alignment-identity-level-1">Identidad</label>
      <span id="umi-alignment-identity-level-1" class="umi-alignment-identity-level"></span>
    </div>
  </div>

  <table class="umi-alignment-table">
    <tr class="umi-alignment-row"  data-align-expected="--ANA">
      <td class="umi-alignment-word-result"></td>
    </tr>
    <tr class="umi-alignment-row" data-align-expected="ANANA">
      <td class="umi-alignment-word-result"></td>
    </tr>
    <tr class="umi-alignment-results">
      <td class="umi-alignment-general-result"></td>
    </tr>
  </table>

  <div class="umi-alignment-card-results">
    <span class="umi-alignment-card-result"></span>
  </div>
</div>

<p class='informative-text'>Hemos definido la <i>identidad</i> y hemos comenzado a entender las implicancias de introducir esos guiones, que de ahora en más llamaremos "gaps". La presencia de gaps, que introducen huecos en el alineamiento, representan las inserciones y deleciones. Y cómo pueden intuir, la apertura de un gap en una u otra posición o la persistencia de más de un gap en el alineamiento, tiene sus implicancias. </p>

<p class='reto'> 👇 RETO III: En la siguiente tabla probá distintos alineamientos para las palabras "ANA" y "ANANA". Verás que en el margen superior izquierdo aparece un valor de identidad calculado para cada alineamitno que intentes y un botón para cambiar la penalidad que se le otorga a dicho para el cálculo de <i>identidad</i>.</p>
<p class='reto'> Probá varias combinaciones, tomá nota de los valores de identidad observados y de las conclusiones que se desprendan de estas observaciones. </p>

<p class='disparadores'>
 ☑️ PREGUNTAS DISPARADORAS: ¿Cómo se relacionan los valores de identidad obtenidos con las penalizaciones que se imponen al gap? ¿Qué implicancias crees que tiene una mayor penalización de gaps? ¿Se te ocurre alguna otra forma de penalización que no haya sido tenido en cuenta en este ejemplo?
</p>

<div class="umi-alignment-card">
  <div class="umi-alignment-inputs">
    <div class="umi-alignment-input">
      <label for="umi-alignment-gap-penalty-1">Penalidad</label>
      <input id="umi-alignment-gap-penalty-1" class="umi-alignment-gap-penalty" type="number" min="0" value="1">
    </div>
    <div class="umi-alignment-input">
      <label for="umi-alignment-identity-level-1">Identidad</label>
      <span id="umi-alignment-identity-level-1" class="umi-alignment-identity-level"></span>
    </div>
  </div>

  <table class="umi-alignment-table">
    <tr class="umi-alignment-row"  data-align-expected="--ANA">
      <td class="umi-alignment-word-result"></td>
    </tr>
    <tr class="umi-alignment-row" data-align-expected="ANANA">
      <td class="umi-alignment-word-result"></td>
    </tr>
    <tr class="umi-alignment-results">
      <td class="umi-alignment-general-result"></td>
    </tr>
  </table>

  <div class="umi-alignment-card-results">
    <span class="umi-alignment-card-result"></span>
  </div>
</div>

<p class='informative-text'> Ahora que pudimos pensar en forma general las implicancias de abrir gaps en un alineamiento, situémonos nuevamente en el contexto biológico. Cómo bien sabemos, en 1958 Crick plantea el dogma central de la genética, donde establece que el flujo de información va del ADN al ARN, y de éste a las proteínas. La expresión génica, con sus pasos de transcripción y traducción, permite obtener proteínas a partir de la información codificada en el ADN. Sabemos, además, que el código genético consiste en 64 combinaciones de tripletes (codones) de nucleótiudos, que se corresponden con los distintos aminoácidos, y que guía la decodificación del "mensaje" o "información" que aportan los genes para la síntesis de proteínas. </p>

<p class='pensar'>
👉 PARA PENSAR: Entonces, pensando en un alineamiento de ácidos nucleicos ¿Cuáles te parece que son las implicancias de abrir un gap en el alineamiento? ¿Qué implicaría la inserción o deleción de una región de más de un residuo?
</p>

<p class='reto'> 👇 RETO IV: En la siguiente tabla probá distintos alineamientos para las secuencias nucleotídicas. Podrás ver las traducciones para cada secuencia.</p>
<p class='reto'> Probá varias combinaciones, tomá nota de las observaciones y de las conclusiones que se desprendan de estas. </p>


  <div class="umi-alignment-card-results">
    <span class="umi-alignment-card-result" ></span>
  </div>
</div>

>  Consigna: Alineá "AGCGGT" y "TGCAGAGGG" y mirá las traducciones

<div class="umi-alignment-card" style="width: 84%">
   <div class="umi-alignment-inputs">
    <div class="umi-alignment-input">
      <label for="umi-alignment-gap-penalty-2">Penalidad</label>
      <input id="umi-alignment-gap-penalty-2" class="umi-alignment-gap-penalty" type="number" min="0" value="0">
    </div>


  <div class="umi-alignment-input">
      <label for="umi-alignment-identity-level-2">Identidad</label>
      <span id="umi-alignment-identity-level-2" class="umi-alignment-identity-level"></span>
    </div>
  </div>

  <table class="umi-alignment-table" >
    <tr class="umi-alignment-results">
      <td class="umi-alignment-general-result"></td>
    </tr>
    <tr class="umi-alignment-row"  data-align-expected="---AGCGGT" data-align-initial="AGCGGT----">
      <td class="umi-alignment-word-result"></td>
    </tr>
    <tr class="umi-alignment-translations" data-translation-expected="SG-">
      <td class="umi-alignment-translations-result"></td>
    </tr>
    <tr class="umi-alignment-row" data-align-expected="TGCAGAGGG" data-align-initial="TGCAGAGGG">
      <td class="umi-alignment-word-result"></td>
    </tr>
    <tr class="umi-alignment-translations" data-translation-expected="CRG">
      <td class="umi-alignment-translations-result"></td>
    </tr>
    <tr class="umi-alignment-translation-results">
      <td colspan="3">-</td>
      <td colspan="3">-</td>
      <td colspan="3">-</td>
      <td class="umi-alignment-translation-general-result"></td>
    </tr>
  </table>

  <div class="umi-alignment-card-results">
    <span class="umi-alignment-card-result" ></span>
  </div>
</div>

<p class='pensar'>
👉 PARA PENSAR: ¿Dá lo mismo si el gap que introducís cae en la primera, segunda o tercer posición del codón? ¿Cómo ponderarías las observaciones de este ejercicio para evaluar el parecido entre dos secuencias?
</p>

<p class='informative-text'>Otra forma de estimar el parecido entre dos secuencias pondera estas implicancias en la presencia de inserciones y deleciones que estuvimos evaluando, además de puntuaciones que ponderen los cambios de un caracter por otro de forma diferencial. ¿Por qué? Porque si hablamos de nucleótidos o aminoácidos estarán de acuerdo que no es indistinto cambiar uno por otro. Una mutación en un aminoácido puede, por ejemplo, generar un cambio drástico en la polaridad de una región de la proteína o implicar un cambio a nivel de su estructura secundaria. Por lo tanto, podríamos estimar la <i>similitud</i> que existe entre dos secuencias, como la suma de puntuaciones correspondientes a residuos en posiciones equivalentes en dos secuencias alineadas. Las tablas de puntuaciones de sustitución de un residuo por otro se denominan <i>matrices de sustitución</i>, y se construyen teniendo en cuenta los cambios observados en secuencias conocidas. </p>
<p class='informative-text'> Margaret Dayhoff desarrolló las matrices PAM para aminoácidos, que se basan en las secuencias de proteínas que había compilado durante una década, publicadas como el Atlas de secuencia y estructura de proteínas (Dayhoff, 1978).
En las matrices PAM cada elemento de la matriz Mij cuantifica la probabilidad de que un aminoácido i sea reemplazado por otro aminoácido j en el intervalo evolutivo de 1 PAM (1 PAM se define como el intervalo evolutivo en que cambia un 1% de los aminoácidos en el alineamiento de 2 secuencias).Estas mutaciones se identificaron comparando secuencias muy similares con al menos un 85% de identidad, y se supone que cualquier sustitución observada fue el resultado de una única mutación entre la secuencia ancestral y una de las secuencias actuales. Las matrices de sustitución se utilizan como parámetros de los algoritmos de alineamientos de secuencias proteicas, de forma de poder asignarle una puntuación a cada posible aliniamiento, y de este modo poder elegir el mejor. En el caso de los alineamientos de nucleótidos, suelen utilizarse un sistema de puntuación mucho más simple.</p>
<img src="pam1.png"></img>


<p style='font-size: 12px ; '>Figura extraída del trabajo: <i>A Model of Evolutionary Change in Proteins.</i> Dayhoff, M.O., R.M. Schwartz, and B.C. Orcutt. 1978. Atlas of Protein Sequence and Structure Vol. 5, suppl. 3. National Biomedical Research Foundation, Washington, D.C.</p>

<p class='informative-text'> Ahora bien, aún cuando seamos capaces de encontrar el mejor puntaje para nuestro alineamiento ¿cómo sabemos si este alineamiento tiene relevancia biológica, es decir que estas dos secuencias son homólogas, o el alineamiento es fruto del azar? Se puede estimar para cada alineamiento una probabilidad o signifiacación estadística que nos permita estimar la inexactitud de las medidas de similitud e identidad, comparando el resultado obtenido con el esperado si las secuencias fueran alineadas al azar.</p>

 👀 ¡Es importante tener en cuenta, que una significación estadı́stica no garantiza certeza!

### **TIPOS DE ALINEAMIENTOS**
<p class='informative-text'>
Existen distintas herramientas para alinear secuencias, que podríamos clasificar en dos tipos:

> - Global: alineamiento de la secuencia completa. Es útil cuando se comparan secuencias muy similares en tamaño y composición, por ejemplo de dos genes muy conservados.
> - Local: cuando sólo nos interesa alinear regiones similares entre secuencias. Se utiliza cuando las secuencias a comparar son diferentes en tamaño o poseen regiones no conservadas
</p>

<p class='informative-text'> Un de los más importantes algoritmos para encontrar alineamientos globales es el de Needleman-Wunsch. Este es un ejemplo de algoritmo de programación dinámica, que subdivide los problemas de cálculo, asegurando encontrar la solución óptima para 2 secuencias dadas. Este utiliza una matriz cuadrada para asignar puntuación para los distintos alineamientos posibles, dada una puntuación para matches, mismatches y gaps; y luego retrocediendo a lo largo de la mejor alineación posible (de mayor puntuación).
</p>
<p class='informative-text'> Asimismo existen herramientas que permiten tanto comparaciones de secuencias de a pares y o realizar alineamientos múltiples:

> - A pares de secuencias: mide la similitud entre dos secuencias.

> - Alineamiento múltiple: compara más de dos secuencias al mismo tiempo. 

En ambos casos el alineamiento puede ser local o global, lo que supondrá algunas limitaciones de uso para cada caso.
</p>

<p class='pensar'>
👉 PARA PENSAR: ¿En qué casos serán de utilidad uno u otro tipo de alineamientos? ¿Qué limitaciones tendrá cada uno?
</p>


<script>
  umi.alignment.start();
</script>

