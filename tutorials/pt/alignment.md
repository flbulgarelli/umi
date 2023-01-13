<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<link rel="stylesheet" type="text/css" href="../css/alignment.css">
<script src="../../js/umi.js"></script>

### Uma palavra não diz nada e ao mesmo tempo diz tudo

Desde o trabalho realizado por Kossel em 1898 (Kossel, 1898)​ em que afirmava que a função das proteínas poderia estar relacionada ao tipo de aminoácidos que a compõem e seu arranjo espacial, uma possível relação entre a função proteína, sua composição de aminoácidos. Após décadas de experimentos, Anfinsen finalmente confirmou que a sequência de aminoácidos continha a informação necessária para o enovelamento de uma proteína em uma conformação biologicamente ativa (Anfinsen et al., 1961). Neste estudo, Anfinsen e outros postularam que a conformação biologicamente ativa ou estrutura terciária poderia ser prevista a partir da estrutura primária de uma proteína. Também recentemente na história, mais precisamente em 1953, Watson e Crick propuseram um arranjo que estabiliza a estrutura primária do DNA e que, a posteriori, explicaria os diferentes mecanismos celulares envolvidos na expressão gênica (Watson e Crick 1953). Hoje sabemos que tanto a estrutura primária da proteína quanto a dos ácidos nucléicos fornecem informações relacionadas não apenas à sua estrutura e função, mas também nos fornecem informações sobre as características de um determinado organismo e sua relação evolutiva com outros organismos.


Existem diferentes mecanismos que explicam a biodiversidade, como mutações, duplicação de genes, reorganização de genomas e trocas genéticas, como recombinação, rearranjo e transferência lateral de genes. Variações aleatórias ocorrem em populações entre organismos individuais, variações não causadas pelo ambiente, que em alguns casos podem ser hereditárias. A interação de variações aleatórias e o ambiente determina o grau significativo em que os organismos se reproduzem e sobrevivem (seleção natural) e, portanto, as características da população. Dado tempo suficiente, a seleção natural leva ao acúmulo de mudanças que diferenciam grupos de organismos. A análise no nível molecular da evolução é em grande parte determinar como as proteínas e o material genético mudaram ao longo do tempo.

### Juntos


Duas sequências que compartilham um ancestral comum são chamadas de sequências **homólogas** (Reeck et al., 1987). Embora muitas vezes seja usado incorretamente, a homologia é qualitativa. Moléculas homólogas, ou homólogas, podem ser divididas em duas classes: parálogas, que são homólogas presentes em uma espécie e muitas vezes diferem em suas funções bioquímicas detalhadas; e ortólogos são homólogos que estão presentes em diferentes espécies e têm funções muito semelhantes ou idênticas. Compreender a homologia entre moléculas pode revelar sua história evolutiva, bem como informações sobre sua função; Se uma proteína recém-sequenciada for homóloga a uma proteína já caracterizada, temos uma forte indicação da função bioquímica da nova proteína. A predição da homologia é realizada extraindo das sequências as informações conservadas durante a evolução, para o que é necessário comparar as sequências para identificar os resíduos que elas têm em comum.

> 👉 PARA REFLETIR: Que tipo de informação pode ser extraída da comparação de sequências? Como você espera que pareça em uma comparação? 🤔


No entanto, é importante observar que dois genes podem acumular um grande número de alterações ao longo do tempo, portanto, os próprios dados da sequência podem não conter informações suficientes sobre a relação entre eles. Portanto, o termo homologia é usado apenas quando o ancestral comum é recente o suficiente para que a informação da sequência retenha semelhança suficiente para fazer inferências evolutivas (Park et al. 1998). Para avaliar relacionamentos evolutivos distantes, geralmente é melhor compará-los no nível de sequências de proteínas, enquanto para relacionamentos mais próximos, as sequências de ácidos nucléicos que os codificam geralmente são usadas, uma vez que geralmente são menos informativas do que as sequências de proteínas (Pearson, dezenove noventa e seis). É importante notar que a conclusão de que dois (ou mais) genes ou proteínas são homólogos é uma conjectura ou inferência, derivada de múltiplos cálculos, não um fato experimental. Mas como não há registro fóssil de formas extintas, a relação evolutiva entre dois genes é definida com base na semelhança entre eles.

> 👉 PARA REFLETIR: Por que você acha que é melhor avaliar relações evolutivas distantes comparando proteínas? 🤔


### Semelhante não é igual


Conforme explicado acima, a maneira de encontrar relações evolutivas entre duas sequências e avaliar a similaridade entre elas envolve a comparação posição por posição entre elas. Embora as sequências de proteínas e ácidos nucleicos possam ser consideradas como texto ou cadeias de caracteres, o processo de alinhar duas sequências não é tão simples quanto colocar uma sequência em cima da outra e comparar coluna por coluna se houver correspondência entre os resíduos ( ou personagens). Porque? Bem, porque como dissemos antes, ao longo do tempo as sequências podem sofrer mutações, inserções e deleções, e a consideração dessas mudanças não é trivial.


Para começar a pensar nas complexidades dessa análise, vamos começar com um exemplo simples de comparação de duas sequências de "linguagem não celular". Suponha que queremos alinhar duas palavrinhas (cadeias de caracteres ou strings): "BANANA" e "MAÇÃ". Se prestarmos atenção a essas duas palavras, podemos notar uma diferença substancial entre elas, o que dificulta nossa análise. Você percebe o que queremos dizer? Exato! Para a diferença de comprimento!

> 👇 DESAFIO I: Vamos tentar, então, alinhar essas duas palavras, para entender melhor o problema. Alinhe as palavras "BANANA" e "APPLE" na tabela de comparação a seguir
> Tome nota das suas observações e das conclusões que emergem dessas observações!

> ☑️ PERGUNTAS GATILHO: Só existe uma maneira de alinhá-los? Um dos possíveis alinhamentos é melhor que outro? Em caso afirmativo, por quê?

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

> ☑️ PERGUNTAS GATILHO: O que representam esses traços?


Agora, como dissemos, o objetivo do alinhamento de sequências é poder inferir relações evolutivas entre elas e avaliar sua similaridade. No entanto, ser capaz de avaliar a semelhança entre duas sequências pode levar a algumas dificuldades. Em primeiro lugar, vamos definir um conceito que pode nos ser útil nesse sentido, _identidade_. Isso é definido como a soma de resíduos idênticos em posições equivalentes em duas sequências alinhadas.

> 👇 DESAFIO II: Na tabela a seguir, tente diferentes alinhamentos para as palavras "ANA" e "ANANA". Você verá que na margem superior esquerda há um valor de identidade calculado para cada alinhamento que você tentar.
> Tome nota dos valores de identidade observados e das conclusões tiradas dessas observações.

> ☑️ PERGUNTAS DE ACIONAMENTO: Os valores são todos iguais? Que considerações devem ser levadas em conta ao fazer o cálculo? Você consegue pensar em diferentes maneiras de calculá-lo? Serão todos igualmente válidos em Biologia?

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

Definimos a _identidade_ e começamos a entender as implicações da introdução desses hífens, que chamaremos de "lacunas" a partir de agora. A presença de gaps, que introduzem gaps no alinhamento, representam inserções e deleções. E como eles podem intuir, a abertura de uma lacuna em uma posição ou outra ou a persistência de mais de uma lacuna no alinhamento, tem suas implicações.

> 👇 DESAFIO III: Na tabela a seguir, experimente diferentes alinhamentos para as palavras "ANA" e "ANANA". Você verá que na margem superior esquerda existe um valor de identidade calculado para cada alinhamento que você tentar e um botão para alterar a penalidade que é concedida ao referido para o cálculo de _identity_
> Experimente várias combinações, observe os valores de identidade observados e as conclusões tiradas dessas observações.

> ☑️ PERGUNTAS DESENCADEADORAS: Como os valores de identidade obtidos se relacionam com as penalidades impostas ao gap? Que implicações você acha que uma penalidade de gap mais alta tem? Você consegue pensar em alguma outra forma de penalidade que não tenha sido considerada neste exemplo?

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

Agora que conseguimos pensar amplamente sobre as implicações da lacuna em um alinhamento, vamos voltar ao contexto biológico. Como bem sabemos, em 1958 Crick levantou o dogma central da genética, onde estabeleceu que o fluxo de informação vai do DNA para o RNA, e deste para as proteínas. A expressão gênica, com suas etapas de transcrição e tradução, possibilita a obtenção de proteínas a partir das informações codificadas no DNA. Sabemos também que o código genético é composto por 64 combinações de tripletos de nucleotídeos (códons), que correspondem aos diferentes aminoácidos, e que orientam a decodificação da “mensagem” ou “informação” fornecida pelos genes para a síntese de proteínas.

> 👉 PARA REFLETIR: Então, pensando em um alinhamento de ácidos nucléicos, quais você acha que são as implicações de abrir uma lacuna no alinhamento? O que implicaria a inserção ou deleção de uma região com mais de um resíduo?

> 👇 DESAFIO IV: Na tabela a seguir, tente diferentes alinhamentos para as sequências de nucleotídeos. Você poderá ver as traduções para cada sequência.
> Experimente várias combinações, tome nota das observações e das conclusões que delas resultam.
> Instrução: Alinhe "TGCGAGG" e "TGCCGAAGG" e veja as traduções

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
    <tr class="umi-alignment-row"  data-align-expected="TGC-G-AGG" data-align-initial="TGCGAGG--">
      <td class="umi-alignment-word-result"></td>
    </tr>
    <tr class="umi-alignment-translations" data-translation-expected="C-R">
      <td class="umi-alignment-translations-result"></td>
    </tr>
    <tr class="umi-alignment-row" data-align-expected="TGCCGAAGG" data-align-initial="TGCCGAAGG">
      <td class="umi-alignment-word-result"></td>
    </tr>
    <tr class="umi-alignment-translations" data-translation-expected="CRR">
      <td class="umi-alignment-translations-result"></td>
    </tr>
    <tr class="umi-alignment-translation-results">
      <td class="umi-alignment-general-result"></td>
    </tr>
  </table>

  <div class="umi-alignment-card-results">
    <span class="umi-alignment-card-result" ></span>
  </div>
</div>


> Aviso: _Tente_ alinhar "AGGGGA" e "TGCAGAGGG" e veja as traduções


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
    <tr class="umi-alignment-row"  data-align-expected="---AGGGGA" data-align-initial="AGGGGA----">
      <td class="umi-alignment-word-result"></td>
    </tr>
    <tr class="umi-alignment-translations" data-translation-expected="-RG" data-translation-type="ADN">
      <td class="umi-alignment-translations-result"></td>
    </tr>
    <tr class="umi-alignment-row" data-align-expected="TG-AGAGGG" data-align-initial="TGAGAGGG-">
      <td class="umi-alignment-word-result"></td>
    </tr>
    <tr class="umi-alignment-translations" data-translation-expected="-RG" data-translation-type="ADN">
      <td class="umi-alignment-translations-result"></td>
    </tr>
    <tr class="umi-alignment-translation-results">
      <td class="umi-alignment-general-result"></td>
    </tr>
  </table>

  <div class="umi-alignment-card-results">
    <span class="umi-alignment-card-result" ></span>
  </div>
</div>

> 👉 PARA REFLETIR: Importa se o gap que você introduz cai na primeira, segunda ou terceira posição do códon? Como você ponderaria as observações neste exercício para avaliar a similaridade entre duas sequências?

Outra forma de estimar a similaridade entre duas sequências pondera essas implicações na presença de inserções e deleções que estávamos avaliando, bem como pontuações que ponderam as mudanças de um caractere por outro de forma diferencial. Porque? Porque se falamos de nucleotídeos ou aminoácidos, você concordará que não é indistinto trocar um pelo outro. Uma mutação em um aminoácido pode, por exemplo, gerar uma mudança drástica na polaridade de uma região da proteína ou envolver uma alteração em sua estrutura secundária. Assim, poderíamos estimar a <i>semelhança</i> existente entre duas sequências, como a soma dos escores correspondentes aos resíduos em posições equivalentes em duas sequências alinhadas. Tabelas de pontuações de substituição de um resíduo por outro são chamadas de <i>matrizes de substituição</i> e são construídas levando em consideração as mudanças observadas em sequências conhecidas.


Margaret Dayhoff desenvolveu as matrizes PAM para aminoácidos, baseadas nas sequências de proteínas que ela compilou ao longo de uma década, publicadas como Atlas of Protein Sequence and Structure (Dayhoff, 1978).
Nas matrizes PAM, cada elemento da matriz Mij quantifica a probabilidade de um aminoácido i ser substituído por outro aminoácido j no intervalo evolutivo de 1 PAM (1 PAM é definido como o intervalo evolutivo em que 1% dos aminoácidos mudança no alinhamento de 2 sequências). Essas mutações foram identificadas comparando sequências altamente semelhantes com pelo menos 85% de identidade, e assume-se que quaisquer substituições observadas foram o resultado de uma única mutação entre a sequência ancestral e uma das sequências atuais. As matrizes de substituição são utilizadas como parâmetros dos algoritmos de alinhamento de sequências de proteínas, de forma a poder atribuir uma pontuação a cada alinhamento possível, e assim poder escolher o melhor. No caso de alinhamentos de nucleotídeos, um sistema de pontuação muito mais simples é freqüentemente usado.

<img src="../../static/alignment/pam1.png"></img>

<p style='tamanho da fonte: 12px ; '>Figura retirada do trabalho: <i>A Model of Evolutionary Change in Proteins.</i> Dayhoff, M.O., R.M. Schwartz e B.C. Orcutt. 1978. Atlas of Protein Sequence and Structure Vol. 5, suppl. 3. Fundação Nacional de Pesquisa Biomédica, Washington, D.C.</p>

Agora, mesmo quando conseguimos encontrar a melhor pontuação para o nosso alinhamento, como saber se esse alinhamento tem relevância biológica, ou seja, se essas duas sequências são homólogas, ou o alinhamento é fruto do acaso? Para cada alinhamento pode ser estimada uma probabilidade ou significância estatística que nos permite estimar a imprecisão das medidas de similaridade e identidade, comparando o resultado obtido com o esperado se as sequências fossem alinhadas aleatoriamente.

👀 É importante observar que a significância estatística não garante certeza!

### Tipos de alineamientos


Existem diferentes ferramentas para alinhar sequências, que podemos classificar em dois tipos:

   * Global: alinhamento da sequência completa. É útil ao comparar sequências muito semelhantes em tamanho e composição, por exemplo, de dois genes altamente conservados.
   * Local: quando estamos interessados ​​apenas em alinhar regiões semelhantes entre sequências. É usado quando as sequências a serem comparadas são diferentes em tamanho ou possuem regiões não conservadas.

Um dos algoritmos mais importantes para encontrar alinhamentos globais é o algoritmo Needleman-Wunsch. Este é um exemplo de algoritmo de programação dinâmica, que subdivide problemas de cálculo, garantindo que encontre a solução ótima para 2 sequências dadas. Isso usa uma matriz quadrada para atribuir pontuações para os diferentes alinhamentos possíveis, dada uma pontuação para correspondências, incompatibilidades e lacunas; e, em seguida, retrocedendo ao longo da melhor escalação possível (com maior pontuação).

Também existem ferramentas que permitem comparações de sequências pareadas e alinhamentos múltiplos:

   * Um par de sequências: mede a semelhança entre duas sequências
   * Alinhamento múltiplo: compare mais de duas sequências ao mesmo tempo

Em ambos os casos o alinhamento pode ser local ou global, o que implicará algumas limitações de utilização para cada caso.

> 👉 PARA PENSAR: Em que casos um ou outro tipo de alinhamento será útil? Que limitações cada um terá?

<script>
  umi.alignment.start();
</script>
