<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<link rel="stylesheet" type="text/css" href="css/alignment.css">
<script src="js/alignment.js"></script>

## Ejercicio 1

>  Consigna: Alineá "BANANA" y "MANZANA"

<table class="umi-alignment-table" >
  <tr class="umi-alignment-row"  data-align-expected="-BAN-ANA"></tr>
  <tr class="umi-alignment-row" data-align-expected="M-ANZANA"></tr>
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
  <tr class="umi-alignment-row"  data-align-expected="--ANA"></tr>
  <tr class="umi-alignment-row" data-align-expected="ANANA"></tr>
  <tr class="umi-alignment-results">
      <td class="umi-alignment-result"></td>
      <td class="umi-alignment-result"></td>
      <td class="umi-alignment-result"></td>
      <td class="umi-alignment-result"></td>
      <td class="umi-alignment-result"></td>
  </tr>
  <tr>
    <td class="umi-alignment-identity-level">
  </tr>
</table>

## Ejercicio 3

>  Consigna: Alineá "ANA" y "ANANA"

<table class="umi-alignment-table" >
  <tr class="umi-alignment-row"  data-align-expected="--ANA" data-align-initial="A-N-A"></tr>
  <tr class="umi-alignment-row" data-align-expected="ANANA" data-align-initial="-"></tr>
  <tr class="umi-alignment-results">
      <td class="umi-alignment-result"></td>
      <td class="umi-alignment-result"></td>
      <td class="umi-alignment-result"></td>
      <td class="umi-alignment-result"></td>
      <td class="umi-alignment-result"></td>
  </tr>
</table>

<script>
  umi.alignment.start();
</script>

