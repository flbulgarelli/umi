<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<link rel="stylesheet" type="text/css" href="css/alignment.css">
<script src="js/alignment.js"></script>

<blockquote>
  Consigna: Alineá "BANANA" y "MANZANA"
</blockquote>

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

<script>
  sampleTable = new AlignmentTable($(".umi-alignment-table"));
</script>

