<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<link rel="stylesheet" type="text/css" href="css/alignment.css">
<script src="js/alignment.js"></script>

## Ejercicio 1

>  Consigna: Alineá "BANANA" y "MANZANA"

<table class="umi-alignment-table" >
  <tr class="umi-alignment-row"  data-align-expected="-BAN-ANA">
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
  </tr>
  <tr class="umi-alignment-row" data-align-expected="M-ANZANA">
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
  </tr>
  <tr class="umi-alignment-results">
      <td class="umi-alignment-result"></td>
      <td class="umi-alignment-result"></td>
      <td class="umi-alignment-result"></td>
      <td class="umi-alignment-result"></td>
      <td class="umi-alignment-result"></td>
      <td class="umi-alignment-result"></td>
      <td class="umi-alignment-result"></td>
      <td class="umi-alignment-result"></td>
  </tr>
</table>

## Ejercicio 2

>  Consigna: Alineá "ANA" y "ANANA"

<table class="umi-alignment-table" >
  <tr class="umi-alignment-row"  data-align-expected="--ANA">
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
  </tr>
  <tr class="umi-alignment-row" data-align-expected="ANANA">
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
  </tr>
  <tr class="umi-alignment-results">
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
  </tr>
</table>

## Ejercicio 3

>  Consigna: Alineá "ANA" y "ANANA"

<table class="umi-alignment-table" >
  <tr class="umi-alignment-row"  data-align-expected="--ANA" data-align-initial="A-N-A">
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
  </tr>
  <tr class="umi-alignment-row" data-align-expected="ANANA" data-align-initial="ANANA">
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
  </tr>
  <tr class="umi-alignment-results">
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
      <td class="umi-alignment-cell"></td>
  </tr>
</table>

<script>
  new AlignmentTable($($(".umi-alignment-table")[0]));
  new AlignmentTable($($(".umi-alignment-table")[1]));
  new AlignmentTable($($(".umi-alignment-table")[2]));
</script>

